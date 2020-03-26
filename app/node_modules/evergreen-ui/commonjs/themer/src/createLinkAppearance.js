"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _missingStateWarning = _interopRequireDefault(require("./missingStateWarning"));

var _createAppearance = _interopRequireDefault(require("./createAppearance"));

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var hoverState = '&:hover';
var activeState = '&:active';
var focusState = '&:focus';
/**
 * @param {object} items - object with a set of states.
 * @return {object} the final appearance.
 */

var createLinkAppearance = function createLinkAppearance() {
  var _objectSpread2;

  var items = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  (0, _missingStateWarning["default"])({
    items: items,
    props: ['base', 'hover', 'active', 'focus'],
    cb: function cb(prop) {
      console.error("Themer.createLinkAppearance() is missing a ".concat(prop, " item"), items);
    }
  });
  return _objectSpread({}, items.base, (_objectSpread2 = {}, (0, _defineProperty2["default"])(_objectSpread2, hoverState, (0, _createAppearance["default"])(items.hover)), (0, _defineProperty2["default"])(_objectSpread2, activeState, (0, _createAppearance["default"])(items.active)), (0, _defineProperty2["default"])(_objectSpread2, focusState, (0, _createAppearance["default"])(items.focus)), _objectSpread2));
};

var _default = createLinkAppearance;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy90aGVtZXIvc3JjL2NyZWF0ZUxpbmtBcHBlYXJhbmNlLmpzIl0sIm5hbWVzIjpbImhvdmVyU3RhdGUiLCJhY3RpdmVTdGF0ZSIsImZvY3VzU3RhdGUiLCJjcmVhdGVMaW5rQXBwZWFyYW5jZSIsIml0ZW1zIiwicHJvcHMiLCJjYiIsInByb3AiLCJjb25zb2xlIiwiZXJyb3IiLCJiYXNlIiwiaG92ZXIiLCJhY3RpdmUiLCJmb2N1cyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQTs7QUFDQTs7Ozs7O0FBRUEsSUFBTUEsVUFBVSxHQUFHLFNBQW5CO0FBQ0EsSUFBTUMsV0FBVyxHQUFHLFVBQXBCO0FBQ0EsSUFBTUMsVUFBVSxHQUFHLFNBQW5CO0FBRUE7Ozs7O0FBSUEsSUFBTUMsb0JBQW9CLEdBQUcsU0FBdkJBLG9CQUF1QixHQUFnQjtBQUFBOztBQUFBLE1BQWZDLEtBQWUsdUVBQVAsRUFBTztBQUMzQyx1Q0FBb0I7QUFDbEJBLElBQUFBLEtBQUssRUFBTEEsS0FEa0I7QUFFbEJDLElBQUFBLEtBQUssRUFBRSxDQUFDLE1BQUQsRUFBUyxPQUFULEVBQWtCLFFBQWxCLEVBQTRCLE9BQTVCLENBRlc7QUFHbEJDLElBQUFBLEVBQUUsRUFBRSxZQUFBQyxJQUFJLEVBQUk7QUFDVkMsTUFBQUEsT0FBTyxDQUFDQyxLQUFSLHNEQUNnREYsSUFEaEQsWUFFRUgsS0FGRjtBQUlEO0FBUmlCLEdBQXBCO0FBV0EsMkJBQ0tBLEtBQUssQ0FBQ00sSUFEWCx5RUFFR1YsVUFGSCxFQUVnQixrQ0FBaUJJLEtBQUssQ0FBQ08sS0FBdkIsQ0FGaEIsb0RBR0dWLFdBSEgsRUFHaUIsa0NBQWlCRyxLQUFLLENBQUNRLE1BQXZCLENBSGpCLG9EQUlHVixVQUpILEVBSWdCLGtDQUFpQkUsS0FBSyxDQUFDUyxLQUF2QixDQUpoQjtBQU1ELENBbEJEOztlQW9CZVYsb0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgbWlzc2luZ1N0YXRlV2FybmluZyBmcm9tICcuL21pc3NpbmdTdGF0ZVdhcm5pbmcnXG5pbXBvcnQgY3JlYXRlQXBwZWFyYW5jZSBmcm9tICcuL2NyZWF0ZUFwcGVhcmFuY2UnXG5cbmNvbnN0IGhvdmVyU3RhdGUgPSAnJjpob3ZlcidcbmNvbnN0IGFjdGl2ZVN0YXRlID0gJyY6YWN0aXZlJ1xuY29uc3QgZm9jdXNTdGF0ZSA9ICcmOmZvY3VzJ1xuXG4vKipcbiAqIEBwYXJhbSB7b2JqZWN0fSBpdGVtcyAtIG9iamVjdCB3aXRoIGEgc2V0IG9mIHN0YXRlcy5cbiAqIEByZXR1cm4ge29iamVjdH0gdGhlIGZpbmFsIGFwcGVhcmFuY2UuXG4gKi9cbmNvbnN0IGNyZWF0ZUxpbmtBcHBlYXJhbmNlID0gKGl0ZW1zID0ge30pID0+IHtcbiAgbWlzc2luZ1N0YXRlV2FybmluZyh7XG4gICAgaXRlbXMsXG4gICAgcHJvcHM6IFsnYmFzZScsICdob3ZlcicsICdhY3RpdmUnLCAnZm9jdXMnXSxcbiAgICBjYjogcHJvcCA9PiB7XG4gICAgICBjb25zb2xlLmVycm9yKFxuICAgICAgICBgVGhlbWVyLmNyZWF0ZUxpbmtBcHBlYXJhbmNlKCkgaXMgbWlzc2luZyBhICR7cHJvcH0gaXRlbWAsXG4gICAgICAgIGl0ZW1zXG4gICAgICApXG4gICAgfVxuICB9KVxuXG4gIHJldHVybiB7XG4gICAgLi4uaXRlbXMuYmFzZSxcbiAgICBbaG92ZXJTdGF0ZV06IGNyZWF0ZUFwcGVhcmFuY2UoaXRlbXMuaG92ZXIpLFxuICAgIFthY3RpdmVTdGF0ZV06IGNyZWF0ZUFwcGVhcmFuY2UoaXRlbXMuYWN0aXZlKSxcbiAgICBbZm9jdXNTdGF0ZV06IGNyZWF0ZUFwcGVhcmFuY2UoaXRlbXMuZm9jdXMpXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlTGlua0FwcGVhcmFuY2VcbiJdfQ==