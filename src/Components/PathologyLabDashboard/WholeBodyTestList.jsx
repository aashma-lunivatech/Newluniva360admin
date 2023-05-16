import { VerticalLeftOutlined } from "@ant-design/icons";
import { Button, Col, Row } from "antd";
import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
const testlistdata = [
  {
    icon: <VerticalLeftOutlined />,
    name: "Whole Body Checkup",
    test1: "RBC Test",
    test2: "Urine sample Test",
    test3: "WBC Count Test",
    test4: "Body Sugar Test",
  },
  {
    icon: <VerticalLeftOutlined />,
    name: "Whole Body Checkup",
    test1: "RBC Test",
    test2: "Urine sample count",
    test3: "WBC Count Test",
    test4: "Body Sugar Test",
  },
];

const WholeBodyTestList = () => {
  const navigate = useNavigate();
  const handlebooktest = () => {
    navigate("/BookTestBill");
  };
  return (
    <WholeBody>
      <div>
        <Row>
          {testlistdata.map((item, index) => (
            <Col className="column-pathology" span={6} key={index}>
              <h1 className="test-heading">{item.name}</h1>
              <ul>
                {item.icon}
                <span className="icon-test"> {item.test1}</span>
              </ul>
              <ul>
                {item.icon}
                <span className="icon-test">{item.test2}</span>
              </ul>
              <ul>
                {item.icon}
                <span className="icon-test">{item.test3}</span>
              </ul>
              <ul>
                {item.icon}
                <span className="icon-test">{item.test4}</span>
              </ul>
              <Button onClick={handlebooktest} className="btn-load book-btn">
                Book Test
              </Button>
            </Col>
          ))}
        </Row>
      </div>
    </WholeBody>
  );
};

export default WholeBodyTestList;

const WholeBody = styled.div`
  .column-pathology {
    border-radius: 10px;
    margin-right: 12px;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  }
  .test-heading {
    justify-content: center;
    display: flex;
    border-bottom: 1px solid #d6d6e1;
  }
  .icon-test {
    margin-left: 10px;
  }
  .book-btn {
    float: right;
  }
  .book-btn:hover {
    color: white;
  }
`;
