import {
  Button,
  Card,
  Col,
  Form,
  InputNumber,
  Upload,
  message,
  notification,
} from "antd";
import React, { useContext, useState } from "react";
import { UploadOutlined } from "@ant-design/icons";
import { UploadClientLogos } from "../../services/appServices/ProductionServices";
import { useLocation, useNavigate } from "react-router-dom";
const UploadClientLogo = () => {
  const location = useLocation();
  const enteredid = location.state?.enteredvalue.RId;
  console.log(enteredid, "clientlistnavigatedata");
  const [form] = Form.useForm();
  const [LogoPath, setLogoPath] = useState();
  const navigate = useNavigate();
  const photoprops = {
    name: "file",
    headers: {
      authorization: "authorization-text",
    },
    onChange(info) {
      //   setFiles(info.file);
      console.log(info.file.originFileObj, "orginfileobj");
      setLogoPath(info.file.originFileObj);
    },
  };
  const handleSubmit = (values) => {
    console.log(values, "values");
    const formData = new FormData();
    formData.append("clientid", enteredid);
    formData.append("filepath", LogoPath);

    UploadClientLogos(formData, (res) => {
      // message.success("Client logo added Successfully");
      if (res && res.filename) {
        message.success(`Client logo ${res.filename} added Successfully`);
      } else {
        message.warning("Failed to upload client logo");
      }
      navigate("/uploadbannerimage");
      // setTimeout(function () {
      //   window.location.reload("/clients");
      // }, 5000);
    });
    console.log(formData, "i am a data");
  };
  return (
    <div>
      <div className="">
        <Card
          title="Client  Logo "
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
              {/* <Form.Item label="Client Id" name="clientid" values="clientid">
                <InputNumber style={{ width: "100%" }} />
              </Form.Item> */}
              <Form.Item
                label="Client Logo "
                name="filepath"
                values="filepath"
                getValueFromEvent={(e) => e.file}
              >
                <Upload {...photoprops}>
                  <Button icon={<UploadOutlined />}>Click to Upload</Button>
                </Upload>
              </Form.Item>

              <Form.Item>
                <div style={{ display: "flex", justifyContent: "flex-end" }}>
                  <Button
                    // disabled={buttondisable}
                    htmlType="submit"
                    type="primary"
                    className="sumit-button btn-load"
                  >
                    Add Client Logo
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

export default UploadClientLogo;
