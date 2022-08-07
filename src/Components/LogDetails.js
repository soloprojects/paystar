import React from "react";
import { Icon } from "semantic-ui-react";
import Button from "./Button";
function LogDetails(props) {
  return (
    <div className="flex justify-between">
      <div className="w-1/2">
        <div className="flex justify-between bg-grayfour p-2 rounded">
          <p>
            16 May, 2019 - 4:05 am
            <span className="mx-2">Kene added a customer</span>
          </p>
          <Icon name="angle right" />
        </div>
      </div>
      <div className="flex-1 mx-10">
        <div className="bg-grayfour rounded p-3">
          <p className="homePage-box_text-head"> DETAILS</p>
          <div className="my-5">
            <span>user:</span>
            <p className="my-3">Kene Ohiaeri</p>

            <span className="mt-3"> Email: </span>
            <p className="my-3">keneohiaeri@gmail.com </p>

            <span className="mt-3">Role:</span>
            <p className="my-3">Admin </p>

            <span className="mt-3">Date:</span>
            <p className="my-3">16 May, 2019 - 11:05 am </p>

            {props.audit && (
              <div className="my-5">
                <Button
                  width="182px"
                  height="48px"
                  name=" Report Activity"
                  color="#FDC46B"
                  border="1px solid #FDC46B"
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default LogDetails;
