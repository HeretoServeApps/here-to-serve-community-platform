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
  WebkitAppearance: 'none',
  MozAppearance: 'none',
  border: 'none'
};
var invalidState = '&[aria-invalid="true"]';
var placeholder = '&::placeholder';
var focusState = '&:focus';
var disabledState = '&:disabled';
/**
 * @param {object} items - object with a set of states.
 * @return {object} the final appearance.
 */

var createInputAppearance = function createInputAppearance() {
  var _objectSpread2;

  var items = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  (0, _missingStateWarning["default"])({
    items: items,
    props: ['base', 'invalid', 'placeholder', 'focus', 'disabled'],
    cb: function cb(prop) {
      console.error("Themer.createInputAppearance() is missing a ".concat(prop, " item"), items);
    }
  });
  return _objectSpread({}, baseStyle, {}, (0, _createAppearance["default"])(items.base), (_objectSpread2 = {}, (0, _defineProperty2["default"])(_objectSpread2, invalidState, (0, _createAppearance["default"])(items.invalid)), (0, _defineProperty2["default"])(_objectSpread2, placeholder, (0, _createAppearance["default"])(items.placeholder)), (0, _defineProperty2["default"])(_objectSpread2, focusState, _objectSpread({
    zIndex: _constants.StackingOrder.FOCUSED
  }, (0, _createAppearance["default"])(items.focus))), (0, _defineProperty2["default"])(_objectSpread2, disabledState, _objectSpread({
    cursor: 'not-allowed'
  }, (0, _createAppearance["default"])(items.disabled))), _objectSpread2));
};

