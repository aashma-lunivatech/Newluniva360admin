import { Button, Card, Input, Space, Table } from "antd";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { GetlistofDoctorsByClientIds } from "../../services/appServices/ProductionServices";

const DoctorsList = () => {
  const [inputValue, setInputValue] = useState("");
  const [departmentList, setDepartmentList] = useState(null);
  const [loading, setLoading] = useState(false);
  const handleClick = () => {
    if (inputValue !== "" && !isNaN(inputValue)) {
      setLoading(true);
      const data = {
        clientId: inputValue,
      };
      GetlistofDoctorsByClientIds(data, (res) => {
        console.log(res, "res");
        if (res?.DoctorList.length > 0) {
          setDepartmentList(res?.DoctorList);
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
      title: "DocQualification",
      dataIndex: "DocQualification",
      key: "DocQualification",
    },
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
      title: "NMCNumber",
      dataIndex: "NMCNumber",
      key: "NMCNumber",
    },
    {
      title: "DocWorkArea",
      dataIndex: "DocWorkArea",
      key: "DocWorkArea",
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
    // {
    //   title: "DocDecription",
    //   dataIndex: "DocDecription",
    //   key: "DocDecription",
    // },
    //
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
  ];

  return (
    <Doctorlists>
      <div className="">
        <Card
          title="Doctors List by client Id"
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
        <div>No data found</div>
      ) : (
        <div className="ant-card-head table-data table-div">
          {loading ? (
            <div className="data-not-found"> Data Not Found</div>
          ) : (
            <Table dataSource={departmentList} columns={columns} />
          )}
        </div>
      )}
    </Doctorlists>
  );
};

export default DoctorsList;
const Doctorlists = styled.div`
  .table-div {
    margin-top: 10px;
  }
  .data-not-found {
    font-size: 18px;
    color: red;
  }
`;
const ClientDepartmentButton = styled.div``;
