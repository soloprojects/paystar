import React from "react";
import { NavLink, matchPath } from "react-router-dom";

function SideBarLink(props) {
  return (
    <NavLink
      to={props.path}
      exact={props.exact}
      className={`px-4 p-3  flex`}
      activeClassName="bg-blacktwo"
      onClick={props.close}
    >
      <span>
        <img src={props.icon} />
      </span>
      <span className="sideBar_item ml-2">{props.name}</span>
    </NavLink>
  );
}

export default SideBarLink;
