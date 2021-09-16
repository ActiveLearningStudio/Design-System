"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

require("./layoutcard.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/*eslint-disable*/
const LayoutCard = _ref => {
  let {
    image,
    text,
    color,
    className,
    onClick = () => {}
  } = _ref;
  const currikiUtility = (0, _classnames.default)("curriki-utility-layoutcard", className);
  return /*#__PURE__*/_react.default.createElement("div", {
    className: currikiUtility,
    style: {
      color: color
    },
    onClick: onClick
  }, /*#__PURE__*/_react.default.createElement("img", {
    src: image
  }), /*#__PURE__*/_react.default.createElement("p", null, text));
};

LayoutCard.propTypes = {
  image: _propTypes.default.string,
  text: _propTypes.default.string,
  color: _propTypes.default.string,
  className: _propTypes.default.string,
  onClick: _propTypes.default.func
};
var _default = LayoutCard;
exports.default = _default;