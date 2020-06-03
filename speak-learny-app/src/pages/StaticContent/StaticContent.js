import React, { useState, useEffect } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Header from "../../components/partComponents/Header/Header";
import Menu from "../../components/partComponents/Menu/Menu";
import RightPanel from "../../components/partComponents/RightPanel/RightPanel";
import Content from "../Content/Content";
import { FriendState } from "../../context/friend/FriendState";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import MainPage from "../MainPage/MainPage";

const StaticContent = ({ isAuthenticated }) => {
  const [openMenu, setOpenMenu] = useState(false);
  const [hideMenu, setHideMenu] = useState(true);

  const openLeftMenu = () => {
    if (!openMenu) {
      setHideMenu(false);
    }
    setTimeout(() => {
      setOpenMenu(!openMenu);
    }, 0);
  };

  useEffect(() => {
    if (!openMenu) {
      setTimeout(() => {
        setHideMenu(true);
      }, 300);
    }
  }, [openMenu]);

  return (
    <>
      {isAuthenticated || localStorage.getItem("token") ? (
        <FriendState>
          <Router>
            <Header openLeftMenu={openLeftMenu} />
            <Menu
              isOpen={openMenu}
              isHide={hideMenu}
              openLeftMenu={openLeftMenu}
            />
            <Content isOpen={openMenu} />
          </Router>
          <RightPanel />
        </FriendState>
      ) : (
        <MainPage />
      )}
    </>
  );
};

StaticContent.propTypes = {
  isAuthenticated: PropTypes.bool,
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, {})(StaticContent);
