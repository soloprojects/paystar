import React from "react";
import List from "../assets/svg/List.svg";
import Chart from "../assets/svg/chart.svg";
import Transactions from "../Screens/Transactions";
import ClientSingleTrans from "../Screens/ClientSingleTrans";
import FinReport from "../Screens/FinReport";
import { Header } from "semantic-ui-react";
export default [
  {
    isHead: true,
    name: "Transactions",
  },
  {
    name: "Transactions",
    icon: List,
    exact: true,
    path: "/transactions",
    main: <Transactions />,
    child: () => <Header>Transactions</Header>,
  },

  {
    name: "Client Transaction",
    ignore: true,
    path: "/clientTrans/:ID",
    main: <ClientSingleTrans />,
    child: () => <Header>Client Transaction</Header>,
  },

  {
    name: "Finance Reports",
    icon: Chart,
    exact: true,
    path: "/report",
    main: <FinReport />,
    child: () => <Header>Finance Reports</Header>,
  },
];
