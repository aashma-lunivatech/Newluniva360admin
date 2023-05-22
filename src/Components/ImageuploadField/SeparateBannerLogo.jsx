import {
  Button,
  Card,
  Col,
  Form,
  InputNumber,
  Switch,
  Upload,
  Select,
  message,
} from "antd";
import React, { useEffect, useState } from "react";
import { UploadOutlined } from "@ant-design/icons";
import {
  GetListOfRegisteredClientsluniva,
  InsertUpdateBannerImages,
} from "../../services/appServices/ProductionServices";
const SeparateBannerLogo = () => {
  const [form] = Form.useForm();
  const [LogoPath, setLogoPath] = useState();
  //   const clientData = JSON.parse(localStorage.getItem("clientData"));
  //   const clientiDStorage = parseInt(clientData.UserId);
  const [clientlist, setClientList] = useState();
  const [clientId, setClientId] = useState("");
  useEffect(() => {
    console.log(clientId, "clientid");
  });
  const props = {
    name: "file",
    headers: {
      authorization: "authorization-text",
    },
    onChange(info) {
      // console.log(info);
      console.log(info.file, "bannerupload");
      setLogoPath(info.file.originFileObj);
    },
  };
  useEffect(() => {
    GetListOfRegisteredClientsluniva((res) => {
      // console.log(res, "res");
      if (res?.ClientList.length > 0) {
        setClientList(res?.ClientList);
      } else {
        // console.log("out of if else");
        setClientList([]);
      }
    });
  }, []);
  const handleSubmit = (values) => {
    // console.log(values, "values");
    const formData = new FormData();
    formData.append("bid", 0);
    formData.append("clientid", clientId);
    formData.append("userid", clientiDStorage);
    formData.append("isactive", values?.isactive || true);
    formData.append("filepath", LogoPath);
    InsertUpdateBannerImages(formData, (res) => {
      if (res && res.filename) {
        message.success(`Client banner ${res.filename} added Successfully`);
      } else {
        message.warning("Failed to upload client logo");
      }
      //   setTimeout(function () {
      //     window.location.replace("/clients");
      //   }, 4000);
    });
  };
  return (
    <div>
      <div className="">
        <Card
          title="Client  Banner "
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
              {/* <InputNumber style={{ width: "100%" }} /> */}
              <Form.Item label="Client " name="clientid" values="clientid">
                <Select
                  style={{ width: "80%" }}
                  // onChange={handleclientselect}
                  value={clientId}
                  onChange={(value) => setClientId(value)}
                  showSearch
                  filterOption={(input, option) => {
                    return (
                      option.key.toLowerCase().indexOf(input.toLowerCase()) >=
                        0 ||
                      option.title.toLowerCase().indexOf(input.toLowerCase()) >=
                        0
                    );
                  }}
                >
                  {clientlist !== undefined &&
                    clientlist.map((e) => (
                      <Option title={e.ClientName} value={e.RId} key={e.RId}>
                        {e.ClientName}
                      </Option>
                    ))}
                </Select>
              </Form.Item>
              {/* <Form.Item label="User Id" name="userid" values="userid">
                  <InputNumber style={{ width: "100%" }} />
                </Form.Item> */}
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

export default SeparateBannerLogo;
