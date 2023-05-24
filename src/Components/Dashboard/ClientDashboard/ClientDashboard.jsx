import {
  FileUnknownFilled,
  SolutionOutlined,
  SwitcherOutlined,
  UploadOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Card, Col, Row } from "antd";
import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const ClientDashboard = () => {
  const navigate = useNavigate();
  const handleclientimage = () => {
    navigate("/clientlogo");
    // navigate("/doctorservices");
  };
  const handlebannerimage = () => {
    navigate("/clientbanner");
  };
  const handledepartmentclicked = () => {
    navigate("/admindepartment");
  };
  const handleappointment = () => {
    navigate("/clients");
  };
  const handleclientdepartment = () => {
    navigate("/clientwisedepartment");
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
                <div className="style-evenly">
                  <SolutionOutlined style={{ fontSize: "20px" }} />
                  <Meta title="Client Profile" />
                </div>
              </Card>
            </Col>
            <Col span={6}>
              <Card
                onClick={handleclientimage}
                hoverable
                style={
                  {
                    // width: 200,
                    // marginLeft: "20px",
                  }
                }
              >
                <div className="style-evenly">
                  <UploadOutlined style={{ fontSize: "20px" }} />
                  {/* <UploadOutlined /> */}

                  <Meta title="Upload Client Image" />
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
              span={6}
            >
              <Card
                onClick={handlebannerimage}
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
                  <UploadOutlined style={{ fontSize: "20px" }} />
                  <Meta title="Upload Client Banner" />
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
              span={6}
            >
              <Card
                onClick={handleclientdepartment}
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
                  <SwitcherOutlined style={{ fontSize: "20px" }} />
                  <Meta title="Client Department" />
                </div>
              </Card>
            </Col>
          </Row>
        </Card>
      </ClientServices>
    </div>
  );
};

export default ClientDashboard;
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
