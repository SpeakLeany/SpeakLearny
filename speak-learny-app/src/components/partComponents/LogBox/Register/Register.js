import React, { useState } from "react";
import styles from "./Register.module.scss";
import { Icon } from "@iconify/react";
import bxlFacebook from "@iconify/icons-bx/bxl-facebook";
import bxlGooglePlus from "@iconify/icons-bx/bxl-google-plus";
import BasicForm from "./BasicForm";
import SecondForm from "./SecondForm";
import LastForm from "./LastForm";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { signup } from "../../../../redux/actions/auth";
import { setAlert } from "../../../../redux/actions/alert";
import Alert from "../../../usedComponents/Alert/Alert";

const Register = ({ signup }) => {
  const [stage, setStage] = useState(1);
  const [imgSrc, setImgSrc] = useState("");
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    country: "",
    city: "",
    phone: "",
    description: "",
    birthday: "",
    image: "",
    password: "",
    password2: "",
  });

  const {
    first_name,
    last_name,
    email,
    country,
    city,
    phone,
    description,
    birthday,
    image,
    password,
    password2,
  } = formData;

  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onBirthdayChange = (e) => {
    setFormData({
      ...formData,
      birthday: { ...birthday, [e.target.name]: e.target.value },
    });
  };

  const addFile = (e) => {
    let reader = new FileReader();
    let url = reader.readAsDataURL(e.target.files[0]);

    reader.onloadend = () => {
      setImgSrc(reader.result);
    };
    setFormData({
      ...formData,
      image: e.target.files[0],
    });
  };

  const onSubmit = () => {
    signup({
      first_name,
      last_name,
      email,
      country,
      city,
      phone,
      description,
      birthday,
      image,
      password,
      password2,
    });
  };

  const renderSwitch = (stage) => {
    switch (stage) {
      case 1:
        return (
          <BasicForm
            stageNext={() => setStage(stage + 1)}
            onChange={(e) => onChange(e)}
            first_name={first_name}
            last_name={last_name}
            email={email}
            password={password}
            password2={password2}
          />
        );
      case 2:
        return (
          <SecondForm
            stageNext={() => setStage(stage + 1)}
            stageBack={() => setStage(stage - 1)}
            onChange={(e) => onChange(e)}
            city={city}
            birthday={birthday}
          />
        );
      case 3:
        return (
          <LastForm
            stageBack={() => setStage(stage - 1)}
            onChange={(e) => onChange(e)}
            onBirthdayChange={(e) => onBirthdayChange(e)}
            addFile={(e) => addFile(e)}
            description={description}
            onSubmit={() => onSubmit()}
            imgSrc={imgSrc}
          />
        );
      default:
        return (
          <BasicForm
            stageNext={() => setStage(stage + 1)}
            onChange={(e) => onChange(e)}
            first_name={first_name}
            last_name={last_name}
            email={email}
            password={password}
            password2={password2}
          />
        );
    }
  };

  return (
    <>
      <div className={styles.iconBox}>
        <Icon
          icon={bxlFacebook}
          className={`${styles.icon} ${styles.facebook}`}
        />
        <Icon
          icon={bxlGooglePlus}
          className={`${styles.icon} ${styles.google}`}
        />
      </div>
      <div className={styles.inputBox}>
        <Alert />
      </div>
      {renderSwitch(stage)}
    </>
  );
};

Register.propTypes = {
  setAlert: PropTypes.func.isRequired,
  signup: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool,
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
  alerts: state.alert,
});

export default connect(mapStateToProps, { setAlert, signup })(Register);
