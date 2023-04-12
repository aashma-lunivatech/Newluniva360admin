import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import "./App.css";
import Dashboard from "./Pages/Dashboard/Dashboard";
import RootPage from "./Pages/Dashboard/RootPage/RootPage";
import ErrorPage from "./Pages/ErrorPage/ErrorPage";
import Homepage from "./Pages/Homepage/Homepage";
import Login from "./Pages/Login/Login";
import ThemeChanger from "./Components/Settings/ThemeChanger";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Homepage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/login",
    element: <Homepage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/dashboard",
    element: <RootPage />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "dashboard/appointment",
        element: <ThemeChanger />,
      },
    ],
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
