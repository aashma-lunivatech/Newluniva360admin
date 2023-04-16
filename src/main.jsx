import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import "./App.css";
import RootPage from "./Pages/Dashboard/RootPage/RootPage";
import ErrorPage from "./Pages/ErrorPage/ErrorPage";
import Homepage from "./Pages/Homepage/Homepage";
import ThemeChanger from "./Components/Settings/ThemeChanger";
import DoctorsPage from "./Components/Doctorspage/DoctorsPage";
import Client from "./Components/Client/Client";

import MainDoctorPage from "./Components/Doctorspage/MainDoctorPage";
import TopMainSection from "./Components/TopMainSection";
import DoctorPageView from "./Components/Doctorspage/DoctorPageView";
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
        element: <ThemeChanger />,
      },
      {
        path: "/doctor",
        element: <DoctorPageView />,
      },
      {
        path: "/clients",
        element: <Client />,
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
