import React from "react";
import Modal from "./Modal";
import Button from "./Button";

function ModalAlertCardCharge(props) {
  return (
    <Modal isPay={true} removeLine close={props.close}>
      <div className="p-5  lg:p-16 xl:p-16 flex flex-col items-center">
        <p className="charge_alert w-5/6">
          To add a new card, we would have to charge your account with a minimum
          amount of #100.
        </p>
        <div className="my-5">
          <Button
            width="182px"
            height="48px"
            bgColor="#FF6B35"
            name="Continue"
            action={() => props.openCard(true)}
          />
        </div>
      </div>
    </Modal>
  );
}

export default ModalAlertCardCharge;
