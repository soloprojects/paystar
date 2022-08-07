import React from "react";
import { useHistory } from "react-router-dom";
function ClientCard(props) {
  let history = useHistory();
  const handleMoveto = (id) => history.push(`/clients/${id}`);
  let { client } = props;
  return (
    <div
      className="p-3 flex bg-graythree rounded w-64 cursor-pointer"
      onClick={() => handleMoveto(client._id)}
    >
      <img
        src={client.avatar}
        className="rounded-full w-10 h-10 border-2 border-primary"
      />
      <p className="text-sm ml-5 mt-2">{client.fullName}</p>
    </div>
  );
}

export default ClientCard;
