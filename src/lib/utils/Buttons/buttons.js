/*eslint-disable*/
import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import "./buttons.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


const Buttons = ({
  text,
  type,
  className,
  primary,
  secondary,
  icon,
  width,
  height,
  radius,
  disabled,
 
  onClick = () => {},
}) => {
  const btnCurriki = classNames(
    "curriki-utility",
    primary && "curriki-theme-primary-button",
    secondary && "curriki-theme-secondary-button",
    disabled && "curriki-theme-disabled-button",
    !text && "remove-button-padding",
    className
  );

  const btnCurrikiStyle = {
    height: height ? height : null,
    width: width ? width : null,
    borderRadius: radius ? radius : null,
  };

  return (
    <button
      className={btnCurriki + ' curriki-theme-button'}
      type={type}
      style={btnCurrikiStyle}
      onClick={onClick}
      disabled={disabled}
    >
      {icon && <FontAwesomeIcon icon={icon} className={text && 'curriki_btn-mr-2'} />}
      {text && text}
    </button>
  );
};

Buttons.propTypes = {
  text: PropTypes.string,
  type: PropTypes.string,
  disabled: PropTypes.bool,
  className: PropTypes.string,
  primary: PropTypes.bool,
  secondary: PropTypes.bool,
  icon: PropTypes.any,
  width: PropTypes.string,
  height: PropTypes.string,
  radius: PropTypes.string,
  onClick: PropTypes.func,

};
export default Buttons;
