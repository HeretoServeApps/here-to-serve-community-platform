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
  boxSizing: 'border-box',
  textDecoration: 'none',
  transition: 'box-shadow 80ms ease-in-out',
  WebkitAppearance: 'none',
  border: 'none',
  outline: 'none',
  cursor: 'pointer'
};
var disabledState = '[disabled="true"], [data-disabled="true"]';
var hoverState = '&:not([disabled="true"]):not([data-disabled="true"]):hover';
var activeState = '&:not([disabled="true"]):not([data-disabled="true"]):active, &:not([disabled="true"]):not([data-disabled="true"])[data-popover-opened="true"], &:not([disabled="true"]):not([data-disabled="true"])[data-active="true"]';
var focusState = '& input:focus + label';
/**
 * @param {object} items - object with a set of states.
 * @return {object} the final appearance.
 */

var createSegmentedControlRadioAppearance = function createSegmentedControlRadioAppearance() {
  var _objectSpread2;

  var items = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  (0, _missingStateWarning["default"])({
    items: items,
    props: ['base', 'hover', 'disabled', 'active', 'focus'],
    cb: function cb(prop) {
      console.error("Themer.createSegmentedControlRadioAppearance() is missing a ".concat(prop, " item"), items);
    }
  });
  return _objectSpread({}, baseStyle, {}, (0, _createAppearance["default"])(items.base), (_objectSpread2 = {}, (0, _defineProperty2["default"])(_objectSpread2, disabledState, _objectSpread({
    cursor: 'not-allowed'
  }, (0, _createAppearance["default"])(items.disabled))), (0, _defineProperty2["default"])(_objectSpread2, hoverState, (0, _createAppearance["default"])(items.hover)), (0, _defineProperty2["default"])(_objectSpread2, focusState, _objectSpread({
    zIndex: _constants.StackingOrder.FOCUSED
  }, (0, _createAppearance["default"])(items.focus))), (0, _defineProperty2["default"])(_objectSpread2, activeState, (0, _createAppearance["default"])(items.active)), (0, _defineProperty2["default"])(_objectSpread2, '&[data-active="true"]', {
    cursor: 'default'
  }), _objectSpread2));
};

