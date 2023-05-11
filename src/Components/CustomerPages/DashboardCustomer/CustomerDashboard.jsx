import React from "react";
import { Carousel } from "antd";
import microscope from "../../../assets/images/microscope.jpg";
const contentStyle = {
  height: "160px",
  color: "#fff",
  lineHeight: "160px",
  textAlign: "center",
  background: "#364d79",
};
const CustomerDashboard = () => {
  return (
    <div>
      <Carousel autoplay>
        <div>
          <img
            style={{ width: "100%", height: "280px" }}
            className="client-logoimage"
            src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=868&q=80"
          />
        </div>
        <div>
          <img
            style={{ width: "100%", height: "280px" }}
            className="client-logoimage"
            src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=868&q=80"
          />
        </div>
        <div>
          <img
            style={{ width: "100%", height: "280px" }}
            className="client-logoimage"
            src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=868&q=80"
          />
        </div>
      </Carousel>
    </div>
  );
};

export default CustomerDashboard;
