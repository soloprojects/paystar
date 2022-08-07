import React, { useState } from "react";
import Button from "./Button";

function HeaderNavClient(props) {
  return (
    <div
      className="flex w-full border-b mb-4"
      style={{ borderColor: "#ACB5BD" }}
    >
      <Button
        width="128px"
        height="48px"
        bgColor={props.active == "PROFILE" ? "#05668D" : "#FFFFFF"}
        name="PROFILE"
        color={props.active == "PROFILE" ? "#FFFFFF" : "#05668D"}
        border="1px solid #ACB5BD"
        action={() => props.action("PROFILE")}
        style={{ borderBottomLeftRadius: 0, borderBottomRightRadius: 0 }}
      />

      <Button
        width="128px"
        height="48px"
        bgColor={props.active == "TRANSACTIONS" ? "#05668D" : "#FFFFFF"}
        name="TRANSACTIONS"
        color={props.active == "TRANSACTIONS" ? "#FFFFFF" : "#05668D"}
        border="1px solid #ACB5BD"
        action={() => props.action("TRANSACTIONS")}
        style={{ borderBottomLeftRadius: 0, borderBottomRightRadius: 0 }}
      />
    </div>
  );
}

export default HeaderNavClient;
