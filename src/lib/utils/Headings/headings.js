/*eslint-disable*/
import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import "./headings.scss";

const Headings = ({ text, color, className, headingType, italic, weight, url, target, size }) => {
  const currikiUtility = classNames(
    "curriki-utility-headings",
    headingType === 'h1' && "heading-one",
    headingType === 'h2' && "heading-two",
    headingType === 'h3' && "heading-three",
    headingType === 'h4' && "heading-four",
    headingType === 'h5' && "heading-five",
    headingType === 'h6' && "heading-six",
    headingType === 'label' && "heading-six",
    headingType === 'body1' && "paragraph-one",
    headingType === 'body2' && "paragraph-two",
    headingType === 'body3' && "paragraph-three",
    headingType === 'body4' && "paragraph-four",
    headingType === 'link1' && "link-one",
    headingType === 'link2' && "link-two",
    headingType === 'caption' && "paragraph-four",
    className
  );
  const currikiStyle = {
    color: color ? color : null,
    fontWeight: weight ? weight : null,
    fontStyle: italic ? 'italic' : null,
    fontSize: size ? size : null,
  };
  return (
    <>
    {headingType === 'h1' && (
      <h1 className={currikiUtility} style={currikiStyle}>{text}</h1>
    )}
     {headingType === 'h2' && (
      <h2 className={currikiUtility} style={currikiStyle}>{text}</h2>
    )}
     {headingType === 'h3' && (
      <h3 className={currikiUtility} style={currikiStyle}>{text}</h3>
    )}
    {headingType === 'h4' && (
      <h4 className={currikiUtility} style={currikiStyle}>{text}</h4>
    )}
    {headingType === 'h5' && (
      <h5 className={currikiUtility} style={currikiStyle}>{text}</h5>
    )}
    {headingType === 'h6' && (
      <h6 className={currikiUtility} style={currikiStyle}>{text}</h6>
    )}
    {headingType === 'label' && (
      <label className={currikiUtility} style={currikiStyle}>{text}</label>
    )}
    {headingType?.includes('body') && (
      <p className={currikiUtility} style={currikiStyle}>{text}</p>
    )}
    {headingType?.includes('link') && (
      <a href={url} target={target} className={currikiUtility} style={currikiStyle}>{text}</a>
    )}
    {headingType?.includes('caption') && (
      <caption className={currikiUtility} style={currikiStyle}>{text}</caption>
    )}
   </>
  );
};
Headings.propTypes = {
  headingType: PropTypes.string,
  text: PropTypes.string,
  color: PropTypes.string,
  size: PropTypes.string,
  className: PropTypes.string,
  weight: PropTypes.string,
  italic: PropTypes.bool,
  target: PropTypes.string,
  url: PropTypes.string,
};

export default Headings;
