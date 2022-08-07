import { FETCH_ALL_CLIENTS, FETCH_CLIENT_DETAILS } from "../Constant/clients";

const initialState = {
  clients_list: [],
  client_profile_details: {},
};

const clients = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_ALL_CLIENTS:
      return { ...state, clients_list: action.payload };
    case FETCH_CLIENT_DETAILS:
      return { ...state, client_profile_details: action.payload };
    default:
      return state;
  }
};

export default clients;
