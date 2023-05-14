import React, { useEffect, useState } from "react";
import { GetDoctorDetailsByDoctorIds } from "../../../services/appServices/ProductionServices";
import { Button, Card, Col, Row } from "antd";
import styled from "styled-components";

const DoctorListApifetched = () => {
  const { Meta } = Card;
  const [doctorlist, setDoctorList] = useState();
  const [totallist, setTotalList] = useState();

  useEffect(() => {
    // console.log(doctorlist, "doctorlist");
    let data = {
      docId: 17,
    };
    if (doctorlist === undefined) {
      // console.log(doctorlist, "doctorlist");
      GetDoctorDetailsByDoctorIds(data, (res) => {
        // console.log(res, "res");
        if (res?.DoctorDetails && res?.DoctorDetails.length > 0) {
          setDoctorList(res?.DoctorDetails);
        } else {
          // console.log("out of if else");
          setTotalList([]);
        }
      });
    }
  }, [doctorlist]);
  return (
    <DoctorListDashboard>
      <Row>
        {doctorlist &&
          doctorlist.map((report, index) => (
            <div className="carousel-container" key={index}>
              <Col span={6}>
                <div>
                  <div className="doctorlistsection">
                    <img
                      alt="DocImage"
                      className="image-doctor"
                      src={`https://lunivacare.ddns.net/Luniva360mHealthAPI/${report.DocImage}`}
                    />
                    <div className="doctors-details">
                      <span className="doctor-name">{report.DoctorName}</span>
                      <span className="extras-details-doctor">
                        {report.DocSpecilization}
                      </span>
                      <span className="extras-details-doctor">
                        {report.DocAddress}
                      </span>
                    </div>
                  </div>
                </div>
              </Col>
            </div>
          ))}
      </Row>
    </DoctorListDashboard>
  );
};

export default DoctorListApifetched;
const DoctorListDashboard = styled.div`
  .image-doctor {
    width: 50px;
    height: 50px;
    border-radius: 50px;
  }
  .doctorlistsection {
    display: flex;
  }
  .doctor-name {
    white-space: nowrap;
    font-size: 16px;
    font-weight: bold;
    color: green;
  }
  .doctors-details {
    display: grid;
    margin-left: 15px;
  }
  .extras-details-doctor {
    color: grey;
  }
`;
