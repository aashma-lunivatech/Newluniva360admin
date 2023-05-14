import { Button, Card, Input, Space, Table } from "antd";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import {
  GetAppointmentSettingsByDoctorIds,
  GetDocTimeScheduleForAppointments,
} from "../../services/appServices/ProductionServices";
import { useNavigate } from "react-router-dom";
import moment from "moment";
import DateTimeBAdge from "../Common/DateTimeBAdge";
const AppointmentSettings = () => {
  const [inputValue, setInputValue] = useState("");
  const [departmentList, setDepartmentList] = useState(null);
  const [loading, setLoading] = useState(false);
  const columns = [
    {
      title: "DsId",
      dataIndex: "DsId",
      key: "DsId",
    },

    {
      title: "DoctId",
      dataIndex: "DoctId",
      key: "DoctId",
    },
    {
      title: "DShift",
      dataIndex: "DShift",
      key: "DShift",
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
                pathname: `/editdoctoravailableschdeule/edit/${record.DoctId}`,
              })
            }
          >
            Edit
          </Button>
        </Space>
      ),
    },
    //
  ];
  const navigate = useNavigate();
  const handleRedirect = () => {
    navigate("/adddoctortimeappointment");
  };
  const handleClick = () => {
    if (
      inputValue !== null &&
      inputValue !== undefined &&
      inputValue.trim() !== "" &&
      !isNaN(inputValue)
    ) {
      setLoading(true);
      const data = {
        docId: inputValue,
      };
      GetAppointmentSettingsByDoctorIds(data, (res) => {
        // console.log(res, "res");
        if (res?.DoctorAppointment && res?.DoctorAppointment.length > 0) {
          setDepartmentList(res.DoctorAppointment);
        } else {
          setDepartmentList([]);
        }
        setLoading(false);
      });
    } else {
      // Display error message or do nothing
      // console.log("out of block");
    }
  };

  return (
    <DoctorSchedulelist>
      <div className="">
        <Card
          title="Appointment Settings"
          bordered={false}
          style={
            {
              // width: 1240,
            }
          }
        >
          <div className="add-button">
            {/* <Button
              htmlType="submit"
              // disabled={butDis}
              type="primary"
              className="btn-load"
              onClick={() => handleRedirect()}
            >
              Add Appointments
            </Button> */}
          </div>
          <ClientDepartmentButton>
            <div>
              <label className="label-name">Doctor ID</label>
              <Input
                id="input"
                type="number"
                style={{ width: 300 }}
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
              />
              <Button className="btn-load" onClick={handleClick}>
                Load
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
              <span className="data-not-found">Data Not Found</span>
            </div>
          ) : (
            <Table dataSource={departmentList} columns={columns} />
          )}
        </div>
      )}
    </DoctorSchedulelist>
  );
};

export default AppointmentSettings;
const DoctorSchedulelist = styled.div`
  .table-div {
    margin-top: 10px;
  }
  .data-not-found {
    font-size: 18px;
    color: red;
  }
`;
const ClientDepartmentButton = styled.div``;
