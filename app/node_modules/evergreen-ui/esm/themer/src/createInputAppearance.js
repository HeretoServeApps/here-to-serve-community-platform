import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

import { StackingOrder } from '../../constants';
import missingStateWarning from './missingStateWarning';
import createAppearance from './createAppearance';
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
  missingStateWarning({
    items: items,
    props: ['base', 'invalid', 'placeholder', 'focus', 'disabled'],
    cb: function cb(prop) {
      console.error("Themer.createInputAppearance() is missing a ".concat(prop, " item"), items);
    }
  });
  return _objectSpread({}, baseStyle, {}, createAppearance(items.base), (_objectSpread2 = {}, _defineProperty(_objectSpread2, invalidState, createAppearance(items.invalid)), _defineProperty(_objectSpread2, placeholder, createAppearance(items.placeholder)), _defineProperty(_objectSpread2, focusState, _objectSpread({
    zIndex: StackingOrder.FOCUSED
  }, createAppearance(items.focus))), _defineProperty(_objectSpread2, disabledState, _objectSpread({
    cursor: 'not-allowed'
  }, createAppearance(items.disabled))), _objectSpread2));
};

export default createInputAppearance;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy90aGVtZXIvc3JjL2NyZWF0ZUlucHV0QXBwZWFyYW5jZS5qcyJdLCJuYW1lcyI6WyJTdGFja2luZ09yZGVyIiwibWlzc2luZ1N0YXRlV2FybmluZyIsImNyZWF0ZUFwcGVhcmFuY2UiLCJiYXNlU3R5bGUiLCJXZWJraXRBcHBlYXJhbmNlIiwiTW96QXBwZWFyYW5jZSIsImJvcmRlciIsImludmFsaWRTdGF0ZSIsInBsYWNlaG9sZGVyIiwiZm9jdXNTdGF0ZSIsImRpc2FibGVkU3RhdGUiLCJjcmVhdGVJbnB1dEFwcGVhcmFuY2UiLCJpdGVtcyIsInByb3BzIiwiY2IiLCJwcm9wIiwiY29uc29sZSIsImVycm9yIiwiYmFzZSIsImludmFsaWQiLCJ6SW5kZXgiLCJGT0NVU0VEIiwiZm9jdXMiLCJjdXJzb3IiLCJkaXNhYmxlZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEsU0FBU0EsYUFBVCxRQUE4QixpQkFBOUI7QUFDQSxPQUFPQyxtQkFBUCxNQUFnQyx1QkFBaEM7QUFDQSxPQUFPQyxnQkFBUCxNQUE2QixvQkFBN0I7QUFFQSxJQUFNQyxTQUFTLEdBQUc7QUFDaEJDLEVBQUFBLGdCQUFnQixFQUFFLE1BREY7QUFFaEJDLEVBQUFBLGFBQWEsRUFBRSxNQUZDO0FBR2hCQyxFQUFBQSxNQUFNLEVBQUU7QUFIUSxDQUFsQjtBQU1BLElBQU1DLFlBQVksR0FBRyx3QkFBckI7QUFDQSxJQUFNQyxXQUFXLEdBQUcsZ0JBQXBCO0FBQ0EsSUFBTUMsVUFBVSxHQUFHLFNBQW5CO0FBQ0EsSUFBTUMsYUFBYSxHQUFHLFlBQXRCO0FBRUE7Ozs7O0FBSUEsSUFBTUMscUJBQXFCLEdBQUcsU0FBeEJBLHFCQUF3QixHQUFnQjtBQUFBOztBQUFBLE1BQWZDLEtBQWUsdUVBQVAsRUFBTztBQUM1Q1gsRUFBQUEsbUJBQW1CLENBQUM7QUFDbEJXLElBQUFBLEtBQUssRUFBTEEsS0FEa0I7QUFFbEJDLElBQUFBLEtBQUssRUFBRSxDQUFDLE1BQUQsRUFBUyxTQUFULEVBQW9CLGFBQXBCLEVBQW1DLE9BQW5DLEVBQTRDLFVBQTVDLENBRlc7QUFHbEJDLElBQUFBLEVBQUUsRUFBRSxZQUFBQyxJQUFJLEVBQUk7QUFDVkMsTUFBQUEsT0FBTyxDQUFDQyxLQUFSLHVEQUNpREYsSUFEakQsWUFFRUgsS0FGRjtBQUlEO0FBUmlCLEdBQUQsQ0FBbkI7QUFXQSwyQkFDS1QsU0FETCxNQUVLRCxnQkFBZ0IsQ0FBQ1UsS0FBSyxDQUFDTSxJQUFQLENBRnJCLHdEQUdHWCxZQUhILEVBR2tCTCxnQkFBZ0IsQ0FBQ1UsS0FBSyxDQUFDTyxPQUFQLENBSGxDLG1DQUlHWCxXQUpILEVBSWlCTixnQkFBZ0IsQ0FBQ1UsS0FBSyxDQUFDSixXQUFQLENBSmpDLG1DQUtHQyxVQUxIO0FBTUlXLElBQUFBLE1BQU0sRUFBRXBCLGFBQWEsQ0FBQ3FCO0FBTjFCLEtBT09uQixnQkFBZ0IsQ0FBQ1UsS0FBSyxDQUFDVSxLQUFQLENBUHZCLG9DQVNHWixhQVRIO0FBVUlhLElBQUFBLE1BQU0sRUFBRTtBQVZaLEtBV09yQixnQkFBZ0IsQ0FBQ1UsS0FBSyxDQUFDWSxRQUFQLENBWHZCO0FBY0QsQ0ExQkQ7O0FBNEJBLGVBQWViLHFCQUFmIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgU3RhY2tpbmdPcmRlciB9IGZyb20gJy4uLy4uL2NvbnN0YW50cydcbmltcG9ydCBtaXNzaW5nU3RhdGVXYXJuaW5nIGZyb20gJy4vbWlzc2luZ1N0YXRlV2FybmluZydcbmltcG9ydCBjcmVhdGVBcHBlYXJhbmNlIGZyb20gJy4vY3JlYXRlQXBwZWFyYW5jZSdcblxuY29uc3QgYmFzZVN0eWxlID0ge1xuICBXZWJraXRBcHBlYXJhbmNlOiAnbm9uZScsXG4gIE1vekFwcGVhcmFuY2U6ICdub25lJyxcbiAgYm9yZGVyOiAnbm9uZSdcbn1cblxuY29uc3QgaW52YWxpZFN0YXRlID0gJyZbYXJpYS1pbnZhbGlkPVwidHJ1ZVwiXSdcbmNvbnN0IHBsYWNlaG9sZGVyID0gJyY6OnBsYWNlaG9sZGVyJ1xuY29uc3QgZm9jdXNTdGF0ZSA9ICcmOmZvY3VzJ1xuY29uc3QgZGlzYWJsZWRTdGF0ZSA9ICcmOmRpc2FibGVkJ1xuXG4vKipcbiAqIEBwYXJhbSB7b2JqZWN0fSBpdGVtcyAtIG9iamVjdCB3aXRoIGEgc2V0IG9mIHN0YXRlcy5cbiAqIEByZXR1cm4ge29iamVjdH0gdGhlIGZpbmFsIGFwcGVhcmFuY2UuXG4gKi9cbmNvbnN0IGNyZWF0ZUlucHV0QXBwZWFyYW5jZSA9IChpdGVtcyA9IHt9KSA9PiB7XG4gIG1pc3NpbmdTdGF0ZVdhcm5pbmcoe1xuICAgIGl0ZW1zLFxuICAgIHByb3BzOiBbJ2Jhc2UnLCAnaW52YWxpZCcsICdwbGFjZWhvbGRlcicsICdmb2N1cycsICdkaXNhYmxlZCddLFxuICAgIGNiOiBwcm9wID0+IHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoXG4gICAgICAgIGBUaGVtZXIuY3JlYXRlSW5wdXRBcHBlYXJhbmNlKCkgaXMgbWlzc2luZyBhICR7cHJvcH0gaXRlbWAsXG4gICAgICAgIGl0ZW1zXG4gICAgICApXG4gICAgfVxuICB9KVxuXG4gIHJldHVybiB7XG4gICAgLi4uYmFzZVN0eWxlLFxuICAgIC4uLmNyZWF0ZUFwcGVhcmFuY2UoaXRlbXMuYmFzZSksXG4gICAgW2ludmFsaWRTdGF0ZV06IGNyZWF0ZUFwcGVhcmFuY2UoaXRlbXMuaW52YWxpZCksXG4gICAgW3BsYWNlaG9sZGVyXTogY3JlYXRlQXBwZWFyYW5jZShpdGVtcy5wbGFjZWhvbGRlciksXG4gICAgW2ZvY3VzU3RhdGVdOiB7XG4gICAgICB6SW5kZXg6IFN0YWNraW5nT3JkZXIuRk9DVVNFRCxcbiAgICAgIC4uLmNyZWF0ZUFwcGVhcmFuY2UoaXRlbXMuZm9jdXMpXG4gICAgfSxcbiAgICBbZGlzYWJsZWRTdGF0ZV06IHtcbiAgICAgIGN1cnNvcjogJ25vdC1hbGxvd2VkJyxcbiAgICAgIC4uLmNyZWF0ZUFwcGVhcmFuY2UoaXRlbXMuZGlzYWJsZWQpXG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZUlucHV0QXBwZWFyYW5jZVxuIl19