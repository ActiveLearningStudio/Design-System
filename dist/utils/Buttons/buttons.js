"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

require("./buttons.scss");

var _reactFontawesome = require("@fortawesome/react-fontawesome");

var _freeSolidSvgIcons = require("@fortawesome/free-solid-svg-icons");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/*eslint-disable*/
const Buttons = _ref => {
  let {
    text,
    type,
    className,
    primary,
    secondary,
    defaultgrey,
    defaultwhite,
    icon,
    width,
    height,
    radius,
    disabled,
    hover,
    onClick = () => {}
  } = _ref;
  const btnCurriki = (0, _classnames.default)("curriki-utility", primary && "curriki-theme-primary-button", secondary && "curriki-theme-secondary-button", defaultgrey && "curriki-theme-defaultgrey-button", defaultwhite && "curriki-theme-defaultwhite-button", hover && "curriki-theme-hover", className);
  const btnCurrikiStyle = {
    height: height ? height : null,
    width: width ? width : null,
    borderRadius: radius ? radius : null
  };
  return /*#__PURE__*/_react.default.createElement("button", {
    className: btnCurriki,
    type: type,
    style: btnCurrikiStyle,
    onClick: onClick,
    disabled: disabled
  }, icon && /*#__PURE__*/_react.default.createElement(_reactFontawesome.FontAwesomeIcon, {
    icon: icon,
    className: "curriki_btn-mr-2"
  }), text);
};

Buttons.propTypes = {
  text: _propTypes.default.string.isRequired,
  type: _propTypes.default.string.isRequired,
  className: _propTypes.default.string,
  primary: _propTypes.default.bool,
  secondary: _propTypes.default.bool,
  defaultgrey: _propTypes.default.bool,
  defaultwhite: _propTypes.default.bool,
  icon: _propTypes.default.string,
  width: _propTypes.default.string,
  height: _propTypes.default.string,
  radius: _propTypes.default.string,
  onClick: _propTypes.default.func,
  disabled: _propTypes.default.bool,
  hover: _propTypes.default.bool
};
var _default = Buttons;
exports.default = _default;