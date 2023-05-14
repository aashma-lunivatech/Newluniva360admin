import { Button, Card, Input, Space, Table, Tag } from "antd";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import {
  GetDoctorDetailsByDoctorIds,
  GetListOfDoctorDetails,
} from "../../services/appServices/ProductionServices";
import { useNavigate } from "react-router-dom";
import DateTimeBAdge from "../Common/DateTimeBAdge";

const DoctorsProfilePageNew = () => {
  const [inputValue, setInputValue] = useState("");
  const [departmentList, setDepartmentList] = useState(null);
  const [loading, setLoading] = useState(false);
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
      render: (val) => <DateTimeBAdge data={val} />,
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
    {
      title: "Action",
      key: "action",
      render: (text, record) => (
        <Space size="middle">
          <Button
            className="btn-load"
            onClick={() =>
              navigate({
                pathname: `/editdoctorprofile/edit/${record.DId}`,
              })
            }
          >
            Edit
          </Button>
        </Space>
      ),
    },
  ];
  const navigate = useNavigate();
  const handleRedirect = () => {
    navigate("/adddoctorprofile");
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
      GetDoctorDetailsByDoctorIds(data, (res) => {
        // console.log(res, "res");
        if (res?.DoctorDetails && res?.DoctorDetails.length > 0) {
          setDepartmentList(res?.DoctorDetails);
        } else {
          setDepartmentList([]);
        }
        setLoading(false);
      });
    } else {
      // console.log("out of block");
    }
  };

  return (
    <DoctorSchedulelist>
      <div className="">
        <Card
          title="Doctor Profile view "
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
              className="btn-load"
              onClick={() => handleRedirect()}
            >
              Add Doctor's Profile
            </Button>
          </div>
          <ClientDepartmentButton>
            <div>
              <label className="label-name">doctor ID</label>
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
              <span className="data-not-found">Loading</span>
            </div>
          ) : (
            <Table dataSource={departmentList} columns={columns} />
          )}
        </div>
      )}
    </DoctorSchedulelist>
  );
};

export default DoctorsProfilePageNew;
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
