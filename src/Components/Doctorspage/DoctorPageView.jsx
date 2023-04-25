import { Button, Card } from "antd";
import React from "react";
import { NavLink, Navigate, useNavigate } from "react-router-dom";
import DoctorPage from "./DoctorsPage";
import Mainlayout from "../../Layouts/layout";
import DoctorDetails from "../Settings/DoctorDetails";
import DoctorsProfilePageNew from "../DoctorsServicespage/DoctorsProfilePageNew";
const DoctorPageView = () => {
  const navigate = useNavigate();
  const handleRedirect = () => {
    navigate("/adddoctor");
  };
  return (
    <div>
      <div className="">
        {/* <Card
          title="Doctors Details"
          bordered={false}
          style={
            {
              // width: 1240,
            }
          }
        > */}
        {/* <div className="add-button">
            <Button
              htmlType="submit"
              // disabled={butDis}
              type="primary"
              onClick={() => handleRedirect()}
            >
              Add Doctor
            </Button>
          </div> */}
        {/* </Card> */}
        <div>{/* <DoctorDetails /> */}</div>
        <div>
          <DoctorsProfilePageNew />
        </div>
      </div>
    </div>
  );
};

export default DoctorPageView;
