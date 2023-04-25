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
    id: 2,
    icon: CiMedicalCase,
    label: "Doctors",
    pathName: "/doctor",
    hasSubMenu: true,
    subNav: [
      {
        id: 3,
        label: "Profile",
        pathName: "/doctor",
        // icon: CiMedicalCase,
      },
      {
        id: 4,
        label: "Appoinment",
        pathName: "/doctortime",
        // icon: CiMedicalCase,
      },
      {
        id: 5,
        label: "Online Appoinment",
        pathName: "/bookedonlineappointments",
        // icon: CiMedicalCase,
      },
    ],
  },
  {
    id: 6,
    // icon: GiDoctorFace,
    icon: CiMedicalCase,
    label: "Clients",
    // pathName: "/clients",
    hasSubMenu: true,
    subNav: [
      {
        id: 7,
        label: "Client",
        pathName: "/clients",
        // icon: CiMedicalCase,
      },
      {
        id: 8,
        label: " Report List",
        pathName: "/clientonlinereport",
        // icon: CiMedicalCase,
      },

      {
        id: 9,
        label: " Department",
        pathName: "/clientdepartment",
        // icon: CiMedicalCase,
      },
      {
        id: 10,
        label: " Doctor",
        pathName: "/clientlistdoc",
        // icon: CiMedicalCase,
      },
      {
        id: 11,
        label: "DoctorsList",
        pathName: "/doctorslist",
        // icon: CiMedicalCase,
      },
      {
        id: 12,
        label: "Department 2",
        pathName: "/doctorslistbyclientdepart",
        // icon: CiMedicalCase,
      },

      {
        id: 13,
        label: "Doctor Schedule",
        pathName: "/doctorschedule",
        // icon: CiMedicalCase,
      },
      {
        id: 14,
        label: "Appointment",
        pathName: "/appointment",
        // icon: CiMedicalCase,
      },
      // {
      //   id: 4.2,
      //   label: "Appointment",
      //   pathName: "/appointment",
      //   icon: CiMedicalCase,
      // },
    ],
  },
  {
    id: 15,
    icon: SiStaffbase,
    label: "Department",
    // pathName: "/",
    hasSubMenu: true,
    subNav: [
      {
        id: 7,
        label: "department",
        pathName: "/department",
        // icon: CiMedicalCase,
      },
    ],
  },
];
