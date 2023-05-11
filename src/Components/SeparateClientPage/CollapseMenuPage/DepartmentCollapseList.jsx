import React, { useEffect } from "react";
import { SettingOutlined } from "@ant-design/icons";
import { Col, Collapse, Row, Select } from "antd";
import { useState } from "react";
import DoctorListApifetched from "../DoctorsData/DoctorListApifetched";
import { GetDepartmentLists } from "../../../services/appServices/ProductionServices";
import styled from "styled-components";
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
      // console.log(departmentList, "departlist");
      if (departmentList === undefined) {
        GetDepartmentLists((res) => {
          if (res?.DepartmentList && res?.DepartmentList.length > 0) {
            setDepartmentList(res?.DepartmentList);
          } else {
            setDepartmentList([]);
          }
        });
      } else {
        const firstFiveDepartments = departmentList.slice(0, 5);
        let temp = [];
        for (let i = 0; i < firstFiveDepartments.length; i++) {
          // console.log(firstFiveDepartments[i]); // or display them in any other way you want
          temp.push(firstFiveDepartments[i]);
          setDepartmentList(temp);
          //   setDepartmentList(firstFiveDepartments[i]);
        }
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
                    {/* <img
                        // alt="DocImage"
                        className="image-doctor"
                        src={`https://lunivacare.ddns.net/Luniva360mHealthAPI/${report.LogoPath}`}
                      /> */}
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
          <div>
            {/* <departmentlistdetails /> */}
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
