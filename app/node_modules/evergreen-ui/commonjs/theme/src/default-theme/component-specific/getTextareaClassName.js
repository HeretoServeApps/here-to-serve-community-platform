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

var Appearances = {};
Appearances["default"] = _themer.Themer.createInputAppearance({
  base: {
    backgroundColor: 'white',
    boxShadow: "inset 0 0 0 1px ".concat(_scales["default"].neutral.N5A, ", inset 0 1px 2px ").concat(_scales["default"].neutral.N4A)
  },
  invalid: {
    boxShadow: "inset 0 0 0 1px ".concat(_palette["default"].red.base, ", inset 0 1px 2px ").concat(_scales["default"].neutral.N4A)
  },
  placeholder: {
    color: _scales["default"].neutral.N6A
  },
  focus: {
    outline: 'none',
    boxShadow: "inset 0 0 2px ".concat(_scales["default"].neutral.N4A, ", inset 0 0 0 1px ").concat(_scales["default"].blue.B7, ", 0 0 0 3px ").concat(_scales["default"].blue.B4A)
  },
  disabled: {
    boxShadow: "inset 0 0 0 1px ".concat(_scales["default"].neutral.N4A),
    backgroundColor: _scales["default"].neutral.N2
  }
});
Appearances.neutral = _themer.Themer.createInputAppearance({
  base: {
    backgroundColor: _scales["default"].neutral.N2A
  },
  invalid: {
    boxShadow: "inset 0 0 0 1px ".concat(_palette["default"].red.base)
  },
  placeholder: {
    color: _scales["default"].neutral.N6A
  },
  focus: {
    outline: 'none',
    backgroundColor: 'white',
    boxShadow: "0 0 0 2px ".concat(_scales["default"].blue.B6A)
  },
  disabled: {
    boxShadow: "inset 0 0 0 1px ".concat(_scales["default"].neutral.N4A),
    backgroundColor: _scales["default"].neutral.N2
  }
});
Appearances.editableCell = _themer.Themer.createInputAppearance({
  base: {
    backgroundColor: _scales["default"].neutral.N2A
  },
  invalid: {
    boxShadow: "inset 0 0 0 1px ".concat(_palette["default"].red.base)
  },
  placeholder: {
    color: _scales["default"].neutral.N6A
  },
  focus: {
    outline: 'none',
    backgroundColor: 'white',
    boxShadow: "0 0 0 2px ".concat(_scales["default"].blue.B7)
  },
  disabled: {
    boxShadow: "inset 0 0 0 1px ".concat(_scales["default"].neutral.N4A),
    backgroundColor: _scales["default"].neutral.N2
  }
});
/**
 * Get the appearance of a `TextInput`.
 * @param {string} appearance
 * @return {Object} the appearance object.
 */

var getTextareaAppearance = function getTextareaAppearance(appearance) {
  switch (appearance) {
    case 'neutral':
      return Appearances.neutral;

    case 'editable-cell':
      return Appearances.editableCell;

    default:
      return Appearances["default"];
  }
};
/**
 * Get the className of a `TextInput`.
 * @param {string} appearance
 * @return {string} the appearance class name.
 */


var _default = (0, _memoizeClassName["default"])(getTextareaAppearance);

exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy90aGVtZS9zcmMvZGVmYXVsdC10aGVtZS9jb21wb25lbnQtc3BlY2lmaWMvZ2V0VGV4dGFyZWFDbGFzc05hbWUuanMiXSwibmFtZXMiOlsiQXBwZWFyYW5jZXMiLCJUaGVtZXIiLCJjcmVhdGVJbnB1dEFwcGVhcmFuY2UiLCJiYXNlIiwiYmFja2dyb3VuZENvbG9yIiwiYm94U2hhZG93Iiwic2NhbGVzIiwibmV1dHJhbCIsIk41QSIsIk40QSIsImludmFsaWQiLCJwYWxldHRlIiwicmVkIiwicGxhY2Vob2xkZXIiLCJjb2xvciIsIk42QSIsImZvY3VzIiwib3V0bGluZSIsImJsdWUiLCJCNyIsIkI0QSIsImRpc2FibGVkIiwiTjIiLCJOMkEiLCJCNkEiLCJlZGl0YWJsZUNlbGwiLCJnZXRUZXh0YXJlYUFwcGVhcmFuY2UiLCJhcHBlYXJhbmNlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFFQSxJQUFNQSxXQUFXLEdBQUcsRUFBcEI7QUFFQUEsV0FBVyxXQUFYLEdBQXNCQyxlQUFPQyxxQkFBUCxDQUE2QjtBQUNqREMsRUFBQUEsSUFBSSxFQUFFO0FBQ0pDLElBQUFBLGVBQWUsRUFBRSxPQURiO0FBRUpDLElBQUFBLFNBQVMsNEJBQXFCQyxtQkFBT0MsT0FBUCxDQUFlQyxHQUFwQywrQkFDUEYsbUJBQU9DLE9BQVAsQ0FBZUUsR0FEUjtBQUZMLEdBRDJDO0FBT2pEQyxFQUFBQSxPQUFPLEVBQUU7QUFDUEwsSUFBQUEsU0FBUyw0QkFBcUJNLG9CQUFRQyxHQUFSLENBQVlULElBQWpDLCtCQUNQRyxtQkFBT0MsT0FBUCxDQUFlRSxHQURSO0FBREYsR0FQd0M7QUFZakRJLEVBQUFBLFdBQVcsRUFBRTtBQUNYQyxJQUFBQSxLQUFLLEVBQUVSLG1CQUFPQyxPQUFQLENBQWVRO0FBRFgsR0Fab0M7QUFlakRDLEVBQUFBLEtBQUssRUFBRTtBQUNMQyxJQUFBQSxPQUFPLEVBQUUsTUFESjtBQUVMWixJQUFBQSxTQUFTLDBCQUFtQkMsbUJBQU9DLE9BQVAsQ0FBZUUsR0FBbEMsK0JBQ1BILG1CQUFPWSxJQUFQLENBQVlDLEVBREwseUJBRU1iLG1CQUFPWSxJQUFQLENBQVlFLEdBRmxCO0FBRkosR0FmMEM7QUFxQmpEQyxFQUFBQSxRQUFRLEVBQUU7QUFDUmhCLElBQUFBLFNBQVMsNEJBQXFCQyxtQkFBT0MsT0FBUCxDQUFlRSxHQUFwQyxDQUREO0FBRVJMLElBQUFBLGVBQWUsRUFBRUUsbUJBQU9DLE9BQVAsQ0FBZWU7QUFGeEI7QUFyQnVDLENBQTdCLENBQXRCO0FBMkJBdEIsV0FBVyxDQUFDTyxPQUFaLEdBQXNCTixlQUFPQyxxQkFBUCxDQUE2QjtBQUNqREMsRUFBQUEsSUFBSSxFQUFFO0FBQ0pDLElBQUFBLGVBQWUsRUFBRUUsbUJBQU9DLE9BQVAsQ0FBZWdCO0FBRDVCLEdBRDJDO0FBSWpEYixFQUFBQSxPQUFPLEVBQUU7QUFDUEwsSUFBQUEsU0FBUyw0QkFBcUJNLG9CQUFRQyxHQUFSLENBQVlULElBQWpDO0FBREYsR0FKd0M7QUFPakRVLEVBQUFBLFdBQVcsRUFBRTtBQUNYQyxJQUFBQSxLQUFLLEVBQUVSLG1CQUFPQyxPQUFQLENBQWVRO0FBRFgsR0FQb0M7QUFVakRDLEVBQUFBLEtBQUssRUFBRTtBQUNMQyxJQUFBQSxPQUFPLEVBQUUsTUFESjtBQUVMYixJQUFBQSxlQUFlLEVBQUUsT0FGWjtBQUdMQyxJQUFBQSxTQUFTLHNCQUFlQyxtQkFBT1ksSUFBUCxDQUFZTSxHQUEzQjtBQUhKLEdBVjBDO0FBZWpESCxFQUFBQSxRQUFRLEVBQUU7QUFDUmhCLElBQUFBLFNBQVMsNEJBQXFCQyxtQkFBT0MsT0FBUCxDQUFlRSxHQUFwQyxDQUREO0FBRVJMLElBQUFBLGVBQWUsRUFBRUUsbUJBQU9DLE9BQVAsQ0FBZWU7QUFGeEI7QUFmdUMsQ0FBN0IsQ0FBdEI7QUFxQkF0QixXQUFXLENBQUN5QixZQUFaLEdBQTJCeEIsZUFBT0MscUJBQVAsQ0FBNkI7QUFDdERDLEVBQUFBLElBQUksRUFBRTtBQUNKQyxJQUFBQSxlQUFlLEVBQUVFLG1CQUFPQyxPQUFQLENBQWVnQjtBQUQ1QixHQURnRDtBQUl0RGIsRUFBQUEsT0FBTyxFQUFFO0FBQ1BMLElBQUFBLFNBQVMsNEJBQXFCTSxvQkFBUUMsR0FBUixDQUFZVCxJQUFqQztBQURGLEdBSjZDO0FBT3REVSxFQUFBQSxXQUFXLEVBQUU7QUFDWEMsSUFBQUEsS0FBSyxFQUFFUixtQkFBT0MsT0FBUCxDQUFlUTtBQURYLEdBUHlDO0FBVXREQyxFQUFBQSxLQUFLLEVBQUU7QUFDTEMsSUFBQUEsT0FBTyxFQUFFLE1BREo7QUFFTGIsSUFBQUEsZUFBZSxFQUFFLE9BRlo7QUFHTEMsSUFBQUEsU0FBUyxzQkFBZUMsbUJBQU9ZLElBQVAsQ0FBWUMsRUFBM0I7QUFISixHQVYrQztBQWV0REUsRUFBQUEsUUFBUSxFQUFFO0FBQ1JoQixJQUFBQSxTQUFTLDRCQUFxQkMsbUJBQU9DLE9BQVAsQ0FBZUUsR0FBcEMsQ0FERDtBQUVSTCxJQUFBQSxlQUFlLEVBQUVFLG1CQUFPQyxPQUFQLENBQWVlO0FBRnhCO0FBZjRDLENBQTdCLENBQTNCO0FBcUJBOzs7Ozs7QUFLQSxJQUFNSSxxQkFBcUIsR0FBRyxTQUF4QkEscUJBQXdCLENBQUFDLFVBQVUsRUFBSTtBQUMxQyxVQUFRQSxVQUFSO0FBQ0UsU0FBSyxTQUFMO0FBQ0UsYUFBTzNCLFdBQVcsQ0FBQ08sT0FBbkI7O0FBQ0YsU0FBSyxlQUFMO0FBQ0UsYUFBT1AsV0FBVyxDQUFDeUIsWUFBbkI7O0FBQ0Y7QUFDRSxhQUFPekIsV0FBVyxXQUFsQjtBQU5KO0FBUUQsQ0FURDtBQVdBOzs7Ozs7O2VBS2Usa0NBQWlCMEIscUJBQWpCLEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBUaGVtZXIgfSBmcm9tICcuLi8uLi8uLi8uLi90aGVtZXInXG5pbXBvcnQgbWVtb2l6ZUNsYXNzTmFtZSBmcm9tICcuLi91dGlscy9tZW1vaXplQ2xhc3NOYW1lJ1xuaW1wb3J0IHNjYWxlcyBmcm9tICcuLi9mb3VuZGF0aW9uYWwtc3R5bGVzL3NjYWxlcydcbmltcG9ydCBwYWxldHRlIGZyb20gJy4uL2ZvdW5kYXRpb25hbC1zdHlsZXMvcGFsZXR0ZSdcblxuY29uc3QgQXBwZWFyYW5jZXMgPSB7fVxuXG5BcHBlYXJhbmNlcy5kZWZhdWx0ID0gVGhlbWVyLmNyZWF0ZUlucHV0QXBwZWFyYW5jZSh7XG4gIGJhc2U6IHtcbiAgICBiYWNrZ3JvdW5kQ29sb3I6ICd3aGl0ZScsXG4gICAgYm94U2hhZG93OiBgaW5zZXQgMCAwIDAgMXB4ICR7c2NhbGVzLm5ldXRyYWwuTjVBfSwgaW5zZXQgMCAxcHggMnB4ICR7XG4gICAgICBzY2FsZXMubmV1dHJhbC5ONEFcbiAgICB9YFxuICB9LFxuICBpbnZhbGlkOiB7XG4gICAgYm94U2hhZG93OiBgaW5zZXQgMCAwIDAgMXB4ICR7cGFsZXR0ZS5yZWQuYmFzZX0sIGluc2V0IDAgMXB4IDJweCAke1xuICAgICAgc2NhbGVzLm5ldXRyYWwuTjRBXG4gICAgfWBcbiAgfSxcbiAgcGxhY2Vob2xkZXI6IHtcbiAgICBjb2xvcjogc2NhbGVzLm5ldXRyYWwuTjZBXG4gIH0sXG4gIGZvY3VzOiB7XG4gICAgb3V0bGluZTogJ25vbmUnLFxuICAgIGJveFNoYWRvdzogYGluc2V0IDAgMCAycHggJHtzY2FsZXMubmV1dHJhbC5ONEF9LCBpbnNldCAwIDAgMCAxcHggJHtcbiAgICAgIHNjYWxlcy5ibHVlLkI3XG4gICAgfSwgMCAwIDAgM3B4ICR7c2NhbGVzLmJsdWUuQjRBfWBcbiAgfSxcbiAgZGlzYWJsZWQ6IHtcbiAgICBib3hTaGFkb3c6IGBpbnNldCAwIDAgMCAxcHggJHtzY2FsZXMubmV1dHJhbC5ONEF9YCxcbiAgICBiYWNrZ3JvdW5kQ29sb3I6IHNjYWxlcy5uZXV0cmFsLk4yXG4gIH1cbn0pXG5cbkFwcGVhcmFuY2VzLm5ldXRyYWwgPSBUaGVtZXIuY3JlYXRlSW5wdXRBcHBlYXJhbmNlKHtcbiAgYmFzZToge1xuICAgIGJhY2tncm91bmRDb2xvcjogc2NhbGVzLm5ldXRyYWwuTjJBXG4gIH0sXG4gIGludmFsaWQ6IHtcbiAgICBib3hTaGFkb3c6IGBpbnNldCAwIDAgMCAxcHggJHtwYWxldHRlLnJlZC5iYXNlfWBcbiAgfSxcbiAgcGxhY2Vob2xkZXI6IHtcbiAgICBjb2xvcjogc2NhbGVzLm5ldXRyYWwuTjZBXG4gIH0sXG4gIGZvY3VzOiB7XG4gICAgb3V0bGluZTogJ25vbmUnLFxuICAgIGJhY2tncm91bmRDb2xvcjogJ3doaXRlJyxcbiAgICBib3hTaGFkb3c6IGAwIDAgMCAycHggJHtzY2FsZXMuYmx1ZS5CNkF9YFxuICB9LFxuICBkaXNhYmxlZDoge1xuICAgIGJveFNoYWRvdzogYGluc2V0IDAgMCAwIDFweCAke3NjYWxlcy5uZXV0cmFsLk40QX1gLFxuICAgIGJhY2tncm91bmRDb2xvcjogc2NhbGVzLm5ldXRyYWwuTjJcbiAgfVxufSlcblxuQXBwZWFyYW5jZXMuZWRpdGFibGVDZWxsID0gVGhlbWVyLmNyZWF0ZUlucHV0QXBwZWFyYW5jZSh7XG4gIGJhc2U6IHtcbiAgICBiYWNrZ3JvdW5kQ29sb3I6IHNjYWxlcy5uZXV0cmFsLk4yQVxuICB9LFxuICBpbnZhbGlkOiB7XG4gICAgYm94U2hhZG93OiBgaW5zZXQgMCAwIDAgMXB4ICR7cGFsZXR0ZS5yZWQuYmFzZX1gXG4gIH0sXG4gIHBsYWNlaG9sZGVyOiB7XG4gICAgY29sb3I6IHNjYWxlcy5uZXV0cmFsLk42QVxuICB9LFxuICBmb2N1czoge1xuICAgIG91dGxpbmU6ICdub25lJyxcbiAgICBiYWNrZ3JvdW5kQ29sb3I6ICd3aGl0ZScsXG4gICAgYm94U2hhZG93OiBgMCAwIDAgMnB4ICR7c2NhbGVzLmJsdWUuQjd9YFxuICB9LFxuICBkaXNhYmxlZDoge1xuICAgIGJveFNoYWRvdzogYGluc2V0IDAgMCAwIDFweCAke3NjYWxlcy5uZXV0cmFsLk40QX1gLFxuICAgIGJhY2tncm91bmRDb2xvcjogc2NhbGVzLm5ldXRyYWwuTjJcbiAgfVxufSlcblxuLyoqXG4gKiBHZXQgdGhlIGFwcGVhcmFuY2Ugb2YgYSBgVGV4dElucHV0YC5cbiAqIEBwYXJhbSB7c3RyaW5nfSBhcHBlYXJhbmNlXG4gKiBAcmV0dXJuIHtPYmplY3R9IHRoZSBhcHBlYXJhbmNlIG9iamVjdC5cbiAqL1xuY29uc3QgZ2V0VGV4dGFyZWFBcHBlYXJhbmNlID0gYXBwZWFyYW5jZSA9PiB7XG4gIHN3aXRjaCAoYXBwZWFyYW5jZSkge1xuICAgIGNhc2UgJ25ldXRyYWwnOlxuICAgICAgcmV0dXJuIEFwcGVhcmFuY2VzLm5ldXRyYWxcbiAgICBjYXNlICdlZGl0YWJsZS1jZWxsJzpcbiAgICAgIHJldHVybiBBcHBlYXJhbmNlcy5lZGl0YWJsZUNlbGxcbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIEFwcGVhcmFuY2VzLmRlZmF1bHRcbiAgfVxufVxuXG4vKipcbiAqIEdldCB0aGUgY2xhc3NOYW1lIG9mIGEgYFRleHRJbnB1dGAuXG4gKiBAcGFyYW0ge3N0cmluZ30gYXBwZWFyYW5jZVxuICogQHJldHVybiB7c3RyaW5nfSB0aGUgYXBwZWFyYW5jZSBjbGFzcyBuYW1lLlxuICovXG5leHBvcnQgZGVmYXVsdCBtZW1vaXplQ2xhc3NOYW1lKGdldFRleHRhcmVhQXBwZWFyYW5jZSlcbiJdfQ==