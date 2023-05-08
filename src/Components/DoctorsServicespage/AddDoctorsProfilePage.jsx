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
  Select,
  Switch,
  Upload,
  message,
  notification,
} from "antd";
import { useState } from "react";
import styled from "styled-components";
import {
  GetListOfDoctorDetails,
  InsertUpdateClientDetailsluniva,
  InsertUpdateDoctorDetailss,
} from "../../services/appServices/ProductionServices";
import { useNavigate, useParams } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";

const AddDoctorsProfilePage = () => {
  const { Option } = Select;
  const { id } = useParams();
  console.log(id, "idhoma");
  const [form] = Form.useForm();
  const [selectedDate, setSelectedDate] = useState(null);
  const [imageUrl, setImageUrl] = useState([]);
  const [buttondisable, setButtondisable] = useState(false);
  const [gendervalue, setGendervalue] = useState("");
  const [editedvaluedoctor, setEditedValueDoctor] = useState();
  const [departmentlist, setDepartmentList] = useState();
  const [previousValue, setPreviousValue] = useState();
  const selectOnchange = (value) => {
    console.log(value, "selected value ");
    setGendervalue(value);
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
  let finaldate = selectedDate?.format("YYYY-MM-DD");
  let currentDate = new Date().toISOString().split("T")[0];
  console.log(finaldate, "finaldate");
  useEffect(() => {
    if (editedvaluedoctor !== undefined) form.resetFields();
  }, [editedvaluedoctor]);
  useEffect(() => {
    console.log(editedvaluedoctor, "sekectednbsdnasb");
  }, [id]);

  useEffect(() => {
    console.log(gendervalue, "gendervalue");
    if (editedvaluedoctor === undefined) {
      let data = {
        departmentId: id,
      };
      GetListOfDoctorDetails(data, (res) => {
        console.log(res, "res");
        if (res?.DoctorList && res?.DoctorList.length > 0) {
          setDepartmentList(res?.DoctorList);
          setEditedValueDoctor(res?.DoctorList[0]);
          // console.log(departmentlist, "departmentlistofdoctor");
          console.log(editedvaluedoctor, "editedvaluedr");
        } else {
          setDepartmentList([]);
        }
      });
    }
  }, []);
  const handleSubmit = (values) => {
    let data = {
      DId: editedvaluedoctor ? parseInt(id) : 0,
      DoctorName: values?.DoctorName,
      DocMobileNo: values?.DocMobileNo,
      DocContactNo: values?.DocContactNo.toString(),
      DocGender: previousValue ?? editedvaluedoctor.DocGender,
      DocEmail: values?.DocEmail,
      DocQualification: values?.DocQualification ?? "mbbs",
      DocSpecilization: values?.DocSpecilization,
      DocExperience: values?.DocExperience,
      NMCNumber: values?.NMCNumber.toString(),
      DocWorkArea: values?.DocWorkArea,
      DocLinks: values?.DocLinks,
      DocImage: "abc.png",
      DocIsActive:
        values?.DocIsActive === undefined || values?.DocIsActive === true
          ? true
          : false,
      DocRegisteredDate: finaldate ?? currentDate,
      DocDepartment: values?.DocDepartment,
      DocAddress: values?.DocAddress,
      DocCharge: values?.DocCharge,
      DocLoginId: parseInt(values?.DocLoginId),
      UserType: values?.UserType,
      DocDecription: values?.DocDecription,
      ConferenceLink: values?.ConferenceLink ?? "abc.com",
      DepartmentId: values?.DepartmentId,
    };

    // const data = {
    //   DId: 3,
    //   DoctorName: "sample string 201",
    //   DocMobileNo: "sample string 3",
    //   DocContactNo: "sample string 8",
    //   DocGender: "sample string 5",
    //   DocEmail: "sample string 6",
    //   DocQualification: "sample string 7",
    //   DocSpecilization: "sample string 8",
    //   DocExperience: "sample string 9",
    //   NMCNumber: "sample string 10",
    //   DocWorkArea: "sample string 11",
    //   DocLinks: "sample string 12",
    //   DocImage: "sample string 13",
    //   DocIsActive: true,
    //   DocRegisteredDate: "2023-05-01T12:47:56.4187268+05:45",
    //   DocDepartment: "sample string 16",
    //   DocAddress: "sample string 17",
    //   DocCharge: 18.0,
    //   DocLoginId: 19,
    //   UserType: "sample string 20",
    //   DocDecription: "sample string 21",
    //   ConferenceLink: "sample string 22",
    //   DepartmentId: 23,
    // };
    // return console.log(data, "data");

    InsertUpdateDoctorDetailss(data, (res) => {
      console.log(res, "i am response");
      if (res?.SuccessMsg == true) {
        message.success("Doctor's Profile Added Successfully");
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

  return (
    <AddDoctorProfile>
      <div className="">
        <Card title="Doctors Profile" bordered={false} style={{}}>
          <Col span={24}>
            <Form
              form={form}
              initialValues={editedvaluedoctor}
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
              <Form.Item label="User Type" name="UserType" values="UserType">
                <Input style={{ width: "100%" }} />
              </Form.Item>
              <Form.Item
                label="DocLoginId"
                name="DocLoginId"
                values="DocLoginId"
              >
                <Input />
              </Form.Item>
              <Form.Item label="Name" name="DoctorName" values="DoctorName">
                <Input />
              </Form.Item>
              <Form.Item
                label="MobileNo"
                name="DocMobileNo"
                values="DocMobileNo"
                rules={[
                  {
                    required: true,
                    message: "DocMobileNo is required!",
                  },
                ]}
              >
                <InputNumber style={{ width: "100%" }} />
              </Form.Item>
              <Form.Item
                label="DocContactNo"
                name="DocContactNo"
                values="DocContactNo"
                rules={[
                  {
                    required: true,
                    message: "DocContactNo is required!",
                  },
                ]}
              >
                <InputNumber style={{ width: "100%" }} />
              </Form.Item>
              <Form.Item label="Gender" name="DocGender" values="DocGender">
                <Select
                  // onSelect={selectOnchange}
                  // value={gendervalue}
                  onChange={(value) => {
                    setPreviousValue(value);
                  }}
                  placeholder="Select gender"
                >
                  <Option value="male">Male</Option>
                  <Option value="female">Female</Option>
                </Select>
              </Form.Item>

              <Form.Item label="DocEmail" name="DocEmail" values="DocEmail">
                <Input />
              </Form.Item>
              <Form.Item
                label="DepartmentId"
                name="DepartmentId"
                values="DepartmentId"
              >
                <Input />
              </Form.Item>

              {editedvaluedoctor ? (
                ""
              ) : (
                <Form.Item
                  label="DocQualification"
                  name="DocQualification"
                  values="DocQualification"
                  rules={[
                    {
                      required: true,
                      message: "DocQualification is required!",
                    },
                  ]}
                >
                  <Input />
                </Form.Item>
              )}
              <Form.Item
                label="ConferenceLinks"
                name="ConferenceLink"
                values="ConferenceLink"
                rules={[
                  {
                    required: true,
                    message: "ConferenceLinks is required!",
                  },
                ]}
              >
                <Input />
              </Form.Item>
              <Form.Item
                label="Specilization"
                name="DocSpecilization"
                values="DocSpecilization"
                rules={[
                  {
                    required: true,
                    message: "DocSpecilization is required!",
                  },
                ]}
              >
                <Input />
              </Form.Item>

              <Form.Item
                label="Experience"
                name="DocExperience"
                values="DocExperience"
              >
                <Input />
              </Form.Item>
              <Form.Item label="Number" name="NMCNumber" values="NMCNumber">
                <InputNumber style={{ width: "100%" }} />
              </Form.Item>
              <Form.Item
                label="DocWorkArea"
                name="DocWorkArea"
                values="DocWorkArea"
              >
                <Input />
              </Form.Item>
              <Form.Item label="Links" name="DocLinks" values="DocLinks">
                <Input />
              </Form.Item>

              {editedvaluedoctor ? (
                ""
              ) : (
                <Form.Item
                  label="DocRegisteredDate"
                  name="DocRegisteredDate"
                  values="DocRegisteredDate"
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
              )}
              <Form.Item
                label="Department"
                name="DocDepartment"
                values="DocDepartment"
                rules={[
                  {
                    required: true,
                    message: "DocDepartment is required!",
                  },
                ]}
              >
                <Input />
              </Form.Item>
              <Form.Item
                label="DocAddress"
                name="DocAddress"
                values="DocAddress"
                rules={[
                  {
                    required: true,
                    message: "DocAddress is required!",
                  },
                ]}
              >
                <Input />
              </Form.Item>
              <Form.Item
                label="Charge"
                name="DocCharge"
                values="DocCharge"
                rules={[
                  {
                    required: true,
                    message: "DocCharge is required!",
                  },
                ]}
              >
                <InputNumber style={{ width: "100%" }} />
              </Form.Item>

              <Form.Item
                label="DocDecription"
                name="DocDecription"
                values="DocDecription"
                rules={[
                  {
                    required: true,
                    message: "DocDecription is required!",
                  },
                ]}
              >
                <TextArea rows={4} />
              </Form.Item>
              <Form.Item
                label="Doctor Images"
                name="DocImage"
                values="DocImage"
              >
                <Upload {...props}>
                  <Button icon={<UploadOutlined />}>Click to Upload</Button>
                </Upload>
              </Form.Item>
              <Form.Item
                label="is Active"
                values="DocIsActive"
                valuePropName="checked"
              >
                <Switch defaultChecked />
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
                    {editedvaluedoctor
                      ? "Edit Doctors Profile"
                      : "Add Doctors Profile"}
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
