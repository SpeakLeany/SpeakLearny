import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Icon } from "@iconify/react";
import closeSharp from "@iconify/icons-ion/close-sharp";
import { removeAlert } from "../../../redux/actions/alert";
import styles from "./Alert.module.scss";

const Alert = ({ alerts, removeAlert }) => {
  return (
    <>
      {alerts !== null && alerts.length > 0 && alerts.length <= 1 ? (
        <div
          key={alerts[0].id}
          className={`${styles.alert} ${
            alerts[0].alertType === "error"
              ? `${styles.alertError}`
              : `${styles.alertSuccess}`
          }`}
        >
          <Icon
            className={styles.closeIcon}
            icon={closeSharp}
            onClick={() => removeAlert(alerts[0].id)}
          />
          {alerts[0].msg}
        </div>
      ) : null}
    </>
  );
};

Alert.propTypes = {
  alerts: PropTypes.array.isRequired,
  removeAlert: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  alerts: state.alert,
});

export default connect(mapStateToProps, { removeAlert })(Alert);
