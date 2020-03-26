"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _createAppearance = _interopRequireDefault(require("./createAppearance"));

var _missingStateWarning = _interopRequireDefault(require("./missingStateWarning"));

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var hoverState = '&[data-isselectable="true"]:hover';
var focusState = '&[data-isselectable="true"]:focus, &[aria-selected="true"]';
var activeState = '&[aria-current="true"], &[data-isselectable="true"]:active';
var currentState = '&[aria-current="true"]';
var baseStyle = {
  '&[data-isselectable="true"]': {
    cursor: 'pointer'
  },
  outline: 'none',
  textDecoration: 'none'
};
/**
 * @param {object} items - object with a set of states.
 * @return {object} the final appearance.
 */

var createRowAppearance = function createRowAppearance() {
  var _objectSpread2;

  var items = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  (0, _missingStateWarning["default"])({
    items: items,
    props: ['base', 'hover', 'active', 'focus', 'current'],
    cb: function cb(prop) {
      console.error("Themer.createRowAppearance() is missing a ".concat(prop, " item"), items);
    }
  });
  return _objectSpread({}, baseStyle, {}, (0, _createAppearance["default"])(items.base), (_objectSpread2 = {}, (0, _defineProperty2["default"])(_objectSpread2, hoverState, (0, _createAppearance["default"])(items.hover)), (0, _defineProperty2["default"])(_objectSpread2, focusState, (0, _createAppearance["default"])(items.focus)), (0, _defineProperty2["default"])(_objectSpread2, activeState, (0, _createAppearance["default"])(items.active)), (0, _defineProperty2["default"])(_objectSpread2, currentState, (0, _createAppearance["default"])(items.current)), _objectSpread2));
};

