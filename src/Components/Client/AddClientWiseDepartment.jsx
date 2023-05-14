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
  GetListOfRegisteredClientsluniva,
  InsertUpdateClientwiseDepartments,
  getClientWiseDepartmentByClientIdluniva,
} from "../../services/appServices/ProductionServices";
import { useParams } from "react-router-dom";

const AddClientWiseDepartment = () => {
  const { id } = useParams();
  console.log(id, "idclient");
  const [form] = Form.useForm();
  const [departmentlist, setDepartmentList] = useState();
  const [buttondisable, setButtondisable] = useState(false);
  const [alldepartmentlist, setAllDepartmentList] = useState();
  const [clientlist, setClientList] = useState();
  const [selectedid, setselectedid] = useState();
  const [departmentselect, setDepartmentselect] = useState();
  const [clientselect, setClientSelect] = useState();
  const handledepartmentselect = (e) => {
    setDepartmentselect(e);
  };

  const handleclientselect = (e) => {
    setClientSelect(e);
  };
  useEffect(() => {
    if (selectedid !== undefined) form.resetFields();
  }, [selectedid]);
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
  useEffect(() => {
    GetDepartmentLists((res) => {
      setAllDepartmentList(res.DepartmentList);
    });
    let data = {
      clientId: id,
    };
    console.log(data, "data from api");
    if (departmentlist === undefined) {
      getClientWiseDepartmentByClientIdluniva(data, (res) => {
        if (res?.DepartmentList && res?.DepartmentList.length > 0) {
          setDepartmentList(res?.DepartmentList);
          setselectedid(res?.DepartmentList[0]);
          console.log(departmentlist, "departmentlist");
          console.log(selectedid, "selectedid");
          console.log("i am inside if block");
        } else {
          setDepartmentList([]);
          console.log("outof else block");
        }
      });
    }
  }, []);

  const handleSubmit = (values) => {
    if (!values.ClientId) {
      notification.warning({
        message: "Please select a valid Client ID",
        placement: "topRight",
      });
      return;
    }
    let data = {
      CDId: selectedid ? id : 0,
      ClientId: values?.ClientId,
      DepartmentId: values?.DepartmentId,
      IsActive:
        values?.IsActive === undefined || values?.IsActive === true
          ? true
          : false,
    };
    console.log(data, "data of department");
    InsertUpdateClientwiseDepartments(data, (res) => {
      console.log(res, "i am response of post");
      if (res?.SuccessMsg == true) {
        message.success("client department Added Successfully");
        setButtondisable(true);
        // setTimeout(function () {
        //   window.location.reload();
        // }, 4000);
      } else {
        notification.warning("Error!");
      }
    });
    console.log(data, "i am a data");
  };

  return (
    <Clienwisesection>
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
                initialValues={selectedid}
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
                {selectedid === true && (
                  <Form.Item label="ClientId" name="ClientId" values="ClientId">
                    <Select
                      onChange={handleclientselect}
                      showSearch
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
                    >
                      {clientlist !== undefined &&
                        clientlist.map((e) => (
                          <Option
                            title={e.ClientName}
                            value={e.RId}
                            key={e.RId}
                          >
                            {e.ClientName}
                          </Option>
                        ))}
                    </Select>
                  </Form.Item>
                )}

                {/* <Form.Item label="ClientId" name="ClientId" values="ClientId">
                  <Select
                    onChange={handleclientselect}
                    showSearch
                    filterOption={(input, option) => {
                      return (
                        option.key.toLowerCase().indexOf(input.toLowerCase()) >=
                          0 ||
                        option.title
                          .toLowerCase()
                          .indexOf(input.toLowerCase()) >= 0
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
                </Form.Item> */}
                <Form.Item
                  label="Department"
                  name="DepartmentId"
                  values="DepartmentId"
                >
                  <Select
                    onChange={handledepartmentselect}
                    showSearch
                    filterOption={(input, option) => {
                      return (
                        option.key.toLowerCase().indexOf(input.toLowerCase()) >=
                          0 ||
                        option.title
                          .toLowerCase()
                          .indexOf(input.toLowerCase()) >= 0
                      );
                    }}
                  >
                    {alldepartmentlist !== undefined &&
                      alldepartmentlist.map((e) => (
                        <Option title={e.ClientName} value={e.DId} key={e.DId}>
                          {e.DepartmentName}
                        </Option>
                      ))}
                  </Select>
                </Form.Item>
                <Form.Item
                  label="is Active"
                  values="IsActive"
                  name="IsActive"
                  valuePropName="checked"
                >
                  <Switch />
                </Form.Item>
                <Form.Item>
                  <div style={{ display: "flex", justifyContent: "flex-end" }}>
                    {selectedid ? (
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
      {/* <h1 className="response-client">
          Please select the valid Clientid,Client id is not available
        </h1> */}
    </Clienwisesection>
  );
};

export default AddClientWiseDepartment;
const Clienwisesection = styled.div`
  .response-client {
    font-size: 25px;
    color: red;
  }
`;
const ClientComponents = styled.div``;
