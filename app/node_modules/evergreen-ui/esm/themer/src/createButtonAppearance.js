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
  missingStateWarning({
    items: items,
    props: ['base', 'hover', 'focus', 'active', 'focusAndActive', 'disabled'],
    cb: function cb(prop) {
      console.error("Themer.createButtonAppearance() is missing a ".concat(prop, " state in items:"), items);
    }
  });
  return _objectSpread({}, baseStyle, {}, createAppearance(items.base), (_objectSpread2 = {}, _defineProperty(_objectSpread2, disabledState, _objectSpread({
    cursor: 'not-allowed'
  }, createAppearance(items.disabled))), _defineProperty(_objectSpread2, hoverState, createAppearance(items.hover)), _defineProperty(_objectSpread2, focusState, _objectSpread({
    zIndex: StackingOrder.FOCUSED
  }, createAppearance(items.focus))), _defineProperty(_objectSpread2, activeState, createAppearance(items.active)), _defineProperty(_objectSpread2, focusAndActiveState, createAppearance(items.focusAndActive)), _objectSpread2));
};

export default createButtonAppearance;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy90aGVtZXIvc3JjL2NyZWF0ZUJ1dHRvbkFwcGVhcmFuY2UuanMiXSwibmFtZXMiOlsiU3RhY2tpbmdPcmRlciIsImNyZWF0ZUFwcGVhcmFuY2UiLCJtaXNzaW5nU3RhdGVXYXJuaW5nIiwiYmFzZVN0eWxlIiwiV2Via2l0Rm9udFNtb290aGluZyIsIldlYmtpdEFwcGVhcmFuY2UiLCJNb3pBcHBlYXJhbmNlIiwidmVydGljYWxBbGlnbiIsInRleHREZWNvcmF0aW9uIiwiYm9yZGVyIiwib3V0bGluZSIsImN1cnNvciIsImRpc2FibGVkU3RhdGUiLCJob3ZlclN0YXRlIiwiZm9jdXNTdGF0ZSIsImZvY3VzQW5kQWN0aXZlU3RhdGUiLCJhY3RpdmVTdGF0ZSIsImNyZWF0ZUJ1dHRvbkFwcGVhcmFuY2UiLCJpdGVtcyIsInByb3BzIiwiY2IiLCJwcm9wIiwiY29uc29sZSIsImVycm9yIiwiYmFzZSIsImRpc2FibGVkIiwiaG92ZXIiLCJ6SW5kZXgiLCJGT0NVU0VEIiwiZm9jdXMiLCJhY3RpdmUiLCJmb2N1c0FuZEFjdGl2ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEsU0FBU0EsYUFBVCxRQUE4QixpQkFBOUI7QUFDQSxPQUFPQyxnQkFBUCxNQUE2QixvQkFBN0I7QUFDQSxPQUFPQyxtQkFBUCxNQUFnQyx1QkFBaEM7QUFFQSxJQUFNQyxTQUFTLEdBQUc7QUFDaEJDLEVBQUFBLG1CQUFtQixFQUFFLGFBREw7QUFFaEJDLEVBQUFBLGdCQUFnQixFQUFFLE1BRkY7QUFHaEJDLEVBQUFBLGFBQWEsRUFBRSxNQUhDO0FBSWhCQyxFQUFBQSxhQUFhLEVBQUUsUUFKQztBQUtoQkMsRUFBQUEsY0FBYyxFQUFFLE1BTEE7QUFNaEJDLEVBQUFBLE1BQU0sRUFBRSxNQU5RO0FBT2hCQyxFQUFBQSxPQUFPLEVBQUUsTUFQTztBQVFoQkMsRUFBQUEsTUFBTSxFQUFFLFNBUlE7QUFTaEIsMEJBQXdCO0FBQ3RCRixJQUFBQSxNQUFNLEVBQUU7QUFEYztBQVRSLENBQWxCO0FBY0EsSUFBTUcsYUFBYSxnQ0FBbkI7QUFDQSxJQUFNQyxVQUFVLEdBQUcsOENBQW5CO0FBQ0EsSUFBTUMsVUFBVSxHQUFHLDhDQUFuQjtBQUNBLElBQU1DLG1CQUFtQixHQUN2QixvTEFERjtBQUVBLElBQU1DLFdBQVcsR0FDZixrS0FERjtBQUdBOzs7OztBQUlBLElBQU1DLHNCQUFzQixHQUFHLFNBQXpCQSxzQkFBeUIsR0FBZ0I7QUFBQTs7QUFBQSxNQUFmQyxLQUFlLHVFQUFQLEVBQU87QUFDN0NoQixFQUFBQSxtQkFBbUIsQ0FBQztBQUNsQmdCLElBQUFBLEtBQUssRUFBTEEsS0FEa0I7QUFFbEJDLElBQUFBLEtBQUssRUFBRSxDQUFDLE1BQUQsRUFBUyxPQUFULEVBQWtCLE9BQWxCLEVBQTJCLFFBQTNCLEVBQXFDLGdCQUFyQyxFQUF1RCxVQUF2RCxDQUZXO0FBR2xCQyxJQUFBQSxFQUFFLEVBQUUsWUFBQUMsSUFBSSxFQUFJO0FBQ1ZDLE1BQUFBLE9BQU8sQ0FBQ0MsS0FBUix3REFDa0RGLElBRGxELHVCQUVFSCxLQUZGO0FBSUQ7QUFSaUIsR0FBRCxDQUFuQjtBQVdBLDJCQUNLZixTQURMLE1BRUtGLGdCQUFnQixDQUFDaUIsS0FBSyxDQUFDTSxJQUFQLENBRnJCLHdEQUdHWixhQUhIO0FBSUlELElBQUFBLE1BQU0sRUFBRTtBQUpaLEtBS09WLGdCQUFnQixDQUFDaUIsS0FBSyxDQUFDTyxRQUFQLENBTHZCLG9DQU9HWixVQVBILEVBT2dCWixnQkFBZ0IsQ0FBQ2lCLEtBQUssQ0FBQ1EsS0FBUCxDQVBoQyxtQ0FRR1osVUFSSDtBQVNJYSxJQUFBQSxNQUFNLEVBQUUzQixhQUFhLENBQUM0QjtBQVQxQixLQVVPM0IsZ0JBQWdCLENBQUNpQixLQUFLLENBQUNXLEtBQVAsQ0FWdkIsb0NBWUdiLFdBWkgsRUFZaUJmLGdCQUFnQixDQUFDaUIsS0FBSyxDQUFDWSxNQUFQLENBWmpDLG1DQWFHZixtQkFiSCxFQWF5QmQsZ0JBQWdCLENBQUNpQixLQUFLLENBQUNhLGNBQVAsQ0FiekM7QUFlRCxDQTNCRDs7QUE2QkEsZUFBZWQsc0JBQWYiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBTdGFja2luZ09yZGVyIH0gZnJvbSAnLi4vLi4vY29uc3RhbnRzJ1xuaW1wb3J0IGNyZWF0ZUFwcGVhcmFuY2UgZnJvbSAnLi9jcmVhdGVBcHBlYXJhbmNlJ1xuaW1wb3J0IG1pc3NpbmdTdGF0ZVdhcm5pbmcgZnJvbSAnLi9taXNzaW5nU3RhdGVXYXJuaW5nJ1xuXG5jb25zdCBiYXNlU3R5bGUgPSB7XG4gIFdlYmtpdEZvbnRTbW9vdGhpbmc6ICdhbnRpYWxpYXNlZCcsXG4gIFdlYmtpdEFwcGVhcmFuY2U6ICdub25lJyxcbiAgTW96QXBwZWFyYW5jZTogJ25vbmUnLFxuICB2ZXJ0aWNhbEFsaWduOiAnbWlkZGxlJyxcbiAgdGV4dERlY29yYXRpb246ICdub25lJyxcbiAgYm9yZGVyOiAnbm9uZScsXG4gIG91dGxpbmU6ICdub25lJyxcbiAgY3Vyc29yOiAncG9pbnRlcicsXG4gICcmOjotbW96LWZvY3VzLWlubmVyICc6IHtcbiAgICBib3JkZXI6IDBcbiAgfVxufVxuXG5jb25zdCBkaXNhYmxlZFN0YXRlID0gYFtkaXNhYmxlZF0sIFtkYXRhLWRpc2FibGVkXWBcbmNvbnN0IGhvdmVyU3RhdGUgPSAnJjpub3QoW2Rpc2FibGVkXSk6bm90KFtkYXRhLWRpc2FibGVkXSk6aG92ZXInXG5jb25zdCBmb2N1c1N0YXRlID0gJyY6bm90KFtkaXNhYmxlZF0pOm5vdChbZGF0YS1kaXNhYmxlZF0pOmZvY3VzJ1xuY29uc3QgZm9jdXNBbmRBY3RpdmVTdGF0ZSA9XG4gICcmOm5vdChbZGlzYWJsZWRdKTpub3QoW2RhdGEtZGlzYWJsZWRdKTpmb2N1czphY3RpdmUsICY6bm90KFtkaXNhYmxlZF0pOm5vdChbZGF0YS1kaXNhYmxlZF0pW2FyaWEtZXhwYW5kZWQ9XCJ0cnVlXCJdOmZvY3VzLCAmOm5vdChbZGlzYWJsZWRdKTpub3QoW2RhdGEtZGlzYWJsZWRdKVtkYXRhLWFjdGl2ZV06Zm9jdXMnXG5jb25zdCBhY3RpdmVTdGF0ZSA9XG4gICcmOm5vdChbZGlzYWJsZWRdKTpub3QoW2RhdGEtZGlzYWJsZWRdKTphY3RpdmUsICY6bm90KFtkaXNhYmxlZF0pOm5vdChbZGF0YS1kaXNhYmxlZF0pW2FyaWEtZXhwYW5kZWQ9XCJ0cnVlXCJdLCAmOm5vdChbZGlzYWJsZWRdKTpub3QoW2RhdGEtZGlzYWJsZWRdKVtkYXRhLWFjdGl2ZV0nXG5cbi8qKlxuICogQHBhcmFtIHtvYmplY3R9IGl0ZW1zIC0gb2JqZWN0IHdpdGggYSBzZXQgb2YgaXRlbXMuXG4gKiBAcmV0dXJuIHtvYmplY3R9IHRoZSBmaW5hbCBhcHBlYXJhbmNlLlxuICovXG5jb25zdCBjcmVhdGVCdXR0b25BcHBlYXJhbmNlID0gKGl0ZW1zID0ge30pID0+IHtcbiAgbWlzc2luZ1N0YXRlV2FybmluZyh7XG4gICAgaXRlbXMsXG4gICAgcHJvcHM6IFsnYmFzZScsICdob3ZlcicsICdmb2N1cycsICdhY3RpdmUnLCAnZm9jdXNBbmRBY3RpdmUnLCAnZGlzYWJsZWQnXSxcbiAgICBjYjogcHJvcCA9PiB7XG4gICAgICBjb25zb2xlLmVycm9yKFxuICAgICAgICBgVGhlbWVyLmNyZWF0ZUJ1dHRvbkFwcGVhcmFuY2UoKSBpcyBtaXNzaW5nIGEgJHtwcm9wfSBzdGF0ZSBpbiBpdGVtczpgLFxuICAgICAgICBpdGVtc1xuICAgICAgKVxuICAgIH1cbiAgfSlcblxuICByZXR1cm4ge1xuICAgIC4uLmJhc2VTdHlsZSxcbiAgICAuLi5jcmVhdGVBcHBlYXJhbmNlKGl0ZW1zLmJhc2UpLFxuICAgIFtkaXNhYmxlZFN0YXRlXToge1xuICAgICAgY3Vyc29yOiAnbm90LWFsbG93ZWQnLFxuICAgICAgLi4uY3JlYXRlQXBwZWFyYW5jZShpdGVtcy5kaXNhYmxlZClcbiAgICB9LFxuICAgIFtob3ZlclN0YXRlXTogY3JlYXRlQXBwZWFyYW5jZShpdGVtcy5ob3ZlciksXG4gICAgW2ZvY3VzU3RhdGVdOiB7XG4gICAgICB6SW5kZXg6IFN0YWNraW5nT3JkZXIuRk9DVVNFRCxcbiAgICAgIC4uLmNyZWF0ZUFwcGVhcmFuY2UoaXRlbXMuZm9jdXMpXG4gICAgfSxcbiAgICBbYWN0aXZlU3RhdGVdOiBjcmVhdGVBcHBlYXJhbmNlKGl0ZW1zLmFjdGl2ZSksXG4gICAgW2ZvY3VzQW5kQWN0aXZlU3RhdGVdOiBjcmVhdGVBcHBlYXJhbmNlKGl0ZW1zLmZvY3VzQW5kQWN0aXZlKVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZUJ1dHRvbkFwcGVhcmFuY2VcbiJdfQ==