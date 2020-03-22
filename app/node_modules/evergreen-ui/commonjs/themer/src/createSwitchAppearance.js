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

var disabledState = '&[disabled] + div';
var hoverState = '&:not([disabled]):hover + div';
var focusState = '&:not([disabled]):focus + div';
var activeState = '&:not([disabled]):active + div';
var checkedState = '&:checked + div';
var checkedHoverState = '&:checked:hover + div';
var checkedActiveState = '&:not([disabled]):checked:active + div';
var checkedDisabledState = '&[disabled]:checked + div';
var hiddenCheckboxStyle = {
  border: '0',
  clip: 'rect(1px, 1px, 1px, 1px)',
  height: '1',
  overflow: 'hidden',
  padding: '0',
  position: 'absolute',
  whiteSpace: 'nowrap',
  width: '1',
  opacity: '0'
};
/**
 * @param {object} items - object with a set of states.
 * @return {object} the final appearance.
 */

var createSwitchAppearance = function createSwitchAppearance() {
  var _objectSpread2;

  var items = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  (0, _missingStateWarning["default"])({
    items: items,
    props: ['base', 'disabled', 'hover', 'active', 'focus', 'checked', 'checkedActive', 'checkedDisabled'],
    cb: function cb(prop) {
      console.error("Themer.createSwitchAppearance() is missing a ".concat(prop, " item"), items);
    }
  });
  return _objectSpread({}, hiddenCheckboxStyle, (_objectSpread2 = {
    '& + div > svg': {
      display: 'none'
    },
    '& + div': _objectSpread({
      cursor: 'pointer'
    }, (0, _createAppearance["default"])(items.base))
  }, (0, _defineProperty2["default"])(_objectSpread2, disabledState, _objectSpread({
    cursor: 'not-allowed'
  }, (0, _createAppearance["default"])(items.disabled))), (0, _defineProperty2["default"])(_objectSpread2, hoverState, (0, _createAppearance["default"])(items.hover)), (0, _defineProperty2["default"])(_objectSpread2, focusState, (0, _createAppearance["default"])(items.focus)), (0, _defineProperty2["default"])(_objectSpread2, activeState, (0, _createAppearance["default"])(items.active)), (0, _defineProperty2["default"])(_objectSpread2, checkedState, _objectSpread({}, (0, _createAppearance["default"])(items.checked), {
    '& > svg': {
      display: 'block'
    }
  })), (0, _defineProperty2["default"])(_objectSpread2, checkedHoverState, _objectSpread({}, (0, _createAppearance["default"])(items.checkedHover), {
    '& > svg': {
      display: 'block'
    }
  })), (0, _defineProperty2["default"])(_objectSpread2, checkedActiveState, _objectSpread({}, (0, _createAppearance["default"])(items.checkedActive), {
    '& > svg': {
      display: 'block'
    }
  })), (0, _defineProperty2["default"])(_objectSpread2, checkedDisabledState, _objectSpread({}, (0, _createAppearance["default"])(items.checkedDisabled), {
    '& > svg': {
      display: 'block'
    }
  })), _objectSpread2));
};

