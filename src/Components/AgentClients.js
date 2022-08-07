import React, { useEffect, useState } from "react";
import ClientCard from "./ClientCard";
import Search from "./Search";
import { fetchAgentClients } from "../Redux/Action/agents";
import { connect } from "react-redux";
import { Dimmer, Loader } from "semantic-ui-react";
function AgentClients(props) {
  const [loaded, setLoaded] = useState(false);
  const [fetchingData, setFetchingData] = useState(false);
  let { agent_id } = props;
  const fetch = async () => {
    setFetchingData(true);
    let response = await props.fetchAgentClients(agent_id);
    try {
      setFetchingData(false);
    } catch (error) {
      setFetchingData(false);
    }
  };

  let { agents_clients } = props;
  useEffect(() => {
    if (!loaded) {
      fetch();
    }
    setLoaded(true);
  }, [props, loaded]);

  return (
    <div>
      {fetchingData ? (
        <Dimmer active>
          <Loader />
        </Dimmer>
      ) : (
        <>
          <div className="my-5">
            <Search />
          </div>
          {agents_clients.map((client, index) => {
            return <ClientCard client={client} />;
          })}
        </>
      )}
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    agents_clients: state.agents.agents_clients,
  };
};
export default connect(mapStateToProps, { fetchAgentClients })(AgentClients);
