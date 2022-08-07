import React from "react";
import { Link } from "react-router-dom";
function Label(props) {
  return (
    <div
      className="flex justify-between bg-grayfour p-3 my-5"
      style={{ borderRadius: 4 }}
    >
      <span style={styles.Name} className="text-black flex-1">
        {props.name}
      </span>

      <span className="font-medium" className="text-black flex-1">
        {props.amount}
      </span>

      <span
        className="text-secondary cursor-pointer flex-1 "
        style={styles.Link}
        onClick={props.action}
      >
        {props.callToAction ? props.callToAction : "Edit"}
      </span>
    </div>
  );
}

const styles = {
  Name: {
    fontSize: "12px",
    lineHeight: "19px",
    letterSpacing: "0.44px",
  },

  Link: {
    fontWeight: 500,
    fontSize: "12px",
    lineHeight: "15px",
    letterSpacing: "0.4px",
  },
};

export default Label;
