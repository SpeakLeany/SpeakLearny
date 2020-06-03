import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { useRouteMatch } from "react-router";

import { Icon } from "@iconify/react";
import bxUser from "@iconify/icons-bx/bx-user";
import bxCodeAlt from "@iconify/icons-bx/bx-code-alt";
import homeOutlined from "@iconify/icons-ant-design/home-outlined";
import outlineSchool from "@iconify/icons-ic/outline-school";
import baselineLanguage from "@iconify/icons-ic/baseline-language";
import bxLogOut from "@iconify/icons-bx/bx-log-out";
import messagesAlt from "@iconify/icons-jam/messages-alt";
import forumsaltIcon from "@iconify/icons-whh/forumsalt";
import newsIcon from "@iconify/icons-typcn/news";

import styles from "./Menu.module.scss";
import Goal from "../../usedComponents/Goal/Goal";

const Menu = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const activeMenu = useRouteMatch("/edu");

  return (
    <>
      <div
        className={`${styles.black} ${props.isOpen ? styles.active : ""}`}
        style={{ display: props.isHide ? "none" : "block" }}
        onClick={() => props.openLeftMenu()}
      ></div>
      <div
        className={styles.left}
        style={{ display: props.isHide ? "none" : "block" }}
      >
        <div
          className={`${styles.leftPannel} ${
            !props.isOpen ? styles.active : ""
          }`}
        >
          <div className={styles.boxAccount}>
            <Goal />
          </div>
          <div className={styles.boxIcons}>
            <div className={styles.end}></div>
            <NavLink
              to="/profile"
              className={styles.leftSideDiv}
              activeClassName={styles.active}
            >
              <Icon icon={bxUser} className={styles.icon} />
              <div className={styles.text}>My account</div>
            </NavLink>
            <NavLink
              to="/"
              exact
              className={styles.leftSideDiv}
              activeClassName={styles.active}
            >
              <Icon icon={homeOutlined} className={styles.icon} />
              <div className={styles.text}>Dashboard</div>
            </NavLink>
            <div
              className={`${styles.leftSideDivMoreBox} ${
                isOpen ? styles.active : ""
              }`}
            >
              <div
                className={`${styles.leftSideDiv} ${styles.moreSelect} ${
                  activeMenu ? styles.activeMenu : ""
                }`}
                onClick={() => setIsOpen(!isOpen)}
              >
                <Icon icon={outlineSchool} className={styles.icon} />
                <div className={styles.text}>Education</div>
                <div className={`${styles.more}`}></div>
              </div>
              <div className={styles.moreBox}>
                <NavLink
                  to="/edu/programming"
                  className={styles.leftSideDiv}
                  activeClassName={styles.active}
                >
                  <Icon icon={bxCodeAlt} className={styles.icon} />
                  <div className={styles.text}>Programming</div>
                </NavLink>
                <NavLink
                  to="/edu/languages"
                  className={styles.leftSideDiv}
                  activeClassName={styles.active}
                >
                  <Icon icon={baselineLanguage} className={styles.icon} />
                  <div className={styles.text}>Languages</div>
                </NavLink>
              </div>
            </div>
            <NavLink
              to="/friends"
              className={styles.leftSideDiv}
              activeClassName={styles.active}
            >
              <Icon icon={messagesAlt} className={styles.icon} />
              <div className={styles.text}>Friends</div>
            </NavLink>
            <NavLink
              to="/forum"
              className={styles.leftSideDiv}
              activeClassName={styles.active}
            >
              <Icon icon={forumsaltIcon} className={styles.icon} />
              <div className={styles.text}>Forum</div>
            </NavLink>
            <NavLink
              to="/blog"
              className={styles.leftSideDiv}
              activeClassName={styles.active}
            >
              <Icon icon={newsIcon} className={styles.icon} />
              <div className={styles.text}>Blog</div>
            </NavLink>
            <NavLink
              to="/logout"
              className={styles.leftSideDiv}
              activeClassName={styles.active}
            >
              <Icon icon={bxLogOut} className={styles.icon} />
              <div className={styles.text}>Log out</div>
            </NavLink>
            <div className={styles.termsBox}>
              <a href="#" className={styles.text}>
                About us
              </a>
              <a href="#" className={styles.text}>
                Contact
              </a>
              <a href="#" className={styles.text}>
                Privacy
              </a>
              <p className={styles.textTitle}>© 2020 SpeakLearny</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Menu;
