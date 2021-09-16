"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ActivityCardDropDownProps = exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _activitycarddropdown = _interopRequireDefault(require("./activitycarddropdown"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/*eslint-disable*/
var _default = {
  title: "Utilities/ActivityCardDropDown",
  component: _activitycarddropdown.default,
  argTypes: {
    backgroundColor: {
      control: "color"
    }
  }
};
exports.default = _default;

const Template = args => /*#__PURE__*/_react.default.createElement(_activitycarddropdown.default, args);

const ActivityCardDropDownProps = Template.bind({});
exports.ActivityCardDropDownProps = ActivityCardDropDownProps;
ActivityCardDropDownProps.args = {
  iconColor: ""
};