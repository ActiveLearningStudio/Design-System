"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.HeadingThreeProps = exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _headingthree = _interopRequireDefault(require("./headingthree"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/*eslint-disable*/
var _default = {
  title: "Utilities/HeadingThree",
  component: _headingthree.default,
  argTypes: {
    backgroundColor: {
      control: "color"
    }
  }
};
exports.default = _default;

const Template = args => /*#__PURE__*/_react.default.createElement(_headingthree.default, args);

const HeadingThreeProps = Template.bind({});
exports.HeadingThreeProps = HeadingThreeProps;
HeadingThreeProps.args = {
  text: "",
  color: "",
  className: ""
};