import React from "react";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import GeneralDetails from "./GeneralDetails";
import LogMessage from "./LogMessage";
import axios from "axios";
import Troubleshoot from "./Troubleshoot";

const TroubleshootDetails = (props) => {
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

  // console.log(data)

  const [singleTroubleshootTask, setSingleTroubleshootTask] = React.useState(
    []
  );
  const [link, setLink] = React.useState([]);
  const troubleshoot_details = singleTroubleshootTask.map((item) => item.id);
  const INSTALL_URL = process.env.REACT_APP_INSTALL;
  const LINK_URL = process.env.REACT_APP_LINK;
  const CHECKLIST_URL = process.env.REACT_APP_CHECKLIST
  const TROUBLE_URL = process.env.REACT_APP_TROUBLE;
  const token1 = "8baabc24a9c1a2f3c26d4b7775d45c12f6e4d67c";
  // console.log(InstallationDetails)
  useEffect(() => {
      axios.get(TROUBLE_URL + `?id=${data.id}`).then((res) => {
          setSingleTroubleshootTask(res.data.results);
          setLink(res.data.results[0].link_details);
          console.log(res.data.results);
        });
    }, []);
    
    const details = singleTroubleshootTask.map(item=>item)
   
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

  const [truobleshoot, setTroubleshoot] = React.useState({
    address: "",
    contact: "",
    problem: "",
    service_charge: "",
    description: "",
  });

  const TroubleshootSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append("task", data.id);
    formData.append("address", truobleshoot.address);
    formData.append("contact", truobleshoot.contact);
    formData.append("problem", truobleshoot.problem);
    formData.append("service_charge", truobleshoot.service_charge);
    formData.append("description", truobleshoot.description);
    formData.append("link_details", 4);
    formData.append("checklist", 1);

    const respone = await axios({
      method: "post",
      url: TROUBLE_URL,
      data: formData,
      header: { "Content-Type": "multipart/form-data" },
    });
    console.log(respone);
  };
  // console.log(form.pppoe_user)

  const handlerChange = (event) => {
    setTroubleshoot({
      ...truobleshoot,
      [event.target.name]: event.target.value,
    });

    console.log(event.target.name);
    console.log(event.target.value);
  };

  // console.log(event.target.name)
  // console.log(event.target.value)

  const LinkInputChange = (event) => {
    setLinkDetails({
      ...linkDetails,
      [event.target.name]: event.target.value,
    });
  };

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
    additional_details: "",
  });

  const linkDetailsSubmit = async (event) => {
    event.preventDefault();
    const linkDetailsForm = new FormData();
    linkDetailsForm.append("installation_type", linkDetails.installation_type);
    linkDetailsForm.append("device", linkDetails.device);
    linkDetailsForm.append("access_point", linkDetails.access_point);
    linkDetailsForm.append("signal", linkDetails.signal);
    linkDetailsForm.append("ccq", linkDetails.ccq);
    linkDetailsForm.append("cable", linkDetails.cable);
    linkDetailsForm.append("connector", linkDetails.connector);
    linkDetailsForm.append("payment", linkDetails.payment);
    linkDetailsForm.append("bill_number", linkDetails.bill_number);
    linkDetailsForm.append(
      "installation_date",
      new Date(linkDetails.installation_date).toISOString()
    );
    linkDetailsForm.append(
      "additional_details",
      linkDetails.additional_details
    );

    console.log(linkDetailsForm);

    const respone = await axios({
      method: "post",
      url: LINK_URL,
      data: linkDetailsForm,
      header: { "Content-Type": "multipart/form-data" },
    });
    console.log(respone);

    const UpdateTask = new FormData();
    UpdateTask.append("link_details", respone.data.id);

    try {
      const res = axios({
        method: "patch",
        url: TROUBLE_URL + `${troubleshoot_details}/`,
        data: UpdateTask,
        header: { "Content-Type": "multipart/form-data" },
      });
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };

  const [checklist, setChecklist] = React.useState({
    cable: false,
    stand: false,
    router: false,
    antenna: false,
    router_os: false,
    signal: false,
    dns: false
  })

  console.log(checklist)

  const checkboxHandleChange = (event) => {
    setChecklist({
        ...checklist,
        [event.target.name] : event.target.checked
    })
  };

  const checklistSubmit = async (event) => {
    event.preventDefault();
    const checklistForm = new FormData();
    // checklistForm.append("cable", checklist.cable);
    // checklistForm.append("stand", checklist.stand);
    // checklistForm.append("router", checklist.router);
    // checklistForm.append("antenna", checklist.antenna);
    // checklistForm.append("router_os", checklist.router_os);
    // checklistForm.append("signal", checklist.signal);
    // checklistForm.append("dns", checklist.dns);

    Object.keys(checklist).map(key => {
        checklistForm.append(key, checklist[key])
    })
    

    const respone = await axios({
      method: "post",
      url: CHECKLIST_URL,
      data: checklistForm,
      header: { "Content-Type": "multipart/form-data" },
    });
    console.log(respone);

    const UpdateTask = new FormData();
    UpdateTask.append("checklist", respone.data.id);

    try {
      const res = axios({
        method: "patch",
        url: TROUBLE_URL + `${troubleshoot_details}/`,
        data: UpdateTask,
        header: { "Content-Type": "multipart/form-data" },
      });
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };








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
                    defaultValue={data.project.name}
                  >
                    <option defaultValue="installation" selected>
                      {data.project.name}
                    </option>
                    <option defaultValue="installation">Installation</option>
                    <option defaultValue="troubleshoot">Troubleshoot</option>
                    <option defaultValue="onlineSupport">Online Support</option>
                    <option defaultValue="changeLocation">
                      Change Location
                    </option>
                    <option defaultValue="amendment">Amendment</option>
                    <option defaultValue="survey">Survey</option>
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
                    <div>{data.contract.contract_no}</div>
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
                      name="deadline"
                      className="form-control"
                      defaultValue={data.deadline.slice(0, 10)}
                    />
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
                      <option defaultValue={data.tag.id}>
                        {data.tag.name}
                      </option>
                      <option>Normal</option>
                      <option defaultValue="1">Urgent</option>
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
                      <option defaultValue="select" disabled>
                        Select
                      </option>
                      <option defaultValue="installation">Installation</option>
                      <option defaultValue="troubleshoot">Troubleshoot</option>
                      <option defaultValue="onlineSupport">Online Support</option>
                      <option defaultValue="changeLocation">Change Location</option>
                      <option defaultValue="amendment">Amendment</option>
                      <option defaultValue="survey">Survey</option>
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
                        <option defaultValue="1">Urgent</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>
            </div> */}
        </div>
        {/* <GeneralDetails /> */}

        <h3>Troubleshoot</h3>
        <div className="card text-dark bg-light mb-3">
          <>
            <form onSubmit={TroubleshootSubmit}>
              <div className="card-header">Task details</div>
              <div className="card-body">
                <div className="row mt-1">
                  <label
                    htmlFor="troubleshoot_title"
                    className="col-sm-2 col-form-label text-muted"
                  >
                    Title
                  </label>
                  <div className="col-sm-10">
                    <input
                      type="text"
                      name="task"
                      id="troubleshoot_title"
                      placeholder="..."
                      className="form-control"
                      onChange={handlerChange}
                      value={data.title}
                    />
                  </div>
                </div>
                <div className="row mt-2">
                  <label
                    htmlFor="troubleshoot_address"
                    className="col-sm-2 col-form-label text-muted"
                  >
                    Address
                  </label>
                  <div className="col-sm-10">
                    <input
                      type="text"
                      name="address"
                      id="troubleshoot_address"
                      placeholder="..."
                      className="form-control"
                      onChange={handlerChange}
                      defaultValue={details.address}
                    />
                  </div>
                </div>
                <div className="row mt-2">
                  <label
                    htmlFor="troubleshoot_contact"
                    className="col-sm-2 col-form-label text-muted"
                  >
                    Contact
                  </label>
                  <div className="col-sm-4">
                    <input
                      type="text"
                      name="contact"
                      id="troubleshoot_contact"
                      placeholder="..."
                      className="form-control"
                      onChange={handlerChange}
                    />
                  </div>
                  <label
                    htmlFor="troubleshoot_charge"
                    className="col-sm-3 col-form-label text-muted"
                  >
                    Service Charge
                  </label>
                  <div className="col-sm-3">
                    <input
                      type="text"
                      name="service_charge"
                      id="troubleshoot_charge"
                      placeholder="..."
                      className="form-control"
                      onChange={handlerChange}
                    />
                  </div>
                </div>
                <div className="row mt-2">
                  <label
                    htmlFor="troubleshoot_problem"
                    className="col-sm-2 col-form-label text-muted"
                  >
                    Problem
                  </label>
                  <div className="col-sm-10">
                    <input
                      type="text"
                      name="problem"
                      id="troubleshoot_problem"
                      placeholder="..."
                      className="form-control"
                      onChange={handlerChange}
                    />
                  </div>
                </div>
                <div className="row mt-5" id="pills-tab" role="tablist">
                  <div className="col-12">
                    <nav>
                      <div className="nav nav-tabs" id="nav-tab" role="tablist">
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
                    <div className="tab-content" id="nav-tabContent">
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
                          name="description"
                          onChange={handlerChange}
                        ></textarea>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card-footer">
                <button type="submit" className="btn btn-success">
                  Submit
                </button>
              </div>
            </form>
          </>

          <form onSubmit={linkDetailsSubmit}>
            <div className="card bg-light mb-3 mt-3">
              <div className="card-header">Link Details</div>
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
                      name="poc_name"
                      id="customer_name"
                      className="form-control"
                      onChange={LinkInputChange}
                      defaultValue={data.contract.poc_name}
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
                      name="contract_id"
                      id="customer_id"
                      className="form-control"
                      onChange={LinkInputChange}
                      defaultValue={data.contract.contract_no}
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
                      name="installation_type"
                      id="installation_type"
                      className="form-control"
                      onChange={LinkInputChange}
                      defaultValue={link.installation_type}
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
                      name="device"
                      id="device"
                      className="form-control"
                      onChange={LinkInputChange}
                      defaultValue={link.device}
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
                      name="access_point"
                      id="access_point"
                      className="form-control"
                      onChange={LinkInputChange}
                      defaultValue={link.access_point}
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
                      name="signal"
                      id="signal"
                      className="form-control"
                      onChange={LinkInputChange}
                      defaultValue={link.signal}
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="col-5">
                    <label htmlFor="ccq" className="col-form-label text-muted">
                      CCQ
                    </label>
                    <input
                      type="text"
                      name="ccq"
                      id="ccq"
                      className="form-control"
                      onChange={LinkInputChange}
                      defaultValue={link.ccq}
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
                      name="cable"
                      id="cable"
                      className="form-control"
                      onChange={LinkInputChange}
                      defaultValue={link.cable}
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
                      name="connector"
                      id="connector"
                      className="form-control"
                      onChange={LinkInputChange}
                      defaultValue={link.connector}
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
                      name="payment"
                      id="payment"
                      className="form-control"
                      onChange={LinkInputChange}
                      defaultValue={link.payment}
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
                      name="bill_number"
                      id="bill_number"
                      className="form-control"
                      onChange={LinkInputChange}
                      value={link.bill_number}
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
                      name="installation_date"
                      id="installation_date"
                      className="form-control"
                      onChange={LinkInputChange}
                      // defaultValue={link.installation_date.slice(0,10)}
                    />
                  </div>
                </div>

                <div className="row mt-3" id="pills-tab" role="tablist">
                  <div className="col-12">
                    <nav>
                      <div className="nav nav-tabs" id="nav-tab" role="tablist">
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
                    <div className="tab-content" id="nav-tabContent">
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
                          onChange={LinkInputChange}
                          name="additional_details"
                          defaultValue={link.additional_details}
                        ></textarea>
                        <button className="btn btn-primary" type="submit">
                          Create Task
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </form>
          <div className="form-check ml-3">
            <h4 className="mt-3">Checklist</h4>
            <br />
            <div className="form-check ml-3">
            <form onSubmit={checklistSubmit}>
              <ul className="list-unstyled">
                <li className="list-item">
                  {/* <input
                                        type="checkbox"
                                        // className="form-check-input border border-primary"
                                        
                                        name="cable"
                                        id=""
                                        onChange={checkboxHandleChange}
                                    /> */}
                
                  <div class="form-check form-switch">
                    <input
                      class="form-check-input"
                      type="checkbox"
                      role="switch"
                      id="flexSwitchCheckChecked"
                      name="cable"
                      onChange={checkboxHandleChange}
                    />
                  </div>
                  &nbsp;Cable
                </li>
                <li className="list-item">
                  <div class="form-check form-switch">
                    <input
                      class="form-check-input"
                      type="checkbox"
                      role="switch"
                      id="flexSwitchCheckChecked"
                      name="stand"
                      onChange={checkboxHandleChange}
                    />
                  </div>
                  &nbsp;Stand
                </li>
                <li className="list-item">
                  <div class="form-check form-switch">
                    <input
                      class="form-check-input"
                      type="checkbox"
                      role="switch"
                      id="flexSwitchCheckChecked"
                      name="router"
                      onChange={checkboxHandleChange}
                    />
                  </div>
                  &nbsp;Router
                </li>
                <li className="list-item">
                  <div class="form-check form-switch">
                    <input
                      class="form-check-input"
                      type="checkbox"
                      role="switch"
                      id="flexSwitchCheckChecked"
                      name="antenna"
                      onChange={checkboxHandleChange}
                    />
                  </div>
                  &nbsp;Antenna
                </li>
                <li className="list-item">
                  <div class="form-check form-switch">
                    <input
                      class="form-check-input"
                      type="checkbox"
                      role="switch"
                      id="flexSwitchCheckChecked"
                      name="router_os"
                      onChange={checkboxHandleChange}
                    />
                  </div>
                  &nbsp;Router OS
                </li>
                <li className="list-item">
                  <div class="form-check form-switch">
                    <input
                      class="form-check-input"
                      type="checkbox"
                      role="switch"
                      id="flexSwitchCheckChecked"
                      name="signal"
                      onChange={checkboxHandleChange}
                    />
                  </div>
                  &nbsp;Signal
                </li>
                <li className="list-item">
                  <div class="form-check form-switch">
                    <input
                      class="form-check-input"
                      type="checkbox"
                      role="switch"
                      id="flexSwitchCheckChecked"
                      name="dns"
                      onChange={checkboxHandleChange}
                    />
                  </div>
                  &nbsp;DNS
                </li>
                
              </ul>
              <button className="btn btn-primary" type="submit">Submit</button>
              </form>
            </div>
          </div>
          {/* END CHECKLIST */}
        </div>

        {/* END TROUBLESHOOT RESULT */}
        <div className="card-footer">
          <div className="d-flex flex-row-reverse bd-highlight">
            <div className="bd-highlight">
              <button type="submit" className="btn btn-success">
                <i className="fa-duotone fa-floppy-disk"></i>
                &nbsp;Save
              </button>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-4">Installation confirmed</div>
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

        <LogMessage />
      </div>
    </div>
  );
};

export default TroubleshootDetails;
