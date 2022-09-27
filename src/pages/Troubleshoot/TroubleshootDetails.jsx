import React from "react";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import LogMessage from "../../components/LogMessage";
import axios from "axios";
import Troubleshoot from "./components/Troubleshoot";
import Header from "../../components/Header";
import Switch from "../../components/Switch";
import CheckList from "../../components/CheckList";
import Link_Details from "../../components/Link_Details";

const TroubleshootDetails = (props) => {
  const location = useLocation();
  const data = location.state?.data;

  return (
    <div className="page">
      <div className="col-6 mt-5 m-auto">
        <Header />
        <Troubleshoot />
        <Link_Details data={[data]} id={data.id} />
        <CheckList />
        <Switch />
        <LogMessage />
      </div>
    </div>
  );
};

export default TroubleshootDetails;
