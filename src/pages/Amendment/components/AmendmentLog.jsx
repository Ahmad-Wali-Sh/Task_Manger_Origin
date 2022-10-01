import React from "react";
import { useState } from "react";
import axios from "axios";
import Picker from "emoji-picker-react";
import NotificationManager from "react-notifications/lib/NotificationManager";



function AmendmentLog(props) {
  const TASK_LOG_URL = process.env.REACT_APP_TASK_LOG;
  const [logmessage, setLogMessage] = React.useState({
    body: "",
    task: props.id,
  });
  const [note, setNote] = React.useState([]);

  const [inputStr, setInputStr] = useState("");

  const onEmojiClick = (event) => {
    setInputStr((prevInput) => prevInput + event.emoji);
  };

  const submitNotification = (e)  => {
    e.preventDefault()
    NotificationManager.success("Sent!", "", 2000)
  }
  const errorNotification = (e)  => {
    e.preventDefault()
    NotificationManager.error("Not Sent!", "", 2000)
  }
  const warningNotification = (e)  => {
    e.preventDefault()
    NotificationManager.warning("Sending Your Data...", "Pending", 2000)
  }

  



  const NoteSubmit = (e) => {
    e.preventDefault()
  }

  console.log(inputStr);

  const LogMessageSubmit = async (e) => {
    e.preventDefault();
    const LogMessageForm = new FormData();
    LogMessageForm.append("body", inputStr);
    LogMessageForm.append("task", logmessage.task);

    try {
      const response = await axios({
        method: "POST",
        url: TASK_LOG_URL,
        data: LogMessageForm,
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      console.log(response);
    } catch (err) {
      console.log(err);
    }
  };
  console.log(props.id);

  React.useEffect(() => {
    axios
      .get(TASK_LOG_URL + `?id=${props.id}`, {})
      .then((res) => setNote(res.data.results));
    console.log(note);
  }, []);

  const [user, setUser] = React.useState({});
  React.useEffect(() => {
    axios
      .get("http://192.168.60.55:8000/api/user/me/", {})
      .then((res) => setUser(res.data));
    console.log(user);
  }, []);

  return (
    <>
      <div className="row mt-4" style={{ boxSizing: "content-box" }}>
        <div className="col-1" style={{ position: "relative", bottom: "1rem" }}>
          <label htmlFor="log_note" className="col-form-label">
            <img src={user.avatar} alt="" className="avatar" />
          </label>
        </div>

        <div className="col-10">
          <textarea
            autosize="true"
            id="log_note"
            name="body"
            placeholder="Send Your Message..."
            className="form-control text-area"
            rows="2"
            value={inputStr}
            onChange={(e) => setInputStr(e.target.value)}
          ></textarea>
        </div>
        <div className="col-1">
          <form onSubmit={NoteSubmit}>
            <button
              type="submit"
              className="btn btn-secondary message--send btn-sm"
              onClick={logmessage.response == 'created' ? submitNotification : submitNotification}
            >
              <i class="fa-solid fa-paper-plane"></i>
              
            </button>
          </form>
        </div>
      </div>

      <div className="row mt-2">
        <div className="col-1 offset-1">
          <div className="dropdown">
            <button
              className="border-0 text-muted"
              type="button"
              id="dropdown1"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <i className="fa-regular fa-face-smile p-1 icon text-muted"></i>
            </button>
            <ul className="dropdown-menu" aria-labelledby="dropdown1">
              <li>
                <Picker
                  pickerStyle={{ width: "100%" }}
                  width={300}
                  height={300}
                  onEmojiClick={onEmojiClick}
                  previewConfig={{
                    showPreview: false
                  }}
                />
              </li>
            </ul>
          </div>
        </div>
        <div className="col-1 clip">
          <button
            className="border-0 text-muted"
            type="button"
            id="dropdown1"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <i className="fa-solid fa-paperclip p-1 icon text-muted"></i>
          </button>
          <ul className="dropdown-menu" aria-labelledby="dropdown1">
            <li>
              <a className="dropdown-item text-primary" href="#">
                Edit
              </a>
            </li>
            <li>
              <a className="dropdown-item text-danger" href="#">
                Archive
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default AmendmentLog;
