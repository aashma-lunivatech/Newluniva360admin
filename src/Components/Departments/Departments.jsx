import { Button, Card, Table } from "antd";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Departments = () => {
  const [departmentlist, setDepartmentList] = useState([]);
  const navigate = useNavigate();
  const handleRedirect = () => {
    navigate("/clientsform");
  };
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
      title: "Image",
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
      title: "MobileNo",
      dataIndex: "DocMobileNo",
      key: "DocMobileNo",
    },

    {
      title: "Gender",
      dataIndex: "DocGender",
      key: "DocGender",
    },
    {
      title: "Email",
      dataIndex: "DocEmail",
      key: "DocEmail",
    },

    {
      title: "Specilization",
      dataIndex: "DocSpecilization",
      key: "DocSpecilization",
    },
    {
      title: "Experience",
      dataIndex: "DocExperience",
      key: "DocExperience",
    },
    {
      title: "Experience",
      dataIndex: "DocExperience",
      key: "DocExperience",
    },
    {
      title: "Number",
      dataIndex: "NMCNumber",
      key: "NMCNumber",
    },
    {
      title: "Links",
      dataIndex: "DocLinks",
      key: "DocLinks",
      render: (text) => (
        <a href={text} target="_blank">
          {text}
        </a>
      ),
    },

    {
      title: "DocRegisteredDate",
      dataIndex: "DocRegisteredDate",
      key: "DocRegisteredDate",
    },
    {
      title: "Department",
      dataIndex: "DocDepartment",
      key: "DocDepartment",
    },
    {
      title: "Charge",
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
  ];
  return (
    <div>
      <Card
        title="Client Details"
        bordered={false}
        style={
          {
            // width: 1240,
          }
        }
      >
        <div className="add-button">
          <Button
            htmlType="submit"
            // disabled={butDis}
            type="primary"
            onClick={() => handleRedirect()}
          >
            Add Department
          </Button>
        </div>
      </Card>
      <div className="ant-card-head table-data table-div">
        <div>
          <span className="data-not-found">Loading</span>
        </div>
        <Table dataSource={departmentlist} columns={columns} />
      </div>
    </div>
  );
};

export default Departments;
