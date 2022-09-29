import React from 'react'
import { useState } from "react"
import axios from 'axios';
import Picker from "emoji-picker-react";


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
      
        <div className="card text-dark bg-light mb-3">
            
            <div className="card-body">
              <div className="row">
                <div className="col-1">
                  <label htmlFor="log_note" className="col-form-label">
                    <img src={user.avatar} alt="" className="avatar" />
                  </label>
                </div>
                
                <div className="col-10">
                  <textarea
                      autosize="true"
                      id="log_note"
                      name="body"
                      placeholder="Log an internal note..."
                      className="form-control text-area"
                      rows="3"
                      value={inputStr}

                      onChange={(e) => setInputStr(e.target.value)}
                    ></textarea>
                </div>
               
              </div>

              <div className="row mt-2">
                <div className="col-1 offset-1">
                
                  <div className="dropdown">
                    <button
                      className="border-0 offset-8 text-muted"
                      type="button"
                      id="dropdown1"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      <i className="fa-regular fa-face-smile p-1 icon text-muted"></i>
                    </button>
                    <ul className="dropdown-menu" aria-labelledby="dropdown1">
                      <li>
                       
                          
                            <Picker pickerStyle={{ width: "100%" }} onEmojiClick={onEmojiClick} />
                          

                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-1">
                  <button
                    className="border-0"
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
              <div className="row">
                <div className="col-1 col-md-1 col-sm-2"></div>
                <div className="col-1 col-sm-1 mt-3">
                  
                </div>
              </div>
            </div>

            
          </div>
        
   
    </>
  )
}

export default AmendmentLog