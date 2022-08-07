import React from "react";
import useSWR from "swr";
import LineChart from "../assets/svg/LineChart.svg";
import Money from "../assets/svg/money.svg";
import Box from "../assets/svg/box.svg";
import ReportStat from "./ReportStat";
import Button from "./Button";
import LogDetails from "./LogDetails";
import PackageLabelLog from "./PackageLabelLog";
import Report from "../Utilities/Hydration";
import MoneyFormat from "../Utilities/MoneyFormat";
import { Line } from "react-chartjs-2";

function ReportDetail(props) {
  const { data: packageByID, error: packageError } = useSWR(
    `transaction/packageReportDetails/${props.ID}`,
    Report.GetStats
  );

  const { data: agentByID, error: agentError } = useSWR(
    `transaction/agentReportDetails/${props.ID}`,
    Report.GetStats
  );

  return (
    <div>
      <div className="flex justify-between">
        <div className="mx-5">
          {props.isOpen === "Package" && (
            <Line
              data={{
                labels: [
                  "Jan",
                  "Feb",
                  "Mar",
                  "Apr",
                  "May",
                  "June",
                  "July",
                  "Aug",
                  "Sept",
                  "Oct",
                  "Nov",
                  "Dec",
                ],
                datasets: [
                  {
                    label: "Data",
                    backgroundColor: "rgb(5, 102, 141,0.24)",
                    borderColor: "rgb(5, 102, 141)",
                    data: Object.values(packageByID?.data.byMonth || {}),
                  },
                ],
              }}
              width="700"
              height="400"
              options={{ maintainAspectRatio: false }}
            />
          )}

          {props.isOpen != "Package" && (
            <Line
              data={{
                labels: [
                  "Jan",
                  "Feb",
                  "Mar",
                  "Apr",
                  "May",
                  "June",
                  "July",
                  "Aug",
                  "Sept",
                  "Oct",
                  "Nov",
                  "Dec",
                ],
                datasets: [
                  {
                    label: "Data",
                    backgroundColor: "rgb(5, 102, 141,0.24)",
                    borderColor: "rgb(5, 102, 141)",
                    data: Object.values(agentByID?.data.byMonth || {}),
                  },
                ],
              }}
              width="700"
              height="400"
              options={{ maintainAspectRatio: false }}
            />
          )}
        </div>
        <div>
          {props.isOpen === "Package" && (
            <ReportStat
              icon={Money}
              stat={`₦ ${MoneyFormat(packageByID?.data.totalRevenue)}`}
              label="Total Revenue"
            />
          )}

          {props.isOpen != "Package" && (
            <ReportStat
              icon={Money}
              stat={`₦ ${MoneyFormat(agentByID?.data.totalRevenue)}`}
              label="Total Revenue"
            />
          )}

          <div className="mt-10">
            <Button
              width="182px"
              height="48px"
              name="Download"
              color="#FDC46B"
              border="1px solid #FDC46B"
            />
          </div>
        </div>
      </div>
      {/* <div className="my-10 mx-5">
        {props.isOpen !== "Package" && <LogDetails />}
        {props.isOpen == "Package" && (
          <div className="w-1/2">
            <p className="homePage-box_text-head">TOP LOCATIONS </p>
            <PackageLabelLog name="New Jersey" value="45%" />
          </div>
        )}
      </div> */}
    </div>
  );
}

export default ReportDetail;
