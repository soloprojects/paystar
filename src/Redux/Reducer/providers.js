import {
  FETCH_ALL_PROVIDERS,
  ADD_PROVIDER,
  UPDATE_PROVIDER,
} from "../Constant/providers";

const initialState = {
  providers_list: [],
};

const providers = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_ALL_PROVIDERS:
      return { ...state, providers_list: action.payload };
    case ADD_PROVIDER:
      return {
        ...state,
        providers_list: [...state.providers_list, action.payload],
      };
    case UPDATE_PROVIDER:
      return {
        ...state,
        providers_list: [
          ...state.providers_list.filter(
            (element) => element._id !== action.payload._id
          ),
          action.payload,
        ],
      };
    default:
      return state;
  }
};

export default providers;
