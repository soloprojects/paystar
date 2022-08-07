import React from "react";
import Button from "./Button";

function ReportNav(props) {
  return (
    <div
      className="flex w-full border-b mb-4"
      style={{ borderColor: "#ACB5BD" }}
    >
      <Button
        width="128px"
        height="48px"
        bgColor={props.active === "OVERVIEW" ? "#05668D" : "#FFFFFF"}
        name="OVERVIEW"
        color={props.active === "OVERVIEW" ? "#FFFFFF" : "#05668D"}
        border="1px solid #ACB5BD"
        action={() => {
          props.action("OVERVIEW");
          props.reset();
        }}
        style={{ borderBottomLeftRadius: 0, borderBottomRightRadius: 0 }}
      />
      {/* 
      <Button
        width="128px"
        height="48px"
        bgColor={props.active === "PROVIDERS" ? "#05668D" : "#FFFFFF"}
        name="PROVIDERS"
        color={props.active === "PROVIDERS" ? "#FFFFFF" : "#05668D"}
        border="1px solid #ACB5BD"
        action={() => {
          props.reset();
          props.action("PROVIDERS");
        }}
        style={{ borderBottomLeftRadius: 0, borderBottomRightRadius: 0 }}
      /> */}

      <Button
        width="128px"
        height="48px"
        bgColor={props.active === "AGENTS" ? "#05668D" : "#FFFFFF"}
        name="AGENTS"
        color={props.active === "AGENTS" ? "#FFFFFF" : "#05668D"}
        border="1px solid #ACB5BD"
        action={() => {
          props.action("AGENTS");
          props.reset();
        }}
        style={{ borderBottomLeftRadius: 0, borderBottomRightRadius: 0 }}
      />

      <Button
        width="128px"
        height="48px"
        bgColor={props.active === "PACKAGES" ? "#05668D" : "#FFFFFF"}
        name="PACKAGES"
        color={props.active === "PACKAGES" ? "#FFFFFF" : "#05668D"}
        border="1px solid #ACB5BD"
        action={() => {
          props.action("PACKAGES");
          props.reset();
        }}
        style={{ borderBottomLeftRadius: 0, borderBottomRightRadius: 0 }}
      />
    </div>
  );
}

export default ReportNav;
