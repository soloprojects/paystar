import React from "react";
import Modal from "./Modal";
import Button from "./Button";

function ModalCardPayment(props) {
  let mm = null;
  let yy = null;
  let cvv = null;
  return (
    <Modal isPay={true} removeLine close={props.close}>
      <div className="flex  flex-col items-center ">
        <div className="p-12">
          <p className="modal_title">Add New Card</p>
          <div className=" card_number pl-2  rounded  mt-5 mb-2 LoginInputFrame border focus-within:border-secondary border-graytwo">
            <p className="LoginInputFrame_text text-secondary my-2">
              CARD NUMBER
            </p>
            <input
              placeholder="xxxx xxxx xxxx xxxx"
              className="w-full outline-none"
            />
          </div>
          <div className="flex">
            <div className="pl-2 pt-2 rounded  mt-2 mb-5 LoginInputFrame-small focus-within:border-secondary border-graytwo border">
              <p className="LoginInputFrame_text text-secondary mb-3">
                EXPIRY DATE
              </p>
              <div className="flex  w-full">
                <input
                  className="w-1/4 outline-none"
                  placeholder="MM"
                  ref={(input) => {
                    mm = input;
                  }}
                  onChange={(e) => {
                    if (e.target.value.length > 1) yy.focus();
                  }}
                />
                <span className="mx-2 text-secondary">/</span>
                <input
                  className="w-1/4 outline-none"
                  placeholder="YY"
                  ref={(input) => {
                    yy = input;
                  }}
                  onChange={(e) => {
                    if (e.target.value.length > 1) cvv.focus();
                  }}
                />
              </div>
            </div>

            <div className="pl-2 pt-2 rounded ml-4  mt-2 mb-5 LoginInputFrame-small focus-within:border-secondary border-graytwo border">
              <p className="LoginInputFrame_text text-secondary mb-3">CVV</p>
              <div className="flex justify-between w-full">
                <input
                  className="w-1/2 outline-none"
                  placeholder="XXX"
                  ref={(input) => {
                    cvv = input;
                  }}
                  onChange={(e) => {}}
                />
              </div>
            </div>
          </div>
          <Button
            width="100%"
            height="48px"
            bgColor="#FF6B35"
            name="Complete Payment"
          />
        </div>
      </div>
    </Modal>
  );
}

export default ModalCardPayment;
