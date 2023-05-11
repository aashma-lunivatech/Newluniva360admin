import { Button, Card, Col, Row } from "antd";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { GetDoctorDetailsByDoctorIds } from "../../services/appServices/ProductionServices";
import microscope1 from "../../assets/images/microscope.jpg";
import doctor from "../../assets/images/doctors.png";
import medicine from "../../assets/images/medicine.png";
const BookAppointmentDashboard = () => {
  const { Meta } = Card;
  const [doctorlist, setDoctorList] = useState();
  const [totallist, setTotalList] = useState();

  useEffect(() => {
    console.log(doctorlist, "doctorlist");
    let data = {
      docId: 17,
    };
    if (doctorlist === undefined) {
      console.log(doctorlist, "doctorlist");
      GetDoctorDetailsByDoctorIds(data, (res) => {
        console.log(res, "res");
        if (res?.DoctorDetails && res?.DoctorDetails.length > 0) {
          setDoctorList(res?.DoctorDetails);
        } else {
          console.log("out of if else");
          setTotalList([]);
        }
      });
    }
  }, [doctorlist]);
  return (
    <AppointmentCard>
      <div>
        {/* <Row>
          {doctorlist &&
            doctorlist.map((report, index) => (
              <div className="carousel-container" key={index}>
                <Col span={6}>
                  <Card
                    hoverable
                    style={{
                      width: 240,
                    }}
                    cover={
                      <img
                        alt="DocImage"
                        src={`https://lunivacare.ddns.net/Luniva360mHealthAPI/${report.DocImage}`}
                      />
                    }
                  >
                    <Meta
                      title={report.DoctorName}
                      description={report.DocSpecilization}
                      extra={report.DocAddress}
                    />
                    <h5>Address:{report.DocAddress}</h5>
                    <Button className="btn-load">Make Appointment</Button>
                  </Card>
                </Col>
              </div>
            ))}
        </Row> */}
        <Row>
          <Col span={8}>
            <Card
              hoverable
              style={{
                width: 240,
              }}
              cover={<img src={microscope1} alt="microscope" />}
            >
              <Meta title="Book Lab Test" />
            </Card>
          </Col>
          <Col span={8}>
            <Card
              hoverable
              style={{
                width: 240,
              }}
              cover={<img src={doctor} alt="microscope" />}
            >
              <Meta title="Book Appointment" />
            </Card>
          </Col>
          <Col span={8}>
            <Card
              hoverable
              style={{
                width: 240,
              }}
              cover={<img src={medicine} alt="microscope" />}
            >
              <Meta title="Request Medicine" />
            </Card>
          </Col>
        </Row>
      </div>
    </AppointmentCard>
  );
};

export default BookAppointmentDashboard;
const AppointmentCard = styled.div`
  margin-top: 20px;
`;
