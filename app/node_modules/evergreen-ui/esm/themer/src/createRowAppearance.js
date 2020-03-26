import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

import createAppearance from './createAppearance';
import missingStateWarning from './missingStateWarning';
var hoverState = '&[data-isselectable="true"]:hover';
var focusState = '&[data-isselectable="true"]:focus, &[aria-selected="true"]';
var activeState = '&[aria-current="true"], &[data-isselectable="true"]:active';
var currentState = '&[aria-current="true"]';
var baseStyle = {
  '&[data-isselectable="true"]': {
    cursor: 'pointer'
  },
  outline: 'none',
  textDecoration: 'none'
};
/**
 * @param {object} items - object with a set of states.
 * @return {object} the final appearance.
 */

var createRowAppearance = function createRowAppearance() {
  var _objectSpread2;

  var items = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  missingStateWarning({
    items: items,
    props: ['base', 'hover', 'active', 'focus', 'current'],
    cb: function cb(prop) {
      console.error("Themer.createRowAppearance() is missing a ".concat(prop, " item"), items);
    }
  });
  return _objectSpread({}, baseStyle, {}, createAppearance(items.base), (_objectSpread2 = {}, _defineProperty(_objectSpread2, hoverState, createAppearance(items.hover)), _defineProperty(_objectSpread2, focusState, createAppearance(items.focus)), _defineProperty(_objectSpread2, activeState, createAppearance(items.active)), _defineProperty(_objectSpread2, currentState, createAppearance(items.current)), _objectSpread2));
};

