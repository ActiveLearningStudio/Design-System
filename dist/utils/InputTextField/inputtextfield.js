"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

require("./inputtextfield.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/*eslint-disable*/
const InputTextField = _ref => {
  let {
    className,
    id,
    placeholder,
    value,
    onChange
  } = _ref;
  const currikiUtility = (0, _classnames.default)("curriki-utility-inputtextfield", className);
  return /*#__PURE__*/_react.default.createElement("input", {
    className: currikiUtility,
    id: id,
    placeholder: placeholder,
    value: value,
    onChange: onChange
  });
};

InputTextField.propTypes = {
  className: _propTypes.default.string,
  id: _propTypes.default.string,
  placeholder: _propTypes.default.string,
  value: _propTypes.default.string,
  onChange: _propTypes.default.func
};
var _default = InputTextField;
exports.default = _default;