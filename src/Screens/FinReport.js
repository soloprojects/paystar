import React, { useState, useEffect } from "react";
import useSWR from "swr";
import ReportNav from "../Components/ReportNav";
import OverViewReport from "../Components/OverViewReport";
import ProviderStat from "../Components/ProviderStat";
import AgentStat from "../Components/AgentStat";
import PackageStat from "../Components/PackageStat";
import ReportDetail from "../Components/ReportDetail";
import Report from "../Utilities/Hydration";

function FinReport(props) {
  const [active, setActive] = useState("OVERVIEW");
  const [detail, setDetail] = useState(false);
  const [whichDetail, setWhichDetail] = useState("none");
  const [currentID, setID] = useState("");

  const { data: stats, error: statError } = useSWR(
    "transaction/stats",
    Report.GetStats
  );

  const { data: topAgents, error: topAgentsError } = useSWR(
    "transaction/topAgents",
    Report.GetStats
  );

  const { data: topPackages, error: topPackagesError } = useSWR(
    "transaction/topPackages",
    Report.GetStats
  );

  const { data: agentReport, error: agentReportError } = useSWR(
    "agent/reports",
    Report.GetStats
  );

  const { data: packageReport, error: packageReportError } = useSWR(
    "package/reports",
    Report.GetStats
  );

  const handleSetDetail = (name, id) => {
    setWhichDetail(name);
    setID(id);
    setDetail(true);
  };
  const reset = () => {
    setWhichDetail("none");
    setDetail(false);
  };
  return (
    <div>
      <ReportNav action={setActive} active={active} reset={reset} />
      <div className="py-5">
        {active === "OVERVIEW" && !detail && (
          <OverViewReport
            action={handleSetDetail}
            data={stats?.data}
            topAgents={topAgents?.data}
            topPackages={topPackages?.data}
          />
        )}
        {/* {active === "PROVIDERS" && !detail && (
          <ProviderStat action={handleSetDetail} />
        )} */}
        {active === "AGENTS" && !detail && (
          <AgentStat action={handleSetDetail} agentReport={agentReport?.data} />
        )}
        {active === "PACKAGES" && !detail && (
          <PackageStat
            action={handleSetDetail}
            packageReport={packageReport?.data}
          />
        )}
        {detail && <ReportDetail isOpen={whichDetail} ID={currentID} />}
      </div>
    </div>
  );
}

export default FinReport;
