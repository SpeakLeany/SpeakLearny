import React from "react";
import { logout } from "../redux/actions/auth";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { Redirect } from "react-router-dom";

function Logout({ logout }) {
  logout();
  return <Redirect to="/" />;
}

Logout.propTypes = {
  logout: PropTypes.func.isRequired,
};

export default connect(null, { logout })(Logout);
