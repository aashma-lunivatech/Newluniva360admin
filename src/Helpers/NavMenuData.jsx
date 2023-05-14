import {
  AiOutlineHome,
  AiFillProfile,
  AiOutlineCheck,
  AiOutlineDesktop,
  AiFillSetting,
  AiOutlineUser,
  AiTwotoneBook,
  AiOutlineMeh,
  AiOutlineUpload,
  AiOutlineGlobal,
} from "react-icons/Ai";
import { CiMedicalCase } from "react-icons/Ci";
import { SiStaffbase } from "react-icons/Si";
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
        icon: AiFillProfile,
      },
      // {
      //   id: 4,
      //   label: "Appointment",
      //   pathName: "/doctortime",
      //   icon: AiOutlineCheck,
      // },
      // {
      //   id: 5,
      //   label: "Online App ",
      //   pathName: "/bookedonlineappointments",
      //   icon: AiOutlineDesktop,
      // },
      // {
      //   id: 5.5,
      //   label: "Settings",
      //   pathName: "/appointmentsettings",
      //   icon: AiFillSetting,
      // },
    ],
  },
  {
    id: 6,
    // icon: GiDoctorFace,
    icon: AiOutlineUser,
    label: "Clients",
    // pathName: "/clients",
    hasSubMenu: true,
    subNav: [
      {
        id: 7,
        label: "Client",
        pathName: "/clients",
        icon: AiOutlineUser,
      },
      {
        id: 7.2,
        label: "DepartmentList",
        pathName: "/clientwisedepartment",
        icon: AiTwotoneBook,
      },
      // {
      //   id: 8,
      //   label: " Report List",
      //   pathName: "/clientonlinereport",
      //   // icon: CiMedicalCase,
      // },
      {
        id: 8.1,
        label: "Dr Schdeule",
        pathName: "/drschdeuleclient",
        icon: AiOutlineMeh,
      },

      // {
      //   id: 9,
      //   label: " Department",
      //   pathName: "/clientdepartment",
      //   icon: AiOutlineGlobal,
      // },
      // {
      //   id: 10,
      //   label: " Doctor",
      //   pathName: "/clientlistdoc",
      //   // icon: CiMedicalCase,
      // },
      // {
      //   id: 11,
      //   label: "DoctorsList",
      //   pathName: "/doctorslist",
      //   // icon: CiMedicalCase,
      // },
      // {
      //   id: 12,
      //   label: "Department 2",
      //   pathName: "/doctorslistbyclientdepart",
      //   // icon: CiMedicalCase,
      // },

      // {
      //   id: 13,
      //   label: "Doctor Schedule",
      //   pathName: "/doctorschedule",
      //   // icon: CiMedicalCase,
      // },
      // {
      //   id: 14,
      //   label: "Appointment",
      //   pathName: "/appointment",
      //   // icon: CiMedicalCase,
      // },
      // {
      //   id: 4.2,
      //   label: "Appointment",
      //   pathName: "/appointment",
      //   icon: CiMedicalCase,
      // },
    ],
  },
  // {
  //   id: 15,
  //   icon: SiStaffbase,
  //   label: "Department",
  //   // pathName: "/",
  //   hasSubMenu: true,
  //   subNav: [
  //     {
  //       id: 15.1,
  //       label: "department",
  //       pathName: "/department",
  //       // icon: CiMedicalCase,
  //     },
  //   ],
  // },
  {
    id: 16,
    icon: SiStaffbase,
    label: "Admin",
    hasSubMenu: true,
    subNav: [
      {
        id: 16.1,
        label: "Department",
        pathName: "/admindepartment",
        icon: AiOutlineGlobal,
      },
      // {
      //   id: 16.2,
      //   label: "ClientLogo",
      //   pathName: "/uploadclientlogo",
      //   icon: AiOutlineUpload,
      // },
      // {
      //   id: 16.3,
      //   label: "Banner Image",
      //   pathName: "/uploadbannerimage",
      //   icon: AiOutlineUpload,
      // },
    ],
  },
  {
    id: 20,
    label: "Online Consultation",
    pathName: "/onlinedoctorregistration",
    hasSubMenu: true,
    icon: SiStaffbase,
    subNav: [
      {
        id: 20.1,
        label: "Regsiter Dr",
        pathName: "/onlinedoctorregistration",
        icon: SiStaffbase,
      },
      {
        id: 20.2,
        label: "Appointment",
        pathName: "/doctortime",
        icon: AiOutlineCheck,
      },
    ],
  },
  {
    id: 20.5,
    label: "Patient",
    pathName: "/patientsvitals",
    hasSubMenu: true,
    icon: SiStaffbase,
    subNav: [
      {
        id: 20.6,
        label: "Vitals",
        pathName: "/patientsvitalss",
        icon: SiStaffbase,
      },
      {
        id: 20.7,
        label: "Vitals",
        pathName: "/patientsvitalssdatewise",
        icon: SiStaffbase,
      },
    ],
  },
];
