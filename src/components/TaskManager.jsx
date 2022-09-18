import React, { useState, useEffect } from "react";
import { useRef } from "react";
//import { useContext } from "react";
//import { useEffect } from "react";
//import { Link, Routers , Route } from "react-router-dom";
import axios from "axios";
import GeneralDetails from "./subcomponents/GeneralDetails";
import Troubleshoot from "./subcomponents/Troubleshoot";
import Amendment from "./subcomponents/Amendment";
import OnlineSupport from "./subcomponents/OnlineSupport";
import ChangeLocation from "./subcomponents/ChangeLocation";
import LogMessage from "./subcomponents/LogMessage";
import { Details, MainDetails } from "./subcomponents/Details";
import Members from "./subcomponents/Members";
import $ from 'jquery'
// import { isAccordionItemSelected } from "react-bootstrap/esm/AccordionContext";
// import { GetUrl } from "./services"

export function getDetails(...data) {
  console.log(data)
}

export default function TaskManager(props) {

  $(function () {
    $('[data-toggle="tooltip"]').tooltip()
  })

  // console.log(props);

  let contractState = {
    contract_no: "",
    full_name: "",
    contract: "",
    organization: "",
    address: "",
    package: "",
  };

  let taskProjectState = {
    selectedProject: "",
  };

  let switchInitialState = {
    switch: false,
  };


  const url = process.env.REACT_APP_CONTRACT;
  // const token = useContext(Context);
  const [contract, setContract] = useState(contractState);
  const [project, setProject] = useState(taskProjectState);
  let [switchState, setSwitchState] = useState(switchInitialState);
  let contratsLength = 0;
  const contractNoRef = useRef();
  const projectRef = useRef();

  function handleChange(event) {
    setProject({ selectedProject: event.target.value });
    console.log(event.target.value);
  }
  //   const TASK_URL = process.env.REACT_APP_TASK
  // const token1 = '8baabc24a9c1a2f3c26d4b7775d45c12f6e4d67c'

  //   axios.get(TASK_URL, {
  //     headers: {
  //         Authorization: token1
  //     }
  // }).then (res => {
  //     console.log(res.data.results)
  // })
  // GetUrl();


  function handleSwitch(e) {
    // console.log(switchState)
    // setSwitchState({
    //   ...switchState,
    //   switch: !e.target.value
    // })
    // console.log({switchState})
    let isChecked = e.target.checked;
    console.log(isChecked);
  }
  const token = "ABCdeadjfai"
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.get(
        url + `?contract-no=${contractNoRef.current.value}`,
        {
          headers: {
            Authorization: "Token " + token.user.token,
          },
        }
      );
      console.log(res.data.results);
      const data = res.data.results[0];
      // console.log(contractNoRef.current.value)
      setContract({
        ...contract,
        package: data.packages,
        address: data.address,
        organization: data.organization,
        contact: data.poc_number,
        full_name: data.poc_name,
        contract_no: data.contract_no,
      });
    } catch (err) {
      console.log(err);
    }
  };


  const TASK_URL = "http://192.168.60.55:8000/api/taskmanager/task/"
  const token1 = '8baabc24a9c1a2f3c26d4b7775d45c12f6e4d67c'

  const [contenter, setContenter] = React.useState([])

  // console.log(contenter)


  const TroubleArray = contenter.map(item => item.project.name == "Troubleshoot" && <MainDetails data={[item]} />)
  const OnlineArray = contenter.map(item => item.project.name == "Online Support" && <MainDetails data={[item]} />)
  const InstallArray = contenter.map(item => item.project.name == "Installation" && <MainDetails data={[item]} />)
  const ChangeArray = contenter.map(item => item.project.name == "Change Location" && <MainDetails data={[item]} />)
  // const TroubleArray = <MainDetails data={contenter} />
  
  React.useEffect(() => {
    axios.get(TASK_URL, {
      headers: {
        Authorization: token1
      }
    }).then(res => {
      setContenter(res.data.results)
    })


  }, [])


  // function getList() {
  //     return fetch('http://192.168.60.55:8000/api/taskmanager/task/')
  //         .then((data) => data.json())
  // }
  //   const [list, setList] = React.useState([])

  //   React.useEffect(() => {
  //     let mounted = true;
  //     getList()
  //         .then(items => {
  //             if(mounted) {
  //                 setList(items)
  //             }
  //         })
  //         return () => mounted = false;
  // }, [])


  const [content, setContent] = useState([])


  // useEffect(() => {
  //   fetch('http://192.168.60.55:8000/api/taskmanager/task/')
  //     .then((res) => res.json())
  //     .then((resJson) => {
  //       const data = JSON.parse(resJson)
  //       setContent(data)
  //     })
  // }, [])

  // useEffect(() => {
  //   const renderProjectForm = async () => {
  //     setProject({
  //       ...project,
  //       selectedProject: projectRef.current.value
  //     })
  //   };
  //   renderProjectForm();
  // }, []);

  return (
    <div>
      <div className="content-wrapper">
        <section className="content-header">
          <div className="container-fluid">
            <div className="row mb-2">
              <div className="col-sm-6">{/* <h1>Device Form</h1> */}</div>
              <div className="col-sm-6">
                <ol className="breadcrumb float-sm-right">
                  <li className="breadcrumb-item">
                  </li>

                </ol>
              </div>
            </div>
          </div>
          {/* <!-- /.container-fluid --> */}
        </section>
        <section className="content">
          <div className="container">
            <div className="row mb-5">
              <div className="col-10 offset-md-1">
                <div className="flexer">
                  {content.map(item => <h1>{content.results.title}</h1>)}
                  <p className="float-left tasktitle">Tasks&nbsp;</p>
                  <button
                    type="button"
                    name="addTask"
                    className="btn btn-secondary rounded-circle circle-width"
                    data-bs-toggle="modal"
                    data-bs-target="#addTaskModal"
                  >
                    <i className="fa-solid fa-plus "></i>
                  </button>
                </div>
               
                <div
                  className="modal fade"
                  id="addTaskModal"
                  tabIndex="-1"
                  role="dialog"
                  // aria-lablledby="addTaskModalTitle"
                  aria-hidden="true"
                >
                  <div className="modal-dialog modal-xl" role="document">
                    <div className="modal-content">
                      <div className="modal-header bg-primary">
                        <h5 className="modal-title cl-light text-light" id="addTaskModalTitle">
                          New Task
                        </h5>
                        <button
                          type="button"
                          className="close"
                          data-bs-dismiss="modal"
                          aria-label="Close"
                        >

                          <i className="fa-duotone fa-circle-xmark close-icon"></i>

                        </button>
                      </div>
                      <div className="modal-body">
                        <ul
                          className="nav nav-pills nav-justified"
                          id="mytab"
                          role="tablist"
                        >
                          <li className="nav-item" role="presentation">
                            <button
                              className="nav-link active"
                              id="home-tab"
                              data-bs-toggle="tab"
                              data-bs-target="#home-tab-pane"
                              type="button"
                              role="tab"
                              aria-controls="home-tab-pane"
                              aria-selected="true"
                            >
                              Details
                            </button>
                          </li>
                          <li className="nav-item" role="presentation">
                            <button
                              className="nav-link"
                              id="profile-tab"
                              data-bs-toggle="tab"
                              data-bs-target="#profile-tab-pane"
                              type="button"
                              role="tab"
                              aria-controls="profile-tab-pane"
                              aria-selected="false"
                            >
                              Members
                            </button>
                          </li>
                        </ul>
                        <div className="tab-content">
                          <div
                            className="tab-pane fade show active"
                            id="home-tab-pane"
                            role="tabpanel"
                            aria-labelledby="home-tab"
                            tabIndex="2"
                          >
                            <form onSubmit={handleSubmit}>
                              {/* <div className="input-group flex-nowrap mt-3">
                                <span
                                  className="input-group-text"
                                  id="addon-wrapping"
                                >
                                  <i className="fa-solid fa-magnifying-glass"></i>
                                </span>
                                <input
                                  type="text"
                                  className="form-control"
                                  placeholder="Find customer"
                                  aria-label="Username"
                                  aria-describedby="addon-wrapping"
                                  ref={contractNoRef}
                                />
                              </div> */}
                              <div className="input-group mb-3 mt-3">
                                <input
                                  type="text"
                                  className="form-control"
                                  placeholder="Find customer"
                                  aria-label="Recipient's username"
                                  aria-describedby="button-addon2"
                                  ref={contractNoRef}
                                />
                                <button
                                  className="btn btn-outline-secondary"
                                  type="submit"
                                  id="button-addon2"
                                >
                                  Find
                                </button>
                              </div>
                            </form>
                            <div className="mb-5">
                              <div className="row">
                                <div className="col-1 col-sm-1">
                                  <label
                                    htmlFor="project"
                                    className="col-form-label text-muted"
                                  >
                                    Project
                                  </label>
                                </div>
                                <div className="col-3 col-sm-4">
                                  <select
                                    className="form-select"
                                    id="project"
                                    aria-label="Default select example"
                                    ref={projectRef}
                                    name="project"
                                    onChange={handleChange}
                                    value={project.selectedProject}
                                  >
                                    <option value="select" disabled>
                                      Select
                                    </option>
                                    <option value="installation">
                                      Installation
                                    </option>
                                    <option value="troubleshoot">
                                      Troubleshoot
                                    </option>
                                    <option value="onlineSupport">
                                      Online Support
                                    </option>
                                    <option value="changeLocation">
                                      Change Location
                                    </option>
                                    <option value="amendment">Amendment</option>
                                    <option value="survey">Survey</option>
                                  </select>
                                </div>
                                <div className="col-1"></div>
                                {/* <div className="col-2 col-sm-1"></div> */}
                                <div className="col-1 col-sm-1">
                                  <label
                                    htmlFor="project"
                                    className="col-form-label text-muted"
                                  >
                                    Customer
                                  </label>
                                </div>
                                <div className="col-5 col-sm-5">
                                  <div className="input-group mb-3">
                                    <span
                                      className="input-group-text"
                                      id="basic-addon1"
                                    >
                                      <i className="fa-solid fa-user"></i>
                                    </span>
                                    <input
                                      type="text"
                                      className="form-control"
                                      placeholder="contract number"
                                      aria-label="Username"
                                      aria-describedby="basic-addon1"
                                    />
                                  </div>
                                </div>
                              </div>
                              <div className="row">
                                <div className="col-1 col-sm-1">
                                  <label
                                    htmlFor="deadline"
                                    className="col-form-label text-muted"
                                  >
                                    Deadline
                                  </label>
                                </div>
                                <div className="col-3 col-sm-4">
                                  <div className="input-group mb-3">
                                    <input
                                      type="date"
                                      className="form-control"
                                    />
                                  </div>
                                </div>
                                <div className="col-1"></div>
                                <div className="col-1">
                                  <label
                                    htmlFor="tag"
                                    className="col-form-label text-muted"
                                  >
                                    Tag
                                  </label>
                                </div>
                                <div className="col-5 col-sm-5">
                                  <div className="input-group">
                                    <label
                                      className="input-group-text"
                                      htmlFor="tag"
                                    >
                                      <i className="fa-solid fa-tag"></i>
                                    </label>
                                    <select
                                      className="form-select"
                                      id="tag"
                                      aria-label="Default select example"
                                    >
                                      <option >Normal</option>
                                      <option value="1">Urgent</option>
                                    </select>
                                  </div>
                                </div>
                              </div>
                            </div>
                            {project.selectedProject == "installation" && (
                              <GeneralDetails
                                contract_no={contract.contract_no}
                                full_name={contract.full_name}
                                contact={contract.contact}
                                organization={contract.organization}
                                address={contract.address}
                                package={contract.package}
                              />
                            )}
                            {project.selectedProject == "onlineSupport" && (
                              <OnlineSupport />
                            )}

                            {/* END ONLINE SUPPORT */}

                            {/* TROUBLESHOOT SECTION */}
                            {project.selectedProject == "troubleshoot" && (
                              <Troubleshoot />)}
                            {project.selectedProject == "changeLocation" && (
                              <ChangeLocation />
                            )}


                            {/* AMENDMENT */}
                            {project.selectedProject == "amendment" && (
                              <Amendment />
                            )}
                            {/* END AMENDMENT */}

                            {/* LOG NOTE AND MESSAGE */}
                            <LogMessage />
                            {/* END LOG NOTE AND MESSAGE */}

                          </div>
                          <div
                            class="tab-pane fade"
                            id="profile-tab-pane"
                            role="tabpanel"
                            aria-labelledby="profile-tab"
                            tabindex="0"
                          >
                            <Members />
                          </div>
                        </div>
                      </div>

                      <div className="modal-footer">
                        {/* <button
                          type="button"
                          className="btn btn-secondary"
                          data-bs-dismiss="modal"
                          aria-label="Close"
                        >
                          Close
                        </button> */}
                        <button
                          type="button"
                          className="btn btn-primary"
                          onClick={() => console.log("Clicked")}
                        >
                          Create Task
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="details">

              <Details title="Installation" className="spacer">
              {InstallArray}
              </Details>

              <Details title="Troubleshoot" className="spacer">
              {TroubleArray}
              </Details>
              <Details title="Online Support" className="spacer">
                {/* <MainDetails name="Mored Arian" internet="5Mb-24h Dedicated" status="Normal" number="1/2" badge="primary" avatar3="/images/avatar3.jpeg" avatar1="/images/avatar1.jpeg" avatar2="/images/avatar2.jpeg"/>
              <MainDetails name="Nawid Rasooly" internet="2Mb-12h Dedicated" status="Pending" number="1/2" badge="warning" avatar3="/images/avatar3.jpeg" avatar1="/images/avatar1.jpeg" avatar2="/images/avatar2.jpeg" avatar4="/images/avatar4.jpg"/> */}
                {OnlineArray}
              </Details>
              <Details title="Change Location" className="spacer">
                {ChangeArray}
              </Details>
            </div>


          </div>
        </section>
      </div>
    </div>
  );
}

