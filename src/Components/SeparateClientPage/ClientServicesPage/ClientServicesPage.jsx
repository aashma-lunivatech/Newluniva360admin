import { Card, Col, Row } from "antd";
import React from "react";
import styled from "styled-components";
import { AiOutlineHome, AiOutlineMeh } from "react-icons/Ai";
import doctor from "../../../assets/images/doctors.png";
import microscope1 from "../../../assets/images/microscope.jpg";
import clientimage from "../../../assets/images/clientimage.png";
import appointmentimage from "../../../assets/images/appointmentimage.png";
import { useNavigate } from "react-router-dom";
const ClientServicesPage = () => {
  const { Meta } = Card;
  const navigate = useNavigate();
  const handledoctorclicked = () => {
    // navigate("/doctor");
    navigate("/doctorservices");
  };
  const handleclientclicked = () => {
    navigate("/clients");
  };
  const handledepartmentclicked = () => {
    navigate("/admindepartment");
  };
  const handleappointment = () => {
    navigate("/doctortime");
  };
  // const handledepartmentclicked = () => {};
  return (
    <ClientServices>
      <Card
        style={
          {
            // width: ,
          }
        }
      >
        <Row gutter={2}>
          <Col span={6}>
            <Card
              onClick={handledoctorclicked}
              hoverable
              style={
                {
                  // width: 200,
                }
              }
              cover={<img src={doctor} alt="microscope" />}
            >
              <Meta title="Doctors" />
            </Card>
          </Col>
          <Col span={6}>
            <Card
              onClick={handleclientclicked}
              hoverable
              style={
                {
                  // width: 200,
                  // marginLeft: "20px",
                }
              }
              cover={<img src={clientimage} alt="microscope" />}
            >
              <Meta title="Clients" />
            </Card>
          </Col>
          <Col
            style={
              {
                //   width: 200,
                // marginLeft: "80px",
              }
            }
            span={6}
          >
            <Card
              onClick={handledepartmentclicked}
              hoverable
              style={
                {
                  // width: 200,
                  // marginLeft: "20px",
                }
              }
              cover={<img src={microscope1} alt="microscope" />}
            >
              <Meta title="Departments" />
            </Card>
          </Col>
          <Col
            style={
              {
                //   width: 200,
                // marginLeft: "80px",
              }
            }
            span={6}
          >
            <Card
              onClick={handleappointment}
              hoverable
              style={
                {
                  // width: 200,
                  // marginLeft: "20px",
                }
              }
              cover={<img src={appointmentimage} alt="appointment" />}
            >
              <Meta title="Appointments" />
            </Card>
          </Col>
        </Row>
      </Card>
    </ClientServices>
  );
};
{
  /*
{
  data.map((item, index) => (
    <Col
      span={10}
      className={index === 2 ? "service-container mt-20" : "service-container"}
      key={index}
    >
      <div className="div-image">
        {/* <img style={{ width: "100px" }} src={doctor} alt="microscope" /> */
}
{
  /*}
        <span className="appointmentsection">
          <p className="icon-services">{item.icon && <item.icon />}</p>
          <span className="service-name">
            <span className="service-name-particular">{item.name}</span>
          </span>
        </span>
      </div>
    </Col>
  ));
}
*/
}

export default ClientServicesPage;

const ClientServices = styled.div`
  .appointmentsection {
    display: flex;
  }
  .service-name {
    margin: 10px;
    display: grid;
  }
  .service-name-particular {
    font-size: 15px;
    font-weight: bold;
    color: green;
  }
  .icon-services {
    border-radius: 50px;
    /* background-color: ; */
    background-color: skyblue;
    width: 40px;
    height: 40px;
  }
  .icon-services svg {
    margin: 7px;
    font-size: 25px;
  }
  .service-container {
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
    border-radius: 10px;
    padding: 20px;
    background-color: #fff;
    margin: 5px;
  }

  .service-container:nth-child(3) {
    margin-top: 20px;
  }

  .mt-20 {
    margin-top: 20px;
  }
  .div-image {
  }
`;
