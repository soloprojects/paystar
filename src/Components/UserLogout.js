import React from "react";
import Off from "../assets/svg/off.svg";
import Auth from "../Utilities/Authentication";
import { useHistory } from "react-router-dom";
function UserLogout(props) {
  const history = useHistory();
  const Logout = () => {
    const res = Auth.logout();
    if (res) {
      history.push("/login");
    }
  };
  return (
    <span className="flex relative">
      <span className="w-40 py-2 pl-2 rounded-full bg-grayfour userName">
        Hello, Admin
      </span>
      <img
        src={Off}
        className=" absolute cursor-pointer"
        style={{ left: "8rem" }}
        onClick={Logout}
      />
    </span>
  );
}

export default UserLogout;
