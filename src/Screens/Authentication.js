import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { Dimmer, Loader, Image, Segment } from "semantic-ui-react";
import MainLogo from "../assets/svg/mainlogo.svg";
import Button from "../Components/Button";
import Auth from "../Utilities/Authentication";
import { notifyError } from "../Utilities/Notify";
import { ToastContainer } from "react-toastify";
function Authentication(props) {
  const [isLoggin, setIsLoggin] = useState(false);
  const [username, setName] = useState("");
  const [password, setPass] = useState("");
  const history = useHistory();

  const handleLogin = () => {
    setIsLoggin(true);
    Auth.login({
      email: username,
      password: password,
    })
      .then((res) => {
        console.log(res);
        setIsLoggin(false);
        if (res.success) history.push("/");
      })
      .catch((error) => {
        setIsLoggin(false);
        notifyError(error.message);
      });
  };

  return (
    <div className="h-screen  py-5  flex flex-col  md:px-10 sm:px-40 lg:px-10 xl:px-40 px-5 relative ">
      <ToastContainer />
      <div className="absolute">
        <img src={MainLogo} />
      </div>
      <div className="flex flex-col  flex-1 md:justify-center lg:justify-center xl:justify-center pt-32 md:pt-0 xl:pt-0 lg:p-0">
        <div className=" bg-white text-graythree rounded-sm bg-secondary xl:h-64 lg:h-64 md:h-64   p-10">
          <div className=" authentication_text-frame lg:p-10 xl:p-10">
            <h1 className="authentication_text-head pb-3">
              Login to Admin Portal
            </h1>
            <p className="authentication_text">
              Please input the correct username and password to sign in.
            </p>
          </div>
        </div>

        <div className=" bg-white rounded-sm bg-white authenticationcard xl:absolute md:absolute lg:absolute p-20 md:py-20 lg:py-20 xl:py-20">
          <h1 className="authenticationcard_text-head">Login</h1>

          <div className="my-5 rounded border border-secondary p-5">
            <p className="LoginInputFrame_text text-secondary my-2">USERNAME</p>
            <input
              className="w-full outline-none"
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="my-5 rounded border border-secondary p-5">
            <p className="LoginInputFrame_text text-secondary my-2">PASSWORD</p>
            <input
              className="w-full outline-none"
              name="password"
              onChange={(e) => setPass(e.target.value)}
            />
          </div>

          <Button
            width="182px"
            height="48px"
            bgColor="#FF6B35"
            name="SIGN IN"
            action={handleLogin}
          />
        </div>

        {isLoggin && (
          <Dimmer active>
            <Loader />
          </Dimmer>
        )}
      </div>
    </div>
  );
}

export default Authentication;
