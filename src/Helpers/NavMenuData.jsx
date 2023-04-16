import { AiOutlineHome, AiOutlineLaptop } from "react-icons/Ai";
import { CiMedicalCase } from "react-icons/Ci";
import { SiStaffbase } from "react-icons/Si";
import Client from "../Components/Client/Client";
export const RouteDataAdmin = [
  {
    id: 1,
    icon: AiOutlineHome,
    label: "Dashboard",
    pathName: "/dashboard",
    hasSubMenu: false,
  },

  {
    id: 3,
    icon: CiMedicalCase,
    label: "Department",
    pathName: "/doctor",
    hasSubMenu: true,
    subNav: [
      {
        id: 7,
        label: "Doctors",
        pathName: "/doctor",
        icon: CiMedicalCase,
      },
      {
        id: 8,
        label: "Appointment",
        pathName: "/appointment",
        icon: CiMedicalCase,
      },
    ],
  },
  {
    id: 4,
    // icon: GiDoctorFace,
    icon: CiMedicalCase,
    label: "Clients",
    pathName: "/clients",
    Element: <Client />,
  },
  {
    id: 5,
    icon: SiStaffbase,
    label: "Patients",
    // pathName: "/",
  },
];
