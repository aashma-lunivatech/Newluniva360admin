import { Button, Card, Input, Space, Table, Tag } from "antd";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import {
  GetClientWiseDoctorsAvailableTimeForAppointments,
  GetDoctorAvailableTimeinClientByIds,
  getClientWiseDepartmentByClientIdluniva,
} from "../../services/appServices/ProductionServices";
import { useNavigate } from "react-router-dom";
import DateTimeBAdge from "../Common/DateTimeBAdge";

const DoctorSchdeuleClient = () => {
  const [departmentList, setDepartmentList] = useState(null);
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [clientId, setClientId] = useState("");
  const [doctorid, setDoctorId] = useState("");
  const handleRedirect = () => {
    navigate("/addclientwisedtschedule");
  };
  const handleClick = () => {
    if (
      clientId !== "" ||
      ((clientId !== undefined || doctorid !== "") && doctorid !== undefined) ||
      (!isNaN(clientId) && !isNaN(doctorid))
    ) {
      setLoading(true);

      const data = {
        docId: doctorid,
        clientId: clientId,
      };

      GetClientWiseDoctorsAvailableTimeForAppointments(data, (res) => {
        console.log(res, "res");

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

  return (
    <Doctorlists>
      <div className="">
        <Card
          title="Department List"
          bordered={false}
          style={
            {
              // width: 1240,
            }
          }
        >
          <ClientDepartmentButton>
            <h3>Doctor Schdule</h3>
            <div className="add-button">
              <div>
                <div>
                  <label className="label-name">Client ID</label>
                  <Input
                    type="number"
                    style={{ width: 300 }}
                    value={clientId}
                    onChange={(e) => setClientId(e.target.value)}
                  />
                  <label className="label-name">Doctor ID</label>
                  <Input
                    type="number"
                    style={{ width: 300 }}
                    value={doctorid}
                    onChange={(e) => setDoctorId(e.target.value)}
                  />
                  <Button className="btn-load" onClick={handleClick}>
                    Load
                  </Button>
                </div>
              </div>
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
          </ClientDepartmentButton>
        </Card>
      </div>

      {departmentList === null ? (
        ""
      ) : departmentList.length === 0 ? (
        <div className="data-not-found">No data found</div>
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
