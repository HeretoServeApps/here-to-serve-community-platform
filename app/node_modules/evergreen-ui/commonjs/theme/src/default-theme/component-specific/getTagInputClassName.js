"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _themer = require("../../../../themer");

var _memoizeClassName = _interopRequireDefault(require("../utils/memoizeClassName"));

var _scales = _interopRequireDefault(require("../foundational-styles/scales"));

var _palette = _interopRequireDefault(require("../foundational-styles/palette"));

var TagInputAppearances = {};
TagInputAppearances["default"] = _themer.Themer.createTagInputAppearance({
  base: {
    backgroundColor: 'white',
    boxShadow: "inset 0 0 0 1px ".concat(_scales["default"].neutral.N5A, ", inset 0 1px 2px ").concat(_scales["default"].neutral.N4A)
  },
  invalid: {
    boxShadow: "inset 0 0 0 1px ".concat(_palette["default"].red.base, ", inset 0 1px 2px ").concat(_scales["default"].neutral.N4A)
  },
  focus: {
    boxShadow: "inset 0 0 2px ".concat(_scales["default"].neutral.N4A, ", inset 0 0 0 1px ").concat(_scales["default"].blue.B7, ", 0 0 0 3px ").concat(_scales["default"].blue.B4A)
  },
  disabled: {
    boxShadow: "inset 0 0 0 1px ".concat(_scales["default"].neutral.N4A),
    backgroundColor: _scales["default"].neutral.N2
  }
});
/**
 * Get the appearance of a `TagInput`.
 * @param {string} appearance - the appearance name
 * @return {Object} the appearance object.
 */

var getTextInputAppearance = function getTextInputAppearance() {
  return TagInputAppearances["default"];
};
/**
 * Get the className of a `TagInput`.
 * @param {string} appearance - the appearance name
 * @return {string} the appearance class name.
 */


var _default = (0, _memoizeClassName["default"])(getTextInputAppearance);

exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy90aGVtZS9zcmMvZGVmYXVsdC10aGVtZS9jb21wb25lbnQtc3BlY2lmaWMvZ2V0VGFnSW5wdXRDbGFzc05hbWUuanMiXSwibmFtZXMiOlsiVGFnSW5wdXRBcHBlYXJhbmNlcyIsIlRoZW1lciIsImNyZWF0ZVRhZ0lucHV0QXBwZWFyYW5jZSIsImJhc2UiLCJiYWNrZ3JvdW5kQ29sb3IiLCJib3hTaGFkb3ciLCJzY2FsZXMiLCJuZXV0cmFsIiwiTjVBIiwiTjRBIiwiaW52YWxpZCIsInBhbGV0dGUiLCJyZWQiLCJmb2N1cyIsImJsdWUiLCJCNyIsIkI0QSIsImRpc2FibGVkIiwiTjIiLCJnZXRUZXh0SW5wdXRBcHBlYXJhbmNlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFFQSxJQUFNQSxtQkFBbUIsR0FBRyxFQUE1QjtBQUVBQSxtQkFBbUIsV0FBbkIsR0FBOEJDLGVBQU9DLHdCQUFQLENBQWdDO0FBQzVEQyxFQUFBQSxJQUFJLEVBQUU7QUFDSkMsSUFBQUEsZUFBZSxFQUFFLE9BRGI7QUFFSkMsSUFBQUEsU0FBUyw0QkFBcUJDLG1CQUFPQyxPQUFQLENBQWVDLEdBQXBDLCtCQUNQRixtQkFBT0MsT0FBUCxDQUFlRSxHQURSO0FBRkwsR0FEc0Q7QUFPNURDLEVBQUFBLE9BQU8sRUFBRTtBQUNQTCxJQUFBQSxTQUFTLDRCQUFxQk0sb0JBQVFDLEdBQVIsQ0FBWVQsSUFBakMsK0JBQ1BHLG1CQUFPQyxPQUFQLENBQWVFLEdBRFI7QUFERixHQVBtRDtBQVk1REksRUFBQUEsS0FBSyxFQUFFO0FBQ0xSLElBQUFBLFNBQVMsMEJBQW1CQyxtQkFBT0MsT0FBUCxDQUFlRSxHQUFsQywrQkFDUEgsbUJBQU9RLElBQVAsQ0FBWUMsRUFETCx5QkFFTVQsbUJBQU9RLElBQVAsQ0FBWUUsR0FGbEI7QUFESixHQVpxRDtBQWlCNURDLEVBQUFBLFFBQVEsRUFBRTtBQUNSWixJQUFBQSxTQUFTLDRCQUFxQkMsbUJBQU9DLE9BQVAsQ0FBZUUsR0FBcEMsQ0FERDtBQUVSTCxJQUFBQSxlQUFlLEVBQUVFLG1CQUFPQyxPQUFQLENBQWVXO0FBRnhCO0FBakJrRCxDQUFoQyxDQUE5QjtBQXVCQTs7Ozs7O0FBS0EsSUFBTUMsc0JBQXNCLEdBQUcsU0FBekJBLHNCQUF5QixHQUFNO0FBQ25DLFNBQU9uQixtQkFBbUIsV0FBMUI7QUFDRCxDQUZEO0FBSUE7Ozs7Ozs7ZUFLZSxrQ0FBaUJtQixzQkFBakIsQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFRoZW1lciB9IGZyb20gJy4uLy4uLy4uLy4uL3RoZW1lcidcbmltcG9ydCBtZW1vaXplQ2xhc3NOYW1lIGZyb20gJy4uL3V0aWxzL21lbW9pemVDbGFzc05hbWUnXG5pbXBvcnQgc2NhbGVzIGZyb20gJy4uL2ZvdW5kYXRpb25hbC1zdHlsZXMvc2NhbGVzJ1xuaW1wb3J0IHBhbGV0dGUgZnJvbSAnLi4vZm91bmRhdGlvbmFsLXN0eWxlcy9wYWxldHRlJ1xuXG5jb25zdCBUYWdJbnB1dEFwcGVhcmFuY2VzID0ge31cblxuVGFnSW5wdXRBcHBlYXJhbmNlcy5kZWZhdWx0ID0gVGhlbWVyLmNyZWF0ZVRhZ0lucHV0QXBwZWFyYW5jZSh7XG4gIGJhc2U6IHtcbiAgICBiYWNrZ3JvdW5kQ29sb3I6ICd3aGl0ZScsXG4gICAgYm94U2hhZG93OiBgaW5zZXQgMCAwIDAgMXB4ICR7c2NhbGVzLm5ldXRyYWwuTjVBfSwgaW5zZXQgMCAxcHggMnB4ICR7XG4gICAgICBzY2FsZXMubmV1dHJhbC5ONEFcbiAgICB9YFxuICB9LFxuICBpbnZhbGlkOiB7XG4gICAgYm94U2hhZG93OiBgaW5zZXQgMCAwIDAgMXB4ICR7cGFsZXR0ZS5yZWQuYmFzZX0sIGluc2V0IDAgMXB4IDJweCAke1xuICAgICAgc2NhbGVzLm5ldXRyYWwuTjRBXG4gICAgfWBcbiAgfSxcbiAgZm9jdXM6IHtcbiAgICBib3hTaGFkb3c6IGBpbnNldCAwIDAgMnB4ICR7c2NhbGVzLm5ldXRyYWwuTjRBfSwgaW5zZXQgMCAwIDAgMXB4ICR7XG4gICAgICBzY2FsZXMuYmx1ZS5CN1xuICAgIH0sIDAgMCAwIDNweCAke3NjYWxlcy5ibHVlLkI0QX1gXG4gIH0sXG4gIGRpc2FibGVkOiB7XG4gICAgYm94U2hhZG93OiBgaW5zZXQgMCAwIDAgMXB4ICR7c2NhbGVzLm5ldXRyYWwuTjRBfWAsXG4gICAgYmFja2dyb3VuZENvbG9yOiBzY2FsZXMubmV1dHJhbC5OMlxuICB9XG59KVxuXG4vKipcbiAqIEdldCB0aGUgYXBwZWFyYW5jZSBvZiBhIGBUYWdJbnB1dGAuXG4gKiBAcGFyYW0ge3N0cmluZ30gYXBwZWFyYW5jZSAtIHRoZSBhcHBlYXJhbmNlIG5hbWVcbiAqIEByZXR1cm4ge09iamVjdH0gdGhlIGFwcGVhcmFuY2Ugb2JqZWN0LlxuICovXG5jb25zdCBnZXRUZXh0SW5wdXRBcHBlYXJhbmNlID0gKCkgPT4ge1xuICByZXR1cm4gVGFnSW5wdXRBcHBlYXJhbmNlcy5kZWZhdWx0XG59XG5cbi8qKlxuICogR2V0IHRoZSBjbGFzc05hbWUgb2YgYSBgVGFnSW5wdXRgLlxuICogQHBhcmFtIHtzdHJpbmd9IGFwcGVhcmFuY2UgLSB0aGUgYXBwZWFyYW5jZSBuYW1lXG4gKiBAcmV0dXJuIHtzdHJpbmd9IHRoZSBhcHBlYXJhbmNlIGNsYXNzIG5hbWUuXG4gKi9cbmV4cG9ydCBkZWZhdWx0IG1lbW9pemVDbGFzc05hbWUoZ2V0VGV4dElucHV0QXBwZWFyYW5jZSlcbiJdfQ==