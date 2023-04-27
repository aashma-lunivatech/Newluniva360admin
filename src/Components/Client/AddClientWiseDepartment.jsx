import React, { useEffect } from "react";
import { UploadOutlined } from "@ant-design/icons";
import {
  Button,
  Card,
  Col,
  Form,
  InputNumber,
  Select,
  Switch,
  message,
  notification,
} from "antd";
import { useState } from "react";
import styled from "styled-components";
import {
  GetDepartmentLists,
  InsertUpdateClientwiseDepartments,
  getClientWiseDepartmentByClientIdluniva,
} from "../../services/appServices/ProductionServices";
import { useParams } from "react-router-dom";

const AddClientWiseDepartment = () => {
  const { id } = useParams();
  const [form] = Form.useForm();
  const [departmentlist, setDepartmentList] = useState();
  const [buttondisable, setButtondisable] = useState(false);
  const [alldepartmentlist, setAallDepartmentList] = useState();
  const [useridselected, setuseriddetails] = useState();
  useEffect(() => {
    if (useridselected !== undefined) form.resetFields();
  }, [useridselected]);
  useEffect(() => {
    if (useridselected === undefined) {
      GetDepartmentLists((val) => {
        console.log(val, "vals");
      }, id);
    }
    console.log(useridselected, "useridselected");
  }, [useridselected]);
  useEffect(() => {
    GetDepartmentLists((res) => {
      setAallDepartmentList(res.DepartmentList);
    });
    let data = {
      clientId: id,
    };
    console.log(data, "data from api");
    getClientWiseDepartmentByClientIdluniva(data, (res) => {
      if (res?.DepartmentList && res?.DepartmentList.length > 0) {
        setDepartmentList(res?.DepartmentList);
        setuseriddetails(res?.DepartmentList[0]);
        console.log(departmentlist, "departmentlist");
        console.log("i am inside if block");
      } else {
        setDepartmentList([]);
        console.log("outof else block");
      }
    });
  }, []);

  const handleSubmit = (values) => {
    let data = {
      CDId: useridselected ? CDId : 0,
      ClientId: values?.ClientId,
      DepartmentId: values?.DepartmentId,
      IsActive:
        values?.IsActive === undefined || values?.IsActive === true
          ? true
          : false,
    };
    InsertUpdateClientwiseDepartments(data, (res) => {
      console.log(res, "i am response");
      if (res?.SuccessMsg == true) {
        message.success("client department Added Successfully");
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
              <Form.Item label="CDId" name="CDId" values="CDId">
                <InputNumber style={{ width: "100%" }} />
              </Form.Item>

              <Form.Item label="ClientId" name="ClientId" values="ClientId">
                <InputNumber style={{ width: "100%" }} />
              </Form.Item>

              <Form.Item
                label="Department"
                name="DepartmentId"
                values="DepartmentId"
              >
                <Select
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
                  {alldepartmentlist !== undefined &&
                    alldepartmentlist.map((e) => (
                      <Option
                        title={e.DepartmentName}
                        value={e.DId}
                        key={e.DId}
                      >
                        {e.DepartmentName}
                      </Option>
                    ))}
                </Select>
              </Form.Item>
              <Form.Item label="is Active" valuePropName="checked">
                <Switch />
              </Form.Item>
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

export default AddClientWiseDepartment;
const ClientComponents = styled.div``;
