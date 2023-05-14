import { Button, Card, Input, Space, Table, Tag } from "antd";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import DateTimeBAdge from "../Common/DateTimeBAdge";
import { GetpatientVitalsDetailsByUserIds } from "../../services/appServices/ProductionServices";

const PatientsVitals = () => {
  const [vitaldetails, setVitalDetails] = useState(null);
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [userid, setUserid] = useState();
  const [vitalsid, setVitalsid] = useState();
  const [doctorid, setDoctorId] = useState("");
  const handleRedirect = () => {
    navigate("/addpatientvitals");
  };
  //   const handleClick = () => {
  //     if (
  //       userid !== "" ||
  //       userid !== undefined ||
  //       vitalsid !== "" ||
  //       vitalsid !== undefined ||
  //       !isNaN(userid) ||
  //       !isNaN(vitalsid)
  //     ) {
  //       setLoading(true);
  //       let data = {
  //         userid: userid,
  //         vitalsof: vitalsid,
  //       };
  //       GetpatientVitalsDetailsByUserIds(data, (res) => {
  //         if (res?.ItemList && res?.ItemList.length > 0) {
  //           setVitalDetails(res?.ItemList);
  //         } else {
  //           setVitalDetails([]);
  //         }

  //         setLoading(false);
  //       });
  //     } else {
  //     }
  //   };
  const handleClick = () => {
    if (userid !== "" || userid !== undefined || !isNaN(userid)) {
      setLoading(true);
      let data = {
        userid: userid,
      };
      GetpatientVitalsDetailsByUserIds(data, (res) => {
        if (res?.ItemList && res?.ItemList.length > 0) {
          setVitalDetails(res?.ItemList);
        } else {
          setVitalDetails([]);
        }

        setLoading(false);
      });
    } else {
    }
  };
  const columns = [
    {
      title: "UserId",
      dataIndex: "UserId",
      key: "UserId",
    },
    {
      title: "VId",
      dataIndex: "VId",
      key: "VId",
    },
    {
      title: "VitalsOf",
      dataIndex: "VitalsOf",
      key: "VitalsOf",
    },
    {
      title: "Relationship",
      dataIndex: "Relationship",
      key: "Relationship",
    },
    {
      title: "PatientName",
      dataIndex: "PatientName",
      key: "PatientName",
    },
    {
      title: "Temperature",
      dataIndex: "Temperature",
      key: "Temperature",
    },
    {
      title: "PulseRate",
      dataIndex: "PulseRate",
      key: "PulseRate",
    },
    {
      title: "SPO2",
      dataIndex: "SPO2",
      key: "SPO2",
    },
    {
      title: "RespirationRate",
      dataIndex: "RespirationRate",
      key: "RespirationRate",
    },
    {
      title: "BloodPressureSys",
      dataIndex: "BloodPressureSys",
      key: "BloodPressureSys",
    },
    {
      title: "BloodPressureDis",
      dataIndex: "BloodPressureDis",
      key: "BloodPressureDis",
    },
    {
      title: "ClinicalSymptoms",
      dataIndex: "ClinicalSymptoms",
      key: "ClinicalSymptoms",
    },

    {
      title: "EntryDate",
      dataIndex: "EntryDate",
      key: "EntryDate",
      render: (val) => <DateTimeBAdge data={val} />,
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
                pathname: `/editpatientvitals/edit/${record.UserId}`,
              })
            }
          >
            Edit
          </Button>
        </Space>
      ),
    },
  ];

  return (
    <Doctorlists>
      <div className="">
        <Card
          title="Doctor Schdule"
          bordered={false}
          style={
            {
              // width: 1240,
            }
          }
        >
          <ClientDepartmentButton>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <h3></h3>
              <Button
                htmlType="submit"
                className="btn-load"
                // disabled={butDis}
                type="primary"
                onClick={() => handleRedirect()}
              >
                Add Vitalss
              </Button>
            </div>
            <div className="add-button">
              <div>
                <div>
                  <label className="label-name">User ID</label>
                  <Input
                    type="number"
                    style={{ width: 300 }}
                    value={userid}
                    onChange={(e) => setUserid(e.target.value)}
                  />
                  {/* <label className="label-name">Vitals ID</label>
                  <Input
                    type="number"
                    style={{ width: 300 }}
                    value={vitalsid}
                    onChange={(e) => setVitalsid(e.target.value)}
                  /> */}

                  <Button className="btn-load" onClick={handleClick}>
                    Load
                  </Button>
                </div>
              </div>
            </div>
          </ClientDepartmentButton>
        </Card>
      </div>

      {vitaldetails === null ? (
        ""
      ) : vitaldetails.length === 0 ? (
        <div className="data-not-found">No data found</div>
      ) : (
        <div className="ant-card-head table-data table-div">
          {loading ? (
            <div>
              <span className="data-not-found">Loading</span>
            </div>
          ) : (
            <Table dataSource={vitaldetails} columns={columns} />
          )}
        </div>
      )}
    </Doctorlists>
  );
};

export default PatientsVitals;
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
