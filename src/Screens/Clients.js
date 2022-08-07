import React, { useState, useEffect } from "react";
import Search from "../Components/Search";
import ClientCard from "../Components/ClientCard";
import { fetchAllClients } from "../Redux/Action/clients";
import { Dimmer, Loader, Image, Segment } from "semantic-ui-react";

import { connect } from "react-redux";

function Clients(props) {
  const [loaded, setLoaded] = useState(false);
  const [fetchingData, setFetcingData] = useState(false);
  const fetchClients = async () => {
    setFetcingData(true);
    let response = await props.fetchAllClients();
    try {
      setFetcingData(false);
    } catch (error) {
      setFetcingData(false);
    }
  };

  useEffect(() => {
    if (!loaded) {
      fetchClients();
    }
    setLoaded(true);
  }, [props, loaded]);

  let { clients_list } = props;
  return (
    <div>
      {fetchingData ? (
        <Dimmer active>
          <Loader />
        </Dimmer>
      ) : (
        <>
          <div>
            <Search />
          </div>
          <div className="grid grid-cols-3 gap-2 my-5">
            {clients_list.map((client, index) => {
              return (
                <div className="grid-span-1" key={index}>
                  <ClientCard client={client} />
                </div>
              );
            })}
          </div>{" "}
        </>
      )}
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    clients_list: state.clients.clients_list,
  };
};

export default connect(mapStateToProps, { fetchAllClients })(Clients);
