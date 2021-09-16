"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ProjectPlayListProps = exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _projectplaylist = _interopRequireDefault(require("./projectplaylist"));

var _playlist = _interopRequireDefault(require("../../assets/images/svg/playlist1.svg"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/*eslint-disable*/
var _default = {
  title: "Utilities/ProjectPlayList",
  component: _projectplaylist.default,
  argTypes: {
    backgroundColor: {
      control: "color"
    }
  }
};
exports.default = _default;
const playList = [{
  img: _playlist.default,
  title: "Guess the Answer"
}, {
  img: _playlist.default,
  title: "Summary"
}];

const Template = args => /*#__PURE__*/_react.default.createElement(_projectplaylist.default, args);

const ProjectPlayListProps = Template.bind({});
exports.ProjectPlayListProps = ProjectPlayListProps;
ProjectPlayListProps.args = {
  className: "",
  playList: playList
};