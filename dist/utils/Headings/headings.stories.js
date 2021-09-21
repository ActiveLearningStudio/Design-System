"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.HeadingsProps = exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _headings = _interopRequireDefault(require("./headings"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/*eslint-disable*/
var _default = {
  title: "Typography/Headings",
  component: _headings.default
};
exports.default = _default;

const Template = args => /*#__PURE__*/_react.default.createElement(_headings.default, args);

const HeadingsProps = Template.bind({});
exports.HeadingsProps = HeadingsProps;
HeadingsProps.args = {
  headingType: 'h1',
  text: 'Shaping The future of Learning',
  color: '',
  size: '',
  className: '',
  italic: false,
  weight: '',
  target: '',
  url: ''
};