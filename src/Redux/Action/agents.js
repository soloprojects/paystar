import {
  FETCH_ALL_AGENTS,
  FETCH_AGENT_PROFILE_DETAILS,
  FETCH_AGENT_CLIENTS,
} from "../Constant/agents";
import { Request } from "../../Utilities/";
import {
  BASE_URL,
  AGENT_ENDPOINT,
  CLIENT_ENDPOINT,
} from "../../constants/index";

const fetch_all_agents = (payload) => {
  return {
    type: FETCH_ALL_AGENTS,
    payload,
  };
};

const fetch_agent_profile_details = (payload) => {
  return {
    type: FETCH_AGENT_PROFILE_DETAILS,
    payload,
  };
};

const fetch_agent_clients = (payload) => {
  return {
    type: FETCH_AGENT_CLIENTS,
    payload,
  };
};

export const fetchAllAgents = () => {
  return (dispatch) => {
    return new Promise((resolve, reject) => {
      Request(`${BASE_URL}${AGENT_ENDPOINT}`, true, "GET")
        .then((response) => {
          if (response.statusCode === 200) {
            dispatch(fetch_all_agents(response.data));
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

export const fetchAgentProfileDetails = (agent_id) => {
  return (dispatch) => {
    return new Promise((resolve, reject) => {
      Request(`${BASE_URL}${AGENT_ENDPOINT}/${agent_id}`, true, "GET")
        .then((response) => {
          if (response.statusCode === 200) {
            dispatch(fetch_agent_profile_details(response.data));
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

export const fetchAgentClients = (agent_id) => {
  return (dispatch) => {
    return new Promise((resolve, reject) => {
      Request(
        `${BASE_URL}${AGENT_ENDPOINT}/${CLIENT_ENDPOINT}s/${agent_id}`,
        true,
        "GET"
      )
        .then((response) => {
          if (response.statusCode === 200) {
            dispatch(fetch_agent_clients(response.data));
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
