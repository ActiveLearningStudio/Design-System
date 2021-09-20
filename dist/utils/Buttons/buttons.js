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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/*eslint-disable*/
const Buttons = _ref => {
  let {
    text,
    type,
    className,
    primary,
    secondary,
    icon,
    width,
    height,
    radius,
    disabled,
    onClick = () => {}
  } = _ref;
  const btnCurriki = (0, _classnames.default)("curriki-utility", primary && "curriki-theme-primary-button", secondary && "curriki-theme-secondary-button", disabled && "curriki-theme-disabled-button", !text && "remove-button-padding", className);
  const btnCurrikiStyle = {
    height: height ? height : null,
    width: width ? width : null,
    borderRadius: radius ? radius : null
  };
  return /*#__PURE__*/_react.default.createElement("button", {
    className: btnCurriki + ' curriki-theme-button',
    type: type,
    style: btnCurrikiStyle,
    onClick: onClick,
    disabled: disabled
  }, icon && /*#__PURE__*/_react.default.createElement(_reactFontawesome.FontAwesomeIcon, {
    icon: icon,
    className: text && 'curriki_btn-mr-2'
  }), text && text);
};

Buttons.propTypes = {
  text: _propTypes.default.string,
  type: _propTypes.default.string,
  disabled: _propTypes.default.bool,
  className: _propTypes.default.string,
  primary: _propTypes.default.bool,
  secondary: _propTypes.default.bool,
  icon: _propTypes.default.any,
  width: _propTypes.default.string,
  height: _propTypes.default.string,
  radius: _propTypes.default.string,
  onClick: _propTypes.default.func
};
var _default = Buttons;
exports.default = _default;