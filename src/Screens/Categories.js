import React, { useState, useEffect } from "react";
import {
  fetchCategoriesList,
  addCategory,
  updateCategory,
} from "../Redux/Action/category";
import Button from "../Components/Button";
import Expired from "../Components/Expired";
import Search from "../Components/Search";
import { connect } from "react-redux";
import { notifySuccess, notifyError } from "../Utilities/Notify";
import { Dimmer, Loader } from "semantic-ui-react";

function Categories(props) {
  const initiatState = {
    name: "",
    description: "",
    _id: "",
    edit: false,
  };

  const [{ name, description, _id, edit }, setState] = useState({
    ...initiatState,
  });

  const [fetchingData, setFetcingData] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setState((prevState) => ({ ...prevState, [name]: value }));
  };

  const onAdd = () => {
    if (!name) {
      return;
    }
    let data = {
      name,
      description,
    };
    setSubmitting(true);
    props
      .addCategory(data)
      .then((response) => {
        setSubmitting(false);
        setFetcingData(false);
        if (response.success) {
          notifySuccess(response.message);
        }
        notifyError(response.message);
      })
      .catch((error) => {
        setSubmitting(false);
        setFetcingData(false);
        notifyError(error);
      });
  };

  const onEdit = () => {
    if (!name) {
      return;
    }
    let data = {
      name,
      description,
      _id: _id,
    };
    setSubmitting(true);
    props
      .updateCategory(data)
      .then((response) => {
        setState({ ...initiatState });
        setSubmitting(false);
      })
      .catch((err) => {
        setState({ ...initiatState });
        setSubmitting(false);
      });
  };

  const onClickEdit = (data) => {
    setState((previousState) => ({
      ...previousState,
      name: data.name,
      description: data.description,
      _id: data._id,
      edit: true,
    }));
  };

  const onClickCancel = () => {
    setState({ ...initiatState });
  };

  let { categories_list } = props;
  const [loaded, setLoaded] = useState(false);

  const fetchCategories = async () => {
    setFetcingData(true);
    let response = await props.fetchCategoriesList();
    try {
      setFetcingData(false);
    } catch (error) {
      setFetcingData(false);
    }
  };

  useEffect(() => {
    if (!loaded) {
      fetchCategories();
    }
    setLoaded(true);
  }, [props, loaded]);

  return (
    <div className="flex flex-col md:flex-row lg:flex-row xl:flex-row justify-between h-full ">
      <div className="flex-1 md:mr-2 lg:mr-5  md:order-1 lg:order-1 xl:order-1 order-2 ">
        {fetchingData ? (
          <Dimmer active>
            <Loader />
          </Dimmer>
        ) : (
          <>
            <div className="flex flex-wrap justify-between">
              <div
                className=" bg-grayfour homePage-box p-5 flex-none "
                style={{ height: "28rem" }}
              >
                <p className="homePage-box_text-head">ADD CATEGORIES</p>

                <p className="text-xs text-graytwo my-3">CATEGORY NAME</p>
                <input
                  className="border h-10 w-full p-2  rounded focus:border-secondary border-graytwo outline-none bg-white"
                  value={name}
                  name="name"
                  onChange={handleInputChange}
                  da
                />
                <p className="text-xs text-graytwo my-3 mt-10">
                  DESCRIPTION (OPTIONAL)
                </p>
                <textarea
                  className="border  h-40 w-full p-2 rounded focus:border-secondary border-graytwo outline-none bg-white"
                  value={description}
                  name="description"
                  onChange={handleInputChange}
                ></textarea>
                <div className="flex  md:flex-row lg:flex-row xl:flex-row">
                  <div className="mt-5">
                    <Button
                      width="180px"
                      height="48px"
                      bgColor="#FF6B35"
                      name={
                        submitting ? (
                          <Dimmer active>
                            <Loader />
                          </Dimmer>
                        ) : edit ? (
                          "Edit category"
                        ) : (
                          "Add category"
                        )
                      }
                      action={edit ? onEdit : onAdd}
                      loading={submitting}
                      disabled={submitting}
                    />
                  </div>
                  {edit && (
                    <div className="ml-5 mt-5">
                      <Button
                        width="180px"
                        height="48px"
                        bgColor="#FF6B35"
                        name="Cancel"
                        action={onClickCancel}
                      />
                    </div>
                  )}
                </div>
              </div>

              <div className="homePage-box p-5">
                <p className="homePage-box_text-head">Expired Packages</p>
                <div className="flex justify-between my-3">
                  <Search />
                  <span className="text-black text-xs">1-20 of 36</span>
                </div>
                {categories_list.map((category) => {
                  return (
                    <Expired
                      name={category.name}
                      category={category}
                      key={category._id}
                      action={() => onClickEdit(category)}
                    />
                  );
                })}
              </div>
            </div>
          </>
        )}
      </div>
      <div className="bg-white md:mb-0 lg:mb-0 xl:mb-0 mb-5  md:w-20 lg:w-24 xl:w-40 flex-none md:order-2 lg:order-2 xl:order-2 order-1"></div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    categories_list: state.category.categories_list,
  };
};

export default connect(mapStateToProps, {
  fetchCategoriesList,
  addCategory,
  updateCategory,
})(Categories);
