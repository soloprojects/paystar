import React from "react";
import Table from "../Components/Table";
import { Select } from "semantic-ui-react";
function ProviderStat(props) {
  return (
    <div>
      <div className="my-3">
        <Select placeholder="filter" />
      </div>
      <Table
        tableHead={[
          "PROVIDER NAME",
          "TOTAL REVENUE",
          "PACKAGES SOLD",
          "AUDIT LOGS",
        ]}
      >
        <tr className="bg-grayfour">
          <td>First Bank Holdings</td>
          <td>₦12,890,320.00</td>
          <td>23</td>
          <td
            className="text-secondary cursor-pointer"
            onClick={() => props.action("Provider")}
          >
            Details
          </td>
        </tr>
      </Table>
    </div>
  );
}

export default ProviderStat;
