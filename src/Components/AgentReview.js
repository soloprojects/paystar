import React from "react";
import Review from "./Review";
import Select from "./Select";

function AgentReview(props) {
  return (
    <div>
      <div className="flex my-5">
        <span className="mt-5 mr-3">Filter :</span>
        <div className="w-40">
          <Select data={["Rating"]} />
        </div>
      </div>
      <Review />
    </div>
  );
}

export default AgentReview;
