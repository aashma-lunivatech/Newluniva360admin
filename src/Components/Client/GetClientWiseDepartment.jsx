import { Button, Card, Input, Space, Table, Tag } from "antd";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { getClientWiseDepartmentByClientIdluniva } from "../../services/appServices/ProductionServices";
import { useNavigate } from "react-router-dom";

const GetClientWiseDepartment = ({ nextForm }) => {
  console.log(nextForm, "nextForm");
  const [departmentList, setDepartmentList] = useState(null);
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const handleRedirect = () => {
    navigate("/addclientwisedepartment");
  };
  const handleClick = () => {
    if (
      inputValue !== null &&
      inputValue !== undefined &&
      inputValue.trim() !== "" &&
      !isNaN(inputValue)
    ) {
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
      title: "CDId",
      dataIndex: "CDId",
      key: "CDId",
    },
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
      title: "Action",
      key: "action",
      render: (text, record) => (
        <Space size="middle">
          {/* <Button
            className="btn-load"
            onClick={() =>
              navigate({
                pathname: `/editclientwisedepartment/edit/${record.CDId}`,
              })
            }
          >
            Edit
          </Button> */}
          <Button
            className="btn-load"
            onClick={() => {
              navigate({
                pathname: `/editclientwisedepartment/edit/${record.CDId}`,
              });
            }}
          >
            Edit
          </Button>
        </Space>
      ),
    },
  ];

  // useEffect(() => {
  //   GetDepartmentLists((res) => {
  //     if (res?.DepartmentList && res?.DepartmentList.length > 0) {
  //       setDepartmentList(res?.DepartmentList);
  //     } else {
  //       setDepartmentList([]);
  //     }
  //   });
  // }, []);

  return (
    <Doctorlists>
      <div className="">
        <Card
          title="Department List"
          bordered={false}
          style={
            {
              // width: 1240,
            }
          }
        >
          <ClientDepartmentButton>
            <h3>Client Id</h3>
            <div className="add-button">
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
              <Button
                htmlType="submit"
                className="btn-load"
                // disabled={butDis}
                type="primary"
                onClick={() => handleRedirect()}
              >
                Add Department
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
    </Doctorlists>
  );
};

export default GetClientWiseDepartment;
const Doctorlists = styled.div`
  .table-div {
    margin-top: 10px;
  }
  .data-not-found {
    font-size: 18px;
    color: red;
  }
  .add-button {
    display: flex;
    justify-content: space-between;
  }
  .table-data {
    margin-top: 20px;
  }
`;
const ClientDepartmentButton = styled.div``;
