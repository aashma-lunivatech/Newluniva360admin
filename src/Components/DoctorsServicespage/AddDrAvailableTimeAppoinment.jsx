import {
  Button,
  Card,
  Col,
  DatePicker,
  Form,
  Input,
  InputNumber,
  Select,
  TimePicker,
  message,
} from "antd";
import React, { useEffect, useState } from "react";
import customParseFormat from "dayjs/plugin/customParseFormat";
import {
  GetDocTimeScheduleForAppointments,
  InsertUpdateDoctorAvailableTimeForAppointments,
} from "../../services/appServices/ProductionServices";
import { useParams } from "react-router-dom";
import moment from "moment";
import dayjs from "dayjs";
const AddDrAvailableTimeAppoinment = () => {
  const { id } = useParams();
  const { Option } = Select;
  console.log(id, "id of previous value");
  const [editedappointment, setEditedAppointment] = useState();
  const [appointmentlist, setAppointmentList] = useState();
  const [buttondisable, setButtondisable] = useState(false);
  const [selectedShift, setSelectedShift] = useState();
  const [sunday, setSunday] = useState();
  const [monday, setMonday] = useState();
  const [tuesday, setTuesday] = useState();
  const [wednesday, setWednesday] = useState();
  const [Thursday, setThursday] = useState();
  const [Friday, setFriday] = useState();
  const [saturday, setSaturday] = useState();
  const [loading, setLoading] = useState(false);
  dayjs.extend(customParseFormat);

  const [form] = Form.useForm();
  const sunOnChange = (time, timeString) => {
    // console.log(timeString, "timestring");
    setSunday(timeString);
  };

  const monOnChange = (time, timeString) => {
    // console.log(timeString, "timestring");
    setMonday(timeString);
  };
  const TueOnChange = (time, timeString) => {
    // console.log(timeString, "timestring");
    setTuesday(timeString);
  };
  const WedOnChange = (time, timeString) => {
    // console.log(timeString, "timestring");
    setWednesday(timeString);
  };
  const ThuOnChange = (time, timeString) => {
    // console.log(timeString, "timestring");
    setThursday(timeString);
  };
  const FriOnChange = (time, timeString) => {
    // console.log(timeString, "timestring");
    setFriday(timeString);
  };
  const SatOnChange = (time, timeString) => {
    // console.log(timeString, "timestring");
    setSaturday(timeString);
  };

  useEffect(() => {
    if (editedappointment !== undefined) form.resetFields();
  }, [editedappointment]);
  useEffect(() => {
    // console.log(editedappointment, "editedappointment");
    if (editedappointment === undefined) {
      let data = {
        docId: id,
      };
      GetDocTimeScheduleForAppointments(data, (res) => {
        // console.log(res, "res appointment");
        // console.log(editedappointment, "aile print gareko");
        if (res?.AppointmentTime && res?.AppointmentTime.length > 0) {
          setAppointmentList(res?.AppointmentTime);
          setEditedAppointment(res?.AppointmentTime[0]);
          // console.log(editedappointment, "editeappoinmetnt time");
        } else {
          setAppointmentList([]);
        }
        setLoading(false);
      });
    }
  }, [editedappointment]);

  const handleSubmit = (values) => {
    const formateedtdata = {
      Sun: sunday ? sunday.toString() : editedappointment.Sun,
      Mon: monday ? monday.toString() : editedappointment.Mon,
      Tue: tuesday ? tuesday.toString() : editedappointment.Tue,
      Wed: wednesday ? wednesday.toString() : editedappointment.Wed,
      Thu: Thursday ? Thursday.toString() : editedappointment.Thu,
      Fri: Friday ? Friday.toString() : editedappointment.Fri,
      Sat: saturday ? saturday.toString() : editedappointment.Sat,
    };
    // let data = {
    //   DsId: editedappointment ? id : 0,
    //   DoctId: values?.DoctId,
    //   DShift: values?.DShift,
    //   Sun: editedappointment
    //     ? defaultdate
    //     : formateedtdata.Sun.replace(/,/g, "-"),
    //   Mon: editedappointment
    //     ? defaultdate
    //     : formateedtdata.Mon.replace(/,/g, "-"),
    //   Tue: editedappointment
    //     ? defaultdate
    //     : formateedtdata.Tue.replace(/,/g, "-"),
    //   Wed: editedappointment
    //     ? defaultdate
    //     : formateedtdata.Wed.replace(/,/g, "-"),
    //   Thu: editedappointment
    //     ? defaultdate
    //     : formateedtdata.Thu.replace(/,/g, "-"),
    //   Fri: editedappointment
    //     ? defaultdate
    //     : formateedtdata.Fri.replace(/,/g, "-"),
    //   Sat: editedappointment
    //     ? defaultdate
    //     : formateedtdata.Sat.replace(/,/g, "-"),
    //   AppTimeGap: values?.AppTimeGap,
    // };
    let data = {
      DsId: editedappointment ? id : 0,
      DoctId: values?.DoctId,
      DShift: values?.DShift ?? editedappointment.DShift,
      Sun: formateedtdata.Sun.replace(/,/g, "-"),
      Mon: formateedtdata.Mon.replace(/,/g, "-"),
      Tue: formateedtdata.Tue.replace(/,/g, "-"),
      Wed: formateedtdata.Wed.replace(/,/g, "-"),
      Thu: formateedtdata.Thu.replace(/,/g, "-"),
      Fri: formateedtdata.Fri.replace(/,/g, "-"),
      Sat: formateedtdata.Sat.replace(/,/g, "-"),
      AppTimeGap: values?.AppTimeGap,
    };
    // console.log(Friday, "friday");
    InsertUpdateDoctorAvailableTimeForAppointments(data, (res) => {
      // console.log(res, "i am response");
      if (res?.SuccessMsg == true) {
        message.success(res?.Message);
        message.config({
          placement: "topRight",
          duration: 3,
          style: {
            backgroundColor: "#f6ffed",
            border: "1px solid #b7eb8f",
          },
        });
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
  const format = "h:mm A";

  return (
    <div>
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
              form={form}
              // initialValue={editedappointment}
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
              {/* <Form.Item
                label="DsId"
                name="DsId"
                initialValue={editedappointment ? editedappointment.DsId : ""}
                values="DsId"
                rules={[{ required: true, message: "DsId is required" }]}
              >
                <InputNumber style={{ width: "100%" }} disabled={true} />
              </Form.Item> */}
              <Form.Item
                label="DoctId"
                name="DoctId"
                values="DoctId"
                initialValue={editedappointment ? editedappointment.DoctId : ""}
                rules={[{ required: true, message: "DoctId is required" }]}
              >
                <InputNumber style={{ width: "100%" }} />
              </Form.Item>
              <Form.Item
                label="DShift"
                name="DShift"
                values="DShift"
                initialValue={
                  editedappointment ? editedappointment.DShift : "DShift"
                }
                rules={[{ required: true, message: "DShift is required" }]}
              >
                <Select
                  value={selectedShift}
                  onChange={(value) => setSelectedShift(value)}
                >
                  <Option value="morning">Morning</Option>
                  <Option value="day">Day</Option>
                  <Option value="evening">Evening</Option>
                </Select>
              </Form.Item>
              <Form.Item
                label="Sun"
                name="Sun"
                values="Sun"
                initialValue={
                  editedappointment
                    ? [
                        dayjs(editedappointment.Sun.split("-")[0], "h:mm A"),
                        dayjs(editedappointment.Sun.split("-")[1], "h:mm A"),
                      ]
                    : null
                }
                rules={[{ required: true, message: "Sun is required" }]}
              >
                <TimePicker.RangePicker
                  format={format}
                  onChange={sunOnChange}
                />
              </Form.Item>
              <Form.Item
                label="Mon"
                name="Mon"
                values="Mon"
                rules={[{ required: true, message: "Mon is required" }]}
                initialValue={
                  editedappointment
                    ? [
                        dayjs(editedappointment.Mon.split("-")[0], "h:mm A"),
                        dayjs(editedappointment.Mon.split("-")[1], "h:mm A"),
                      ]
                    : null
                }
              >
                <TimePicker.RangePicker
                  format={format}
                  onChange={monOnChange}
                  value={monday}
                />
              </Form.Item>
              <Form.Item
                label="Tue"
                name="Tue"
                values="Tue"
                rules={[{ required: true, message: "Tue is required" }]}
                initialValue={
                  editedappointment
                    ? [
                        dayjs(editedappointment.Tue.split("-")[0], "h:mm A"),
                        dayjs(editedappointment.Tue.split("-")[1], "h:mm A"),
                      ]
                    : null
                }
              >
                <TimePicker.RangePicker
                  onChange={TueOnChange}
                  value={tuesday}
                  format={format}
                />
              </Form.Item>
              <Form.Item
                label="Wed"
                name="Wed"
                values="Wed"
                rules={[{ required: true, message: "Wed is required" }]}
                initialValue={
                  editedappointment
                    ? [
                        dayjs(editedappointment.Wed.split("-")[0], "h:mm A"),
                        dayjs(editedappointment.Wed.split("-")[1], "h:mm A"),
                      ]
                    : null
                }
              >
                <TimePicker.RangePicker
                  onChange={WedOnChange}
                  value={wednesday}
                  format={format}
                />
              </Form.Item>
              <Form.Item
                label="Thu"
                name="Thu"
                values="Thu"
                rules={[{ required: true, message: "Thu is required" }]}
                initialValue={
                  editedappointment
                    ? [
                        dayjs(editedappointment.Thu.split("-")[0], "h:mm A"),
                        dayjs(editedappointment.Thu.split("-")[1], "h:mm A"),
                      ]
                    : null
                }
              >
                <TimePicker.RangePicker
                  onChange={ThuOnChange}
                  value={Thursday}
                  format={format}
                />
              </Form.Item>
              <Form.Item
                label="Fri"
                name="Fri"
                values="Fri"
                rules={[{ required: true, message: "Fri is required" }]}
                initialValue={
                  editedappointment
                    ? [
                        dayjs(editedappointment.Fri.split("-")[0], "h:mm A"),
                        dayjs(editedappointment.Fri.split("-")[1], "h:mm A"),
                      ]
                    : null
                }
              >
                <TimePicker.RangePicker
                  defaultValue={moment()}
                  onChange={FriOnChange}
                  value={Friday}
                  format={format}
                />
              </Form.Item>
              <Form.Item
                label="Sat"
                name="Sat"
                values="Sat"
                rules={[{ required: true, message: "Sat is required" }]}
                initialValue={
                  editedappointment
                    ? [
                        dayjs(editedappointment.Sat.split("-")[0], "h:mm A"),
                        dayjs(editedappointment.Sat.split("-")[1], "h:mm A"),
                      ]
                    : null
                }
              >
                <TimePicker.RangePicker
                  onChange={SatOnChange}
                  value={saturday}
                  format={format}
                />
              </Form.Item>
              <Form.Item
                label="Appointment"
                name="AppTimeGap"
                values="AppTimeGap"
                initialValue={
                  editedappointment ? editedappointment.AppTimeGap : ""
                }
                rules={[{ required: true, message: "AppTimeGap is required" }]}
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
    </div>
  );
};

export default AddDrAvailableTimeAppoinment;
