import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { fetchClientProfileDetails } from "../Redux/Action/clients";

function ClientDetails(props) {
  const [loaded, setLoaded] = useState(false);
  let { client_id } = props;
  const fetchClientProfile = () => {
    props.fetchClientProfileDetails(client_id);
  };

  useEffect(() => {
    if (!loaded) {
      fetchClientProfile();
    }
    setLoaded(true);
  }, [props, loaded]);

  let client = props.client_profile_details;
  return (
    <div>
      <h1 className="profile_intro">Personal Details</h1>

      <div className="mt-5">
        <p className="label mb-2">Full Name</p>
        <input
          placeholder="FESTUS OJO EHBOMEN"
          className="border h-10 w-64 p-2 rounded focus:border-secondary border-graytwo outline-none bg-white"
          defaultValue={client.fullName}
          disabled
        />
      </div>

      <div className="mt-5">
        <p className="label mb-2">EMAIL</p>
        <input
          placeholder="email@gmail.com"
          className="border h-10 w-64 p-2 rounded focus:border-secondary border-graytwo outline-none bg-white"
          defaultValue={client.email}
          disabled
        />
      </div>

      <div className="mt-5">
        <p className="label mb-2"> PHONE NUMBER </p>
        <input
          placeholder=" PHONE NUMBER "
          className="border h-10 w-64 p-2 rounded focus:border-secondary border-graytwo outline-none bg-white"
          defaultValue={client.phone}
          disabled
        />
      </div>

      <div className="mt-5">
        <p className="label mb-2">RESIDENTIAL ADDRESS</p>
        <input
          placeholder="RESIDENTIAL ADDRESS"
          className="border h-10 w-64 p-2 rounded focus:border-secondary border-graytwo outline-none bg-white"
          defaultValue={client.residentialAddress}
          disabled
        />
      </div>

      <div className="mt-5">
        <p className="label mb-2">CITY</p>
        <input
          placeholder="Abia"
          className="border h-10 w-64 p-2 rounded focus:border-secondary border-graytwo outline-none bg-white"
          defaultValue={client.city}
          disabled
        />
      </div>

      <h1 className="profile_intro my-5">Credentials</h1>

      <div className="mt-5">
        <p className="label mb-2">NIN </p>
        <input
          placeholder="00XXXXXXXXXXXXXX"
          className="border h-10 w-64 p-2 rounded focus:border-secondary border-graytwo outline-none bg-white"
          defaultValue={client.NIN}
          disabled
        />
      </div>

      <div className="mt-5">
        <p className="label mb-2">BVN</p>
        <input
          placeholder="00XXXXXXXXXXXXXX"
          className="border h-10 w-64 p-2 rounded focus:border-secondary border-graytwo outline-none bg-white"
          defaultValue={client.BVN}
          disabled
        />
      </div>

      <div className="mt-5">
        <p className="label mb-2">NEXT OF KIN</p>
        <input
          placeholder="Swayne Gee, Father"
          className="border h-10 w-64 p-2 rounded focus:border-secondary border-graytwo outline-none bg-white"
          defaultValue={client.nextOfKin}
          disabled
        />
      </div>

      <h1 className="profile_intro my-5">Profile Photo</h1>

      <img
        src={client.avatar}
        className="rounded-full w-32 h-32 border-2 border-primary"
      />
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    client_profile_details: state.clients.client_profile_details,
  };
};

export default connect(mapStateToProps, { fetchClientProfileDetails })(
  ClientDetails
);
