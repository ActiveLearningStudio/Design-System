"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("core-js/modules/es.symbol.description.js");

var _reactFontawesome = require("@fortawesome/react-fontawesome");

var _react = _interopRequireDefault(require("react"));

var _jeshoots = _interopRequireDefault(require("../../assets/images/jeshoots.svg"));

require("./activitycard.scss");

var _freeSolidSvgIcons = require("@fortawesome/free-solid-svg-icons");

var _propTypes = _interopRequireDefault(require("prop-types"));

var _activitycarddropdown = _interopRequireDefault(require("../ActivityCardDropDown/activitycarddropdown"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-disable */
const ActivityCardBox = _ref => {
  let {
    img,
    title,
    description,
    icon
  } = _ref;
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "curriki-utility-activity-card"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "published_card"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "published_card_header"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "published_card_text"
  }, /*#__PURE__*/_react.default.createElement("p", null, /*#__PURE__*/_react.default.createElement("span", null), " Published")), /*#__PURE__*/_react.default.createElement("div", {
    className: "published_card_icon"
  }, /*#__PURE__*/_react.default.createElement(_activitycarddropdown.default, null))), /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("img", {
    src: img,
    alt: ""
  })), /*#__PURE__*/_react.default.createElement("div", {
    className: "published-card-detail"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "published-card-title"
  }, /*#__PURE__*/_react.default.createElement("h4", null, title)), /*#__PURE__*/_react.default.createElement("div", {
    className: "published-card-dialog"
  }, /*#__PURE__*/_react.default.createElement("img", {
    src: _jeshoots.default,
    alt: ""
  }), /*#__PURE__*/_react.default.createElement("p", null, "Dialog Card")), /*#__PURE__*/_react.default.createElement("div", {
    className: "published-card-descrption"
  }, /*#__PURE__*/_react.default.createElement("p", null, description), /*#__PURE__*/_react.default.createElement("h3", null, "Completed: 100%")), /*#__PURE__*/_react.default.createElement("div", {
    className: "published-card-in-links"
  }, /*#__PURE__*/_react.default.createElement("h3", null, "Published in"), /*#__PURE__*/_react.default.createElement("div", {
    className: "published-card-links"
  }, /*#__PURE__*/_react.default.createElement("a", {
    className: "card-links",
    href: "#"
  }, "Project #4"), /*#__PURE__*/_react.default.createElement("a", {
    className: "card-links",
    href: "#"
  }, "Project #2"), /*#__PURE__*/_react.default.createElement(_reactFontawesome.FontAwesomeIcon, {
    icon: _freeSolidSvgIcons.faShareAlt,
    className: "published-share-icon"
  }))))));
};

ActivityCardBox.prototype = {
  img: _propTypes.default.string,
  title: _propTypes.default.string,
  description: _propTypes.default.string,
  icon: _propTypes.default.string
};
var _default = ActivityCardBox;
exports.default = _default;