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
import {
  GetAppointmentSettingsByIds,
  GetDocTimeScheduleForAppointments,
  InsertUpdateDoctorAvailableTimeForAppointments,
} from "../../services/appServices/ProductionServices";
import { useParams } from "react-router-dom";
import moment from "moment";
import dayjs from "dayjs";
const AddNewDrAvailableTimeAppoinment = () => {
  const { id } = useParams();
  const { Option } = Select;

  const [editedappointment, setEditedAppointment] = useState();
  const [appointmentlist, setAppointmentList] = useState();
  const [selectedShift, setSelectedShift] = useState("Morning");
  const [startTime, setStartTime] = useState();
  const [endTime, setEndTime] = useState();

  const [form] = Form.useForm();
  const dateFormat = "h:mm A";
  const handleTimeChange = (time, timeString, type) => {
    if (type === "start") {
      setStartTime(time);
    } else if (type === "end") {
      setEndTime(time);
    }
  };

  useEffect(() => {
    // console.log(editedappointment, "editedappointment");
    // console.log(startTime, endTime, "start and endtime");
    // console.log();
  }, []);
  useEffect(() => {
    if (editedappointment !== undefined) form.resetFields();
  }, [editedappointment]);
  useEffect(() => {
    // console.log(editedappointment, "aile ko time time");
    if (editedappointment === undefined) {
      let data = {
        id: id,
      };
      GetAppointmentSettingsByIds(data, (res) => {
        // console.log(res, "res appointment");
        // console.log(editedappointment, "aile print gareko");
        if (res?.DoctorAppointment && res?.DoctorAppointment.length > 0) {
          setAppointmentList(res?.DoctorAppointment);
          setEditedAppointment(res?.DoctorAppointment[0]);
          // console.log(editedappointment, "editeappoinmetnt time");
        } else {
          setAppointmentList([]);
        }
        // setLoading(false);
      });
    }
  }, [editedappointment]);

  const handleSubmit = (values) => {
    const formateedtdata = {
      Sun: startTime.toString(),
      //   Mon: monday.toString(),
      //   Tue: tuesday.toString(),
      //   Wed: wednesday.toString(),
      //   Thu: Thursday.toString(),
      //   Fri: Friday.toString(),
      //   Sat: saturday.toString(),
      //   AppTimeGap: apptimeeGap.toString(),
    };
    let data = {
      DsId: editedappointment ? id : 0,
      DoctId: values?.DoctId,
      DShift: values?.DShift,
      Sun: formateedtdata.Sun.replace(/,/g, "-"),
      //   Mon: formateedtdata.Mon.replace(/,/g, "-"),
      //   Tue: formateedtdata.Tue.replace(/,/g, "-"),
      //   Wed: formateedtdata.Wed.replace(/,/g, "-"),
      //   Thu: formateedtdata.Thu.replace(/,/g, "-"),
      //   Fri: formateedtdata.Fri.replace(/,/g, "-"),
      //   Sat: formateedtdata.Sat.replace(/,/g, "-"),
      //   AppTimeGap: formateedtdata.AppTimeGap.replace(/,/g, "-"),
    };
    // console.log(
    //   data.Fri.map((item, index) => <li key={index}>{item}</li>),
    //   "asdnbasdnbsad"
    // );
    // console.log(Friday, "friday");
    InsertUpdateDoctorAvailableTimeForAppointments(data, (res) => {
      // console.log(res, "i am response");
      if (res?.SuccessMsg == true) {
        message.success({ message });
        message.config({
          placement: "topRight",
          duration: 3,
          style: {
            backgroundColor: "#f6ffed",
            border: "1px solid #b7eb8f",
          },
        });
        setButtondisable(true);
      } else {
        message.warning("Error!");
      }
    });
    // console.log(data, "i am a data");
  };
  return (
    <div>
      <div className="">
        <Card
          title="Add  Appointment Time of doctors "
          bordered={false}
          style={{}}
        >
          <Col span={24}>
            <Form
              form={form}
              initialValues={editedappointment}
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
                label="DsId"
                name="DsId"
                values="DsId"
                rules={[{ required: true, message: "DsId is required" }]}
              >
                <InputNumber style={{ width: "100%" }} />
              </Form.Item>
              <Form.Item
                label="DoctId"
                name="DoctId"
                values="DoctId"
                rules={[{ required: true, message: "DoctId is required" }]}
              >
                <InputNumber style={{ width: "100%" }} />
              </Form.Item>
              <Form.Item
                label="DShift"
                name="DShift"
                values="DShift"
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
                // rules={[{ required: true, message: "Sun is required" }]}
              >
                <TimePicker
                  //   value={sunday}
                  format={dateFormat}
                  onChange={(time, timeString) =>
                    handleTimeChange(time, timeString, "start")
                  }
                  //   onChange={sunOnChange}
                />
                <TimePicker
                  //   value={sunday}
                  format={dateFormat}
                  onChange={(time, timeString) =>
                    handleTimeChange(time, timeString, "end")
                  }
                  //   onChange={sunOnChange}
                />
              </Form.Item>
              {/* <Form.Item
                  label="Sun"
                  name="Sun"
                  values="Sun"
                  rules={[{ required: true, message: "Sun is required" }]}
                >
                  <TimePicker.RangePicker
                    format="h:mm A"
                    defaultValue={defaultdate}
                    onChange={sunOnChange}
                    value={sunday}
                  />
                  <TimePicker.RangePicker
                    format="h:mm A"
                    defaultValue={defaultdate}
                    onChange={sunOnChange}
                    value={sunday}
                  />
                </Form.Item> */}
              {/* ) : (
                  <Form.Item
                    label="Sun"
                    name="Sun"
                    values="Sun"
                    rules={[{ required: true, message: "Sun is required" }]}
                  >
                    <TimePicker.RangePicker
                      format="h:mm A"
                      defaultValue={defaultdate}
                      onChange={sunOnChange}
                      value={sunday}
                    />
                  </Form.Item>
                )} */}
              {/* <Form.Item
                  label="Mon"
                  name="Mon"
                  values="Mon"
                  rules={[{ required: true, message: "Mon is required" }]}
                >
                  <TimePicker.RangePicker
                    format="h:mm A"
                    defaultValue={moment()}
                    onChange={monOnChange}
                    value={monday}
                  />
                </Form.Item>
                <Form.Item
                  label="Tue"
                  name="Tue"
                  values="Tue"
                  rules={[{ required: true, message: "Tue is required" }]}
                >
                  <TimePicker.RangePicker
                    format="h:mm A"
                    defaultValue={moment()}
                    onChange={TueOnChange}
                    value={tuesday}
                  />
                </Form.Item>
                <Form.Item
                  label="Wed"
                  name="Wed"
                  values="Wed"
                  rules={[{ required: true, message: "Wed is required" }]}
                >
                  <TimePicker.RangePicker
                    format="h:mm A"
                    defaultValue={moment()}
                    onChange={WedOnChange}
                    value={wednesday}
                  />
                </Form.Item>
                <Form.Item
                  label="Thu"
                  name="Thu"
                  values="Thu"
                  rules={[{ required: true, message: "Thu is required" }]}
                >
                  <TimePicker.RangePicker
                    format="h:mm A"
                    defaultValue={moment()}
                    onChange={ThuOnChange}
                    value={Thursday}
                  />
                </Form.Item>
                <Form.Item
                  label="Fri"
                  name="Fri"
                  values="Fri"
                  rules={[{ required: true, message: "Fri is required" }]}
                >
                  <TimePicker.RangePicker
                    format="h:mm A"
                    defaultValue={moment()}
                    onChange={FriOnChange}
                    value={Friday}
                  />
                </Form.Item>
                <Form.Item
                  label="Sat"
                  name="Sat"
                  values="Sat"
                  rules={[{ required: true, message: "Sat is required" }]}
                >
                  <TimePicker.RangePicker
                    format="h:mm A"
                    defaultValue={moment()}
                    onChange={SatOnChange}
                    value={saturday}
                  />
                </Form.Item>
                <Form.Item
                  label="AppTimeGap"
                  name="AppTimeGap"
                  values="AppTimeGap"
                  rules={[{ required: true, message: "AppTimeGap is required" }]}
                >
                  <TimePicker.RangePicker
                    onChange={AppTimeGap}
                    format="mm"
                    defaultValue={moment()}
                    defaultOpenValue={moment("00:00:00", "HH:mm:ss")}
                  />
                </Form.Item> */}
              <Form.Item>
                <div style={{ display: "flex", justifyContent: "flex-end" }}>
                  <Button
                    // disabled={buttondisable}
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

export default AddNewDrAvailableTimeAppoinment;
