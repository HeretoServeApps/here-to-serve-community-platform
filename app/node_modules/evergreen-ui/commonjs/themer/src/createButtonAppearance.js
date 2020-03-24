"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _constants = require("../../constants");

var _createAppearance = _interopRequireDefault(require("./createAppearance"));

var _missingStateWarning = _interopRequireDefault(require("./missingStateWarning"));

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var baseStyle = {
  WebkitFontSmoothing: 'antialiased',
  WebkitAppearance: 'none',
  MozAppearance: 'none',
  verticalAlign: 'middle',
  textDecoration: 'none',
  border: 'none',
  outline: 'none',
  cursor: 'pointer',
  '&::-moz-focus-inner ': {
    border: 0
  }
};
var disabledState = "[disabled], [data-disabled]";
var hoverState = '&:not([disabled]):not([data-disabled]):hover';
var focusState = '&:not([disabled]):not([data-disabled]):focus';
var focusAndActiveState = '&:not([disabled]):not([data-disabled]):focus:active, &:not([disabled]):not([data-disabled])[aria-expanded="true"]:focus, &:not([disabled]):not([data-disabled])[data-active]:focus';
var activeState = '&:not([disabled]):not([data-disabled]):active, &:not([disabled]):not([data-disabled])[aria-expanded="true"], &:not([disabled]):not([data-disabled])[data-active]';
/**
 * @param {object} items - object with a set of items.
 * @return {object} the final appearance.
 */

var createButtonAppearance = function createButtonAppearance() {
  var _objectSpread2;

  var items = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  (0, _missingStateWarning["default"])({
    items: items,
    props: ['base', 'hover', 'focus', 'active', 'focusAndActive', 'disabled'],
    cb: function cb(prop) {
      console.error("Themer.createButtonAppearance() is missing a ".concat(prop, " state in items:"), items);
    }
  });
  return _objectSpread({}, baseStyle, {}, (0, _createAppearance["default"])(items.base), (_objectSpread2 = {}, (0, _defineProperty2["default"])(_objectSpread2, disabledState, _objectSpread({
    cursor: 'not-allowed'
  }, (0, _createAppearance["default"])(items.disabled))), (0, _defineProperty2["default"])(_objectSpread2, hoverState, (0, _createAppearance["default"])(items.hover)), (0, _defineProperty2["default"])(_objectSpread2, focusState, _objectSpread({
    zIndex: _constants.StackingOrder.FOCUSED
  }, (0, _createAppearance["default"])(items.focus))), (0, _defineProperty2["default"])(_objectSpread2, activeState, (0, _createAppearance["default"])(items.active)), (0, _defineProperty2["default"])(_objectSpread2, focusAndActiveState, (0, _createAppearance["default"])(items.focusAndActive)), _objectSpread2));
};

