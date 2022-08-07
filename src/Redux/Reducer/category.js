import {
  FETCH_ALL_CATEGORIES,
  ADD_CATEGORY,
  UPDATE_CATEGORY,
} from "../Constant/category";

const initialState = {
  categories_list: [],
};

const category = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_ALL_CATEGORIES:
      return { ...state, categories_list: action.payload };
    case ADD_CATEGORY:
      return {
        ...state,
        categories_list: [...state.categories_list, action.payload],
      };
    case UPDATE_CATEGORY:
      return {
        ...state,
        categories_list: [
          ...state.categories_list.filter(
            (element) => element._id !== action.payload._id
          ),
          action.payload,
        ],
      };
    default:
      return state;
  }
};

export default category;
