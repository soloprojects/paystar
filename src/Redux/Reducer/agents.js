import {
  FETCH_ALL_AGENTS,
  FETCH_AGENT_PROFILE_DETAILS,
  FETCH_AGENT_CLIENTS,
} from "../Constant/agents";

const initialState = {
  agents_list: [],
  agent_profile_details: {},
  agents_clients: [],
};

const agents = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_ALL_AGENTS:
      return { ...state, agents_list: action.payload };
    case FETCH_AGENT_PROFILE_DETAILS:
      return { ...state, agent_profile_details: action.payload };
    case FETCH_AGENT_CLIENTS:
      return { ...state, agents_clients: action.payload };
    default:
      return state;
  }
};

export default agents;
