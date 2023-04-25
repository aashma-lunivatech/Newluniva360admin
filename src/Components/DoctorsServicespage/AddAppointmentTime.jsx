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
  const [selectedId, setSelectedId] = useState(id);
  const [imageUrl, setImageUrl] = useState([]);
  const [buttondisable, setButtondisable] = useState(false);
  const [selectedvalue, setSelectedvalue] = useState();
  // let currentDate = new Date().toISOString().split("T")[0];
  let currentDate = new Date();
  useEffect(() => {
    console.log(selectedId, "sekectednbsdnasb");
  }, [id]);

  const handleSubmit = (e) => {
    let data = {
      ApId: e?.ApId,
      DocId: e?.DocId,
      CovidId: e?.CovidId,
      AppointmentDate: "2023-04-25T10:05:35.9798392+05:4",
      AppointmentReason: e?.AppointmentReason,
      AppointmentFor: e?.AppointmentFor,
      PatientName: e?.PatientName,
      PatAge: e?.PatAge,
      AppointmentStatus: e?.AppointmentStatus,
      AppointmentRemarks: e?.AppointmentRemarks,
      AppointmentType: e?.AppointmentType,
      EntryDate: "2023-04-25T10:05:35.9798392+05:4",
      AppUserId: e?.AppUserId,
      UserId: e?.UserId,
      AppTime: e?.AppTime,
    };
    InsertUpdateAppointments(data, (res) => {
      console.log(res, "i am response");
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
    console.log(data, "i am a data");
  };
  const handleChange = (value) => {
    setSelectedvalue(value);
    console.log(value, "value");
  };
  return (
    <AddDoctorAppointment>
      <div className="">
        <Card
          title="Add  Appoointment Time of doctors"
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
              <Form.Item label="ApId" name="ApId">
                <InputNumber style={{ width: "100%" }} />
              </Form.Item>
              <Form.Item label="DocId" name="DocId">
                <InputNumber style={{ width: "100%" }} />
              </Form.Item>
              <Form.Item label="AppUserId" name="AppUserId">
                <InputNumber style={{ width: "100%" }} />
              </Form.Item>
              <Form.Item label="UserId" name="UserId">
                <InputNumber style={{ width: "100%" }} />
              </Form.Item>
              <Form.Item label="CovidId" name="CovidId">
                <InputNumber style={{ width: "100%" }} />
              </Form.Item>
              <Form.Item label="Appointment date" name="AppointmentDate">
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
              <Form.Item label="AppTime" name="AppTime">
                <Input />
              </Form.Item>
              <Form.Item label="AppointmentReason" name="AppointmentReason">
                <div className="date-selection">
                  <TextArea rows={4} />
                </div>
              </Form.Item>
              <Form.Item label="AppointmentFor" name="AppointmentFor">
                <Input />
              </Form.Item>
              <Form.Item label="PatientName" name="PatientName">
                <Input />
              </Form.Item>
              <Form.Item label="PatAge" name="PatAge">
                <Input />
              </Form.Item>
              <Form.Item label="AppointmentStatus" name="AppointmentStatus">
                <InputNumber />
              </Form.Item>
              <Form.Item label="AppointmentRemarks" name="AppointmentRemarks">
                <Input />
              </Form.Item>
              <Form.Item label="AppointmentType" name="AppointmentType">
                <Input />
              </Form.Item>
              <Form.Item label="Entry date" name="EntryDate">
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
