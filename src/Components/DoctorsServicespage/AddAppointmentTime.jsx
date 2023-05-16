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
import { useLocation, useParams } from "react-router-dom";
import {
  GetBookedOnlineAppointmentDetailsByDocIdAndDates,
  InsertUpdateAppointments,
} from "../../services/appServices/ProductionServices";
import dayjs from "dayjs";
const AddAppointmentTime = () => {
  const location = useLocation();
  const { id } = useParams();
  const [form] = Form.useForm();
  const [selectedDate, setSelectedDate] = useState();
  const [buttondisable, setButtondisable] = useState(false);
  const [entrydate, setEntrydate] = useState();
  const [editedvalue, setEditedValue] = useState();

  const dateFormat = "YYYY/MM/DD";

  console.log(editedvalue, "editedvalue");

  const selectedrecords = location.state?.selectedrecord;

  useEffect(() => {
    setEditedValue(selectedrecords);
  }, [editedvalue]);
  const formatDates = (values) => {
    const startDate = values.format("YYYY-MM-DD");
    setSelectedDate(startDate);
  };
  const formatentrydates = (values) => {
    const startDate = values.format("YYYY-MM-DD");
    setEntrydate(startDate);
    console.log(startDate, "startdate");
  };
  useEffect(() => {
    if (editedvalue !== undefined) {
      form.resetFields();
    }
  }, [editedvalue]);

  console.log(id);

  // useEffect(() => {
  //   console.log(editedvalue, selectedDate, "selectdate", "editedvalue");
  //   if (editedvalue === undefined) {
  //     const data = {
  //       docId: id,
  //       appointmentDate: valueofselection,
  //     };
  //     console.log(data, "dataho");
  //     GetBookedOnlineAppointmentDetailsByDocIdAndDates(data, (res) => {
  //       if (res?.BookedTime && res?.BookedTime.length > 0) {
  //         console.log(res, "resjhomaamam");
  //         setEditedValue(res?.BookedTime[0]);
  //         setBookedList(res.BookedTime);
  //       } else {
  //         setBookedList([]);
  //       }
  //     });
  //   }
  // }, [editedvalue]);

  const handleSubmit = (values) => {
    let data = {
      ApId: editedvalue ? parseInt(id) : 0,
      DocId: values?.DocId,
      AppointmentDate: selectedDate ?? editedvalue.AppointmentDate,
      AppTime: values?.AppTime,
      AppointmentReason: values?.AppointmentReason,
      AppointmentFor: values?.AppointmentFor,
      PatientName: values?.PatientName,
      PatAge: values?.PatAge.toString(),
      AppointmentStatus: values?.AppointmentStatus,
      AppointmentRemarks: values?.AppointmentRemarks,
      AppointmentType: values?.AppointmentType,
      EntryDate: entrydate ?? editedvalue.EntryDate,
      AppUserId: values?.AppUserId,
      UserId: 5,
      CovidId: values?.CovidId,
    };
    InsertUpdateAppointments(data, (res) => {
      console.log(data, "i am response");
      if (res?.SuccessMsg == true) {
        message.success("Appointment Added Successfully");
        setButtondisable(true);
        // setTimeout(function () {
        //   window.location.reload();
        // }, 4000);
      } else {
        message.warning(res?.Message);
      }
    });
    console.log(data, "i am a data");
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
              form={form}
              // initialValues={editedvalue}
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
                // initialValue={
                //   editedvalue ? editedvalue.DoctId : editedvalue.DocId
                // }
                initialValue={
                  editedvalue
                    ? editedvalue.DoctId || editedvalue.DocId
                    : undefined
                }
                rules={[{ required: true, message: "DocId is required" }]}
              >
                <InputNumber style={{ width: "100%" }} />
              </Form.Item>
              <Form.Item
                // initialValue={
                //   editedvalue
                //     ? dayjs(
                //         editedvalue.selectedvaluedate.split("T")[0],
                //         "YYYY-MM-DD"
                //       )
                //     : null
                // }
                label="Appointment date"
                name="AppointmentDate"
                values="AppointmentDate"
                rules={[
                  { required: true, message: "AppointmentDate is required" },
                ]}
                initialValue={
                  editedvalue
                    ? dayjs(
                        editedvalue.AppointmentDate.split("T")[0],
                        "YYYY-MM-DD"
                      )
                    : null
                }
              >
                <DatePicker
                  format={dateFormat}
                  style={{ width: "100%" }}
                  rules={[
                    {
                      required: true,
                      message: "Date is required!",
                    },
                  ]}
                  onChange={(dates) => formatDates(dates)}
                  value={selectedDate}
                />
              </Form.Item>

              <Form.Item
                label="AppTime"
                name="AppTime"
                values="AppTime"
                initialValue={editedvalue ? editedvalue.AppTime : ""}
                rules={[{ required: true, message: "AppTime is required" }]}
              >
                <Input />
              </Form.Item>
              <Form.Item
                label="AppointmentReason"
                name="AppointmentReason"
                values="AppointmentReason"
                initialValue={editedvalue ? editedvalue.AppointmentReason : ""}
                rules={[
                  { required: true, message: "AppointmentReason is required" },
                ]}
              >
                <TextArea rows={4} />
              </Form.Item>
              <Form.Item
                label="AppointmentFor"
                name="AppointmentFor"
                initialValue={editedvalue ? editedvalue.AppointmentFor : ""}
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
                initialValue={editedvalue ? editedvalue.PatientName : ""}
                rules={[{ required: true, message: "PatientName is required" }]}
              >
                <Input style={{ width: "100%" }} />
              </Form.Item>
              <Form.Item
                label="PatAge"
                name="PatAge"
                values="PatAge"
                initialValue={editedvalue ? editedvalue.PatAge : ""}
                rules={[{ required: true, message: "PatAge is required" }]}
              >
                <InputNumber style={{ width: "100%" }} />
              </Form.Item>
              <Form.Item
                label="AppointmentStatus"
                name="AppointmentStatus"
                values="AppointmentStatus"
                initialValue={editedvalue ? editedvalue.AppointmentStatus : ""}
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
                initialValue={editedvalue ? editedvalue.AppointmentRemarks : ""}
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
                initialValue={editedvalue ? editedvalue.AppointmentType : ""}
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
                initialValue={
                  editedvalue
                    ? dayjs(editedvalue.EntryDate.split("T")[0], "YYYY-MM-DD")
                    : null
                }
                // initialValue={
                //   editedvalue
                //     ? dayjs(editedvalue.entrydate, "YYYY-MM-DD")
                //     : null
                // }
              >
                <DatePicker
                  style={{ width: "100%" }}
                  rules={[
                    {
                      required: true,
                      message: "Date is required!",
                    },
                  ]}
                  format={dateFormat}
                  onChange={(dates) => formatentrydates(dates)}
                  value={entrydate}
                />
              </Form.Item>
              <Form.Item
                label="AppUserId"
                name="AppUserId"
                values="AppUserId"
                initialValue={editedvalue ? editedvalue.AppUserId : ""}
                rules={[{ required: true, message: "AppUserId is required" }]}
              >
                <InputNumber style={{ width: "100%" }} />
              </Form.Item>
              {/* <Form.Item
                label="UserId"
                name="UserId"
                values="UserId"
                rules={[{ required: true, message: "UserId is required" }]}
              >
                <InputNumber style={{ width: "100%" }} />
              </Form.Item> */}
              <Form.Item
                label="CovidId"
                name="CovidId"
                values="CovidId"
                initialValue={editedvalue ? editedvalue.CovidId : ""}
                rules={[{ required: true, message: "CovidId is required" }]}
              >
                <InputNumber style={{ width: "100%" }} />
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
