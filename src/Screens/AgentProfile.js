import React, { useState } from "react";
import HeaderNav from "../Components/HeaderNav";
import AgentDetails from "../Components/AgentDetails";
import AgentClients from "../Components/AgentClients";
import AgentINST from "../Components/AgentINST";
import AgentReview from "../Components/AgentReview";
import { useLocation } from "react-router-dom";

function AgentProfile(props) {
  const location = useLocation();
  const id = location.pathname.split("/");
  const [active, setActive] = useState("PROFILE");
  let agent_id = id[2];
  return (
    <div>
      <HeaderNav action={setActive} active={active} agent_id={agent_id} />
      {active === "PROFILE" && <AgentDetails agent_id={agent_id} />}
      {active === "Clients" && <AgentClients agent_id={agent_id} />}
      {active === "INSTITUTE" && <AgentINST agent_id={agent_id} />}
      {active === "REVIEWS" && <AgentReview agent_id={agent_id} />}
    </div>
  );
}

export default AgentProfile;
