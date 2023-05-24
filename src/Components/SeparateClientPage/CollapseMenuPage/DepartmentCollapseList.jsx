///department
import React, { useEffect } from "react";
import { SettingOutlined } from "@ant-design/icons";
import { Col, Collapse, Row, Select } from "antd";
import { useState } from "react";
import DoctorListApifetched from "../DoctorsData/DoctorListApifetched";
import { GetDepartmentLists } from "../../../services/appServices/ProductionServices";
import styled from "styled-components";
// import "./DepartmentCollapseList.css"; // Import custom CSS file

const { Panel } = Collapse;
const { Option } = Select;
const text = `scdnbsdn`;

const DepartmentCollapseList = () => {
  const [departmentList, setDepartmentList] = useState();
  const [totallist, setTotalList] = useState();
  const [expandIconPosition, setExpandIconPosition] = useState("start");
  const onPositionChange = (newExpandIconPosition) => {
    setExpandIconPosition(newExpandIconPosition);
  };
  const onChange = (key) => {
    console.log(key);
  };
  const genExtra = () => (
    <SettingOutlined
      onClick={(event) => {
        event.stopPropagation();
      }}
    />
  );

  const Departmentlistdetails = () => {
    useEffect(() => {
      if (departmentList === undefined) {
        GetDepartmentLists((res) => {
          if (res?.DepartmentList && res?.DepartmentList.length > 0) {
            setDepartmentList(res?.DepartmentList);
          } else {
            setDepartmentList([]);
          }
        });
      }
    }, []);

    return (
      <>
        <Row>
          {departmentList &&
            departmentList.map((report, index) => (
              <div className="department-container" key={index}>
                <Col span={5}>
                  <div className="doctorlistsection">
                    {/* Rest of the code */}
                    <div className="doctors-details">
                      {/* <span>{index + 1}</span> */}
                      <ul>
                        <li style={{ whiteSpace: "nowrap" }}>
                          <span className="doctor-name">
                            {report.DepartmentName}
                          </span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </Col>
              </div>
            ))}
        </Row>
      </>
    );
  };

  return (
    <Department>
      <Collapse
        defaultActiveKey={["1"]}
        onChange={onChange}
        expandIconPosition={expandIconPosition}
      >
        <Panel
          style={{ fontSize: "20px" }}
          header="Department List"
          key="1"
          extra={genExtra()}
        >
          <div className="custom-scrollbar">
            <Departmentlistdetails />
          </div>
        </Panel>
      </Collapse>
      <br />
    </Department>
  );
};

export default DepartmentCollapseList;
const Department = styled.div`
  .department-container {
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
    border-radius: 10px;
    padding: 20px;
    background-color: #fff;
    margin: 5px;
  }
`;
