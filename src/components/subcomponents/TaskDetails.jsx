import React from "react";
import { useEffect, useState} from "react";
import { useLocation } from "react-router-dom";
import GeneralDetails from "./GeneralDetails";
import LogMessage from "./LogMessage";
import axios from "axios";

const TaskDetails = (props) => {
  const location = useLocation();
  // console.log(props, " props");
  // console.log(location, " useLocation Hook");
  const data = location.state?.data;

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

  
  // const TASK_URL = "http://192.168.60.55:8000/api/taskmanager/LinkDetails/?id="+data.id
  const INSTALL_URL = process.env.REACT_APP_INSTALL
  const LINK_URL = process.env.REACT_APP_LINK
  const token1 = '8baabc24a9c1a2f3c26d4b7775d45c12f6e4d67c'

  

  const [installation, setInstallation] = useState([])

  useEffect(() => {
    axios.get(INSTALL_URL + `?id=${data.id}`
    ).then(res => {
      setInstallation(res.data.results)
      console.log(res.data.results)
    })
    console.log(installation)
    
    
  }, [])
  
  
  
  
  setTimeout( () => {
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
              style={{width: "25%"}}
              aria-valuenow="25"
              aria-valuemin="0"
              aria-valuemax="100"
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
                      value={data.project.name}
                    >
                      
                      <option value="installation" selected >{data.project.name}</option>
                      <option value="installation">Installation</option>
                      <option value="troubleshoot">Troubleshoot</option>
                      <option value="onlineSupport">Online Support</option>
                      <option value="changeLocation">Change Location</option>
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
                      <span className="input-group-text" id="basic-addon1">
                        <i className="fa-solid fa-user"></i>
                      </span>
                      {/* <input
                        type="text"
                        className="form-control"
                        placeholder="contract name"
                        aria-label="Username"
                        aria-describedby="basic-addon1"
                      /> */}
                      <div >
                        {data.contract.contract_no}
                      </div>
  
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
                      <input type="date" className="form-control" value={data.deadline.slice(0, 10)} />
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
                        <option value={data.tag.id}>{data.tag.name}</option>
                        <option>Normal</option>
                        <option value="1">Urgent</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* <div
              className="tab-pane fade"
              id="files-tab-pane"
              role="tabpanel"
              aria-labelledby="files-tab"
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
                      selected={data.project.name}
                    >
                      <option value="select" disabled>
                        Select
                      </option>
                      <option value="installation">Installation</option>
                      <option value="troubleshoot">Troubleshoot</option>
                      <option value="onlineSupport">Online Support</option>
                      <option value="changeLocation">Change Location</option>
                      <option value="amendment">Amendment</option>
                      <option value="survey">Survey</option>
                    </select>
                  </div>
                  <div className="col-1"></div>
                  {/* <div className="col-2 col-sm-1"></div>
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
                      <input type="date" className="form-control" />
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
                        <option>Normal</option>
                        <option value="1">Urgent</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>
            </div> */}
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
              name=""
              id="inputEmail3"
              placeholder="..."
              className="form-control"
              value={data.contract.contract_no}
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
              name=""
              id="inputEmail3"
              placeholder="..."
              className="form-control"
              value={data.contract.poc_name}
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
              name=""
              id="inputEmail3"
              placeholder="..."
              className="form-control"
              value={data.contract.poc_number}
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
              name=""
              id="inputEmail3"
              placeholder="..."
              className="form-control"
              value={data.contract.organization}
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
              name=""
              id="inputEmail3"
              placeholder="..."
              className="form-control"
              value={data.contract.address}
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
              name=""
              id="inputEmail3"
              placeholder="..."
              className="form-control"
              value={data.contract.packages}
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
                <textarea
                  className="form-control border-top-0"
                  placeholder="Leave a description here"
                  id="floatingTextarea"
                  rows="6"
                  value={installation[0].description}                
                ></textarea>
              </div>
            </div>
          </div>
        </div>
        <h3 className="mt-3">PPPoE Settings</h3>
  
        <div className="row mt-1">
          <label
            htmlFor="inputEmail3"
            className="col-sm-1 col-form-label text-muted"
          >
            User
          </label>
          <div className="col-sm-4">
            <input
              type="text"
              name=""
              id="inputEmail3"
              placeholder="..."
              className="form-control"
              value={installation[0].pppoe_user}
            />
          </div>
          <div className="col-sm-1"></div>
          <label
            htmlFor="inputEmail3"
            className="col-sm-1 col-form-label text-muted"
            >
            Password
          </label>
          <div className="col-sm-4">
            <input
              type="text"
              name=""
              id="inputEmail3"
              placeholder="..."
              className="form-control"
              value={installation[0].pppoe_password}
            />
          </div>
        </div>
  
        <div className="card bg-light mb-3 mt-3">
              <div className="card-header">
                  Link Details
              </div>
              <div className="card-body">
                  <div className="row">
                      <div className="col-5">
                          <label
                              htmlFor="customer_name"
                              className="col-form-label text-muted"
                          >
                              Customer Name
                          </label>
                          <input
                              type="text"
                              name=""
                              id="customer_name"
                              className="form-control"
                              value={data.contract.poc_name}
                          />
                      </div>
                      <div className="col-2"></div>
                      <div className="col-5">
                          <label
                              htmlFor="customer_id"
                              className="col-form-label text-muted"
                          >
                              Customer ID
                          </label>
                          <input
                              type="text"
                              name=""
                              id="customer_id"
                              className="form-control"
                              value={data.contract.contract_id}
                          />
                      </div>
                  </div>
                  <div className="row">
                      <div className="col-5">
                          <label
                              htmlFor="installation_type"
                              className="col-form-label text-muted"
                          >
                              Installation Type
                          </label>
                          <input
                              type="text"
                              name=""
                              id="installation_type"
                              className="form-control"
                              value={installation[0].link_details.installation_type}
                          />
                      </div>
                      <div className="col-2"></div>
                      <div className="col-5">
                          <label
                              htmlFor="device"
                              className="col-form-label text-muted"
                          >
                              Device
                          </label>
                          <input
                              type="text"
                              name=""
                              id="device"
                              className="form-control"
                              defaultValue={installation[0].link_details.additional_details}
                          />
                      </div>
                  </div>
                  <div className="row">
                      <div className="col-5">
                          <label
                              htmlFor="access_point"
                              className="col-form-label text-muted"
                          >
                              Access Point
                          </label>
                          <input
                              type="text"
                              name=""
                              id="access_point"
                              className="form-control"
                              value={installation[0].link_details.access_point}
                          />
                      </div>
                      <div className="col-2"></div>
                      <div className="col-5">
                          <label
                              htmlFor="signal"
                              className="col-form-label text-muted"
                          >
                              Signal
                          </label>
                          <input
                              type="text"
                              name=""
                              id="signal"
                              className="form-control"
                              // value={link.signal}
                          />
                      </div>
                  </div>
                  <div className="row">
                      <div className="col-5">
                          <label
                              htmlFor="ccq"
                              className="col-form-label text-muted"
                          >
                              CCQ
                          </label>
                          <input
                              type="text"
                              name=""
                              id="ccq"
                              className="form-control"
                              value={installation[0].link_details.ccq}
                          />
                      </div>
                      <div className="col-2"></div>
                      <div className="col-5">
                          <label
                              htmlFor="cable"
                              className="col-form-label text-muted"
                          >
                              Cable
                          </label>
                          <input
                              type="text"
                              name=""
                              id="cable"
                              className="form-control"
                              value={installation[0].link_details.cable}
                          />
                      </div>
                  </div>
                  <div className="row">
                      <div className="col-5">
                          <label
                              htmlFor="connector"
                              className="col-form-label text-muted"
                          >
                              Connector
                          </label>
                          <input
                              type="text"
                              name=""
                              id="connector"
                              className="form-control"
                              value={installation[0].link_details.connector}
                          />
                      </div>
                      <div className="col-2"></div>
                      <div className="col-5">
                          <label
                              htmlFor="payment"
                              className="col-form-label text-muted"
                          >
                              Payment
                          </label>
                          <input
                              type="text"
                              name=""
                              id="payment"
                              className="form-control"
                              value={installation[0].link_details.payment}
                          />
                      </div>
                  </div>
                  <div className="row">
                      <div className="col-5">
                          <label
                              htmlFor="bill_number"
                              className="col-form-label text-muted"
                          >
                              Bill Number
                          </label>
                          <input
                              type="text"
                              name=""
                              id="bill_number"
                              className="form-control"
                          />
                      </div>
                      <div className="col-2"></div>
                      <div className="col-5">
                          <label
                              htmlFor="installation_date"
                              className="col-form-label text-muted"
                          >
                              Installation Date
                          </label>
                          <input
                              type="date"
                              name=""
                              id="installation_date"
                              className="form-control"
                              value={installation[0].link_details.installation_date.slice(0,10)}
                          />
                      </div>
                  </div>
                  <div
                      className="row mt-3"
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
                                      Additional Details
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
                                  <textarea
                                      className="form-control border border-top-0 rounded-0"
                                      placeholder="Leave a description here"
                                      id="floatingTextarea"
                                      rows="6"
                                      value={installation[0].link_details.additional_details}
                                  ></textarea>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
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
  }, 2000)
};

export default TaskDetails;
