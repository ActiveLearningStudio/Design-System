/*eslint-disable*/
import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { Pagination} from "react-bootstrap";
import "./pagination.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const CurrikiPagination = ({
  isBoxes,
  isCircle,
  className,
  disabled,
  onClick = () => {},
}) => {
  
  const currikipagination = classNames(
    isBoxes && "curriki-box-pagination",
    isCircle && "curriki-circle-pagination",
    className
  );
  return (
    <Pagination className={currikipagination}>
  <Pagination.Prev />
  <Pagination.Item>{1}</Pagination.Item>
  <Pagination.Ellipsis />

  <Pagination.Item>{10}</Pagination.Item>
  <Pagination.Item>{11}</Pagination.Item>
  <Pagination.Item active>{12}</Pagination.Item>
  <Pagination.Item>{13}</Pagination.Item>
  <Pagination.Item >{14}</Pagination.Item>

  <Pagination.Ellipsis />
  <Pagination.Item>{20}</Pagination.Item>
  <Pagination.Next />
</Pagination>

  );
};

CurrikiPagination.propTypes = {
  isBoxes: PropTypes.bool,
  isCircle: PropTypes.bool,
  className: PropTypes.string,
  onClick: PropTypes.func,
};
export default CurrikiPagination;
