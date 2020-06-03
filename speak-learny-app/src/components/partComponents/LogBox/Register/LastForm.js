import React from "react";
import styles from "./Register.module.scss";
import Textarea from "../../../usedComponents/Textarea/Textarea";
import MultiSelect from "../../../usedComponents/MultiSelect/MultiSelect";
import { useState } from "react";
import { useEffect } from "react";

function LastForm(props) {
  return (
    <div className={styles.inputBox}>
      <div className={styles.input}>
        <Textarea
          placeholder={"Description"}
          name={"description"}
          value={props.description}
          onChange={props.onChange}
        />
      </div>
      <div className={styles.input}>
        <MultiSelect />
      </div>
      <div className={styles.input}>
        <div className={styles.fileBoxRight}>
          {props.imgSrc !== ""
            ? <img src={props.imgSrc} className={styles.imgPicture} />
            : null}
          <input
            type="file"
            name="image"
            id="img"
            onChange={props.addFile}
            style={{ "display": "none" }}
            accept={".png, .jpg, .jpeg"}
          />
          <label htmlFor="img" className={styles.fileInput}></label>
        </div>
      </div>
      <div className={styles.btnBox}>
        <div className={styles.btnGray} onClick={() => props.stageBack()}>
          Back
        </div>
        <div className={styles.create} onClick={props.onSubmit}>
          Sign up
        </div>
      </div>
    </div>
  );
}

export default LastForm;
