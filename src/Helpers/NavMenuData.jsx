import { AiOutlineHome, AiOutlineLaptop } from "react-icons/Ai";
import { GiDoctorFace } from "react-icons/Gi";
import { SiStaffbase } from "react-icons/Si";
export const RouteDataAdmin = [
  {
    id: 1,
    icon: AiOutlineHome,
    label: "Dashboard",
    pathName: "/dashboard",
  },
  {
    id: 2,
    icon: AiOutlineLaptop,
    label: "Appointment",
    pathName: "dashboard/appointment",
  },
  {
    id: 3,
    icon: GiDoctorFace,
    label: "Doctors",
    // pathName: "/",
  },
  {
    id: 4,
    icon: SiStaffbase,
    label: "Patients",
    // pathName: "/",
  },
];
