import React from "react";

function Card(props) {
  return (
    <div
      className={`p-3  ${props.color ? props.color : "bg-blacktwo"} ${
        props.radius ? props.radius : "rounded"
      } hover:bg-black`}
    >
      {props.children}
    </div>
  );
}

export default Card;
