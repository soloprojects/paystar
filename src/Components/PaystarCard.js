import React from "react";

function PaystarCard(props) {
  return (
    <div className=" bg-grayfour  p-5 flex-none ">
      <p className="homePage-box_text-head">{props.title}</p>
      {props.children}
    </div>
  );
}

export default PaystarCard;
