import React from "react";
import routePath from "./routePath";

const routes = [
  {
    path: routePath.LOGIN,
    exact: true,
    component: React.lazy(() => import("../pages/LoginPage/LoginPage")),
  },
  {
    path: routePath.DASHBOARD,
    exact: true,
    component: React.lazy(() => import("../pages/DashboardPage/DashboardPage")),
  },
  {
    path: routePath.ADD_MEMBER,
    exact: true,
    component: React.lazy(() => import("../pages/DashboardPage/AddMember")),
  },
  {
    path: routePath.EDIT_MEMBER,
    exact: true,
    component: React.lazy(() => import("../pages/DashboardPage/EditMember")),
  },
];

export default routes;
