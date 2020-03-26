import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

import createAppearance from './createAppearance';
import missingStateWarning from './missingStateWarning';
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
  missingStateWarning({
    items: items,
    props: ['base', 'hover', 'active', 'focus', 'current', 'disabled'],
    cb: function cb(prop) {
      console.error("Themer.createTabAppearance() is missing a ".concat(prop, " item"), items);
    }
  });
  return _objectSpread({}, baseStyle, {}, createAppearance(items.base), (_objectSpread2 = {}, _defineProperty(_objectSpread2, hoverState, createAppearance(items.hover)), _defineProperty(_objectSpread2, focusState, createAppearance(items.focus)), _defineProperty(_objectSpread2, selectedState, createAppearance(items.active)), _defineProperty(_objectSpread2, currentState, _objectSpread({
    cursor: 'default'
  }, createAppearance(items.current))), _defineProperty(_objectSpread2, disabledState, _objectSpread({
    cursor: 'not-allowed'
  }, createAppearance(items.disabled))), _objectSpread2));
};

export default createTabAppearance;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy90aGVtZXIvc3JjL2NyZWF0ZVRhYkFwcGVhcmFuY2UuanMiXSwibmFtZXMiOlsiY3JlYXRlQXBwZWFyYW5jZSIsIm1pc3NpbmdTdGF0ZVdhcm5pbmciLCJob3ZlclN0YXRlIiwic2VsZWN0ZWRTdGF0ZSIsImN1cnJlbnRTdGF0ZSIsImZvY3VzU3RhdGUiLCJkaXNhYmxlZFN0YXRlIiwiYmFzZVN0eWxlIiwiY3Vyc29yIiwib3V0bGluZSIsImNyZWF0ZVRhYkFwcGVhcmFuY2UiLCJpdGVtcyIsInByb3BzIiwiY2IiLCJwcm9wIiwiY29uc29sZSIsImVycm9yIiwiYmFzZSIsImhvdmVyIiwiZm9jdXMiLCJhY3RpdmUiLCJjdXJyZW50IiwiZGlzYWJsZWQiXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLE9BQU9BLGdCQUFQLE1BQTZCLG9CQUE3QjtBQUNBLE9BQU9DLG1CQUFQLE1BQWdDLHVCQUFoQztBQUVBLElBQU1DLFVBQVUsR0FBRyxTQUFuQjtBQUNBLElBQU1DLGFBQWEsR0FDakIsMkRBREY7QUFFQSxJQUFNQyxZQUFZLEdBQUcsaURBQXJCO0FBQ0EsSUFBTUMsVUFBVSxHQUFHLFNBQW5CO0FBQ0EsSUFBTUMsYUFBYSxHQUFHLHlCQUF0QjtBQUVBLElBQU1DLFNBQVMsR0FBRztBQUNoQkMsRUFBQUEsTUFBTSxFQUFFLFNBRFE7QUFFaEJDLEVBQUFBLE9BQU8sRUFBRTtBQUZPLENBQWxCO0FBS0E7Ozs7O0FBSUEsSUFBTUMsbUJBQW1CLEdBQUcsU0FBdEJBLG1CQUFzQixHQUFnQjtBQUFBOztBQUFBLE1BQWZDLEtBQWUsdUVBQVAsRUFBTztBQUMxQ1YsRUFBQUEsbUJBQW1CLENBQUM7QUFDbEJVLElBQUFBLEtBQUssRUFBTEEsS0FEa0I7QUFFbEJDLElBQUFBLEtBQUssRUFBRSxDQUFDLE1BQUQsRUFBUyxPQUFULEVBQWtCLFFBQWxCLEVBQTRCLE9BQTVCLEVBQXFDLFNBQXJDLEVBQWdELFVBQWhELENBRlc7QUFHbEJDLElBQUFBLEVBQUUsRUFBRSxZQUFBQyxJQUFJLEVBQUk7QUFDVkMsTUFBQUEsT0FBTyxDQUFDQyxLQUFSLHFEQUMrQ0YsSUFEL0MsWUFFRUgsS0FGRjtBQUlEO0FBUmlCLEdBQUQsQ0FBbkI7QUFXQSwyQkFDS0osU0FETCxNQUVLUCxnQkFBZ0IsQ0FBQ1csS0FBSyxDQUFDTSxJQUFQLENBRnJCLHdEQUdHZixVQUhILEVBR2dCRixnQkFBZ0IsQ0FBQ1csS0FBSyxDQUFDTyxLQUFQLENBSGhDLG1DQUlHYixVQUpILEVBSWdCTCxnQkFBZ0IsQ0FBQ1csS0FBSyxDQUFDUSxLQUFQLENBSmhDLG1DQUtHaEIsYUFMSCxFQUttQkgsZ0JBQWdCLENBQUNXLEtBQUssQ0FBQ1MsTUFBUCxDQUxuQyxtQ0FNR2hCLFlBTkg7QUFPSUksSUFBQUEsTUFBTSxFQUFFO0FBUFosS0FRT1IsZ0JBQWdCLENBQUNXLEtBQUssQ0FBQ1UsT0FBUCxDQVJ2QixvQ0FVR2YsYUFWSDtBQVdJRSxJQUFBQSxNQUFNLEVBQUU7QUFYWixLQVlPUixnQkFBZ0IsQ0FBQ1csS0FBSyxDQUFDVyxRQUFQLENBWnZCO0FBZUQsQ0EzQkQ7O0FBNkJBLGVBQWVaLG1CQUFmIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGNyZWF0ZUFwcGVhcmFuY2UgZnJvbSAnLi9jcmVhdGVBcHBlYXJhbmNlJ1xuaW1wb3J0IG1pc3NpbmdTdGF0ZVdhcm5pbmcgZnJvbSAnLi9taXNzaW5nU3RhdGVXYXJuaW5nJ1xuXG5jb25zdCBob3ZlclN0YXRlID0gJyY6aG92ZXInXG5jb25zdCBzZWxlY3RlZFN0YXRlID1cbiAgJyZbYXJpYS1jdXJyZW50PVwicGFnZVwiXSwgJlthcmlhLXNlbGVjdGVkPVwidHJ1ZVwiXSwgJjphY3RpdmUnXG5jb25zdCBjdXJyZW50U3RhdGUgPSAnJlthcmlhLWN1cnJlbnQ9XCJwYWdlXCJdLCAmW2FyaWEtc2VsZWN0ZWQ9XCJ0cnVlXCJdJ1xuY29uc3QgZm9jdXNTdGF0ZSA9ICcmOmZvY3VzJ1xuY29uc3QgZGlzYWJsZWRTdGF0ZSA9ICcmW2FyaWEtZGlzYWJsZWQ9XCJ0cnVlXCJdJ1xuXG5jb25zdCBiYXNlU3R5bGUgPSB7XG4gIGN1cnNvcjogJ3BvaW50ZXInLFxuICBvdXRsaW5lOiAnbm9uZSdcbn1cblxuLyoqXG4gKiBAcGFyYW0ge29iamVjdH0gaXRlbXMgLSBvYmplY3Qgd2l0aCBhIHNldCBvZiBzdGF0ZXMuXG4gKiBAcmV0dXJuIHtvYmplY3R9IHRoZSBmaW5hbCBhcHBlYXJhbmNlLlxuICovXG5jb25zdCBjcmVhdGVUYWJBcHBlYXJhbmNlID0gKGl0ZW1zID0ge30pID0+IHtcbiAgbWlzc2luZ1N0YXRlV2FybmluZyh7XG4gICAgaXRlbXMsXG4gICAgcHJvcHM6IFsnYmFzZScsICdob3ZlcicsICdhY3RpdmUnLCAnZm9jdXMnLCAnY3VycmVudCcsICdkaXNhYmxlZCddLFxuICAgIGNiOiBwcm9wID0+IHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoXG4gICAgICAgIGBUaGVtZXIuY3JlYXRlVGFiQXBwZWFyYW5jZSgpIGlzIG1pc3NpbmcgYSAke3Byb3B9IGl0ZW1gLFxuICAgICAgICBpdGVtc1xuICAgICAgKVxuICAgIH1cbiAgfSlcblxuICByZXR1cm4ge1xuICAgIC4uLmJhc2VTdHlsZSxcbiAgICAuLi5jcmVhdGVBcHBlYXJhbmNlKGl0ZW1zLmJhc2UpLFxuICAgIFtob3ZlclN0YXRlXTogY3JlYXRlQXBwZWFyYW5jZShpdGVtcy5ob3ZlciksXG4gICAgW2ZvY3VzU3RhdGVdOiBjcmVhdGVBcHBlYXJhbmNlKGl0ZW1zLmZvY3VzKSxcbiAgICBbc2VsZWN0ZWRTdGF0ZV06IGNyZWF0ZUFwcGVhcmFuY2UoaXRlbXMuYWN0aXZlKSxcbiAgICBbY3VycmVudFN0YXRlXToge1xuICAgICAgY3Vyc29yOiAnZGVmYXVsdCcsXG4gICAgICAuLi5jcmVhdGVBcHBlYXJhbmNlKGl0ZW1zLmN1cnJlbnQpXG4gICAgfSxcbiAgICBbZGlzYWJsZWRTdGF0ZV06IHtcbiAgICAgIGN1cnNvcjogJ25vdC1hbGxvd2VkJyxcbiAgICAgIC4uLmNyZWF0ZUFwcGVhcmFuY2UoaXRlbXMuZGlzYWJsZWQpXG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZVRhYkFwcGVhcmFuY2VcbiJdfQ==