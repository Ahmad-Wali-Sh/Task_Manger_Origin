import React from "react";
import LogMessage from "../../components/LogMessage";
import { useLocation } from "react-router-dom";
import axios from "axios";

export default function OnlineSupportDetails(props) {
  const location = useLocation();
  const data = location.state?.data;
  const ONLINE_URL = process.env.REACT_APP_ONLINE;

  const [onlineSupport, setOnlineSupport] = React.useState([]);

  React.useEffect(() => {
    axios.get(ONLINE_URL + `?id=${data.id}`).then((res) => {
      setOnlineSupport(res.data.results);
      console.log(res.data.results);
    });
  }, []);

  function handleChange(event) {
    setOnlineSupport({
      ...onlineSupport,
      [event.target.name]: event.target.value,
    });
    console.log(event.target.value);
  }

  function OnlineSupportSubmit(e) {
    e.preventDefault();
  }

  return (
    <>
      {onlineSupport == false && (
        <div className="mb-2 mt-2">
          <button
            type="button"
            class="btn btn-primary"
            data-bs-toggle="modal"
            data-bs-target="#exampleModal"
            data-bs-whatever="@mdo"
          >
            Add Details
          </button>
        </div>
      )} 

       <div
        class="modal fade"
        id="exampleModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog modal-xl">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">
                Troubleshoot Settings
              </h5>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
              <form onSubmit={OnlineSupportSubmit}>
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
                      onChange={handleChange}
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
                      onChange={handleChange}
                    />
                  </div>
                  <label
                    htmlFor="troubleshoot_charge"
                    className="col-sm-2 col-form-label text-muted"
                  >
                    Service Charge
                  </label>
                  <div className="col-sm-4">
                    <input
                      type="text"
                      name="service_charge"
                      id="troubleshoot_charge"
                      placeholder="..."
                      className="form-control"
                      onChange={handleChange}
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
                      onChange={handleChange}
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
                          onChange={handleChange}
                        ></textarea>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="modal-footer">
                  <button type="submit" className="btn btn-success ">
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <section>
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
            <h3>Online Support</h3>
            <div className="card text-dark bg-light mb-3">
              <div className="card-header">Task details</div>
              <div className="card-body">
                <div className="row mt-1">
                  <label
                    for="onlineSupport_title"
                    className="col-sm-2 col-form-label text-muted"
                  >
                    Title
                  </label>
                  <div className="col-sm-10">
                    <input
                      type="text"
                      name="title"
                      id="onlineSupport_title"
                      placeholder="..."
                      className="form-control"
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className="row mt-3">
                  <label
                    for="onlineSupport_contact"
                    className="col-sm-2 col-form-label text-muted"
                  >
                    Contact
                  </label>
                  <div className="col-sm-4">
                    <input
                      type="text"
                      name="contact"
                      id="onlineSupport_contact"
                      placeholder="..."
                      className="form-control"
                      onChange={handleChange}
                    />
                  </div>
                  <div className="col-1"></div>
                  <label
                    for="onlineSupport_by"
                    className="col-sm-1 col-form-label text-muted"
                  >
                    by
                  </label>
                  <div className="col-4 col-sm-4">
                    <select
                      className="form-control border border-2"
                      id="onlineSupport_by"
                      name="by"
                    >
                      <option value="phoneCall">Phone call</option>
                      <option value="telegram">Telegram</option>
                      <option value="inPerson">In-Person</option>
                    </select>
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
                          onChange={handleChange}
                        ></textarea>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card-footer">
                <div className="d-flex flex-row-reverse bd-highlight">
                  <div className="bd-highlight">
                    {/* <button
                                    type="submit"
                                    className="btn btn-success"
                                >
                                    <i className="fa-duotone fa-floppy-disk"></i>
                                    &nbsp;Save
                                </button> */}
                  </div>
                </div>
                {/* <Card title="Online Support" /> */}
              </div>
            </div>
            <LogMessage />
          </div>
        </div>
      </section>
    </>
  );
}
