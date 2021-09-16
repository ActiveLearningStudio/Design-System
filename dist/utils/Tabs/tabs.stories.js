"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TabsProps = exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _tabs = _interopRequireDefault(require("./tabs"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/*eslint-disable*/
var _default = {
  title: "Utilities/Tabs",
  component: _tabs.default,
  argTypes: {
    backgroundColor: {
      control: "color"
    }
  }
};
exports.default = _default;

const Template = args => /*#__PURE__*/_react.default.createElement(_tabs.default, args);

const TabsProps = Template.bind({});
exports.TabsProps = TabsProps;
TabsProps.args = {
  image: "",
  text: "",
  color: "",
  className: ""
};