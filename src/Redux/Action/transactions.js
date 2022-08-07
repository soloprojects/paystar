import {
  FETCH_CLIENT_TRANSACTIONS,
  FETCH_TRANSACTIONS,
} from "../Constant/transactions";
import { Request } from "../../Utilities/";
import {
  BASE_URL,
  TRANSACTION_ENDPOINT,
  CLIENT_ENDPOINT,
} from "../../constants/index";

const fetch_client_transactions = (payload) => {
  return {
    type: FETCH_CLIENT_TRANSACTIONS,
    payload,
  };
};

const fetch_all_transactions = (payload) => {
  return {
    type: FETCH_TRANSACTIONS,
    payload,
  };
};

export const fetchClientTransactions = (client_id) => {
  return (dispatch) => {
    return new Promise((resolve, reject) => {
      Request(
        `${BASE_URL}${TRANSACTION_ENDPOINT}/${CLIENT_ENDPOINT}/${client_id}`,
        true,
        "GET"
      )
        .then((response) => {
          if (response.statusCode === 200) {
            dispatch(fetch_client_transactions(response.data));
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

export const fetchAllTransactions = () => {
  return (dispatch) => {
    return new Promise((resolve, reject) => {
      Request(`${BASE_URL}${TRANSACTION_ENDPOINT}/all`, true, "GET")
        .then((response) => {
          if (response.statusCode === 200) {
            dispatch(fetch_all_transactions(response.data));
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
