import { Button, Card, Input, Space, Table } from "antd";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import {
  GetClientWiseDoctorsAvailableTimeForAppointments,
  GetlistofDoctorsByClientIdAndDepartmentIds,
} from "../../services/appServices/ProductionServices";

const DoctorSchedule = () => {
  const [clientId, setClientId] = useState("");
  const [doctorid, setDoctorId] = useState("");
  const [departmentList, setDepartmentList] = useState(null);
  const [loading, setLoading] = useState(false);

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
    },
    {
      title: "Mon",
      dataIndex: "Mon",
      key: "Mon",
    },
    {
      title: "Tue",
      dataIndex: "Tue",
      key: "Tue",
    },
    {
      title: "Wed",
      dataIndex: "Wed",
      key: "Wed",
    },
    {
      title: "Thu",
      dataIndex: "Thu",
      key: "Thu",
    },
    {
      title: "Fri",
      dataIndex: "Fri",
      key: "Fri",
    },
    {
      title: "Sat",
      dataIndex: "Sat",
      key: "Sat",
    },
    {
      title: "Wed",
      dataIndex: "Wed",
      key: "Wed",
    },

    {
      title: "AppTimeGap",
      dataIndex: "AppTimeGap",
      key: "AppTimeGap",
    },

    //
  ];

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

        if (res?.DoctorTime.length > 0) {
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

  return (
    <Doctorlistsdepart>
      <div className="">
        <Card
          title="Doctors List of Appointment"
          bordered={false}
          style={
            {
              // width: 1240,
            }
          }
        >
          <ClientDepartmentButton>
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
          </ClientDepartmentButton>
        </Card>
      </div>
      {departmentList === null ? (
        ""
      ) : departmentList.length === 0 ? (
        <div>No data found</div>
      ) : (
        <div className="ant-card-head table-data table-div">
          {loading ? (
            <div className="data-not-found"> Data Not Found</div>
          ) : (
            <Table
              className="table-data"
              dataSource={departmentList}
              columns={columns}
            />
          )}
        </div>
      )}
    </Doctorlistsdepart>
  );
};

export default DoctorSchedule;

const Doctorlistsdepart = styled.div`
  .data-not-found {
    font-size: 18px;
    color: red;
  }
  .table-data {
    margin-top: 12px;
  }
`;

const ClientDepartmentButton = styled.div``;
