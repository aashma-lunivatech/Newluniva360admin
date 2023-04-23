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
        // icon: CiMedicalCase,
      },
      {
        id: 7.1,
        label: "Appoinments",
        pathName: "/appointments",
        // icon: CiMedicalCase,
      },
      {
        id: 7.2,
        label: "Online Appoinment",
        pathName: "/onlineappointments",
        // icon: CiMedicalCase,
      },
    ],
  },
  {
    id: 4,
    // icon: GiDoctorFace,
    icon: CiMedicalCase,
    label: "Clients",
    // pathName: "/clients",
    hasSubMenu: true,
    subNav: [
      {
        id: 4.1,
        label: "Clients",
        pathName: "/clients",
        // icon: CiMedicalCase,
      },
      {
        id: 4.2,
        label: " Report List",
        pathName: "/clientonlinereport",
        // icon: CiMedicalCase,
      },

      {
        id: 4.3,
        label: " Department",
        pathName: "/clientdepartment",
        // icon: CiMedicalCase,
      },
      {
        id: 4.4,
        label: " Doctor",
        pathName: "/clientlistdoc",
        // icon: CiMedicalCase,
      },
      {
        id: 3.2,
        label: "DoctorsList",
        pathName: "/doctorslist",
        // icon: CiMedicalCase,
      },
      {
        id: 3.3,
        label: "Department 2",
        pathName: "/doctorslistbyclientdepart",
        // icon: CiMedicalCase,
      },

      {
        id: 8.1,
        label: "Doctor Schedule",
        pathName: "/doctorschedule",
        // icon: CiMedicalCase,
      },
      {
        id: 8,
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
    id: 5,
    icon: SiStaffbase,
    label: "Patients",
    // pathName: "/",
  },
];
