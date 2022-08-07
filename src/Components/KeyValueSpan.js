import React from "react";

function KeyValueSpan(props) {
  return (
    <div className="flex justify-between  w-full   xl:w-5/6 p-1 md:p-5 lg:p-5 xl:p-5">
      <span className="transaction_sub-text text-gray">{props.entry}</span>
      <span
        className="transaction_sub-text text-left w-1/2"
        style={{ color: "#000000" }}
      >
        {props.value}
      </span>
    </div>
  );
}

export default KeyValueSpan;
