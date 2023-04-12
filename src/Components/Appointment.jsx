import React from "react";
import styled from "styled-components";
import firstaid from "./../assets/images/firstaid.png";
import crutch from "./../assets/images/crutch.png";
import operation from "./../assets/images/operation.png";
import Vector from "./../assets/images/Vector.png";
import { Col, Row } from "antd";
const Appointment = () => {
  const overalldata = [
    {
      id: 1,
      image: "logo",
      number: 234,
      src: firstaid,
      name: "Appointment",
    },
    {
      id: 2,
      number: 235,
      src: crutch,
      name: "New Patients",
    },
    {
      id: 3,
      image: "logo",
      number: 789,
      src: operation,
      name: "Operations",
    },

    {
      id: 4,
      image: "logo",
      number: 789,
      src: Vector,
      name: "Hospital Earnings",
    },
    {
      id: 4,
      image: "logo",
      number: 789,
      src: Vector,
      name: "Hospital Earnings",
    },
    {
      id: 4,
      image: "logo",
      number: 789,
      src: Vector,
      name: "Hospital Earnings",
    },
  ];
  return (
    <AppointmentSection>
      <Row gutter={2}>
        {overalldata.map((item) => (
          <Col span={8}>
            <div className="cardbag">
              <div className="item-card">
                <div className="image-section">
                  <img
                    className="image-item"
                    key={item.id}
                    src={item.src}
                    alt={item.name}
                  />
                </div>
                <div className="item-name-number">
                  <span>{item.name}</span>
                  <span className="item-number">{item.number}</span>
                  {/* <span>213</span> */}
                </div>
              </div>
            </div>
          </Col>
        ))}
      </Row>
    </AppointmentSection>
  );
};

export default Appointment;
const AppointmentSection = styled.div`
  display: flex;
  grid-template-columns: auto auto auto auto;
  grid-gap: 26px;
  padding: 10px;
  .image-item {
    width: 30px;
    margin-left: 19px;
    margin-bottom: -39px;
  }
  .item-name-number {
    display: grid;
    justify-content: center;
  }
  span {
    font-size: 18px;
  }
  .item-number {
    font-size: 18px;
    color: #336cfb;
  }
  .cardbag {
    margin-top: 20px;
  }
`;
