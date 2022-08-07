import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { fetchClientTransactions } from "../Redux/Action/transactions";
import Search from "../Components/Search";
import Table from "../Components/Table";
import PopupDetails from "../Components/PopupDetails";
import { Dimmer, Loader } from "semantic-ui-react";
import { useLocation } from "react-router-dom";

function ClientTrans(props) {
  const [loaded, setLoaded] = useState(false);
  const [fetchingData, setFetcingData] = useState(false);
  const location = useLocation();
  let { client_id } = props;
  const fetchTransactions = async () => {
    setFetcingData(true);
    let response = await props.fetchClientTransactions(client_id);
    setFetcingData(false);
  };

  useEffect(() => {
    if (!loaded) {
      fetchTransactions();
    }
    setLoaded(true);
  }, [props, loaded]);

  let transactions = props.client_transactions;
  return (
    <div className="h-full">
      {fetchingData ? (
        <Dimmer active>
          <Loader />
        </Dimmer>
      ) : (
        <>
          <div className="flex">
            <Search />
          </div>
          <div>
            <Table
              tableHead={[
                "Ref",
                "Full name",
                "Finance Agent",
                "Package",
                "duration",
                "status",
              ]}
            >
              {transactions.map((transaction, index) => {
                return (
                  <tr className="bg-grayfour" key={index}>
                    <td>#2176</td>
                    <td>{transaction.client.fullName}</td>
                    <td>{`${transaction.agent.firstName} ${transaction.agent.lastName}`}</td>
                    <td>{transaction.package.packageName}</td>
                    <td>{transaction.package.policyDuration} years</td>
                    <td
                      className={
                        transaction.status === "ACTIVE"
                          ? "text-mainSuccess"
                          : "text-mainSuccess"
                      }
                    >
                      {transaction.status}
                    </td>

                    <PopupDetails
                      base="clientTrans"
                      id={transaction._id}
                      linkTitle="View Details"
                      followUpTitle="Download"
                      transaction={transaction}
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
}

const mapStateToProps = (state) => {
  return {
    client_transactions: state.transactions.client_transactions,
  };
};

export default connect(mapStateToProps, { fetchClientTransactions })(
  ClientTrans
);
