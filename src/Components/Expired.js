import React from "react";
import { Link } from "react-router-dom";

function Expired(props) {
  let { onClickEdit, category } = props;
  return (
    <div
      className="flex justify-between bg-grayfour p-3 my-5"
      style={{ borderRadius: 4 }}
    >
      <span style={styles.Name} className="text-black">
        {props.name}
      </span>
      <Link
        to={props.path}
        className="text-secondary"
        style={styles.Link}
        onClick={props.action}
      >
        {props.callToAction ? props.callToAction : "Edit"}
      </Link>
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

export default Expired;
