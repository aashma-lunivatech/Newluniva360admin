import {
  Button,
  Card,
  Col,
  DatePicker,
  Input,
  Select,
  Space,
  Table,
} from "antd";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import {
  GetBookedOnlineAppointmentDetailsByDocIdAndDates,
  GetDocTimeScheduleForAppointments,
  GetDoctorDetailsByDoctorIds,
} from "../../services/appServices/ProductionServices";
import DateTimeBAdge from "../Common/DateTimeBAdge";
import { useNavigate } from "react-router-dom";
const { RangePicker } = DatePicker;
const BookedOnlineAppointments = () => {
  const [inputValue, setInputValue] = useState("");
  const [bookedlist, setBookedList] = useState(null);
  const [loading, setLoading] = useState(false);
  const [selectedDate, setselectedDates] = useState([]);
  const [userselecteddoctor, setUserSelectedDoctor] = useState([]);
  const formatDates = (values) => {
    const startDate = values.format("YYYY-MM-DD");
    setselectedDates(startDate);
  };
  useEffect(() => {
    console.log(inputValue, "userselectdoctor");
  }, []);
  const handleEdit = (record) => {
    navigate(`/appointmenttime/edit/${record.ApId}`, {
      state: { selectedrecord: record },
    });
  };

  const navigate = useNavigate();
  const handleRedirect = () => {
    navigate("/appointmenttime");
  };
  const columns = [
    {
      title: "ApId",
      dataIndex: "ApId",
      key: "ApId",
    },
    {
      title: "DocId",
      dataIndex: "DocId",
      key: "DocId",
    },
    {
      title: "AppointmentDate",
      dataIndex: "AppointmentDate",
      key: "AppointmentDate",
      render: (val) => <DateTimeBAdge data={val} />,
    },
    {
      title: "AppTime",
      dataIndex: "AppTime",
      key: "AppTime",
    },
    {
      title: "AppointmentReason",
      dataIndex: "AppointmentReason",
      key: "AppointmentReason",
    },
    {
      title: "AppointmentFor",
      dataIndex: "AppointmentFor",
      key: "AppointmentFor",
    },
    {
      title: "PatientName",
      dataIndex: "PatientName",
      key: "PatientName",
    },
    {
      title: "PatAge",
      dataIndex: "PatAge",
      key: "PatAge",
    },
    {
      title: "AppointmentStatus",
      dataIndex: "AppointmentStatus",
      key: "AppointmentStatus",
    },
    {
      title: "AppointmentRemarks",
      dataIndex: "AppointmentRemarks",
      key: "AppointmentRemarks",
    },
    {
      title: "AppointmentType",
      dataIndex: "AppointmentType",
      key: "AppointmentType",
    },
    {
      title: "EntryDate",
      dataIndex: "EntryDate",
      key: "EntryDate",
      render: (val) => <DateTimeBAdge data={val} />,
    },
    {
      title: "Action",
      key: "action",
      render: (text, record) => (
        <Space size="middle">
          {/* <Button
            className="btn-load"
            onClick={() =>
              navigate(`/appointmenttime/edit/${record.ApId}`, {
                state: { entereddate: selectedDate },
              })
            }
          >
            Edit
          </Button> */}
          <Button className="btn-load" onClick={() => handleEdit(record)}>
            Edit
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
  const handleClick = () => {
    if (
      inputValue !== null &&
      inputValue !== undefined &&
      // inputValue.trim() !== "" &&
      !isNaN(inputValue)
    ) {
      setLoading(true);
      const data = {
        docId: inputValue,
        appointmentDate: selectedDate,
      };
      GetBookedOnlineAppointmentDetailsByDocIdAndDates(data, (res) => {
        // console.log(res, "res");
        if (res?.BookedTime && res?.BookedTime.length > 0) {
          setBookedList(res.BookedTime);
        } else {
          setBookedList([]);
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
          title="Booked Online Appointements"
          bordered={false}
          style={
            {
              // width: 1240,
            }
          }
        >
          <div className="add-appointmnetbtn">
            <Button
              htmlType="submit"
              className="btn-load"
              // disabled={butDis}
              type="primary"
              onClick={() => handleRedirect()}
            >
              Add Appointments
            </Button>
          </div>
          <ClientDepartmentButton>
            <div>
              <label className="label-name">Doctor ID</label>
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

              <label style={{ marginLeft: "10px" }} className="label-name">
                Dates
              </label>
              {/* <Input
                id="input"
                type="number"
                style={{ width: 300 }}
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
              /> */}
              <DatePicker
                style={{ width: "25%" }}
                onChange={(dates) => formatDates(dates)}
              />
              <Button className="btn-load" onClick={handleClick}>
                Load
              </Button>
            </div>
          </ClientDepartmentButton>
        </Card>
      </div>
      {bookedlist === null ? (
        ""
      ) : bookedlist.length === 0 ? (
        <div className="data-not-found">No data found</div>
      ) : (
        <div className="ant-card-head table-data table-div">
          {loading ? (
            <div>
              <span className="data-not-found">Data Not Found</span>
            </div>
          ) : (
            <Table dataSource={bookedlist} columns={columns} />
          )}
        </div>
      )}
    </DoctorSchedulelist>
  );
};

export default BookedOnlineAppointments;
const DoctorSchedulelist = styled.div`
  .table-div {
    margin-top: 10px;
  }
  .data-not-found {
    font-size: 18px;
    color: red;
  }
  .add-appointmnetbtn {
    display: flex;
    justify-content: flex-end;
  }
`;
const ClientDepartmentButton = styled.div``;
