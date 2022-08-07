import React from "react";

import { Image, Header } from "semantic-ui-react";
function ReportStat(props) {
  return (
    <div className="flex">
      <img src={props.icon} width="100" height="100" />
      <div className="ml-2 my-5">
        <Header size="large">{props.stat}</Header>
        <p className="text-graytwo text-lg">{props.label}</p>
      </div>
    </div>
  );
}

export default ReportStat;
