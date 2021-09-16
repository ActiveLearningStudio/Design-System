"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

require("./headingthree.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/*eslint-disable*/
const HeadingThree = _ref => {
  let {
    text,
    color,
    className
  } = _ref;
  const currikiUtility = (0, _classnames.default)("curriki-utility-headingThree", className);
  return /*#__PURE__*/_react.default.createElement("div", {
    className: currikiUtility,
    style: {
      color: color
    }
  }, /*#__PURE__*/_react.default.createElement("h3", null, text));
};

HeadingThree.propTypes = {
  text: _propTypes.default.string,
  color: _propTypes.default.string,
  className: _propTypes.default.string
};
var _default = HeadingThree;
exports.default = _default;