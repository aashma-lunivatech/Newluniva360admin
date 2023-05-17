import React, { useEffect, useState } from "react";
import {
  Button,
  Card,
  Select,
  Col,
  Descriptions,
  Form,
  Input,
  InputNumber,
  Row,
  notification,
} from "antd";
import { paymentType } from "../Common/paymentType";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import styled from "styled-components";
import { GetDepartmentLists } from "../../services/appServices/ProductionServices";

import { Space, Table, Tag } from "antd";
const BookTestBill = () => {
  const [rate, setRate] = useState(0);
  const [quantity, setQuantity] = useState(0);
  const [discountamount, setDiscountAmount] = useState(0);
  const [discountpercentage, setDiscountPercentage] = useState(0);
  const [total, setTotal] = useState(0);
  const [grandtotals, setGrandTotals] = useState(0);
  const [roundamt, setRoundAmt] = useState(0);
  const [chData, setChData] = useState({});
  const [pointRoundAmt, setPointRoundAmt] = useState(0);
  const [departmentlist, setAllDepartmentList] = useState();
  const [form] = Form.useForm();
  useEffect(() => {
    console.log(discountamount);
  });
  const columns = [
    {
      title: "Test Name",
      dataIndex: "tname",
      key: "tname",
      render: (text) => <a>{text}</a>,
    },
    {
      title: "Rate",
      dataIndex: "Rate",
      key: "Rate",

      render: (text, record) => (
        <InputNumber
          style={{ width: "100%" }}
          //   value={text}
          onChange={(values) => handlerate(values, record.key)}
        />
      ),
      //   render: (text, record) => {
      //     console.log(record, "recordhoma");
      //   },
    },
    {
      title: "Quantity",
      dataIndex: "Quantity",
      key: "Quantity",
      render: (text, record) => (
        <InputNumber
          style={{ width: "100%" }}
          //   value={text}
          onChange={(values) => handleQuantityChange(values, record.key)}
        />
      ),
    },
    {
      title: "Price(Rs)",
      dataIndex: "Price(Rs)",
      key: "Price(Rs)",
    },

    // {
    //   title: "Discount Per",
    //   dataIndex: "Discount Per",
    //   key: "Discount Per",
    // },
    // {
    //   title: "Discount Amt",
    //   dataIndex: "Discount Amt",
    //   key: "Discount Amt",
    // },
    // {
    //   title: "Final Price",
    //   dataIndex: "Final Price",
    //   key: "Final Price",
    // },
  ];
  const data = [
    {
      key: "1",
      tname: "John Brown",
      age: 32,
      address: "New York No. 1 Lake Park",
      doctor: "ram",
    },
  ];
  //pdf converter
  // html2canvas(element).then((canvas) => {
  //   const imageData = canvas.toDataURL("image/png");
  //   const pdf = new jsPDF();
  //   const width = pdf.internal.pageSize.getWidth();
  //   const height = pdf.internal.pageSize.getHeight();

  //   pdf.addImage(imageData, "PNG", 100, 100, width, height);
  //   pdf.save("invoice.pdf");
  // });
  const handlerate = (values) => {
    console.log(values, "rate");
    setRate(values);
  };
  const handleQuantityChange = (values) => {
    console.log(values);
    setQuantity(values);
  };
  const checkvalue = (e) => {
    if (e > 101) {
      message.info("only enter the value less than 100");
    }
  };

  useEffect(() => {
    multiply();
    grandtotal();
    roundsfunc();
  }, [rate, quantity, discountamount, grandtotals, total]);

  useEffect(() => {
    GetDepartmentLists((res) => {
      setAllDepartmentList(res.DepartmentList);
    });
  }, []);
  const multiply = () => {
    let totalcal = rate * quantity;
    setTotal(totalcal);
  };
  const handleChange = (value) => {
    setChData(value);
  };
  const grandtotal = () => {
    let totalss = total - discountamount;
    let totalD = Math.round(totalss);
    setGrandTotals(totalD);
  };
  const roundsfunc = () => {
    let rv = Math.round(discountamount);
    let totalrv = rv - discountamount;
    setPointRoundAmt(totalrv);
    // console.log(totalrv, "totalrv");
    setRoundAmt(rv);
    // console.log(rv, "roundedvalues");
  };
  const calculateDiscountPercentage = (e) => {
    if (rate !== 0 && quantity !== 0) {
      let originalAmount = rate * quantity;
      if (e !== null || 0) {
        let discountPercentages = (e / originalAmount) * 100;
        setDiscountPercentage(discountPercentages);

        if (discountPercentages <= 100) {
          // console.log(discountPercentages, "discount percentage");
          form.setFieldsValue(
            {
              discountPercentage: discountPercentages?.toFixed(2) + "%",
            }

            // setDiscountPercentFieldValue(discountPercentage);
          );
        } else {
          notification.warning({
            duration: 0,
            placement: "topRight",
            message:
              "Please select the discount amount that is  less than 100%",
            rtl: true,
          });

          form.setFieldsValue({
            discountPercentage: 0 + "%",
          });
        }
      } else {
        form.setFieldsValue({
          discountPercentage: 0 + "%",
        });
      }
    }
  };
  const calculateDiscountAmount = (e) => {
    if (rate !== 0 && quantity !== 0) {
      let originalAmount = rate * quantity;

      if (e !== null || 0) {
        let discountamounts = (e / 100) * originalAmount;
        setDiscountAmount(discountamounts);
        if (discountamounts <= total) {
          // console.log(discountamounts, "discount amounts");

          form.setFieldsValue({
            discountAmount: discountamounts?.toFixed(2),
          });
        } else {
          form.setFieldsValue({
            discountAmount: 0,
          });
        }
      } else {
        form.setFieldsValue({
          discountAmount: 0,
        });
      }
    }
  };
  const onFinish = (values) => {
    console.log("Success:", values);
    setTimeout(() => {
      window.open(`/billprintpage`, "_blank");
    }, 1000);
  };

  const onFinishFailed = (errorInfo) => {
    // console.log("Failed:", errorInfo);
  };

  return (
    <div>
      <TestBillPage>
        <Card title="Total Test Bill" bordered={false} style={{}}>
          <Col span={24}>
            <Form
              name="basic"
              labelCol={{
                span: 10,
              }}
              wrapperCol={{
                span: 24,
              }}
              initialValues={{
                remember: true,
              }}
              form={form}
              onFinish={onFinish}
              onFinishFailed={onFinishFailed}
              autoComplete="off"
              id="invoice-form"
            >
              <Row>
                <Col
                  sm={12}
                  md={12}
                  xs={12}
                  lg={12}
                  xl={12}
                  className="requestor-section"
                >
                  <Form.Item label="Test Name" name="testname">
                    {/* <Select style={{ width: "100%" }}> */}
                    <Select
                      className="select-btn"
                      onChange={handleChange}
                      showSearch
                      optionFilterProp="children"
                      placeholder="Select"
                      filterOption={(input, option) => {
                        // return (
                        //   option.key
                        //     .toLowerCase()
                        //     .indexOf(input.toLowerCase()) >= 0 ||
                        //   option.title
                        //     .toLowerCase()
                        //     .indexOf(input.toLowerCase()) >= 0
                        // );
                      }}
                      allowClear
                    >
                      <Option>WBC</Option>
                      <Option>WBC</Option>
                    </Select>
                  </Form.Item>
                </Col>
                <Col
                  sm={12}
                  md={12}
                  xs={12}
                  lg={12}
                  xl={12}
                  className="requestor-section"
                >
                  <Form.Item label="Department" name="department">
                    <Select
                      showSearch
                      optionFilterProp="children"
                      placeholder="Select"
                      filterOption={(input, option) => {
                        return (
                          option.key
                            .toLowerCase()
                            .indexOf(input.toLowerCase()) >= 0 ||
                          option.title
                            .toLowerCase()
                            .indexOf(input.toLowerCase()) >= 0
                        );
                      }}
                      allowClear
                    >
                      {departmentlist?.map(
                        (cList) =>
                          cList?.IsActive === true && (
                            <Option
                              title={cList?.DepartmentName}
                              key={cList?.DId}
                              value={cList?.DId}
                            >
                              {cList?.DepartmentName}
                            </Option>
                          )
                      )}
                    </Select>
                  </Form.Item>
                </Col>
                <Col
                  sm={8}
                  md={8}
                  xs={8}
                  lg={8}
                  xl={8}
                  className="requestor-section"
                >
                  {/* <Form.Item label="Doctor" name="doctor">
                    <Select
                      className="select-btn"
                      onChange={handleChange}
                      style={{ width: "100%" }}
                    >
                      <Option>Department</Option>
                    </Select>
                  </Form.Item> */}
                </Col>
              </Row>
              <Row>
                <Col sm={16} md={16} xs={16} lg={16} xl={16}>
                  <div>
                    <h3>Test List</h3>
                    <Table columns={columns} dataSource={data} />
                  </div>
                </Col>
                <Col sm={8} md={8} xs={8} lg={8} xl={8}>
                  <div>
                    <h3>Bill Transaction Details</h3>
                  </div>
                  <Descriptions
                    bordered
                    layout="horizontal"
                    column={1}
                    size="small"
                  >
                    <Descriptions.Item label="SubTotal">
                      <span className="descriptioncol">{total}</span>
                    </Descriptions.Item>

                    <Descriptions.Item label="Discount Amt">
                      <span className="descriptioncol">
                        <InputNumber
                          style={{
                            width: "100%",
                          }}
                          min={0}
                          onChange={(e) => {
                            setDiscountAmount(e);
                            calculateDiscountPercentage(e);
                          }}
                        />

                        {/* {discountamount?.toFixed(1)} */}
                      </span>
                    </Descriptions.Item>
                    <Descriptions.Item label="Discount (%)">
                      <span className="descriptioncol">
                        {/* {discountpercentage?.toFixed(1)} */}
                        <InputNumber
                          style={{
                            width: "100%",
                          }}
                          // min={0}
                          max={100}
                          onChange={(e) => {
                            console.log(e, "discount percentage");
                            // console.log(e.length, "discount lenght");

                            checkvalue();
                            setDiscountPercentage(e);
                            // setDTracker(!dTracker)

                            calculateDiscountAmount(e);
                            console.log(e, "log from onchange");

                            // autodisountamtcalculate(e);
                            // autocalcDisAmount(e);
                          }}
                          // defaultValue={discountpercentage}
                        />
                      </span>
                    </Descriptions.Item>
                    {/* <Descriptions.Item label="Round Amt">
                      <span className="descriptioncol"> {roundamt}</span>
                    </Descriptions.Item> */}
                    <Descriptions.Item label="GrandTotal">
                      <span className="descriptioncol"> {grandtotals}</span>
                    </Descriptions.Item>
                  </Descriptions>
                </Col>
              </Row>
            </Form>
          </Col>
        </Card>
      </TestBillPage>
    </div>
  );
};

export default BookTestBill;
const TestBillPage = styled.div`
  .select-btn {
    margin-bottom: 20px;
  }
`;
