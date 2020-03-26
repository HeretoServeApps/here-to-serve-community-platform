import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

import { StackingOrder } from '../../constants';
import missingStateWarning from './missingStateWarning';
import createAppearance from './createAppearance';
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
  missingStateWarning({
    items: items,
    props: ['base', 'focus', 'disabled'],
    cb: function cb(prop) {
      console.error("Themer.createTagInputAppearance() is missing a ".concat(prop, " item"), items);
    }
  });
  return _objectSpread({}, baseStyle, {}, createAppearance(items.base), (_objectSpread2 = {}, _defineProperty(_objectSpread2, focusState, _objectSpread({
    zIndex: StackingOrder.FOCUSED
  }, createAppearance(items.focus))), _defineProperty(_objectSpread2, disabledState, _objectSpread({
    cursor: 'not-allowed'
  }, createAppearance(items.disabled))), _objectSpread2));
};

export default createTagInputAppearance;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy90aGVtZXIvc3JjL2NyZWF0ZVRhZ0lucHV0QXBwZWFyYW5jZS5qcyJdLCJuYW1lcyI6WyJTdGFja2luZ09yZGVyIiwibWlzc2luZ1N0YXRlV2FybmluZyIsImNyZWF0ZUFwcGVhcmFuY2UiLCJiYXNlU3R5bGUiLCJhbGlnbkl0ZW1zIiwiZGlzcGxheSIsImZsZXhXcmFwIiwiZm9jdXNTdGF0ZSIsImRpc2FibGVkU3RhdGUiLCJjcmVhdGVUYWdJbnB1dEFwcGVhcmFuY2UiLCJpdGVtcyIsInByb3BzIiwiY2IiLCJwcm9wIiwiY29uc29sZSIsImVycm9yIiwiYmFzZSIsInpJbmRleCIsIkZPQ1VTRUQiLCJmb2N1cyIsImN1cnNvciIsImRpc2FibGVkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSxTQUFTQSxhQUFULFFBQThCLGlCQUE5QjtBQUNBLE9BQU9DLG1CQUFQLE1BQWdDLHVCQUFoQztBQUNBLE9BQU9DLGdCQUFQLE1BQTZCLG9CQUE3QjtBQUVBLElBQU1DLFNBQVMsR0FBRztBQUNoQkMsRUFBQUEsVUFBVSxFQUFFLFFBREk7QUFFaEJDLEVBQUFBLE9BQU8sRUFBRSxhQUZPO0FBR2hCQyxFQUFBQSxRQUFRLEVBQUU7QUFITSxDQUFsQjtBQU1BLElBQU1DLFVBQVUsR0FBRywwQkFBbkI7QUFDQSxJQUFNQyxhQUFhLEdBQUcseUJBQXRCO0FBRUE7Ozs7O0FBSUEsSUFBTUMsd0JBQXdCLEdBQUcsU0FBM0JBLHdCQUEyQixHQUFnQjtBQUFBOztBQUFBLE1BQWZDLEtBQWUsdUVBQVAsRUFBTztBQUMvQ1QsRUFBQUEsbUJBQW1CLENBQUM7QUFDbEJTLElBQUFBLEtBQUssRUFBTEEsS0FEa0I7QUFFbEJDLElBQUFBLEtBQUssRUFBRSxDQUFDLE1BQUQsRUFBUyxPQUFULEVBQWtCLFVBQWxCLENBRlc7QUFHbEJDLElBQUFBLEVBQUUsRUFBRSxZQUFBQyxJQUFJLEVBQUk7QUFDVkMsTUFBQUEsT0FBTyxDQUFDQyxLQUFSLDBEQUNvREYsSUFEcEQsWUFFRUgsS0FGRjtBQUlEO0FBUmlCLEdBQUQsQ0FBbkI7QUFXQSwyQkFDS1AsU0FETCxNQUVLRCxnQkFBZ0IsQ0FBQ1EsS0FBSyxDQUFDTSxJQUFQLENBRnJCLHdEQUdHVCxVQUhIO0FBSUlVLElBQUFBLE1BQU0sRUFBRWpCLGFBQWEsQ0FBQ2tCO0FBSjFCLEtBS09oQixnQkFBZ0IsQ0FBQ1EsS0FBSyxDQUFDUyxLQUFQLENBTHZCLG9DQU9HWCxhQVBIO0FBUUlZLElBQUFBLE1BQU0sRUFBRTtBQVJaLEtBU09sQixnQkFBZ0IsQ0FBQ1EsS0FBSyxDQUFDVyxRQUFQLENBVHZCO0FBWUQsQ0F4QkQ7O0FBMEJBLGVBQWVaLHdCQUFmIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgU3RhY2tpbmdPcmRlciB9IGZyb20gJy4uLy4uL2NvbnN0YW50cydcbmltcG9ydCBtaXNzaW5nU3RhdGVXYXJuaW5nIGZyb20gJy4vbWlzc2luZ1N0YXRlV2FybmluZydcbmltcG9ydCBjcmVhdGVBcHBlYXJhbmNlIGZyb20gJy4vY3JlYXRlQXBwZWFyYW5jZSdcblxuY29uc3QgYmFzZVN0eWxlID0ge1xuICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcbiAgZGlzcGxheTogJ2lubGluZS1mbGV4JyxcbiAgZmxleFdyYXA6ICd3cmFwJ1xufVxuXG5jb25zdCBmb2N1c1N0YXRlID0gJyZbYXJpYS1hY3RpdmVkZXNjZW5kYW50XSdcbmNvbnN0IGRpc2FibGVkU3RhdGUgPSAnJlthcmlhLWRpc2FibGVkPVwidHJ1ZVwiXSdcblxuLyoqXG4gKiBAcGFyYW0ge29iamVjdH0gaXRlbXMgLSBvYmplY3Qgd2l0aCBhIHNldCBvZiBzdGF0ZXMuXG4gKiBAcmV0dXJuIHtvYmplY3R9IHRoZSBmaW5hbCBhcHBlYXJhbmNlLlxuICovXG5jb25zdCBjcmVhdGVUYWdJbnB1dEFwcGVhcmFuY2UgPSAoaXRlbXMgPSB7fSkgPT4ge1xuICBtaXNzaW5nU3RhdGVXYXJuaW5nKHtcbiAgICBpdGVtcyxcbiAgICBwcm9wczogWydiYXNlJywgJ2ZvY3VzJywgJ2Rpc2FibGVkJ10sXG4gICAgY2I6IHByb3AgPT4ge1xuICAgICAgY29uc29sZS5lcnJvcihcbiAgICAgICAgYFRoZW1lci5jcmVhdGVUYWdJbnB1dEFwcGVhcmFuY2UoKSBpcyBtaXNzaW5nIGEgJHtwcm9wfSBpdGVtYCxcbiAgICAgICAgaXRlbXNcbiAgICAgIClcbiAgICB9XG4gIH0pXG5cbiAgcmV0dXJuIHtcbiAgICAuLi5iYXNlU3R5bGUsXG4gICAgLi4uY3JlYXRlQXBwZWFyYW5jZShpdGVtcy5iYXNlKSxcbiAgICBbZm9jdXNTdGF0ZV06IHtcbiAgICAgIHpJbmRleDogU3RhY2tpbmdPcmRlci5GT0NVU0VELFxuICAgICAgLi4uY3JlYXRlQXBwZWFyYW5jZShpdGVtcy5mb2N1cylcbiAgICB9LFxuICAgIFtkaXNhYmxlZFN0YXRlXToge1xuICAgICAgY3Vyc29yOiAnbm90LWFsbG93ZWQnLFxuICAgICAgLi4uY3JlYXRlQXBwZWFyYW5jZShpdGVtcy5kaXNhYmxlZClcbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlVGFnSW5wdXRBcHBlYXJhbmNlXG4iXX0=