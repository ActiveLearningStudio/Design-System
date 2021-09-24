/*eslint-disable*/
import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { Form } from "react-bootstrap";
import "./radiobuttons.scss";

const RadioButtons = ({
  primary,
  secondary,
  label,
  className,
  disabled,
  onClick = () => {},
}) => {
  const disbaledCheckbox = classNames(
    primary && "curriki-primary-radiobutton ",
    secondary && "curriki-secondary-radiobutton",
    disabled && "curriki-disbaled-radiobutton",
    className
  );
  return (
    <Form.Group className="mb-3" controlId="formBasicCheckbox">
      <Form.Check
        className={"curriki-default-radiobutton " + disbaledCheckbox}
        type="radio"
        aria-label="radio1"
        label={label && label}
      />
    </Form.Group>
  );
};

RadioButtons.propTypes = {
  primary: PropTypes.bool,
  secondary: PropTypes.bool,
  label: PropTypes.string,
  disabled: PropTypes.bool,
  className: PropTypes.string,

  onClick: PropTypes.func,
};
export default RadioButtons;
