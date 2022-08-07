import React, { useState, useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { OpenBackgroundBlurContext } from "../App";

function PopupDetails(props) {
  const context = useContext(OpenBackgroundBlurContext);
  const [isOpen, setOpen] = useState(false);

  useEffect(() => {
    if (!context.value) setOpen(false);
  }, [context.value]);

  const handleClickOpen = () => {
    setOpen(true);
    context.action(true);
  };

  const handleClickClose = () => {
    setOpen(false);
    context.action(false);
  };

  return (
    <td className="cursor-pointer relative ">
      <p className="font-black font-bold text-xl" onClick={handleClickOpen}>
        ...
      </p>
      <div
        className={`absolute bg-white pop-card ${
          isOpen && context.value ? "block" : "hidden"
        } w-40 p-3 z-50`}
      >
        <Link
          to={{
            pathname: `/${props.base}/${props.id}`,
            state: props?.transaction,
          }}
          onClick={handleClickClose}
        >
          {props.linkTitle}
        </Link>
        <p className="pt-5 hover:text-black text-graytwo">
          {props.followUpTitle}
        </p>
      </div>
    </td>
  );
}

export default PopupDetails;
