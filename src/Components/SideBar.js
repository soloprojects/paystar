import React from "react";
import LogoInversed from "../assets/svg/Logo.svg";
import Help from "../assets/svg/Help.svg";
import SideBarLink from "./SideBarLink";
import Card from "./Card";
import RoutesHome from "../Config/RoutesHome";
import RoutesAccount from "../Config/RoutesFinance";
import close from "../assets/svg/closewhite.svg";
import circle from "../assets/svg/Cirlce.svg";
import RoutesFinance from "../Config/RoutesFinance";
import RoutesUser from "../Config/RoutesUser";
import RoutesTransaction from "../Config/RoutesTransaction";
import { Link } from "react-router-dom";

function SideBar(props) {
  return (
    <div className="bg-secondary h-full flex flex-col justify-between ">
      <div className="p-2 flex justify-end md:hidden lg:hidden block">
        <img src={close} onClick={() => props.close(false)} />
      </div>

      <div className="p-4">
        <img src={LogoInversed} />
      </div>
      <div className="overflow-y-auto flex-1 mt-4" id="style-7">
        {RoutesHome.map((route, index) =>
          route.isHead ? (
            <p key={index} className="sideBar_item-head px-4 mt-4 mb-4">
              {route.name}
            </p>
          ) : (
            <SideBarLink
              key={index}
              close={() => props.close(false)}
              path={route.path}
              name={route.name}
              icon={route.icon}
              exact
            />
          )
        )}

        {RoutesFinance.map((route, index) => {
          if (route.ignore) return;
          return route.isHead ? (
            <p key={index} className="sideBar_item-head px-4 mt-4 mb-4">
              {route.name}
            </p>
          ) : (
            <SideBarLink
              key={index}
              close={() => props.close(false)}
              path={route.path}
              name={route.name}
              icon={route.icon}
              exact
            />
          );
        })}

        {RoutesUser.map((route, index) => {
          if (route.ignore) return;
          return route.isHead ? (
            <p key={index} className="sideBar_item-head px-4 mt-4 mb-4">
              {route.name}
            </p>
          ) : (
            <SideBarLink
              key={index}
              close={() => props.close(false)}
              path={route.path}
              name={route.name}
              icon={route.icon}
              exact
            />
          );
        })}

        {RoutesTransaction.map((route, index) => {
          if (route.ignore) return;
          return route.isHead ? (
            <p key={index} className="sideBar_item-head px-4 mt-4 mb-4">
              {route.name}
            </p>
          ) : (
            <SideBarLink
              key={index}
              close={() => props.close(false)}
              path={route.path}
              name={route.name}
              icon={route.icon}
              exact
            />
          );
        })}
      </div>
      <div className="p-4">
        <div className="border-t  border-grayFour py-4  ">
          {/* <Link to="/audit">
            <div className="my-5">
              <Card opacity={true}>
                <div className="flex justify-center text-white flex-no-wrap cursor-pointer">
                  <img src={circle} />
                  <span id="support_text" className="ml-2  ">
                    AUDIT LOGS
                  </span>
                </div>
              </Card>
            </div>
          </Link> */}
          <Card opacity={true}>
            <div className="flex justify-center text-white flex-no-wrap cursor-pointer">
              <img src={Help} />
              <span id="support_text" className="ml-2  ">
                support
              </span>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}

export default SideBar;
