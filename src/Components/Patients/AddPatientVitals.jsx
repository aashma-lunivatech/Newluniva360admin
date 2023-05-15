import React, { useEffect } from "react";
import {
  Button,
  Card,
  Col,
  DatePicker,
  Form,
  Input,
  InputNumber,
  Select,
  Switch,
  message,
} from "antd";
import dayjs from "dayjs";
import { useState } from "react";
import styled from "styled-components";
import {
  GetFamilyRelationShipDetailss,
  GetpatientVitalsDetailsByUserIds,
  InsertUpdateDailyVitalsOfPatients,
} from "../../services/appServices/ProductionServices";
import { useNavigate, useParams } from "react-router-dom";

const AddPatientVitals = () => {
  const dateFormat = "YYYY/MM/DD";
  const { Option } = Select;
  const { id } = useParams();
  // console.log(id, "idhoma");
  const [form] = Form.useForm();
  const [selectedDate, setSelectedDate] = useState(null);
  const [buttondisable, setButtondisable] = useState(false);
  const [editedvitalvalue, setEditedvitalvalue] = useState();
  const [familyList, setFamilyList] = useState();
  //   const [relationshipselected, setrelationship] = useState();
  const [vitaldetails, setVitalDetails] = useState();
  //   const handlerelationship = (e) => {
  //     setrelationship(e);
  //     console.log(e, "relationshipselected");
  //   };
  const navigate = useNavigate();
  const { TextArea } = Input;
  useEffect(() => {
    if (editedvitalvalue !== undefined) form.resetFields();
  }, [editedvitalvalue]);
  useEffect(() => {
    let data = {
      userid: id,
    };
    GetpatientVitalsDetailsByUserIds(data, (res) => {
      if (res?.ItemList && res?.ItemList.length > 0) {
        setVitalDetails(res?.ItemList);
        setEditedvitalvalue(res?.ItemList[0]);
      } else {
        setVitalDetails([]);
      }
    });
  }, []);
  useEffect(() => {
    GetFamilyRelationShipDetailss((res) => {
      if (res?.FamilyList && res?.FamilyList.length > 0) {
        setFamilyList(res?.FamilyList);
      } else {
        setFamilyList([]);
      }
    });
  }, []);
  let entrydate = selectedDate?.format("YYYY-MM-DD");
  let currentDate = new Date().toISOString().split("T")[0];
  const handleSubmit = (values) => {
    let data = {
      VId: editedvitalvalue ? parseInt(id) : 0,
      VitalsOf: values?.VitalsOf,
      PatientName: values?.PatientName,
      Temperature: values?.Temperature,
      PulseRate: values?.PulseRate,
      SPO2: values?.SPO2,
      RespirationRate: values?.RespirationRate,
      BloodPressureSys: values?.BloodPressureSys,
      BloodPressureDis: values?.BloodPressureDis,
      ClinicalSymptoms: values?.ClinicalSymptoms,
      EntryDate: entrydate ?? currentDate,
      UserId: values?.UserId,
    };
    console.log(data.VId, "data");
    InsertUpdateDailyVitalsOfPatients(data, (res) => {
      console.log(data, "ia am saurey");
      // console.log(res, "i am response");
      if (res?.SuccessMsg === true) {
        message.success(`${res.Message}`);
        message.config({
          placement: "topRight",
          duration: 3,
          style: {
            backgroundColor: "#f6ffed",
            border: "1px solid #b7eb8f",
          },
        });
        // setButtondisable(true);
        // setTimeout(function () {
        //   window.location.reload();
        // }, 4000);
      } else {
        message.warning(`${res.Message}`);
      }
    });
    console.log(data, "Vitals");
  };

  return (
    <AddDoctorProfile>
      <div className="">
        <Card title="Doctors Profile" bordered={false} style={{}}>
          <Col span={24}>
            <Form
              form={form}
              //   initialValues={editedvitalvalue}
              onFinish={handleSubmit}
              labelCol={{
                span: 8,
              }}
              wrapperCol={{
                span: 8,
              }}
              layout="horizontal"
              style={{
                marginTop: 10,
              }}
            >
              <Form.Item
                label="User Id"
                name="UserId"
                values="UserId"
                initialValue={editedvitalvalue ? editedvitalvalue.UserId : ""}
              >
                <InputNumber style={{ width: "100%" }} />
              </Form.Item>
              <Form.Item
                label="VitalsOf"
                name="VitalsOf"
                values="VitalsOf"
                initialValue={editedvitalvalue ? editedvitalvalue.VitalsOf : ""}
              >
                <InputNumber style={{ width: "100%" }} />
              </Form.Item>
              <Form.Item
                label="SPO2"
                name="SPO2"
                values="SPO2"
                initialValue={editedvitalvalue ? editedvitalvalue.SPO2 : ""}
                rules={[
                  {
                    required: true,
                    message: "SPO2 is required!",
                  },
                ]}
              >
                <Input style={{ width: "100%" }} />
              </Form.Item>
              <Form.Item
                label="PatientName"
                name="PatientName"
                values="PatientName"
                initialValue={
                  editedvitalvalue ? editedvitalvalue.PatientName : ""
                }
                rules={[
                  {
                    required: true,
                    message: "PatientName is required!",
                  },
                ]}
              >
                <Input style={{ width: "100%" }} />
              </Form.Item>
              <Form.Item
                label="Temperature"
                name="Temperature"
                values="Temperature"
                initialValue={
                  editedvitalvalue ? editedvitalvalue.Temperature : ""
                }
              >
                <Input />
              </Form.Item>

              <Form.Item
                label="PulseRate"
                name="PulseRate"
                values="PulseRate"
                initialValue={
                  editedvitalvalue ? editedvitalvalue.PulseRate : ""
                }
              >
                <Input />
              </Form.Item>
              {/* <Form.Item
                label="Relationship"
                name="Relationship"
                values="Relationship"
                initialValue={
                  editedvitalvalue ? editedvitalvalue.Relationship : ""
                }
              >
                <Select
                  onChange={handlerelationship}
                  showSearch
                  defaultValue=""
                  filterOption={(input, option) => {
                    return (
                      option.key.toLowerCase().indexOf(input.toLowerCase()) >=
                        0 ||
                      option.title.toLowerCase().indexOf(input.toLowerCase()) >=
                        0
                    );
                  }}
                >
                  {familyList !== undefined &&
                    familyList.map((e) => (
                      <Option
                        title={e.RelationShip}
                        value={e.RelationShip}
                        key={e.FId}
                      >
                        {e.RelationShip}
                      </Option>
                    ))}
                </Select>
              </Form.Item> */}

              <Form.Item
                label="RespirationRate"
                name="RespirationRate"
                values="RespirationRate"
                initialValue={
                  editedvitalvalue ? editedvitalvalue.RespirationRate : ""
                }
                rules={[
                  {
                    required: true,
                    message: "RespirationRate is required!",
                  },
                ]}
              >
                <Input />
              </Form.Item>
              <Form.Item
                label="BloodPressureSys"
                name="BloodPressureSys"
                values="BloodPressureSys"
                initialValue={
                  editedvitalvalue ? editedvitalvalue.BloodPressureSys : ""
                }
                rules={[
                  {
                    required: true,
                    message: "BloodPressureSys is required!",
                  },
                ]}
              >
                <Input />
              </Form.Item>
              <Form.Item
                label="BloodPressureDis"
                name="BloodPressureDis"
                values="BloodPressureDis"
                initialValue={
                  editedvitalvalue ? editedvitalvalue.BloodPressureDis : ""
                }
              >
                <Input />
              </Form.Item>
              <Form.Item
                label="ClinicalSymptoms"
                name="ClinicalSymptoms"
                values="ClinicalSymptoms"
                initialValue={
                  editedvitalvalue ? editedvitalvalue.ClinicalSymptoms : ""
                }
              >
                <TextArea style={{ width: "100%" }} />
              </Form.Item>
              <Form.Item
                label="EntryDate"
                name="EntryDate"
                values="EntryDate"
                initialValue={
                  editedvitalvalue
                    ? dayjs(editedvitalvalue.EntryDate, "YYYY-MM-DD")
                    : null
                }
              >
                <DatePicker
                  rules={[
                    {
                      required: true,
                      message: "Date is required!",
                    },
                  ]}
                  format={dateFormat}
                  value={selectedDate}
                  onChange={(date) => setSelectedDate(date)}
                  style={{ width: "100%" }}
                />
              </Form.Item>
              <Form.Item>
                <div
                  className="Col-md-12"
                  style={{ display: "flex", justifyContent: "flex-end" }}
                >
                  <Button
                    disabled={buttondisable}
                    htmlType="submit"
                    // disabled={butDis}
                    // onClick={handleSubmit}
                    type="primary"
                    className="sumit-button btn-load"
                  >
                    {editedvitalvalue ? "Edit " : "Add"}
                  </Button>
                </div>
              </Form.Item>
            </Form>
          </Col>
        </Card>
      </div>
    </AddDoctorProfile>
  );
};

export default AddPatientVitals;
const AddDoctorProfile = styled.div``;
