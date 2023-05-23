import { Button, Card, Input, Space, Table } from "antd";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { GetDoctorDetailsByDoctorIds } from "../../services/appServices/ProductionServices";

const TotalListOfDoctors = () => {
  const [inputValue, setInputValue] = useState("");
  const [departmentList, setDepartmentList] = useState(null);
  const [loading, setLoading] = useState(false);
  const [userselecteddoctor, setUserSelectedDoctor] = useState([]);
  useEffect(() => {
    // Fetch department list when the component mounts
    const data = {
      docId: 0,
    };
    GetDoctorDetailsByDoctorIds(data, (res) => {
      if (res?.DoctorDetails && res?.DoctorDetails.length > 0) {
        setUserSelectedDoctor(res?.DoctorDetails);
      } else {
        setUserSelectedDoctor([]);
        setListVisible(true);
      }
      setLoading(false);
    });
  }, []);

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
          title="Doctors List "
          bordered={false}
          style={
            {
              // width: 1240,
            }
          }
        >
          <ClientDepartmentButton>
            {/* <div>
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
            </div> */}
          </ClientDepartmentButton>
        </Card>
      </div>
      {userselecteddoctor === null ? (
        ""
      ) : userselecteddoctor.length === 0 ? (
        <div>No data found</div>
      ) : (
        <div className="ant-card-head table-data table-div">
          {loading ? (
            <div className="data-not-found"> Data Not Found</div>
          ) : (
            <Table dataSource={userselecteddoctor} columns={columns} />
          )}
        </div>
      )}
    </Doctorlists>
  );
};

export default TotalListOfDoctors;
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
