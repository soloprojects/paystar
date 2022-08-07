import React, { useState } from "react";
import BlockHeaders from "../Components/BlockHeaders";
import KeyValueSpan from "../Components/KeyValueSpan";
import ButtonIcon from "../Components/ButtonIcon";
import Button from "../Components/Button";
import Download from "../assets/svg/Download.svg";
import ModalPayOptions from "../Components/ModalPayOptions";
import { useLocation } from "react-router-dom";
import ModalPay from "../Components/ModalPay";
import transactions from "../Redux/Reducer/transactions";
import { connect } from "react-redux";
import Pdf from "react-to-pdf";
import { formateDate } from "../Utilities";

const ref = React.createRef();

function ClientSingleTrans(props) {
  const [isPay, setPay] = useState(false);
  const [isNewOptions, setIsNewOptions] = useState(false);
  const location = useLocation();
  let {state} = location
  console.log(state)
  const id = location.pathname.split("/");
  const handleIspay = () => {
    setPay(false);
    setIsNewOptions(true);
  };
  return (
    <div className="pt-5">
      <div
        ref={ref}
        style={{ width: 800, height: "100%", alignContent: "center"}}
      >
        <BlockHeaders entry="POLICY DETAILS" style={{ marginLeft: 10, paddingTop: 20}}>
          <KeyValueSpan
            entry="Policy Type:"
            value={state.package?.packageName}
          />
          <KeyValueSpan entry="Commencement Date:" value={formateDate(state?.createdAt)} />
          <KeyValueSpan entry="Maturity Date:" value={formateDate(state?.maturityDate)} />
          <KeyValueSpan entry="Policy Duration:" value={state.package?.policyDuration} />
          <KeyValueSpan entry="Premium Frequency:" value={state.client?.premiumFrequency} />
          <KeyValueSpan entry="Premium:" value={state.package?.premiumSum} />
          <KeyValueSpan
            entry="Yearly Premium Payable:"
            value={state?.yearlyPremium}
          />
          <KeyValueSpan entry="Sum Assured:" value={state?.sumAssured} />
        </BlockHeaders>
        <BlockHeaders entry="POLICY SCHEDULE" style={{ marginLeft: 10}}>
          <KeyValueSpan entry="Policy Number:" value={state._id} />
          <KeyValueSpan
            entry="Reference Number:"
            value="POL/2019/97/FBN002/0001223"
          />
        </BlockHeaders>

        <BlockHeaders entry="ASSURED DETAILS" style={{ marginLeft: 10}}>
          <KeyValueSpan entry=" Name:" value={state.client?.fullName} />
          {/* <KeyValueSpan entry="Date of Birth:" value="18/Jun/1975" /> */}
          <KeyValueSpan
            entry="Address:"
            value={state.client?.residentialAddress}
          />
        </BlockHeaders>
      </div>
      <Pdf targetRef={ref} filename={`${state.transcationRef}.pdf`}>
        {({ toPdf }) => (
          <div className="pt-10 pb-5 flex flex-wrap">
            <div className="mr-20 mb-5">
              <ButtonIcon
                width="182px"
                height="48px"
                name="Download"
                color="#05668D"
                border="1px solid #05668D"
                icon={Download}
                action={toPdf}
              />
            </div>
          </div>
        )}
      </Pdf>

      {isPay && <ModalPay action={handleIspay} close={setPay} />}
      {isNewOptions && <ModalPayOptions action={setIsNewOptions} />}
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    client_transactions: state.transactions.client_transactions,
  };
};

export default connect(mapStateToProps, null)(ClientSingleTrans);
