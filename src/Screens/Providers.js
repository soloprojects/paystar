import React, { useState, useRef, useEffect } from "react";
import Select from "react-select";
import Button from "../Components/Button";
import Expired from "../Components/Expired";
import Search from "../Components/Search";
import Close from "../assets/svg/close.svg";
import {
  fetchAllProviders,
  addProvider,
  updateProvider,
} from "../Redux/Action/providers";
import { fetchCategoriesList } from "../Redux/Action/category";
import { connect } from "react-redux";
import { Dimmer, Loader } from "semantic-ui-react";

function Providers(props) {
  const initialState = {
    companyName: "",
    companyBrief: "",
    category: [],
    companyLogo: "f",
    edit: false,
    _id: "",
    selectedCategories: [],
  };

  const [image, setImage] = useState(null);
  const [loaded, setLoaded] = useState(false);
  const [fetchingData, setFetcingData] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [
    {
      companyName,
      companyBrief,
      category,
      companyLogo,
      edit,
      _id,
      selectedCategories,
    },
    setState,
  ] = useState({ ...initialState });

  const inputRef = useRef();

  let { categories, providers_list } = props;

  const options = categories.map((category) => {
    return {
      value: category._id,
      label: category.name,
    };
  });

  const selectedCategory = (categories) => {
    let values = [];
    for (let i = 0; i < categories.length; i++) {
      options.map((option) => {
        if (option.value === categories[i]) {
          values.push(option);
        }
      });
    }
    return values;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setState((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSelect = (values) => {
    let option = values.map((element) => {
      return element.value;
    });
    setState((prevState) => ({
      ...prevState,
      category: option,
      selectedCategories: selectedCategory(option),
    }));
  };

  const handleFileChange = (file) => {
    setImage(file);
    let reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      let base64 = reader.result;
      setState((prevState) => ({ ...prevState, companyLogo: "" }));
    };
  };

  const onAdd = () => {
    if (companyName === "" && companyLogo === "" && category.length <= 0) {
      alert("Error");
    } else if (companyName === "" || undefined || null) {
      alert("company name is required");
    } else if (category.length <= 0 || undefined || null) {
      alert("please select at least one or more category");
    } else {
      let data = {
        companyName,
        companyBrief,
        companyLogo,
        category,
      };
      setSubmitting(true);
      props
        .addProvider(data)
        .then((response) => {
          setSubmitting(false);
          setState({ ...initialState });
        })
        .catch((error) => {
          setSubmitting(false);
        });
    }
  };

  const onEdit = () => {
    if (companyName === "" || category.length <= 0) {
      alert("Error");
    } else if (companyName === "" || undefined || null) {
      alert("company name is required");
    } else if (category.length <= 0 || undefined || null) {
      alert("please select at least one or more category");
    } else {
      setSubmitting(true);
      let data = {
        companyName,
        companyBrief,
        category,
        _id,
      };
      props
        .updateProvider(data)
        .then((response) => {
          setState({ ...initialState });
          setImage(null);
          setSubmitting(false);
        })
        .catch((error) => {
          setSubmitting(false);
        });
    }
  };

  const onClickEdit = (data) => {
    setState((previousState) => ({
      ...previousState,
      companyName: data.companyName,
      companyBrief: data.companyBrief,
      category: data.category,
      companyLogo,
      selectedCategories: selectedCategory(data.category),
      _id: data._id,
      edit: true,
    }));
  };

  const onClickCancel = () => {
    setState({ ...initialState });
    setImage(null);
  };

  const fetch = async () => {
    setFetcingData(true);
    await props.fetchAllProviders();
    await props.fetchCategoriesList();
    setFetcingData(false);
  };

  useEffect(() => {
    if (!loaded) {
      fetch();
    }
    setLoaded(true);
  }, [props, loaded]);

  return (
    <div className="flex flex-col md:flex-row lg:flex-row xl:flex-row justify-between h-full pb-5">
      {fetchingData ? (
        <Dimmer active>
          <Loader />
        </Dimmer>
      ) : (
        <>
          <div className="flex-1 md:mr-2 lg:mr-5  md:order-1 lg:order-1 xl:order-1 order-2 ">
            <div className="flex flex-wrap justify-between">
              <div
                className=" bg-grayfour homePage-box p-5 flex-none "
                style={{ height: "43rem" }}
              >
                <p className="homePage-box_text-head">ADD PROVIDER</p>
                <div className="pr-20">
                  <p className="text-xs text-graytwo my-3">COMPANY NAME</p>
                  <input
                    className="border h-10 w-full p-2  rounded focus:border-secondary border-graytwo outline-none bg-white"
                    value={companyName}
                    name="companyName"
                    onChange={handleInputChange}
                  />
                  <p className="text-xs text-graytwo my-3 mt-5">
                    DESCRIPTION (OPTIONAL)
                  </p>
                  <textarea
                    className="border  h-32 w-full p-2 rounded focus:border-secondary border-graytwo outline-none bg-white"
                    value={companyBrief}
                    name="companyBrief"
                    onChange={handleInputChange}
                  ></textarea>
                  <p className="text-xs text-graytwo my-3 mt-5">
                    SERVICE CATEGORIES
                  </p>
                  <Select
                    options={options}
                    isMulti
                    onChange={(value) => handleSelect(value)}
                    value={selectedCategories}
                  />

                  <p className="text-xs text-graytwo my-3 mt-5">COMPANY LOGO</p>
                  <div className="flex border border-graytwo rounded p-3 justify-between">
                    <span className="select_logo py-3">
                      {image ? image.name : "Select Image"}
                    </span>
                    <input
                      type="file"
                      ref={inputRef}
                      className="hidden"
                      onChange={(e) => handleFileChange(e.target.files[0])}
                    />
                    <Button
                      width="100px"
                      height="48px"
                      bgColor="#05668D"
                      name="Browse"
                      action={() => {
                        inputRef.current.click();
                      }}
                    />
                  </div>
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
                            "Edit provider"
                          ) : (
                            "Add provider"
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
              </div>

              <div className="homePage-box p-5">
                <p className="homePage-box_text-head">FINANCE PROVIDERS</p>
                <div className="flex justify-between my-3">
                  <Search />
                  <span className="text-black text-xs">1-20 of 36</span>
                </div>

                {providers_list.map((provider, index) => {
                  return (
                    <Expired
                      name={provider.companyName}
                      provider={provider}
                      key={index}
                      action={() => onClickEdit(provider)}
                    />
                  );
                })}
              </div>
            </div>
          </div>
        </>
      )}

      <div className="bg-white md:mb-0 lg:mb-0 xl:mb-0 mb-5  md:w-20 lg:w-24 xl:w-40 flex-none md:order-2 lg:order-2 xl:order-2 order-1"></div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    categories: state.category.categories_list,
    providers_list: state.providers.providers_list,
  };
};

export default connect(mapStateToProps, {
  fetchAllProviders,
  addProvider,
  updateProvider,
  fetchCategoriesList,
})(Providers);
