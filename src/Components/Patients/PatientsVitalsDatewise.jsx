import {
  Button,
  Card,
  Input,
  Space,
  Table,
  Tag,
  DatePicker,
  Col,
  message,
} from "antd";

import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import DateTimeBAdge from "../Common/DateTimeBAdge";
import {
  GetpatientVitalsDetailsByUserIdAndVitalOfFamilyAndDateRanges,
  GetpatientVitalsDetailsByUserIds,
} from "../../services/appServices/ProductionServices";
import moment from "moment";
const { RangePicker } = DatePicker;
const PatientsVitalsDateWise = () => {
  const [vitaldetails, setVitalDetails] = useState(null);
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [userid, setUserid] = useState();
  const [vitalsid, setVitalsid] = useState();
  const [doctorid, setDoctorId] = useState("");
  const [dates, setDates] = useState([]);

  const handleClick = () => {
    if (userid && vitalsid && !isNaN(userid) && !isNaN(vitalsid) && dates) {
      // changed conditions for valid input
      setLoading(true);
      let data = {
        userid: parseInt(userid),
        vitalsof: parseInt(vitalsid),
        fromdate: dates[0],
        todate: dates[1],
      };
      console.log(data, "dateentered");
      GetpatientVitalsDetailsByUserIdAndVitalOfFamilyAndDateRanges(
        data,
        (res) => {
          if (res?.VitalsList && res?.VitalsList.length > 0) {
            setVitalDetails(res?.VitalsList);
          } else {
            setVitalDetails([]);
          }
          setLoading(false);
        }
      );
    } else {
      message.warning("error occured");
      // add an error message or notification for invalid input
    }
  };
  useEffect(() => {
    console.log(dates, "dates");
  });
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
      <Col span={24}>
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
              <div>
                <div className="add-button">
                  <div>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                      }}
                    >
                      <label className="label-name">User ID</label>
                      <Input
                        type="number"
                        style={{ width: 300 }}
                        value={userid}
                        onChange={(e) => setUserid(e.target.value)}
                      />
                      <label className="label-name">Vitals ID</label>
                      <Input
                        type="number"
                        style={{ width: 300 }}
                        value={vitalsid}
                        onChange={(e) => setVitalsid(e.target.value)}
                      />
                      <div>
                        <RangePicker
                          onChange={(values) => {
                            setDates(
                              values.map((item) => {
                                return moment(item).format("YYYY-MM-DD");
                              })
                            );
                          }}
                        />
                      </div>
                    </div>

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
                <span className="data-not-found">Loading...</span>
              </div>
            ) : (
              <Table
                dataSource={vitaldetails !== undefined ? vitaldetails : ""}
                columns={columns}
              />
            )}
          </div>
        )}
      </Col>
    </Doctorlists>
  );
};

export default PatientsVitalsDateWise;
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
