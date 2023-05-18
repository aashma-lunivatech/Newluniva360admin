import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { Card } from "antd";
import doctors from "../../assets/images/doctors.png";
import user from "../../assets/images/user.png";
import loginavatar from "../../assets/images/loginavatar.png";
const DoctorTestimonials = () => {
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
  return (
    <div>
      <Card>
        <h2 className="header-center">Our Physicians</h2>
        <Carousel
          showArrows={true}
          infiniteLoop={true}
          showThumbs={false}
          showStatus={false}
          autoPlay={true}
          interval={6100}
        >
          {doctordetails.map((item, index) => (
            <div key={index}>
              <img src={item.img} />
              <div className="myCarousel">
                <h3>{item.Name}</h3>
                <h4>Speciality: {item.Speciality}</h4>
                <h4>Address: {item.Address}</h4>
                <p>{item.description}</p>
              </div>
            </div>
          ))}
        </Carousel>
      </Card>
    </div>
  );
};

export default DoctorTestimonials;
