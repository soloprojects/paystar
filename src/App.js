import React, { useState, useReducer, createContext, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./App.css";
import Routes from "./Config/Routes";
import SideBar from "./Components/SideBar";
import UserLogout from "./Components/UserLogout";
import Authentication from "./Screens/Authentication";
import { ToastContainer } from "react-toastify";
import PrivateRoute from "./Components/Private";
import Cookies from "js-cookie";
export const OpenBackgroundBlurContext = createContext();

const App = (props) => {
  const [open, setOpen] = useState(false);
  const [isBlur, setOpenBlur] = useState(false);
  const [observer, setObserver] = useState(false);
  const user = Cookies.getJSON("user");

  if (user) {
    let timer = setInterval(() => {
      console.log("res");
      if (!Cookies.getJSON("user")) {
        setObserver(true);
      }
    }, 6000);
  }

  useEffect(() => {
    setObserver(false);
  }, []);

  return (
    <>
      <OpenBackgroundBlurContext.Provider
        value={{ action: setOpenBlur, value: isBlur }}
      >
        {observer && (
          <div className="bg-grayfour">
            <p className="text-error text-center">
              Session expired, please login again
            </p>
          </div>
        )}
        <Router>
          <Switch>
            <Route path="/login" children={<Authentication />} />
            <div className="flex h-screen overflow-y-hidden text-white">
              <div
                className={`md:block lg:block xl:block ${
                  open ? "block" : "hidden"
                } w-64 flex-none`}
              >
                <SideBar close={setOpen} />
              </div>

              <div
                className={`flex-1 overflow-y-auto relative flex flex-col text-black ${
                  open && "pl-32"
                } ${open && "opacity-50"}`}
              >
                {isBlur && (
                  <div
                    className="h-full w-full bg-blur z-20 absolute"
                    onClick={() => setOpenBlur(false)}
                  ></div>
                )}

                <div className="py-3 px-10 flex justify-between" id="Header">
                  <Switch>
                    {Routes.map(
                      (route, index) =>
                        !route.isHead && (
                          <Route
                            key={index}
                            path={route.path}
                            exact={route.exact}
                            children={route.child}
                          />
                        )
                    )}
                  </Switch>

                  <span
                    className="md:hidden lg:hidden xl:hidden block"
                    onClick={() => setOpen(true)}
                  >
                    &#9776;
                  </span>
                  <UserLogout />
                </div>
                <div className="flex-1   py-3 px-10" id="Body">
                  {Routes.map(
                    (route, index) =>
                      !route.isHead && (
                        <PrivateRoute
                          key={index}
                          path={route.path}
                          exact={route.exact}
                          children={route.main}
                        />
                      )
                  )}
                </div>
              </div>
            </div>
          </Switch>
        </Router>
      </OpenBackgroundBlurContext.Provider>
    </>
  );
};

export default App;
