import React from "react";
import styles from "./Register.module.scss";
import Search from "../../../usedComponents/Search/Search";

function BasicForm(props) {
  return (
    <div className={styles.inputBox}>
      <div className={styles.boxName}>
        <div className={styles.input}>
          <Search
            hide={true}
            placeholder={"First name"}
            name={"first_name"}
            value={props.first_name}
            onChange={props.onChange}
            required={true}
          />
        </div>
        <div className={styles.input}>
          <Search
            hide={true}
            placeholder={"Last name"}
            name={"last_name"}
            value={props.last_name}
            onChange={props.onChange}
            required={true}
          />
        </div>
      </div>
      <div className={styles.input}>
        <Search
          hide={true}
          placeholder={"Email"}
          name={"email"}
          value={props.email}
          onChange={props.onChange}
          required={true}
        />
      </div>
      <div className={styles.input}>
        <Search
          hide={true}
          placeholder={"Password"}
          type={"password"}
          name={"password"}
          value={props.password}
          onChange={props.onChange}
          required={true}
        />
      </div>
      <div className={styles.input}>
        <Search
          hide={true}
          placeholder={"Confirm password"}
          type={"password"}
          name={"password2"}
          value={props.password2}
          onChange={props.onChange}
          required={true}
        />
      </div>
      <div className={styles.btnBox}>
        <div className={styles.create} onClick={() => props.stageNext()}>
          Next
        </div>
      </div>
    </div>
  );
}

export default BasicForm;
