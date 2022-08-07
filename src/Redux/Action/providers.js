import {
  FETCH_ALL_PROVIDERS,
  ADD_PROVIDER,
  UPDATE_PROVIDER,
} from "../Constant/providers";
import { Request } from "../../Utilities/";
import { BASE_URL } from "../../constants/index";

const fetch_providers_list = (payload) => {
  return {
    type: FETCH_ALL_PROVIDERS,
    payload,
  };
};

const add_provider = (payload) => {
  return {
    type: ADD_PROVIDER,
    payload,
  };
};

const update_provider = (payload) => {
  return {
    type: UPDATE_PROVIDER,
    payload,
  };
};

export const fetchAllProviders = () => {
  return (dispatch) => {
    return new Promise((resolve, reject) => {
      Request(`${BASE_URL}provider`, true, "GET")
        .then((response) => {
          if (response.statusCode === 200) {
            dispatch(fetch_providers_list(response.data));
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

export const addProvider = (data) => {
  console.log(data)
  return (dispatch) => {
    return new Promise((resolve, reject) => {
      Request(`${BASE_URL}provider`, true, "POST", data)
        .then((response) => {
          console.log(response, "Response")
          if (response.statusCode === 200) {
            dispatch(add_provider({ _id: response.data, ...data }));
            return resolve({
              success: true,
              message: response.message || "Provider added",
            });
          }
          return resolve({ success: false, message: response.message });
        })
        .catch((error) => {
          console.log(error, "Error")
          return reject({ success: false, message: error });
        });
    });
  };
};

export const updateProvider = (data) => {
  return (dispatch) => {
    return new Promise((resolve, reject) => {
      Request(`${BASE_URL}provider/${data._id}`, true, "PUT", data)
        .then((response) => {
          console.log(response);
          if (response.statusCode === 200) {
            dispatch(update_provider(data));
            return resolve({ success: true, message: "Provider updated" });
          }
          return resolve({ success: false, message: response.message });
        })
        .catch((error) => {
          return reject({ success: false, message: error });
        });
    });
  };
};
