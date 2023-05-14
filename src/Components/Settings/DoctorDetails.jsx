import React, { useEffect, useState } from "react";
import { GetListOfDoctorDetails } from "../../services/appServices/ProductionServices";
import { Table, Tag } from "antd";
import styled from "styled-components";

const DoctorDetails = () => {
  const [obtaindata, setObtaindata] = useState();
  const [imagedata, SetImagedata] = useState([]);
  const columns = [
    {
      title: "DId",
      dataIndex: "DId",
      key: "DId",
    },
    {
      title: "DoctorName",
      dataIndex: "DoctorName",
      key: "DoctorName",
    },
    {
      title: "DocMobileNo",
      dataIndex: "DocMobileNo",
      key: "DocMobileNo",
    },

    {
      title: "DocGender",
      dataIndex: "DocGender",
      key: "DocGender",
    },
    {
      title: "DocEmail",
      dataIndex: "DocEmail",
      key: "DocEmail",
    },
    // {
    //   title: "DocQualification",
    //   dataIndex: "DocQualification",
    //   key: "DocQualification",
    // },
    {
      title: "DocSpecilization",
      dataIndex: "DocSpecilization",
      key: "DocSpecilization",
    },
    {
      title: "DocExperience",
      dataIndex: "DocExperience",
      key: "DocExperience",
    },
    {
      title: "DocExperience",
      dataIndex: "DocExperience",
      key: "DocExperience",
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
      render: (text) => (
        <a href={text} target="_blank">
          {text}
        </a>
      ),
    },
    {
      title: "DocImage",
      dataIndex: "DocImage",
      key: "DocImage",
      render: (DocImage) => (
        <img
          style={{ width: 100, height: 100, borderRadius: 50 }}
          src={`https://lunivacare.ddns.net/Luniva360mHealthAPI/${DocImage}`}
        />
      ),
    },
    {
      title: "DocRegisteredDate",
      dataIndex: "DocRegisteredDate",
      key: "DocRegisteredDate",
    },
    {
      title: "DocDepartment",
      dataIndex: "DocDepartment",
      key: "DocDepartment",
    },
    {
      title: "DocCharge",
      dataIndex: "DocCharge",
      key: "DocCharge",
    },
    {
      title: "UserType",
      dataIndex: "UserType",
      key: "UserType",
    },
    {
      title: "DocIsActive",
      dataIndex: "DocIsActive",
      key: "DocIsActive",
      render: (record, text) => {
        if (record) {
          return <Tag color={"green"}>Active</Tag>;
        } else {
          return <Tag color={"volcano"}>Not Active</Tag>;
        }
      },
    },
    {
      title: "ConferenceLink",
      dataIndex: "ConferenceLink",
      key: "ConferenceLink",
      render: (text) => (
        <a href={text} target="_blank">
          {text}
        </a>
      ),
    },
    {
      title: "DocAddress",
      dataIndex: "DocAddress",
      key: "DocAddress",
    },
    {
      title: "DocLoginId",
      dataIndex: "DocLoginId",
      key: "DocLoginId",
    },
    // {
    //   title: "DocDecription",
    //   dataIndex: "DocDecription",
    //   key: "DocDecription",
    // },
  ];
  useEffect(() => {
    const data = {
      departmentId: 0,
    };
    GetListOfDoctorDetails(data, (res) => {
      // console.log(res, "res");
      if (res?.DoctorList.length > 0) {
        setObtaindata(res?.DoctorList);
      } else {
        // console.log("out of if else");
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

export default DoctorDetails;
const DoctorTableData = styled.div`
  margin-top: 10px;
`;