var _default = createButtonAppearance;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy90aGVtZXIvc3JjL2NyZWF0ZUJ1dHRvbkFwcGVhcmFuY2UuanMiXSwibmFtZXMiOlsiYmFzZVN0eWxlIiwiV2Via2l0Rm9udFNtb290aGluZyIsIldlYmtpdEFwcGVhcmFuY2UiLCJNb3pBcHBlYXJhbmNlIiwidmVydGljYWxBbGlnbiIsInRleHREZWNvcmF0aW9uIiwiYm9yZGVyIiwib3V0bGluZSIsImN1cnNvciIsImRpc2FibGVkU3RhdGUiLCJob3ZlclN0YXRlIiwiZm9jdXNTdGF0ZSIsImZvY3VzQW5kQWN0aXZlU3RhdGUiLCJhY3RpdmVTdGF0ZSIsImNyZWF0ZUJ1dHRvbkFwcGVhcmFuY2UiLCJpdGVtcyIsInByb3BzIiwiY2IiLCJwcm9wIiwiY29uc29sZSIsImVycm9yIiwiYmFzZSIsImRpc2FibGVkIiwiaG92ZXIiLCJ6SW5kZXgiLCJTdGFja2luZ09yZGVyIiwiRk9DVVNFRCIsImZvY3VzIiwiYWN0aXZlIiwiZm9jdXNBbmRBY3RpdmUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUE7O0FBQ0E7O0FBQ0E7Ozs7OztBQUVBLElBQU1BLFNBQVMsR0FBRztBQUNoQkMsRUFBQUEsbUJBQW1CLEVBQUUsYUFETDtBQUVoQkMsRUFBQUEsZ0JBQWdCLEVBQUUsTUFGRjtBQUdoQkMsRUFBQUEsYUFBYSxFQUFFLE1BSEM7QUFJaEJDLEVBQUFBLGFBQWEsRUFBRSxRQUpDO0FBS2hCQyxFQUFBQSxjQUFjLEVBQUUsTUFMQTtBQU1oQkMsRUFBQUEsTUFBTSxFQUFFLE1BTlE7QUFPaEJDLEVBQUFBLE9BQU8sRUFBRSxNQVBPO0FBUWhCQyxFQUFBQSxNQUFNLEVBQUUsU0FSUTtBQVNoQiwwQkFBd0I7QUFDdEJGLElBQUFBLE1BQU0sRUFBRTtBQURjO0FBVFIsQ0FBbEI7QUFjQSxJQUFNRyxhQUFhLGdDQUFuQjtBQUNBLElBQU1DLFVBQVUsR0FBRyw4Q0FBbkI7QUFDQSxJQUFNQyxVQUFVLEdBQUcsOENBQW5CO0FBQ0EsSUFBTUMsbUJBQW1CLEdBQ3ZCLG9MQURGO0FBRUEsSUFBTUMsV0FBVyxHQUNmLGtLQURGO0FBR0E7Ozs7O0FBSUEsSUFBTUMsc0JBQXNCLEdBQUcsU0FBekJBLHNCQUF5QixHQUFnQjtBQUFBOztBQUFBLE1BQWZDLEtBQWUsdUVBQVAsRUFBTztBQUM3Qyx1Q0FBb0I7QUFDbEJBLElBQUFBLEtBQUssRUFBTEEsS0FEa0I7QUFFbEJDLElBQUFBLEtBQUssRUFBRSxDQUFDLE1BQUQsRUFBUyxPQUFULEVBQWtCLE9BQWxCLEVBQTJCLFFBQTNCLEVBQXFDLGdCQUFyQyxFQUF1RCxVQUF2RCxDQUZXO0FBR2xCQyxJQUFBQSxFQUFFLEVBQUUsWUFBQUMsSUFBSSxFQUFJO0FBQ1ZDLE1BQUFBLE9BQU8sQ0FBQ0MsS0FBUix3REFDa0RGLElBRGxELHVCQUVFSCxLQUZGO0FBSUQ7QUFSaUIsR0FBcEI7QUFXQSwyQkFDS2YsU0FETCxNQUVLLGtDQUFpQmUsS0FBSyxDQUFDTSxJQUF2QixDQUZMLHlFQUdHWixhQUhIO0FBSUlELElBQUFBLE1BQU0sRUFBRTtBQUpaLEtBS08sa0NBQWlCTyxLQUFLLENBQUNPLFFBQXZCLENBTFAscURBT0daLFVBUEgsRUFPZ0Isa0NBQWlCSyxLQUFLLENBQUNRLEtBQXZCLENBUGhCLG9EQVFHWixVQVJIO0FBU0lhLElBQUFBLE1BQU0sRUFBRUMseUJBQWNDO0FBVDFCLEtBVU8sa0NBQWlCWCxLQUFLLENBQUNZLEtBQXZCLENBVlAscURBWUdkLFdBWkgsRUFZaUIsa0NBQWlCRSxLQUFLLENBQUNhLE1BQXZCLENBWmpCLG9EQWFHaEIsbUJBYkgsRUFheUIsa0NBQWlCRyxLQUFLLENBQUNjLGNBQXZCLENBYnpCO0FBZUQsQ0EzQkQ7O2VBNkJlZixzQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFN0YWNraW5nT3JkZXIgfSBmcm9tICcuLi8uLi9jb25zdGFudHMnXG5pbXBvcnQgY3JlYXRlQXBwZWFyYW5jZSBmcm9tICcuL2NyZWF0ZUFwcGVhcmFuY2UnXG5pbXBvcnQgbWlzc2luZ1N0YXRlV2FybmluZyBmcm9tICcuL21pc3NpbmdTdGF0ZVdhcm5pbmcnXG5cbmNvbnN0IGJhc2VTdHlsZSA9IHtcbiAgV2Via2l0Rm9udFNtb290aGluZzogJ2FudGlhbGlhc2VkJyxcbiAgV2Via2l0QXBwZWFyYW5jZTogJ25vbmUnLFxuICBNb3pBcHBlYXJhbmNlOiAnbm9uZScsXG4gIHZlcnRpY2FsQWxpZ246ICdtaWRkbGUnLFxuICB0ZXh0RGVjb3JhdGlvbjogJ25vbmUnLFxuICBib3JkZXI6ICdub25lJyxcbiAgb3V0bGluZTogJ25vbmUnLFxuICBjdXJzb3I6ICdwb2ludGVyJyxcbiAgJyY6Oi1tb3otZm9jdXMtaW5uZXIgJzoge1xuICAgIGJvcmRlcjogMFxuICB9XG59XG5cbmNvbnN0IGRpc2FibGVkU3RhdGUgPSBgW2Rpc2FibGVkXSwgW2RhdGEtZGlzYWJsZWRdYFxuY29uc3QgaG92ZXJTdGF0ZSA9ICcmOm5vdChbZGlzYWJsZWRdKTpub3QoW2RhdGEtZGlzYWJsZWRdKTpob3ZlcidcbmNvbnN0IGZvY3VzU3RhdGUgPSAnJjpub3QoW2Rpc2FibGVkXSk6bm90KFtkYXRhLWRpc2FibGVkXSk6Zm9jdXMnXG5jb25zdCBmb2N1c0FuZEFjdGl2ZVN0YXRlID1cbiAgJyY6bm90KFtkaXNhYmxlZF0pOm5vdChbZGF0YS1kaXNhYmxlZF0pOmZvY3VzOmFjdGl2ZSwgJjpub3QoW2Rpc2FibGVkXSk6bm90KFtkYXRhLWRpc2FibGVkXSlbYXJpYS1leHBhbmRlZD1cInRydWVcIl06Zm9jdXMsICY6bm90KFtkaXNhYmxlZF0pOm5vdChbZGF0YS1kaXNhYmxlZF0pW2RhdGEtYWN0aXZlXTpmb2N1cydcbmNvbnN0IGFjdGl2ZVN0YXRlID1cbiAgJyY6bm90KFtkaXNhYmxlZF0pOm5vdChbZGF0YS1kaXNhYmxlZF0pOmFjdGl2ZSwgJjpub3QoW2Rpc2FibGVkXSk6bm90KFtkYXRhLWRpc2FibGVkXSlbYXJpYS1leHBhbmRlZD1cInRydWVcIl0sICY6bm90KFtkaXNhYmxlZF0pOm5vdChbZGF0YS1kaXNhYmxlZF0pW2RhdGEtYWN0aXZlXSdcblxuLyoqXG4gKiBAcGFyYW0ge29iamVjdH0gaXRlbXMgLSBvYmplY3Qgd2l0aCBhIHNldCBvZiBpdGVtcy5cbiAqIEByZXR1cm4ge29iamVjdH0gdGhlIGZpbmFsIGFwcGVhcmFuY2UuXG4gKi9cbmNvbnN0IGNyZWF0ZUJ1dHRvbkFwcGVhcmFuY2UgPSAoaXRlbXMgPSB7fSkgPT4ge1xuICBtaXNzaW5nU3RhdGVXYXJuaW5nKHtcbiAgICBpdGVtcyxcbiAgICBwcm9wczogWydiYXNlJywgJ2hvdmVyJywgJ2ZvY3VzJywgJ2FjdGl2ZScsICdmb2N1c0FuZEFjdGl2ZScsICdkaXNhYmxlZCddLFxuICAgIGNiOiBwcm9wID0+IHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoXG4gICAgICAgIGBUaGVtZXIuY3JlYXRlQnV0dG9uQXBwZWFyYW5jZSgpIGlzIG1pc3NpbmcgYSAke3Byb3B9IHN0YXRlIGluIGl0ZW1zOmAsXG4gICAgICAgIGl0ZW1zXG4gICAgICApXG4gICAgfVxuICB9KVxuXG4gIHJldHVybiB7XG4gICAgLi4uYmFzZVN0eWxlLFxuICAgIC4uLmNyZWF0ZUFwcGVhcmFuY2UoaXRlbXMuYmFzZSksXG4gICAgW2Rpc2FibGVkU3RhdGVdOiB7XG4gICAgICBjdXJzb3I6ICdub3QtYWxsb3dlZCcsXG4gICAgICAuLi5jcmVhdGVBcHBlYXJhbmNlKGl0ZW1zLmRpc2FibGVkKVxuICAgIH0sXG4gICAgW2hvdmVyU3RhdGVdOiBjcmVhdGVBcHBlYXJhbmNlKGl0ZW1zLmhvdmVyKSxcbiAgICBbZm9jdXNTdGF0ZV06IHtcbiAgICAgIHpJbmRleDogU3RhY2tpbmdPcmRlci5GT0NVU0VELFxuICAgICAgLi4uY3JlYXRlQXBwZWFyYW5jZShpdGVtcy5mb2N1cylcbiAgICB9LFxuICAgIFthY3RpdmVTdGF0ZV06IGNyZWF0ZUFwcGVhcmFuY2UoaXRlbXMuYWN0aXZlKSxcbiAgICBbZm9jdXNBbmRBY3RpdmVTdGF0ZV06IGNyZWF0ZUFwcGVhcmFuY2UoaXRlbXMuZm9jdXNBbmRBY3RpdmUpXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlQnV0dG9uQXBwZWFyYW5jZVxuIl19