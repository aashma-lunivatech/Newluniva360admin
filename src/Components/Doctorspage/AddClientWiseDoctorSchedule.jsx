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
  GetDoctorAvailableTimeinClientByIds,
  InsertUpdateClientWiseDoctorTimes,
} from "../../services/appServices/ProductionServices";
import { useParams } from "react-router-dom";
import moment from "moment";
import dayjs from "dayjs";
const AddClientWiseDoctorSchedule = () => {
  const { id } = useParams();
  const { Option } = Select;
  // console.log(id, "id of previous value");
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
  const [previoussunday, setPreviousSunday] = useState();
  const [availableTime, setAvailableTime] = useState();
  // const [defaultdate, setDefaultDate] = useState();
  dayjs.extend(customParseFormat);
  useEffect(() => {
    // console.log(sunday, "dayvalue");
    // console.log(defaultdate, "defaultdate");
  }, []);
  const [form] = Form.useForm();
  const timeString = "1:30 AM - 2:30AM";
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
    if (availableTime !== undefined) form.resetFields();
  }, [availableTime]);
  useEffect(() => {
    // console.log(availableTime, "availableTime");
    if (availableTime === undefined) {
      const data = {
        id: id,
      };
      GetDoctorAvailableTimeinClientByIds(data, (res) => {
        // console.log(res, "res");
        if (res?.DoctorAvailableTime && res?.DoctorAvailableTime.length > 0) {
          setAvailableTime(res?.DoctorAvailableTime[0]);
          setAppointmentList(res?.DoctorAvailableTime);
        } else {
          setAppointmentList([]);
        }
        setLoading(false);
      });
    }
  }, [availableTime]);

  const handleSubmit = (values) => {
    let formateedtdata = {
      Sun: sunday ? sunday.toString() : availableTime?.Sun ?? "",
      Mon: monday ? monday.toString() : availableTime?.Mon ?? "",
      Tue: tuesday ? tuesday.toString() : availableTime?.Tue ?? "",
      Wed: wednesday ? wednesday.toString() : availableTime?.Wed ?? "",
      Thu: Thursday ? Thursday.toString() : availableTime?.Thu ?? "",
      Fri: Friday ? Friday.toString() : availableTime?.Fri ?? "",
      Sat: saturday ? saturday.toString() : availableTime?.Sat ?? "",
    };
    // let data = {
    //   CDId: availableTime ? id??'' : 0,
    //   DoctorId: values?.DoctorId,
    //   DShift: values?.DShift,
    //   Sun: availableTime
    //     ? defaultdate
    //     : formateedtdata.Sun.replace(/,/g, "-"),
    //   Mon: availableTime
    //     ? defaultdate
    //     : formateedtdata.Mon.replace(/,/g, "-"),
    //   Tue: availableTime
    //     ? defaultdate
    //     : formateedtdata.Tue.replace(/,/g, "-"),
    //   Wed: availableTime
    //     ? defaultdate
    //     : formateedtdata.Wed.replace(/,/g, "-"),
    //   Thu: availableTime
    //     ? defaultdate
    //     : formateedtdata.Thu.replace(/,/g, "-"),
    //   Fri: availableTime
    //     ? defaultdate
    //     : formateedtdata.Fri.replace(/,/g, "-"),
    //   Sat: availableTime
    //     ? defaultdate
    //     : formateedtdata.Sat.replace(/,/g, "-"),
    //   AppTimeGap: values?.AppTimeGap,
    // };
    let data = {
      CDId: availableTime ? id : 0,
      DoctorId: values?.DoctorId,
      ClientId: values?.ClientId,
      DocShift: values?.DocShift,
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
    InsertUpdateClientWiseDoctorTimes(data, (res) => {
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
    console.log(data, "i am a data");
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
              // initialValue={availableTime}
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
                label="CDId"
                name="CDId"
                initialValue={availableTime ? availableTime.CDId : ""}
                values="CDId"
                rules={[{ required: true, message: "CDId is required" }]}
              >
                <InputNumber style={{ width: "100%" }} />
              </Form.Item> */}
              <Form.Item
                label="DoctorId"
                name="DoctorId"
                values="DoctorId"
                initialValue={availableTime ? availableTime.DoctorId : ""}
                rules={[{ required: true, message: "DoctorId is required" }]}
              >
                <InputNumber style={{ width: "100%" }} />
              </Form.Item>
              <Form.Item
                label="ClientId"
                name="ClientId"
                values="ClientId"
                initialValue={availableTime ? availableTime.ClientId : ""}
                rules={[{ required: true, message: "ClientId is required" }]}
              >
                <InputNumber style={{ width: "100%" }} />
              </Form.Item>
              <Form.Item
                label="DocShift"
                name="DocShift"
                values="DocShift"
                initialValue={availableTime ? availableTime.DocShift : ""}
                rules={[{ required: true, message: "DocShift is required" }]}
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
                  availableTime && availableTime.Sun && availableTime.Sun != "-"
                    ? [
                        dayjs(availableTime.Sun.split("-")[0], "h:mm A"),
                        dayjs(availableTime.Sun.split("-")[1], "h:mm A"),
                      ]
                    : null
                }
                // rules={[{ required: true, message: "Sun is required" }]}
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
                initialValue={
                  availableTime && availableTime.Mon && availableTime.Mon != "-"
                    ? [
                        dayjs(availableTime.Mon.split("-")[0], "h:mm A"),
                        dayjs(availableTime.Mon.split("-")[1], "h:mm A"),
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
                initialValue={
                  availableTime && availableTime.Tue && availableTime.Tue != "-"
                    ? [
                        dayjs(availableTime.Tue.split("-")[0], "h:mm A"),
                        dayjs(availableTime.Tue.split("-")[1], "h:mm A"),
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
                initialValue={
                  availableTime && availableTime.Wed && availableTime.Thu != "-"
                    ? [
                        dayjs(availableTime.Wed.split("-")[0], "h:mm A"),
                        dayjs(availableTime.Wed.split("-")[1], "h:mm A"),
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
                initialValue={
                  availableTime && availableTime.Thu && availableTime.Thu != "-"
                    ? [
                        dayjs(availableTime.Thu.split("-")[0], "h:mm A"),
                        dayjs(availableTime.Thu.split("-")[1], "h:mm A"),
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
                initialValue={
                  availableTime && availableTime.Fri && availableTime.Fri != "-"
                    ? [
                        dayjs(availableTime.Fri.split("-")[0], "h:mm A"),
                        dayjs(availableTime.Fri.split("-")[1], "h:mm A"),
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
                initialValue={
                  availableTime && availableTime.Sat && availableTime.Sat != "-"
                    ? [
                        dayjs(availableTime.Sat.split("-")[0], "h:mm A"),
                        dayjs(availableTime.Sat.split("-")[1], "h:mm A"),
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
                label="Appointment Gap"
                name="AppTimeGap"
                values="AppTimeGap"
                initialValue={availableTime ? availableTime.AppTimeGap : ""}
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

export default AddClientWiseDoctorSchedule;
