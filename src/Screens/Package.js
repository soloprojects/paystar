import React, { useEffect, useState } from "react";
import Search from "../Components/Search";
import Table from "../Components/Table";
import { Link, useHistory } from "react-router-dom";
import PopupDetails from "../Components/PopupDetails";
import { OpenBackgroundBlurContext } from "../App";
import { connect } from "react-redux";
import { fetchAllPackages } from "../Redux/Action/packages";
import { Dimmer, Loader, Select } from "semantic-ui-react";
import Button from "../Components/Button";

function Package(props) {
  const [loaded, setLoaded] = useState(false);
  const [fetchingData, setFetcingData] = useState(false);
  const history = useHistory();
  const fetchPackages = async () => {
    setFetcingData(true);
    let response = await props.fetchAllPackages();
    try {
      setFetcingData(false);
    } catch (error) {
      setFetcingData(false);
    }
  };

  useEffect(() => {
    if (!loaded) {
      fetchPackages();
    }
    setLoaded(true);
  }, [props, loaded]);

  let { packages_list } = props;
  return (
    <div className="h-full">
      {fetchingData ? (
        <Dimmer active>
          <Loader />
        </Dimmer>
      ) : (
        <>
          <div className="my-5">
            <Button
              width="80px"
              height="25px"
              name="ADD NEW"
              color="#05668D"
              border="1px solid #05668D"
              action={() => history.push("/packages/new")}
            />
          </div>
          <div className="flex">
            <Search />
            <div className="ml-10 flex ">
              <p className="text-graytwo">Filter:</p>
              <Select placeholder="Categories" className="mx-5" />
              <Select placeholder="Providers" />
            </div>
          </div>
          <div>
            <Table
              tableHead={[
                "Package Name",
                "Finance Category",
                "Service Provider",
                "status",
              ]}
            >
              {packages_list.map((Package, index) => {
                return (
                  <tr className="bg-grayfour" key={index}>
                    <td>{Package.packageName}</td>
                    {Package.category.length !== 0 ? (
                      <td>{Package.category[0]?.name} </td>
                    ) : (
                      <td> No category is selected for this package</td>
                    )}

                    {Package.provider.length !== 0 ? (
                      <td>{Package.provider[0]?.companyName} </td>
                    ) : (
                      <td> No provider is selected for this package</td>
                    )}

                    <td className="text-mainSuccess">{Package.status}</td>

                    <PopupDetails
                      base="packages"
                      id="12345"
                      linkTitle="Edit Package"
                      followUpTitle="Delete"
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
    packages_list: state.packages.packages_list,
  };
};

export default connect(mapStateToProps, { fetchAllPackages })(Package);
