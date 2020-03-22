import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

import { StackingOrder } from '../../constants';
import createAppearance from './createAppearance';
import missingStateWarning from './missingStateWarning';
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
  missingStateWarning({
    items: items,
    props: ['base', 'hover', 'focus', 'active', 'disabled'],
    cb: function cb(prop) {
      console.error("Themer.createTextDropdownButtonAppearance() is missing a ".concat(prop, " state in items:"), items);
    }
  });
  return _objectSpread({}, baseStyle, {}, createAppearance(items.base), (_objectSpread2 = {}, _defineProperty(_objectSpread2, disabledState, createAppearance(items.disabled)), _defineProperty(_objectSpread2, hoverState, createAppearance(items.hover)), _defineProperty(_objectSpread2, focusState, _objectSpread({
    zIndex: StackingOrder.FOCUSED
  }, createAppearance(items.focus))), _defineProperty(_objectSpread2, activeState, createAppearance(items.active)), _objectSpread2));
};

export default createButtonAppearance;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy90aGVtZXIvc3JjL2NyZWF0ZVRleHREcm9wZG93bkJ1dHRvbkFwcGVhcmFuY2UuanMiXSwibmFtZXMiOlsiU3RhY2tpbmdPcmRlciIsImNyZWF0ZUFwcGVhcmFuY2UiLCJtaXNzaW5nU3RhdGVXYXJuaW5nIiwiYmFzZVN0eWxlIiwiV2Via2l0Rm9udFNtb290aGluZyIsIldlYmtpdEFwcGVhcmFuY2UiLCJNb3pBcHBlYXJhbmNlIiwidmVydGljYWxBbGlnbiIsInRleHREZWNvcmF0aW9uIiwiYm9yZGVyIiwib3V0bGluZSIsImN1cnNvciIsImJhY2tncm91bmQiLCJkaXNhYmxlZFN0YXRlIiwiaG92ZXJTdGF0ZSIsImZvY3VzU3RhdGUiLCJhY3RpdmVTdGF0ZSIsImNyZWF0ZUJ1dHRvbkFwcGVhcmFuY2UiLCJpdGVtcyIsInByb3BzIiwiY2IiLCJwcm9wIiwiY29uc29sZSIsImVycm9yIiwiYmFzZSIsImRpc2FibGVkIiwiaG92ZXIiLCJ6SW5kZXgiLCJGT0NVU0VEIiwiZm9jdXMiLCJhY3RpdmUiXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLFNBQVNBLGFBQVQsUUFBOEIsaUJBQTlCO0FBQ0EsT0FBT0MsZ0JBQVAsTUFBNkIsb0JBQTdCO0FBQ0EsT0FBT0MsbUJBQVAsTUFBZ0MsdUJBQWhDO0FBRUEsSUFBTUMsU0FBUyxHQUFHO0FBQ2hCQyxFQUFBQSxtQkFBbUIsRUFBRSxhQURMO0FBRWhCQyxFQUFBQSxnQkFBZ0IsRUFBRSxNQUZGO0FBR2hCQyxFQUFBQSxhQUFhLEVBQUUsTUFIQztBQUloQkMsRUFBQUEsYUFBYSxFQUFFLFFBSkM7QUFLaEJDLEVBQUFBLGNBQWMsRUFBRSxNQUxBO0FBTWhCQyxFQUFBQSxNQUFNLEVBQUUsTUFOUTtBQU9oQkMsRUFBQUEsT0FBTyxFQUFFLE1BUE87QUFRaEJDLEVBQUFBLE1BQU0sRUFBRSxTQVJRO0FBU2hCQyxFQUFBQSxVQUFVLEVBQUU7QUFUSSxDQUFsQjtBQVlBLElBQU1DLGFBQWEsZ0NBQW5CO0FBQ0EsSUFBTUMsVUFBVSxHQUFHLDhDQUFuQjtBQUNBLElBQU1DLFVBQVUsR0FBRyw4Q0FBbkI7QUFDQSxJQUFNQyxXQUFXLEdBQ2Ysa0tBREY7QUFHQTs7Ozs7QUFJQSxJQUFNQyxzQkFBc0IsR0FBRyxTQUF6QkEsc0JBQXlCLEdBQWdCO0FBQUE7O0FBQUEsTUFBZkMsS0FBZSx1RUFBUCxFQUFPO0FBQzdDaEIsRUFBQUEsbUJBQW1CLENBQUM7QUFDbEJnQixJQUFBQSxLQUFLLEVBQUxBLEtBRGtCO0FBRWxCQyxJQUFBQSxLQUFLLEVBQUUsQ0FBQyxNQUFELEVBQVMsT0FBVCxFQUFrQixPQUFsQixFQUEyQixRQUEzQixFQUFxQyxVQUFyQyxDQUZXO0FBR2xCQyxJQUFBQSxFQUFFLEVBQUUsWUFBQUMsSUFBSSxFQUFJO0FBQ1ZDLE1BQUFBLE9BQU8sQ0FBQ0MsS0FBUixvRUFDOERGLElBRDlELHVCQUVFSCxLQUZGO0FBSUQ7QUFSaUIsR0FBRCxDQUFuQjtBQVdBLDJCQUNLZixTQURMLE1BRUtGLGdCQUFnQixDQUFDaUIsS0FBSyxDQUFDTSxJQUFQLENBRnJCLHdEQUdHWCxhQUhILEVBR21CWixnQkFBZ0IsQ0FBQ2lCLEtBQUssQ0FBQ08sUUFBUCxDQUhuQyxtQ0FJR1gsVUFKSCxFQUlnQmIsZ0JBQWdCLENBQUNpQixLQUFLLENBQUNRLEtBQVAsQ0FKaEMsbUNBS0dYLFVBTEg7QUFNSVksSUFBQUEsTUFBTSxFQUFFM0IsYUFBYSxDQUFDNEI7QUFOMUIsS0FPTzNCLGdCQUFnQixDQUFDaUIsS0FBSyxDQUFDVyxLQUFQLENBUHZCLG9DQVNHYixXQVRILEVBU2lCZixnQkFBZ0IsQ0FBQ2lCLEtBQUssQ0FBQ1ksTUFBUCxDQVRqQztBQVdELENBdkJEOztBQXlCQSxlQUFlYixzQkFBZiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFN0YWNraW5nT3JkZXIgfSBmcm9tICcuLi8uLi9jb25zdGFudHMnXG5pbXBvcnQgY3JlYXRlQXBwZWFyYW5jZSBmcm9tICcuL2NyZWF0ZUFwcGVhcmFuY2UnXG5pbXBvcnQgbWlzc2luZ1N0YXRlV2FybmluZyBmcm9tICcuL21pc3NpbmdTdGF0ZVdhcm5pbmcnXG5cbmNvbnN0IGJhc2VTdHlsZSA9IHtcbiAgV2Via2l0Rm9udFNtb290aGluZzogJ2FudGlhbGlhc2VkJyxcbiAgV2Via2l0QXBwZWFyYW5jZTogJ25vbmUnLFxuICBNb3pBcHBlYXJhbmNlOiAnbm9uZScsXG4gIHZlcnRpY2FsQWxpZ246ICdtaWRkbGUnLFxuICB0ZXh0RGVjb3JhdGlvbjogJ25vbmUnLFxuICBib3JkZXI6ICdub25lJyxcbiAgb3V0bGluZTogJ25vbmUnLFxuICBjdXJzb3I6ICdwb2ludGVyJyxcbiAgYmFja2dyb3VuZDogJ25vbmUnXG59XG5cbmNvbnN0IGRpc2FibGVkU3RhdGUgPSBgW2Rpc2FibGVkXSwgW2RhdGEtZGlzYWJsZWRdYFxuY29uc3QgaG92ZXJTdGF0ZSA9ICcmOm5vdChbZGlzYWJsZWRdKTpub3QoW2RhdGEtZGlzYWJsZWRdKTpob3ZlcidcbmNvbnN0IGZvY3VzU3RhdGUgPSAnJjpub3QoW2Rpc2FibGVkXSk6bm90KFtkYXRhLWRpc2FibGVkXSk6Zm9jdXMnXG5jb25zdCBhY3RpdmVTdGF0ZSA9XG4gICcmOm5vdChbZGlzYWJsZWRdKTpub3QoW2RhdGEtZGlzYWJsZWRdKTphY3RpdmUsICY6bm90KFtkaXNhYmxlZF0pOm5vdChbZGF0YS1kaXNhYmxlZF0pW2FyaWEtZXhwYW5kZWQ9XCJ0cnVlXCJdLCAmOm5vdChbZGlzYWJsZWRdKTpub3QoW2RhdGEtZGlzYWJsZWRdKVtkYXRhLWFjdGl2ZV0nXG5cbi8qKlxuICogQHBhcmFtIHtvYmplY3R9IGl0ZW1zIC0gb2JqZWN0IHdpdGggYSBzZXQgb2YgaXRlbXMuXG4gKiBAcmV0dXJuIHtvYmplY3R9IHRoZSBmaW5hbCBhcHBlYXJhbmNlLlxuICovXG5jb25zdCBjcmVhdGVCdXR0b25BcHBlYXJhbmNlID0gKGl0ZW1zID0ge30pID0+IHtcbiAgbWlzc2luZ1N0YXRlV2FybmluZyh7XG4gICAgaXRlbXMsXG4gICAgcHJvcHM6IFsnYmFzZScsICdob3ZlcicsICdmb2N1cycsICdhY3RpdmUnLCAnZGlzYWJsZWQnXSxcbiAgICBjYjogcHJvcCA9PiB7XG4gICAgICBjb25zb2xlLmVycm9yKFxuICAgICAgICBgVGhlbWVyLmNyZWF0ZVRleHREcm9wZG93bkJ1dHRvbkFwcGVhcmFuY2UoKSBpcyBtaXNzaW5nIGEgJHtwcm9wfSBzdGF0ZSBpbiBpdGVtczpgLFxuICAgICAgICBpdGVtc1xuICAgICAgKVxuICAgIH1cbiAgfSlcblxuICByZXR1cm4ge1xuICAgIC4uLmJhc2VTdHlsZSxcbiAgICAuLi5jcmVhdGVBcHBlYXJhbmNlKGl0ZW1zLmJhc2UpLFxuICAgIFtkaXNhYmxlZFN0YXRlXTogY3JlYXRlQXBwZWFyYW5jZShpdGVtcy5kaXNhYmxlZCksXG4gICAgW2hvdmVyU3RhdGVdOiBjcmVhdGVBcHBlYXJhbmNlKGl0ZW1zLmhvdmVyKSxcbiAgICBbZm9jdXNTdGF0ZV06IHtcbiAgICAgIHpJbmRleDogU3RhY2tpbmdPcmRlci5GT0NVU0VELFxuICAgICAgLi4uY3JlYXRlQXBwZWFyYW5jZShpdGVtcy5mb2N1cylcbiAgICB9LFxuICAgIFthY3RpdmVTdGF0ZV06IGNyZWF0ZUFwcGVhcmFuY2UoaXRlbXMuYWN0aXZlKVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZUJ1dHRvbkFwcGVhcmFuY2VcbiJdfQ==