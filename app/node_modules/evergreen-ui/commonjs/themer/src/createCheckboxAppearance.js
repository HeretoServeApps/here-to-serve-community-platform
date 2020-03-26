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

var defaultState = '& + div';
var disabledState = '&[disabled] + div';
var hoverState = '&:not([disabled]):hover + div';
var focusState = '&:not([disabled]):focus + div';
var activeState = '&:not([disabled]):active + div';
var checkedState = '&:checked + div, &[type=checkbox]:indeterminate + div';
var checkedHoverState = '&:not([disabled]):checked:hover + div, &[type=checkbox]:not([disabled]):indeterminate:hover + div';
var checkedActiveState = '&:not([disabled]):checked:active + div, &[type=checkbox]:not([disabled]):indeterminate:active + div';
var checkedDisabledState = '&[disabled]:checked + div, &[type=checkbox][disabled]:indeterminate + div';
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
var baseStyle = {
  WebkitFontSmoothing: 'antialiased',
  textDecoration: 'none',
  WebkitAppearance: 'none',
  MozAppearance: 'none',
  border: 'none',
  outline: 'none',
  cursor: 'pointer'
};
var checkedStyles = {
  '& > svg': {
    display: 'block'
  }
};
/**
 * @param {object} items - object with a set of items.
 * @return {object} the final appearance.
 */

var createCheckboxAppearance = function createCheckboxAppearance() {
  var _objectSpread2;

  var items = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  (0, _missingStateWarning["default"])({
    items: items,
    props: ['base', 'hover', 'focus', 'active', 'disabled', 'checked', 'checkedDisabled', 'checkedHover', 'checkedActive'],
    cb: function cb(prop) {
      console.error("Themer.createCheckboxAppearance() is missing a ".concat(prop, " state in items:"), items);
    }
  });
  return _objectSpread({}, hiddenCheckboxStyle, (_objectSpread2 = {
    '& + div > svg': {
      display: 'none'
    }
  }, (0, _defineProperty2["default"])(_objectSpread2, defaultState, _objectSpread({}, baseStyle, {}, (0, _createAppearance["default"])(items.base))), (0, _defineProperty2["default"])(_objectSpread2, hoverState, (0, _createAppearance["default"])(items.hover)), (0, _defineProperty2["default"])(_objectSpread2, focusState, (0, _createAppearance["default"])(items.focus)), (0, _defineProperty2["default"])(_objectSpread2, activeState, (0, _createAppearance["default"])(items.active)), (0, _defineProperty2["default"])(_objectSpread2, disabledState, (0, _createAppearance["default"])(items.disabled)), (0, _defineProperty2["default"])(_objectSpread2, checkedState, _objectSpread({}, checkedStyles, {}, (0, _createAppearance["default"])(items.checked))), (0, _defineProperty2["default"])(_objectSpread2, checkedHoverState, _objectSpread({}, checkedStyles, {}, (0, _createAppearance["default"])(items.checkedHover))), (0, _defineProperty2["default"])(_objectSpread2, checkedDisabledState, _objectSpread({}, checkedStyles, {}, (0, _createAppearance["default"])(items.checkedDisabled))), (0, _defineProperty2["default"])(_objectSpread2, checkedActiveState, _objectSpread({}, checkedStyles, {}, (0, _createAppearance["default"])(items.checkedActive))), _objectSpread2));
};

