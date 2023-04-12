import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from "@ant-design/icons";
import { useState } from "react";
const SideNavdata = () => {
  const [mydata, setMydata] = useState();
  setMydata(data);
  const data = [
    {
      id: 1,
      label: "Dashboard",
      // pathName: "/",
    },
    {
      id: 2,
      label: "Appointment",
      // pathName: "dashboard/appointment",
    },
    {
      id: 3,
      label: "Doctors",
      // pathName: "/",
    },
    {
      id: 4,
      label: "Patients",
      // pathName: "/",
    },
  ];
};

export default SideNavdata;
