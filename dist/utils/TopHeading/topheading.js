"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("core-js/modules/es.symbol.description.js");

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

require("./topheading.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/*eslint-disable*/
const TopHeading = _ref => {
  let {
    description,
    image,
    heading,
    color
  } = _ref;
  const currikiUtility = (0, _classnames.default)("curriki-utility-TopHeading");
  return /*#__PURE__*/_react.default.createElement("div", {
    className: currikiUtility,
    style: {
      color: color
    }
  }, /*#__PURE__*/_react.default.createElement("p", null, description), /*#__PURE__*/_react.default.createElement("div", {
    className: "curriki-imageHeading"
  }, image && /*#__PURE__*/_react.default.createElement("img", {
    src: image,
    alt: ""
  }), /*#__PURE__*/_react.default.createElement("h1", null, heading)));
};

TopHeading.propTypes = {
  description: _propTypes.default.string,
  image: _propTypes.default.string,
  heading: _propTypes.default.string,
  color: _propTypes.default.string
};
var _default = TopHeading;
exports.default = _default;