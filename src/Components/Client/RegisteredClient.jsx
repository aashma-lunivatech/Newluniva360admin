import React, { useEffect, useState } from "react";
import { GetListOfRegisteredClientsluniva } from "../../services/appServices/ProductionServices";
import { Button, Space, Table, Tag } from "antd";
import { Avatar } from "antd";
import styled from "styled-components";
import { GetListOfRegisteredClients } from "../../services/constants/url";
import { useNavigate } from "react-router-dom";
import DateTimeBAdge from "../Common/DateTimeBAdge";
import { UserOutlined } from "@ant-design/icons";

const RegisteredClient = () => {
  const navigate = useNavigate();
  const handleRedirect = () => {
    navigate("/clientsform");
  };
  const [obtaindata, setObtaindata] = useState();
  const columns = [
    {
      title: "RId",
      dataIndex: "RId",
      key: "RId",
    },
    {
      title: "ClientCode",
      dataIndex: "ClientCode",
      key: "ClientCode",
    },
    {
      title: "ClientName",
      dataIndex: "ClientName",
      key: "ClientName",
    },

    {
      title: "ClientCountry",
      dataIndex: "ClientCountry",
      key: "ClientCountry",
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
    {
      title: "ClientTypeId",
      dataIndex: "ClientTypeId",
      key: "ClientTypeId",
    },
    {
      title: "ClientPAN",
      dataIndex: "ClientPAN",
      key: "ClientPAN",
    },
    {
      title: "ClientPhoneNumber",
      dataIndex: "ClientPhoneNumber",
      key: "ClientPhoneNumber",
    },
    {
      title: "ClientWebsite",
      dataIndex: "ClientWebsite",
      key: "ClientWebsite",
    },
    {
      title: "ClientContactPerson",
      dataIndex: "ClientContactPerson",
      key: "ClientContactPerson",
    },
    {
      title: "ClinetContactPersonMobile",
      dataIndex: "ClinetContactPersonMobile",
      key: "ClinetContactPersonMobile",
    },
    {
      title: "UserId",
      dataIndex: "UserId",
      key: "UserId",
    },
    {
      title: "RegisterDate",
      dataIndex: "RegisterDate",
      key: "RegisterDate",
      render: (val) => <DateTimeBAdge data={val} />,
    },

    {
      title: "ClientBanner",
      dataIndex: "ClientBanner",
      key: "ClientBanner",
      render: (ClientBanner) => (
        <>
          <>
            {ClientBanner &&
            ClientBanner.includes("/") &&
            ClientBanner.length > 6 ? (
              <img
                style={{ width: 100, height: 100, borderRadius: 50 }}
                src={`https://lunivacare.ddns.net/Luniva360mHealthAPI/${ClientBanner}`}
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
        </>
      ),
    },

    {
      title: "ClientLogo",
      dataIndex: "ClientLogo",
      key: "ClientLogo",
      render: (ClientLogo) => (
        <>
          {ClientLogo && ClientLogo.includes("/") && ClientLogo.length > 6 ? (
            <img
              style={{ width: 100, height: 100, borderRadius: 50 }}
              src={`https://lunivacare.ddns.net/Luniva360mHealthAPI/${ClientLogo}`}
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
      title: "ClientBanner2",
      dataIndex: "ClientBanner2",
      key: "ClientBanner2",
      render: (ClientBanner2) => (
        <>
          {ClientBanner2 &&
          ClientBanner2.includes("/") &&
          ClientBanner2.length > 6 ? (
            <img
              style={{ width: 100, height: 100, borderRadius: 50 }}
              src={`https://lunivacare.ddns.net/Luniva360mHealthAPI/${ClientBanner2}`}
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
                pathname: `/clientsform/edit/${record.RId}`,
              })
            }
          >
            Edit
          </Button>
        </Space>
      ),
    },
    // {
    //   title: "Action",
    //   key: "action",
    //   render: (_, record) => {
    //     return (
    //       <Space size="middle">
    //         <Button type="danger" onClick={() => handleRedirect()}>
    //           Edit
    //         </Button>
    //       </Space>
    //     );
    //   },
    // },
  ];
  useEffect(() => {
    GetListOfRegisteredClientsluniva((res) => {
      // console.log(res, "res");
      if (res?.ClientList.length > 0) {
        setObtaindata(res?.ClientList);
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

export default RegisteredClient;
const DoctorTableData = styled.div`
  margin-top: 10px;
`;