var _default = createSegmentedControlRadioAppearance;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy90aGVtZXIvc3JjL2NyZWF0ZVNlZ21lbnRlZENvbnRyb2xSYWRpb0FwcGVhcmFuY2UuanMiXSwibmFtZXMiOlsiYmFzZVN0eWxlIiwiV2Via2l0Rm9udFNtb290aGluZyIsImJveFNpemluZyIsInRleHREZWNvcmF0aW9uIiwidHJhbnNpdGlvbiIsIldlYmtpdEFwcGVhcmFuY2UiLCJib3JkZXIiLCJvdXRsaW5lIiwiY3Vyc29yIiwiZGlzYWJsZWRTdGF0ZSIsImhvdmVyU3RhdGUiLCJhY3RpdmVTdGF0ZSIsImZvY3VzU3RhdGUiLCJjcmVhdGVTZWdtZW50ZWRDb250cm9sUmFkaW9BcHBlYXJhbmNlIiwiaXRlbXMiLCJwcm9wcyIsImNiIiwicHJvcCIsImNvbnNvbGUiLCJlcnJvciIsImJhc2UiLCJkaXNhYmxlZCIsImhvdmVyIiwiekluZGV4IiwiU3RhY2tpbmdPcmRlciIsIkZPQ1VTRUQiLCJmb2N1cyIsImFjdGl2ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQTs7QUFDQTs7QUFDQTs7Ozs7O0FBRUEsSUFBTUEsU0FBUyxHQUFHO0FBQ2hCQyxFQUFBQSxtQkFBbUIsRUFBRSxhQURMO0FBRWhCQyxFQUFBQSxTQUFTLEVBQUUsWUFGSztBQUdoQkMsRUFBQUEsY0FBYyxFQUFFLE1BSEE7QUFJaEJDLEVBQUFBLFVBQVUsRUFBRSw2QkFKSTtBQUtoQkMsRUFBQUEsZ0JBQWdCLEVBQUUsTUFMRjtBQU1oQkMsRUFBQUEsTUFBTSxFQUFFLE1BTlE7QUFPaEJDLEVBQUFBLE9BQU8sRUFBRSxNQVBPO0FBUWhCQyxFQUFBQSxNQUFNLEVBQUU7QUFSUSxDQUFsQjtBQVdBLElBQU1DLGFBQWEsR0FBRywyQ0FBdEI7QUFDQSxJQUFNQyxVQUFVLEdBQUcsNERBQW5CO0FBQ0EsSUFBTUMsV0FBVyxHQUNmLHlOQURGO0FBRUEsSUFBTUMsVUFBVSxHQUFHLHVCQUFuQjtBQUVBOzs7OztBQUlBLElBQU1DLHFDQUFxQyxHQUFHLFNBQXhDQSxxQ0FBd0MsR0FBZ0I7QUFBQTs7QUFBQSxNQUFmQyxLQUFlLHVFQUFQLEVBQU87QUFDNUQsdUNBQW9CO0FBQ2xCQSxJQUFBQSxLQUFLLEVBQUxBLEtBRGtCO0FBRWxCQyxJQUFBQSxLQUFLLEVBQUUsQ0FBQyxNQUFELEVBQVMsT0FBVCxFQUFrQixVQUFsQixFQUE4QixRQUE5QixFQUF3QyxPQUF4QyxDQUZXO0FBR2xCQyxJQUFBQSxFQUFFLEVBQUUsWUFBQUMsSUFBSSxFQUFJO0FBQ1ZDLE1BQUFBLE9BQU8sQ0FBQ0MsS0FBUix1RUFDaUVGLElBRGpFLFlBRUVILEtBRkY7QUFJRDtBQVJpQixHQUFwQjtBQVdBLDJCQUNLZCxTQURMLE1BRUssa0NBQWlCYyxLQUFLLENBQUNNLElBQXZCLENBRkwseUVBR0dYLGFBSEg7QUFJSUQsSUFBQUEsTUFBTSxFQUFFO0FBSlosS0FLTyxrQ0FBaUJNLEtBQUssQ0FBQ08sUUFBdkIsQ0FMUCxxREFPR1gsVUFQSCxFQU9nQixrQ0FBaUJJLEtBQUssQ0FBQ1EsS0FBdkIsQ0FQaEIsb0RBUUdWLFVBUkg7QUFTSVcsSUFBQUEsTUFBTSxFQUFFQyx5QkFBY0M7QUFUMUIsS0FVTyxrQ0FBaUJYLEtBQUssQ0FBQ1ksS0FBdkIsQ0FWUCxxREFZR2YsV0FaSCxFQVlpQixrQ0FBaUJHLEtBQUssQ0FBQ2EsTUFBdkIsQ0FaakIsb0RBYUUsdUJBYkYsRUFhMkI7QUFDdkJuQixJQUFBQSxNQUFNLEVBQUU7QUFEZSxHQWIzQjtBQWlCRCxDQTdCRDs7ZUErQmVLLHFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgU3RhY2tpbmdPcmRlciB9IGZyb20gJy4uLy4uL2NvbnN0YW50cydcbmltcG9ydCBjcmVhdGVBcHBlYXJhbmNlIGZyb20gJy4vY3JlYXRlQXBwZWFyYW5jZSdcbmltcG9ydCBtaXNzaW5nU3RhdGVXYXJuaW5nIGZyb20gJy4vbWlzc2luZ1N0YXRlV2FybmluZydcblxuY29uc3QgYmFzZVN0eWxlID0ge1xuICBXZWJraXRGb250U21vb3RoaW5nOiAnYW50aWFsaWFzZWQnLFxuICBib3hTaXppbmc6ICdib3JkZXItYm94JyxcbiAgdGV4dERlY29yYXRpb246ICdub25lJyxcbiAgdHJhbnNpdGlvbjogJ2JveC1zaGFkb3cgODBtcyBlYXNlLWluLW91dCcsXG4gIFdlYmtpdEFwcGVhcmFuY2U6ICdub25lJyxcbiAgYm9yZGVyOiAnbm9uZScsXG4gIG91dGxpbmU6ICdub25lJyxcbiAgY3Vyc29yOiAncG9pbnRlcidcbn1cblxuY29uc3QgZGlzYWJsZWRTdGF0ZSA9ICdbZGlzYWJsZWQ9XCJ0cnVlXCJdLCBbZGF0YS1kaXNhYmxlZD1cInRydWVcIl0nXG5jb25zdCBob3ZlclN0YXRlID0gJyY6bm90KFtkaXNhYmxlZD1cInRydWVcIl0pOm5vdChbZGF0YS1kaXNhYmxlZD1cInRydWVcIl0pOmhvdmVyJ1xuY29uc3QgYWN0aXZlU3RhdGUgPVxuICAnJjpub3QoW2Rpc2FibGVkPVwidHJ1ZVwiXSk6bm90KFtkYXRhLWRpc2FibGVkPVwidHJ1ZVwiXSk6YWN0aXZlLCAmOm5vdChbZGlzYWJsZWQ9XCJ0cnVlXCJdKTpub3QoW2RhdGEtZGlzYWJsZWQ9XCJ0cnVlXCJdKVtkYXRhLXBvcG92ZXItb3BlbmVkPVwidHJ1ZVwiXSwgJjpub3QoW2Rpc2FibGVkPVwidHJ1ZVwiXSk6bm90KFtkYXRhLWRpc2FibGVkPVwidHJ1ZVwiXSlbZGF0YS1hY3RpdmU9XCJ0cnVlXCJdJ1xuY29uc3QgZm9jdXNTdGF0ZSA9ICcmIGlucHV0OmZvY3VzICsgbGFiZWwnXG5cbi8qKlxuICogQHBhcmFtIHtvYmplY3R9IGl0ZW1zIC0gb2JqZWN0IHdpdGggYSBzZXQgb2Ygc3RhdGVzLlxuICogQHJldHVybiB7b2JqZWN0fSB0aGUgZmluYWwgYXBwZWFyYW5jZS5cbiAqL1xuY29uc3QgY3JlYXRlU2VnbWVudGVkQ29udHJvbFJhZGlvQXBwZWFyYW5jZSA9IChpdGVtcyA9IHt9KSA9PiB7XG4gIG1pc3NpbmdTdGF0ZVdhcm5pbmcoe1xuICAgIGl0ZW1zLFxuICAgIHByb3BzOiBbJ2Jhc2UnLCAnaG92ZXInLCAnZGlzYWJsZWQnLCAnYWN0aXZlJywgJ2ZvY3VzJ10sXG4gICAgY2I6IHByb3AgPT4ge1xuICAgICAgY29uc29sZS5lcnJvcihcbiAgICAgICAgYFRoZW1lci5jcmVhdGVTZWdtZW50ZWRDb250cm9sUmFkaW9BcHBlYXJhbmNlKCkgaXMgbWlzc2luZyBhICR7cHJvcH0gaXRlbWAsXG4gICAgICAgIGl0ZW1zXG4gICAgICApXG4gICAgfVxuICB9KVxuXG4gIHJldHVybiB7XG4gICAgLi4uYmFzZVN0eWxlLFxuICAgIC4uLmNyZWF0ZUFwcGVhcmFuY2UoaXRlbXMuYmFzZSksXG4gICAgW2Rpc2FibGVkU3RhdGVdOiB7XG4gICAgICBjdXJzb3I6ICdub3QtYWxsb3dlZCcsXG4gICAgICAuLi5jcmVhdGVBcHBlYXJhbmNlKGl0ZW1zLmRpc2FibGVkKVxuICAgIH0sXG4gICAgW2hvdmVyU3RhdGVdOiBjcmVhdGVBcHBlYXJhbmNlKGl0ZW1zLmhvdmVyKSxcbiAgICBbZm9jdXNTdGF0ZV06IHtcbiAgICAgIHpJbmRleDogU3RhY2tpbmdPcmRlci5GT0NVU0VELFxuICAgICAgLi4uY3JlYXRlQXBwZWFyYW5jZShpdGVtcy5mb2N1cylcbiAgICB9LFxuICAgIFthY3RpdmVTdGF0ZV06IGNyZWF0ZUFwcGVhcmFuY2UoaXRlbXMuYWN0aXZlKSxcbiAgICAnJltkYXRhLWFjdGl2ZT1cInRydWVcIl0nOiB7XG4gICAgICBjdXJzb3I6ICdkZWZhdWx0J1xuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVTZWdtZW50ZWRDb250cm9sUmFkaW9BcHBlYXJhbmNlXG4iXX0=