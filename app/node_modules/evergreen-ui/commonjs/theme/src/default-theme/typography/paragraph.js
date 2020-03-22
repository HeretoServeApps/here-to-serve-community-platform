"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _text = _interopRequireDefault(require("./text"));

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

/**
 * Text styles for paragraphs (multi line text).
 * This is used in the Paragraph.
 * @property {Object} text.500 - Required property.
 * @property {Object} text.400 - Required property. Default.
 * @property {Object} text.300 - Required property.
 */
var _default = {
  '500': _objectSpread({}, _text["default"]['500'], {
    lineHeight: '24px'
  }),
  '400': _objectSpread({}, _text["default"]['400'], {
    lineHeight: '21px'
  }),
  '300': _objectSpread({}, _text["default"]['300'], {
    lineHeight: '18px'
  })
};
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy90aGVtZS9zcmMvZGVmYXVsdC10aGVtZS90eXBvZ3JhcGh5L3BhcmFncmFwaC5qcyJdLCJuYW1lcyI6WyJ0ZXh0IiwibGluZUhlaWdodCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQTs7Ozs7O0FBRUE7Ozs7Ozs7ZUFPZTtBQUNiLDJCQUNLQSxpQkFBSyxLQUFMLENBREw7QUFFRUMsSUFBQUEsVUFBVSxFQUFFO0FBRmQsSUFEYTtBQUtiLDJCQUNLRCxpQkFBSyxLQUFMLENBREw7QUFFRUMsSUFBQUEsVUFBVSxFQUFFO0FBRmQsSUFMYTtBQVNiLDJCQUNLRCxpQkFBSyxLQUFMLENBREw7QUFFRUMsSUFBQUEsVUFBVSxFQUFFO0FBRmQ7QUFUYSxDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHRleHQgZnJvbSAnLi90ZXh0J1xuXG4vKipcbiAqIFRleHQgc3R5bGVzIGZvciBwYXJhZ3JhcGhzIChtdWx0aSBsaW5lIHRleHQpLlxuICogVGhpcyBpcyB1c2VkIGluIHRoZSBQYXJhZ3JhcGguXG4gKiBAcHJvcGVydHkge09iamVjdH0gdGV4dC41MDAgLSBSZXF1aXJlZCBwcm9wZXJ0eS5cbiAqIEBwcm9wZXJ0eSB7T2JqZWN0fSB0ZXh0LjQwMCAtIFJlcXVpcmVkIHByb3BlcnR5LiBEZWZhdWx0LlxuICogQHByb3BlcnR5IHtPYmplY3R9IHRleHQuMzAwIC0gUmVxdWlyZWQgcHJvcGVydHkuXG4gKi9cbmV4cG9ydCBkZWZhdWx0IHtcbiAgJzUwMCc6IHtcbiAgICAuLi50ZXh0Wyc1MDAnXSxcbiAgICBsaW5lSGVpZ2h0OiAnMjRweCdcbiAgfSxcbiAgJzQwMCc6IHtcbiAgICAuLi50ZXh0Wyc0MDAnXSxcbiAgICBsaW5lSGVpZ2h0OiAnMjFweCdcbiAgfSxcbiAgJzMwMCc6IHtcbiAgICAuLi50ZXh0WyczMDAnXSxcbiAgICBsaW5lSGVpZ2h0OiAnMThweCdcbiAgfVxufVxuIl19