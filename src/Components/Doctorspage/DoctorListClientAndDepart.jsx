import { Button, Card, Input, Space, Table } from "antd";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { GetlistofDoctorsByClientIdAndDepartmentIds } from "../../services/appServices/ProductionServices";

const DoctorsListClientAndDepart = () => {
  const [docid, setDocid] = useState("");
  const [appointmentdate, setAppointmentDate] = useState("");
  const [departmentId, setDepartmentId] = useState("");
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
    {
      title: "DocDecription",
      dataIndex: "DocDecription",
      key: "DocDecription",
    },
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

  const handleClick = () => {
    if (
      docid !== "" &&
      departmentId !== "" &&
      !isNaN(clientId) &&
      !isNaN(departmentId)
    ) {
      setLoading(true);

      const data = {
        docid: docid,
        departmentId: departmentId,
      };

      GetlistofDoctorsByClientIdAndDepartmentIds(data, (res) => {
        // console.log(res, "res");

        if (res?.DoctorList && res?.DoctorList.length > 0) {
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

  return (
    <Doctorlistsdepart>
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
            <div>
              <label className="label-name">Client ID</label>
              <Input
                type="number"
                style={{ width: 300 }}
                value={docid}
                onChange={(e) => setDocid(e.target.value)}
              />
              <label className="label-name">Department ID</label>
              <Input
                type="number"
                style={{ width: 300 }}
                value={departmentId}
                onChange={(e) => setDepartmentId(e.target.value)}
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
    </Doctorlistsdepart>
  );
};

export default DoctorsListClientAndDepart;

const Doctorlistsdepart = styled.div`
  .data-not-found {
    font-size: 18px;
    color: red;
  }
`;

const ClientDepartmentButton = styled.div``;
