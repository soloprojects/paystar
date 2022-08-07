import React from "react";
import Button from "./Button";

function LoginNumber(props) {
  return (
    <div className="mt-10">
      <div className="pl-2 pt-2 rounded  mt-5 mb-5 LoginInputFrame">
        <p className="LoginInputFrame_text text-secondary">phone number</p>
        <input style={{ height: "42px", outline: "none" }} />
      </div>
      <Button width="182px" height="48px" bgColor="#FF6B35" name="SEND OTP" />
    </div>
  );
}

export default LoginNumber;
