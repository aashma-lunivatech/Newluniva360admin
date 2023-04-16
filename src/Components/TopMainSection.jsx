import React from "react";
import Appointment from "./Appointment";
import HospitalSurveyChart from "./HospitalSurveyChart";
import IncomeCharts from "./IncomeCharts";
import TableAppointementActivity from "./TableAppointementActivity";
import { Col } from "antd";

const TopMainSection = () => {
  return (
    <>
      <Appointment />
      <Col span={10}>
        <div className="maincontainer">
          <HospitalSurveyChart />
        </div>
      </Col>
      <div className="second-charts">
        <div className="smallcontainer">
          <IncomeCharts />
        </div>
        <div className="smallcontainer">
          <IncomeCharts />
        </div>
      </div>
      <div className="maincontainer">
        <h1>Appointment Activity</h1>
        <TableAppointementActivity />
      </div>
    </>
  );
};

export default TopMainSection;
