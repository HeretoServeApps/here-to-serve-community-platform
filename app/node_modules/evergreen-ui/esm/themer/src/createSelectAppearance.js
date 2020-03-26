import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

import createAppearance from './createAppearance';
import missingStateWarning from './missingStateWarning';
var baseStyle = {
  WebkitAppearance: 'none',
  MozAppearance: 'none',
  border: 'none',
  flex: 1,
  background: 'none',
  width: '100%',
  WebkitFontSmoothing: 'antialiased',
  textDecoration: 'none',
  outline: 'none',
  cursor: 'pointer',
  ':-moz-focusring': {
    color: 'transparent',
    textShadow: '0 0 0 #000'
  }
};
var disabledState = '[disabled]';
var invalidState = '&[aria-invalid="true"]';
var hoverState = '&:not([disabled]):hover';
var focusState = '&:not([disabled]):focus';
var activeState = '&:not([disabled]):active';
/**
 * @param {object} items - object with a set of states.
 * @return {object} the final appearance.
 */

var createSelectAppearance = function createSelectAppearance() {
  var _objectSpread2;

  var items = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  missingStateWarning({
    items: items,
    props: ['base', 'disabled', 'invalid', 'hover', 'active', 'focus'],
    cb: function cb(prop) {
      console.error("Themer.createSelectAppearance() is missing a ".concat(prop, " item"), items);
    }
  });
  return _objectSpread({}, baseStyle, {}, createAppearance(items.base), (_objectSpread2 = {}, _defineProperty(_objectSpread2, disabledState, _objectSpread({
    cursor: 'not-allowed'
  }, createAppearance(items.disabled))), _defineProperty(_objectSpread2, invalidState, createAppearance(items.invalid)), _defineProperty(_objectSpread2, hoverState, createAppearance(items.hover)), _defineProperty(_objectSpread2, focusState, createAppearance(items.focus)), _defineProperty(_objectSpread2, activeState, createAppearance(items.active)), _objectSpread2));
};

