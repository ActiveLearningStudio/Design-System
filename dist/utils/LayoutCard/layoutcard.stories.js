"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LayoutCardProps = exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _layoutcard = _interopRequireDefault(require("./layoutcard"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/*eslint-disable*/
var _default = {
  title: "Utilities/LayoutCard",
  component: _layoutcard.default,
  argTypes: {
    backgroundColor: {
      control: "color"
    }
  }
};
exports.default = _default;

const Template = args => /*#__PURE__*/_react.default.createElement(_layoutcard.default, args);

const LayoutCardProps = Template.bind({});
exports.LayoutCardProps = LayoutCardProps;
LayoutCardProps.args = {
  image: "",
  text: "",
  color: "",
  className: ""
};