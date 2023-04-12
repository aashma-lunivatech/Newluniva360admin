import React from "react";
import styled from "styled-components";
import { Col, Row } from "antd";
import loginavatar from "../../assets/images/loginavatar.png";
import sideimage from "../../assets/images/sidepieceimage.png";
import user from "../../assets/images/user.png";
import NewLoginPage from "../Login/NewLoginPage";

const Homepage = () => {
  return (
    <Homepagecontainer>
      <Row>
        <Col span={12}>
          <div className="welcome-section">
            <img
              className="image-section"
              src={loginavatar}
              alt="login avatar"
            />
            <h2 className="login-text">WELCOME</h2>
            <NewLoginPage />
          </div>
        </Col>
        <Col span={12}>
          <RightSection>
            <div className="right-section">
              <img className="image-user" src={user} alt="user image" />
            </div>
          </RightSection>
          <div className="bottom-content">
            <h4 className="bottom-content">
              Powered By{" "}
              <a
                className="bottom-content"
                href="https://www.lunivatech.com/"
                target={"_blank"}
                style={{
                  color: "#f57f20",
                  fontSize: "16px",
                  marginLeft: "5px",
                }}
              >
                LunivaTech Pvt.Ltd.
              </a>
            </h4>
            {/* <span>Pwered By LunivaTech Pvt.Ltd.</span> */}
          </div>
        </Col>
      </Row>
    </Homepagecontainer>
  );
};

export default Homepage;

const Homepagecontainer = styled.div`
  .bottom-content {
    display: flex;
    justify-content: center;
  }
  width: 100%;
  height: 700px;
  background: #00523f;
  border-radius: 50px;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  .login-text {
    /* color: white; */
    font-size: 28px;
  }
  .image-section {
    margin-bottom: 1rem;
    max-width: 100%;
    height: auto;
  }

  .welcome-section {
    display: flex;
    flex-direction: column;
    -moz-box-align: center;
    align-items: center;
    -moz-box-pack: center;
    justify-content: center;
    width: 111%;
    text-align: center;
    padding: 1rem;
    background: whitesmoke;
    box-sizing: content-box;
    border-radius: 20px;
    height: 392px;
  }
`;

const RightSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-left: 1rem;
  .right-section {
    display: flex;
    justify-content: flex-end;
  }
  .image-user {
    max-width: 80%;
    height: auto;
    border-radius: 44px;
    margin-left: 40px;
  }
`;
const FormSection = styled.div`
  .submit-button {
    font-size: 18px;
    padding: 10px 20px 30px 20px;
    border-radius: 0 1rem 4rem 1;
    line-height: 1;
    font-weight: bold;
    justify-content: center;
    align-items: center;
    margin-right: 37px;
  }
`;
