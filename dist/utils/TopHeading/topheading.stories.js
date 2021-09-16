"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TopHeadingProps = exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _topheading = _interopRequireDefault(require("./topheading"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/*eslint-disable*/
var _default = {
  title: "Utilities/TopHeading",
  component: _topheading.default,
  argTypes: {
    backgroundColor: {
      control: "color"
    }
  }
};
exports.default = _default;

const Template = args => /*#__PURE__*/_react.default.createElement(_topheading.default, args);

const TopHeadingProps = Template.bind({});
exports.TopHeadingProps = TopHeadingProps;
TopHeadingProps.args = {
  description: "",
  image: "",
  heading: "",
  color: ""
};