export default createSelectAppearance;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy90aGVtZXIvc3JjL2NyZWF0ZVNlbGVjdEFwcGVhcmFuY2UuanMiXSwibmFtZXMiOlsiY3JlYXRlQXBwZWFyYW5jZSIsIm1pc3NpbmdTdGF0ZVdhcm5pbmciLCJiYXNlU3R5bGUiLCJXZWJraXRBcHBlYXJhbmNlIiwiTW96QXBwZWFyYW5jZSIsImJvcmRlciIsImZsZXgiLCJiYWNrZ3JvdW5kIiwid2lkdGgiLCJXZWJraXRGb250U21vb3RoaW5nIiwidGV4dERlY29yYXRpb24iLCJvdXRsaW5lIiwiY3Vyc29yIiwiY29sb3IiLCJ0ZXh0U2hhZG93IiwiZGlzYWJsZWRTdGF0ZSIsImludmFsaWRTdGF0ZSIsImhvdmVyU3RhdGUiLCJmb2N1c1N0YXRlIiwiYWN0aXZlU3RhdGUiLCJjcmVhdGVTZWxlY3RBcHBlYXJhbmNlIiwiaXRlbXMiLCJwcm9wcyIsImNiIiwicHJvcCIsImNvbnNvbGUiLCJlcnJvciIsImJhc2UiLCJkaXNhYmxlZCIsImludmFsaWQiLCJob3ZlciIsImZvY3VzIiwiYWN0aXZlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSxPQUFPQSxnQkFBUCxNQUE2QixvQkFBN0I7QUFDQSxPQUFPQyxtQkFBUCxNQUFnQyx1QkFBaEM7QUFFQSxJQUFNQyxTQUFTLEdBQUc7QUFDaEJDLEVBQUFBLGdCQUFnQixFQUFFLE1BREY7QUFFaEJDLEVBQUFBLGFBQWEsRUFBRSxNQUZDO0FBR2hCQyxFQUFBQSxNQUFNLEVBQUUsTUFIUTtBQUloQkMsRUFBQUEsSUFBSSxFQUFFLENBSlU7QUFLaEJDLEVBQUFBLFVBQVUsRUFBRSxNQUxJO0FBTWhCQyxFQUFBQSxLQUFLLEVBQUUsTUFOUztBQU9oQkMsRUFBQUEsbUJBQW1CLEVBQUUsYUFQTDtBQVFoQkMsRUFBQUEsY0FBYyxFQUFFLE1BUkE7QUFTaEJDLEVBQUFBLE9BQU8sRUFBRSxNQVRPO0FBVWhCQyxFQUFBQSxNQUFNLEVBQUUsU0FWUTtBQVdoQixxQkFBbUI7QUFDakJDLElBQUFBLEtBQUssRUFBRSxhQURVO0FBRWpCQyxJQUFBQSxVQUFVLEVBQUU7QUFGSztBQVhILENBQWxCO0FBaUJBLElBQU1DLGFBQWEsR0FBRyxZQUF0QjtBQUNBLElBQU1DLFlBQVksR0FBRyx3QkFBckI7QUFDQSxJQUFNQyxVQUFVLEdBQUcseUJBQW5CO0FBQ0EsSUFBTUMsVUFBVSxHQUFHLHlCQUFuQjtBQUNBLElBQU1DLFdBQVcsR0FBRywwQkFBcEI7QUFFQTs7Ozs7QUFJQSxJQUFNQyxzQkFBc0IsR0FBRyxTQUF6QkEsc0JBQXlCLEdBQWdCO0FBQUE7O0FBQUEsTUFBZkMsS0FBZSx1RUFBUCxFQUFPO0FBQzdDcEIsRUFBQUEsbUJBQW1CLENBQUM7QUFDbEJvQixJQUFBQSxLQUFLLEVBQUxBLEtBRGtCO0FBRWxCQyxJQUFBQSxLQUFLLEVBQUUsQ0FBQyxNQUFELEVBQVMsVUFBVCxFQUFxQixTQUFyQixFQUFnQyxPQUFoQyxFQUF5QyxRQUF6QyxFQUFtRCxPQUFuRCxDQUZXO0FBR2xCQyxJQUFBQSxFQUFFLEVBQUUsWUFBQUMsSUFBSSxFQUFJO0FBQ1ZDLE1BQUFBLE9BQU8sQ0FBQ0MsS0FBUix3REFDa0RGLElBRGxELFlBRUVILEtBRkY7QUFJRDtBQVJpQixHQUFELENBQW5CO0FBV0EsMkJBQ0tuQixTQURMLE1BRUtGLGdCQUFnQixDQUFDcUIsS0FBSyxDQUFDTSxJQUFQLENBRnJCLHdEQUdHWixhQUhIO0FBSUlILElBQUFBLE1BQU0sRUFBRTtBQUpaLEtBS09aLGdCQUFnQixDQUFDcUIsS0FBSyxDQUFDTyxRQUFQLENBTHZCLG9DQU9HWixZQVBILEVBT2tCaEIsZ0JBQWdCLENBQUNxQixLQUFLLENBQUNRLE9BQVAsQ0FQbEMsbUNBUUdaLFVBUkgsRUFRZ0JqQixnQkFBZ0IsQ0FBQ3FCLEtBQUssQ0FBQ1MsS0FBUCxDQVJoQyxtQ0FTR1osVUFUSCxFQVNnQmxCLGdCQUFnQixDQUFDcUIsS0FBSyxDQUFDVSxLQUFQLENBVGhDLG1DQVVHWixXQVZILEVBVWlCbkIsZ0JBQWdCLENBQUNxQixLQUFLLENBQUNXLE1BQVAsQ0FWakM7QUFZRCxDQXhCRDs7QUEwQkEsZUFBZVosc0JBQWYiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgY3JlYXRlQXBwZWFyYW5jZSBmcm9tICcuL2NyZWF0ZUFwcGVhcmFuY2UnXG5pbXBvcnQgbWlzc2luZ1N0YXRlV2FybmluZyBmcm9tICcuL21pc3NpbmdTdGF0ZVdhcm5pbmcnXG5cbmNvbnN0IGJhc2VTdHlsZSA9IHtcbiAgV2Via2l0QXBwZWFyYW5jZTogJ25vbmUnLFxuICBNb3pBcHBlYXJhbmNlOiAnbm9uZScsXG4gIGJvcmRlcjogJ25vbmUnLFxuICBmbGV4OiAxLFxuICBiYWNrZ3JvdW5kOiAnbm9uZScsXG4gIHdpZHRoOiAnMTAwJScsXG4gIFdlYmtpdEZvbnRTbW9vdGhpbmc6ICdhbnRpYWxpYXNlZCcsXG4gIHRleHREZWNvcmF0aW9uOiAnbm9uZScsXG4gIG91dGxpbmU6ICdub25lJyxcbiAgY3Vyc29yOiAncG9pbnRlcicsXG4gICc6LW1vei1mb2N1c3JpbmcnOiB7XG4gICAgY29sb3I6ICd0cmFuc3BhcmVudCcsXG4gICAgdGV4dFNoYWRvdzogJzAgMCAwICMwMDAnXG4gIH1cbn1cblxuY29uc3QgZGlzYWJsZWRTdGF0ZSA9ICdbZGlzYWJsZWRdJ1xuY29uc3QgaW52YWxpZFN0YXRlID0gJyZbYXJpYS1pbnZhbGlkPVwidHJ1ZVwiXSdcbmNvbnN0IGhvdmVyU3RhdGUgPSAnJjpub3QoW2Rpc2FibGVkXSk6aG92ZXInXG5jb25zdCBmb2N1c1N0YXRlID0gJyY6bm90KFtkaXNhYmxlZF0pOmZvY3VzJ1xuY29uc3QgYWN0aXZlU3RhdGUgPSAnJjpub3QoW2Rpc2FibGVkXSk6YWN0aXZlJ1xuXG4vKipcbiAqIEBwYXJhbSB7b2JqZWN0fSBpdGVtcyAtIG9iamVjdCB3aXRoIGEgc2V0IG9mIHN0YXRlcy5cbiAqIEByZXR1cm4ge29iamVjdH0gdGhlIGZpbmFsIGFwcGVhcmFuY2UuXG4gKi9cbmNvbnN0IGNyZWF0ZVNlbGVjdEFwcGVhcmFuY2UgPSAoaXRlbXMgPSB7fSkgPT4ge1xuICBtaXNzaW5nU3RhdGVXYXJuaW5nKHtcbiAgICBpdGVtcyxcbiAgICBwcm9wczogWydiYXNlJywgJ2Rpc2FibGVkJywgJ2ludmFsaWQnLCAnaG92ZXInLCAnYWN0aXZlJywgJ2ZvY3VzJ10sXG4gICAgY2I6IHByb3AgPT4ge1xuICAgICAgY29uc29sZS5lcnJvcihcbiAgICAgICAgYFRoZW1lci5jcmVhdGVTZWxlY3RBcHBlYXJhbmNlKCkgaXMgbWlzc2luZyBhICR7cHJvcH0gaXRlbWAsXG4gICAgICAgIGl0ZW1zXG4gICAgICApXG4gICAgfVxuICB9KVxuXG4gIHJldHVybiB7XG4gICAgLi4uYmFzZVN0eWxlLFxuICAgIC4uLmNyZWF0ZUFwcGVhcmFuY2UoaXRlbXMuYmFzZSksXG4gICAgW2Rpc2FibGVkU3RhdGVdOiB7XG4gICAgICBjdXJzb3I6ICdub3QtYWxsb3dlZCcsXG4gICAgICAuLi5jcmVhdGVBcHBlYXJhbmNlKGl0ZW1zLmRpc2FibGVkKVxuICAgIH0sXG4gICAgW2ludmFsaWRTdGF0ZV06IGNyZWF0ZUFwcGVhcmFuY2UoaXRlbXMuaW52YWxpZCksXG4gICAgW2hvdmVyU3RhdGVdOiBjcmVhdGVBcHBlYXJhbmNlKGl0ZW1zLmhvdmVyKSxcbiAgICBbZm9jdXNTdGF0ZV06IGNyZWF0ZUFwcGVhcmFuY2UoaXRlbXMuZm9jdXMpLFxuICAgIFthY3RpdmVTdGF0ZV06IGNyZWF0ZUFwcGVhcmFuY2UoaXRlbXMuYWN0aXZlKVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZVNlbGVjdEFwcGVhcmFuY2VcbiJdfQ==