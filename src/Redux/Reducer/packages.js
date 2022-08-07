import {
  FETCH_ALL_PACKAGES,
  ADD_PACKAGE,
  UPDATE_PACKAGE,
} from "../Constant/packages";

const initialState = {
  packages_list: [],
};

const packages = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_ALL_PACKAGES:
      return { ...state, packages_list: action.payload };
    case ADD_PACKAGE:
      return {
        ...state,
        packages_list: [...state.packages_list, action.payload],
      };
    case UPDATE_PACKAGE:
      return {
        ...state,
        packages_list: [
          ...state.packages_list.filter(
            (element) => element._id === action.payload._id
          ),
          action.payload,
        ],
      };
    default:
      return state;
  }
};

export default packages;
