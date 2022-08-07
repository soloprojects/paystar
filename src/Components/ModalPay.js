import React from "react";
import Modal from "./Modal";
import Button from "./Button";

function ModalPay(props) {
  return (
    <Modal isPay={true} name="Payment Method" close={props.close}>
      <div className="p-5  lg:p-16 xl:p-16">
        <div className="m-5 my-8">
          <Button
            width="100%"
            height="64px"
            bgColor="transparent"
            color="#05668D"
            border="1px solid #05668D"
            name="Use Existing Card Mastercard (***5672)"
          />
        </div>
        <div className="m-5">
          <Button
            width="100%"
            height="64px"
            bgColor="transparent"
            color="#05668D"
            border="1px solid #05668D"
            name="Other Payment Methods"
            action={() => props.action()}
          />
        </div>
      </div>
    </Modal>
  );
}

export default ModalPay;
