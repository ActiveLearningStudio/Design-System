"use strict";

require("core-js/modules/web.dom-collections.iterator.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getErrors = getErrors;
exports.alphaNumeric = exports.zeroFill = exports.FadeDiv = exports.maxLength = exports.required = void 0;

require("core-js/modules/es.string.trim.js");

require("core-js/modules/es.regexp.constructor.js");

require("core-js/modules/es.regexp.exec.js");

require("core-js/modules/es.regexp.to-string.js");

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _reactAnimations = require("react-animations");

var _templateObject, _templateObject2;

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function getErrors(e) {
  if (e.errors) {
    if (!Array.isArray(e.errors) && typeof e.errors === 'object') {
      let errors = [];
      Object.keys(e.errors).forEach(key => {
        if (Array.isArray(e.errors[key])) {
          errors = errors.concat(e.errors[key]);
        }
      });
      return {
        errors
      };
    }
  }

  return e;
}

const required = value => !!value && value.trim() ? undefined : '* Required';

exports.required = required;

const maxLength = max => value => value && value.length > max ? "* Must be ".concat(max, " characters or less") : undefined;

exports.maxLength = maxLength;
const fadeAnimation = (0, _styledComponents.keyframes)(_templateObject || (_templateObject = _taggedTemplateLiteral(["", ""])), _reactAnimations.fadeIn);

const FadeDiv = _styledComponents.default.div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  animation: 0.8s ", ";\n"])), fadeAnimation);

exports.FadeDiv = FadeDiv;

const zeroFill = value => {
  const newValue = "00".concat(value);
  return newValue.slice(newValue.length - 2, newValue.length);
};

exports.zeroFill = zeroFill;

const alphaNumeric = value => {
  const alphaNumericRegex = new RegExp('[^0-9a-zA-Z@ ._-]');
  return !alphaNumericRegex.test(value);
};

exports.alphaNumeric = alphaNumeric;