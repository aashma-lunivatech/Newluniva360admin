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
  Switch,
  Upload,
  message,
  notification,
} from "antd";
import { useState } from "react";
import styled from "styled-components";
import { InsertUpdateClientDetailsluniva } from "../../services/appServices/ProductionServices";
import { useNavigate, useParams } from "react-router-dom";

const Client = () => {
  const { id } = useParams();
  const [form] = Form.useForm();
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedId, setSelectedId] = useState(id);
  const [imageUrl, setImageUrl] = useState([]);
  const [buttondisable, setButtondisable] = useState(false);

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
  const getInitialValues = () => {
    return { RID: selectedId };
  };

  // const EditClientForm = (id) => {
  //   let data = {
  //     RID: selectedId,
  //   };
  //   InsertUpdateClientDetailsluniva(data, (res) => {
  //     console.log(res, "i am data");
  //     if (res?.SuccessMsg == true) {
  //       notification.success("client details Added Successfully");
  //       setButtondisable(true);
  //       setTimeout(function () {
  //         window.location.reload();
  //       }, 4000);
  //     } else {
  //       notification.warning("Error!");
  //     }
  //   });
  // };
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
      RID: e?.RID ?? 1,
      ClientCode: e?.ClientCode ?? "Np",
      ClientName: e?.ClientName,
      ClientCountry: e?.ClientCountry ?? 1,
      ClientState: e?.ClientState ?? 1,
      ClientDistrict: e?.ClientDistrict ?? 1,
      ClientMUNVDC: e?.ClientMUNVDC ?? 1,
      ClientLocalAddress: e?.ClientLocalAddress,
      ClientTypeId: e?.ClientTypeId ?? 1,
      ClientPAN: e?.ClientPAN,
      ClientPhoneNumber: e?.ClientPhoneNumber,
      ClientEmail: e?.ClientEmail,
      ClientWebsite: e?.ClientWebsite,
      ClientLogo: imageUrl,
      ClientContactPerson: e?.ClientContactPerson,
      ClinetContactPersonMobile: e?.ClinetContactPersonMobile,
      IsActive: e?.IsActive || true,
      UserId: e?.UserId ?? 1,
      RegisterDate: selectedDate?.format("YYYY-MM-DD"),
      clientBanner: e?.clientBanner,
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
    <ClientComponents>
      <div className="">
        <Card
          title="Client Details"
          bordered={false}
          style={
            {
              // width: 1240,
            }
          }
        >
          <Col span={24}>
            <Form
              // initialValues={getInitialValues}
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
                // maxWidth: 500,
                marginTop: 10,
              }}
            >
              {/* <Form.Item label="RID" name="RID">
                <InputNumber />
              </Form.Item> */}
              {/* <Form.Item label="ClientCode" name="ClientCode">
                <Input />
              </Form.Item> */}
              <Form.Item label="Name" name="ClientName">
                <Input />
              </Form.Item>
              {/* <Form.Item label="ClientCountry" name="ClientCountry">
                <InputNumber />
              </Form.Item> */}
              {/* <Form.Item label="ClientState" name="ClientState">
                <InputNumber />
              </Form.Item>
              <Form.Item label="ClientDistrict" name="ClientDistrict">
                <InputNumber />
              </Form.Item> */}
              {/* <Form.Item label="ClientMUNVDC" name="ClientMUNVDC">
                <InputNumber />
              </Form.Item> */}
              <Form.Item label="LocalAddress" name="ClientLocalAddress">
                <Input />
              </Form.Item>
              {/* <Form.Item label="ClientTypeId" name="ClientTypeId">
                <InputNumber />
              </Form.Item> */}
              <Form.Item label="PAN" name="ClientPAN">
                <Input />
              </Form.Item>
              <Form.Item label="PhoneNumber" name="ClientPhoneNumber">
                <Input />
              </Form.Item>
              {/* <Form.Item label="UserId" name="UserId">
                <InputNumber />
              </Form.Item> */}
              <Form.Item label="Email" name="ClientEmail">
                <Input />
              </Form.Item>

              <Form.Item label="Website" name="ClientWebsite">
                <Input />
              </Form.Item>
              <Form.Item label="ContactPerson" name="ClientContactPerson">
                <Input />
              </Form.Item>
              <Form.Item
                label="ContactPersonMobile"
                name="ClinetContactPersonMobile"
              >
                <Input />
              </Form.Item>
              <Form.Item label="Banner" name="clientBanner">
                <Input />
              </Form.Item>
              <Form.Item label="RegisterDate" name="RegisterDate">
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

              <Form.Item label="Client logo" name="ClientLogo">
                <Upload {...props}>
                  <Button icon={<UploadOutlined />}>Click to Upload</Button>
                </Upload>
              </Form.Item>
              <Form.Item label="is Active" valuePropName="checked">
                <Switch />
              </Form.Item>
              <Form.Item>
                <div style={{ display: "flex", justifyContent: "flex-end" }}>
                  <Button
                    disabled={buttondisable}
                    htmlType="submit"
                    // disabled={butDis}
                    type="primary"
                    className="sumit-button"
                  >
                    Submit
                  </Button>
                </div>
              </Form.Item>
            </Form>
          </Col>
        </Card>
      </div>
    </ClientComponents>
  );
};

export default Client;
const ClientComponents = styled.div``;
