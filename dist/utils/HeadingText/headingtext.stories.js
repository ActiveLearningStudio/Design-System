"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.HeadingTextProps = exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _headingtext = _interopRequireDefault(require("./headingtext"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/*eslint-disable*/
var _default = {
  title: "Utilities/HeadingText",
  component: _headingtext.default,
  argTypes: {
    backgroundColor: {
      control: "color"
    }
  }
};
exports.default = _default;

const Template = args => /*#__PURE__*/_react.default.createElement(_headingtext.default, args);

const HeadingTextProps = Template.bind({});
exports.HeadingTextProps = HeadingTextProps;
HeadingTextProps.args = {
  text: "",
  color: "",
  className: ""
};