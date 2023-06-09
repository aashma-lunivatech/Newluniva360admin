import {
  Button,
  Card,
  Input,
  Space,
  Table,
  Checkbox,
  Form,
  Select,
} from "antd";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import {
  GetAppointmentSettingsByIds,
  GetDocTimeScheduleForAppointments,
  GetDoctorDetailsByDoctorIds,
} from "../../services/appServices/ProductionServices";
import { useNavigate } from "react-router-dom";
import moment from "moment";
const { TextArea } = Input;
import DateTimeBAdge from "../Common/DateTimeBAdge";
import { Modal } from "antd";
const onFinish = (values) => {
  // console.log("Success:", values);
};
const onFinishFailed = (errorInfo) => {
  // console.log("Failed:", errorInfo);
};

const modalContent = () => {
  return (
    <div>
      <Form
        name="basic"
        labelCol={{
          span: 5,
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
          label="Reason "
          name="remarks"
          rules={[
            {
              required: true,
              message: "Please input your remarks!",
            },
          ]}
        >
          <TextArea rows={4} />
        </Form.Item>
      </Form>
    </div>
  );
};

const DoctorScheduleAppointment = () => {
  const [inputValue, setInputValue] = useState();
  const [visible, setVisible] = useState(false);
  const [departmentList, setDepartmentList] = useState([]);
  const [userselecteddoctor, setUserSelectedDoctor] = useState([]);
  const [doctorlist, setdoctorlist] = useState(null);
  const [loading, setLoading] = useState(false);
  const [listVisible, setListVisible] = useState(false);
  const columns = [
    {
      title: "DsId",
      dataIndex: "DsId",
      key: "DsId",
    },
    // {
    //   title: "DoctorName",
    //   dataIndex: "DoctorName",
    //   key: "DoctorName",
    // },
    {
      title: "DoctId",
      dataIndex: "DoctId",
      key: "DoctId",
    },
    {
      title: "DShift",
      dataIndex: "DShift",
      key: "DShift",
    },
    {
      title: "Sun",
      dataIndex: "Sun",
      key: "Sun",
      render: (val) => <DateTimeBAdge data={val} />,
    },
    {
      title: "Mon",
      dataIndex: "Mon",
      key: "Mon",
      render: (val) => <DateTimeBAdge data={val} />,
    },
    {
      title: "Tue",
      dataIndex: "Tue",
      key: "Tue",
      render: (val) => <DateTimeBAdge data={val} />,
    },
    {
      title: "Wed",
      dataIndex: "Wed",
      key: "Wed",
      render: (val) => <DateTimeBAdge data={val} />,
    },
    {
      title: "Thu",
      dataIndex: "Thu",
      key: "Thu",
      render: (val) => <DateTimeBAdge data={val} />,
    },
    {
      title: "Fri",
      dataIndex: "Fri",
      key: "Fri",
      render: (val) => <DateTimeBAdge data={val} />,
    },
    {
      title: "Sat",
      dataIndex: "Sat",
      key: "Sat",
      render: (val) => <DateTimeBAdge data={val} />,
    },
    {
      title: "AppTimeGap",
      dataIndex: "AppTimeGap",
      key: "AppTimeGap",
    },
    {
      title: "Action",
      key: "action",
      render: (text, record) => (
        <Space size="middle">
          <Button
            className="btn-load"
            onClick={() =>
              navigate({
                pathname: `/editdoctoravailableschdeule/edit/${record.DoctId}`,
              })
            }
          >
            Edit
          </Button>
          <Button onClick={() => setVisible(true)} className="btn-load">
            Cancel
          </Button>
        </Space>
      ),
    },
    //
  ];
  useEffect(() => {
    // Fetch department list when the component mounts
    const data = {
      docId: 0,
    };
    GetDoctorDetailsByDoctorIds(data, (res) => {
      if (res?.DoctorDetails && res?.DoctorDetails.length > 0) {
        setUserSelectedDoctor(res?.DoctorDetails);
      } else {
        setUserSelectedDoctor([]);
        setListVisible(true);
      }
      setLoading(false);
    });
  }, []);
  const navigate = useNavigate();
  const handleRedirect = () => {
    navigate("/adddoctortimeappointment");
  };

  const handleClick = () => {
    if (
      inputValue !== null &&
      inputValue !== undefined &&
      // inputValue.trim() !== "" &&
      !isNaN(inputValue)
    ) {
      setLoading(true);
      const data = {
        id: inputValue,
      };
      GetAppointmentSettingsByIds(data, (res) => {
        // console.log(res, "res");
        if (res?.DoctorAppointment && res?.DoctorAppointment.length > 0) {
          setDepartmentList(res.DoctorAppointment);
        } else {
          setDepartmentList([]);
          setListVisible(true);
        }
        setLoading(false);
      });
    } else {
      // Display error message or do nothing
      // console.log("out of block");
    }
  };

  return (
    <DoctorSchedulelist>
      <div className="">
        <Card
          title="Doctor Schedule for appointment"
          bordered={false}
          style={
            {
              // width: 1240,
            }
          }
        >
          <div className="add-button">
            <Button
              htmlType="submit"
              // disabled={butDis}
              type="primary"
              className="btn-load"
              onClick={() => handleRedirect()}
            >
              Add Appointments
            </Button>
          </div>
          <ClientDepartmentButton>
            <div>
              <label className="label-name">Doctor</label>
              {/* <Input
                id="input"
                type="number"
                style={{ width: 300 }}
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
              /> */}
              <Select
                style={{ width: "30%" }}
                value={inputValue}
                // onChange={(e) => setInputValue(e.target.value)}
                onChange={(value) => setInputValue(value)}
                showSearch
                filterOption={(input, option) => {
                  return (
                    option.key.toLowerCase().indexOf(input.toLowerCase()) >=
                      0 ||
                    option.title.toLowerCase().indexOf(input.toLowerCase()) >= 0
                  );
                }}
              >
                {userselecteddoctor !== undefined &&
                  userselecteddoctor.map((e) => (
                    <Option title={e.DoctorName} value={e.DId} key={e.DId}>
                      {e.DoctorName}
                    </Option>
                  ))}
              </Select>
              <Button className="btn-load" onClick={handleClick}>
                Load
              </Button>
            </div>
          </ClientDepartmentButton>
        </Card>
      </div>
      {userselecteddoctor === null ? (
        ""
      ) : userselecteddoctor.length === 0 ? (
        <div className="data-not-found">No data found</div>
      ) : departmentList === null || departmentList.length === 0 ? (
        ""
      ) : (
        <div className="ant-card-head table-data table-div">
          {loading ? (
            <div>
              <span className="data-not-found">Data Not Found</span>
            </div>
          ) : (
            <Table dataSource={departmentList} columns={columns} />
          )}
        </div>
      )}
      {/* {userselecteddoctor === null ? (
        ""
      ) : userselecteddoctor.length === 0 ? (
        <div className="data-not-found">No data found</div>
      ) : (
        <div className="ant-card-head table-data table-div">
          {loading ? (
            <div>
              <span className="data-not-found">Data Not Found</span>
            </div>
          ) : (
            <Table dataSource={departmentList} columns={columns} />
          )}
        </div>
      )} */}
      <Modal
        visible={visible}
        onCancel={() => setVisible(false)}
        onOk={() => {
          // Handle OK button click
        }}
      >
        {modalContent()}
      </Modal>
    </DoctorSchedulelist>
  );
};

export default DoctorScheduleAppointment;
const DoctorSchedulelist = styled.div`
  .table-div {
    margin-top: 10px;
  }
  .data-not-found {
    font-size: 18px;
    color: red;
  }
`;
const ClientDepartmentButton = styled.div``;
