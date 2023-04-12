import { Button, Form, Input } from "antd";
import Password from "antd/es/input/Password";
import React from "react";
import styled from "styled-components";
import login1 from "../../assets/images/login1.jpg";
import lunivalogo from "../../assets/images/lunivalogologin.png";
const LoginForm = () => {
  const handleSubmit = (e) => {
    let data = {
      //   username: e?.username,
      //   password: e?.password,
      username: "admin",
      password: "admin",
    };
  };
  return (
    <LoginFormSection>
      <img className="logo-luniva" src={lunivalogo} alt="lunivalogo" />
      <LoginContainer>
        <div className="left">
          <Logo>{/* <img src={login1} alt="logo" /> */}</Logo>
          {/* <img src={login1} alt="cake" /> */}
        </div>
        <div className="right">
          <div className="logIincontainer">
            <h1
              style={{
                color: "#163153",
                fontSize: "30px",
                letterSpacing: "2px",
              }}
            >
              Welcome to Luniva 360
            </h1>
            <Form onFinish={handleSubmit} layout="vertical">
              <Form.Item
                label="Username"
                name="username"
                rules={[
                  {
                    required: true,
                    message: "Please input your username!",
                  },
                ]}
                // labelAlign='right'
              >
                <Input />
              </Form.Item>

              <Form.Item
                label="Password"
                name="password"
                rules={[
                  {
                    required: true,
                    message: "Please input your password!",
                  },
                ]}
              >
                <Input.Password />
              </Form.Item>
              <Form.Item>
                <Button type="primary" htmlType="submit">
                  Login
                </Button>
              </Form.Item>
            </Form>
          </div>
        </div>
        <div className="bot">
          <h4>
            Powered By{" "}
            <a
              href="https://www.lunivatech.com/"
              target={"_blank"}
              style={{
                color: "#f57f20",
                fontSize: "16px",
              }}
            >
              LunivaTech Pvt.Ltd.
            </a>
          </h4>
          {/* <span>Pwered By LunivaTech Pvt.Ltd.</span> */}
        </div>
      </LoginContainer>
    </LoginFormSection>
  );
};

export default LoginForm;
const LoginFormSection = styled.div`
  .logo-luniva {
    width: 50%;
    height: 75px;
  }
`;
const LoginContainer = styled.div`
  display: flex;
  position: relative;
  width: 100%;
  height: 100vh;
  background-color: #fefefefe;

  .left {
    flex: 0.4;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      filter: grayscale(0.4);
    }
  }
  .right {
    flex: 0.6;
    .logIincontainer {
      position: absolute;
      top: 30%;
      left: 33%;
      transform: translate(-50%, -50%);
      min-height: 300px;
      padding: 16px 32px;
      background: #fefefe;
      box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
      border: 1px solid rgba(255, 255, 255, 0.18);
      border-radius: 4px;
    }
  }
  .bot {
    position: absolute;
    bottom: 100px;
    right: 10px;
  }
`;

const Logo = styled.div`
  position: absolute;
  width: 100px;
  height: 100px;
  top: 10px;
  left: 10px;
  z-index: 100;
  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;
