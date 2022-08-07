import React, { useState } from "react";
import Button from "./Button";

function HeaderNav(props) {
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
        bgColor={props.active == "Clients" ? "#05668D" : "#FFFFFF"}
        name="Clients"
        color={props.active == "Clients" ? "#FFFFFF" : "#05668D"}
        border="1px solid #ACB5BD"
        action={() => props.action("Clients")}
        style={{ borderBottomLeftRadius: 0, borderBottomRightRadius: 0 }}
      />

      <Button
        width="128px"
        height="48px"
        bgColor={props.active == "INSTITUTE" ? "#05668D" : "#FFFFFF"}
        name="INSTITUTE"
        color={props.active == "INSTITUTE" ? "#FFFFFF" : "#05668D"}
        border="1px solid #ACB5BD"
        action={() => props.action("INSTITUTE")}
        style={{ borderBottomLeftRadius: 0, borderBottomRightRadius: 0 }}
      />

      <Button
        width="128px"
        height="48px"
        bgColor={props.active == "REVIEWS" ? "#05668D" : "#FFFFFF"}
        name="REVIEWS"
        color={props.active == "REVIEWS" ? "#FFFFFF" : "#05668D"}
        border="1px solid #ACB5BD"
        action={() => props.action("REVIEWS")}
        style={{ borderBottomLeftRadius: 0, borderBottomRightRadius: 0 }}
      />
    </div>
  );
}

export default HeaderNav;
