import { Col, Row } from "antd";
import React from "react";
import styled from "styled-components";
import login1 from "../../assets/images/login1.jpg";

import LoginForm from "./LoginForm";
const Login = () => {
  return (
    <LoginSection>
      <div>
        <Row>
          <Col span={12}>
            <div className="">
              <div className=" login-content-left">
                <img src={login1} alt="login1" />
                <h2
                  style={{
                    color: "#163153",
                    fontSize: "20px",
                    letterSpacing: "2px",
                  }}
                >
                  Let/s get you setup
                </h2>
                <p
                  style={{
                    color: "#163153",
                    fontSize: "20px",
                    letterSpacing: "2px",
                  }}
                >
                  It should only take a couple of few second to go
                </p>
              </div>
            </div>
          </Col>
          <Col span={12}>
            <div className="login-content-right">
              <LoginForm />
            </div>
          </Col>
        </Row>
      </div>
    </LoginSection>
  );
};

export default Login;
const LoginSection = styled.div`
  .login-content-left {
    display: grid;
    justify-content: center;
    margin-top: 20px;
  }
  .login-content-right {
    background-color: #ecf2f0;
  }
`;
