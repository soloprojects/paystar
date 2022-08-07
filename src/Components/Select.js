import React from "react";

function Select(props) {
  return (
    <div className="mt-3">
      <select
        className="p-3 focus:outline-none w-full border border-secondary rounded active:bg-orange-100"
        value={props.value}
        onChange={props.onChange}
      >
        {props.data &&
          props.data.map((insure, index) => (
            <option value={insure.value} key={index} className="focus:outline-none">
              {insure.label}
            </option>
          ))}
      </select>
    </div>
  );
}

export default Select;
