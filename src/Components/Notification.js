import React from "react";
import success from "../assets/svg/Success.svg";
import close from "../assets/svg/close.svg";

function Notification(props) {
  return (
    <div className="w-full bg-success p-3 rounded flex justify-between">
      <div className="flex-1  flex">
        <img src={success} />
        <h1 className="ml-5">hello</h1>
      </div>
      <img
        src={close}
        className="cursor-pointer"
        onClick={() => props.close(false)}
      />
    </div>
  );
}

export default Notification;
