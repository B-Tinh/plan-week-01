import React from "react";
import HomePage from "./pages/HomePage/HomePage";
import EmployeeListPage from "./pages/EmployeeListPage/EmployeeListPage";
import EmployeeActionPage from "./pages/EmployeeActionPage/EmployeeActionPage";
import Login from "./pages/LoginPage/Login";
import Logout from "./pages/LogoutPage/Logout";

const routes = [
  {
    path: "/employee-home",
    exact: false,
    main: HomePage
  },
  {
    path: "/",
    exact: true,
    noLayout: true,
    main: Login
  },
  {
    path: "/employee-logout",
    exact: false,
    main: Logout
  },
  {
    path: "/employee-list",
    exact: false,
    main: EmployeeListPage
  },
  {
    path: "/employee/add",
    exact: false,
    main: EmployeeActionPage
  },
  {
    path: "/employee/:id/edit",
    exact: false,
    main: EmployeeActionPage
  }
];

export default routes;
