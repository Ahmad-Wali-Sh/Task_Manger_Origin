import React from "react";

export default function Members() {


  return (
    <>
      <div className="d-flex justify-content-center m-4">
        {/* <img
                                src="/dist/img/avatar4.jpg"
                                alt="avatar"
                                className="avatar"
                              />
                              <img
                                src="/dist/img/avatar1.jpeg"
                                alt="avatar"
                                className="avatar"
                              /> */}
        <img
          src="../../images/avatar1.jpeg"
          alt="avatar"
          className="avatar"
        />
      </div>
      <div className="col-6 m-auto">
        <div className="input-group flex-nowrap">
          <span
            class="input-group-text"
            id="addon-wrapping"
          >
            <i className="fa-solid fa-bars-filter"></i>
          </span>
          <input
            type="text"
            class="form-control"
            placeholder="Filter members"
            aria-label="Username"
            aria-describedby="addon-wrapping"
          />
        </div>
      </div>
      <div className="col-5 membersbox">
        <ul>

          <li className="d-flex justify-content-between padd">
            <div className="list-item">
              <img
                src="../../images/avatar1.jpeg"
                alt="avatar"
                className="avatar pad"
              />
              <span className="ml-4">
                Sayed Kazem Hussaini
              </span>
            </div>
            <input
              type="checkbox"
              className="mt-3 mr-3"
              name="assign"
              id="assign"
            />
          </li>
        </ul>
      </div>
    </>
  )
}