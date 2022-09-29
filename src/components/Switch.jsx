import React from "react"



export default function Switch () {
  
    function handleSwitch(e) {
      let isChecked = e.target.checked;
      console.log(isChecked);
    }
 
    return (
        <>
        <div className="card bg-light mb-2 mt-2">
        <div className="card-body">

        <div className="row mt-2">
          <div className="col-4">Installation confirmed</div>
          <label className="switch">
            <input
              type="checkbox"
              name="switch"
              id="switch"
              onChange={(e) => handleSwitch(e)}
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
              onChange={(e) => handleSwitch(e)}
            />
            <span className="slider round"></span>
          </label>
        </div>
        </div>
        </div>
        </>
    )
}