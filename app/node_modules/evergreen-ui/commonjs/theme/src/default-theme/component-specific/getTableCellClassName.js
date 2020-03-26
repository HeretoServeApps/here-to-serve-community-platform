"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _themer = require("../../../../themer");

var _memoizeClassName = _interopRequireDefault(require("../utils/memoizeClassName"));

var _scales = _interopRequireDefault(require("../foundational-styles/scales"));

var Appearances = {};
Appearances["default"] = _themer.Themer.createTableCellAppearance({
  focus: {
    outline: 'none',
    backgroundColor: _scales["default"].blue.B2A,
    boxShadow: "inset 0 0 0 1px ".concat(_scales["default"].blue.B7A)
  }
});
/**
 * Get the appearance of a `TableCell`.
 * @param {string} appearance
 * @return {string} the appearance object.
 */

var getAppearance = function getAppearance() {
  return Appearances["default"];
};
/**
 * Get the className of a `Table.EditableCell`.
 * @param {string} appearance
 * @return {string} the appearance class name.
 */


var _default = (0, _memoizeClassName["default"])(getAppearance);

exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy90aGVtZS9zcmMvZGVmYXVsdC10aGVtZS9jb21wb25lbnQtc3BlY2lmaWMvZ2V0VGFibGVDZWxsQ2xhc3NOYW1lLmpzIl0sIm5hbWVzIjpbIkFwcGVhcmFuY2VzIiwiVGhlbWVyIiwiY3JlYXRlVGFibGVDZWxsQXBwZWFyYW5jZSIsImZvY3VzIiwib3V0bGluZSIsImJhY2tncm91bmRDb2xvciIsInNjYWxlcyIsImJsdWUiLCJCMkEiLCJib3hTaGFkb3ciLCJCN0EiLCJnZXRBcHBlYXJhbmNlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTs7QUFDQTs7QUFDQTs7QUFFQSxJQUFNQSxXQUFXLEdBQUcsRUFBcEI7QUFFQUEsV0FBVyxXQUFYLEdBQXNCQyxlQUFPQyx5QkFBUCxDQUFpQztBQUNyREMsRUFBQUEsS0FBSyxFQUFFO0FBQ0xDLElBQUFBLE9BQU8sRUFBRSxNQURKO0FBRUxDLElBQUFBLGVBQWUsRUFBRUMsbUJBQU9DLElBQVAsQ0FBWUMsR0FGeEI7QUFHTEMsSUFBQUEsU0FBUyw0QkFBcUJILG1CQUFPQyxJQUFQLENBQVlHLEdBQWpDO0FBSEo7QUFEOEMsQ0FBakMsQ0FBdEI7QUFRQTs7Ozs7O0FBS0EsSUFBTUMsYUFBYSxHQUFHLFNBQWhCQSxhQUFnQixHQUFNO0FBQzFCLFNBQU9YLFdBQVcsV0FBbEI7QUFDRCxDQUZEO0FBSUE7Ozs7Ozs7ZUFLZSxrQ0FBaUJXLGFBQWpCLEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBUaGVtZXIgfSBmcm9tICcuLi8uLi8uLi8uLi90aGVtZXInXG5pbXBvcnQgbWVtb2l6ZUNsYXNzTmFtZSBmcm9tICcuLi91dGlscy9tZW1vaXplQ2xhc3NOYW1lJ1xuaW1wb3J0IHNjYWxlcyBmcm9tICcuLi9mb3VuZGF0aW9uYWwtc3R5bGVzL3NjYWxlcydcblxuY29uc3QgQXBwZWFyYW5jZXMgPSB7fVxuXG5BcHBlYXJhbmNlcy5kZWZhdWx0ID0gVGhlbWVyLmNyZWF0ZVRhYmxlQ2VsbEFwcGVhcmFuY2Uoe1xuICBmb2N1czoge1xuICAgIG91dGxpbmU6ICdub25lJyxcbiAgICBiYWNrZ3JvdW5kQ29sb3I6IHNjYWxlcy5ibHVlLkIyQSxcbiAgICBib3hTaGFkb3c6IGBpbnNldCAwIDAgMCAxcHggJHtzY2FsZXMuYmx1ZS5CN0F9YFxuICB9XG59KVxuXG4vKipcbiAqIEdldCB0aGUgYXBwZWFyYW5jZSBvZiBhIGBUYWJsZUNlbGxgLlxuICogQHBhcmFtIHtzdHJpbmd9IGFwcGVhcmFuY2VcbiAqIEByZXR1cm4ge3N0cmluZ30gdGhlIGFwcGVhcmFuY2Ugb2JqZWN0LlxuICovXG5jb25zdCBnZXRBcHBlYXJhbmNlID0gKCkgPT4ge1xuICByZXR1cm4gQXBwZWFyYW5jZXMuZGVmYXVsdFxufVxuXG4vKipcbiAqIEdldCB0aGUgY2xhc3NOYW1lIG9mIGEgYFRhYmxlLkVkaXRhYmxlQ2VsbGAuXG4gKiBAcGFyYW0ge3N0cmluZ30gYXBwZWFyYW5jZVxuICogQHJldHVybiB7c3RyaW5nfSB0aGUgYXBwZWFyYW5jZSBjbGFzcyBuYW1lLlxuICovXG5leHBvcnQgZGVmYXVsdCBtZW1vaXplQ2xhc3NOYW1lKGdldEFwcGVhcmFuY2UpXG4iXX0=