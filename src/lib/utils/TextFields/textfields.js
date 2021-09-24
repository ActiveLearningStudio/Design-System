/*eslint-disable*/
import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { Form } from "react-bootstrap";
import "./textfields.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const CurrikiTextField = ({ label, className, disabled, onClick = () => {} }) => {
  const disbaledCheckbox = classNames(
    disabled && "curriki-disbaled-checkbox",
    className
  );
  return (
    <Form.Group className="mb-3" controlId="formBasicEmail" className="curriki-default-textfield">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" placeholder="Enter email" />
    <Form.Text className="text-muted">
      We'll never share your email with anyone else.
    </Form.Text>
  </Form.Group>
  );
};

CurrikiTextField.propTypes = {
  label: PropTypes.string,
  disabled: PropTypes.bool,
  className: PropTypes.string,
  // icon: PropTypes.any,
  // // width: PropTypes.string,
  // // height: PropTypes.string,
  onClick: PropTypes.func,
};
export default CurrikiTextField;
