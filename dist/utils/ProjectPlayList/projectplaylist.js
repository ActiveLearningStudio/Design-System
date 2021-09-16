"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

require("./projectplaylist.scss");

var _activitycarddropdown = _interopRequireDefault(require("../ActivityCardDropDown/activitycarddropdown"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/*eslint-disable*/
const ProjectPlayList = _ref => {
  let {
    className,
    playList
  } = _ref;
  const currikiUtility = (0, _classnames.default)("curriki-utility-playlist", className);
  return /*#__PURE__*/_react.default.createElement("div", {
    className: currikiUtility
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "playlist-top"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "playlist-card-title"
  }, /*#__PURE__*/_react.default.createElement("h3", null, "Playlist name #3")), /*#__PURE__*/_react.default.createElement("div", {
    className: "playlist-card-dropdown"
  }, /*#__PURE__*/_react.default.createElement(_activitycarddropdown.default, null))), /*#__PURE__*/_react.default.createElement("div", {
    className: "playlist-items-list"
  }, playList === null || playList === void 0 ? void 0 : playList.map((ltem, index) => {
    return /*#__PURE__*/_react.default.createElement("div", {
      className: "playlist-items",
      key: index
    }, /*#__PURE__*/_react.default.createElement("img", {
      src: ltem.img,
      alt: ""
    }), /*#__PURE__*/_react.default.createElement("p", null, ltem.title));
  })));
};

ProjectPlayList.propTypes = {
  className: _propTypes.default.string,
  playList: _propTypes.default.object
};
var _default = ProjectPlayList;
exports.default = _default;