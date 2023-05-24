import {
  AccountBookOutlined,
  FileUnknownFilled,
  SolutionOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Card, Col, Row } from "antd";
import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const MainPageOnlineRegistration = () => {
  const navigate = useNavigate();
  const handleappointmentonline = () => {
    navigate("/doctortime");
    // navigate("/doctorservices");
  };
  const handledoctorclicked = () => {
    navigate("/onlinedoctorregistration");
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
            {/* <Col span={6}>
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
                <div className="style-evenly">
                  <SolutionOutlined style={{ fontSize: "20px" }} />
                  <Meta title="Appointment" />
                </div>
              </Card>
            </Col> */}
            <Col span={8}>
              <Card
                onClick={handleappointmentonline}
                hoverable
                style={
                  {
                    // width: 200,
                    // marginLeft: "20px",
                  }
                }
              >
                <div className="style-evenly">
                  <UserOutlined style={{ fontSize: "20px" }} />

                  <Meta title="Online Doctor's Appointment" />
                </div>
              </Card>
            </Col>
            <Col
              style={
                {
                  //   width: 200,
                  // marginLeft: "80px",
                }
              }
              span={8}
            >
              <Card
                onClick={handledoctorclicked}
                hoverable
                style={
                  {
                    // width: 200,
                    // marginLeft: "20px",
                  }
                }
                // cover={<img src={microscope1} alt="microscope" />}
              >
                <div className="style-evenly">
                  <AccountBookOutlined style={{ fontSize: "20px" }} />
                  <Meta title="Online Doctor Register" />
                </div>
              </Card>
            </Col>
          </Row>
        </Card>
      </ClientServices>
    </div>
  );
};

export default MainPageOnlineRegistration;
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
