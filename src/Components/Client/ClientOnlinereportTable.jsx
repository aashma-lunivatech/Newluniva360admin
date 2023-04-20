import React, { useEffect, useState } from "react";
import {
  GetListOfDoctorDetails,
  GetlistofClientForOnlineReports,
} from "../../services/appServices/ProductionServices";
import { Table, Tag } from "antd";
import styled from "styled-components";

const ClientOnlinereportTable = () => {
  const [obtaindata, setObtaindata] = useState();
  const [imagedata, SetImagedata] = useState([]);
  const columns = [
    {
      title: "LabId",
      dataIndex: "LabId",
      key: "LabId",
    },
    {
      title: "ClientName",
      dataIndex: "ClientName",
      key: "ClientName",
    },
    {
      title: "ClientAddress",
      dataIndex: "ClientAddress",
      key: "ClientAddress",
    },

    {
      title: "ClientContactNo",
      dataIndex: "ClientContactNo",
      key: "ClientContactNo",
    },

    {
      title: "NMCNumber",
      dataIndex: "NMCNumber",
      key: "NMCNumber",
    },
    {
      title: "DocLinks",
      dataIndex: "DocLinks",
      key: "DocLinks",
    },
    {
      title: "ClientLogo",
      dataIndex: "ClientLogo",
      key: "ClientLogo",
      render: (ClientLogo) => (
        <img
          style={{ width: 100, height: 100, borderRadius: 50 }}
          src={`https://lunivacare.ddns.net/Luniva360mHealthAPI/${ClientLogo}`}
        />
      ),
    },

    {
      title: "ClientIsactive",
      dataIndex: "ClientIsactive",
      key: "ClientIsactive",
      render: (record, text) => {
        if (record) {
          return <Tag color={"green"}>Active</Tag>;
        } else {
          return <Tag color={"volcano"}>Not Active</Tag>;
        }
      },
    },
    {
      title: "ClientReportLink",
      dataIndex: "ClientReportLink",
      key: "ClientReportLink",
      render: (text) => (
        <a href={text} target="_blank">
          {text}
        </a>
      ),
    },
  ];
  useEffect(() => {
    const data = {
      departmentId: 0,
    };
    GetlistofClientForOnlineReports((res) => {
      console.log(res, "res");
      if (res?.ClientList.length > 0) {
        setObtaindata(res?.ClientList);
      } else {
        console.log("out of if else");
      }
    });
  }, []);
  return (
    <DoctorTableData>
      <div className="ant-card-head table-data">
        <Table dataSource={obtaindata} columns={columns} />
      </div>
    </DoctorTableData>
  );
};

export default ClientOnlinereportTable;
const DoctorTableData = styled.div`
  margin-top: 10px;
`;
