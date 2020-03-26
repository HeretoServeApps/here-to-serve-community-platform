"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _themer = require("../../../../themer");

var _memoizeClassName = _interopRequireDefault(require("../utils/memoizeClassName"));

var _scales = _interopRequireDefault(require("../foundational-styles/scales"));

var _shared = require("../shared");

/**
 * Disabled styles are all the same.
 */
var disabled = _shared.defaultControlStyles.disabled;

var defaultAppearance = _themer.Themer.createTabAppearance({
  base: {},
  hover: {
    backgroundColor: _scales["default"].neutral.N2A
  },
  focus: {
    boxShadow: "0 0 0 2px ".concat(_scales["default"].blue.B5A)
  },
  active: {
    backgroundColor: _scales["default"].blue.B3A,
    color: _scales["default"].blue.B9
  },
  disabled: disabled,
  current: {}
});
/**
 * Get the appearance of a `Tab`.
 * @param {string} appearance
 * @return {string} the appearance object.
 */


var getTabAppearance = function getTabAppearance() {
  return defaultAppearance;
};
/**
 * Get the className of a `Tab`.
 * @param {string} appearance
 * @return {string} the appearance class name.
 */


var _default = (0, _memoizeClassName["default"])(getTabAppearance);

exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy90aGVtZS9zcmMvZGVmYXVsdC10aGVtZS9jb21wb25lbnQtc3BlY2lmaWMvZ2V0VGFiQ2xhc3NOYW1lLmpzIl0sIm5hbWVzIjpbImRpc2FibGVkIiwiZGVmYXVsdENvbnRyb2xTdHlsZXMiLCJkZWZhdWx0QXBwZWFyYW5jZSIsIlRoZW1lciIsImNyZWF0ZVRhYkFwcGVhcmFuY2UiLCJiYXNlIiwiaG92ZXIiLCJiYWNrZ3JvdW5kQ29sb3IiLCJzY2FsZXMiLCJuZXV0cmFsIiwiTjJBIiwiZm9jdXMiLCJib3hTaGFkb3ciLCJibHVlIiwiQjVBIiwiYWN0aXZlIiwiQjNBIiwiY29sb3IiLCJCOSIsImN1cnJlbnQiLCJnZXRUYWJBcHBlYXJhbmNlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFFQTs7O0lBR1FBLFEsR0FBYUMsNEIsQ0FBYkQsUTs7QUFFUixJQUFNRSxpQkFBaUIsR0FBR0MsZUFBT0MsbUJBQVAsQ0FBMkI7QUFDbkRDLEVBQUFBLElBQUksRUFBRSxFQUQ2QztBQUVuREMsRUFBQUEsS0FBSyxFQUFFO0FBQ0xDLElBQUFBLGVBQWUsRUFBRUMsbUJBQU9DLE9BQVAsQ0FBZUM7QUFEM0IsR0FGNEM7QUFLbkRDLEVBQUFBLEtBQUssRUFBRTtBQUNMQyxJQUFBQSxTQUFTLHNCQUFlSixtQkFBT0ssSUFBUCxDQUFZQyxHQUEzQjtBQURKLEdBTDRDO0FBUW5EQyxFQUFBQSxNQUFNLEVBQUU7QUFDTlIsSUFBQUEsZUFBZSxFQUFFQyxtQkFBT0ssSUFBUCxDQUFZRyxHQUR2QjtBQUVOQyxJQUFBQSxLQUFLLEVBQUVULG1CQUFPSyxJQUFQLENBQVlLO0FBRmIsR0FSMkM7QUFZbkRsQixFQUFBQSxRQUFRLEVBQVJBLFFBWm1EO0FBYW5EbUIsRUFBQUEsT0FBTyxFQUFFO0FBYjBDLENBQTNCLENBQTFCO0FBZ0JBOzs7Ozs7O0FBS0EsSUFBTUMsZ0JBQWdCLEdBQUcsU0FBbkJBLGdCQUFtQixHQUFNO0FBQzdCLFNBQU9sQixpQkFBUDtBQUNELENBRkQ7QUFJQTs7Ozs7OztlQUtlLGtDQUFpQmtCLGdCQUFqQixDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgVGhlbWVyIH0gZnJvbSAnLi4vLi4vLi4vLi4vdGhlbWVyJ1xuaW1wb3J0IG1lbW9pemVDbGFzc05hbWUgZnJvbSAnLi4vdXRpbHMvbWVtb2l6ZUNsYXNzTmFtZSdcbmltcG9ydCBzY2FsZXMgZnJvbSAnLi4vZm91bmRhdGlvbmFsLXN0eWxlcy9zY2FsZXMnXG5pbXBvcnQgeyBkZWZhdWx0Q29udHJvbFN0eWxlcyB9IGZyb20gJy4uL3NoYXJlZCdcblxuLyoqXG4gKiBEaXNhYmxlZCBzdHlsZXMgYXJlIGFsbCB0aGUgc2FtZS5cbiAqL1xuY29uc3QgeyBkaXNhYmxlZCB9ID0gZGVmYXVsdENvbnRyb2xTdHlsZXNcblxuY29uc3QgZGVmYXVsdEFwcGVhcmFuY2UgPSBUaGVtZXIuY3JlYXRlVGFiQXBwZWFyYW5jZSh7XG4gIGJhc2U6IHt9LFxuICBob3Zlcjoge1xuICAgIGJhY2tncm91bmRDb2xvcjogc2NhbGVzLm5ldXRyYWwuTjJBXG4gIH0sXG4gIGZvY3VzOiB7XG4gICAgYm94U2hhZG93OiBgMCAwIDAgMnB4ICR7c2NhbGVzLmJsdWUuQjVBfWBcbiAgfSxcbiAgYWN0aXZlOiB7XG4gICAgYmFja2dyb3VuZENvbG9yOiBzY2FsZXMuYmx1ZS5CM0EsXG4gICAgY29sb3I6IHNjYWxlcy5ibHVlLkI5XG4gIH0sXG4gIGRpc2FibGVkLFxuICBjdXJyZW50OiB7fVxufSlcblxuLyoqXG4gKiBHZXQgdGhlIGFwcGVhcmFuY2Ugb2YgYSBgVGFiYC5cbiAqIEBwYXJhbSB7c3RyaW5nfSBhcHBlYXJhbmNlXG4gKiBAcmV0dXJuIHtzdHJpbmd9IHRoZSBhcHBlYXJhbmNlIG9iamVjdC5cbiAqL1xuY29uc3QgZ2V0VGFiQXBwZWFyYW5jZSA9ICgpID0+IHtcbiAgcmV0dXJuIGRlZmF1bHRBcHBlYXJhbmNlXG59XG5cbi8qKlxuICogR2V0IHRoZSBjbGFzc05hbWUgb2YgYSBgVGFiYC5cbiAqIEBwYXJhbSB7c3RyaW5nfSBhcHBlYXJhbmNlXG4gKiBAcmV0dXJuIHtzdHJpbmd9IHRoZSBhcHBlYXJhbmNlIGNsYXNzIG5hbWUuXG4gKi9cbmV4cG9ydCBkZWZhdWx0IG1lbW9pemVDbGFzc05hbWUoZ2V0VGFiQXBwZWFyYW5jZSlcbiJdfQ==