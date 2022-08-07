import React, { useEffect, useState } from "react";
import Search from "../Components/Search";
import Table from "../Components/Table";
import PopupDetails from "../Components/PopupDetails";
import { fetchAllTransactions } from "../Redux/Action/transactions";
import { connect } from "react-redux";
import { Dimmer, Loader } from "semantic-ui-react";

function Transactions(props) {
  const [loaded, setLoaded] = useState(false);
  const [fetchingData, setFetcingData] = useState(false);

  const fetchTransactions = async () => {
    setFetcingData(true);
    let response = await props.fetchAllTransactions();
    try {
      setFetcingData(false);
    } catch (error) {
      setFetcingData(false);
    }
  };

  useEffect(() => {
    if (!loaded) {
      fetchTransactions();
    }
    setLoaded(true);
  }, [props, loaded]);
  let { all_transactions } = props;
  console.log(all_transactions);
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
              {all_transactions.map((transaction, index) => {
                return (
                  <tr className="bg-grayfour" key={index}>
                    <td>{transaction.transcationRef}</td>
                    <td>{transaction.client?.fullName}</td>
                    <td>
                      {transaction.agent.firstName} {transaction.agent.lastName}
                    </td>
                    <td>{transaction.package.packageName}</td>
                    <td>{transaction.package.policyDuration}</td>
                    <td className="text-mainSuccess">Active</td>

                    <PopupDetails
                      base="clientTrans"
                      id="12345"
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
    all_transactions: state.transactions.all_transactions,
  };
};

export default connect(mapStateToProps, { fetchAllTransactions })(Transactions);
