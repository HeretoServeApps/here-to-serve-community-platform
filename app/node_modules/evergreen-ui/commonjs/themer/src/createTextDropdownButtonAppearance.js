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
  background: 'none'
};
var disabledState = "[disabled], [data-disabled]";
var hoverState = '&:not([disabled]):not([data-disabled]):hover';
var focusState = '&:not([disabled]):not([data-disabled]):focus';
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
    props: ['base', 'hover', 'focus', 'active', 'disabled'],
    cb: function cb(prop) {
      console.error("Themer.createTextDropdownButtonAppearance() is missing a ".concat(prop, " state in items:"), items);
    }
  });
  return _objectSpread({}, baseStyle, {}, (0, _createAppearance["default"])(items.base), (_objectSpread2 = {}, (0, _defineProperty2["default"])(_objectSpread2, disabledState, (0, _createAppearance["default"])(items.disabled)), (0, _defineProperty2["default"])(_objectSpread2, hoverState, (0, _createAppearance["default"])(items.hover)), (0, _defineProperty2["default"])(_objectSpread2, focusState, _objectSpread({
    zIndex: _constants.StackingOrder.FOCUSED
  }, (0, _createAppearance["default"])(items.focus))), (0, _defineProperty2["default"])(_objectSpread2, activeState, (0, _createAppearance["default"])(items.active)), _objectSpread2));
};

