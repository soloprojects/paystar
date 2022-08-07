import React, { useState, useEffect } from "react";

function CheckBox(props) {
  const [ischecked, setChecked] = useState(false);

  useEffect(() => {
    if (props.checked) setChecked(true);
  }, []);

  const handleClick = () => setChecked((prev) => !prev);
  return (
    <label class="container">
      {props.label}
      <input type="checkbox" checked={ischecked} onChange={handleClick} />
      <span class="checkmark"></span>
    </label>
  );
}

export default CheckBox;
