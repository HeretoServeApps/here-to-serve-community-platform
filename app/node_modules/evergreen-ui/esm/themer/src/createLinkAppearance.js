import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

import missingStateWarning from './missingStateWarning';
import createAppearance from './createAppearance';
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
  missingStateWarning({
    items: items,
    props: ['base', 'hover', 'active', 'focus'],
    cb: function cb(prop) {
      console.error("Themer.createLinkAppearance() is missing a ".concat(prop, " item"), items);
    }
  });
  return _objectSpread({}, items.base, (_objectSpread2 = {}, _defineProperty(_objectSpread2, hoverState, createAppearance(items.hover)), _defineProperty(_objectSpread2, activeState, createAppearance(items.active)), _defineProperty(_objectSpread2, focusState, createAppearance(items.focus)), _objectSpread2));
};

export default createLinkAppearance;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy90aGVtZXIvc3JjL2NyZWF0ZUxpbmtBcHBlYXJhbmNlLmpzIl0sIm5hbWVzIjpbIm1pc3NpbmdTdGF0ZVdhcm5pbmciLCJjcmVhdGVBcHBlYXJhbmNlIiwiaG92ZXJTdGF0ZSIsImFjdGl2ZVN0YXRlIiwiZm9jdXNTdGF0ZSIsImNyZWF0ZUxpbmtBcHBlYXJhbmNlIiwiaXRlbXMiLCJwcm9wcyIsImNiIiwicHJvcCIsImNvbnNvbGUiLCJlcnJvciIsImJhc2UiLCJob3ZlciIsImFjdGl2ZSIsImZvY3VzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSxPQUFPQSxtQkFBUCxNQUFnQyx1QkFBaEM7QUFDQSxPQUFPQyxnQkFBUCxNQUE2QixvQkFBN0I7QUFFQSxJQUFNQyxVQUFVLEdBQUcsU0FBbkI7QUFDQSxJQUFNQyxXQUFXLEdBQUcsVUFBcEI7QUFDQSxJQUFNQyxVQUFVLEdBQUcsU0FBbkI7QUFFQTs7Ozs7QUFJQSxJQUFNQyxvQkFBb0IsR0FBRyxTQUF2QkEsb0JBQXVCLEdBQWdCO0FBQUE7O0FBQUEsTUFBZkMsS0FBZSx1RUFBUCxFQUFPO0FBQzNDTixFQUFBQSxtQkFBbUIsQ0FBQztBQUNsQk0sSUFBQUEsS0FBSyxFQUFMQSxLQURrQjtBQUVsQkMsSUFBQUEsS0FBSyxFQUFFLENBQUMsTUFBRCxFQUFTLE9BQVQsRUFBa0IsUUFBbEIsRUFBNEIsT0FBNUIsQ0FGVztBQUdsQkMsSUFBQUEsRUFBRSxFQUFFLFlBQUFDLElBQUksRUFBSTtBQUNWQyxNQUFBQSxPQUFPLENBQUNDLEtBQVIsc0RBQ2dERixJQURoRCxZQUVFSCxLQUZGO0FBSUQ7QUFSaUIsR0FBRCxDQUFuQjtBQVdBLDJCQUNLQSxLQUFLLENBQUNNLElBRFgsd0RBRUdWLFVBRkgsRUFFZ0JELGdCQUFnQixDQUFDSyxLQUFLLENBQUNPLEtBQVAsQ0FGaEMsbUNBR0dWLFdBSEgsRUFHaUJGLGdCQUFnQixDQUFDSyxLQUFLLENBQUNRLE1BQVAsQ0FIakMsbUNBSUdWLFVBSkgsRUFJZ0JILGdCQUFnQixDQUFDSyxLQUFLLENBQUNTLEtBQVAsQ0FKaEM7QUFNRCxDQWxCRDs7QUFvQkEsZUFBZVYsb0JBQWYiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgbWlzc2luZ1N0YXRlV2FybmluZyBmcm9tICcuL21pc3NpbmdTdGF0ZVdhcm5pbmcnXG5pbXBvcnQgY3JlYXRlQXBwZWFyYW5jZSBmcm9tICcuL2NyZWF0ZUFwcGVhcmFuY2UnXG5cbmNvbnN0IGhvdmVyU3RhdGUgPSAnJjpob3ZlcidcbmNvbnN0IGFjdGl2ZVN0YXRlID0gJyY6YWN0aXZlJ1xuY29uc3QgZm9jdXNTdGF0ZSA9ICcmOmZvY3VzJ1xuXG4vKipcbiAqIEBwYXJhbSB7b2JqZWN0fSBpdGVtcyAtIG9iamVjdCB3aXRoIGEgc2V0IG9mIHN0YXRlcy5cbiAqIEByZXR1cm4ge29iamVjdH0gdGhlIGZpbmFsIGFwcGVhcmFuY2UuXG4gKi9cbmNvbnN0IGNyZWF0ZUxpbmtBcHBlYXJhbmNlID0gKGl0ZW1zID0ge30pID0+IHtcbiAgbWlzc2luZ1N0YXRlV2FybmluZyh7XG4gICAgaXRlbXMsXG4gICAgcHJvcHM6IFsnYmFzZScsICdob3ZlcicsICdhY3RpdmUnLCAnZm9jdXMnXSxcbiAgICBjYjogcHJvcCA9PiB7XG4gICAgICBjb25zb2xlLmVycm9yKFxuICAgICAgICBgVGhlbWVyLmNyZWF0ZUxpbmtBcHBlYXJhbmNlKCkgaXMgbWlzc2luZyBhICR7cHJvcH0gaXRlbWAsXG4gICAgICAgIGl0ZW1zXG4gICAgICApXG4gICAgfVxuICB9KVxuXG4gIHJldHVybiB7XG4gICAgLi4uaXRlbXMuYmFzZSxcbiAgICBbaG92ZXJTdGF0ZV06IGNyZWF0ZUFwcGVhcmFuY2UoaXRlbXMuaG92ZXIpLFxuICAgIFthY3RpdmVTdGF0ZV06IGNyZWF0ZUFwcGVhcmFuY2UoaXRlbXMuYWN0aXZlKSxcbiAgICBbZm9jdXNTdGF0ZV06IGNyZWF0ZUFwcGVhcmFuY2UoaXRlbXMuZm9jdXMpXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlTGlua0FwcGVhcmFuY2VcbiJdfQ==