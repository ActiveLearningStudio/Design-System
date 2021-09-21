"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("core-js/modules/es.string.includes.js");

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

require("./headings.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/*eslint-disable*/
const Headings = _ref => {
  let {
    text,
    color,
    className,
    headingType,
    italic,
    weight,
    url,
    target,
    size
  } = _ref;
  const currikiUtility = (0, _classnames.default)("curriki-utility-headings", headingType === 'h1' && "heading-one", headingType === 'h2' && "heading-two", headingType === 'h3' && "heading-three", headingType === 'h4' && "heading-four", headingType === 'h5' && "heading-five", headingType === 'h6' && "heading-six", headingType === 'label' && "heading-six", headingType === 'body1' && "paragraph-one", headingType === 'body2' && "paragraph-two", headingType === 'body3' && "paragraph-three", headingType === 'body4' && "paragraph-four", headingType === 'link1' && "link-one", headingType === 'link2' && "link-two", headingType === 'caption' && "paragraph-four", className);
  const currikiStyle = {
    color: color ? color : null,
    fontWeight: weight ? weight : null,
    fontStyle: italic ? 'italic' : null,
    fontSize: size ? size : null
  };
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, headingType === 'h1' && /*#__PURE__*/_react.default.createElement("h1", {
    className: currikiUtility,
    style: currikiStyle
  }, text), headingType === 'h2' && /*#__PURE__*/_react.default.createElement("h2", {
    className: currikiUtility,
    style: currikiStyle
  }, text), headingType === 'h3' && /*#__PURE__*/_react.default.createElement("h3", {
    className: currikiUtility,
    style: currikiStyle
  }, text), headingType === 'h4' && /*#__PURE__*/_react.default.createElement("h4", {
    className: currikiUtility,
    style: currikiStyle
  }, text), headingType === 'h5' && /*#__PURE__*/_react.default.createElement("h5", {
    className: currikiUtility,
    style: currikiStyle
  }, text), headingType === 'h6' && /*#__PURE__*/_react.default.createElement("h6", {
    className: currikiUtility,
    style: currikiStyle
  }, text), headingType === 'label' && /*#__PURE__*/_react.default.createElement("label", {
    className: currikiUtility,
    style: currikiStyle
  }, text), (headingType === null || headingType === void 0 ? void 0 : headingType.includes('body')) && /*#__PURE__*/_react.default.createElement("p", {
    className: currikiUtility,
    style: currikiStyle
  }, text), (headingType === null || headingType === void 0 ? void 0 : headingType.includes('link')) && /*#__PURE__*/_react.default.createElement("a", {
    href: url,
    target: target,
    className: currikiUtility,
    style: currikiStyle
  }, text), (headingType === null || headingType === void 0 ? void 0 : headingType.includes('caption')) && /*#__PURE__*/_react.default.createElement("caption", {
    className: currikiUtility,
    style: currikiStyle
  }, text));
};

Headings.propTypes = {
  headingType: _propTypes.default.string,
  text: _propTypes.default.string,
  color: _propTypes.default.string,
  size: _propTypes.default.string,
  className: _propTypes.default.string,
  weight: _propTypes.default.string,
  italic: _propTypes.default.bool,
  target: _propTypes.default.string,
  url: _propTypes.default.string
};
var _default = Headings;
exports.default = _default;