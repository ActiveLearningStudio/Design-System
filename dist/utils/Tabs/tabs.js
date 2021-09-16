"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

require("./tabs.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/*eslint-disable*/
const Tabs = _ref => {
  let {
    text,
    color,
    tabActive = false,
    className
  } = _ref;
  const currikiUtility = (0, _classnames.default)("curriki-utility-tabs", className);
  const currikiUtility_tabs = (0, _classnames.default)(tabActive ? "tabs activeTabs" : "tabs");
  return /*#__PURE__*/_react.default.createElement("div", {
    className: currikiUtility,
    style: {
      color: color
    }
  }, /*#__PURE__*/_react.default.createElement("span", {
    className: currikiUtility_tabs
  }), /*#__PURE__*/_react.default.createElement("div", {
    className: "tab-text"
  }, /*#__PURE__*/_react.default.createElement("p", null, text)));
};

Tabs.propTypes = {
  text: _propTypes.default.string,
  color: _propTypes.default.string,
  className: _propTypes.default.string,
  tabActive: _propTypes.default.bool
};
var _default = Tabs;
exports.default = _default;