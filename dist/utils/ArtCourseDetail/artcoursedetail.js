"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

require("./artcoursedetail.scss");

var _artcourseimg = _interopRequireDefault(require("../../assets/images/artcourseimg.png"));

var _headingthree = _interopRequireDefault(require("../HeadingThree/headingthree"));

var _headingtext = _interopRequireDefault(require("../HeadingText/headingtext"));

var _reactFontawesome = require("@fortawesome/react-fontawesome");

var _freeSolidSvgIcons = require("@fortawesome/free-solid-svg-icons");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/*eslint-disable*/
const ArtCourseDetail = _ref => {
  let {
    className
  } = _ref;
  const currikiUtility = (0, _classnames.default)("curriki-utility-artcourse", className);
  return /*#__PURE__*/_react.default.createElement("div", {
    className: currikiUtility
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "artcourse-img"
  }, /*#__PURE__*/_react.default.createElement("img", {
    src: _artcourseimg.default,
    alt: "ArtCourseImage"
  })), /*#__PURE__*/_react.default.createElement("div", {
    className: "artcourse-detail"
  }, /*#__PURE__*/_react.default.createElement(_headingthree.default, {
    text: "Description",
    color: "#084892"
  }), /*#__PURE__*/_react.default.createElement(_headingtext.default, {
    text: "Ed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur.",
    color: "#515151",
    className: "artcourse-description"
  }), /*#__PURE__*/_react.default.createElement("div", {
    className: "artcourse-links-icons"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "link-icons"
  }, /*#__PURE__*/_react.default.createElement("a", {
    href: "#",
    className: "artcourse_link"
  }, /*#__PURE__*/_react.default.createElement(_reactFontawesome.FontAwesomeIcon, {
    icon: _freeSolidSvgIcons.faExternalLinkAlt,
    className: "artcourse-icon"
  }), "Share project"), /*#__PURE__*/_react.default.createElement("a", {
    href: "#",
    className: "artcourse_link"
  }, /*#__PURE__*/_react.default.createElement(_reactFontawesome.FontAwesomeIcon, {
    icon: _freeSolidSvgIcons.faEye,
    className: "artcourse-icon"
  }), "Preview"), /*#__PURE__*/_react.default.createElement("a", {
    href: "#",
    className: "artcourse_link"
  }, /*#__PURE__*/_react.default.createElement(_reactFontawesome.FontAwesomeIcon, {
    icon: _freeSolidSvgIcons.faTrashAlt,
    className: "artcourse-icon"
  }), "Delete")))));
};

ArtCourseDetail.propTypes = {
  className: _propTypes.default.string
};
var _default = ArtCourseDetail;
exports.default = _default;