var _default = createInputAppearance;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy90aGVtZXIvc3JjL2NyZWF0ZUlucHV0QXBwZWFyYW5jZS5qcyJdLCJuYW1lcyI6WyJiYXNlU3R5bGUiLCJXZWJraXRBcHBlYXJhbmNlIiwiTW96QXBwZWFyYW5jZSIsImJvcmRlciIsImludmFsaWRTdGF0ZSIsInBsYWNlaG9sZGVyIiwiZm9jdXNTdGF0ZSIsImRpc2FibGVkU3RhdGUiLCJjcmVhdGVJbnB1dEFwcGVhcmFuY2UiLCJpdGVtcyIsInByb3BzIiwiY2IiLCJwcm9wIiwiY29uc29sZSIsImVycm9yIiwiYmFzZSIsImludmFsaWQiLCJ6SW5kZXgiLCJTdGFja2luZ09yZGVyIiwiRk9DVVNFRCIsImZvY3VzIiwiY3Vyc29yIiwiZGlzYWJsZWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUE7O0FBQ0E7O0FBQ0E7Ozs7OztBQUVBLElBQU1BLFNBQVMsR0FBRztBQUNoQkMsRUFBQUEsZ0JBQWdCLEVBQUUsTUFERjtBQUVoQkMsRUFBQUEsYUFBYSxFQUFFLE1BRkM7QUFHaEJDLEVBQUFBLE1BQU0sRUFBRTtBQUhRLENBQWxCO0FBTUEsSUFBTUMsWUFBWSxHQUFHLHdCQUFyQjtBQUNBLElBQU1DLFdBQVcsR0FBRyxnQkFBcEI7QUFDQSxJQUFNQyxVQUFVLEdBQUcsU0FBbkI7QUFDQSxJQUFNQyxhQUFhLEdBQUcsWUFBdEI7QUFFQTs7Ozs7QUFJQSxJQUFNQyxxQkFBcUIsR0FBRyxTQUF4QkEscUJBQXdCLEdBQWdCO0FBQUE7O0FBQUEsTUFBZkMsS0FBZSx1RUFBUCxFQUFPO0FBQzVDLHVDQUFvQjtBQUNsQkEsSUFBQUEsS0FBSyxFQUFMQSxLQURrQjtBQUVsQkMsSUFBQUEsS0FBSyxFQUFFLENBQUMsTUFBRCxFQUFTLFNBQVQsRUFBb0IsYUFBcEIsRUFBbUMsT0FBbkMsRUFBNEMsVUFBNUMsQ0FGVztBQUdsQkMsSUFBQUEsRUFBRSxFQUFFLFlBQUFDLElBQUksRUFBSTtBQUNWQyxNQUFBQSxPQUFPLENBQUNDLEtBQVIsdURBQ2lERixJQURqRCxZQUVFSCxLQUZGO0FBSUQ7QUFSaUIsR0FBcEI7QUFXQSwyQkFDS1QsU0FETCxNQUVLLGtDQUFpQlMsS0FBSyxDQUFDTSxJQUF2QixDQUZMLHlFQUdHWCxZQUhILEVBR2tCLGtDQUFpQkssS0FBSyxDQUFDTyxPQUF2QixDQUhsQixvREFJR1gsV0FKSCxFQUlpQixrQ0FBaUJJLEtBQUssQ0FBQ0osV0FBdkIsQ0FKakIsb0RBS0dDLFVBTEg7QUFNSVcsSUFBQUEsTUFBTSxFQUFFQyx5QkFBY0M7QUFOMUIsS0FPTyxrQ0FBaUJWLEtBQUssQ0FBQ1csS0FBdkIsQ0FQUCxxREFTR2IsYUFUSDtBQVVJYyxJQUFBQSxNQUFNLEVBQUU7QUFWWixLQVdPLGtDQUFpQlosS0FBSyxDQUFDYSxRQUF2QixDQVhQO0FBY0QsQ0ExQkQ7O2VBNEJlZCxxQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFN0YWNraW5nT3JkZXIgfSBmcm9tICcuLi8uLi9jb25zdGFudHMnXG5pbXBvcnQgbWlzc2luZ1N0YXRlV2FybmluZyBmcm9tICcuL21pc3NpbmdTdGF0ZVdhcm5pbmcnXG5pbXBvcnQgY3JlYXRlQXBwZWFyYW5jZSBmcm9tICcuL2NyZWF0ZUFwcGVhcmFuY2UnXG5cbmNvbnN0IGJhc2VTdHlsZSA9IHtcbiAgV2Via2l0QXBwZWFyYW5jZTogJ25vbmUnLFxuICBNb3pBcHBlYXJhbmNlOiAnbm9uZScsXG4gIGJvcmRlcjogJ25vbmUnXG59XG5cbmNvbnN0IGludmFsaWRTdGF0ZSA9ICcmW2FyaWEtaW52YWxpZD1cInRydWVcIl0nXG5jb25zdCBwbGFjZWhvbGRlciA9ICcmOjpwbGFjZWhvbGRlcidcbmNvbnN0IGZvY3VzU3RhdGUgPSAnJjpmb2N1cydcbmNvbnN0IGRpc2FibGVkU3RhdGUgPSAnJjpkaXNhYmxlZCdcblxuLyoqXG4gKiBAcGFyYW0ge29iamVjdH0gaXRlbXMgLSBvYmplY3Qgd2l0aCBhIHNldCBvZiBzdGF0ZXMuXG4gKiBAcmV0dXJuIHtvYmplY3R9IHRoZSBmaW5hbCBhcHBlYXJhbmNlLlxuICovXG5jb25zdCBjcmVhdGVJbnB1dEFwcGVhcmFuY2UgPSAoaXRlbXMgPSB7fSkgPT4ge1xuICBtaXNzaW5nU3RhdGVXYXJuaW5nKHtcbiAgICBpdGVtcyxcbiAgICBwcm9wczogWydiYXNlJywgJ2ludmFsaWQnLCAncGxhY2Vob2xkZXInLCAnZm9jdXMnLCAnZGlzYWJsZWQnXSxcbiAgICBjYjogcHJvcCA9PiB7XG4gICAgICBjb25zb2xlLmVycm9yKFxuICAgICAgICBgVGhlbWVyLmNyZWF0ZUlucHV0QXBwZWFyYW5jZSgpIGlzIG1pc3NpbmcgYSAke3Byb3B9IGl0ZW1gLFxuICAgICAgICBpdGVtc1xuICAgICAgKVxuICAgIH1cbiAgfSlcblxuICByZXR1cm4ge1xuICAgIC4uLmJhc2VTdHlsZSxcbiAgICAuLi5jcmVhdGVBcHBlYXJhbmNlKGl0ZW1zLmJhc2UpLFxuICAgIFtpbnZhbGlkU3RhdGVdOiBjcmVhdGVBcHBlYXJhbmNlKGl0ZW1zLmludmFsaWQpLFxuICAgIFtwbGFjZWhvbGRlcl06IGNyZWF0ZUFwcGVhcmFuY2UoaXRlbXMucGxhY2Vob2xkZXIpLFxuICAgIFtmb2N1c1N0YXRlXToge1xuICAgICAgekluZGV4OiBTdGFja2luZ09yZGVyLkZPQ1VTRUQsXG4gICAgICAuLi5jcmVhdGVBcHBlYXJhbmNlKGl0ZW1zLmZvY3VzKVxuICAgIH0sXG4gICAgW2Rpc2FibGVkU3RhdGVdOiB7XG4gICAgICBjdXJzb3I6ICdub3QtYWxsb3dlZCcsXG4gICAgICAuLi5jcmVhdGVBcHBlYXJhbmNlKGl0ZW1zLmRpc2FibGVkKVxuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVJbnB1dEFwcGVhcmFuY2VcbiJdfQ==