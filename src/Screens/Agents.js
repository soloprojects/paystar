import React, { useEffect, useState } from "react";
import Search from "../Components/Search";
import Table from "../Components/Table";
import { Link } from "react-router-dom";
import PopupDetails from "../Components/PopupDetails";
import StarRatings from "react-star-ratings";
import ModalAgentReview from "../Components/ModalAgentReview";
import { connect } from "react-redux";
import { fetchAllAgents } from "../Redux/Action/agents";
import { Dimmer, Loader } from "semantic-ui-react";

const Agents = (props) => {
  const [loaded, setLoaded] = useState(false);
  const [fetchingData, setFetcingData] = useState(false);

  const fetchAgents = async () => {
    setFetcingData(true);
    let response = await props.fetchAllAgents();
    try {
      setFetcingData(false);
    } catch (error) {
      setFetcingData(false);
    }
  };

  useEffect(() => {
    if (!loaded) {
      fetchAgents();
    }
    setLoaded(true);
  }, [props, loaded]);

  let { agents_list } = props;

  return (
    <div className="h-full">
      {fetchingData ? (
        <Dimmer active>
          <Loader />
        </Dimmer>
      ) : (
        <>
          {" "}
          <div className="flex">
            <Search />
          </div>
          <div>
            <Table
              tableHead={["Full name", "Agent Level", "Package sold", "Status"]}
            >
              {agents_list.map((agent, index) => {
                return (
                  <tr className="bg-grayfour">
                    <td>
                      {agent.firstName} {agent.lastName}
                    </td>
                    <td>1</td>
                    <td>{agent.packagesSold}</td>
                    <td className="text-mainSuccess">Verified</td>

                    <PopupDetails
                      base="agents"
                      id={agent._id}
                      linkTitle="View Profile"
                      followUpTitle="Verify Agent"
                    />
                  </tr>
                );
              })}
            </Table>
          </div>
        </>
      )}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    agents_list: state.agents.agents_list,
  };
};

export default connect(mapStateToProps, { fetchAllAgents })(Agents);
