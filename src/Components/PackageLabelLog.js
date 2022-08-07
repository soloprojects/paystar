import React from "react";

function PackageLabelLog(props) {
  return (
    <div className="bg-grayfour flex justify-between w-full mt-3 rounded p-3">
      <span>{props.name}</span>
      <span className="text-mainSuccess">{props.value}</span>
    </div>
  );
}

export default PackageLabelLog;
