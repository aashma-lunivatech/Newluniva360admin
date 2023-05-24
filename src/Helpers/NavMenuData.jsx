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
import {
  SiStaffbase,
  SiTryitonline,
  SiOneplus,
  SiGooglehome,
} from "react-icons/Si";

export const RouteDataAdmin = [
  //New Maintained

  {
    id: 1,
    icon: AiOutlineHome,
    label: "Admin ",
    pathName: "",
    hasSubMenu: true,
    subNav: [
      {
        id: 1.0,
        // icon: SiOneplus,
        icon: SiGooglehome,
        label: "Dashboard",
        // pathName: "/doctor",
        pathName: "/dashboard",
      },
      {
        id: 1.1,
        icon: CiMedicalCase,
        label: "Doctors",
        // pathName: "/doctor",
        pathName: "/doctorservices",
      },
      {
        id: 1.2,
        // icon: GiDoctorFace,
        icon: AiOutlineUser,
        label: "Clients",
        pathName: "/clientmainpage",
      },
    ],
  },

  // {
  //   id: 19.0,
  //   icon: AiOutlineHome,
  //   label: "Admin Dashboard",
  //   pathName: "/admindashboard",
  //   hasSubMenu: false,
  // },
  // {
  //   id: 1,
  //   icon: AiOutlineHome,
  //   label: "Admin Dashboard",
  //   pathName: "/dashboard",
  //   hasSubMenu: false,
  // },

  // {
  //   id: 2,
  //   icon: CiMedicalCase,
  //   label: "Doctors",
  //   // pathName: "/doctor",
  //   pathName: "/doctorservices",
  //   // hasSubMenu: true,
  //   // subNav: [
  //   //   {
  //   //     id: 3,
  //   //     label: "Profile",
  //   //     pathName: "/doctor",
  //   //     icon: AiFillProfile,
  //   //   },
  //   //   // {
  //   //   //   id: 4,
  //   //   //   label: "Appointment",
  //   //   //   pathName: "/doctortime",
  //   //   //   icon: AiOutlineCheck,
  //   //   // },
  //   //   // {
  //   //   //   id: 5.8,
  //   //   //   label: "Add Appointment",
  //   //   //   pathName: "/appointmenttime",
  //   //   //   icon: AiOutlineDesktop,
  //   //   // },
  //   //   {
  //   //     id: 5,
  //   //     label: "Online Appointment",
  //   //     pathName: "/bookedonlineappointments",
  //   //     icon: AiOutlineDesktop,
  //   //   },
  //   //   // {
  //   //   //   id: 5.5,
  //   //   //   label: "Settings",
  //   //   //   pathName: "/appointmentsettings",
  //   //   //   icon: AiFillSetting,
  //   //   // },
  //   // ],
  // },
  // {
  //   id: 6,
  //   // icon: GiDoctorFace,
  //   icon: AiOutlineUser,
  //   label: "Clients",
  //   // pathName: "/clients",
  //   pathName: "/clientmainpage",
  //   // hasSubMenu: true,
  //   // subNav: [
  //   //   {
  //   //     id: 7,
  //   //     label: "Client",
  //   //     pathName: "/clients",
  //   //     icon: AiOutlineUser,
  //   //   },
  //   //   {
  //   //     id: 7.2,
  //   //     label: "DepartmentList",
  //   //     pathName: "/clientwisedepartment",
  //   //     icon: AiTwotoneBook,
  //   //   },
  //   //   // {
  //   //   //   id: 8,
  //   //   //   label: " Report List",
  //   //   //   pathName: "/clientonlinereport",
  //   //   //   // icon: CiMedicalCase,
  //   //   // },
  //   //   {
  //   //     id: 8.1,
  //   //     label: "Dr Schdeule",
  //   //     pathName: "/drschdeuleclient",
  //   //     icon: AiOutlineMeh,
  //   //   },

  //   //   // {
  //   //   //   id: 9,
  //   //   //   label: " Department",
  //   //   //   pathName: "/clientdepartment",
  //   //   //   icon: AiOutlineGlobal,
  //   //   // },
  //   //   // {
  //   //   //   id: 10,
  //   //   //   label: " Doctor",
  //   //   //   pathName: "/clientlistdoc",
  //   //   //   // icon: CiMedicalCase,
  //   //   // },
  //   //   // {
  //   //   //   id: 11,
  //   //   //   label: "DoctorsList",
  //   //   //   pathName: "/doctorslist",
  //   //   //   // icon: CiMedicalCase,
  //   //   // },
  //   //   // {
  //   //   //   id: 12,
  //   //   //   label: "Department 2",
  //   //   //   pathName: "/doctorslistbyclientdepart",
  //   //   //   // icon: CiMedicalCase,
  //   //   // },

  //   //   // {
  //   //   //   id: 13,
  //   //   //   label: "Doctor Schedule",
  //   //   //   pathName: "/doctorschedule",
  //   //   //   // icon: CiMedicalCase,
  //   //   // },
  //   //   // {
  //   //   //   id: 14,
  //   //   //   label: "Appointment",
  //   //   //   pathName: "/appointment",
  //   //   //   // icon: CiMedicalCase,
  //   //   // },
  //   //   // {
  //   //   //   id: 4.2,
  //   //   //   label: "Appointment",
  //   //   //   pathName: "/appointment",
  //   //   //   icon: CiMedicalCase,
  //   //   // },
  //   // ],
  // },
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
  // {
  //   id: 16,
  //   icon: SiStaffbase,
  //   label: "Admin",
  //   hasSubMenu: true,
  //   subNav: [
  //     {
  //       id: 16.1,
  //       label: "Department",
  //       pathName: "/admindepartment",
  //       icon: AiOutlineGlobal,
  //     },
  //     // {
  //     //   id: 16.2,
  //     //   label: "ClientLogo",
  //     //   pathName: "/uploadclientlogo",
  //     //   icon: AiOutlineUpload,
  //     // },
  //     // {
  //     //   id: 16.3,
  //     //   label: "Banner Image",
  //     //   pathName: "/uploadbannerimage",
  //     //   icon: AiOutlineUpload,
  //     // },
  //   ],
  // },
  {
    id: 20,
    label: "Online Consultation",
    pathName: "/onlineregistrationpage",
    hasSubMenu: false,
    icon: SiTryitonline,
    // subNav: [
    //   {
    //     id: 20.1,
    //     label: "Regsiter Dr",
    //     pathName: "/onlinedoctorregistration",
    //     icon: SiStaffbase,
    //   },
    //   {
    //     id: 20.2,
    //     label: "Appointment",
    //     pathName: "/doctortime",
    //     icon: AiOutlineCheck,
    //   },
    // ],
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
        label: "Add Vitals",
        pathName: "/patientsvitalss",
        icon: SiStaffbase,
      },
      {
        id: 20.7,
        label: " View Vitals Datewise",
        pathName: "/patientsvitalssdatewise",
        icon: SiStaffbase,
      },
    ],
  },
  {
    id: 30.5,
    label: "Pathology",
    hasSubMenu: true,
    icon: SiStaffbase,
    subNav: [
      {
        id: 30.4,
        label: "Dashboard",
        pathName: "/pathologydashboard",
        icon: AiOutlineHome,
      },
      {
        id: 30.6,
        label: "Invoice",
        // pathName: "/BookTestBill",
        pathName: "/newbooktestbill",
        icon: SiStaffbase,
      },
      {
        id: 30.8,
        label: "Testlist",
        // pathName: "/BookTestBill",
        pathName: "/detailstestlist",
        icon: SiStaffbase,
      },
    ],
  },
  {
    id: 40,
    label: "LabItems",
    hasSubMenu: true,
    icon: SiStaffbase,
    subNav: [
      {
        id: 40.1,
        label: "Test List",
        pathName: "/labtestitems",
        icon: SiStaffbase,
      },
    ],
  },
];
