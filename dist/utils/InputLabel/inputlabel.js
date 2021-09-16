"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

require("./inputlabel.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/*eslint-disable*/
const InputLabel = _ref => {
  let {
    text,
    color,
    className,
    id,
    children
  } = _ref;
  const currikiUtility = (0, _classnames.default)("curriki-utility-inputlabel", className);
  return /*#__PURE__*/_react.default.createElement("label", {
    className: currikiUtility,
    style: {
      color: color
    },
    id: id
  }, text, children);
};

InputLabel.propTypes = {
  text: _propTypes.default.string,
  color: _propTypes.default.string,
  className: _propTypes.default.string,
  id: _propTypes.default.string
};
var _default = InputLabel;
exports.default = _default;