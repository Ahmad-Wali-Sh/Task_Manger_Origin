import React from "react";
import LogMessage from "../../components/LogMessage";
import Header from "../../components/Header";
import OnlineSupport from "./components/OnlineSupport";


export default function OnlineSupportDetails() {

  return (
    <>
        <div className="page">
          <div className="col-6 mt-5 m-auto">
            <Header />
            <OnlineSupport />
            <LogMessage />
          </div>
        </div>
    </>
  );
}
