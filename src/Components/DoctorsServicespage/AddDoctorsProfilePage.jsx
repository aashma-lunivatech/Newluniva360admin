import React, { useEffect } from "react";
import { UploadOutlined } from "@ant-design/icons";
import {
  Button,
  Card,
  Col,
  DatePicker,
  Form,
  Input,
  InputNumber,
  Radio,
  Switch,
  Upload,
  message,
  notification,
} from "antd";
import { useState } from "react";
import styled from "styled-components";
import { InsertUpdateClientDetailsluniva } from "../../services/appServices/ProductionServices";
import { useNavigate, useParams } from "react-router-dom";

const AddDoctorsProfilePage = () => {
  const { id } = useParams();
  const [form] = Form.useForm();
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedId, setSelectedId] = useState(id);
  const [imageUrl, setImageUrl] = useState([]);
  const [buttondisable, setButtondisable] = useState(false);
  const [Radiobuttonvalue, setRadioButtonValue] = useState(1);
  const radioOnChange = (e) => {
    console.log("radio checked", e.target.value);
    setRadioButtonValue(e.target.value);
  };
  const { TextArea } = Input;

  const props = {
    name: "file",
    action: "https://www.mocky.io/v2/5cc8019d300000980a055e76",
    headers: {
      authorization: "authorization-text",
    },
    onChange(info) {
      if (info.file.status !== "uploading") {
        console.log(info.file, info.fileList, "infodata");
        console.log(info.fileList.name, "infofilename");
        setImageUrl(info.file.name);
      }
      if (info.file.status === "done") {
        message.success(`${info.file.name} file uploaded successfully`);
      } else if (info.file.status === "error") {
        message.error(`${info.file.name} file upload failed.`);
      }
    },
  };
  useEffect(() => {
    console.log(selectedId, "sekectednbsdnasb");
  }, [id]);

  const initialValues = {
    RID: selectedId,
    clientcode: "Np",
    ClientCountry: "nepal",
    ClientState: 2,
    ClientDistrict: 1,
    ClientMUNVDC: 2,
    ClientTypeId: 1,
    UserId: 3,
    // replace "default country" with the default value for ClientCountry
  };
  const handleSubmit = (e) => {
    let data = {
      DId: e?.DId,
      DoctorName: e?.DoctorName,
      DocMobileNo: e?.DocMobileNo,
      DocContactNo: e?.DocContactNo,
      DocGender: e?.DocGender,
      DocEmail: e?.DocEmail,
      DocQualification: e?.DocQualification,
      DocSpecilization: e?.DocSpecilization,
      DocExperience: e?.DocExperience,
      NMCNumber: e?.NMCNumber,
      DocWorkArea: e?.DocWorkArea,
      DocLinks: e?.DocLinks,
      DocImage: imageUrl,
      DocDepartment: e?.DocDepartment,
      DocAddress: e?.DocAddress,
      DocCharge: e?.DocCharge,
      UserType: e?.UserType,
      DocIsActive: e?.IsActive || true,
      UserId: e?.UserId,
      ConferenceLinks: e?.ConferenceLinks,
      DocLoginId: e?.DocLoginId,
      DocRegisteredDate: selectedDate?.format("YYYY-MM-DD"),
      DocDecription: e?.DocDecription,
    };
    InsertUpdateClientDetailsluniva(data, (res) => {
      console.log(res, "i am response");
      if (res?.SuccessMsg == true) {
        notification.success("client details Added Successfully");
        notification.config({
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
        notification.warning("Error!");
      }
    });
    console.log(data, "i am a data");
  };

  return (
    <AddDoctorProfile>
      <div className="">
        <Card title="Doctors Profile" bordered={false} style={{}}>
          <Col span={24}>
            <Form
              initialValues={initialValues}
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
              <Form.Item label="Doctor Id" name="DId">
                <InputNumber style={{ width: "100%" }} />
              </Form.Item>
              <Form.Item label="DocLoginId" name="DocLoginId">
                <Input />
              </Form.Item>
              <Form.Item label="Name" name="DoctorName">
                <Input />
              </Form.Item>
              <Form.Item label="MobileNo" name="MobileNo">
                <InputNumber style={{ width: "100%" }} />
              </Form.Item>
              <Form.Item label="DocContactNo" name="DocContactNo">
                <InputNumber style={{ width: "100%" }} />
              </Form.Item>
              <Form.Item label="Gender" name="DocGender">
                <Radio.Group onChange={radioOnChange} value={Radiobuttonvalue}>
                  <Radio value={1}>Male</Radio>
                  <Radio value={2}>Female</Radio>
                </Radio.Group>
              </Form.Item>
              <Form.Item label="Email" name="DocEmail">
                <Input />
              </Form.Item>
              <Form.Item label="DocEmail" name="DocEmail">
                <Input />
              </Form.Item>
              <Form.Item label="DocQualification" name="DocQualification">
                <Input />
              </Form.Item>
              <Form.Item label="Specilization" name="DocSpecilization">
                <Input />
              </Form.Item>
              <Form.Item label="Experience" name="DocExperience">
                <Input />
              </Form.Item>
              <Form.Item label="Number" name="NMCNumber">
                <InputNumber style={{ width: "100%" }} />
              </Form.Item>
              <Form.Item label="DocWorkArea" name="DocWorkArea">
                <Input />
              </Form.Item>
              <Form.Item label="Links" name="DocLinks">
                <Input />
              </Form.Item>
              <Form.Item label="DocRegisteredDate" name="DocRegisteredDate">
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
              <Form.Item label="Department" name="DocDepartment">
                <Input />
              </Form.Item>
              <Form.Item label="DocAddress" name="DocAddress">
                <Input />
              </Form.Item>
              <Form.Item label="Charge" name="DocCharge">
                <InputNumber style={{ width: "100%" }} />
              </Form.Item>
              <Form.Item label="UserType" name="UserType">
                <Input />
              </Form.Item>
              <Form.Item label="DocDecription" name="DocDecription">
                <TextArea rows={4} />
              </Form.Item>
              <Form.Item label="Doctor Images" name="DocImage">
                <Upload {...props}>
                  <Button icon={<UploadOutlined />}>Click to Upload</Button>
                </Upload>
              </Form.Item>
              <Form.Item label="is Active" valuePropName="checked">
                <Switch />
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
                    onClick={handleSubmit}
                    type="primary"
                    className="sumit-button btn-load"
                  >
                    Add Doctors
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

export default AddDoctorsProfilePage;
const AddDoctorProfile = styled.div``;
