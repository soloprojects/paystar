import React from "react";
import Table from "./Table";
import { Sselect, Select } from "semantic-ui-react";
import MoneyFormat from "../Utilities/MoneyFormat";

function PackageStat(props) {
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
        {props.packageReport?.map((res) => (
          <tr key={res.id} className="bg-grayfour">
            <td>{res.name}</td>
            <td>{"₦" + MoneyFormat(res.totalRevenue)}</td>
            <td>{res.packagesSold}</td>
            <td
              className="text-secondary cursor-pointer"
              onClick={() => props.action("Package", res.id)}
            >
              Details
            </td>
          </tr>
        ))}
      </Table>
    </div>
  );
}

export default PackageStat;
