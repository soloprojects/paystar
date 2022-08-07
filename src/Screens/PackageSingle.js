import React, { useEffect, useState, useRef } from "react";
import Save from "../assets/svg/Save.svg";
import Add from "../assets/svg/Add2.svg";
import Button from "../Components/Button";
import ButtonIcon from "../Components/ButtonIcon";
import PaystarCard from "../Components/PaystarCard";
import Select from "../Components/Select";
import CheckBox from "../Components/CheckBox";
import { connect } from "react-redux";
import { addPackage, updatePackage } from "../Redux/Action/packages";
import { fetchAllProviders } from "../Redux/Action/providers";
import { fetchCategoriesList } from "../Redux/Action/category";
import { Dimmer, Loader } from "semantic-ui-react";
import { Editor, EditorState, RichUtils } from "draft-js";
import { useHistory } from "react-router-dom";

function PackageSingle(props) {
  const initialState = {
    packageName: "",
    category: [],
    provider: [],
    premiumSum: "",
    commission: "",
    policyDuration: "",
    feature: "",
    eligibility: "",
    howToStart: "",
    image: "",
    Monthly: false,
    Quarterly: false,
    Yearly: false,
  };

  const inputRef = useRef();
  const [Image, setImage] = useState(null);
  const [
    {
      packageName,
      category,
      provider,
      premiumSum,
      howToStart,
      policyDuration,
      feature,
      commission,
    },
    setState,
  ] = useState({
    ...initialState,
  });
  const [{ Monthly, Quarterly, Yearly }, setCheckBox] = useState({
    ...initialState,
  });
  const [fetchingData, setFetchingData] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const history = useHistory();

  const fetch = async () => {
    setFetchingData(true);
    await props.fetchCategoriesList();
    await props.fetchAllProviders();
    try {
      setFetchingData(false);
    } catch (error) {
      setFetchingData(false);
    }
  };

  const onTextChange = (editorState) => {
    setState((previousState) => ({
      ...previousState,
      howToStart: editorState,
    }));
  };

  const toggleCheckBox = (CheckBoxName) => {
    if (CheckBoxName === "Monthly")
      setCheckBox((prevState) => ({
        ...prevState,
        Quarterly: false,
        Yearly: false,
      }));
    else if (CheckBoxName === "Quarterly") {
      setCheckBox((prevState) => ({
        ...prevState,
        Monthly: false,
        Yearly: false,
      }));
    } else if (CheckBoxName === "Yearly") {
      setCheckBox((prevState) => ({
        ...prevState,
        Monthly: false,
        Quarterly: false,
      }));
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setState((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSelectChange = (name, value) => {
    setState((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleFileChange = (file) => {
    setImage(file);
    let reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      let base64 = reader.result;
      setState((prevState) => ({ ...prevState, feature: base64 }));
    };
  };

  const onAdd = () => {
    if (
      packageName === "" &&
      feature === "" &&
      category === "" &&
      provider === "" &&
      commission === "" &&
      premiumSum === ""
    ) {
      alert("Please fill all the fields");
    } else if (packageName === "" || undefined || null) {
      alert("company name is required");
    } else if (feature === "" || undefined || null) {
      alert("Feature image is required");
    } else if (category === "" || undefined || null) {
      alert("Please select a category");
    } else {
      let data = {
        packageName,
        category,
        provider,
        howToStart,
        eligibility: howToStart,
        premiumSum,
        commission,
        policyDuration: "5",
        feature,
        image: feature,
      };
      setSubmitting(true);
      props
        .addPackage(data)
        .then((response) => {
          setSubmitting(false);
          setState({ ...initialState });
          history.push("/packages");
        })
        .catch((error) => {
          console.log(error);
          setSubmitting(false);
        });
    }
  };

  const onHeaderClick = () => {
    onTextChange(RichUtils.toggleInlineStyle(howToStart, "HEADER"));
  };

  const onUnderlineClick = () => {
    onTextChange(RichUtils.toggleInlineStyle(howToStart, "UNDERLINE"));
  };

  const onBoldClick = () => {
    onTextChange(RichUtils.toggleInlineStyle(howToStart, "BOLD"));
  };

  const onItalicClick = () => {
    onTextChange(RichUtils.toggleInlineStyle(howToStart, "ITALIC"));
  };

  let { categories_list, providers_list } = props;

  const categoriesOptions = categories_list.map((category) => {
    return {
      value: category._id,
      label: category.name,
    };
  });

  const providersOptions = providers_list.map((category) => {
    return {
      value: category._id,
      label: category.companyName,
    };
  });

  useEffect(() => {
    if (!loaded) {
      fetch();
    }
    setLoaded(true);
  }, [props, loaded]);

  return (
    <div className="flex">
      {fetchingData || submitting ? (
        <Dimmer active>
          <Loader />
        </Dimmer>
      ) : (
        <>
          <div className="flex-1  p-5">
            <div>
              <input
                value={packageName}
                name="packageName"
                onChange={handleInputChange}
                className="border h-10 w-full p-2 rounded focus:border-secondary border-graytwo outline-none bg-white"
              />
            </div>

            <div
              className="mt-10  flex package_editior flex-col"
              style={{ height: 300 }}
            >
              <div className="bg-grayfour flex p-1 px-5">
                <button className="mr-5 text-gray" onClick={onHeaderClick}>
                  H1
                </button>
                <button
                  className="mr-5 text-gray font-bold"
                  onClick={onBoldClick}
                >
                  B
                </button>
                <button
                  className="mr-5 text-gray underline"
                  onClick={onUnderlineClick}
                >
                  U
                </button>
                <button
                  className="mr-5 text-gray italic"
                  onClick={onItalicClick}
                >
                  I
                </button>
              </div>
              <div className="flex-1 pt-5 px-5">
                <meta charset="utf-8" />
                {/* <Editor
                  className="h-64 w-full p-2 package_editior outline-none bg-white"
                  editorState={howToStart}
                  handleKeyCommand={handleKeyCommand}
                  onChange={onTextChange}
                /> */}
                <textarea
                  className="h-64 w-full p-2  outline-none bg-white"
                  placeholder="type here.."
                  onChange={handleInputChange}
                  name="howToStart"
                  value={howToStart}
                ></textarea>
              </div>
            </div>
            <div className="pt-10 pb-5 flex flex-wrap">
              <div className="mr-20 mb-5">
                <ButtonIcon
                  width="182px"
                  height="48px"
                  name="Save Draft"
                  color="#05668D"
                  border="1px solid #05668D"
                  icon={Save}
                />
              </div>

              <Button
                width="182px"
                height="48px"
                bgColor="#FF6B35"
                name="Publish Package"
                action={onAdd}
              />
            </div>
          </div>
          <div className="p-3 " style={{ width: "18rem" }}>
            <div className="mb-5">
              <span className="select_logo py-3">
                {/* {image ? image.name : "Select Image"} */}
              </span>
              <input
                type="file"
                ref={inputRef}
                className="hidden"
                onChange={(e) => handleFileChange(e.target.files[0])}
              />
              <PaystarCard title="FEATURED IMAGE">
                <div className="my-3">
                  <ButtonIcon
                    width="100%"
                    height="48px"
                    name={Image ? Image.name : "Add Featured Image"}
                    color="#05668D"
                    border="1px solid #05668D"
                    icon={Add}
                    action={() => {
                      inputRef.current.click();
                    }}
                  />
                </div>
              </PaystarCard>
            </div>
            <div className="py-3">
              <PaystarCard title="SERVICE CATEGORY">
                <Select
                  data={categoriesOptions}
                  value={category}
                  onChange={(e) =>
                    handleSelectChange("category", e.target.value)
                  }
                />
              </PaystarCard>
            </div>

            <div className="py-3">
              <PaystarCard title="SERVICE PROVIDER">
                <Select
                  data={providersOptions}
                  value={provider}
                  onChange={(e) =>
                    handleSelectChange("provider", e.target.value)
                  }
                />
              </PaystarCard>
            </div>

            <div className="py-3">
              <PaystarCard title="COMMISSION">
                <div className="mt-5">
                  <p className="label mb-2">Commission:</p>
                  <input
                    type="number"
                    className="border h-10 w-full p-2 rounded focus:border-secondary border-graytwo outline-none bg-white"
                    name="commission"
                    value={commission}
                    onChange={handleInputChange}
                  />
                </div>
              </PaystarCard>
            </div>

            <div className="py-3">
              <PaystarCard title="PREMIUM SETTINGS">
                <div className="mt-5">
                  <p className="label mb-2">Premium Sum:</p>
                  <input
                    type="number"
                    className="border h-10 w-full p-2 rounded focus:border-secondary border-graytwo outline-none bg-white"
                    name="premiumSum"
                    value={premiumSum}
                    onChange={handleInputChange}
                  />
                </div>
                <p className="mt-5 label">Premium Frequency:</p>
                <div className="my-3">
                  <CheckBox label="Monthly" checked />
                </div>

                <div className="my-5">
                  <CheckBox label="Quarterly" />
                </div>

                <div className="my-3">
                  <CheckBox label="Yearly" checked />
                </div>
              </PaystarCard>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    categories_list: state.category.categories_list,
    providers_list: state.providers.providers_list,
  };
};

export default connect(mapStateToProps, {
  fetchAllProviders,
  addPackage,
  updatePackage,
  fetchCategoriesList,
})(PackageSingle);
