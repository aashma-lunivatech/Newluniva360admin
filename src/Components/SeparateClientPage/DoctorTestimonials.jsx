import React, { useEffect, useState } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { Avatar, Card } from "antd";
import doctors from "../../assets/images/doctors.png";
import user from "../../assets/images/user.png";
import loginavatar from "../../assets/images/loginavatar.png";
import { GetDoctorDetailsByDoctorIds } from "../../services/appServices/ProductionServices";
import { UserOutlined } from "@ant-design/icons";
const DoctorTestimonials = () => {
  const [userselecteddoctor, setUserSelectedDoctor] = useState([]);
  const doctordetails = [
    {
      Name: "DR.Rina AmATYA",
      img: doctors,
      Speciality: "Orthopedics",
      Address: "Ktm",
      description: `It's freeing to be able to catch up on customized news and not
      be distracted by a social media element on the same site`,
    },
    {
      Name: "DR.Rina AmATYA",
      img: user,
      Speciality: "SKin",
      Address: "Ktm",
      description: `It's freeing to be able to catch up on customized news and not
      be distracted by a social media element on the same site`,
    },
    {
      Name: "DR.ABC AmATYA",
      img: loginavatar,
      Speciality: "Psychology",
      Address: "Ktm",
      description: `It's freeing to be able to catch up on customized news and not
      be distracted by a social media element on the same site`,
    },
    {
      Name: "DR.ABC AmATYA",
      img: loginavatar,
      Speciality: "Psychology",
      Address: "Ktm",
      description: `It's freeing to be able to catch up on customized news and not
        be distracted by a social media element on the same site`,
    },
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
        // setListVisible(true);
      }
      // setLoading(false);
    });
  }, []);
  return (
    <div>
      <Card>
        <h2 className="header-center">Our Physicians</h2>
        <Carousel
          showArrows={true}
          infiniteLoop={false}
          showThumbs={false}
          showStatus={false}
          autoPlay={true}
          interval={6100}
          renderIndicator={() => null}
        >
          {userselecteddoctor.map((item, index) => (
            <div key={index}>
              {/* <img src={item.DocImage} /> */}
              {/* <img
                style={{ width: 100, height: 100, borderRadius: 30 }}
                src={`https://lunivacare.ddns.net/Luniva360mHealthAPI/${item.DocImage}`}
              /> */}
              <img
                style={{ width: 100, height: 100, borderRadius: 50 }}
                src={
                  item.DocImage
                    ? `https://lunivacare.ddns.net/Luniva360mHealthAPI/${item.DocImage}`
                    : ""
                }
              />
              <div className="myCarousel">
                <h3>{item.DoctorName}</h3>

                <h4>Speciality: {item.DocQualification}</h4>
                <h4>Specilization: {item.DocSpecilization}</h4>
                <p>{item.DocDecription}</p>
              </div>
            </div>
          ))}
        </Carousel>
      </Card>
    </div>
  );
};

export default DoctorTestimonials;
