import React from "react";
import Money from "../assets/svg/money.svg";
import Bank from "../assets/svg/bank.svg";
import Employee from "../assets/svg/employee.svg";
import Box from "../assets/svg/box.svg";
import ReportStat from "./ReportStat";
import Label from "./Label";
import MoneyFormat from "../Utilities/MoneyFormat";

function OverViewReport(props) {
  return (
    <div className="my-5">
      <div className="flex justify-between">
        <ReportStat
          icon={Money}
          stat={"₦" + MoneyFormat(props.data?.revenue)}
          label="Total Revenue"
        />
        <ReportStat
          icon={Bank}
          stat={props.data?.providers}
          label="Finance Providers"
        />
        <ReportStat
          icon={Employee}
          stat={props.data?.agents}
          label="Finance Agents"
        />
        <ReportStat
          icon={Box}
          stat={props.data?.packages}
          label="Finance Packages"
        />
      </div>

      <div className="flex justify-between my-10">
        <div className="flex-1 mx-5">
          <h4 className="text-graytwo">TOP FINANCE PROVIDERS</h4>
          <p className="text-graytwo my-2">NIL</p>
        </div>
        <div className="flex-1 mx-5">
          <h4 className="text-graytwo">TOP FINANCE AGENTS</h4>

          {props.topAgents?.map((res) => (
            <Label
              key={res.id}
              amount={`₦${MoneyFormat(res.totalRevenue)}`}
              name={res.name}
              action={() => props.action("Agent", res.id)}
              callToAction="Details"
            />
          ))}
        </div>
      </div>
      <div>
        <div className="w-1/2 px-5">
          <h4 className="text-graytwo">TOP FINANCE PACKAGES</h4>

          {props.topPackages?.map((res) => (
            <Label
              key={res.id}
              amount={`₦${MoneyFormat(res.totalRevenue)}`}
              name={res.name}
              action={() => props.action("Package", res.id)}
              callToAction="Details"
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default OverViewReport;
