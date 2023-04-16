import React from "react";
import { PlusOutlined } from "@ant-design/icons";
import {
  Button,
  Card,
  Cascader,
  Col,
  DatePicker,
  Form,
  Input,
  InputNumber,
  Select,
  Switch,
  TreeSelect,
  Upload,
} from "antd";
import { useState } from "react";
import styled from "styled-components";
const { RangePicker } = DatePicker;
const { TextArea } = Input;
const DoctorPage = () => {
  return (
    <DoctorComponent>
      <div className="">
        <Card
          title="Doctors Details"
          bordered={false}
          style={
            {
              // width: 1240,
            }
          }
        >
          <Col span={24}>
            <Form
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
              <Form.Item label="RID">
                <InputNumber />
              </Form.Item>
              <Form.Item label="UserId">
                <InputNumber />
              </Form.Item>
              <Form.Item label="Code">
                <Input />
              </Form.Item>
              <Form.Item label="Name">
                <Input />
              </Form.Item>
              <Form.Item label="Country">
                <Input />
              </Form.Item>
              <Form.Item label="State">
                <Input />
              </Form.Item>
              <Form.Item label="District">
                <Input />
              </Form.Item>
              <Form.Item label="Municipality/VDC">
                <Input />
              </Form.Item>
              <Form.Item label="ClientLocalAddress">
                <Input />
              </Form.Item>
              <Form.Item label="ClientTypeId">
                <Input />
              </Form.Item>
              <Form.Item label="ClientPAN">
                <Input />
              </Form.Item>
              <Form.Item label="ClientPhoneNumber">
                <Input />
              </Form.Item>
              <Form.Item label="ClientEmail">
                <Input />
              </Form.Item>
              <Form.Item label="ClientWebsite">
                <Input />
              </Form.Item>
              <Form.Item label="ClientContactPerson">
                <Input />
              </Form.Item>
              <Form.Item label="ClinetContactPersonMobile">
                <Input />
              </Form.Item>
              <Form.Item label="ClientWebsite">
                <Input />
              </Form.Item>
              <Form.Item label="clientBanner">
                <Input />
              </Form.Item>
              <Form.Item label="RegisterDate">
                <DatePicker style={{ width: "100%" }} />
              </Form.Item>

              <Form.Item label="Client logo" valuePropName="fileList">
                <Upload action="/upload.do" listType="picture-card">
                  <div>
                    <PlusOutlined />
                    <div
                      style={{
                        marginTop: 8,
                      }}
                    >
                      Upload
                    </div>
                  </div>
                </Upload>
              </Form.Item>
              <Form.Item label="is Active" valuePropName="checked">
                <Switch />
              </Form.Item>
              <div style={{ display: "flex", justifyContent: "center" }}>
                <Button
                  htmlType="submit"
                  // disabled={butDis}
                  type="primary"
                  className="sumit-button"
                >
                  Submit
                </Button>
              </div>
            </Form>
          </Col>
        </Card>
      </div>
    </DoctorComponent>
  );
};

export default DoctorPage;
const DoctorComponent = styled.div``;
