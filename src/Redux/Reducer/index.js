import { combineReducers } from "redux";
// import { routerReducer } from "react-router-redux";
import agents from "./agents";
import category from "./category";
import clients from "./clients";
import packages from "./packages";
import providers from "./providers";
import transactions from "./transactions";

const reducers = combineReducers({
  agents,
  category,
  clients,
  packages,
  providers,
  transactions,
});

export default reducers;