var _default = createCheckboxAppearance;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy90aGVtZXIvc3JjL2NyZWF0ZUNoZWNrYm94QXBwZWFyYW5jZS5qcyJdLCJuYW1lcyI6WyJkZWZhdWx0U3RhdGUiLCJkaXNhYmxlZFN0YXRlIiwiaG92ZXJTdGF0ZSIsImZvY3VzU3RhdGUiLCJhY3RpdmVTdGF0ZSIsImNoZWNrZWRTdGF0ZSIsImNoZWNrZWRIb3ZlclN0YXRlIiwiY2hlY2tlZEFjdGl2ZVN0YXRlIiwiY2hlY2tlZERpc2FibGVkU3RhdGUiLCJoaWRkZW5DaGVja2JveFN0eWxlIiwiYm9yZGVyIiwiY2xpcCIsImhlaWdodCIsIm92ZXJmbG93IiwicGFkZGluZyIsInBvc2l0aW9uIiwid2hpdGVTcGFjZSIsIndpZHRoIiwib3BhY2l0eSIsImJhc2VTdHlsZSIsIldlYmtpdEZvbnRTbW9vdGhpbmciLCJ0ZXh0RGVjb3JhdGlvbiIsIldlYmtpdEFwcGVhcmFuY2UiLCJNb3pBcHBlYXJhbmNlIiwib3V0bGluZSIsImN1cnNvciIsImNoZWNrZWRTdHlsZXMiLCJkaXNwbGF5IiwiY3JlYXRlQ2hlY2tib3hBcHBlYXJhbmNlIiwiaXRlbXMiLCJwcm9wcyIsImNiIiwicHJvcCIsImNvbnNvbGUiLCJlcnJvciIsImJhc2UiLCJob3ZlciIsImZvY3VzIiwiYWN0aXZlIiwiZGlzYWJsZWQiLCJjaGVja2VkIiwiY2hlY2tlZEhvdmVyIiwiY2hlY2tlZERpc2FibGVkIiwiY2hlY2tlZEFjdGl2ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQTs7QUFDQTs7Ozs7O0FBRUEsSUFBTUEsWUFBWSxHQUFHLFNBQXJCO0FBQ0EsSUFBTUMsYUFBYSxHQUFHLG1CQUF0QjtBQUNBLElBQU1DLFVBQVUsR0FBRywrQkFBbkI7QUFDQSxJQUFNQyxVQUFVLEdBQUcsK0JBQW5CO0FBQ0EsSUFBTUMsV0FBVyxHQUFHLGdDQUFwQjtBQUNBLElBQU1DLFlBQVksR0FBRyx1REFBckI7QUFDQSxJQUFNQyxpQkFBaUIsR0FDckIsbUdBREY7QUFFQSxJQUFNQyxrQkFBa0IsR0FDdEIscUdBREY7QUFFQSxJQUFNQyxvQkFBb0IsR0FDeEIsMkVBREY7QUFHQSxJQUFNQyxtQkFBbUIsR0FBRztBQUMxQkMsRUFBQUEsTUFBTSxFQUFFLEdBRGtCO0FBRTFCQyxFQUFBQSxJQUFJLEVBQUUsMEJBRm9CO0FBRzFCQyxFQUFBQSxNQUFNLEVBQUUsR0FIa0I7QUFJMUJDLEVBQUFBLFFBQVEsRUFBRSxRQUpnQjtBQUsxQkMsRUFBQUEsT0FBTyxFQUFFLEdBTGlCO0FBTTFCQyxFQUFBQSxRQUFRLEVBQUUsVUFOZ0I7QUFPMUJDLEVBQUFBLFVBQVUsRUFBRSxRQVBjO0FBUTFCQyxFQUFBQSxLQUFLLEVBQUUsR0FSbUI7QUFTMUJDLEVBQUFBLE9BQU8sRUFBRTtBQVRpQixDQUE1QjtBQVlBLElBQU1DLFNBQVMsR0FBRztBQUNoQkMsRUFBQUEsbUJBQW1CLEVBQUUsYUFETDtBQUVoQkMsRUFBQUEsY0FBYyxFQUFFLE1BRkE7QUFHaEJDLEVBQUFBLGdCQUFnQixFQUFFLE1BSEY7QUFJaEJDLEVBQUFBLGFBQWEsRUFBRSxNQUpDO0FBS2hCYixFQUFBQSxNQUFNLEVBQUUsTUFMUTtBQU1oQmMsRUFBQUEsT0FBTyxFQUFFLE1BTk87QUFPaEJDLEVBQUFBLE1BQU0sRUFBRTtBQVBRLENBQWxCO0FBVUEsSUFBTUMsYUFBYSxHQUFHO0FBQ3BCLGFBQVc7QUFDVEMsSUFBQUEsT0FBTyxFQUFFO0FBREE7QUFEUyxDQUF0QjtBQU1BOzs7OztBQUlBLElBQU1DLHdCQUF3QixHQUFHLFNBQTNCQSx3QkFBMkIsR0FBZ0I7QUFBQTs7QUFBQSxNQUFmQyxLQUFlLHVFQUFQLEVBQU87QUFDL0MsdUNBQW9CO0FBQ2xCQSxJQUFBQSxLQUFLLEVBQUxBLEtBRGtCO0FBRWxCQyxJQUFBQSxLQUFLLEVBQUUsQ0FDTCxNQURLLEVBRUwsT0FGSyxFQUdMLE9BSEssRUFJTCxRQUpLLEVBS0wsVUFMSyxFQU1MLFNBTkssRUFPTCxpQkFQSyxFQVFMLGNBUkssRUFTTCxlQVRLLENBRlc7QUFhbEJDLElBQUFBLEVBQUUsRUFBRSxZQUFBQyxJQUFJLEVBQUk7QUFDVkMsTUFBQUEsT0FBTyxDQUFDQyxLQUFSLDBEQUNvREYsSUFEcEQsdUJBRUVILEtBRkY7QUFJRDtBQWxCaUIsR0FBcEI7QUFxQkEsMkJBQ0twQixtQkFETDtBQUVFLHFCQUFpQjtBQUFFa0IsTUFBQUEsT0FBTyxFQUFFO0FBQVg7QUFGbkIsc0RBR0czQixZQUhILG9CQUd1Qm1CLFNBSHZCLE1BR3FDLGtDQUFpQlUsS0FBSyxDQUFDTSxJQUF2QixDQUhyQyxxREFJR2pDLFVBSkgsRUFJZ0Isa0NBQWlCMkIsS0FBSyxDQUFDTyxLQUF2QixDQUpoQixvREFLR2pDLFVBTEgsRUFLZ0Isa0NBQWlCMEIsS0FBSyxDQUFDUSxLQUF2QixDQUxoQixvREFNR2pDLFdBTkgsRUFNaUIsa0NBQWlCeUIsS0FBSyxDQUFDUyxNQUF2QixDQU5qQixvREFPR3JDLGFBUEgsRUFPbUIsa0NBQWlCNEIsS0FBSyxDQUFDVSxRQUF2QixDQVBuQixvREFRR2xDLFlBUkgsb0JBUXVCcUIsYUFSdkIsTUFReUMsa0NBQWlCRyxLQUFLLENBQUNXLE9BQXZCLENBUnpDLHFEQVNHbEMsaUJBVEgsb0JBVU9vQixhQVZQLE1BV08sa0NBQWlCRyxLQUFLLENBQUNZLFlBQXZCLENBWFAscURBYUdqQyxvQkFiSCxvQkFjT2tCLGFBZFAsTUFlTyxrQ0FBaUJHLEtBQUssQ0FBQ2EsZUFBdkIsQ0FmUCxxREFpQkduQyxrQkFqQkgsb0JBa0JPbUIsYUFsQlAsTUFtQk8sa0NBQWlCRyxLQUFLLENBQUNjLGFBQXZCLENBbkJQO0FBc0JELENBNUNEOztlQThDZWYsd0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgY3JlYXRlQXBwZWFyYW5jZSBmcm9tICcuL2NyZWF0ZUFwcGVhcmFuY2UnXG5pbXBvcnQgbWlzc2luZ1N0YXRlV2FybmluZyBmcm9tICcuL21pc3NpbmdTdGF0ZVdhcm5pbmcnXG5cbmNvbnN0IGRlZmF1bHRTdGF0ZSA9ICcmICsgZGl2J1xuY29uc3QgZGlzYWJsZWRTdGF0ZSA9ICcmW2Rpc2FibGVkXSArIGRpdidcbmNvbnN0IGhvdmVyU3RhdGUgPSAnJjpub3QoW2Rpc2FibGVkXSk6aG92ZXIgKyBkaXYnXG5jb25zdCBmb2N1c1N0YXRlID0gJyY6bm90KFtkaXNhYmxlZF0pOmZvY3VzICsgZGl2J1xuY29uc3QgYWN0aXZlU3RhdGUgPSAnJjpub3QoW2Rpc2FibGVkXSk6YWN0aXZlICsgZGl2J1xuY29uc3QgY2hlY2tlZFN0YXRlID0gJyY6Y2hlY2tlZCArIGRpdiwgJlt0eXBlPWNoZWNrYm94XTppbmRldGVybWluYXRlICsgZGl2J1xuY29uc3QgY2hlY2tlZEhvdmVyU3RhdGUgPVxuICAnJjpub3QoW2Rpc2FibGVkXSk6Y2hlY2tlZDpob3ZlciArIGRpdiwgJlt0eXBlPWNoZWNrYm94XTpub3QoW2Rpc2FibGVkXSk6aW5kZXRlcm1pbmF0ZTpob3ZlciArIGRpdidcbmNvbnN0IGNoZWNrZWRBY3RpdmVTdGF0ZSA9XG4gICcmOm5vdChbZGlzYWJsZWRdKTpjaGVja2VkOmFjdGl2ZSArIGRpdiwgJlt0eXBlPWNoZWNrYm94XTpub3QoW2Rpc2FibGVkXSk6aW5kZXRlcm1pbmF0ZTphY3RpdmUgKyBkaXYnXG5jb25zdCBjaGVja2VkRGlzYWJsZWRTdGF0ZSA9XG4gICcmW2Rpc2FibGVkXTpjaGVja2VkICsgZGl2LCAmW3R5cGU9Y2hlY2tib3hdW2Rpc2FibGVkXTppbmRldGVybWluYXRlICsgZGl2J1xuXG5jb25zdCBoaWRkZW5DaGVja2JveFN0eWxlID0ge1xuICBib3JkZXI6ICcwJyxcbiAgY2xpcDogJ3JlY3QoMXB4LCAxcHgsIDFweCwgMXB4KScsXG4gIGhlaWdodDogJzEnLFxuICBvdmVyZmxvdzogJ2hpZGRlbicsXG4gIHBhZGRpbmc6ICcwJyxcbiAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gIHdoaXRlU3BhY2U6ICdub3dyYXAnLFxuICB3aWR0aDogJzEnLFxuICBvcGFjaXR5OiAnMCdcbn1cblxuY29uc3QgYmFzZVN0eWxlID0ge1xuICBXZWJraXRGb250U21vb3RoaW5nOiAnYW50aWFsaWFzZWQnLFxuICB0ZXh0RGVjb3JhdGlvbjogJ25vbmUnLFxuICBXZWJraXRBcHBlYXJhbmNlOiAnbm9uZScsXG4gIE1vekFwcGVhcmFuY2U6ICdub25lJyxcbiAgYm9yZGVyOiAnbm9uZScsXG4gIG91dGxpbmU6ICdub25lJyxcbiAgY3Vyc29yOiAncG9pbnRlcidcbn1cblxuY29uc3QgY2hlY2tlZFN0eWxlcyA9IHtcbiAgJyYgPiBzdmcnOiB7XG4gICAgZGlzcGxheTogJ2Jsb2NrJ1xuICB9XG59XG5cbi8qKlxuICogQHBhcmFtIHtvYmplY3R9IGl0ZW1zIC0gb2JqZWN0IHdpdGggYSBzZXQgb2YgaXRlbXMuXG4gKiBAcmV0dXJuIHtvYmplY3R9IHRoZSBmaW5hbCBhcHBlYXJhbmNlLlxuICovXG5jb25zdCBjcmVhdGVDaGVja2JveEFwcGVhcmFuY2UgPSAoaXRlbXMgPSB7fSkgPT4ge1xuICBtaXNzaW5nU3RhdGVXYXJuaW5nKHtcbiAgICBpdGVtcyxcbiAgICBwcm9wczogW1xuICAgICAgJ2Jhc2UnLFxuICAgICAgJ2hvdmVyJyxcbiAgICAgICdmb2N1cycsXG4gICAgICAnYWN0aXZlJyxcbiAgICAgICdkaXNhYmxlZCcsXG4gICAgICAnY2hlY2tlZCcsXG4gICAgICAnY2hlY2tlZERpc2FibGVkJyxcbiAgICAgICdjaGVja2VkSG92ZXInLFxuICAgICAgJ2NoZWNrZWRBY3RpdmUnXG4gICAgXSxcbiAgICBjYjogcHJvcCA9PiB7XG4gICAgICBjb25zb2xlLmVycm9yKFxuICAgICAgICBgVGhlbWVyLmNyZWF0ZUNoZWNrYm94QXBwZWFyYW5jZSgpIGlzIG1pc3NpbmcgYSAke3Byb3B9IHN0YXRlIGluIGl0ZW1zOmAsXG4gICAgICAgIGl0ZW1zXG4gICAgICApXG4gICAgfVxuICB9KVxuXG4gIHJldHVybiB7XG4gICAgLi4uaGlkZGVuQ2hlY2tib3hTdHlsZSxcbiAgICAnJiArIGRpdiA+IHN2Zyc6IHsgZGlzcGxheTogJ25vbmUnIH0sXG4gICAgW2RlZmF1bHRTdGF0ZV06IHsgLi4uYmFzZVN0eWxlLCAuLi5jcmVhdGVBcHBlYXJhbmNlKGl0ZW1zLmJhc2UpIH0sXG4gICAgW2hvdmVyU3RhdGVdOiBjcmVhdGVBcHBlYXJhbmNlKGl0ZW1zLmhvdmVyKSxcbiAgICBbZm9jdXNTdGF0ZV06IGNyZWF0ZUFwcGVhcmFuY2UoaXRlbXMuZm9jdXMpLFxuICAgIFthY3RpdmVTdGF0ZV06IGNyZWF0ZUFwcGVhcmFuY2UoaXRlbXMuYWN0aXZlKSxcbiAgICBbZGlzYWJsZWRTdGF0ZV06IGNyZWF0ZUFwcGVhcmFuY2UoaXRlbXMuZGlzYWJsZWQpLFxuICAgIFtjaGVja2VkU3RhdGVdOiB7IC4uLmNoZWNrZWRTdHlsZXMsIC4uLmNyZWF0ZUFwcGVhcmFuY2UoaXRlbXMuY2hlY2tlZCkgfSxcbiAgICBbY2hlY2tlZEhvdmVyU3RhdGVdOiB7XG4gICAgICAuLi5jaGVja2VkU3R5bGVzLFxuICAgICAgLi4uY3JlYXRlQXBwZWFyYW5jZShpdGVtcy5jaGVja2VkSG92ZXIpXG4gICAgfSxcbiAgICBbY2hlY2tlZERpc2FibGVkU3RhdGVdOiB7XG4gICAgICAuLi5jaGVja2VkU3R5bGVzLFxuICAgICAgLi4uY3JlYXRlQXBwZWFyYW5jZShpdGVtcy5jaGVja2VkRGlzYWJsZWQpXG4gICAgfSxcbiAgICBbY2hlY2tlZEFjdGl2ZVN0YXRlXToge1xuICAgICAgLi4uY2hlY2tlZFN0eWxlcyxcbiAgICAgIC4uLmNyZWF0ZUFwcGVhcmFuY2UoaXRlbXMuY2hlY2tlZEFjdGl2ZSlcbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlQ2hlY2tib3hBcHBlYXJhbmNlXG4iXX0=