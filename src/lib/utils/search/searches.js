/*eslint-disable*/
import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import SearchField from "react-search-field";
import "./searches.scss";

const CurrikiSearch = ({
  Primary,
  Secondary,
  className,
  disabled,
  placeholder,
  searchText,
  onClick = () => {},
  onChange = () => {},
  onEnter = () => {},
  onSearchClick = () => {},
}) => {
  // const [state, setState] = useState(false);
  const currikisearch = classNames(
    Primary && "curriki-primary-search",
    Secondary && "curriki-secondary-search",
    disabled && Primary && "primary-disbaled-search",
    disabled && Secondary && "secondary-disbaled-search",
    disabled && "primary-disbaled-search",
    className
  );
  return (
      <SearchField
        disabled={disabled}
        placeholder={placeholder && placeholder}
        onChange={onChange}
        onClick={onClick}
        onEnter={onEnter}
        onSearchClick={onSearchClick}
        searchText={searchText && searchText}
        classNames={"curriki-default-search " + currikisearch}
      />
    
  );
};

CurrikiSearch.propTypes = {
  Primary: PropTypes.bool,
  Secondary: PropTypes.bool,
  disabled: PropTypes.bool,
  className: PropTypes.string,
  onClick:PropTypes.func,
  onChange:PropTypes.func,
  onEnter:PropTypes.func,
  onSearchClick: PropTypes.func,
};
export default CurrikiSearch;
