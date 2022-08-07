import {
  FETCH_CLIENT_TRANSACTIONS,
  FETCH_TRANSACTIONS,
} from "../Constant/transactions";

const initialState = {
  client_transactions: [],
  client_transaction_by: {},
  all_transactions: [],
};

const transactions = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_CLIENT_TRANSACTIONS:
      return { ...state, client_transactions: [action.payload] };
    case FETCH_TRANSACTIONS:
      return { ...state, all_transactions: action.payload };
    default:
      return state;
  }
};

export default transactions;
