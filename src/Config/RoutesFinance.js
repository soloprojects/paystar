import React from "react";
import Briefcase from "../assets/svg/Briefcase.svg";
import Account from "../assets/svg/Account.svg";
import Package from "../assets/svg/Package.svg";
import Categories from "../Screens/Categories";
import Providers from "../Screens/Providers";
import Packages from "../Screens/Package";
import PackageSingle from "../Screens/PackageSingle";
import { Header } from "semantic-ui-react";

export default [
  {
    isHead: true,
    name: "finance management",
  },
  {
    name: "Categories",
    icon: Account,
    exact: true,
    path: "/categories",
    main: <Categories />,
    child: () => <Header>Categories</Header>,
  },

  {
    name: "Providers",
    icon: Briefcase,
    exact: true,
    path: "/providers",
    main: <Providers />,
    child: () => <Header>Providers</Header>,
  },

  {
    name: "Packages",
    icon: Package,
    exact: true,
    path: "/packages",
    main: <Packages />,
    child: () => <Header>Packages</Header>,
  },

  {
    name: "Packages",
    ignore: true,
    path: "/packages/:ID",
    main: <PackageSingle />,
    child: () => <Header>Package</Header>,
  },
];
