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
  (0, _missingStateWarning["default"])({
    items: items,
    props: ['base', 'disabled', 'invalid', 'hover', 'active', 'focus'],
    cb: function cb(prop) {
      console.error("Themer.createSelectAppearance() is missing a ".concat(prop, " item"), items);
    }
  });
  return _objectSpread({}, baseStyle, {}, (0, _createAppearance["default"])(items.base), (_objectSpread2 = {}, (0, _defineProperty2["default"])(_objectSpread2, disabledState, _objectSpread({
    cursor: 'not-allowed'
  }, (0, _createAppearance["default"])(items.disabled))), (0, _defineProperty2["default"])(_objectSpread2, invalidState, (0, _createAppearance["default"])(items.invalid)), (0, _defineProperty2["default"])(_objectSpread2, hoverState, (0, _createAppearance["default"])(items.hover)), (0, _defineProperty2["default"])(_objectSpread2, focusState, (0, _createAppearance["default"])(items.focus)), (0, _defineProperty2["default"])(_objectSpread2, activeState, (0, _createAppearance["default"])(items.active)), _objectSpread2));
};

var _default = createSelectAppearance;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy90aGVtZXIvc3JjL2NyZWF0ZVNlbGVjdEFwcGVhcmFuY2UuanMiXSwibmFtZXMiOlsiYmFzZVN0eWxlIiwiV2Via2l0QXBwZWFyYW5jZSIsIk1vekFwcGVhcmFuY2UiLCJib3JkZXIiLCJmbGV4IiwiYmFja2dyb3VuZCIsIndpZHRoIiwiV2Via2l0Rm9udFNtb290aGluZyIsInRleHREZWNvcmF0aW9uIiwib3V0bGluZSIsImN1cnNvciIsImNvbG9yIiwidGV4dFNoYWRvdyIsImRpc2FibGVkU3RhdGUiLCJpbnZhbGlkU3RhdGUiLCJob3ZlclN0YXRlIiwiZm9jdXNTdGF0ZSIsImFjdGl2ZVN0YXRlIiwiY3JlYXRlU2VsZWN0QXBwZWFyYW5jZSIsIml0ZW1zIiwicHJvcHMiLCJjYiIsInByb3AiLCJjb25zb2xlIiwiZXJyb3IiLCJiYXNlIiwiZGlzYWJsZWQiLCJpbnZhbGlkIiwiaG92ZXIiLCJmb2N1cyIsImFjdGl2ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQTs7QUFDQTs7Ozs7O0FBRUEsSUFBTUEsU0FBUyxHQUFHO0FBQ2hCQyxFQUFBQSxnQkFBZ0IsRUFBRSxNQURGO0FBRWhCQyxFQUFBQSxhQUFhLEVBQUUsTUFGQztBQUdoQkMsRUFBQUEsTUFBTSxFQUFFLE1BSFE7QUFJaEJDLEVBQUFBLElBQUksRUFBRSxDQUpVO0FBS2hCQyxFQUFBQSxVQUFVLEVBQUUsTUFMSTtBQU1oQkMsRUFBQUEsS0FBSyxFQUFFLE1BTlM7QUFPaEJDLEVBQUFBLG1CQUFtQixFQUFFLGFBUEw7QUFRaEJDLEVBQUFBLGNBQWMsRUFBRSxNQVJBO0FBU2hCQyxFQUFBQSxPQUFPLEVBQUUsTUFUTztBQVVoQkMsRUFBQUEsTUFBTSxFQUFFLFNBVlE7QUFXaEIscUJBQW1CO0FBQ2pCQyxJQUFBQSxLQUFLLEVBQUUsYUFEVTtBQUVqQkMsSUFBQUEsVUFBVSxFQUFFO0FBRks7QUFYSCxDQUFsQjtBQWlCQSxJQUFNQyxhQUFhLEdBQUcsWUFBdEI7QUFDQSxJQUFNQyxZQUFZLEdBQUcsd0JBQXJCO0FBQ0EsSUFBTUMsVUFBVSxHQUFHLHlCQUFuQjtBQUNBLElBQU1DLFVBQVUsR0FBRyx5QkFBbkI7QUFDQSxJQUFNQyxXQUFXLEdBQUcsMEJBQXBCO0FBRUE7Ozs7O0FBSUEsSUFBTUMsc0JBQXNCLEdBQUcsU0FBekJBLHNCQUF5QixHQUFnQjtBQUFBOztBQUFBLE1BQWZDLEtBQWUsdUVBQVAsRUFBTztBQUM3Qyx1Q0FBb0I7QUFDbEJBLElBQUFBLEtBQUssRUFBTEEsS0FEa0I7QUFFbEJDLElBQUFBLEtBQUssRUFBRSxDQUFDLE1BQUQsRUFBUyxVQUFULEVBQXFCLFNBQXJCLEVBQWdDLE9BQWhDLEVBQXlDLFFBQXpDLEVBQW1ELE9BQW5ELENBRlc7QUFHbEJDLElBQUFBLEVBQUUsRUFBRSxZQUFBQyxJQUFJLEVBQUk7QUFDVkMsTUFBQUEsT0FBTyxDQUFDQyxLQUFSLHdEQUNrREYsSUFEbEQsWUFFRUgsS0FGRjtBQUlEO0FBUmlCLEdBQXBCO0FBV0EsMkJBQ0tuQixTQURMLE1BRUssa0NBQWlCbUIsS0FBSyxDQUFDTSxJQUF2QixDQUZMLHlFQUdHWixhQUhIO0FBSUlILElBQUFBLE1BQU0sRUFBRTtBQUpaLEtBS08sa0NBQWlCUyxLQUFLLENBQUNPLFFBQXZCLENBTFAscURBT0daLFlBUEgsRUFPa0Isa0NBQWlCSyxLQUFLLENBQUNRLE9BQXZCLENBUGxCLG9EQVFHWixVQVJILEVBUWdCLGtDQUFpQkksS0FBSyxDQUFDUyxLQUF2QixDQVJoQixvREFTR1osVUFUSCxFQVNnQixrQ0FBaUJHLEtBQUssQ0FBQ1UsS0FBdkIsQ0FUaEIsb0RBVUdaLFdBVkgsRUFVaUIsa0NBQWlCRSxLQUFLLENBQUNXLE1BQXZCLENBVmpCO0FBWUQsQ0F4QkQ7O2VBMEJlWixzQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBjcmVhdGVBcHBlYXJhbmNlIGZyb20gJy4vY3JlYXRlQXBwZWFyYW5jZSdcbmltcG9ydCBtaXNzaW5nU3RhdGVXYXJuaW5nIGZyb20gJy4vbWlzc2luZ1N0YXRlV2FybmluZydcblxuY29uc3QgYmFzZVN0eWxlID0ge1xuICBXZWJraXRBcHBlYXJhbmNlOiAnbm9uZScsXG4gIE1vekFwcGVhcmFuY2U6ICdub25lJyxcbiAgYm9yZGVyOiAnbm9uZScsXG4gIGZsZXg6IDEsXG4gIGJhY2tncm91bmQ6ICdub25lJyxcbiAgd2lkdGg6ICcxMDAlJyxcbiAgV2Via2l0Rm9udFNtb290aGluZzogJ2FudGlhbGlhc2VkJyxcbiAgdGV4dERlY29yYXRpb246ICdub25lJyxcbiAgb3V0bGluZTogJ25vbmUnLFxuICBjdXJzb3I6ICdwb2ludGVyJyxcbiAgJzotbW96LWZvY3VzcmluZyc6IHtcbiAgICBjb2xvcjogJ3RyYW5zcGFyZW50JyxcbiAgICB0ZXh0U2hhZG93OiAnMCAwIDAgIzAwMCdcbiAgfVxufVxuXG5jb25zdCBkaXNhYmxlZFN0YXRlID0gJ1tkaXNhYmxlZF0nXG5jb25zdCBpbnZhbGlkU3RhdGUgPSAnJlthcmlhLWludmFsaWQ9XCJ0cnVlXCJdJ1xuY29uc3QgaG92ZXJTdGF0ZSA9ICcmOm5vdChbZGlzYWJsZWRdKTpob3ZlcidcbmNvbnN0IGZvY3VzU3RhdGUgPSAnJjpub3QoW2Rpc2FibGVkXSk6Zm9jdXMnXG5jb25zdCBhY3RpdmVTdGF0ZSA9ICcmOm5vdChbZGlzYWJsZWRdKTphY3RpdmUnXG5cbi8qKlxuICogQHBhcmFtIHtvYmplY3R9IGl0ZW1zIC0gb2JqZWN0IHdpdGggYSBzZXQgb2Ygc3RhdGVzLlxuICogQHJldHVybiB7b2JqZWN0fSB0aGUgZmluYWwgYXBwZWFyYW5jZS5cbiAqL1xuY29uc3QgY3JlYXRlU2VsZWN0QXBwZWFyYW5jZSA9IChpdGVtcyA9IHt9KSA9PiB7XG4gIG1pc3NpbmdTdGF0ZVdhcm5pbmcoe1xuICAgIGl0ZW1zLFxuICAgIHByb3BzOiBbJ2Jhc2UnLCAnZGlzYWJsZWQnLCAnaW52YWxpZCcsICdob3ZlcicsICdhY3RpdmUnLCAnZm9jdXMnXSxcbiAgICBjYjogcHJvcCA9PiB7XG4gICAgICBjb25zb2xlLmVycm9yKFxuICAgICAgICBgVGhlbWVyLmNyZWF0ZVNlbGVjdEFwcGVhcmFuY2UoKSBpcyBtaXNzaW5nIGEgJHtwcm9wfSBpdGVtYCxcbiAgICAgICAgaXRlbXNcbiAgICAgIClcbiAgICB9XG4gIH0pXG5cbiAgcmV0dXJuIHtcbiAgICAuLi5iYXNlU3R5bGUsXG4gICAgLi4uY3JlYXRlQXBwZWFyYW5jZShpdGVtcy5iYXNlKSxcbiAgICBbZGlzYWJsZWRTdGF0ZV06IHtcbiAgICAgIGN1cnNvcjogJ25vdC1hbGxvd2VkJyxcbiAgICAgIC4uLmNyZWF0ZUFwcGVhcmFuY2UoaXRlbXMuZGlzYWJsZWQpXG4gICAgfSxcbiAgICBbaW52YWxpZFN0YXRlXTogY3JlYXRlQXBwZWFyYW5jZShpdGVtcy5pbnZhbGlkKSxcbiAgICBbaG92ZXJTdGF0ZV06IGNyZWF0ZUFwcGVhcmFuY2UoaXRlbXMuaG92ZXIpLFxuICAgIFtmb2N1c1N0YXRlXTogY3JlYXRlQXBwZWFyYW5jZShpdGVtcy5mb2N1cyksXG4gICAgW2FjdGl2ZVN0YXRlXTogY3JlYXRlQXBwZWFyYW5jZShpdGVtcy5hY3RpdmUpXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlU2VsZWN0QXBwZWFyYW5jZVxuIl19