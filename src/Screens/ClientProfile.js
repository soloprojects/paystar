import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import ClientDetails from "../Components/ClientDetails";
import ClientTrans from "../Components/ClientTrans";
import HeaderNavClient from "../Components/HeaderNavCkient";

function ClientProfile(props) {
  const location = useLocation();
  const id = location.pathname.split("/");
  const [active, setActive] = useState("PROFILE");
  return (
    <div>
      <HeaderNavClient action={setActive} active={active} />
      <div>
        {active === "PROFILE" && <ClientDetails client_id={id[2]} />}
        {active === "TRANSACTIONS" && <ClientTrans client_id={id[2]} />}
      </div>
    </div>
  );
}

export default ClientProfile;
