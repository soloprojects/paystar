import React from "react";
import Home from "../Screens/Home";
import HomeIcon from "../assets/svg/Home.svg";
import { Header } from "semantic-ui-react";
export default [
  {
    name: "Home",
    path: "/",
    exact: true,
    icon: HomeIcon,
    main: <Home />,
    child: () => <Header>Home</Header>,
  },
];
