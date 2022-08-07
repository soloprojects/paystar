import React from "react";
import Button from "./Button";

function PaywithBank(props) {
  return (
    <div>
      <h1 className="payoptions_text mt-10"> Pay with Bank Account</h1>
      <div className="mt-5">
        <p className="label mb-2">Bank</p>
        <select
          name="pets"
          className="select border h-10 w-64 rounded focus:border-secondary border-graytwo outline-none bg-white"
        >
          <option value="">Choose your bank</option>
          <option value="dog">Dog</option>
          <option value="">Choose your bank</option>
          <option value="dog">Dog</option>
        </select>
      </div>

      <div className="mt-5">
        <p className="label mb-2">ACCOUNT NUMBER </p>
        <input
          placeholder="xxxxxxxxxxxxx"
          className="border h-10 w-64 p-2 rounded focus:border-secondary border-graytwo outline-none bg-white"
        />
      </div>
      <div className="mt-5">
        <Button
          width="100%"
          height="48px"
          bgColor="#FF6B35"
          name="Verify Account"
        />
      </div>
    </div>
  );
}

export default PaywithBank;
