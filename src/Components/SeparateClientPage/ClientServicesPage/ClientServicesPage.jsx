import { Card, Col, Row } from "antd";
import React from "react";
import styled from "styled-components";
import { AiOutlineHome, AiOutlineMeh } from "react-icons/Ai";
import doctor from "../../../assets/images/doctors.png";
import microscope1 from "../../../assets/images/microscope.jpg";
import { useNavigate } from "react-router-dom";
const ClientServicesPage = () => {
  const { Meta } = Card;
  const navigate = useNavigate();
  const handleAppointmentclick = () => {
    navigate("/doctortime");
  };
  const data = [
    {
      name: "Book Appointments",
      totalnum: "30",
      icon: AiOutlineHome,
    },
    {
      name: "Patients",
      totalnum: "70",
      icon: AiOutlineMeh,
    },
    // {
    //   name: "Group",
    //   totalnum: "80",
    //   icon: AiFillSetting,
    // },
  ];

  return (
    <ClientServices>
      <Card
        style={{
          width: 500,
        }}
      >
        <Row gutter={2}>
          <Col span={6}>
            <Card
              onClick={handleAppointmentclick}
              hoverable
              style={{
                width: 200,
              }}
              cover={<img src={microscope1} alt="microscope" />}
            >
              <Meta title="Set Appointments" />
            </Card>
          </Col>
          <Col
            style={{
              //   width: 200,
              marginLeft: "80px",
            }}
            span={6}
          >
            <Card
              hoverable
              style={{
                width: 200,
                marginLeft: "20px",
              }}
              cover={<img src={doctor} alt="microscope" />}
            >
              <Meta title="Book Lab Test" />
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
