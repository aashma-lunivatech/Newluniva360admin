import {
  Button,
  Card,
  Col,
  Form,
  InputNumber,
  Switch,
  Upload,
  message,
} from "antd";
import React, { useState } from "react";
import { UploadOutlined } from "@ant-design/icons";
import { InsertUpdateBannerImages } from "../../services/appServices/ProductionServices";
const UploadBannerImage = () => {
  const [form] = Form.useForm();
  const [LogoPath, setLogoPath] = useState();

  const props = {
    name: "file",
    headers: {
      authorization: "authorization-text",
    },
    onChange(info) {
      console.log(info);
      console.log(info.file, "bannerupload");
      setLogoPath(info.file.originFileObj);
    },
  };
  const handleSubmit = (values) => {
    console.log(values, "values");
    const formData = new FormData();
    formData.append("bid", 0);
    formData.append("clientid", values?.clientid);
    formData.append("userid", values?.userid);
    formData.append("isactive", values?.isactive || true);
    formData.append("filepath", LogoPath);
    InsertUpdateBannerImages(formData, (res) => {
      message.success(res);
      console.log(res, "resho");
    });
    console.log(formData, "i am a bannerdata");
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
              {/* <Form.Item label="Banner Id" name="bid" values="bid">
                <InputNumber style={{ width: "100%" }} />
              </Form.Item> */}
              <Form.Item label="Client Id" name="clientid" values="clientid">
                <InputNumber style={{ width: "100%" }} />
              </Form.Item>
              <Form.Item label="User Id" name="userid" values="userid">
                <InputNumber style={{ width: "100%" }} />
              </Form.Item>
              <Form.Item
                name="isactive"
                values="isactive"
                label="is Active"
                valuePropName="checked"
              >
                <Switch />
              </Form.Item>
              <Form.Item
                label="Banner Image"
                name="filepath"
                values="filepath"
                getValueFromEvent={(e) => e.file}
              >
                <Upload {...props}>
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
                    Add Banner
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

export default UploadBannerImage;
