import {
  FETCH_ALL_PACKAGES,
  ADD_PACKAGE,
  UPDATE_PACKAGE,
} from "../Constant/packages";
import { Request } from "../../Utilities/";
import { BASE_URL } from "../../constants/index";

const fetch_packages_list = (payload) => {
  return {
    type: FETCH_ALL_PACKAGES,
    payload,
  };
};

const add_package = (payload) => {
  return {
    type: ADD_PACKAGE,
    payload,
  };
};

const update_package = (payload) => {
  return {
    type: UPDATE_PACKAGE,
    payload,
  };
};

export const fetchAllPackages = () => {
  return (dispatch) => {
    return new Promise((resolve, reject) => {
      Request(`${BASE_URL}package`, true, "GET")
        .then((response) => {
          if (response.statusCode === 200) {
            dispatch(fetch_packages_list(response.data));
            return resolve({ success: true, message: response });
          }
          return resolve({ success: false, message: response.message });
        })
        .catch((error) => {
          return reject({ success: false, message: error });
        });
    });
  };
};

export const addPackage = (data) => {
  return (dispatch) => {
    return new Promise((resolve, reject) => {
      Request(`${BASE_URL}package`, true, "POST", data)
        .then((response) => {
          console.log(response)
          if (response.statusCode === 200) {
            dispatch(add_package({ _id: response.data, ...data }));
            console.log({ _id: response.payload, ...data });
            return resolve({
              success: true,
              message: response.message || "package added",
            });
          }
          return resolve({ success: false, message: response.message });
        })
        .catch((error) => {
          console.log(error)

          return reject({ success: false, message: error });
        });
    });
  };
};

export const updatePackage = (data) => {
  console.log(data);
  return (dispatch) => {
    return new Promise((resolve, reject) => {
      Request(`${BASE_URL}package/${data._id}`, true, "PUT", data)
        .then((response) => {
          console.log(response);
          if (response.statusCode === 200) {
            dispatch(update_package({ _id: response.data, data }));
            return resolve({ success: true, message: "package updated" });
          }
          return resolve({ success: false, message: response.message });
        })
        .catch((error) => {
          return reject({ success: false, message: error });
        });
    });
  };
};
