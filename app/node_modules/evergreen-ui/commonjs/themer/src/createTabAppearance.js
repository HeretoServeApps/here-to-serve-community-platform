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

var hoverState = '&:hover';
var selectedState = '&[aria-current="page"], &[aria-selected="true"], &:active';
var currentState = '&[aria-current="page"], &[aria-selected="true"]';
var focusState = '&:focus';
var disabledState = '&[aria-disabled="true"]';
var baseStyle = {
  cursor: 'pointer',
  outline: 'none'
};
/**
 * @param {object} items - object with a set of states.
 * @return {object} the final appearance.
 */

var createTabAppearance = function createTabAppearance() {
  var _objectSpread2;

  var items = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  (0, _missingStateWarning["default"])({
    items: items,
    props: ['base', 'hover', 'active', 'focus', 'current', 'disabled'],
    cb: function cb(prop) {
      console.error("Themer.createTabAppearance() is missing a ".concat(prop, " item"), items);
    }
  });
  return _objectSpread({}, baseStyle, {}, (0, _createAppearance["default"])(items.base), (_objectSpread2 = {}, (0, _defineProperty2["default"])(_objectSpread2, hoverState, (0, _createAppearance["default"])(items.hover)), (0, _defineProperty2["default"])(_objectSpread2, focusState, (0, _createAppearance["default"])(items.focus)), (0, _defineProperty2["default"])(_objectSpread2, selectedState, (0, _createAppearance["default"])(items.active)), (0, _defineProperty2["default"])(_objectSpread2, currentState, _objectSpread({
    cursor: 'default'
  }, (0, _createAppearance["default"])(items.current))), (0, _defineProperty2["default"])(_objectSpread2, disabledState, _objectSpread({
    cursor: 'not-allowed'
  }, (0, _createAppearance["default"])(items.disabled))), _objectSpread2));
};