var _default = createButtonAppearance;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy90aGVtZXIvc3JjL2NyZWF0ZVRleHREcm9wZG93bkJ1dHRvbkFwcGVhcmFuY2UuanMiXSwibmFtZXMiOlsiYmFzZVN0eWxlIiwiV2Via2l0Rm9udFNtb290aGluZyIsIldlYmtpdEFwcGVhcmFuY2UiLCJNb3pBcHBlYXJhbmNlIiwidmVydGljYWxBbGlnbiIsInRleHREZWNvcmF0aW9uIiwiYm9yZGVyIiwib3V0bGluZSIsImN1cnNvciIsImJhY2tncm91bmQiLCJkaXNhYmxlZFN0YXRlIiwiaG92ZXJTdGF0ZSIsImZvY3VzU3RhdGUiLCJhY3RpdmVTdGF0ZSIsImNyZWF0ZUJ1dHRvbkFwcGVhcmFuY2UiLCJpdGVtcyIsInByb3BzIiwiY2IiLCJwcm9wIiwiY29uc29sZSIsImVycm9yIiwiYmFzZSIsImRpc2FibGVkIiwiaG92ZXIiLCJ6SW5kZXgiLCJTdGFja2luZ09yZGVyIiwiRk9DVVNFRCIsImZvY3VzIiwiYWN0aXZlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBOztBQUNBOztBQUNBOzs7Ozs7QUFFQSxJQUFNQSxTQUFTLEdBQUc7QUFDaEJDLEVBQUFBLG1CQUFtQixFQUFFLGFBREw7QUFFaEJDLEVBQUFBLGdCQUFnQixFQUFFLE1BRkY7QUFHaEJDLEVBQUFBLGFBQWEsRUFBRSxNQUhDO0FBSWhCQyxFQUFBQSxhQUFhLEVBQUUsUUFKQztBQUtoQkMsRUFBQUEsY0FBYyxFQUFFLE1BTEE7QUFNaEJDLEVBQUFBLE1BQU0sRUFBRSxNQU5RO0FBT2hCQyxFQUFBQSxPQUFPLEVBQUUsTUFQTztBQVFoQkMsRUFBQUEsTUFBTSxFQUFFLFNBUlE7QUFTaEJDLEVBQUFBLFVBQVUsRUFBRTtBQVRJLENBQWxCO0FBWUEsSUFBTUMsYUFBYSxnQ0FBbkI7QUFDQSxJQUFNQyxVQUFVLEdBQUcsOENBQW5CO0FBQ0EsSUFBTUMsVUFBVSxHQUFHLDhDQUFuQjtBQUNBLElBQU1DLFdBQVcsR0FDZixrS0FERjtBQUdBOzs7OztBQUlBLElBQU1DLHNCQUFzQixHQUFHLFNBQXpCQSxzQkFBeUIsR0FBZ0I7QUFBQTs7QUFBQSxNQUFmQyxLQUFlLHVFQUFQLEVBQU87QUFDN0MsdUNBQW9CO0FBQ2xCQSxJQUFBQSxLQUFLLEVBQUxBLEtBRGtCO0FBRWxCQyxJQUFBQSxLQUFLLEVBQUUsQ0FBQyxNQUFELEVBQVMsT0FBVCxFQUFrQixPQUFsQixFQUEyQixRQUEzQixFQUFxQyxVQUFyQyxDQUZXO0FBR2xCQyxJQUFBQSxFQUFFLEVBQUUsWUFBQUMsSUFBSSxFQUFJO0FBQ1ZDLE1BQUFBLE9BQU8sQ0FBQ0MsS0FBUixvRUFDOERGLElBRDlELHVCQUVFSCxLQUZGO0FBSUQ7QUFSaUIsR0FBcEI7QUFXQSwyQkFDS2YsU0FETCxNQUVLLGtDQUFpQmUsS0FBSyxDQUFDTSxJQUF2QixDQUZMLHlFQUdHWCxhQUhILEVBR21CLGtDQUFpQkssS0FBSyxDQUFDTyxRQUF2QixDQUhuQixvREFJR1gsVUFKSCxFQUlnQixrQ0FBaUJJLEtBQUssQ0FBQ1EsS0FBdkIsQ0FKaEIsb0RBS0dYLFVBTEg7QUFNSVksSUFBQUEsTUFBTSxFQUFFQyx5QkFBY0M7QUFOMUIsS0FPTyxrQ0FBaUJYLEtBQUssQ0FBQ1ksS0FBdkIsQ0FQUCxxREFTR2QsV0FUSCxFQVNpQixrQ0FBaUJFLEtBQUssQ0FBQ2EsTUFBdkIsQ0FUakI7QUFXRCxDQXZCRDs7ZUF5QmVkLHNCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgU3RhY2tpbmdPcmRlciB9IGZyb20gJy4uLy4uL2NvbnN0YW50cydcbmltcG9ydCBjcmVhdGVBcHBlYXJhbmNlIGZyb20gJy4vY3JlYXRlQXBwZWFyYW5jZSdcbmltcG9ydCBtaXNzaW5nU3RhdGVXYXJuaW5nIGZyb20gJy4vbWlzc2luZ1N0YXRlV2FybmluZydcblxuY29uc3QgYmFzZVN0eWxlID0ge1xuICBXZWJraXRGb250U21vb3RoaW5nOiAnYW50aWFsaWFzZWQnLFxuICBXZWJraXRBcHBlYXJhbmNlOiAnbm9uZScsXG4gIE1vekFwcGVhcmFuY2U6ICdub25lJyxcbiAgdmVydGljYWxBbGlnbjogJ21pZGRsZScsXG4gIHRleHREZWNvcmF0aW9uOiAnbm9uZScsXG4gIGJvcmRlcjogJ25vbmUnLFxuICBvdXRsaW5lOiAnbm9uZScsXG4gIGN1cnNvcjogJ3BvaW50ZXInLFxuICBiYWNrZ3JvdW5kOiAnbm9uZSdcbn1cblxuY29uc3QgZGlzYWJsZWRTdGF0ZSA9IGBbZGlzYWJsZWRdLCBbZGF0YS1kaXNhYmxlZF1gXG5jb25zdCBob3ZlclN0YXRlID0gJyY6bm90KFtkaXNhYmxlZF0pOm5vdChbZGF0YS1kaXNhYmxlZF0pOmhvdmVyJ1xuY29uc3QgZm9jdXNTdGF0ZSA9ICcmOm5vdChbZGlzYWJsZWRdKTpub3QoW2RhdGEtZGlzYWJsZWRdKTpmb2N1cydcbmNvbnN0IGFjdGl2ZVN0YXRlID1cbiAgJyY6bm90KFtkaXNhYmxlZF0pOm5vdChbZGF0YS1kaXNhYmxlZF0pOmFjdGl2ZSwgJjpub3QoW2Rpc2FibGVkXSk6bm90KFtkYXRhLWRpc2FibGVkXSlbYXJpYS1leHBhbmRlZD1cInRydWVcIl0sICY6bm90KFtkaXNhYmxlZF0pOm5vdChbZGF0YS1kaXNhYmxlZF0pW2RhdGEtYWN0aXZlXSdcblxuLyoqXG4gKiBAcGFyYW0ge29iamVjdH0gaXRlbXMgLSBvYmplY3Qgd2l0aCBhIHNldCBvZiBpdGVtcy5cbiAqIEByZXR1cm4ge29iamVjdH0gdGhlIGZpbmFsIGFwcGVhcmFuY2UuXG4gKi9cbmNvbnN0IGNyZWF0ZUJ1dHRvbkFwcGVhcmFuY2UgPSAoaXRlbXMgPSB7fSkgPT4ge1xuICBtaXNzaW5nU3RhdGVXYXJuaW5nKHtcbiAgICBpdGVtcyxcbiAgICBwcm9wczogWydiYXNlJywgJ2hvdmVyJywgJ2ZvY3VzJywgJ2FjdGl2ZScsICdkaXNhYmxlZCddLFxuICAgIGNiOiBwcm9wID0+IHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoXG4gICAgICAgIGBUaGVtZXIuY3JlYXRlVGV4dERyb3Bkb3duQnV0dG9uQXBwZWFyYW5jZSgpIGlzIG1pc3NpbmcgYSAke3Byb3B9IHN0YXRlIGluIGl0ZW1zOmAsXG4gICAgICAgIGl0ZW1zXG4gICAgICApXG4gICAgfVxuICB9KVxuXG4gIHJldHVybiB7XG4gICAgLi4uYmFzZVN0eWxlLFxuICAgIC4uLmNyZWF0ZUFwcGVhcmFuY2UoaXRlbXMuYmFzZSksXG4gICAgW2Rpc2FibGVkU3RhdGVdOiBjcmVhdGVBcHBlYXJhbmNlKGl0ZW1zLmRpc2FibGVkKSxcbiAgICBbaG92ZXJTdGF0ZV06IGNyZWF0ZUFwcGVhcmFuY2UoaXRlbXMuaG92ZXIpLFxuICAgIFtmb2N1c1N0YXRlXToge1xuICAgICAgekluZGV4OiBTdGFja2luZ09yZGVyLkZPQ1VTRUQsXG4gICAgICAuLi5jcmVhdGVBcHBlYXJhbmNlKGl0ZW1zLmZvY3VzKVxuICAgIH0sXG4gICAgW2FjdGl2ZVN0YXRlXTogY3JlYXRlQXBwZWFyYW5jZShpdGVtcy5hY3RpdmUpXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlQnV0dG9uQXBwZWFyYW5jZVxuIl19