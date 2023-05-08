import { Carousel, Col, Row } from "antd";
import { Card, Space } from "antd";
import React from "react";
import BookAppointment from "./BookAppointment";
import SearchDoctors from "./SearchDoctors";
const contentStyle = {
  height: "160px",
  color: "#fff",
  lineHeight: "160px",
  textAlign: "center",
  background: "#364d79",
};
const ClientLandingPage = () => {
  return (
    <div>
      <Carousel autoplay>
        <div>
          <h3 style={contentStyle}>1</h3>
        </div>
        <div>
          <h3 style={contentStyle}>2</h3>
        </div>
        <div>
          <h3 style={contentStyle}>3</h3>
        </div>
        <div>
          <h3 style={contentStyle}>4</h3>
        </div>
      </Carousel>
      <div>
        <Row gutter={1}>
          <Col span={6}>
            <div>
              <BookAppointment />
            </div>
          </Col>
          <Col span={6}>
            <SearchDoctors />
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default ClientLandingPage;
