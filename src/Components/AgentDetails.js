import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { fetchAgentProfileDetails } from "../Redux/Action/agents";

const AgentDetails = (props) => {
  const [loaded, setLoaded] = useState(false);
  let { agent_id } = props;
  const fetchAgentProfile = () => {
    props.fetchAgentProfileDetails(agent_id);
  };

  useEffect(() => {
    if (!loaded) {
      fetchAgentProfile();
    }
    setLoaded(true);
  }, [props, loaded]);

  let agent = props.agent_profile_details;

  return (
    <div>
      <h1 className="profile_intro">Personal Details</h1>

      <div className="mt-5">
        <p className="label mb-2">Full Name</p>
        <input
          placeholder="FESTUS OJO EHBOMEN"
          className="border h-10 w-64 p-2 rounded focus:border-secondary border-graytwo outline-none bg-white"
          value={`${agent.firstName} ${agent.lastName}`}
        />
      </div>

      <div className="mt-5">
        <p className="label mb-2">EMAIL</p>
        <input
          placeholder="email@gmail.com"
          className="border h-10 w-64 p-2 rounded focus:border-secondary border-graytwo outline-none bg-white"
          defaultValue={agent.email}
          disabled
        />
      </div>

      <div className="mt-5">
        <p className="label mb-2"> PHONE NUMBER </p>
        <input
          placeholder=" PHONE NUMBER "
          className="border h-10 w-64 p-2 rounded focus:border-secondary border-graytwo outline-none bg-white"
          defaultValue={agent.phone}
          disabled
        />
      </div>

      <div className="mt-5">
        <p className="label mb-2">CITY</p>
        <input
          placeholder="Abia"
          className="border h-10 w-64 p-2 rounded focus:border-secondary border-graytwo outline-none bg-white"
          defaultValue={agent?.city}
          disabled
        />
      </div>
      <h1 className="profile_intro my-5">Credentials</h1>
      <div className="mt-5">
        <p className="label mb-2">NIN</p>
        <input
          placeholder="00000000xxxx"
          className="border h-10 w-64 p-2 rounded focus:border-secondary border-graytwo outline-none bg-white"
          defaultValue={agent?.NIN}
          disabled
        />
      </div>

      <div className="mt-5">
        <p className="label mb-2">BVN</p>
        <input
          placeholder="00000000xxxx"
          className="border h-10 w-64 p-2 rounded focus:border-secondary border-graytwo outline-none bg-white"
          defaultValue={agent?.BVN}
          disabled
        />
      </div>

      <div className="mt-5">
        <p className="label mb-2">QUALIFICATION</p>
        <input
          placeholder="B.Sc Biological Science, UNN"
          className="border h-10 w-64 p-2 rounded focus:border-secondary border-graytwo outline-none bg-white"
          defaultValue={agent?.qualifications}
          disabled
        />
      </div>

      <h1 className="profile_intro my-5">Profile Photo</h1>

      <img
        src="https://images.unsplash.com/photo-1518809595274-1471d16319b7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=611&q=80"
        className="rounded-full w-32 h-32 border-2 border-primary"
      />
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    agent_profile_details: state.agents.agent_profile_details,
  };
};

export default connect(mapStateToProps, { fetchAgentProfileDetails })(
  AgentDetails
);
