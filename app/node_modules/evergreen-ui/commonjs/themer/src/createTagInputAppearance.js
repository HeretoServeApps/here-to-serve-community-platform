"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _constants = require("../../constants");

var _missingStateWarning = _interopRequireDefault(require("./missingStateWarning"));

var _createAppearance = _interopRequireDefault(require("./createAppearance"));

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var baseStyle = {
  alignItems: 'center',
  display: 'inline-flex',
  flexWrap: 'wrap'
};
var focusState = '&[aria-activedescendant]';
var disabledState = '&[aria-disabled="true"]';
/**
 * @param {object} items - object with a set of states.
 * @return {object} the final appearance.
 */

var createTagInputAppearance = function createTagInputAppearance() {
  var _objectSpread2;

  var items = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  (0, _missingStateWarning["default"])({
    items: items,
    props: ['base', 'focus', 'disabled'],
    cb: function cb(prop) {
      console.error("Themer.createTagInputAppearance() is missing a ".concat(prop, " item"), items);
    }
  });
  return _objectSpread({}, baseStyle, {}, (0, _createAppearance["default"])(items.base), (_objectSpread2 = {}, (0, _defineProperty2["default"])(_objectSpread2, focusState, _objectSpread({
    zIndex: _constants.StackingOrder.FOCUSED
  }, (0, _createAppearance["default"])(items.focus))), (0, _defineProperty2["default"])(_objectSpread2, disabledState, _objectSpread({
    cursor: 'not-allowed'
  }, (0, _createAppearance["default"])(items.disabled))), _objectSpread2));
};

