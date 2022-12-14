import React from "react";
import LogMessage from "../../components/LogMessage";
import Header from "../../components/Header";
import OnlineSupport from "./components/OnlineSupport";
import { useLocation } from "react-router-dom";

export default function OnlineSupportDetails() {
  const location = useLocation();
  const data = location.state?.data;

  return (
    <>
      <div className="page">
        <div className="col-6 mt-5 m-auto">
          <Header />
          <OnlineSupport />
          <LogMessage data={[data]} id={data.id} />
        </div>
      </div>
    </>
  );
}
