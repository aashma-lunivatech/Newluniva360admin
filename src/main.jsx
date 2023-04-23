import React from "react";
import ReactDOM from "react-dom/client";
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
const router = createBrowserRouter([
  // {
  //   path: "/",
  //   element: <Homepage />,
  //   errorElement: <ErrorPage />,
  // },
  {
    path: "/login",
    element: <Homepage />,
    errorElement: <ErrorPage />,
  },

  {
    path: "/",
    element: <RootPage />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/dashboard",
        element: <TopMainSection />,
      },
      {
        path: "/appointment",
        element: <DoctorDetails />,
      },
      {
        path: "/doctor",
        element: <DoctorPageView />,
      },
      {
        path: "/clients",
        element: <AddClientHeader />,
      },
      {
        path: "/clientsform",
        element: <Client />,
      },
      {
        path: "/clientsform/edit/:id",
        element: <Client />,
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
        path: "/doctorschedule",
        element: <DoctorSchedule />,
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
    ],
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} fallbackElement={<>Loading...</>} />
  </React.StrictMode>
);
