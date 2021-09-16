"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _reactFontawesome = require("@fortawesome/react-fontawesome");

var _react = _interopRequireDefault(require("react"));

var _reactBootstrap = require("react-bootstrap");

var _freeSolidSvgIcons = require("@fortawesome/free-solid-svg-icons");

require("./activitycarddropdown.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/*eslint-disable*/
const ActivityCardDropDown = _ref => {
  let {
    iconColor
  } = _ref;
  const IconColor = iconColor ? iconColor : "#084892";
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "curriki-utility-activity-dropdown"
  }, /*#__PURE__*/_react.default.createElement(_reactBootstrap.Dropdown, {
    className: "activity-dropdown check "
  }, /*#__PURE__*/_react.default.createElement(_reactBootstrap.Dropdown.Toggle, {
    className: "activity-dropdown-btn"
  }, /*#__PURE__*/_react.default.createElement(_reactFontawesome.FontAwesomeIcon, {
    icon: _freeSolidSvgIcons.faEllipsisV,
    style: {
      fontSize: "13px",
      color: IconColor,
      marginLeft: "5px"
    }
  })), /*#__PURE__*/_react.default.createElement(_reactBootstrap.Dropdown.Menu, null, /*#__PURE__*/_react.default.createElement(_reactBootstrap.Dropdown.Item, null, /*#__PURE__*/_react.default.createElement(_reactFontawesome.FontAwesomeIcon, {
    icon: _freeSolidSvgIcons.faEdit,
    className: "mr-2"
  }), "Edit"), /*#__PURE__*/_react.default.createElement(_reactBootstrap.Dropdown.Item, null, /*#__PURE__*/_react.default.createElement(_reactFontawesome.FontAwesomeIcon, {
    icon: _freeSolidSvgIcons.faPlusSquare,
    className: "mr-2"
  }), "Add to a project"), /*#__PURE__*/_react.default.createElement(_reactBootstrap.Dropdown.Item, null, /*#__PURE__*/_react.default.createElement(_reactFontawesome.FontAwesomeIcon, {
    icon: _freeSolidSvgIcons.faCopy,
    className: "mr-2"
  }), "Duplicate"), /*#__PURE__*/_react.default.createElement(_reactBootstrap.Dropdown.Item, null, /*#__PURE__*/_react.default.createElement(_reactFontawesome.FontAwesomeIcon, {
    icon: _freeSolidSvgIcons.faTrash,
    className: "mr-2"
  }), "Delete"))));
};

var _default = ActivityCardDropDown;
exports.default = _default;