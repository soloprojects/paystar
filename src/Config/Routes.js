import React from "react";
import RoutesFinance from "./RoutesFinance";
import RoutesHome from "./RoutesHome";
import RoutesUser from "./RoutesUser";
import RoutesTransaction from "./RoutesTransaction";

export default [
  ...RoutesFinance,
  ...RoutesHome,
  ...RoutesUser,
  ...RoutesTransaction,
];
