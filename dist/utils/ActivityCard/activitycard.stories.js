"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ActivityCardBoxProps = exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _activitycard = _interopRequireDefault(require("./activitycard"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/*eslint-disable*/
var _default = {
  title: "Utilities/ActivityCardBox",
  component: _activitycard.default,
  argTypes: {
    backgroundColor: {
      control: "color"
    }
  }
};
exports.default = _default;

const Template = args => /*#__PURE__*/_react.default.createElement(_activitycard.default, args);

const ActivityCardBoxProps = Template.bind({});
exports.ActivityCardBoxProps = ActivityCardBoxProps;
ActivityCardBoxProps.args = {
  img: "",
  title: "",
  description: "",
  icon: ""
};