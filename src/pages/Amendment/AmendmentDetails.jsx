import React from "react";
import Header from "../../components/Header";
import Amendment from "./components/Amendment";
import AmendmentLog from "./components/AmendmentLog";
import AmendmentNotes from "./components/AmendmentNotes";
import { useLocation } from "react-router-dom";


const AmendmentDetails = () => {
  const location = useLocation();
  const data = location.state?.data;

  return (
    <>
      <div className="page">
        <div className="col-8 m-auto">
          <Header />
          <Amendment />
          <div
            className="card overflow-auto myScroll"
            style={{ maxHeight: "90vh" }}
          >
            <AmendmentNotes id={data.id}/>
           
          </div>
          <div className="card-footer">
            <AmendmentLog id={data.id}/>
          </div>
        </div>
      </div>
    </>
  );
};

export default AmendmentDetails;
