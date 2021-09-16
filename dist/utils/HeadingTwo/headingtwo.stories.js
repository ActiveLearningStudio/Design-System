"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.HeadingTwoProps = exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _headingtwo = _interopRequireDefault(require("./headingtwo"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/*eslint-disable*/
var _default = {
  title: "Utilities/HeadingTwo",
  component: _headingtwo.default,
  argTypes: {
    backgroundColor: {
      control: "color"
    }
  }
};
exports.default = _default;

const Template = args => /*#__PURE__*/_react.default.createElement(_headingtwo.default, args);

const HeadingTwoProps = Template.bind({});
exports.HeadingTwoProps = HeadingTwoProps;
HeadingTwoProps.args = {
  text: "",
  color: "",
  className: ""
};