"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

require("./projectplaylistcard.scss");

var _activitycarddropdown = _interopRequireDefault(require("../ActivityCardDropDown/activitycarddropdown"));

var _projectplaylist = _interopRequireDefault(require("../ProjectPlayList/projectplaylist"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/*eslint-disable*/
const ProjectPlayListCard = _ref => {
  let {
    className,
    backgroundImg,
    playList,
    title
  } = _ref;
  const currikiUtility = (0, _classnames.default)("curriki-utility-playlistcard", className);
  return /*#__PURE__*/_react.default.createElement("div", {
    className: currikiUtility
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "playlistcard-top",
    style: {
      backgroundImage: "url(".concat(backgroundImg, ")")
    }
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "playlistcard-dropdown"
  }, /*#__PURE__*/_react.default.createElement(_activitycarddropdown.default, {
    iconColor: "white"
  })), /*#__PURE__*/_react.default.createElement("div", {
    className: "playlistcard-title"
  }, /*#__PURE__*/_react.default.createElement("h2", null, title))), /*#__PURE__*/_react.default.createElement("div", {
    className: "playlistcard-playlist"
  }, /*#__PURE__*/_react.default.createElement(_projectplaylist.default, {
    playList: playList
  })));
};

ProjectPlayListCard.propTypes = {
  className: _propTypes.default.string,
  backgroundImg: _propTypes.default.string,
  playList: _propTypes.default.string,
  title: _propTypes.default.string
};
var _default = ProjectPlayListCard;
exports.default = _default;