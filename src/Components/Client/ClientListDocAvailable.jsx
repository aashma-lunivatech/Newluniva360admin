import { Button, Card, Input, Space, Table } from "antd";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { GetlistOfClientsWhereDoctorIsAvaliables } from "../../services/appServices/ProductionServices";

const ClientListDocAvailable = () => {
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
      title: "ClientId",
      dataIndex: "ClientId",
      key: "ClientId",
    },
    {
      title: "clientCode",
      dataIndex: "clientCode",
      key: "clientCode",
    },
    {
      title: "ClientName",
      dataIndex: "ClientName",
      key: "ClientName",
    },
    {
      title: "ClientState",
      dataIndex: "ClientState",
      key: "ClientState",
    },
    {
      title: "ClientDistrict",
      dataIndex: "ClientDistrict",
      key: "ClientDistrict",
    },
    {
      title: "ClientMUNVDC",
      dataIndex: "ClientMUNVDC",
      key: "ClientMUNVDC",
    },
    {
      title: "ClientLocalAddress",
      dataIndex: "ClientLocalAddress",
      key: "ClientLocalAddress",
    },
    // {
    //   title: "DocDecription",
    //   dataIndex: "DocDecription",
    //   key: "DocDecription",
    // },
    //
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
  ];
  const handleClick = () => {
    if (inputValue !== "" && !isNaN(inputValue)) {
      setLoading(true);
      const data = {
        docId: inputValue,
      };
      GetlistOfClientsWhereDoctorIsAvaliables(data, (res) => {
        // console.log(res, "res");
        if (res?.clientlist && res?.clientlist.length > 0) {
          //   setDepartmentList(res?.clientlist);
          setDepartmentList(res?.clientlist);
          // console.log(res?.clientlist);
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
    <Doctorlists>
      <div className="">
        <Card
          title="client list where doctor is available"
          bordered={false}
          style={
            {
              // width: 1240,
            }
          }
        >
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

export default ClientListDocAvailable;
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
