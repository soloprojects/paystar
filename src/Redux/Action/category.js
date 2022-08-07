import {
  FETCH_ALL_CATEGORIES,
  ADD_CATEGORY,
  UPDATE_CATEGORY,
} from "../Constant/category";
import { Request } from "../../Utilities/";
import { BASE_URL } from "../../constants/index";

const fetch_categories_list = (payload) => {
  return {
    type: FETCH_ALL_CATEGORIES,
    payload,
  };
};

const add_category = (payload) => {
  return {
    type: ADD_CATEGORY,
    payload,
  };
};

const update_category = (payload) => {
  return {
    type: UPDATE_CATEGORY,
    payload,
  };
};

export const fetchCategoriesList = () => {
  return (dispatch) => {
    return new Promise((resolve, reject) => {
      Request(`${BASE_URL}category`, true, "GET")
        .then((response) => {
          if (response.statusCode === 200) {
            dispatch(fetch_categories_list(response.data));
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

export const addCategory = (data) => {
  return (dispatch) => {
    return new Promise((resolve, reject) => {
      Request(`${BASE_URL}category`, true, "POST", data)
        .then((response) => {
          if (response.statusCode === 200) {
            dispatch(add_category({ _id: response.data, ...data }));
            console.log({ _id: response.payload, ...data });
            return resolve({
              success: true,
              message: response.message || "Category added",
            });
          }
          return resolve({ success: false, message: response.message });
        })
        .catch((error) => {
          return reject({ success: false, message: error });
        });
    });
  };
};

export const updateCategory = (data) => {
  console.log(data);
  return (dispatch) => {
    return new Promise((resolve, reject) => {
      Request(`${BASE_URL}category/${data._id}`, true, "PUT", data)
        .then((response) => {
          console.log(response);
          if (response.statusCode === 200) {
            dispatch(update_category(data));
            return resolve({ success: true, message: "Category updated" });
          }
          return resolve({ success: false, message: response.message });
        })
        .catch((error) => {
          return reject({ success: false, message: error });
        });
    });
  };
};
