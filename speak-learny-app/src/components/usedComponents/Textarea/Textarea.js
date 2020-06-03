import React from "react";
import styles from "./Textarea.module.scss";

function Textarea(props) {
  return (
    <textarea
      className={styles.textarea}
      placeholder={props.placeholder}
      name={props.name}
      value={props.value}
      onChange={props.onChange}
    />
  );
}

export default Textarea;
