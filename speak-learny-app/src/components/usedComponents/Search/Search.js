import React from "react";
import styles from "./Search.module.scss";
import { Icon } from "@iconify/react";
import searchOutlined from "@iconify/icons-ant-design/search-outlined";

const Search = (props) => {
  return (
    <div className={styles.boxInput}>
      <input
        type={props.type || "text"}
        placeholder={props.placeholder}
        className={`${styles.search} ${props.hide ? styles.hide : ""}`}
        name={props.name}
        value={props.value}
        onChange={props.onChange}
        required={props.required}
      />
      <div
        className={styles.select}
        style={{ display: props.hide ? "none" : "flex" }}
      >
        <Icon icon={searchOutlined} className={styles.icon} />
      </div>
    </div>
  );
};

export default Search;
