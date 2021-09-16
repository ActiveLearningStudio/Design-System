"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ProjectPlayListCardProps = exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _projectplaylistcard = _interopRequireDefault(require("./projectplaylistcard"));

var _playlist = _interopRequireDefault(require("../../assets/images/svg/playlist1.svg"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/*eslint-disable*/
var _default = {
  title: "Utilities/ProjectPlayListCard",
  component: _projectplaylistcard.default,
  argTypes: {
    backgroundColor: {
      control: "color"
    }
  }
};
exports.default = _default;

const Template = args => /*#__PURE__*/_react.default.createElement(_projectplaylistcard.default, args);

const playList = [{
  img: _playlist.default,
  title: "Guess the Answer"
}, {
  img: _playlist.default,
  title: "Summary"
}];
const ProjectPlayListCardProps = Template.bind({});
exports.ProjectPlayListCardProps = ProjectPlayListCardProps;
ProjectPlayListCardProps.args = {
  className: "",
  playList: playList,
  title: ""
};