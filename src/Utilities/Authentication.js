import { Request } from "./Request";
import Cookies from "js-cookie";
import { LOGIN_URL } from "../constants/index";
class Auth {
  login(_data) {
    return new Promise((resolve, reject) => {
      Request(`${LOGIN_URL}`, true, "POST", _data)
        .then((response) => {
          if (response.statusCode === 200) {
            var inoneHour = new Date(new Date().getTime() + 60 * 60 * 1000);
            Cookies.set(
              "user",
              { ...response.user, token: response.token },
              {
                expires: inoneHour,
              }
            );
            return resolve({
              success: true,
              message: response.message || "Logged In",
              user: response.user,
              token: response.token,
            });
          }
          return resolve({ success: false, message: response.message });
        })
        .catch((error) => {
          return reject({ success: false, message: error });
        });
    });
  }

  logout() {
    Cookies.remove("user");
    return true;
  }
}

export default new Auth();
