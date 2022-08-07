import React, { useState } from "react";
import Modal from "./Modal";
import Button from "./Button";
import PaywithCard from "./PaywithCard";
import PaywithBank from "./PaywithBank";
import PaywithScan from "./PaywithScan";

function ModalPayOptions(props) {
  const [active, setActive] = useState("card");
  return (
    <Modal close={props.action}>
      <div className="modal-height flex flex-col justify-between">
        <div className="flex-1 p-8 lg:p-16 xl:p-16  payoptions_page">
          {active == "card" && <PaywithCard />}
          {active == "bank" && <PaywithBank />}
          {active == "scan" && <PaywithScan />}
        </div>
        <div className=" flex">
          <div
            onClick={() => setActive("card")}
            className={`w-1/3 p-5 md:p-8 lg:p-8 xl:p-8 cursor-pointer  payoptions ${
              active == "card" ? "bg-lightsecondary" : ""
            }`}
          >
            <p className="payoptions_text text-secondary">Pay with Card</p>
          </div>
          <div
            onClick={() => setActive("bank")}
            className={`w-1/3 p-5 md:p-8 lg:p-8 xl:p-8 cursor-pointer bg-grayfour payoptions ${
              active == "bank" ? "bg-lightsecondary" : ""
            }`}
          >
            <p className="payoptions_text text-secondary">
              Pay with Bank Account
            </p>
          </div>
          <div
            onClick={() => setActive("scan")}
            className={`w-1/3 p-5 md:p-8 lg:p-8 xl:p-8 bg-grayfour cursor-pointer payoptions ${
              active == "scan" ? "bg-lightsecondary" : ""
            }`}
          >
            <p className="payoptions_text text-secondary">Scan QR Visa</p>
          </div>
        </div>
      </div>
    </Modal>
  );
}

export default ModalPayOptions;
