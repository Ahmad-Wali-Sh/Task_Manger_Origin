import React from "react"
import Card from "./Card"

export default function GeneralDetails(props) {

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

  return (
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
          />
          {props.contract_no}
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
          />
          {props.full_name}

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
          />
        </div>
      </div>

      <Card title="Installation" />
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
  )
}
