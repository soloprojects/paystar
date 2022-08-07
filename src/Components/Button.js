import React from "react";

function Button(props) {
  return (
    <button
      style={{
        width: props.width,
        height: props.height,
        backgroundColor: props.bgColor,
        borderRadius: props.radius ? props.radius : "4px",
        color: props.color ? props.color : "white",
        border: props.border,
        ...props.style,
      }}
      onClick={props.action}
      disabled={props.disabled}
    >
      {props.name}
    </button>
  );
}

export default Button;
