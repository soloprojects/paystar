import { FETCH_ALL_CLIENTS, FETCH_CLIENT_DETAILS } from "../Constant/clients";
import { Request } from "../../Utilities/";
import { BASE_URL, CLIENT_ENDPOINT } from "../../constants/index";

const fetch_all_clients = (payload) => {
  return {
    type: FETCH_ALL_CLIENTS,
    payload,
  };
};

const fetch_client_profile_details = (payload) => {
  return {
    type: FETCH_CLIENT_DETAILS,
    payload,
  };
};

export const fetchAllClients = () => {
  return (dispatch) => {
    return new Promise((resolve, reject) => {
      Request(`${BASE_URL}${CLIENT_ENDPOINT}`, true, "GET")
        .then((response) => {
          if (response.statusCode === 200) {
            dispatch(fetch_all_clients(response.data));
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

export const fetchClientProfileDetails = (client_id) => {
  return (dispatch) => {
    return new Promise((resolve, reject) => {
      Request(`${BASE_URL}${CLIENT_ENDPOINT}/${client_id}`, true, "GET")
        .then((response) => {
          if (response.statusCode === 200) {
            dispatch(fetch_client_profile_details(response.data));
            return resolve({ success: true, message: response.message });
          }
          return resolve({ success: false, message: response.message });
        })
        .catch((error) => {
          return reject({ success: false, message: error });
        });
    });
  };
};
