import { Button, Card, Col, Input, Row, Select, Space, Table, Tag } from "antd";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import {
  GetClientWiseDoctorsAvailableTimeForAppointments,
  GetDoctorAvailableTimeinClientByIds,
  GetDoctorDetailsByDoctorIds,
  getClientWiseDepartmentByClientIdluniva,
} from "../../services/appServices/ProductionServices";
import { useNavigate } from "react-router-dom";
import DateTimeBAdge from "../Common/DateTimeBAdge";
import { GetListOfRegisteredClientsluniva } from "../../services/appServices/ProductionServices";

const DoctorSchdeuleClient = () => {
  const [departmentList, setDepartmentList] = useState(null);
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [clientId, setClientId] = useState("");
  const [doctorid, setDoctorId] = useState("");
  const [userselecteddoctor, setUserSelectedDoctor] = useState([]);
  const [inputValue, setInputValue] = useState();
  const [clientlist, setClientList] = useState();

  const handleRedirect = () => {
    navigate("/addclientwisedtschedule");
  };
  useEffect(() => {
    console.log(inputValue, "inputvalue");
  });
  const handleClick = () => {
    if (
      clientId !== "" ||
      ((clientId !== undefined || doctorid !== "") && doctorid !== undefined) ||
      (!isNaN(clientId) && !isNaN(doctorid))
    ) {
      setLoading(true);

      const data = {
        docId: inputValue,
        clientId: clientId,
      };
      console.log(data, "userentereddata");
      GetClientWiseDoctorsAvailableTimeForAppointments(data, (res) => {
        // console.log(res, "res");

        if (res?.DoctorTime && res?.DoctorTime.length > 0) {
          setDepartmentList(res?.DoctorTime);
        } else {
          setDepartmentList([]);
        }

        setLoading(false);
      });
    } else {
      // Display error message or do nothing
    }
  };
  const columns = [
    {
      title: "CDId",
      dataIndex: "CDId",
      key: "CDId",
    },
    {
      title: "DoctorId",
      dataIndex: "DoctorId",
      key: "DoctorId",
    },
    {
      title: "ClientId",
      dataIndex: "ClientId",
      key: "ClientId",
    },
    {
      title: "DocShift",
      dataIndex: "DocShift",
      key: "DocShift",
    },
    {
      title: "Sun",
      dataIndex: "Sun",
      key: "Sun",
      render: (val) => <DateTimeBAdge data={val} />,
    },
    {
      title: "Mon",
      dataIndex: "Mon",
      key: "Mon",
      render: (val) => <DateTimeBAdge data={val} />,
    },
    {
      title: "Tue",
      dataIndex: "Tue",
      key: "Tue",
      render: (val) => <DateTimeBAdge data={val} />,
    },
    {
      title: "Wed",
      dataIndex: "Wed",
      key: "Wed",
      render: (val) => <DateTimeBAdge data={val} />,
    },
    {
      title: "Thu",
      dataIndex: "Thu",
      key: "Thu",
      render: (val) => <DateTimeBAdge data={val} />,
    },
    {
      title: "Fri",
      dataIndex: "Fri",
      key: "Fri",
      render: (val) => <DateTimeBAdge data={val} />,
    },
    {
      title: "Sat",
      dataIndex: "Sat",
      key: "Sat",
      render: (val) => <DateTimeBAdge data={val} />,
    },
    {
      title: "AppTimeGap",
      dataIndex: "AppTimeGap",
      key: "AppTimeGap",
    },

    {
      title: "Action",
      key: "action",
      render: (text, record) => (
        <Space size="middle">
          <Button
            className="btn-load"
            onClick={() =>
              navigate({
                pathname: `/editclientdrschdule/edit/${record.CDId}`,
              })
            }
          >
            Edit
          </Button>
        </Space>
      ),
    },
  ];

  // useEffect(() => {
  //   GetDepartmentLists((res) => {
  //     if (res?.DepartmentList && res?.DepartmentList.length > 0) {
  //       setDepartmentList(res?.DepartmentList);
  //     } else {
  //       setDepartmentList([]);
  //     }
  //   });
  // }, []);

  useEffect(() => {
    // Fetch department list when the component mounts
    const data = {
      docId: 0,
    };
    GetDoctorDetailsByDoctorIds(data, (res) => {
      if (res?.DoctorDetails && res?.DoctorDetails.length > 0) {
        setUserSelectedDoctor(res?.DoctorDetails);
      } else {
        setUserSelectedDoctor([]);
        setListVisible(true);
      }
      setLoading(false);
    });
  }, []);

  useEffect(() => {
    GetListOfRegisteredClientsluniva((res) => {
      // console.log(res, "res");
      if (res?.ClientList.length > 0) {
        setClientList(res?.ClientList);
      } else {
        // console.log("out of if else");
        setClientList([]);
      }
    });
  }, []);

  return (
    <Doctorlists>
      <div className="">
        <Card
          title="Doctor Schdule"
          bordered={false}
          style={
            {
              // width: 1240,
            }
          }
        >
          <ClientDepartmentButton>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <h3></h3>
              <Button
                htmlType="submit"
                className="btn-load"
                // disabled={butDis}
                type="primary"
                onClick={() => handleRedirect()}
              >
                Add Schdeule
              </Button>
            </div>
            <div>
              <div>
                <Row>
                  <Col span={10}>
                    <div>
                      <label className="label-name">Client</label>
                      {/* <Input
                    type="number"
                    style={{ width: 300 }}
                    value={clientId}
                    onChange={(e) => setClientId(e.target.value)}
                  /> */}
                      <Select
                        style={{ width: "80%" }}
                        // onChange={handleclientselect}
                        value={clientId}
                        onChange={(value) => setClientId(value)}
                        showSearch
                        filterOption={(input, option) => {
                          return (
                            option.key
                              .toLowerCase()
                              .indexOf(input.toLowerCase()) >= 0 ||
                            option.title
                              .toLowerCase()
                              .indexOf(input.toLowerCase()) >= 0
                          );
                        }}
                      >
                        {clientlist !== undefined &&
                          clientlist.map((e) => (
                            <Option
                              title={e.ClientName}
                              value={e.RId}
                              key={e.RId}
                            >
                              {e.ClientName}
                            </Option>
                          ))}
                      </Select>
                    </div>
                  </Col>
                  <Col span={10}>
                    <div>
                      <label
                        style={{ marginLeft: "20px" }}
                        className="label-name"
                      >
                        Doctor:
                      </label>
                      {/* <Input
                    type="number"
                    style={{ width: 300 }}
                    value={doctorid}
                    onChange={(e) => setDoctorId(e.target.value)}
                  /> */}
                      <Select
                        style={{ width: "80%" }}
                        value={inputValue}
                        // onChange={(e) => setInputValue(e.target.value)}
                        onChange={(value) => setInputValue(value)}
                        showSearch
                        filterOption={(input, option) => {
                          return (
                            option.key
                              .toLowerCase()
                              .indexOf(input.toLowerCase()) >= 0 ||
                            option.title
                              .toLowerCase()
                              .indexOf(input.toLowerCase()) >= 0
                          );
                        }}
                      >
                        {userselecteddoctor !== undefined &&
                          userselecteddoctor.map((e) => (
                            <Option
                              title={e.DoctorName}
                              value={e.DId}
                              key={e.DId}
                            >
                              {e.DoctorName}
                            </Option>
                          ))}
                      </Select>
                    </div>
                  </Col>
                  <Col span={2}>
                    <Button className="btn-load" onClick={handleClick}>
                      Load
                    </Button>
                  </Col>
                </Row>
              </div>
            </div>
          </ClientDepartmentButton>
        </Card>
      </div>

      {departmentList === null ? (
        ""
      ) : departmentList.length === 0 ? (
        <div className="data-not-found">No Schedule Found </div>
      ) : (
        <div className="ant-card-head table-data table-div">
          {loading ? (
            <div>
              <span className="data-not-found">Loading</span>
            </div>
          ) : (
            <Table dataSource={departmentList} columns={columns} />
          )}
        </div>
      )}
    </Doctorlists>
  );
};

export default DoctorSchdeuleClient;
const Doctorlists = styled.div`
  .table-div {
    margin-top: 10px;
  }
  .data-not-found {
    font-size: 18px;
    color: red;
  }
  .add-button {
    display: flex;
    justify-content: space-between;
  }
  .table-data {
    margin-top: 20px;
  }
`;
const ClientDepartmentButton = styled.div``;
