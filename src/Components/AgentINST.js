import React from "react";
import Select from "./Select";
import Button from "./Button";
function AgentINST(props) {
  return (
    <div>
      <p className="mt-5 label"> PROFICIENCY LEVEL</p>
      <div className="w-64">
        <Select data={["Level 2", "Birth", "Health"]} />
      </div>
      <div className="my-10">
        <Button
          width="182px"
          height="48px"
          bgColor="#FF6B35"
          name="Save Changes"
        />
      </div>
    </div>
  );
}

export default AgentINST;
