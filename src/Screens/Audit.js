import React from "react";
import LogDetails from "../Components/LogDetails";
import { Select } from "semantic-ui-react";

function Audit(props) {
  return (
    <div>
      <div className="flex my-5">
        <span>Filter:</span>
        <div className="mx-3">
          <Select placeholder="Users" />
        </div>
        <Select placeholder="Date" />
      </div>
      <LogDetails audit />
    </div>
  );
}

export default Audit;
