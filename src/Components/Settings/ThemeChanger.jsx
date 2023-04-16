import React, { useEffect, useState } from "react";
import { GetListOfDoctorDetails } from "../../services/appServices/ProductionServices";
import { Table } from "antd";
import styled from "styled-components";

const ThemeChanger = () => {
  const [obtaindata, setObtaindata] = useState();
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
    },
    {
      title: "DocImage",
      dataIndex: "DocImage",
      dataIndex: "DocImage",
      key: "DocImage",
      // render: (DocImage) => <img src={DocImage} />,
      //add blobb path
      render: (image) => <img src={image} />,
    },

    {
      title: "DocIsActive",
      dataIndex: "DocIsActive",
      key: "DocIsActive",
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
      title: "DocAddresss",
      dataIndex: "DocAddresss",
      key: "DocAddresss",
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
      title: "ConferenceLink",
      dataIndex: "ConferenceLink",
      key: "ConferenceLink",
    },
    {
      title: "DocAddresss",
      dataIndex: "DocAddresss",
      key: "DocAddresss",
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
      console.log(res, "res");
      if (res?.DoctorList.length > 0) {
        setObtaindata(res?.DoctorList);
        console.log(res, "i am a response");
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

export default ThemeChanger;
const DoctorTableData = styled.div`
  margin-top: 10px;
`;