var _default = createRowAppearance;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy90aGVtZXIvc3JjL2NyZWF0ZVJvd0FwcGVhcmFuY2UuanMiXSwibmFtZXMiOlsiaG92ZXJTdGF0ZSIsImZvY3VzU3RhdGUiLCJhY3RpdmVTdGF0ZSIsImN1cnJlbnRTdGF0ZSIsImJhc2VTdHlsZSIsImN1cnNvciIsIm91dGxpbmUiLCJ0ZXh0RGVjb3JhdGlvbiIsImNyZWF0ZVJvd0FwcGVhcmFuY2UiLCJpdGVtcyIsInByb3BzIiwiY2IiLCJwcm9wIiwiY29uc29sZSIsImVycm9yIiwiYmFzZSIsImhvdmVyIiwiZm9jdXMiLCJhY3RpdmUiLCJjdXJyZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBOztBQUNBOzs7Ozs7QUFFQSxJQUFNQSxVQUFVLEdBQUcsbUNBQW5CO0FBQ0EsSUFBTUMsVUFBVSxHQUFHLDREQUFuQjtBQUNBLElBQU1DLFdBQVcsR0FBRyw0REFBcEI7QUFDQSxJQUFNQyxZQUFZLEdBQUcsd0JBQXJCO0FBRUEsSUFBTUMsU0FBUyxHQUFHO0FBQ2hCLGlDQUErQjtBQUM3QkMsSUFBQUEsTUFBTSxFQUFFO0FBRHFCLEdBRGY7QUFJaEJDLEVBQUFBLE9BQU8sRUFBRSxNQUpPO0FBS2hCQyxFQUFBQSxjQUFjLEVBQUU7QUFMQSxDQUFsQjtBQVFBOzs7OztBQUlBLElBQU1DLG1CQUFtQixHQUFHLFNBQXRCQSxtQkFBc0IsR0FBZ0I7QUFBQTs7QUFBQSxNQUFmQyxLQUFlLHVFQUFQLEVBQU87QUFDMUMsdUNBQW9CO0FBQ2xCQSxJQUFBQSxLQUFLLEVBQUxBLEtBRGtCO0FBRWxCQyxJQUFBQSxLQUFLLEVBQUUsQ0FBQyxNQUFELEVBQVMsT0FBVCxFQUFrQixRQUFsQixFQUE0QixPQUE1QixFQUFxQyxTQUFyQyxDQUZXO0FBR2xCQyxJQUFBQSxFQUFFLEVBQUUsWUFBQUMsSUFBSSxFQUFJO0FBQ1ZDLE1BQUFBLE9BQU8sQ0FBQ0MsS0FBUixxREFDK0NGLElBRC9DLFlBRUVILEtBRkY7QUFJRDtBQVJpQixHQUFwQjtBQVdBLDJCQUNLTCxTQURMLE1BRUssa0NBQWlCSyxLQUFLLENBQUNNLElBQXZCLENBRkwseUVBR0dmLFVBSEgsRUFHZ0Isa0NBQWlCUyxLQUFLLENBQUNPLEtBQXZCLENBSGhCLG9EQUlHZixVQUpILEVBSWdCLGtDQUFpQlEsS0FBSyxDQUFDUSxLQUF2QixDQUpoQixvREFLR2YsV0FMSCxFQUtpQixrQ0FBaUJPLEtBQUssQ0FBQ1MsTUFBdkIsQ0FMakIsb0RBTUdmLFlBTkgsRUFNa0Isa0NBQWlCTSxLQUFLLENBQUNVLE9BQXZCLENBTmxCO0FBUUQsQ0FwQkQ7O2VBc0JlWCxtQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBjcmVhdGVBcHBlYXJhbmNlIGZyb20gJy4vY3JlYXRlQXBwZWFyYW5jZSdcbmltcG9ydCBtaXNzaW5nU3RhdGVXYXJuaW5nIGZyb20gJy4vbWlzc2luZ1N0YXRlV2FybmluZydcblxuY29uc3QgaG92ZXJTdGF0ZSA9ICcmW2RhdGEtaXNzZWxlY3RhYmxlPVwidHJ1ZVwiXTpob3ZlcidcbmNvbnN0IGZvY3VzU3RhdGUgPSAnJltkYXRhLWlzc2VsZWN0YWJsZT1cInRydWVcIl06Zm9jdXMsICZbYXJpYS1zZWxlY3RlZD1cInRydWVcIl0nXG5jb25zdCBhY3RpdmVTdGF0ZSA9ICcmW2FyaWEtY3VycmVudD1cInRydWVcIl0sICZbZGF0YS1pc3NlbGVjdGFibGU9XCJ0cnVlXCJdOmFjdGl2ZSdcbmNvbnN0IGN1cnJlbnRTdGF0ZSA9ICcmW2FyaWEtY3VycmVudD1cInRydWVcIl0nXG5cbmNvbnN0IGJhc2VTdHlsZSA9IHtcbiAgJyZbZGF0YS1pc3NlbGVjdGFibGU9XCJ0cnVlXCJdJzoge1xuICAgIGN1cnNvcjogJ3BvaW50ZXInXG4gIH0sXG4gIG91dGxpbmU6ICdub25lJyxcbiAgdGV4dERlY29yYXRpb246ICdub25lJ1xufVxuXG4vKipcbiAqIEBwYXJhbSB7b2JqZWN0fSBpdGVtcyAtIG9iamVjdCB3aXRoIGEgc2V0IG9mIHN0YXRlcy5cbiAqIEByZXR1cm4ge29iamVjdH0gdGhlIGZpbmFsIGFwcGVhcmFuY2UuXG4gKi9cbmNvbnN0IGNyZWF0ZVJvd0FwcGVhcmFuY2UgPSAoaXRlbXMgPSB7fSkgPT4ge1xuICBtaXNzaW5nU3RhdGVXYXJuaW5nKHtcbiAgICBpdGVtcyxcbiAgICBwcm9wczogWydiYXNlJywgJ2hvdmVyJywgJ2FjdGl2ZScsICdmb2N1cycsICdjdXJyZW50J10sXG4gICAgY2I6IHByb3AgPT4ge1xuICAgICAgY29uc29sZS5lcnJvcihcbiAgICAgICAgYFRoZW1lci5jcmVhdGVSb3dBcHBlYXJhbmNlKCkgaXMgbWlzc2luZyBhICR7cHJvcH0gaXRlbWAsXG4gICAgICAgIGl0ZW1zXG4gICAgICApXG4gICAgfVxuICB9KVxuXG4gIHJldHVybiB7XG4gICAgLi4uYmFzZVN0eWxlLFxuICAgIC4uLmNyZWF0ZUFwcGVhcmFuY2UoaXRlbXMuYmFzZSksXG4gICAgW2hvdmVyU3RhdGVdOiBjcmVhdGVBcHBlYXJhbmNlKGl0ZW1zLmhvdmVyKSxcbiAgICBbZm9jdXNTdGF0ZV06IGNyZWF0ZUFwcGVhcmFuY2UoaXRlbXMuZm9jdXMpLFxuICAgIFthY3RpdmVTdGF0ZV06IGNyZWF0ZUFwcGVhcmFuY2UoaXRlbXMuYWN0aXZlKSxcbiAgICBbY3VycmVudFN0YXRlXTogY3JlYXRlQXBwZWFyYW5jZShpdGVtcy5jdXJyZW50KVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZVJvd0FwcGVhcmFuY2VcbiJdfQ==