var _default = createSwitchAppearance;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy90aGVtZXIvc3JjL2NyZWF0ZVN3aXRjaEFwcGVhcmFuY2UuanMiXSwibmFtZXMiOlsiZGlzYWJsZWRTdGF0ZSIsImhvdmVyU3RhdGUiLCJmb2N1c1N0YXRlIiwiYWN0aXZlU3RhdGUiLCJjaGVja2VkU3RhdGUiLCJjaGVja2VkSG92ZXJTdGF0ZSIsImNoZWNrZWRBY3RpdmVTdGF0ZSIsImNoZWNrZWREaXNhYmxlZFN0YXRlIiwiaGlkZGVuQ2hlY2tib3hTdHlsZSIsImJvcmRlciIsImNsaXAiLCJoZWlnaHQiLCJvdmVyZmxvdyIsInBhZGRpbmciLCJwb3NpdGlvbiIsIndoaXRlU3BhY2UiLCJ3aWR0aCIsIm9wYWNpdHkiLCJjcmVhdGVTd2l0Y2hBcHBlYXJhbmNlIiwiaXRlbXMiLCJwcm9wcyIsImNiIiwicHJvcCIsImNvbnNvbGUiLCJlcnJvciIsImRpc3BsYXkiLCJjdXJzb3IiLCJiYXNlIiwiZGlzYWJsZWQiLCJob3ZlciIsImZvY3VzIiwiYWN0aXZlIiwiY2hlY2tlZCIsImNoZWNrZWRIb3ZlciIsImNoZWNrZWRBY3RpdmUiLCJjaGVja2VkRGlzYWJsZWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUE7O0FBQ0E7Ozs7OztBQUVBLElBQU1BLGFBQWEsR0FBRyxtQkFBdEI7QUFDQSxJQUFNQyxVQUFVLEdBQUcsK0JBQW5CO0FBQ0EsSUFBTUMsVUFBVSxHQUFHLCtCQUFuQjtBQUNBLElBQU1DLFdBQVcsR0FBRyxnQ0FBcEI7QUFDQSxJQUFNQyxZQUFZLEdBQUcsaUJBQXJCO0FBQ0EsSUFBTUMsaUJBQWlCLEdBQUcsdUJBQTFCO0FBQ0EsSUFBTUMsa0JBQWtCLEdBQUcsd0NBQTNCO0FBQ0EsSUFBTUMsb0JBQW9CLEdBQUcsMkJBQTdCO0FBRUEsSUFBTUMsbUJBQW1CLEdBQUc7QUFDMUJDLEVBQUFBLE1BQU0sRUFBRSxHQURrQjtBQUUxQkMsRUFBQUEsSUFBSSxFQUFFLDBCQUZvQjtBQUcxQkMsRUFBQUEsTUFBTSxFQUFFLEdBSGtCO0FBSTFCQyxFQUFBQSxRQUFRLEVBQUUsUUFKZ0I7QUFLMUJDLEVBQUFBLE9BQU8sRUFBRSxHQUxpQjtBQU0xQkMsRUFBQUEsUUFBUSxFQUFFLFVBTmdCO0FBTzFCQyxFQUFBQSxVQUFVLEVBQUUsUUFQYztBQVExQkMsRUFBQUEsS0FBSyxFQUFFLEdBUm1CO0FBUzFCQyxFQUFBQSxPQUFPLEVBQUU7QUFUaUIsQ0FBNUI7QUFZQTs7Ozs7QUFJQSxJQUFNQyxzQkFBc0IsR0FBRyxTQUF6QkEsc0JBQXlCLEdBQWdCO0FBQUE7O0FBQUEsTUFBZkMsS0FBZSx1RUFBUCxFQUFPO0FBQzdDLHVDQUFvQjtBQUNsQkEsSUFBQUEsS0FBSyxFQUFMQSxLQURrQjtBQUVsQkMsSUFBQUEsS0FBSyxFQUFFLENBQ0wsTUFESyxFQUVMLFVBRkssRUFHTCxPQUhLLEVBSUwsUUFKSyxFQUtMLE9BTEssRUFNTCxTQU5LLEVBT0wsZUFQSyxFQVFMLGlCQVJLLENBRlc7QUFZbEJDLElBQUFBLEVBQUUsRUFBRSxZQUFBQyxJQUFJLEVBQUk7QUFDVkMsTUFBQUEsT0FBTyxDQUFDQyxLQUFSLHdEQUNrREYsSUFEbEQsWUFFRUgsS0FGRjtBQUlEO0FBakJpQixHQUFwQjtBQW9CQSwyQkFDS1gsbUJBREw7QUFFRSxxQkFBaUI7QUFBRWlCLE1BQUFBLE9BQU8sRUFBRTtBQUFYLEtBRm5CO0FBR0U7QUFBYUMsTUFBQUEsTUFBTSxFQUFFO0FBQXJCLE9BQW1DLGtDQUFpQlAsS0FBSyxDQUFDUSxJQUF2QixDQUFuQztBQUhGLHNEQUlHM0IsYUFKSDtBQUtJMEIsSUFBQUEsTUFBTSxFQUFFO0FBTFosS0FNTyxrQ0FBaUJQLEtBQUssQ0FBQ1MsUUFBdkIsQ0FOUCxxREFRRzNCLFVBUkgsRUFRZ0Isa0NBQWlCa0IsS0FBSyxDQUFDVSxLQUF2QixDQVJoQixvREFTRzNCLFVBVEgsRUFTZ0Isa0NBQWlCaUIsS0FBSyxDQUFDVyxLQUF2QixDQVRoQixvREFVRzNCLFdBVkgsRUFVaUIsa0NBQWlCZ0IsS0FBSyxDQUFDWSxNQUF2QixDQVZqQixvREFXRzNCLFlBWEgsb0JBWU8sa0NBQWlCZSxLQUFLLENBQUNhLE9BQXZCLENBWlA7QUFhSSxlQUFXO0FBQUVQLE1BQUFBLE9BQU8sRUFBRTtBQUFYO0FBYmYsd0RBZUdwQixpQkFmSCxvQkFnQk8sa0NBQWlCYyxLQUFLLENBQUNjLFlBQXZCLENBaEJQO0FBaUJJLGVBQVc7QUFBRVIsTUFBQUEsT0FBTyxFQUFFO0FBQVg7QUFqQmYsd0RBbUJHbkIsa0JBbkJILG9CQW9CTyxrQ0FBaUJhLEtBQUssQ0FBQ2UsYUFBdkIsQ0FwQlA7QUFxQkksZUFBVztBQUFFVCxNQUFBQSxPQUFPLEVBQUU7QUFBWDtBQXJCZix3REF1QkdsQixvQkF2Qkgsb0JBd0JPLGtDQUFpQlksS0FBSyxDQUFDZ0IsZUFBdkIsQ0F4QlA7QUF5QkksZUFBVztBQUFFVixNQUFBQSxPQUFPLEVBQUU7QUFBWDtBQXpCZjtBQTRCRCxDQWpERDs7ZUFtRGVQLHNCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGNyZWF0ZUFwcGVhcmFuY2UgZnJvbSAnLi9jcmVhdGVBcHBlYXJhbmNlJ1xuaW1wb3J0IG1pc3NpbmdTdGF0ZVdhcm5pbmcgZnJvbSAnLi9taXNzaW5nU3RhdGVXYXJuaW5nJ1xuXG5jb25zdCBkaXNhYmxlZFN0YXRlID0gJyZbZGlzYWJsZWRdICsgZGl2J1xuY29uc3QgaG92ZXJTdGF0ZSA9ICcmOm5vdChbZGlzYWJsZWRdKTpob3ZlciArIGRpdidcbmNvbnN0IGZvY3VzU3RhdGUgPSAnJjpub3QoW2Rpc2FibGVkXSk6Zm9jdXMgKyBkaXYnXG5jb25zdCBhY3RpdmVTdGF0ZSA9ICcmOm5vdChbZGlzYWJsZWRdKTphY3RpdmUgKyBkaXYnXG5jb25zdCBjaGVja2VkU3RhdGUgPSAnJjpjaGVja2VkICsgZGl2J1xuY29uc3QgY2hlY2tlZEhvdmVyU3RhdGUgPSAnJjpjaGVja2VkOmhvdmVyICsgZGl2J1xuY29uc3QgY2hlY2tlZEFjdGl2ZVN0YXRlID0gJyY6bm90KFtkaXNhYmxlZF0pOmNoZWNrZWQ6YWN0aXZlICsgZGl2J1xuY29uc3QgY2hlY2tlZERpc2FibGVkU3RhdGUgPSAnJltkaXNhYmxlZF06Y2hlY2tlZCArIGRpdidcblxuY29uc3QgaGlkZGVuQ2hlY2tib3hTdHlsZSA9IHtcbiAgYm9yZGVyOiAnMCcsXG4gIGNsaXA6ICdyZWN0KDFweCwgMXB4LCAxcHgsIDFweCknLFxuICBoZWlnaHQ6ICcxJyxcbiAgb3ZlcmZsb3c6ICdoaWRkZW4nLFxuICBwYWRkaW5nOiAnMCcsXG4gIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICB3aGl0ZVNwYWNlOiAnbm93cmFwJyxcbiAgd2lkdGg6ICcxJyxcbiAgb3BhY2l0eTogJzAnXG59XG5cbi8qKlxuICogQHBhcmFtIHtvYmplY3R9IGl0ZW1zIC0gb2JqZWN0IHdpdGggYSBzZXQgb2Ygc3RhdGVzLlxuICogQHJldHVybiB7b2JqZWN0fSB0aGUgZmluYWwgYXBwZWFyYW5jZS5cbiAqL1xuY29uc3QgY3JlYXRlU3dpdGNoQXBwZWFyYW5jZSA9IChpdGVtcyA9IHt9KSA9PiB7XG4gIG1pc3NpbmdTdGF0ZVdhcm5pbmcoe1xuICAgIGl0ZW1zLFxuICAgIHByb3BzOiBbXG4gICAgICAnYmFzZScsXG4gICAgICAnZGlzYWJsZWQnLFxuICAgICAgJ2hvdmVyJyxcbiAgICAgICdhY3RpdmUnLFxuICAgICAgJ2ZvY3VzJyxcbiAgICAgICdjaGVja2VkJyxcbiAgICAgICdjaGVja2VkQWN0aXZlJyxcbiAgICAgICdjaGVja2VkRGlzYWJsZWQnXG4gICAgXSxcbiAgICBjYjogcHJvcCA9PiB7XG4gICAgICBjb25zb2xlLmVycm9yKFxuICAgICAgICBgVGhlbWVyLmNyZWF0ZVN3aXRjaEFwcGVhcmFuY2UoKSBpcyBtaXNzaW5nIGEgJHtwcm9wfSBpdGVtYCxcbiAgICAgICAgaXRlbXNcbiAgICAgIClcbiAgICB9XG4gIH0pXG5cbiAgcmV0dXJuIHtcbiAgICAuLi5oaWRkZW5DaGVja2JveFN0eWxlLFxuICAgICcmICsgZGl2ID4gc3ZnJzogeyBkaXNwbGF5OiAnbm9uZScgfSxcbiAgICAnJiArIGRpdic6IHsgY3Vyc29yOiAncG9pbnRlcicsIC4uLmNyZWF0ZUFwcGVhcmFuY2UoaXRlbXMuYmFzZSkgfSxcbiAgICBbZGlzYWJsZWRTdGF0ZV06IHtcbiAgICAgIGN1cnNvcjogJ25vdC1hbGxvd2VkJyxcbiAgICAgIC4uLmNyZWF0ZUFwcGVhcmFuY2UoaXRlbXMuZGlzYWJsZWQpXG4gICAgfSxcbiAgICBbaG92ZXJTdGF0ZV06IGNyZWF0ZUFwcGVhcmFuY2UoaXRlbXMuaG92ZXIpLFxuICAgIFtmb2N1c1N0YXRlXTogY3JlYXRlQXBwZWFyYW5jZShpdGVtcy5mb2N1cyksXG4gICAgW2FjdGl2ZVN0YXRlXTogY3JlYXRlQXBwZWFyYW5jZShpdGVtcy5hY3RpdmUpLFxuICAgIFtjaGVja2VkU3RhdGVdOiB7XG4gICAgICAuLi5jcmVhdGVBcHBlYXJhbmNlKGl0ZW1zLmNoZWNrZWQpLFxuICAgICAgJyYgPiBzdmcnOiB7IGRpc3BsYXk6ICdibG9jaycgfVxuICAgIH0sXG4gICAgW2NoZWNrZWRIb3ZlclN0YXRlXToge1xuICAgICAgLi4uY3JlYXRlQXBwZWFyYW5jZShpdGVtcy5jaGVja2VkSG92ZXIpLFxuICAgICAgJyYgPiBzdmcnOiB7IGRpc3BsYXk6ICdibG9jaycgfVxuICAgIH0sXG4gICAgW2NoZWNrZWRBY3RpdmVTdGF0ZV06IHtcbiAgICAgIC4uLmNyZWF0ZUFwcGVhcmFuY2UoaXRlbXMuY2hlY2tlZEFjdGl2ZSksXG4gICAgICAnJiA+IHN2Zyc6IHsgZGlzcGxheTogJ2Jsb2NrJyB9XG4gICAgfSxcbiAgICBbY2hlY2tlZERpc2FibGVkU3RhdGVdOiB7XG4gICAgICAuLi5jcmVhdGVBcHBlYXJhbmNlKGl0ZW1zLmNoZWNrZWREaXNhYmxlZCksXG4gICAgICAnJiA+IHN2Zyc6IHsgZGlzcGxheTogJ2Jsb2NrJyB9XG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZVN3aXRjaEFwcGVhcmFuY2VcbiJdfQ==