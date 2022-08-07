import React from "react";
import Button from "./Button";

function LoginOtp(props) {
  let otp1 = null;
  let otp2 = null;
  let otp3 = null;
  let otp4 = null;
  let otp5 = null;
  let otp6 = null;
  return (
    <div className="mt-10">
      <div className="pl-2 pt-2 rounded  mt-5 mb-5 LoginInputFrame">
        <p className="LoginInputFrame_text text-secondary">OTP</p>
        <div className="flex justify-between w-1/2">
          <input
            className="otp_input"
            ref={(input) => {
              otp1 = input;
            }}
            onChange={(e) => {
              if (e.target.value.length > 0) otp2.focus();
            }}
          />
          <input
            className="otp_input"
            ref={(input) => {
              otp2 = input;
            }}
            onChange={(e) => {
              if (e.target.value.length > 0) otp3.focus();
            }}
          />
          <input
            className="otp_input"
            ref={(input) => {
              otp3 = input;
            }}
            onChange={(e) => {
              if (e.target.value.length > 0) otp4.focus();
            }}
          />
          <input
            className="otp_input"
            ref={(input) => {
              otp4 = input;
            }}
            onChange={(e) => {
              if (e.target.value.length > 0) otp5.focus();
            }}
          />
          <input
            className="otp_input"
            ref={(input) => {
              otp5 = input;
            }}
            onChange={(e) => {
              if (e.target.value.length > 0) otp6.focus();
            }}
          />
          <input
            className="otp_input"
            ref={(input) => {
              otp6 = input;
            }}
          />
        </div>
      </div>
      <Button width="182px" height="48px" bgColor="#FF6B35" name="SIGN IN" />
    </div>
  );
}

export default LoginOtp;
