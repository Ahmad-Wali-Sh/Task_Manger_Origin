import React from "react";
import Header from "../../components/Header";
import Amendment from "./components/Amendment";
import AmendmentLog from "./components/AmendmentLog";
import AmendmentNotes from "./components/AmendmentNotes";

const AmendmentDetails = () => {
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
            <AmendmentNotes />
            <AmendmentNotes />
            <AmendmentNotes />
            <AmendmentNotes />
            <AmendmentNotes />
            <AmendmentNotes />
          </div>
          <div className="card-footer">
            <AmendmentLog />
          </div>
        </div>
      </div>
    </>
  );
};

export default AmendmentDetails;
