/*eslint-disable*/
import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import {Form} from 'react-bootstrap';
import "./checkboxes.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


const Checkboxes = ({
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
  return (
    <Form.Group className="mb-3"  controlId="formBasicCheckbox">
    <Form.Check className="curriki-default-checkbox" type="checkbox" label="Check me out" />
  </Form.Group>
    
  );
};

Checkboxes.propTypes = {
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
export default Checkboxes;
