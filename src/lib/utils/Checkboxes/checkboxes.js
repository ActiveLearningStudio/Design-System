/*eslint-disable*/
import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { Form } from "react-bootstrap";
import "./checkboxes.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Checkboxes = ({ label, className, disabled, onClick = () => {} }) => {
  const disbaledCheckbox = classNames(
    disabled && "curriki-disbaled-checkbox",
    className
  );
  return (
    <Form.Group className="mb-3" controlId="formBasicCheckbox">
      <Form.Check
        disabled={disabled}
        className={"curriki-default-checkbox " + disbaledCheckbox}
        type="checkbox"
        label={label && label}
      />
    </Form.Group>
  );
};

Checkboxes.propTypes = {
  label: PropTypes.string,
  disabled: PropTypes.bool,
  className: PropTypes.string,
  // icon: PropTypes.any,
  // // width: PropTypes.string,
  // // height: PropTypes.string,
  onClick: PropTypes.func,
};
export default Checkboxes;
