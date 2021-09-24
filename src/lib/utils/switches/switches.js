/*eslint-disable*/
import React, { useState } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import Switch from "react-switch";
import "./switches.scss";

const CurrikiSwitches = ({ className, disabled, onClick = () => {} }) => {
  const [state, setState] = useState(false);
  const currikiswitches = classNames(
    state === true && "curriki-checked-switches",
    state === false && "curriki-unchecked-switches",
    className
  );
  function handleChange() {
    state === true ? setState(false) : setState(true);
  }
  return (
    <label>
      <Switch
        disabled={disabled}
        className={currikiswitches}
        onChange={handleChange}
        checked={state}
        checkedIcon={false}
        uncheckedIcon={false}
      />
    </label>
  );
};

CurrikiSwitches.propTypes = {
  disabled: PropTypes.bool,
  className: PropTypes.string,

  onClick: PropTypes.func,
};
export default CurrikiSwitches;
