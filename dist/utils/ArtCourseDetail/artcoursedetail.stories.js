"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ArtCourseDetailProps = exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _artcoursedetail = _interopRequireDefault(require("./artcoursedetail"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/*eslint-disable*/
var _default = {
  title: "Utilities/ArtCourseDetail",
  component: _artcoursedetail.default,
  argTypes: {
    backgroundColor: {
      control: "color"
    }
  }
};
exports.default = _default;

const Template = args => /*#__PURE__*/_react.default.createElement(_artcoursedetail.default, args);

const ArtCourseDetailProps = Template.bind({});
exports.ArtCourseDetailProps = ArtCourseDetailProps;
ArtCourseDetailProps.args = {
  className: ""
};