/*eslint-disable*/
import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { Tabs,Tab } from "react-bootstrap";
 
import "./tabs.scss";

const Currikitabs = ({
  primary,
  secondary,
  tertiary,
  className,
  disabled,
  onClick = () => {},
}) => {
  const currikitabs = classNames(
    primary && "curriki-primary-tabs ",
    secondary && "curriki-secondary-tabs",
    tertiary && "curriki-tertiary-tabs",
    disabled && "curriki-disbaled-tab",
    className
  );
  return (
    <div className={"curriki-primary-tabs "+ currikitabs}>
   
<Tabs   defaultActiveKey="first">
        <Tab  eventKey="first" title="Dashbaord" >
          Hii, I am 1st tab content
        </Tab>
        <Tab eventKey="second" title="Setting" disabled={disabled}>
          Hii, I am 2nd tab content
        </Tab>
        <Tab eventKey="third" title="Aboutus">
          Hii, I am 3rd tab content
        </Tab>
      </Tabs>
</div>
  );
};

Currikitabs.propTypes = {
  primary: PropTypes.bool,
  secondary: PropTypes.bool,
  label: PropTypes.string,
  disabled: PropTypes.bool,
  className: PropTypes.string,

  onClick: PropTypes.func,
};
export default Currikitabs;
