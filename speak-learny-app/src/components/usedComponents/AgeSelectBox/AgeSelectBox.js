import React from "react";
import Select from "react-select";
import { ageStyles } from "../../../assets/css/selectStyles";
import styles from "./AgeSelectBox.module.scss";

function AgeSelectBox(props) {
  const options = [
    { value: "month", label: "Month" },
    { value: "1", label: "1" },
    { value: "2", label: "2" },
    { value: "3", label: "3" },
    { value: "4", label: "4" },
    { value: "5", label: "5" },
    { value: "6", label: "6" },
    { value: "7", label: "7" },
    { value: "8", label: "8" },
    { value: "9", label: "9" },
    { value: "10", label: "10" },
    { value: "11", label: "11" },
    { value: "2020", label: "2020" },
  ];
  return (
    <>
      <div className={styles.box}>
        <Select
          options={options}
          styles={ageStyles}
          defaultValue={{ label: "Month", value: "month" }}
          components={{
            IndicatorSeparator: () => null,
            DropdownIndicator: () => null,
          }}
          onChange={(val) => {
            props.onChange({ target: { name: "month", value: val.value } });
          }}
        />
      </div>
      <div className={styles.box}>
        <Select
          options={options}
          styles={ageStyles}
          defaultValue={{ label: "Day", value: "day" }}
          components={{
            IndicatorSeparator: () => null,
            DropdownIndicator: () => null,
          }}
          onChange={(val) => {
            props.onChange({ target: { name: "day", value: val.value } });
          }}
        />
      </div>
      <div className={styles.box}>
        <Select
          options={options}
          styles={ageStyles}
          defaultValue={{ label: "Year", value: "year" }}
          components={{
            IndicatorSeparator: () => null,
            DropdownIndicator: () => null,
          }}
          onChange={(val) => {
            props.onChange({ target: { name: "year", value: val.value } });
          }}
        />
      </div>
    </>
  );
}

export default AgeSelectBox;
