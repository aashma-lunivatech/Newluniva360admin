import React, { useEffect, useState } from "react";
import {
  Button,
  Card,
  Col,
  Descriptions,
  Form,
  Input,
  InputNumber,
  Row,
} from "antd";

const BookTestBill = () => {
  const [rate, setRate] = useState(0);
  const [quantity, setQuantity] = useState(0);
  const [totalprice, setTotalPrice] = useState(0);
  const [discountamount, setDiscountAmount] = useState(0);

  const onFinish = (values) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  const rateChanged = (value) => {
    setRate(value);
  };

  const quantityChanged = (value) => {
    setQuantity(value);
  };
  const discountamtChanged = (value) => {
    setDiscountAmount(value);
    console.log(value, "disamt");
  };

  const multiply = () => {
    const totalval = rate * quantity;
    const discountedprice = totalval - discountamount;
    setTotalPrice(discountedprice);
  };
  const discountamounts = () => {
    const discountamtval = totalprice - discountamount;
    // setDiscountAmount(discountamtval);
  };

  useEffect(() => {
    multiply();
    discountamounts();
  }, [rate, quantity]);

  return (
    <div>
      <Card title="Bill of Total Test" bordered={false} style={{}}>
        <Col span={24}>
          <Form
            name="basic"
            labelCol={{ span: 8 }}
            wrapperCol={{ span: 16 }}
            style={{ maxWidth: 600 }}
            initialValues={{ remember: true }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
          >
            <Row>
              <Col span={24}>
                <Form.Item
                  label="Item Name"
                  name="itemname"
                  rules={[
                    { required: true, message: "Please input your item name!" },
                  ]}
                >
                  <Input />
                </Form.Item>

                <Form.Item
                  label="Rate"
                  name="rate"
                  rules={[
                    { required: true, message: "Please input the rate!" },
                  ]}
                >
                  <InputNumber
                    onChange={rateChanged}
                    style={{ width: "100%" }}
                  />
                </Form.Item>

                <Form.Item
                  label="Quantity"
                  name="quantity"
                  rules={[
                    { required: true, message: "Please input the quantity!" },
                  ]}
                >
                  <InputNumber
                    onChange={quantityChanged}
                    style={{ width: "100%" }}
                  />
                </Form.Item>

                <Form.Item label="Discount Amount" name="discountamount">
                  <InputNumber
                    style={{ width: "100%" }}
                    onChange={discountamtChanged}
                  />
                </Form.Item>
              </Col>

              <Col span={24}>
                <Form.Item label="Discount Percent" name="discountPercent">
                  <InputNumber style={{ width: "100%" }} />
                </Form.Item>

                <Form.Item label="Total Price" name="totalPrice">
                  <Input
                    disabled
                    value={totalprice}
                    style={{ width: "100%" }}
                  />
                </Form.Item>
              </Col>

              <Descriptions
                bordered
                layout="horizontal"
                column={1}
                size="small"
              >
                <Descriptions.Item label="Total Price">
                  <span className="descriptioncol"> {totalprice}</span>
                </Descriptions.Item>
              </Descriptions>
            </Row>

            <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
              <Button type="primary" htmlType="submit">
                Submit
              </Button>
            </Form.Item>
          </Form>
        </Col>
      </Card>
    </div>
  );
};

export default BookTestBill;