var _default = createTagInputAppearance;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy90aGVtZXIvc3JjL2NyZWF0ZVRhZ0lucHV0QXBwZWFyYW5jZS5qcyJdLCJuYW1lcyI6WyJiYXNlU3R5bGUiLCJhbGlnbkl0ZW1zIiwiZGlzcGxheSIsImZsZXhXcmFwIiwiZm9jdXNTdGF0ZSIsImRpc2FibGVkU3RhdGUiLCJjcmVhdGVUYWdJbnB1dEFwcGVhcmFuY2UiLCJpdGVtcyIsInByb3BzIiwiY2IiLCJwcm9wIiwiY29uc29sZSIsImVycm9yIiwiYmFzZSIsInpJbmRleCIsIlN0YWNraW5nT3JkZXIiLCJGT0NVU0VEIiwiZm9jdXMiLCJjdXJzb3IiLCJkaXNhYmxlZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQTs7QUFDQTs7QUFDQTs7Ozs7O0FBRUEsSUFBTUEsU0FBUyxHQUFHO0FBQ2hCQyxFQUFBQSxVQUFVLEVBQUUsUUFESTtBQUVoQkMsRUFBQUEsT0FBTyxFQUFFLGFBRk87QUFHaEJDLEVBQUFBLFFBQVEsRUFBRTtBQUhNLENBQWxCO0FBTUEsSUFBTUMsVUFBVSxHQUFHLDBCQUFuQjtBQUNBLElBQU1DLGFBQWEsR0FBRyx5QkFBdEI7QUFFQTs7Ozs7QUFJQSxJQUFNQyx3QkFBd0IsR0FBRyxTQUEzQkEsd0JBQTJCLEdBQWdCO0FBQUE7O0FBQUEsTUFBZkMsS0FBZSx1RUFBUCxFQUFPO0FBQy9DLHVDQUFvQjtBQUNsQkEsSUFBQUEsS0FBSyxFQUFMQSxLQURrQjtBQUVsQkMsSUFBQUEsS0FBSyxFQUFFLENBQUMsTUFBRCxFQUFTLE9BQVQsRUFBa0IsVUFBbEIsQ0FGVztBQUdsQkMsSUFBQUEsRUFBRSxFQUFFLFlBQUFDLElBQUksRUFBSTtBQUNWQyxNQUFBQSxPQUFPLENBQUNDLEtBQVIsMERBQ29ERixJQURwRCxZQUVFSCxLQUZGO0FBSUQ7QUFSaUIsR0FBcEI7QUFXQSwyQkFDS1AsU0FETCxNQUVLLGtDQUFpQk8sS0FBSyxDQUFDTSxJQUF2QixDQUZMLHlFQUdHVCxVQUhIO0FBSUlVLElBQUFBLE1BQU0sRUFBRUMseUJBQWNDO0FBSjFCLEtBS08sa0NBQWlCVCxLQUFLLENBQUNVLEtBQXZCLENBTFAscURBT0daLGFBUEg7QUFRSWEsSUFBQUEsTUFBTSxFQUFFO0FBUlosS0FTTyxrQ0FBaUJYLEtBQUssQ0FBQ1ksUUFBdkIsQ0FUUDtBQVlELENBeEJEOztlQTBCZWIsd0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBTdGFja2luZ09yZGVyIH0gZnJvbSAnLi4vLi4vY29uc3RhbnRzJ1xuaW1wb3J0IG1pc3NpbmdTdGF0ZVdhcm5pbmcgZnJvbSAnLi9taXNzaW5nU3RhdGVXYXJuaW5nJ1xuaW1wb3J0IGNyZWF0ZUFwcGVhcmFuY2UgZnJvbSAnLi9jcmVhdGVBcHBlYXJhbmNlJ1xuXG5jb25zdCBiYXNlU3R5bGUgPSB7XG4gIGFsaWduSXRlbXM6ICdjZW50ZXInLFxuICBkaXNwbGF5OiAnaW5saW5lLWZsZXgnLFxuICBmbGV4V3JhcDogJ3dyYXAnXG59XG5cbmNvbnN0IGZvY3VzU3RhdGUgPSAnJlthcmlhLWFjdGl2ZWRlc2NlbmRhbnRdJ1xuY29uc3QgZGlzYWJsZWRTdGF0ZSA9ICcmW2FyaWEtZGlzYWJsZWQ9XCJ0cnVlXCJdJ1xuXG4vKipcbiAqIEBwYXJhbSB7b2JqZWN0fSBpdGVtcyAtIG9iamVjdCB3aXRoIGEgc2V0IG9mIHN0YXRlcy5cbiAqIEByZXR1cm4ge29iamVjdH0gdGhlIGZpbmFsIGFwcGVhcmFuY2UuXG4gKi9cbmNvbnN0IGNyZWF0ZVRhZ0lucHV0QXBwZWFyYW5jZSA9IChpdGVtcyA9IHt9KSA9PiB7XG4gIG1pc3NpbmdTdGF0ZVdhcm5pbmcoe1xuICAgIGl0ZW1zLFxuICAgIHByb3BzOiBbJ2Jhc2UnLCAnZm9jdXMnLCAnZGlzYWJsZWQnXSxcbiAgICBjYjogcHJvcCA9PiB7XG4gICAgICBjb25zb2xlLmVycm9yKFxuICAgICAgICBgVGhlbWVyLmNyZWF0ZVRhZ0lucHV0QXBwZWFyYW5jZSgpIGlzIG1pc3NpbmcgYSAke3Byb3B9IGl0ZW1gLFxuICAgICAgICBpdGVtc1xuICAgICAgKVxuICAgIH1cbiAgfSlcblxuICByZXR1cm4ge1xuICAgIC4uLmJhc2VTdHlsZSxcbiAgICAuLi5jcmVhdGVBcHBlYXJhbmNlKGl0ZW1zLmJhc2UpLFxuICAgIFtmb2N1c1N0YXRlXToge1xuICAgICAgekluZGV4OiBTdGFja2luZ09yZGVyLkZPQ1VTRUQsXG4gICAgICAuLi5jcmVhdGVBcHBlYXJhbmNlKGl0ZW1zLmZvY3VzKVxuICAgIH0sXG4gICAgW2Rpc2FibGVkU3RhdGVdOiB7XG4gICAgICBjdXJzb3I6ICdub3QtYWxsb3dlZCcsXG4gICAgICAuLi5jcmVhdGVBcHBlYXJhbmNlKGl0ZW1zLmRpc2FibGVkKVxuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVUYWdJbnB1dEFwcGVhcmFuY2VcbiJdfQ==