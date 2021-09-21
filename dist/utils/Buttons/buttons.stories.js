"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ButtonProps = exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _buttons = _interopRequireDefault(require("./buttons"));

var _freeSolidSvgIcons = require("@fortawesome/free-solid-svg-icons");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/*eslint-disable*/
var _default = {
  title: "Utilities/Buttons",
  component: _buttons.default,
  argTypes: {
    backgroundColor: {
      control: "color"
    }
  }
};
exports.default = _default;

const Template = args => /*#__PURE__*/_react.default.createElement(_buttons.default, args);

const ButtonProps = Template.bind({});
exports.ButtonProps = ButtonProps;
ButtonProps.args = {
  primary: true,
  secondary: false,
  disabled: false,
  icon: _freeSolidSvgIcons.faTimes,
  width: "",
  height: "",
  radius: "",
  text: "text",
  type: "submit"
};