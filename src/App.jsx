import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import "./App.css";
import RootPage from "./Pages/Dashboard/RootPage/RootPage";
import ErrorPage from "./Pages/ErrorPage/ErrorPage";
import Homepage from "./Pages/Homepage/Homepage";
import Client from "./Components/Client/Client";
import MainDoctorPage from "./Components/Doctorspage/MainDoctorPage";
import TopMainSection from "./Components/TopMainSection";
import DoctorPageView from "./Components/Doctorspage/DoctorPageView";
import DoctorDetails from "./Components/Settings/DoctorDetails";
import ClientHeaderCard from "./Components/Client/ClientHeaderCard";
import RegisteredClient from "./Components/Client/RegisteredClient";
import AddClientHeader from "./Components/Client/AddClientHeader";
import ClientOnlinereportTable from "./Components/Client/ClientOnlinereportTable";
import ClientDepartment from "./Components/Client/ClientDepartment";
import DoctorsList from "./Components/Doctorspage/DoctorsList";
import DoctorsListClientAndDepart from "./Components/Doctorspage/DoctorListClientAndDepart";
import ClientListDocAvailable from "./Components/Client/ClientListDocAvailable";
import DoctorSchedule from "./Components/Doctorspage/DoctorSchedule";
import BookedOnlineAppointments from "./Components/DoctorsServicespage/BookedOnlineAppointments";
import AddAppointmentTime from "./Components/DoctorsServicespage/AddAppointmentTime";
import DoctorsProfilePageNew from "./Components/DoctorsServicespage/DoctorsProfilePageNew";
import AddDoctorsProfilePage from "./Components/DoctorsServicespage/AddDoctorsProfilePage";
import Departments from "./Components/Departments/Departments";
import GetClientWiseDepartment from "./Components/Client/GetClientWiseDepartment";
import AddClientWiseDepartment from "./Components/Client/AddClientWiseDepartment";
import AdminDepartment from "./Components/Admin/AdminDepartment";
import AddAdminDepartment from "./Components/Admin/AddAdminDepartment";
import DoctorScheduleAppointment from "./Components/DoctorsServicespage/DoctorScheduleAppointment";
import AddDrAvailableTimeAppoinment from "./Components/DoctorsServicespage/AddDrAvailableTimeAppoinment";
import AddNewDrAvailableTimeAppoinment from "./Components/DoctorsServicespage/AddNewDrAvailableAppointment";
import AppointmentSettings from "./Components/Appointment/AppointmentSettings";
import ClientWiseDoctorSchedule from "./Components/Doctorspage/AddClientWiseDoctorSchedule";
import AddClientWiseDoctorSchedule from "./Components/Doctorspage/AddClientWiseDoctorSchedule";
import DoctorSchdeuleClient from "./Components/Client/DoctorSchdeuleClient";
import ClientRootPage from "./Components/SeparateClientPage/ClientRootPage";
import ClientLandingPage from "./Components/SeparateClientPage/ClientLandingPage";
import UploadClientLogo from "./Components/ImageuploadField/UploadClientLogo";
import UploadBannerImage from "./Components/ImageuploadField/UploadBannerImage";
import ClientparentForm from "./Components/Client/ClientparentForm";
import Department from "./Components/SeparateClientPage/ClientDepartment/Department";
import CustomerDashboard from "./Components/CustomerPages/DashboardCustomer/CustomerDashboard";
import UploadDoctorImage from "./Components/ImageuploadField/UploadDoctorImage";
import DoctorRegistrationOnline from "./Components/OnlineConsultation/RegisterDoctorOnline/DoctorRegistrationOnline";
import PatientsVitals from "./Components/Patients/PatientsVitals";
import AddPatientVitals from "./Components/Patients/AddPatientVitals";
import PatientsVitalsDateWise from "./Components/Patients/PatientsVitalsDatewise";
import PathologyLab from "./Components/PathologyLabDashboard/PathologyLab";
import BookTestBill from "./Components/PathologyLabDashboard/BookTestBill";
import BillPrintPage from "./Components/PathologyLabDashboard/BillPrintPage";
import NewBookTest from "./Components/PathologyLabDashboard/NewBookTest";
import TestListPage from "./Components/PathologyLabDashboard/TestListPage";
import LabTestItems from "./Components/LabItems/LabTestItems/LabTestItems";
import AddLabTestItems from "./Components/LabItems/LabTestItems/AddLabTestItems";
import AdminDashboard from "./Components/Dashboard/AdminDashboard/AdminDashboard";
import AdminLoginPage from "./Pages/Login/AdminLoginpage";
import DoctorServices from "./Components/Dashboard/DoctorDashboard/DoctorServices";
import ClientDashboard from "./Components/Dashboard/ClientDashboard/ClientDashboard";
import SeparateClientLogo from "./Components/ImageuploadField/SeparateClientLogo";
import SeparateBannerLogo from "./Components/ImageuploadField/SeparateBannerLogo";
import MainPageOnlineRegistration from "./Components/Dashboard/OnlinePages/MainPageOnline";
import TotalListOfDoctors from "./Components/Doctorspage/TotalListofDoctors";
const router = createBrowserRouter(
  [
    // {
    //   path: "/",
    //   element: <Homepage />,
    //   errorElement: <ErrorPage />,
    // },
    {
      path: "/",
      element: <AdminLoginPage />,
      errorElement: <ErrorPage />,
    },
    {
      path: "/billprintpage",
      element: <BillPrintPage />,
      errorElement: <ErrorPage />,
    },

    {
      path: "/customer",
      element: <CustomerDashboard />,
      errorElement: <ErrorPage />,
    },
    {
      path: "/login",
      element: <Homepage />,
      errorElement: <ErrorPage />,
    },

    {
      path: "/clientlandingpage",
      element: <ClientRootPage />,
      errorElement: <ErrorPage />,
      children: [
        {
          path: "/clientlandingpage",
          element: <ClientLandingPage />,
        },
        {
          path: "/clientlandingpage/department",
          element: <Department />,
        },
      ],
    },

    {
      path: "/",
      element: <RootPage />,
      errorElement: <ErrorPage />,
      children: [
        {
          path: "/dashboard",
          element: <ClientLandingPage />,
        },
        {
          path: "/pathologydashboard",
          element: <PathologyLab />,
        },
        {
          path: "/adddoctortimeappointment",
          element: <AddDrAvailableTimeAppoinment />,
          // element: <AddNewDrAvailableTimeAppoinment />,
        },
        {
          path: "/editdoctoravailableschdeule/edit/:id",
          element: <AddDrAvailableTimeAppoinment />,
          // element: <AddNewDrAvailableTimeAppoinment />,
        },
        {
          path: "/admindashboard",
          element: <AdminDashboard />,
          errorElement: <ErrorPage />,
        },
        {
          path: "/onlineregistrationpage",
          element: <MainPageOnlineRegistration />,
          errorElement: <ErrorPage />,
        },

        {
          path: "/clientmainpage",
          element: <ClientDashboard />,
          errorElement: <ErrorPage />,
        },
        {
          path: "/clientbanner",
          element: <SeparateBannerLogo />,
          errorElement: <ErrorPage />,
        },
        // SeparateBannerLogo

        {
          path: "/appointment",
          element: <DoctorDetails />,
        },
        {
          path: "/doctorprofile",
          element: <DoctorsProfilePageNew />,
        },
        {
          path: "/adddoctorprofile",
          element: <AddDoctorsProfilePage />,
        },
        {
          path: "/editdoctorprofile/edit/:id",
          element: <AddDoctorsProfilePage />,
        },
        {
          path: "/doctor",
          element: <DoctorPageView />,
        },
        {
          path: "/doctortime",
          element: <DoctorScheduleAppointment />,
        },
        {
          path: "/bookedonlineappointments",
          element: <BookedOnlineAppointments />,
        },
        {
          path: "/clients",
          element: <AddClientHeader />,
        },
        {
          path: "/clientsform",
          element: <ClientparentForm />,
        },
        {
          path: "/clientsform/edit/:id",
          element: <Client />,
        },
        {
          path: "/appointmenttime",
          element: <AddAppointmentTime />,
        },
        {
          path: "/appointmenttime/edit/:id",
          element: <AddAppointmentTime />,
        },
        {
          path: "/registerclient",
          element: <RegisteredClient />,
        },
        {
          path: "/clientonlinereport",
          element: <ClientOnlinereportTable />,
        },
        {
          path: "/clientdepartment",
          element: <ClientDepartment />,
        },
        {
          path: "/clientlistdoc",
          element: <ClientListDocAvailable />,
        },
        {
          path: "/doctorslist",
          element: <DoctorsList />,
        },
        {
          path: "/viewdoctorlist",
          element: <TotalListOfDoctors />,
        },
        {
          path: "/doctorschedule",
          element: <DoctorSchedule />,
        },
        {
          path: "/clientwisedrschedule",
          element: <AddClientWiseDoctorSchedule />,
        },
        {
          path: "/drschdeuleclient",
          element: <DoctorSchdeuleClient />,
        },
        {
          path: "/doctorslistbyclientdepart",
          element: <DoctorsListClientAndDepart />,
        },

        {
          path: "/adddoctor",
          element: <MainDoctorPage />,
          errorElement: <ErrorPage />,
        },
        {
          path: "/clientwisedepartment",
          element: <GetClientWiseDepartment />,
          errorElement: <ErrorPage />,
        },
        {
          path: "/addclientwisedtschedule",
          element: <AddClientWiseDoctorSchedule />,
          errorElement: <ErrorPage />,
        },

        {
          path: "/editclientdrschdule/edit/:id",
          element: <AddClientWiseDoctorSchedule />,
          errorElement: <ErrorPage />,
        },
        {
          path: "/addclientwisedepartment",
          element: <AddClientWiseDepartment />,
          errorElement: <ErrorPage />,
        },
        {
          path: "/editclientwisedepartment/edit/:id",
          element: <AddClientWiseDepartment />,
          errorElement: <ErrorPage />,
        },
        {
          path: "/department",
          element: <Departments />,
          errorElement: <ErrorPage />,
        },
        {
          path: "/admindepartment",
          element: <AdminDepartment />,
          errorElement: <ErrorPage />,
        },
        {
          path: "/doctorservices",
          element: <DoctorServices />,
          errorElement: <ErrorPage />,
        },

        {
          path: "/addadminwisedepartment",
          element: <AddAdminDepartment />,
          errorElement: <ErrorPage />,
        },
        // sdnmsdnasmdnasm
        // /editdoctorprofile/edit/:id

        {
          path: "/editaddadminwisedepartment/edit/:id",
          element: <AddAdminDepartment />,
          errorElement: <ErrorPage />,
        },
        {
          path: "/appointmentsettings",
          element: <AppointmentSettings />,
          errorElement: <ErrorPage />,
        },
        {
          path: "/uploadclientlogo",
          element: <UploadClientLogo />,
          errorElement: <ErrorPage />,
        },
        {
          path: "/clientlogo",
          element: <SeparateClientLogo />,
          errorElement: <ErrorPage />,
        },
        {
          path: "/uploadbannerimage",
          element: <UploadBannerImage />,
          errorElement: <ErrorPage />,
        },
        {
          path: "/UploadDoctorImage",
          element: <UploadDoctorImage />,
          errorElement: <ErrorPage />,
        },
        {
          path: "/onlinedoctorregistration",
          element: <DoctorRegistrationOnline />,
          errorElement: <ErrorPage />,
        },
        {
          path: "/patientsvitalss",
          element: <PatientsVitals />,
          errorElement: <ErrorPage />,
        },
        {
          path: "/addpatientvitals",
          element: <AddPatientVitals />,
          errorElement: <ErrorPage />,
        },
        {
          path: "/editpatientvitals/edit/:id",
          element: <AddPatientVitals />,
          errorElement: <ErrorPage />,
        },
        {
          path: "/patientsvitalssdatewise",
          element: <PatientsVitalsDateWise />,
          errorElement: <ErrorPage />,
        },
        {
          path: "/BookTestBill",
          element: <BookTestBill />,
          errorElement: <ErrorPage />,
        },
        {
          path: "/newbooktestbill",
          element: <NewBookTest />,
          errorElement: <ErrorPage />,
        },
        {
          path: "/detailstestlist",
          element: <TestListPage />,
          errorElement: <ErrorPage />,
        },
        // AddLabTestItems
        {
          path: "/labtestitems",
          element: <LabTestItems />,
          errorElement: <ErrorPage />,
        },
        // /addlabtest
        {
          path: "/addlabtest",
          element: <AddLabTestItems />,
          errorElement: <ErrorPage />,
        },

        // {
        //   path: "/billprintpage",
        //   element: <BillPrintPage />,
        //   errorElement: <ErrorPage />,
        // },
      ],
    },
  ],
  { basename: "/Luniva360/" }
);
function App() {
  return (
    <>
      <RouterProvider router={router} fallbackElement={<>Loading...</>} />
    </>
  );
}

export default App;
