import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

import createAppearance from './createAppearance';
import missingStateWarning from './missingStateWarning';
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
  missingStateWarning({
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
    }, createAppearance(items.base))
  }, _defineProperty(_objectSpread2, disabledState, _objectSpread({
    cursor: 'not-allowed'
  }, createAppearance(items.disabled))), _defineProperty(_objectSpread2, hoverState, createAppearance(items.hover)), _defineProperty(_objectSpread2, focusState, createAppearance(items.focus)), _defineProperty(_objectSpread2, activeState, createAppearance(items.active)), _defineProperty(_objectSpread2, checkedState, _objectSpread({}, createAppearance(items.checked), {
    '& > svg': {
      display: 'block'
    }
  })), _defineProperty(_objectSpread2, checkedHoverState, _objectSpread({}, createAppearance(items.checkedHover), {
    '& > svg': {
      display: 'block'
    }
  })), _defineProperty(_objectSpread2, checkedActiveState, _objectSpread({}, createAppearance(items.checkedActive), {
    '& > svg': {
      display: 'block'
    }
  })), _defineProperty(_objectSpread2, checkedDisabledState, _objectSpread({}, createAppearance(items.checkedDisabled), {
    '& > svg': {
      display: 'block'
    }
  })), _objectSpread2));
};

export default createSwitchAppearance;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy90aGVtZXIvc3JjL2NyZWF0ZVN3aXRjaEFwcGVhcmFuY2UuanMiXSwibmFtZXMiOlsiY3JlYXRlQXBwZWFyYW5jZSIsIm1pc3NpbmdTdGF0ZVdhcm5pbmciLCJkaXNhYmxlZFN0YXRlIiwiaG92ZXJTdGF0ZSIsImZvY3VzU3RhdGUiLCJhY3RpdmVTdGF0ZSIsImNoZWNrZWRTdGF0ZSIsImNoZWNrZWRIb3ZlclN0YXRlIiwiY2hlY2tlZEFjdGl2ZVN0YXRlIiwiY2hlY2tlZERpc2FibGVkU3RhdGUiLCJoaWRkZW5DaGVja2JveFN0eWxlIiwiYm9yZGVyIiwiY2xpcCIsImhlaWdodCIsIm92ZXJmbG93IiwicGFkZGluZyIsInBvc2l0aW9uIiwid2hpdGVTcGFjZSIsIndpZHRoIiwib3BhY2l0eSIsImNyZWF0ZVN3aXRjaEFwcGVhcmFuY2UiLCJpdGVtcyIsInByb3BzIiwiY2IiLCJwcm9wIiwiY29uc29sZSIsImVycm9yIiwiZGlzcGxheSIsImN1cnNvciIsImJhc2UiLCJkaXNhYmxlZCIsImhvdmVyIiwiZm9jdXMiLCJhY3RpdmUiLCJjaGVja2VkIiwiY2hlY2tlZEhvdmVyIiwiY2hlY2tlZEFjdGl2ZSIsImNoZWNrZWREaXNhYmxlZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEsT0FBT0EsZ0JBQVAsTUFBNkIsb0JBQTdCO0FBQ0EsT0FBT0MsbUJBQVAsTUFBZ0MsdUJBQWhDO0FBRUEsSUFBTUMsYUFBYSxHQUFHLG1CQUF0QjtBQUNBLElBQU1DLFVBQVUsR0FBRywrQkFBbkI7QUFDQSxJQUFNQyxVQUFVLEdBQUcsK0JBQW5CO0FBQ0EsSUFBTUMsV0FBVyxHQUFHLGdDQUFwQjtBQUNBLElBQU1DLFlBQVksR0FBRyxpQkFBckI7QUFDQSxJQUFNQyxpQkFBaUIsR0FBRyx1QkFBMUI7QUFDQSxJQUFNQyxrQkFBa0IsR0FBRyx3Q0FBM0I7QUFDQSxJQUFNQyxvQkFBb0IsR0FBRywyQkFBN0I7QUFFQSxJQUFNQyxtQkFBbUIsR0FBRztBQUMxQkMsRUFBQUEsTUFBTSxFQUFFLEdBRGtCO0FBRTFCQyxFQUFBQSxJQUFJLEVBQUUsMEJBRm9CO0FBRzFCQyxFQUFBQSxNQUFNLEVBQUUsR0FIa0I7QUFJMUJDLEVBQUFBLFFBQVEsRUFBRSxRQUpnQjtBQUsxQkMsRUFBQUEsT0FBTyxFQUFFLEdBTGlCO0FBTTFCQyxFQUFBQSxRQUFRLEVBQUUsVUFOZ0I7QUFPMUJDLEVBQUFBLFVBQVUsRUFBRSxRQVBjO0FBUTFCQyxFQUFBQSxLQUFLLEVBQUUsR0FSbUI7QUFTMUJDLEVBQUFBLE9BQU8sRUFBRTtBQVRpQixDQUE1QjtBQVlBOzs7OztBQUlBLElBQU1DLHNCQUFzQixHQUFHLFNBQXpCQSxzQkFBeUIsR0FBZ0I7QUFBQTs7QUFBQSxNQUFmQyxLQUFlLHVFQUFQLEVBQU87QUFDN0NwQixFQUFBQSxtQkFBbUIsQ0FBQztBQUNsQm9CLElBQUFBLEtBQUssRUFBTEEsS0FEa0I7QUFFbEJDLElBQUFBLEtBQUssRUFBRSxDQUNMLE1BREssRUFFTCxVQUZLLEVBR0wsT0FISyxFQUlMLFFBSkssRUFLTCxPQUxLLEVBTUwsU0FOSyxFQU9MLGVBUEssRUFRTCxpQkFSSyxDQUZXO0FBWWxCQyxJQUFBQSxFQUFFLEVBQUUsWUFBQUMsSUFBSSxFQUFJO0FBQ1ZDLE1BQUFBLE9BQU8sQ0FBQ0MsS0FBUix3REFDa0RGLElBRGxELFlBRUVILEtBRkY7QUFJRDtBQWpCaUIsR0FBRCxDQUFuQjtBQW9CQSwyQkFDS1gsbUJBREw7QUFFRSxxQkFBaUI7QUFBRWlCLE1BQUFBLE9BQU8sRUFBRTtBQUFYLEtBRm5CO0FBR0U7QUFBYUMsTUFBQUEsTUFBTSxFQUFFO0FBQXJCLE9BQW1DNUIsZ0JBQWdCLENBQUNxQixLQUFLLENBQUNRLElBQVAsQ0FBbkQ7QUFIRixxQ0FJRzNCLGFBSkg7QUFLSTBCLElBQUFBLE1BQU0sRUFBRTtBQUxaLEtBTU81QixnQkFBZ0IsQ0FBQ3FCLEtBQUssQ0FBQ1MsUUFBUCxDQU52QixvQ0FRRzNCLFVBUkgsRUFRZ0JILGdCQUFnQixDQUFDcUIsS0FBSyxDQUFDVSxLQUFQLENBUmhDLG1DQVNHM0IsVUFUSCxFQVNnQkosZ0JBQWdCLENBQUNxQixLQUFLLENBQUNXLEtBQVAsQ0FUaEMsbUNBVUczQixXQVZILEVBVWlCTCxnQkFBZ0IsQ0FBQ3FCLEtBQUssQ0FBQ1ksTUFBUCxDQVZqQyxtQ0FXRzNCLFlBWEgsb0JBWU9OLGdCQUFnQixDQUFDcUIsS0FBSyxDQUFDYSxPQUFQLENBWnZCO0FBYUksZUFBVztBQUFFUCxNQUFBQSxPQUFPLEVBQUU7QUFBWDtBQWJmLHVDQWVHcEIsaUJBZkgsb0JBZ0JPUCxnQkFBZ0IsQ0FBQ3FCLEtBQUssQ0FBQ2MsWUFBUCxDQWhCdkI7QUFpQkksZUFBVztBQUFFUixNQUFBQSxPQUFPLEVBQUU7QUFBWDtBQWpCZix1Q0FtQkduQixrQkFuQkgsb0JBb0JPUixnQkFBZ0IsQ0FBQ3FCLEtBQUssQ0FBQ2UsYUFBUCxDQXBCdkI7QUFxQkksZUFBVztBQUFFVCxNQUFBQSxPQUFPLEVBQUU7QUFBWDtBQXJCZix1Q0F1QkdsQixvQkF2Qkgsb0JBd0JPVCxnQkFBZ0IsQ0FBQ3FCLEtBQUssQ0FBQ2dCLGVBQVAsQ0F4QnZCO0FBeUJJLGVBQVc7QUFBRVYsTUFBQUEsT0FBTyxFQUFFO0FBQVg7QUF6QmY7QUE0QkQsQ0FqREQ7O0FBbURBLGVBQWVQLHNCQUFmIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGNyZWF0ZUFwcGVhcmFuY2UgZnJvbSAnLi9jcmVhdGVBcHBlYXJhbmNlJ1xuaW1wb3J0IG1pc3NpbmdTdGF0ZVdhcm5pbmcgZnJvbSAnLi9taXNzaW5nU3RhdGVXYXJuaW5nJ1xuXG5jb25zdCBkaXNhYmxlZFN0YXRlID0gJyZbZGlzYWJsZWRdICsgZGl2J1xuY29uc3QgaG92ZXJTdGF0ZSA9ICcmOm5vdChbZGlzYWJsZWRdKTpob3ZlciArIGRpdidcbmNvbnN0IGZvY3VzU3RhdGUgPSAnJjpub3QoW2Rpc2FibGVkXSk6Zm9jdXMgKyBkaXYnXG5jb25zdCBhY3RpdmVTdGF0ZSA9ICcmOm5vdChbZGlzYWJsZWRdKTphY3RpdmUgKyBkaXYnXG5jb25zdCBjaGVja2VkU3RhdGUgPSAnJjpjaGVja2VkICsgZGl2J1xuY29uc3QgY2hlY2tlZEhvdmVyU3RhdGUgPSAnJjpjaGVja2VkOmhvdmVyICsgZGl2J1xuY29uc3QgY2hlY2tlZEFjdGl2ZVN0YXRlID0gJyY6bm90KFtkaXNhYmxlZF0pOmNoZWNrZWQ6YWN0aXZlICsgZGl2J1xuY29uc3QgY2hlY2tlZERpc2FibGVkU3RhdGUgPSAnJltkaXNhYmxlZF06Y2hlY2tlZCArIGRpdidcblxuY29uc3QgaGlkZGVuQ2hlY2tib3hTdHlsZSA9IHtcbiAgYm9yZGVyOiAnMCcsXG4gIGNsaXA6ICdyZWN0KDFweCwgMXB4LCAxcHgsIDFweCknLFxuICBoZWlnaHQ6ICcxJyxcbiAgb3ZlcmZsb3c6ICdoaWRkZW4nLFxuICBwYWRkaW5nOiAnMCcsXG4gIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICB3aGl0ZVNwYWNlOiAnbm93cmFwJyxcbiAgd2lkdGg6ICcxJyxcbiAgb3BhY2l0eTogJzAnXG59XG5cbi8qKlxuICogQHBhcmFtIHtvYmplY3R9IGl0ZW1zIC0gb2JqZWN0IHdpdGggYSBzZXQgb2Ygc3RhdGVzLlxuICogQHJldHVybiB7b2JqZWN0fSB0aGUgZmluYWwgYXBwZWFyYW5jZS5cbiAqL1xuY29uc3QgY3JlYXRlU3dpdGNoQXBwZWFyYW5jZSA9IChpdGVtcyA9IHt9KSA9PiB7XG4gIG1pc3NpbmdTdGF0ZVdhcm5pbmcoe1xuICAgIGl0ZW1zLFxuICAgIHByb3BzOiBbXG4gICAgICAnYmFzZScsXG4gICAgICAnZGlzYWJsZWQnLFxuICAgICAgJ2hvdmVyJyxcbiAgICAgICdhY3RpdmUnLFxuICAgICAgJ2ZvY3VzJyxcbiAgICAgICdjaGVja2VkJyxcbiAgICAgICdjaGVja2VkQWN0aXZlJyxcbiAgICAgICdjaGVja2VkRGlzYWJsZWQnXG4gICAgXSxcbiAgICBjYjogcHJvcCA9PiB7XG4gICAgICBjb25zb2xlLmVycm9yKFxuICAgICAgICBgVGhlbWVyLmNyZWF0ZVN3aXRjaEFwcGVhcmFuY2UoKSBpcyBtaXNzaW5nIGEgJHtwcm9wfSBpdGVtYCxcbiAgICAgICAgaXRlbXNcbiAgICAgIClcbiAgICB9XG4gIH0pXG5cbiAgcmV0dXJuIHtcbiAgICAuLi5oaWRkZW5DaGVja2JveFN0eWxlLFxuICAgICcmICsgZGl2ID4gc3ZnJzogeyBkaXNwbGF5OiAnbm9uZScgfSxcbiAgICAnJiArIGRpdic6IHsgY3Vyc29yOiAncG9pbnRlcicsIC4uLmNyZWF0ZUFwcGVhcmFuY2UoaXRlbXMuYmFzZSkgfSxcbiAgICBbZGlzYWJsZWRTdGF0ZV06IHtcbiAgICAgIGN1cnNvcjogJ25vdC1hbGxvd2VkJyxcbiAgICAgIC4uLmNyZWF0ZUFwcGVhcmFuY2UoaXRlbXMuZGlzYWJsZWQpXG4gICAgfSxcbiAgICBbaG92ZXJTdGF0ZV06IGNyZWF0ZUFwcGVhcmFuY2UoaXRlbXMuaG92ZXIpLFxuICAgIFtmb2N1c1N0YXRlXTogY3JlYXRlQXBwZWFyYW5jZShpdGVtcy5mb2N1cyksXG4gICAgW2FjdGl2ZVN0YXRlXTogY3JlYXRlQXBwZWFyYW5jZShpdGVtcy5hY3RpdmUpLFxuICAgIFtjaGVja2VkU3RhdGVdOiB7XG4gICAgICAuLi5jcmVhdGVBcHBlYXJhbmNlKGl0ZW1zLmNoZWNrZWQpLFxuICAgICAgJyYgPiBzdmcnOiB7IGRpc3BsYXk6ICdibG9jaycgfVxuICAgIH0sXG4gICAgW2NoZWNrZWRIb3ZlclN0YXRlXToge1xuICAgICAgLi4uY3JlYXRlQXBwZWFyYW5jZShpdGVtcy5jaGVja2VkSG92ZXIpLFxuICAgICAgJyYgPiBzdmcnOiB7IGRpc3BsYXk6ICdibG9jaycgfVxuICAgIH0sXG4gICAgW2NoZWNrZWRBY3RpdmVTdGF0ZV06IHtcbiAgICAgIC4uLmNyZWF0ZUFwcGVhcmFuY2UoaXRlbXMuY2hlY2tlZEFjdGl2ZSksXG4gICAgICAnJiA+IHN2Zyc6IHsgZGlzcGxheTogJ2Jsb2NrJyB9XG4gICAgfSxcbiAgICBbY2hlY2tlZERpc2FibGVkU3RhdGVdOiB7XG4gICAgICAuLi5jcmVhdGVBcHBlYXJhbmNlKGl0ZW1zLmNoZWNrZWREaXNhYmxlZCksXG4gICAgICAnJiA+IHN2Zyc6IHsgZGlzcGxheTogJ2Jsb2NrJyB9XG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZVN3aXRjaEFwcGVhcmFuY2VcbiJdfQ==