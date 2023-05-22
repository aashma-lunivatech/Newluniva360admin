import {
  Avatar,
  Button,
  Card,
  Col,
  Form,
  Input,
  Row,
  Select,
  Space,
  Table,
  Tag,
} from "antd";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import {
  GetListOfRegisteredClientsluniva,
  getClientWiseDepartmentByClientIdluniva,
} from "../../services/appServices/ProductionServices";
import { useNavigate } from "react-router-dom";
import { UserOutlined } from "@ant-design/icons";
const GetClientWiseDepartment = ({ nextForm }) => {
  // console.log(nextForm, "nextForm");
  const [departmentList, setDepartmentList] = useState(null);
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [clientId, setClientId] = useState("");
  const [clientlist, setClientList] = useState();
  const handleRedirect = () => {
    navigate("/addclientwisedepartment");
  };
  useEffect(() => {
    console.log(clientId, "clientid");
  });
  useEffect(() => {
    GetListOfRegisteredClientsluniva((res) => {
      // console.log(res, "res");
      if (res?.ClientList.length > 0) {
        setClientList(res?.ClientList);
      } else {
        // console.log("out of if else");
        setClientList([]);
      }
    });
  }, []);
  const handleClick = () => {
    if (
      clientId !== null &&
      clientId !== undefined &&
      // clientId.trim() !== "" &&
      !isNaN(clientId)
    ) {
      const data = {
        clientId: clientId,
      };
      getClientWiseDepartmentByClientIdluniva(data, (res) => {
        // console.log(res, "res");
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
        // <img
        //   style={{ width: 100, height: 100, borderRadius: 50 }}
        //   src={`https://lunivacare.ddns.net/Luniva360mHealthAPI/${LogoPath}`}
        // />
        <>
          {LogoPath && LogoPath.includes("/") && LogoPath.length > 6 ? (
            <img
              style={{ width: 100, height: 100, borderRadius: 50 }}
              src={`https://lunivacare.ddns.net/Luniva360mHealthAPI/${LogoPath}`}
            />
          ) : (
            <div>
              <Avatar
                style={{ width: 100, height: 100, borderRadius: 50 }}
                icon={
                  <UserOutlined
                    style={{ marginTop: "20px", fontSize: "48px" }}
                  />
                }
              />
            </div>
          )}
        </>
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
            <Button
              htmlType="submit"
              style={{ float: "right" }}
              className="btn-load"
              // disabled={butDis}
              type="primary"
              onClick={() => handleRedirect()}
            >
              Add Department
            </Button>
            {/* <div className="style-between"></div> */}

            <div className="add-button">
              <div style={{ display: "flex" }}>
                {/* <Input
                  id="input"
                  type="number"
                  style={{ width: 300 }}
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                /> */}
                style={{ width: "100%" }}
                <Row></Row>
              </div>
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
