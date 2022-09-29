import React from "react";
import { useLocation } from "react-router-dom";
import LogMessage from "../../components/LogMessage";
import Installations_details from "./components/Installations_details";
import Link_Details from "../../components/Link_Details";
import Header from "../../components/Header";
import Switch from "../../components/Switch";
import GeneralDetails from "./components/GenralDetails";

const TaskDetails = (props) => {
  const location = useLocation();
  const data = location.state?.data;

  return (
    <div className="page">
      <div className="col-6 mt-5 m-auto">
        <section>
          <Header />
          <GeneralDetails />
          <Installations_details id={data.id} />
          <Link_Details data={[data]} id={data.id} />
          <Switch />
          <LogMessage data={[data]} id={data.id}/>
        </section>
      </div>
    </div>
  );
};

export default TaskDetails;
