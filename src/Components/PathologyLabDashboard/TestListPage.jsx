import { Button, Card, Col, Form, Row, Select, Space, Table } from "antd";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const TestListPage = () => {
  const navigate = useNavigate();
  const [selectedtest, setSelectedTest] = useState();
  const columns = [
    {
      title: "TestName",
      dataIndex: "tname",
      key: "tname",
      render: (text) => <a>{text}</a>,
    },

    {
      title: "Price(Rs)",
      dataIndex: "Price(Rs)",
      key: "Price(Rs)",
    },

    {
      title: "Discount Per",
      dataIndex: "Discount Per",
      key: "Discount Per",
    },
    {
      title: "Discount Amt",
      dataIndex: "Discount Amt",
      key: "Discount Amt",
    },
    {
      title: "Final Price",
      dataIndex: "Final Price",
      key: "Final Price",
    },
    {
      title: "Discount Amt",
      dataIndex: "Discount Amt",
      key: "Discount Amt",
    },
    {
      title: "Final Price",
      dataIndex: "Final Price",
      key: "Final Price",
    },
    {
      title: "Action",
      key: "action",
      render: (_, record) => (
        <Space size="middle">
          {/* <a>Edit {record.name}</a> */}
          <Button onClick={handletestclick} className="btn-load">
            Book Test
          </Button>
        </Space>
      ),
    },
  ];
  const data = [
    {
      key: "1",
      tname: "WBC",
      age: 32,
      address: "New York No. 1 Lake Park",
      doctor: "ram",
    },
  ];

  function handletestclick() {
    navigate("/BookTestBill");
  }
  const handleChange = (e) => {
    setSelectedTest(e);
  };
  const handleLoadClick = () => {
    if (selectedtest == "val") {
      console.log("val ho");
    } else {
      console.log("val haina");
    }
  };
  return (
    <div>
      <Testlist>
        <Card title="Test details" bordered={false} style={{}}>
          <Row>
            <Col span={12}>
              <div className="style-between">
                <Form.Item
                  label="Test Name"
                  name="testname"
                  style={{ width: "100%" }}
                >
                  <Select
                    className="select-btn"
                    onChange={handleChange}
                    showSearch
                    optionFilterProp="children"
                    placeholder="Select"
                    filterOption={(input, option) => {
                      return (
                        option.key.toLowerCase().indexOf(input.toLowerCase()) >=
                          0 ||
                        option.title
                          .toLowerCase()
                          .indexOf(input.toLowerCase()) >= 0
                      );
                    }}
                    allowClear
                  >
                    <Option title="sa" value="rbc" key="1">
                      RBC
                    </Option>
                    <Option title="sa" value="val" key="2">
                      WBC
                    </Option>
                  </Select>
                </Form.Item>
                <Button onClick={handleLoadClick} className="btn-load">
                  Load
                </Button>
              </div>
            </Col>
          </Row>
          <Row>
            <Table columns={columns} dataSource={data} />
          </Row>
        </Card>
      </Testlist>
    </div>
  );
};

export default TestListPage;
const Testlist = styled.div``;
