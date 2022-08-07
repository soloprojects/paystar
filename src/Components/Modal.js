import React from "react";
import Close from "../assets/svg/close.svg";
import LogoType from "../assets/svg/logotype.svg";
function Modal(props) {
  return (
    <div id="myModal" className="modal">
      <div
        className={`modal-content flex flex-col justify-between  ${
          props.isPay ? "pay_width" : "other_pay"
        }`}
      >
        <div
          className={`relative p-2 ${
            props.isPay && !props.removeLine && "line"
          }`}
        >
          <p className="text-center modal_title">{props.name}</p>
          {!props.isPay && (
            <img className="absolute top-0 left-0 p-2" src={LogoType} />
          )}
          <img
            className="absolute top-0 right-0 p-2 cursor-pointer"
            src={Close}
            onClick={() => props.close(false)}
          />
        </div>

        <div className="flex-1">{props.children}</div>
      </div>
    </div>
  );
}

export default Modal;
