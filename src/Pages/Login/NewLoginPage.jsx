import React from "react";
import styled from "styled-components";
import { Button, Checkbox, Form, Input } from "antd";
const onFinish = (values) => {
  console.log("Success:", values);
};
const onFinishFailed = (errorInfo) => {
  console.log("Failed:", errorInfo);
};
const NewLoginPage = () => {
  return (
    <div>
      <FormSection>
        <Form
          name="basic"
          labelCol={{
            span: 8,
          }}
          wrapperCol={{
            span: 16,
          }}
          style={{
            maxWidth: 600,
          }}
          initialValues={{
            remember: true,
          }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Form.Item
            className="login-text"
            label="Username"
            name="username"
            rules={[
              {
                required: true,
                message: "Please input your username!",
              },
            ]}
          >
            <Input style={{ width: "120%", marginLeft: "5px" }} />
          </Form.Item>

          <Form.Item
            className="login-text"
            label="Password"
            name="password"
            rules={[
              {
                required: true,
                message: "Please input your password!",
              },
            ]}
          >
            <Input.Password style={{ width: "120%", marginLeft: "5px" }} />
          </Form.Item>

          <Form.Item
            name="remember"
            valuePropName="checked"
            wrapperCol={{
              offset: 8,
              span: 16,
            }}
          ></Form.Item>

          <Form.Item
            wrapperCol={{
              offset: 8,
              span: 16,
            }}
          >
            <Button className="submit-button" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </FormSection>
    </div>
  );
};

export default NewLoginPage;
const FormSection = styled.div`
  .submit-button {
    font-size: 18px;
    padding: 10px 20px 30px 20px;
    border-radius: 0 1rem 4rem 1;
    line-height: 1;
    font-weight: bold;
    justify-content: center;
    align-items: center;
    margin-top: -42px;
  }
  .bottom-content {
    margin-top: 10px;
  }
`;
