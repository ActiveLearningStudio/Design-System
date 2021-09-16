"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.InputTextFieldProps = exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _inputtextfield = _interopRequireDefault(require("./inputtextfield"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/*eslint-disable*/
var _default = {
  title: "Utilities/InputTextField",
  component: _inputtextfield.default,
  argTypes: {
    backgroundColor: {
      control: "color"
    }
  }
};
exports.default = _default;

const Template = args => /*#__PURE__*/_react.default.createElement(_inputtextfield.default, args);

const InputTextFieldProps = Template.bind({});
exports.InputTextFieldProps = InputTextFieldProps;
InputTextFieldProps.args = {
  className: "",
  id: "",
  placeholder: "",
  value: "",
  onChange: ""
};