import React, { useContext } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Home from "../Home/Home";
import Profile from "../Profile/Profile";
import Friends from "../Friends/Friends";
import Forum from "../Forum/Forum";
import Blog from "../Blog/Blog";
import Programming from "../Education/Programming/Programming";
import Languages from "../Education/Languages/Languages";

import styles from "./Content.module.scss";
import { FriendContext } from "../../context/friend/FriendContext";
import Settings from "../Settings/Settings";
import Logout from "../Logout";

function Content(props) {
  const { fullPage } = useContext(FriendContext);

  return (
    <div
      className={`${styles.content} ${fullPage.hide ? "" : styles.full} ${
        !props.isOpen ? styles.active : ""
      }`}
    >
      <Switch>
        <Route exact path={"/"} component={Home} />
        <Route path={"/profile"} component={Profile} />
        <Route path={"/edu/programming"} component={Programming} />
        <Route path={"/edu/languages"} component={Languages} />
        <Route path={"/friends"} component={Friends} />
        <Route path={"/forum"} component={Forum} />
        <Route path={"/blog"} component={Blog} />
        <Route path={"/logout"} component={Logout} />
        <Route path={"/settings"} component={Settings} />
        <Redirect from="*" to={"/"} />
      </Switch>
    </div>
  );
}

export default Content;
