import { Card, Col, Row } from "antd";
import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const DoctorServices = () => {
  const navigate = useNavigate();
  const handledoctorclicked = () => {
    navigate("/doctor");
    // navigate("/doctorservices");
  };
  const handleclientclicked = () => {
    navigate("/drschdeuleclient");
  };
  const handledepartmentclicked = () => {
    navigate("/admindepartment");
  };
  const handleappointment = () => {
    navigate("/doctortime");
  };
  const { Meta } = Card;
  return (
    <div>
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
                onClick={handleappointment}
                hoverable
                style={
                  {
                    // width: 200,
                  }
                }
                // cover={<img src={doctor} alt="microscope" />}
              >
                <Meta title="Online Appointment" />
              </Card>
            </Col>
            <Col span={6}>
              <Card
                onClick={handledoctorclicked}
                hoverable
                style={
                  {
                    // width: 200,
                    // marginLeft: "20px",
                  }
                }
                // cover={<img src={clientimage} alt="microscope" />}
              >
                <Meta title="Doctor's Profile" />
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
                onClick={handleclientclicked}
                hoverable
                style={
                  {
                    // width: 200,
                    // marginLeft: "20px",
                  }
                }
                // cover={<img src={microscope1} alt="microscope" />}
              >
                <Meta title="Doctor's Schedule" />
              </Card>
            </Col>
          </Row>
        </Card>
      </ClientServices>
    </div>
  );
};

export default DoctorServices;
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
