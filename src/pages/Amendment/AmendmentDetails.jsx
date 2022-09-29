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
          <AmendmentNotes />
          <AmendmentLog />
        </div>
      </div>
    </>
  );
};

export default AmendmentDetails;