export default createRowAppearance;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy90aGVtZXIvc3JjL2NyZWF0ZVJvd0FwcGVhcmFuY2UuanMiXSwibmFtZXMiOlsiY3JlYXRlQXBwZWFyYW5jZSIsIm1pc3NpbmdTdGF0ZVdhcm5pbmciLCJob3ZlclN0YXRlIiwiZm9jdXNTdGF0ZSIsImFjdGl2ZVN0YXRlIiwiY3VycmVudFN0YXRlIiwiYmFzZVN0eWxlIiwiY3Vyc29yIiwib3V0bGluZSIsInRleHREZWNvcmF0aW9uIiwiY3JlYXRlUm93QXBwZWFyYW5jZSIsIml0ZW1zIiwicHJvcHMiLCJjYiIsInByb3AiLCJjb25zb2xlIiwiZXJyb3IiLCJiYXNlIiwiaG92ZXIiLCJmb2N1cyIsImFjdGl2ZSIsImN1cnJlbnQiXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLE9BQU9BLGdCQUFQLE1BQTZCLG9CQUE3QjtBQUNBLE9BQU9DLG1CQUFQLE1BQWdDLHVCQUFoQztBQUVBLElBQU1DLFVBQVUsR0FBRyxtQ0FBbkI7QUFDQSxJQUFNQyxVQUFVLEdBQUcsNERBQW5CO0FBQ0EsSUFBTUMsV0FBVyxHQUFHLDREQUFwQjtBQUNBLElBQU1DLFlBQVksR0FBRyx3QkFBckI7QUFFQSxJQUFNQyxTQUFTLEdBQUc7QUFDaEIsaUNBQStCO0FBQzdCQyxJQUFBQSxNQUFNLEVBQUU7QUFEcUIsR0FEZjtBQUloQkMsRUFBQUEsT0FBTyxFQUFFLE1BSk87QUFLaEJDLEVBQUFBLGNBQWMsRUFBRTtBQUxBLENBQWxCO0FBUUE7Ozs7O0FBSUEsSUFBTUMsbUJBQW1CLEdBQUcsU0FBdEJBLG1CQUFzQixHQUFnQjtBQUFBOztBQUFBLE1BQWZDLEtBQWUsdUVBQVAsRUFBTztBQUMxQ1YsRUFBQUEsbUJBQW1CLENBQUM7QUFDbEJVLElBQUFBLEtBQUssRUFBTEEsS0FEa0I7QUFFbEJDLElBQUFBLEtBQUssRUFBRSxDQUFDLE1BQUQsRUFBUyxPQUFULEVBQWtCLFFBQWxCLEVBQTRCLE9BQTVCLEVBQXFDLFNBQXJDLENBRlc7QUFHbEJDLElBQUFBLEVBQUUsRUFBRSxZQUFBQyxJQUFJLEVBQUk7QUFDVkMsTUFBQUEsT0FBTyxDQUFDQyxLQUFSLHFEQUMrQ0YsSUFEL0MsWUFFRUgsS0FGRjtBQUlEO0FBUmlCLEdBQUQsQ0FBbkI7QUFXQSwyQkFDS0wsU0FETCxNQUVLTixnQkFBZ0IsQ0FBQ1csS0FBSyxDQUFDTSxJQUFQLENBRnJCLHdEQUdHZixVQUhILEVBR2dCRixnQkFBZ0IsQ0FBQ1csS0FBSyxDQUFDTyxLQUFQLENBSGhDLG1DQUlHZixVQUpILEVBSWdCSCxnQkFBZ0IsQ0FBQ1csS0FBSyxDQUFDUSxLQUFQLENBSmhDLG1DQUtHZixXQUxILEVBS2lCSixnQkFBZ0IsQ0FBQ1csS0FBSyxDQUFDUyxNQUFQLENBTGpDLG1DQU1HZixZQU5ILEVBTWtCTCxnQkFBZ0IsQ0FBQ1csS0FBSyxDQUFDVSxPQUFQLENBTmxDO0FBUUQsQ0FwQkQ7O0FBc0JBLGVBQWVYLG1CQUFmIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGNyZWF0ZUFwcGVhcmFuY2UgZnJvbSAnLi9jcmVhdGVBcHBlYXJhbmNlJ1xuaW1wb3J0IG1pc3NpbmdTdGF0ZVdhcm5pbmcgZnJvbSAnLi9taXNzaW5nU3RhdGVXYXJuaW5nJ1xuXG5jb25zdCBob3ZlclN0YXRlID0gJyZbZGF0YS1pc3NlbGVjdGFibGU9XCJ0cnVlXCJdOmhvdmVyJ1xuY29uc3QgZm9jdXNTdGF0ZSA9ICcmW2RhdGEtaXNzZWxlY3RhYmxlPVwidHJ1ZVwiXTpmb2N1cywgJlthcmlhLXNlbGVjdGVkPVwidHJ1ZVwiXSdcbmNvbnN0IGFjdGl2ZVN0YXRlID0gJyZbYXJpYS1jdXJyZW50PVwidHJ1ZVwiXSwgJltkYXRhLWlzc2VsZWN0YWJsZT1cInRydWVcIl06YWN0aXZlJ1xuY29uc3QgY3VycmVudFN0YXRlID0gJyZbYXJpYS1jdXJyZW50PVwidHJ1ZVwiXSdcblxuY29uc3QgYmFzZVN0eWxlID0ge1xuICAnJltkYXRhLWlzc2VsZWN0YWJsZT1cInRydWVcIl0nOiB7XG4gICAgY3Vyc29yOiAncG9pbnRlcidcbiAgfSxcbiAgb3V0bGluZTogJ25vbmUnLFxuICB0ZXh0RGVjb3JhdGlvbjogJ25vbmUnXG59XG5cbi8qKlxuICogQHBhcmFtIHtvYmplY3R9IGl0ZW1zIC0gb2JqZWN0IHdpdGggYSBzZXQgb2Ygc3RhdGVzLlxuICogQHJldHVybiB7b2JqZWN0fSB0aGUgZmluYWwgYXBwZWFyYW5jZS5cbiAqL1xuY29uc3QgY3JlYXRlUm93QXBwZWFyYW5jZSA9IChpdGVtcyA9IHt9KSA9PiB7XG4gIG1pc3NpbmdTdGF0ZVdhcm5pbmcoe1xuICAgIGl0ZW1zLFxuICAgIHByb3BzOiBbJ2Jhc2UnLCAnaG92ZXInLCAnYWN0aXZlJywgJ2ZvY3VzJywgJ2N1cnJlbnQnXSxcbiAgICBjYjogcHJvcCA9PiB7XG4gICAgICBjb25zb2xlLmVycm9yKFxuICAgICAgICBgVGhlbWVyLmNyZWF0ZVJvd0FwcGVhcmFuY2UoKSBpcyBtaXNzaW5nIGEgJHtwcm9wfSBpdGVtYCxcbiAgICAgICAgaXRlbXNcbiAgICAgIClcbiAgICB9XG4gIH0pXG5cbiAgcmV0dXJuIHtcbiAgICAuLi5iYXNlU3R5bGUsXG4gICAgLi4uY3JlYXRlQXBwZWFyYW5jZShpdGVtcy5iYXNlKSxcbiAgICBbaG92ZXJTdGF0ZV06IGNyZWF0ZUFwcGVhcmFuY2UoaXRlbXMuaG92ZXIpLFxuICAgIFtmb2N1c1N0YXRlXTogY3JlYXRlQXBwZWFyYW5jZShpdGVtcy5mb2N1cyksXG4gICAgW2FjdGl2ZVN0YXRlXTogY3JlYXRlQXBwZWFyYW5jZShpdGVtcy5hY3RpdmUpLFxuICAgIFtjdXJyZW50U3RhdGVdOiBjcmVhdGVBcHBlYXJhbmNlKGl0ZW1zLmN1cnJlbnQpXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlUm93QXBwZWFyYW5jZVxuIl19