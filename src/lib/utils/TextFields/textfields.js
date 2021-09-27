/*eslint-disable*/
import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { Form, Row, Col, InputGroup } from "react-bootstrap";
import "./textfields.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const CurrikiTextField = ({
  label,
  placeholder,
  helpertext,
  icon,
  className,
  disabled,
  isError,
  asRow,
  onClick = () => {},
}) => {
  //  const asrow=  function AsRow(){
  //      return (asRow? true : false);
  //    }
  const textfieldclasses = classNames(
    disabled && "curriki-disabled-textfield",
    isError && "curriki-error-textfield",
    className
  );
  return (
    <Form.Group
      controlId="formPlaintextEmail"
      className={"curriki-default-textfield " + textfieldclasses}
    >
      <Form.Label column sm="2">
        {label}
      </Form.Label>
      <Col sm="10">
        {/* <InputGroup>
                            <InputGroup>
                                
                            </InputGroup>
                            <Form.Control
                                type="text"
                                placeholder="Search here.."
                            />
                            <InputGroup.Text>
                                    <FontAwesomeIcon icon={icon} />
                                </InputGroup.Text>
                        </InputGroup> */}
        <Form.Control
          type="email"
          className="ml-8"
          placeholder={placeholder}
          disabled={disabled}
        />
        <Form.Text className="text-muted">{helpertext && helpertext}</Form.Text>
      </Col>
    </Form.Group>
  );
};

CurrikiTextField.propTypes = {
  label: PropTypes.string,
  isError: PropTypes.bool,
  placeholder: PropTypes.string,
  helpertext: PropTypes.string,
  disabled: PropTypes.bool,
  className: PropTypes.string,

  // icon: PropTypes.any,
  // // width: PropTypes.string,
  // // height: PropTypes.string,
  onClick: PropTypes.func,
};
export default CurrikiTextField;
