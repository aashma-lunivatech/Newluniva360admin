import { Button, Card, Input, Space, Table } from "antd";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { getClientWiseDepartmentByClientIdluniva } from "../../services/appServices/ProductionServices";

const ClientDepartment = () => {
  const [inputValue, setInputValue] = useState("");
  const [departmentList, setDepartmentList] = useState(null);
  const [loading, setLoading] = useState(false);
  const handleClick = () => {
    if (inputValue !== "" && !isNaN(inputValue)) {
      setLoading(true);
      const data = {
        clientId: inputValue,
      };
      getClientWiseDepartmentByClientIdluniva(data, (res) => {
        console.log(res, "res");
        if (res?.DepartmentList && res?.DepartmentList.length > 0) {
          setDepartmentList(res?.DepartmentList);
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
      title: "DepartmentId",
      dataIndex: "DepartmentId",
      key: "DepartmentId",
    },
    {
      title: "DepartmentName",
      dataIndex: "DepartmentName",
      key: "DepartmentName",
    },
    {
      title: "LogoPath",
      dataIndex: "LogoPath",
      key: "LogoPath",
      render: (LogoPath) => (
        <img
          style={{ width: 100, height: 100, borderRadius: 50 }}
          src={`https://lunivacare.ddns.net/Luniva360mHealthAPI/${LogoPath}`}
        />
      ),
    },
  ];

  return (
    <ClientDepartments>
      <div className="">
        <Card
          title="Client Departments"
          bordered={false}
          style={
            {
              // width: 1240,
            }
          }
        >
          <ClientDepartmentButton>
            <div>
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
      {departmentList !== null && (
        <div className="ant-card-head table-data">
          {loading ? (
            <div className="data-not-found"> Data Not Found</div>
          ) : (
            <Table dataSource={departmentList} columns={columns} />
          )}
        </div>
      )}
    </ClientDepartments>
  );
};

export default ClientDepartment;
const ClientDepartments = styled.div`
  .table-div {
    margin-top: 10px;
  }
  .data-not-found {
    font-size: 18px;
    color: red;
  }
`;
const ClientDepartmentButton = styled.div``;
