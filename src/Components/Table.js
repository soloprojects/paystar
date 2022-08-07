import React from "react";

function Tabel(props) {
  return (
    <div className="overflow-x-auto overflow-y-hidden mt-10  pb-20">
      <table cellSpacing="20px">
        <thead>
          <tr>
            {props.tableHead.map((head, index) => (
              <th key={index}>{head}</th>
            ))}
          </tr>
        </thead>
        <tbody>{props.children}</tbody>
      </table>
    </div>
  );
}

export default Tabel;
