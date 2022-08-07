import React from "react";

function BlockHeaders(props) {
  return (
    <div style={{...props.style}}>
      <div className="p-3 bg-secondary rounded text-grayfour w-40">
        <p className="transaction_header-text ">{props.entry}</p>
      </div>
      {props.children}
    </div>
  );
}

export default BlockHeaders;
