import axios from "axios";
import React, { useState } from "react";

const Installations_details = (props) => {
  const [settings, setSettings] = React.useState({
    pppoe_user: "",
    pppoe_password: "",
    description: "",
    task: props.id,
  });

  const INSTALL_URL = process.env.REACT_APP_INSTALL;

  const [installation, setInstallation] = React.useState([]);
  const [taskID, setTaskID] = useState()
  const [count, setCount] = useState()
  React.useEffect(() => {
    axios.get(INSTALL_URL + `?id=${props.id}`).then((res) => {
      setInstallation(res.data.results);
      setCount(res.data.count)
      setTaskID(res.data.results.map(item => item.id))
      console.log(res.data.results);
    });
  }, []);

  const handleChange = (e) => {
    setSettings({
      ...settings,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData();

      Object.keys(settings).map((key) => {
        data.append(settings[key] != '' && key, settings[key] != '' && settings[key]);
      })
      
      console.log(count)
    try {
      const response = await axios({
        method: count > 0 ? 'PATCH' : 'POST' ,
        url: count > 0 ? INSTALL_URL + `${taskID}/` : INSTALL_URL,
        data: data,
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
    } catch (err) {
      console.log(err.message);
    }

    
  };





  return (
    <div>
      <div className="mb-2 mt-2">
      {installation == false && (
        <button
        type="button"
        class="btn btn-primary"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
        data-bs-whatever="@mdo"
      >
        Add PPPoE Settings
      </button>
      )}</div>
      <form onSubmit={handleSubmit}>
        {installation.map((item) => (
          <>
            <h3 className="mt-3">PPPoE Settings</h3>
            <div className="row mt-1" id="pills-tab" role="tablist">
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
                  ></div>
                </div>
              </div>
            </div>
            <textarea
              className="form-control border-top-0"
              placeholder="Leave a description here"
              name="description"
              id="floatingTextarea"
              rows="6"
              onChange={handleChange}
              defaultValue={item.description}
            ></textarea>

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
                  name="pppoe_user"
                  id="inputEmail3"
                  placeholder="..."
                  className="form-control"
                  onChange={handleChange}
                  defaultValue={item.pppoe_user}
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
                  name="pppoe_password"
                  id="inputEmail3"
                  placeholder="..."
                  className="form-control"
                  onChange={handleChange}
                  defaultValue={item.pppoe_password}
                />
                <button className="btn btn-primary" type="submit">
                  Create Task
                </button>
              </div>
            </div>
          </>
        ))}
      </form>
      <div
        class="modal fade"
        id="exampleModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">
                PPPoE Settings
              </h5>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
              <form onSubmit={handleSubmit}>
                <div class="mb-3">
                  <label for="pppoe_user" class="col-form-label">
                    PPPoE User:
                  </label>
                  <input
                    type="text"
                    class="form-control"
                    id="pppoe_user"
                    name="pppoe_user"
                    onChange={handleChange}
                  />
                </div>
                <div class="mb-3">
                  <label for="pppoe_password" class="col-form-label">
                    PPPoE Password:
                  </label>
                  <input
                    type="text"
                    class="form-control"
                    id="pppoe_password"
                    name="pppoe_password"
                    onChange={handleChange}
                  />
                </div>
                <div class="mb-3">
                  <label for="message-text" class="col-form-label">
                    Description:
                  </label>
                  <textarea
                    class="form-control"
                    id="message-text"
                    name="description"
                    onChange={handleChange}
                  ></textarea>
                </div>
                <div class="modal-footer">
                  <button
                    type="button"
                    class="btn btn-secondary"
                    data-bs-dismiss="modal"
                  >
                    Close
                  </button>
                  <button type="submit" class="btn btn-primary">
                    Send
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Installations_details;
