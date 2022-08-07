import React from "react";
import Qrcode from "../assets/svg/Qrcode.svg";
import Button from "./Button";

function PaywithScan(props) {
  return (
    <div className="flex flex-col justify-between">
      <h1 className="scan_intro mb-3">Scan QR Visa</h1>
      <p className="text-center scan_sub-text m-3">
        Scan the QR code below with your favourite banking app to complete the
        transaction.
      </p>
      <img src={Qrcode} width="150" height="150" className="self-center" />
      <div className="self-center mt-3">
        <Button
          width="160px"
          height="48px"
          border="1px solid #FDC46B"
          color="#FDC46B"
          name="Save Image"
        />
      </div>
    </div>
  );
}

export default PaywithScan;
