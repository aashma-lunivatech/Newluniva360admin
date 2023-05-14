import React, { useEffect } from "react";
import {
  Button,
  Card,
  Checkbox,
  Col,
  DatePicker,
  Form,
  Input,
  InputNumber,
  Select,
  Switch,
  TimePicker,
  Upload,
  message,
  notification,
} from "antd";
import { useState } from "react";
const { TextArea } = Input;
import styled from "styled-components";
import { useParams } from "react-router-dom";
import { InsertUpdateAppointments } from "../../services/appServices/ProductionServices";

const AddAppointmentTime = () => {
  const { id } = useParams();
  const [form] = Form.useForm();
  const [selectedDate, setSelectedDate] = useState(null);
  const [imageUrl, setImageUrl] = useState([]);
  const [buttondisable, setButtondisable] = useState(false);
  const [selectedvalue, setSelectedvalue] = useState();
  // let currentDate = new Date().toISOString().split("T")[0];
  let currentDate = new Date();

  const handleSubmit = (values) => {
    let data = {
      ApId: values?.ApId,
      DocId: values?.DocId,
      CovidId: values?.CovidId,
      AppointmentDate: "2023-04-25T10:05:35.9798392+05:4",
      AppointmentReason: values?.AppointmentReason,
      AppointmentFor: values?.AppointmentFor,
      PatientName: values?.PatientName,
      PatAge: values?.PatAge.toString(),
      AppointmentStatus: values?.AppointmentStatus,
      AppointmentRemarks: values?.AppointmentRemarks,
      AppointmentType: values?.AppointmentType,
      EntryDate: "2023-04-25T10:05:35.9798392+05:4",
      AppUserId: values?.AppUserId,
      UserId: values?.UserId,
      AppTime: values?.AppTime,
    };
    InsertUpdateAppointments(data, (res) => {
      // console.log(res, "i am response");
      if (res?.SuccessMsg == true) {
        message.success("Appointment Added Successfully");

        setButtondisable(true);
        setTimeout(function () {
          window.location.reload();
        }, 4000);
      } else {
        message.warning("Error!");
      }
    });
    // console.log(data, "i am a data");
  };
  const handleChange = (value) => {
    setSelectedvalue(value);
    // console.log(value, "value");
  };
  return (
    <AddDoctorAppointment>
      <div className="">
        <Card
          title="Add  Appointment Time of doctors "
          bordered={false}
          style={
            {
              // width: 1240,
            }
          }
        >
          <Col span={24}>
            <Form
              onFinish={handleSubmit}
              labelCol={{
                span: 8,
              }}
              wrapperCol={{
                span: 8,
              }}
              layout="horizontal"
              style={{
                // maxWidth: 500,
                marginTop: 10,
              }}
            >
              <Form.Item
                label="DocId"
                name="DocId"
                values="DocId"
                rules={[{ required: true, message: "DocId is required" }]}
              >
                <InputNumber style={{ width: "100%" }} />
              </Form.Item>
              <Form.Item
                label="AppUserId"
                name="AppUserId"
                values="AppUserId"
                rules={[{ required: true, message: "AppUserId is required" }]}
              >
                <InputNumber style={{ width: "100%" }} />
              </Form.Item>
              <Form.Item
                label="UserId"
                name="UserId"
                values="UserId"
                rules={[{ required: true, message: "UserId is required" }]}
              >
                <InputNumber style={{ width: "100%" }} />
              </Form.Item>
              <Form.Item
                label="CovidId"
                name="CovidId"
                values="CovidId"
                rules={[{ required: true, message: "CovidId is required" }]}
              >
                <InputNumber style={{ width: "100%" }} />
              </Form.Item>
              <Form.Item
                label="Appointment date"
                name="AppointmentDate"
                values="AppointmentDate"
                rules={[
                  { required: true, message: "AppointmentDate is required" },
                ]}
              >
                <DatePicker
                  rules={[
                    {
                      required: true,
                      message: "Date is required!",
                    },
                  ]}
                  value={selectedDate}
                  onChange={(date) => setSelectedDate(date)}
                  style={{ width: "100%" }}
                />
              </Form.Item>
              <Form.Item
                label="AppTime"
                name="AppTime"
                values="AppTime"
                rules={[{ required: true, message: "AppTime is required" }]}
              >
                <Input maxlength={3} />
              </Form.Item>
              <Form.Item
                label="AppointmentReason"
                name="AppointmentReason"
                values="AppointmentReason"
                rules={[
                  { required: true, message: "AppointmentReason is required" },
                ]}
              >
                <div className="date-selection">
                  <TextArea rows={4} />
                </div>
              </Form.Item>
              <Form.Item
                label="AppointmentFor"
                name="AppointmentFor"
                values="AppointmentFor"
                rules={[
                  { required: true, message: "AppointmentFor is required" },
                ]}
              >
                <Input style={{ width: "100%" }} />
              </Form.Item>
              <Form.Item
                label="PatientName"
                name="PatientName"
                values="PatientName"
                rules={[{ required: true, message: "PatientName is required" }]}
              >
                <Input style={{ width: "100%" }} />
              </Form.Item>
              <Form.Item
                label="PatAge"
                name="PatAge"
                values="PatAge"
                rules={[{ required: true, message: "PatAge is required" }]}
              >
                <InputNumber style={{ width: "100%" }} />
              </Form.Item>
              <Form.Item
                label="AppointmentStatus"
                name="AppointmentStatus"
                values="AppointmentStatus"
                rules={[
                  { required: true, message: "AppointmentStatus is required" },
                ]}
              >
                <InputNumber style={{ width: "100%" }} />
              </Form.Item>
              <Form.Item
                label="AppointmentRemarks"
                name="AppointmentRemarks"
                values="AppointmentRemarks"
                rules={[
                  { required: true, message: "AppointmentRemarks is required" },
                ]}
              >
                <Input style={{ width: "100%" }} />
              </Form.Item>
              <Form.Item
                label="AppointmentType"
                name="AppointmentType"
                values="AppointmentType"
                rules={[
                  { required: true, message: "AppointmentType is required" },
                ]}
              >
                <Input style={{ width: "100%" }} />
              </Form.Item>
              <Form.Item
                label="Entry date"
                name="EntryDate"
                values="EntryDate"
                rules={[
                  {
                    required: true,
                    message: "Date is required!",
                  },
                ]}
              >
                <DatePicker
                  value={selectedDate}
                  onChange={(date) => setSelectedDate(date)}
                  style={{ width: "100%" }}
                />
              </Form.Item>
              <Form.Item>
                <div style={{ display: "flex", justifyContent: "flex-end" }}>
                  <Button
                    disabled={buttondisable}
                    htmlType="submit"
                    // disabled={butDis}
                    type="primary"
                    className="sumit-button btn-load"
                  >
                    Add Appointment
                  </Button>
                </div>
              </Form.Item>
            </Form>
          </Col>
        </Card>
      </div>
    </AddDoctorAppointment>
  );
};

export default AddAppointmentTime;
const AddDoctorAppointment = styled.div`
  .date-selection {
    display: flex;
  }
  .sumit-button {
    justify-content: center;
  }
`;
