/*eslint-disable*/
import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import "./dropdowns.scss";
import { DropdownButton, Dropdown ,Form} from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const CurrikiDropdowns = ({
  title,
  className,
  primary,
  secondary,
  icon,
  disabled,
  DropdownMenuItem,

  onClick = () => {},
}) => {
  const dropdownCurriki = classNames(
    primary && "curriki-default-primary",
    secondary && "curriki-default-secondary",
    disabled && "curriki-disabled-dropdown",
    className
  );

  return (
    <>
      <DropdownButton
        disabled={disabled}
        className={"curriki-default-dropdown " + dropdownCurriki}
        title={
          <span>
            {" "}
            {title}
            {icon && (
              <FontAwesomeIcon
                icon={icon}
                className={title && "curriki-dropdown-icon"}
              />
            )}
          </span>
        }
      >
        {DropdownMenuItem.map((MenuItem) => {
          return (
            <>
              <Dropdown.Item
                className="curriki-dropdown-item"
                href={MenuItem.linkName}
                target={MenuItem.target}
              >
                {MenuItem.text}
              </Dropdown.Item>
            </>
          );
        })}
      </DropdownButton>
    </>
  );
};

CurrikiDropdowns.propTypes = {
  title: PropTypes.string,
  disabled: PropTypes.bool,
  className: PropTypes.string,
  primary: PropTypes.bool,
  secondary: PropTypes.bool,
  icon: PropTypes.any,
  DropdownMenuItem: PropTypes.array,
  onClick: PropTypes.func,
};
export default CurrikiDropdowns;
