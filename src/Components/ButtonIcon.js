import React from "react";

function ButtonIcon(props) {
  return (
    <button
      className="p-2 flex justify-center items-center"
      style={{
        width: props.width,
        height: props.height,
        backgroundColor: props.bgColor,
        borderRadius: props.radius ? props.radius : "4px",
        color: props.color ? props.color : "white",
        border: props.border,
      }}
      onClick={props.action}
    >
      <img src={props.icon} className="mr-3" />
      <p className="button_icon_text">{props.name}</p>
    </button>
  );
}

export default ButtonIcon;
