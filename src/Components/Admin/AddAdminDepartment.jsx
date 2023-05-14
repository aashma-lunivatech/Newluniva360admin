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
  Select,
  Switch,
  Upload,
  message,
  notification,
} from "antd";
import { useState } from "react";
import styled from "styled-components";
import {
  GetDepartmenDetailsByIds,
  InsertUpdateClientwiseDepartments,
  InsertUpdateDepartmentByAdmins,
} from "../../services/appServices/ProductionServices";
import { useNavigate, useParams } from "react-router-dom";
const AddAdminDepartment = () => {
  const { id } = useParams();
  console.log(id, "id data");
  const AdminId = id;
  const [form] = Form.useForm();
  const [logoPath, setLogoPath] = useState("");
  const [imageUrl, setImageUrl] = useState([]);
  const [buttondisable, setButtondisable] = useState(false);
  const [departmentlist, setDepartmentList] = useState([]);
  const [useridselected, setuseriddetails] = useState();
  const [files, setFiles] = useState();
  const props = {
    name: "file",
    // action:
    //   "https://lunivacare.ddns.net/Luniva360mHealthAPI/Luniva360mHealthAPI/Luniva360mHealthApi/UploadClientLogo",
    headers: {
      authorization: "authorization-text",
    },
    onChange(info) {
      // console.log(info);
      setFiles(info.file);
      setLogoPath(info.file);
    },
  };
  const handleLogoChange = (info) => {
    setLogoPath(info.file);
  };

  useEffect(() => {
    if (useridselected !== undefined) form.resetFields();
  }, [useridselected]);

  useEffect(() => {
    let data = {
      departId: id,
    };
    if (useridselected === undefined) {
      GetDepartmenDetailsByIds(data, (res) => {
        if (res?.Department && res?.Department.length > 0) {
          setDepartmentList(res?.Department);
          setuseriddetails(res?.Department[0]);
          // console.log(departmentlist, "departmentlist");
          // console.log(useridselected, "useridswlected");
          // console.log("i am inside if block");
        } else {
          setDepartmentList([]);
          // console.log("outof else block");
        }
      });
    }
    // console.log(useridselected, "useridselected");
    const selecteddata = useridselected;
  }, [useridselected]);
  const handleSubmit = (values) => {
    const formData = new FormData();
    formData.append("LogoPath", values.LogoPath);
    let data = {
      DId: useridselected ? id : 0,
      DepartmentName: values?.DepartmentName,
      LogoPath: formData,
      IsActive:
        values?.IsActive === undefined || values?.IsActive === true
          ? true
          : false,
    };
    InsertUpdateDepartmentByAdmins(data, (res) => {
      // console.log(res, "i am response");
      if (res?.SuccessMsg == true) {
        message.success("Department   Added Successfully");
        setButtondisable(true);
        setTimeout(function () {
          window.location.reload();
        }, 4000);
      } else {
        notification.warning("Error!");
      }
    });
    // console.log(data, "i am a data");
  };

  return (
    <ClientComponents>
      <div className="">
        <Card
          title="Department Details"
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
              // initialValues={getInitialValues}
              initialValues={useridselected}
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
                label="DepartmentName"
                name="DepartmentName"
                values="DepartmentName"
              >
                <Input style={{ width: "100%" }} />
              </Form.Item>

              <Form.Item
                name="IsActive"
                values="IsActive"
                label="is Active"
                valuePropName="checked"
              >
                <Switch />
              </Form.Item>

              <Form.Item
                label="Logo "
                name="LogoPath"
                values="LogoPath"
                getValueFromEvent={(e) => e.file}
              >
                <Upload {...props}>
                  <Button icon={<UploadOutlined />}>Click to Upload</Button>
                </Upload>
              </Form.Item>

              {/* <Form.Item name="LogoPath" values="LogoPath" label="LogoPath">
                <Upload action="http://localhost:50801/Luniva360mHealthApi/UploadClientLogo" />
                Upload
              </Form.Item> */}
              {/* <Form.Item>
                <input type="file" name="file" values={logoPath} />
              </Form.Item> */}
              <Form.Item>
                <div style={{ display: "flex", justifyContent: "flex-end" }}>
                  {useridselected ? (
                    <Button
                      disabled={buttondisable}
                      htmlType="submit"
                      type="primary"
                      className="sumit-button btn-load"
                    >
                      Edit Department
                    </Button>
                  ) : (
                    <Button
                      disabled={buttondisable}
                      htmlType="submit"
                      type="primary"
                      className="sumit-button btn-load"
                    >
                      Add Department
                    </Button>
                  )}
                </div>
              </Form.Item>
            </Form>
          </Col>
        </Card>
      </div>
    </ClientComponents>
  );
};
export default AddAdminDepartment;
const ClientComponents = styled.div``;
