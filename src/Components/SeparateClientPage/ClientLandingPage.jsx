import { Card, Carousel, Col, Row } from "antd";
import React, { useEffect, useState } from "react";
import { GetlistofClientForOnlineReports } from "../../services/appServices/ProductionServices";
import styled from "styled-components";
import BookAppointmentDashboard from "./BookAppointmentDashboard";
import { Dashboardchart } from "./Dashboardchart/Dashboardchart";
import ClientServicesPage from "./ClientServicesPage/ClientServicesPage";
import Doctorslist from "./CollapseMenuPage/Doctorslist";
import DepartmentCollapseList from "./CollapseMenuPage/DepartmentCollapseList";
import microscope1 from "../../assets/images/microscope.jpg";
import DoctorTestimonials from "./DoctorTestimonials";
const contentStyle = {
  height: "160px",
  color: "#fff",
  lineHeight: "160px",
  textAlign: "center",
  background: "#364d79",
  width: "100%",
  height: "300px",
  transform: "scale(0.8)",
  transition: "transform 0.2s ease-in-out",
};

const ClientLandingPage = () => {
  const [clientreport, setClientReport] = useState();
  const { Meta } = Card;

  useEffect(() => {
    if (clientreport === undefined) {
      console.log(clientreport, "clientreport");
      GetlistofClientForOnlineReports((res) => {
        console.log(res, "res");
        if (res?.ClientList.length > 0) {
          setClientReport(res?.ClientList);
        } else {
          console.log("out of if else");
        }
      });
    }
  }, [clientreport]);

  return (
    <LandingPage>
      <Row>
        <Col span={24}>
          <Carousel autoplay>
            {clientreport &&
              clientreport.map((report, index) => (
                <div className="carousel-container" key={index}>
                  <img
                    className="client-logoimage"
                    src={`https://lunivacare.ddns.net/Luniva360mHealthAPI/${report.ClientLogo}`}
                    alt={report.ClientName}
                    style={contentStyle}
                  />
                </div>
              ))}
          </Carousel>
        </Col>
        <Col span={12}>{/* <ClientServicesPage /> */}</Col>
      </Row>

      <Row>
        <Col span={12}>
          {/* <Dashboardchart /> */}
          <ClientServicesPage />
        </Col>
        <Col span={10}>
          <Doctorslist />
        </Col>
      </Row>

      <div className="department-chart-section">
        <Row>
          <Col span={12}>
            <Dashboardchart />
          </Col>
          <Col span={10}>
            <DepartmentCollapseList />
          </Col>
        </Row>
        <div>
          <Row>
            <Col span={24}>
              <DoctorTestimonials />
            </Col>
          </Row>
        </div>
      </div>
    </LandingPage>
  );
};

export default ClientLandingPage;
const LandingPage = styled.div`
  .department-chart-section {
    margin-top: 20px;
  }
`;
const AppointmentDoctorPage = styled.div`
  margin-top: 30px;
  .client-logoimage {
    transform: scale(0.8);
    transition: transform 0.2s ease-in-out;
  }
`;
