import React, { useState } from "react";
import styles from "./Register.module.scss";
import Select from "react-select";
import { countryStyles } from "../../../../assets/css/selectStyles";
import Search from "../../../usedComponents/Search/Search";
import PhoneBox from "../../../usedComponents/PhoneBox/PhoneBox";
import InputMask from "react-input-mask";

function SecondForm(props) {
  const options = [
    { value: "country", label: "Country" },
    { value: "ukraine", label: "Ukraine" },
    { value: "russian", label: "Russian" },
    { value: "us", label: "United States" },
  ];
  const [valueBirth, setValueBirth] = useState();
  return (
    <div className={styles.inputBox}>
      <div className={styles.input}>
        <Select
          options={options}
          styles={countryStyles}
          defaultValue={{ label: "Country", value: "country" }}
          components={{
            IndicatorSeparator: () => null,
          }}
          onChange={(val) => {
            props.onChange({ target: { name: "country", value: val.value } });
          }}
        />
      </div>
      <div className={styles.input}>
        <Search
          hide={true}
          placeholder={"City"}
          name={"city"}
          value={props.city}
          onChange={props.onChange}
        />
      </div>
      <div className={styles.input}>
        <PhoneBox onChange={props.onChange} />
      </div>
      <div className={styles.input}>
        <InputMask
          mask="9999/99/99"
          name={"birthday"}
          placeholder="Birthday year/month/day"
          className={styles.inputBirth}
          value={props.birthday}
          onChange={props.onChange}
        ></InputMask>
      </div>

      <div className={styles.btnBox}>
        <div className={styles.btnGray} onClick={() => props.stageBack()}>
          Back
        </div>
        <div className={styles.create} onClick={() => props.stageNext()}>
          Next
        </div>
      </div>
    </div>
  );
}

export default SecondForm;
