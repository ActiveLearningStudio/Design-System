"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.InputLabelProps = exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _inputlabel = _interopRequireDefault(require("./inputlabel"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/*eslint-disable*/
var _default = {
  title: "Utilities/InputLabel",
  component: _inputlabel.default,
  argTypes: {
    backgroundColor: {
      control: "color"
    }
  }
};
exports.default = _default;

const Template = args => /*#__PURE__*/_react.default.createElement(_inputlabel.default, args);

const InputLabelProps = Template.bind({});
exports.InputLabelProps = InputLabelProps;
InputLabelProps.args = {
  text: "",
  color: "",
  className: "",
  id: ""
};