import React, { useState } from "react";
import styles from "../Register/Register.module.scss";
import { Icon } from "@iconify/react";
import bxlFacebook from "@iconify/icons-bx/bxl-facebook";
import bxlGooglePlus from "@iconify/icons-bx/bxl-google-plus";
import Search from "../../../usedComponents/Search/Search";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { login } from "../../../../redux/actions/auth";
import Alert from "../../../usedComponents/Alert/Alert";

const Login = ({ login }) => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const { email, password } = formData;

  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmit = () => {
    login(email, password);
  };

  return (
    <>
      <div className={styles.iconBox}>
        {/* <Icon
          icon={bxlFacebook}
          className={`${styles.icon} ${styles.facebook}`}
        />
        <Icon
          icon={bxlGooglePlus}
          className={`${styles.icon} ${styles.google}`}
        /> */}
      </div>
      <div className={styles.inputBox}>
        <Alert />
      </div>
      <div className={styles.inputBox}>
        <div className={styles.input}>
          <Search
            hide={true}
            placeholder={"Email"}
            type={"email"}
            name={"email"}
            value={email}
            onChange={(e) => onChange(e)}
            required={true}
          />
        </div>
        <div className={styles.input}>
          <Search
            hide={true}
            placeholder={"Password"}
            type={"password"}
            name={"password"}
            value={password}
            onChange={(e) => onChange(e)}
            required={true}
          />
        </div>
        <div className={styles.btnBox}>
          <div className={styles.create} onClick={() => onSubmit()}>
            Sign in
          </div>
        </div>
      </div>
    </>
  );
};

Login.propTypes = {
  login: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool,
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, { login })(Login);
