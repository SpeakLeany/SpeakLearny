import React, { useState, useEffect } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import styles from "./PhoneBox.module.scss";
import "./style.css";

function PhoneBox(props) {
  const [phone, setPhone] = useState("");

  useEffect(() => {
    props.onChange({ target: { name: "phone", value: phone } });
  }, [phone]);

  return (
    <div className={styles.box}>
      <PhoneInput
        country={"us"}
        value={phone}
        onChange={(e) => setPhone(e)}
        inputClass={styles.phoneInput}
        buttonClass={styles.phoneButton}
      />
    </div>
  );
}

export default PhoneBox;
