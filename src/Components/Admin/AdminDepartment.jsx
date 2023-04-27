import { Button, Card, Input, Space, Table, Tag } from "antd";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { GetDepartmentLists } from "../../services/appServices/ProductionServices";
import { useNavigate } from "react-router-dom";

const AdminDepartment = (props) => {
  const [departmentList, setDepartmentList] = useState();
  const navigate = useNavigate();
  const handleRedirect = () => {
    navigate("/addadminwisedepartment");
  };
  const columns = [
    {
      title: "DId",
      dataIndex: "DId",
      key: "DId",
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
      title: "IsActive",
      dataIndex: "IsActive",
      key: "IsActive",
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
          <Button
            className="btn-load"
            onClick={() =>
              navigate({
                pathname: `/editaddadminwisedepartment/edit/${record.DId}`,
              })
            }
          >
            Edit
          </Button>
        </Space>
      ),
    },
  ];

  useEffect(() => {
    GetDepartmentLists((res) => {
      if (res?.DepartmentList && res?.DepartmentList.length > 0) {
        setDepartmentList(res?.DepartmentList);
      } else {
        setDepartmentList([]);
      }
    });
  }, []);

  return (
    <Doctorlists>
      <div className="">
        <Card
          title="Admin Department List"
          bordered={false}
          style={
            {
              // width: 1240,
            }
          }
        >
          <ClientDepartmentButton>
            <div className="add-button">
              <Button
                htmlType="submit"
                className="btn-load"
                type="primary"
                onClick={() => handleRedirect()}
              >
                Add Department
              </Button>
            </div>
          </ClientDepartmentButton>
        </Card>
      </div>

      <div className="ant-card-head table-data table-div">
        <Table dataSource={departmentList} columns={columns} />
      </div>
    </Doctorlists>
  );
};

export default AdminDepartment;
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
