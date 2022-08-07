import React from "react";
import User from "../assets/svg/Users.svg";
import Usercheck from "../assets/svg/Usercheck.svg";
import Agents from "../Screens/Agents";
import AgentProfile from "../Screens/AgentProfile";
import Clients from "../Screens/Clients";
import ClientProfile from "../Screens/ClientProfile";
import Audit from "../Screens/Audit";
import { Header } from "semantic-ui-react";

export default [
  {
    isHead: true,
    name: "USER MANAGEMENT",
  },
  {
    name: "Finance Agents",
    icon: User,
    exact: true,
    path: "/agents",
    main: <Agents />,
    child: () => <Header>Finance Agents</Header>,
  },

  {
    name: "Agent",
    ignore: true,
    path: "/agents/:ID",
    main: <AgentProfile />,
    child: () => <Header>Agent</Header>,
  },

  {
    name: "Clients",
    icon: Usercheck,
    exact: true,
    path: "/clients",
    main: <Clients />,
    child: () => <Header>Clients</Header>,
  },

  {
    name: "Clients",
    ignore: true,
    path: "/clients/:ID",
    main: <ClientProfile />,
    child: () => <Header>Client</Header>,
  },

  {
    name: "Audit",
    ignore: true,
    path: "/audit",
    main: <Audit />,
    child: () => <Header>Audit</Header>,
  },
];
