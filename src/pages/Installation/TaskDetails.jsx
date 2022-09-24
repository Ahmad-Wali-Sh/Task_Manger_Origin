import React from "react";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import LogMessage from "../../components/LogMessage";
import axios from "axios";
import Installations_details from "./components/Installations_details";
import Link_Details from "../../components/Link_Details";

const TaskDetails = (props) => {
  const location = useLocation();
  // console.log(props, " props");
  // console.log(location, " useLocation Hook");
  const data = location.state?.data;

  function handleSwitch(e) {
    // console.log(switchState)
    // setSwitchState({
    //   ...switchState,
    //   switch: !e.target.defaultValue
    // })
    // console.log({switchState})
    let isChecked = e.target.checked;
    console.log(isChecked);
  }

  console.log(data)


  const [installation, setInstallation] = React.useState([])
  const [link, setLink] = React.useState([])
  const InstallationDetails = installation.map(item => item.id)
  const INSTALL_URL = process.env.REACT_APP_INSTALL
  const CHECKLIST_URL = process.env.REACT_APP_CHECKLIST
  const LINK_URL = process.env.REACT_APP_LINK
  const token1 = '8baabc24a9c1a2f3c26d4b7775d45c12f6e4d67c'
  console.log(InstallationDetails)
  
  useEffect(() => {
    axios.get(INSTALL_URL + `?id=${data.id}`
    ).then(res => {
      setInstallation(res.data.results);
      setLink(res.data.results[0].link_details)
      console.log(res.data.results)
    })
  }, [])


  // function postData() {

  //   axios({
  //     method: 'patch',
  //     url: INSTALL_URL +`${installation.id}`,
  //     data: {
  //       installation
  //     }
  //   }).then((result) => {
  //     console.log(result.data);
  //   })
  // }

  let [form, setForm] = React.useState({
    pppoe_user: "Name",
    pppoe_password: "98776",
    description: "",
    task: data.id,
    link_details: 4
  })

  console.log(form.pppoe_user)

  const handlerChange = (event) => {
    setForm({
      ...form,
      [event.target.name]: event.target.value
    })
    // console.log(event.target.name)
    // console.log(event.target.value)
  }



  const LinkInputChange = (event) => {
    setLinkDetails({
      ...linkDetails,
      [event.target.name]: event.target.value
    })
    // console.log(event.target.name)
    // console.log(event.target.value)
  }

  const [linkDetails, setLinkDetails] = useState({
    installation_type: "",
    device: "",
    access_point: "",
    signal: "",
    ccq: "",
    cable: "",
    connector: "",
    payment: "",
    bill_number: "",
    installation_date: "",
    additional_details: ""

  })

  

  const linkDetailsSubmit = async (event) => {
    event.preventDefault()
    const loginForm = new FormData();
    loginForm.append("installation_type", linkDetails.installation_type)
    loginForm.append("device", linkDetails.device)
    loginForm.append("access_point", linkDetails.access_point)
    loginForm.append("signal", linkDetails.signal)
    loginForm.append("ccq", linkDetails.ccq)
    loginForm.append("cable", linkDetails.cable)
    loginForm.append("connector", linkDetails.connector)
    loginForm.append("payment", linkDetails.payment)
    loginForm.append("bill_number", linkDetails.bill_number)
    loginForm.append("installation_date", new Date(linkDetails.installation_date).toISOString())
    loginForm.append("additional_details", linkDetails.additional_details)

    console.log(loginForm)

  
      const respone = await axios({
        method: "post",
        url: LINK_URL,
        data: loginForm,
        header: { "Content-Type" : "application/json",}
      })
      console.log(respone)
      
      
      
      const UpdateTask = new FormData();
      UpdateTask.append("link_details", respone.data.id)
      
      
      try {
      const res = await axios({
        method: "patch",
        url: INSTALL_URL + `${InstallationDetails}/`,
        data: UpdateTask,
        header: { "Content-Type" : "application/json",}
      })
      console.log(res)
    } catch (error) {
      console.log(error)
    }

  }

  console.log(InstallationDetails)


  



  return (
    <div className="page">
      
      <div className="col-6 mt-5 m-auto">
        <h1>{data.title}</h1>
        <div className="members mt-3">
          {data.assigned.map((member) => (
            <img
              src={member.avatar}
              alt=""
              className="avatar"
              data-toggle="tooltip"
              data-placement="top"
              title={member.name}
            />
          ))}
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
        <div class="progress mt-5">
          <div
            class="progress-bar bg-success"
            role="progressbar"
            aria-label="Success example"
            style={{ width: "25%" }}
            aria-defaultValuenow="25"
            aria-defaultValuemin="0"
            aria-defaultValuemax="100"
          ></div>
        </div>
        <ul
          className="nav nav-pills nav-justified mt-5 mb-5"
          id="mytab"
          role="tablist"
        >
          <li className="nav-item" role="presentation">
            <button
              className="nav-link active"
              id="task-tab"
              data-bs-toggle="tab"
              data-bs-target="#task-tab-pane"
              type="button"
              role="tab"
              aria-controls="task-tab-pane"
              aria-selected="true"
            >
              Task
            </button>
          </li>
          <li className="nav-item" role="presentation">
            <button
              className="nav-link"
              id="files-tab"
              data-bs-toggle="tab"
              data-bs-target="#files-tab-pane"
              type="button"
              role="tab"
              aria-controls="files-tab-pane"
              aria-selected="false"
            >
              Files
            </button>
          </li>
          <li className="nav-item" role="presentation">
            <button
              className="nav-link"
              id="activity-tab"
              data-bs-toggle="tab"
              data-bs-target="#activity-tab-pane"
              type="button"
              role="tab"
              aria-controls="activity-tab-pane"
              aria-selected="false"
            >
              Activity
            </button>
          </li>
        </ul>
        <div className="tab-content">
          <div
            className="tab-pane fade show active"
            id="task-tab-pane"
            role="tabpanel"
            aria-labelledby="task-tab"
            tabIndex="-1"
          >
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
                    name="project"
                  >
                    <option value={data.project.id}>{data.project.name}</option>
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
                    <span className="input-group-text" id="basic-addon1">
                      <i className="fa-solid fa-user"></i>
                    </span>
                    <input
                        type="text"
                        className="form-control"
                        placeholder="contract name"
                        aria-label="Username"
                        aria-describedby="basic-addon1"
                        defaultValue={data.contract.contract_no}
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
                    <input type="date" name="deadline" className="form-control" defaultValue={data.deadline.slice(0, 10)} />
                  </div>
                </div>
                <div className="col-1"></div>
                <div className="col-1">
                  <label htmlFor="tag" className="col-form-label text-muted">
                    Tag
                  </label>
                </div>
                <div className="col-5 col-sm-5">
                  <div className="input-group">
                    <label className="input-group-text" htmlFor="tag">
                      <i className="fa-solid fa-tag"></i>
                    </label>
                    <select
                      className="form-select"
                      id="tag"
                      aria-label="Default select example"
                    >
                      <option defaultValue={data.tag.id}>{data.tag.name}</option>
                      <option>Normal</option>
                      <option defaultValue="1">Urgent</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <GeneralDetails /> */}
        <section>
        
          <h3 className="mt-3">General Details</h3>
          <div className="row mt-3">
            <label
              htmlFor="inputEmail3"
              className="col-2 col-form-label text-muted"
            >
              Contract number
            </label>
            <div className="col-4">
              <input
                type="text"
                name="contract_number"
                id="inputEmail3"
                placeholder="..."
                className="form-control"
                defaultValue={data.contract.contract_no}
              />
            </div>
            <div className="col-1"></div>
            <label
              htmlFor="inputEmail3"
              className="col-1 col-form-label text-muted"
            >
              <sapn className="textwrap">POC Name</sapn>
            </label>
            <div className="col-4">
              <input
                type="text"
                name="contract_poc_name"
                id="inputEmail3"
                placeholder="..."
                className="form-control"
                defaultValue={data.contract.poc_name}
              />
            </div>
          </div>
          <div className="row mt-1">
            <label
              htmlFor="inputEmail3"
              className="col-sm-2 col-form-label text-muted"
            >
              Contact
            </label>
            <div className="col-sm-4">
              <input
                type="text"
                name="contract.poc_number"
                id="inputEmail3"
                placeholder="..."
                className="form-control"
                defaultValue={data.contract.poc_number}
              />
              {props.contact}
            </div>
            <div className="col-1"></div>
            <label
              htmlFor="inputEmail3"
              className="col-1 col-form-label text-muted"
            >
              Organization
            </label>
            <div className="col-sm-4">
              <input
                type="text"
                name="organization"
                id="inputEmail3"
                placeholder="..."
                className="form-control"
                defaultValue={data.contract.organization}
              />
              {props.organization}

            </div>
          </div>
          <div className="row mt-1">
            <label
              htmlFor="inputEmail3"
              className="col-sm-2 col-form-label text-muted"
            >
              Address
            </label>
            <div className="col-sm-10">
              <input
                type="text"
                name="address"
                id="inputEmail3"
                placeholder="..."
                className="form-control"
                defaultValue={data.contract.address}
              />
              {props.address}
            </div>
          </div>
          <div className="row mt-1">
            <label
              htmlFor="inputEmail3"
              className="col-sm-2 col-form-label text-muted"
            >
              Bandwidth
            </label>
            <div className="col-sm-10">
              <input
                type="text"
                name="packages"
                id="inputEmail3"
                placeholder="..."
                className="form-control"
                defaultValue={data.contract.packages}
              />
              {props.package}
            </div>
          </div>
          <div
            className="row mt-1"
            id="pills-tab"
            role="tablist"
          >
            <div className="col-12">
              <nav>
                <div
                  className="nav nav-tabs"
                  id="nav-tab"
                  role="tablist"
                >
                  <span
                    className="nav-link active"
                    id="nav-home-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#nav-home"
                    type="button"
                    role="tab"
                    aria-controls="nav-home"
                    aria-selected="true"
                  >
                    Description
                  </span>
                </div>
              </nav>

              <div
                className="tab-content"
                id="nav-tabContent"
              >
                <div
                  className="tab-pane fade show active"
                  id="nav-home"
                  role="tabpanel"
                  aria-labelledby="nav-home-tab"
                >
                </div>

              </div>
            </div>
          </div>
          <textarea
            className="form-control border-top-0"
            placeholder="Leave a description here"
            id="floatingTextarea"
            rows="6"
            defaultValue={data.description}
          ></textarea>

          <Installations_details id={data.id}/>
          
          <Link_Details data={[data]} id={data.id}/>
          <div className="row">
            <div className="col-4">
              Installation confirmed
            </div>
            <label className="switch">
              <input
                type="checkbox"
                name="switch"
                id="switch"
                // checked={switchInitialState.switch}
                onChange={(e) => handleSwitch(e)}
              // checked={switchState.switch == true}
              />
              <span className="slider round"></span>
            </label>
          </div>
          <div className="row mt-2">
            <div className="col-4">Payment cleared</div>
            <label className="switch">
              <input
                type="checkbox"
                name="switch"
                id="switch"
                // checked={switchInitialState.switch}
                onChange={(e) => handleSwitch(e)}
              // checked={switchState.switch == true}
              />
              <span className="slider round"></span>
            </label>
          </div>
        </section>
        <LogMessage />
      </div>
    </div>
  );

};

export default TaskDetails;