var _default = createTabAppearance;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy90aGVtZXIvc3JjL2NyZWF0ZVRhYkFwcGVhcmFuY2UuanMiXSwibmFtZXMiOlsiaG92ZXJTdGF0ZSIsInNlbGVjdGVkU3RhdGUiLCJjdXJyZW50U3RhdGUiLCJmb2N1c1N0YXRlIiwiZGlzYWJsZWRTdGF0ZSIsImJhc2VTdHlsZSIsImN1cnNvciIsIm91dGxpbmUiLCJjcmVhdGVUYWJBcHBlYXJhbmNlIiwiaXRlbXMiLCJwcm9wcyIsImNiIiwicHJvcCIsImNvbnNvbGUiLCJlcnJvciIsImJhc2UiLCJob3ZlciIsImZvY3VzIiwiYWN0aXZlIiwiY3VycmVudCIsImRpc2FibGVkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBOztBQUNBOzs7Ozs7QUFFQSxJQUFNQSxVQUFVLEdBQUcsU0FBbkI7QUFDQSxJQUFNQyxhQUFhLEdBQ2pCLDJEQURGO0FBRUEsSUFBTUMsWUFBWSxHQUFHLGlEQUFyQjtBQUNBLElBQU1DLFVBQVUsR0FBRyxTQUFuQjtBQUNBLElBQU1DLGFBQWEsR0FBRyx5QkFBdEI7QUFFQSxJQUFNQyxTQUFTLEdBQUc7QUFDaEJDLEVBQUFBLE1BQU0sRUFBRSxTQURRO0FBRWhCQyxFQUFBQSxPQUFPLEVBQUU7QUFGTyxDQUFsQjtBQUtBOzs7OztBQUlBLElBQU1DLG1CQUFtQixHQUFHLFNBQXRCQSxtQkFBc0IsR0FBZ0I7QUFBQTs7QUFBQSxNQUFmQyxLQUFlLHVFQUFQLEVBQU87QUFDMUMsdUNBQW9CO0FBQ2xCQSxJQUFBQSxLQUFLLEVBQUxBLEtBRGtCO0FBRWxCQyxJQUFBQSxLQUFLLEVBQUUsQ0FBQyxNQUFELEVBQVMsT0FBVCxFQUFrQixRQUFsQixFQUE0QixPQUE1QixFQUFxQyxTQUFyQyxFQUFnRCxVQUFoRCxDQUZXO0FBR2xCQyxJQUFBQSxFQUFFLEVBQUUsWUFBQUMsSUFBSSxFQUFJO0FBQ1ZDLE1BQUFBLE9BQU8sQ0FBQ0MsS0FBUixxREFDK0NGLElBRC9DLFlBRUVILEtBRkY7QUFJRDtBQVJpQixHQUFwQjtBQVdBLDJCQUNLSixTQURMLE1BRUssa0NBQWlCSSxLQUFLLENBQUNNLElBQXZCLENBRkwseUVBR0dmLFVBSEgsRUFHZ0Isa0NBQWlCUyxLQUFLLENBQUNPLEtBQXZCLENBSGhCLG9EQUlHYixVQUpILEVBSWdCLGtDQUFpQk0sS0FBSyxDQUFDUSxLQUF2QixDQUpoQixvREFLR2hCLGFBTEgsRUFLbUIsa0NBQWlCUSxLQUFLLENBQUNTLE1BQXZCLENBTG5CLG9EQU1HaEIsWUFOSDtBQU9JSSxJQUFBQSxNQUFNLEVBQUU7QUFQWixLQVFPLGtDQUFpQkcsS0FBSyxDQUFDVSxPQUF2QixDQVJQLHFEQVVHZixhQVZIO0FBV0lFLElBQUFBLE1BQU0sRUFBRTtBQVhaLEtBWU8sa0NBQWlCRyxLQUFLLENBQUNXLFFBQXZCLENBWlA7QUFlRCxDQTNCRDs7ZUE2QmVaLG1CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGNyZWF0ZUFwcGVhcmFuY2UgZnJvbSAnLi9jcmVhdGVBcHBlYXJhbmNlJ1xuaW1wb3J0IG1pc3NpbmdTdGF0ZVdhcm5pbmcgZnJvbSAnLi9taXNzaW5nU3RhdGVXYXJuaW5nJ1xuXG5jb25zdCBob3ZlclN0YXRlID0gJyY6aG92ZXInXG5jb25zdCBzZWxlY3RlZFN0YXRlID1cbiAgJyZbYXJpYS1jdXJyZW50PVwicGFnZVwiXSwgJlthcmlhLXNlbGVjdGVkPVwidHJ1ZVwiXSwgJjphY3RpdmUnXG5jb25zdCBjdXJyZW50U3RhdGUgPSAnJlthcmlhLWN1cnJlbnQ9XCJwYWdlXCJdLCAmW2FyaWEtc2VsZWN0ZWQ9XCJ0cnVlXCJdJ1xuY29uc3QgZm9jdXNTdGF0ZSA9ICcmOmZvY3VzJ1xuY29uc3QgZGlzYWJsZWRTdGF0ZSA9ICcmW2FyaWEtZGlzYWJsZWQ9XCJ0cnVlXCJdJ1xuXG5jb25zdCBiYXNlU3R5bGUgPSB7XG4gIGN1cnNvcjogJ3BvaW50ZXInLFxuICBvdXRsaW5lOiAnbm9uZSdcbn1cblxuLyoqXG4gKiBAcGFyYW0ge29iamVjdH0gaXRlbXMgLSBvYmplY3Qgd2l0aCBhIHNldCBvZiBzdGF0ZXMuXG4gKiBAcmV0dXJuIHtvYmplY3R9IHRoZSBmaW5hbCBhcHBlYXJhbmNlLlxuICovXG5jb25zdCBjcmVhdGVUYWJBcHBlYXJhbmNlID0gKGl0ZW1zID0ge30pID0+IHtcbiAgbWlzc2luZ1N0YXRlV2FybmluZyh7XG4gICAgaXRlbXMsXG4gICAgcHJvcHM6IFsnYmFzZScsICdob3ZlcicsICdhY3RpdmUnLCAnZm9jdXMnLCAnY3VycmVudCcsICdkaXNhYmxlZCddLFxuICAgIGNiOiBwcm9wID0+IHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoXG4gICAgICAgIGBUaGVtZXIuY3JlYXRlVGFiQXBwZWFyYW5jZSgpIGlzIG1pc3NpbmcgYSAke3Byb3B9IGl0ZW1gLFxuICAgICAgICBpdGVtc1xuICAgICAgKVxuICAgIH1cbiAgfSlcblxuICByZXR1cm4ge1xuICAgIC4uLmJhc2VTdHlsZSxcbiAgICAuLi5jcmVhdGVBcHBlYXJhbmNlKGl0ZW1zLmJhc2UpLFxuICAgIFtob3ZlclN0YXRlXTogY3JlYXRlQXBwZWFyYW5jZShpdGVtcy5ob3ZlciksXG4gICAgW2ZvY3VzU3RhdGVdOiBjcmVhdGVBcHBlYXJhbmNlKGl0ZW1zLmZvY3VzKSxcbiAgICBbc2VsZWN0ZWRTdGF0ZV06IGNyZWF0ZUFwcGVhcmFuY2UoaXRlbXMuYWN0aXZlKSxcbiAgICBbY3VycmVudFN0YXRlXToge1xuICAgICAgY3Vyc29yOiAnZGVmYXVsdCcsXG4gICAgICAuLi5jcmVhdGVBcHBlYXJhbmNlKGl0ZW1zLmN1cnJlbnQpXG4gICAgfSxcbiAgICBbZGlzYWJsZWRTdGF0ZV06IHtcbiAgICAgIGN1cnNvcjogJ25vdC1hbGxvd2VkJyxcbiAgICAgIC4uLmNyZWF0ZUFwcGVhcmFuY2UoaXRlbXMuZGlzYWJsZWQpXG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZVRhYkFwcGVhcmFuY2VcbiJdfQ==