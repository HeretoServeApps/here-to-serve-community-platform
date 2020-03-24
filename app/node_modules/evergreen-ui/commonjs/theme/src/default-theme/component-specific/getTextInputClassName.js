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

var InputAppearances = {};
InputAppearances["default"] = _themer.Themer.createInputAppearance({
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
InputAppearances.neutral = _themer.Themer.createInputAppearance({
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
InputAppearances.none = _themer.Themer.createInputAppearance({
  base: {
    backgroundColor: 'white'
  },
  invalid: {},
  placeholder: {
    color: _scales["default"].neutral.N6A
  },
  focus: {
    outline: 'none'
  },
  disabled: {
    backgroundColor: _scales["default"].neutral.N2
  }
});
/**
 * Get the appearance of a `TextInput`.
 * @param {string} appearance - the appearance name
 * @return {Object} the appearance object.
 */

var getTextInputAppearance = function getTextInputAppearance(appearance) {
  switch (appearance) {
    case 'neutral':
      return InputAppearances.neutral;

    case 'none':
      return InputAppearances.none;

    default:
      return InputAppearances["default"];
  }
};
/**
 * Get the className of a `TextInput`.
 * @param {string} appearance - the appearance name
 * @return {string} the appearance class name.
 */


var _default = (0, _memoizeClassName["default"])(getTextInputAppearance);

exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy90aGVtZS9zcmMvZGVmYXVsdC10aGVtZS9jb21wb25lbnQtc3BlY2lmaWMvZ2V0VGV4dElucHV0Q2xhc3NOYW1lLmpzIl0sIm5hbWVzIjpbIklucHV0QXBwZWFyYW5jZXMiLCJUaGVtZXIiLCJjcmVhdGVJbnB1dEFwcGVhcmFuY2UiLCJiYXNlIiwiYmFja2dyb3VuZENvbG9yIiwiYm94U2hhZG93Iiwic2NhbGVzIiwibmV1dHJhbCIsIk41QSIsIk40QSIsImludmFsaWQiLCJwYWxldHRlIiwicmVkIiwicGxhY2Vob2xkZXIiLCJjb2xvciIsIk42QSIsImZvY3VzIiwib3V0bGluZSIsImJsdWUiLCJCNyIsIkI0QSIsImRpc2FibGVkIiwiTjIiLCJOMkEiLCJCNkEiLCJub25lIiwiZ2V0VGV4dElucHV0QXBwZWFyYW5jZSIsImFwcGVhcmFuY2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBOztBQUNBOztBQUNBOztBQUNBOztBQUVBLElBQU1BLGdCQUFnQixHQUFHLEVBQXpCO0FBRUFBLGdCQUFnQixXQUFoQixHQUEyQkMsZUFBT0MscUJBQVAsQ0FBNkI7QUFDdERDLEVBQUFBLElBQUksRUFBRTtBQUNKQyxJQUFBQSxlQUFlLEVBQUUsT0FEYjtBQUVKQyxJQUFBQSxTQUFTLDRCQUFxQkMsbUJBQU9DLE9BQVAsQ0FBZUMsR0FBcEMsK0JBQ1BGLG1CQUFPQyxPQUFQLENBQWVFLEdBRFI7QUFGTCxHQURnRDtBQU90REMsRUFBQUEsT0FBTyxFQUFFO0FBQ1BMLElBQUFBLFNBQVMsNEJBQXFCTSxvQkFBUUMsR0FBUixDQUFZVCxJQUFqQywrQkFDUEcsbUJBQU9DLE9BQVAsQ0FBZUUsR0FEUjtBQURGLEdBUDZDO0FBWXRESSxFQUFBQSxXQUFXLEVBQUU7QUFDWEMsSUFBQUEsS0FBSyxFQUFFUixtQkFBT0MsT0FBUCxDQUFlUTtBQURYLEdBWnlDO0FBZXREQyxFQUFBQSxLQUFLLEVBQUU7QUFDTEMsSUFBQUEsT0FBTyxFQUFFLE1BREo7QUFFTFosSUFBQUEsU0FBUywwQkFBbUJDLG1CQUFPQyxPQUFQLENBQWVFLEdBQWxDLCtCQUNQSCxtQkFBT1ksSUFBUCxDQUFZQyxFQURMLHlCQUVNYixtQkFBT1ksSUFBUCxDQUFZRSxHQUZsQjtBQUZKLEdBZitDO0FBcUJ0REMsRUFBQUEsUUFBUSxFQUFFO0FBQ1JoQixJQUFBQSxTQUFTLDRCQUFxQkMsbUJBQU9DLE9BQVAsQ0FBZUUsR0FBcEMsQ0FERDtBQUVSTCxJQUFBQSxlQUFlLEVBQUVFLG1CQUFPQyxPQUFQLENBQWVlO0FBRnhCO0FBckI0QyxDQUE3QixDQUEzQjtBQTJCQXRCLGdCQUFnQixDQUFDTyxPQUFqQixHQUEyQk4sZUFBT0MscUJBQVAsQ0FBNkI7QUFDdERDLEVBQUFBLElBQUksRUFBRTtBQUNKQyxJQUFBQSxlQUFlLEVBQUVFLG1CQUFPQyxPQUFQLENBQWVnQjtBQUQ1QixHQURnRDtBQUl0RGIsRUFBQUEsT0FBTyxFQUFFO0FBQ1BMLElBQUFBLFNBQVMsNEJBQXFCTSxvQkFBUUMsR0FBUixDQUFZVCxJQUFqQztBQURGLEdBSjZDO0FBT3REVSxFQUFBQSxXQUFXLEVBQUU7QUFDWEMsSUFBQUEsS0FBSyxFQUFFUixtQkFBT0MsT0FBUCxDQUFlUTtBQURYLEdBUHlDO0FBVXREQyxFQUFBQSxLQUFLLEVBQUU7QUFDTEMsSUFBQUEsT0FBTyxFQUFFLE1BREo7QUFFTGIsSUFBQUEsZUFBZSxFQUFFLE9BRlo7QUFHTEMsSUFBQUEsU0FBUyxzQkFBZUMsbUJBQU9ZLElBQVAsQ0FBWU0sR0FBM0I7QUFISixHQVYrQztBQWV0REgsRUFBQUEsUUFBUSxFQUFFO0FBQ1JoQixJQUFBQSxTQUFTLDRCQUFxQkMsbUJBQU9DLE9BQVAsQ0FBZUUsR0FBcEMsQ0FERDtBQUVSTCxJQUFBQSxlQUFlLEVBQUVFLG1CQUFPQyxPQUFQLENBQWVlO0FBRnhCO0FBZjRDLENBQTdCLENBQTNCO0FBcUJBdEIsZ0JBQWdCLENBQUN5QixJQUFqQixHQUF3QnhCLGVBQU9DLHFCQUFQLENBQTZCO0FBQ25EQyxFQUFBQSxJQUFJLEVBQUU7QUFDSkMsSUFBQUEsZUFBZSxFQUFFO0FBRGIsR0FENkM7QUFJbkRNLEVBQUFBLE9BQU8sRUFBRSxFQUowQztBQUtuREcsRUFBQUEsV0FBVyxFQUFFO0FBQ1hDLElBQUFBLEtBQUssRUFBRVIsbUJBQU9DLE9BQVAsQ0FBZVE7QUFEWCxHQUxzQztBQVFuREMsRUFBQUEsS0FBSyxFQUFFO0FBQ0xDLElBQUFBLE9BQU8sRUFBRTtBQURKLEdBUjRDO0FBV25ESSxFQUFBQSxRQUFRLEVBQUU7QUFDUmpCLElBQUFBLGVBQWUsRUFBRUUsbUJBQU9DLE9BQVAsQ0FBZWU7QUFEeEI7QUFYeUMsQ0FBN0IsQ0FBeEI7QUFnQkE7Ozs7OztBQUtBLElBQU1JLHNCQUFzQixHQUFHLFNBQXpCQSxzQkFBeUIsQ0FBQUMsVUFBVSxFQUFJO0FBQzNDLFVBQVFBLFVBQVI7QUFDRSxTQUFLLFNBQUw7QUFDRSxhQUFPM0IsZ0JBQWdCLENBQUNPLE9BQXhCOztBQUNGLFNBQUssTUFBTDtBQUNFLGFBQU9QLGdCQUFnQixDQUFDeUIsSUFBeEI7O0FBQ0Y7QUFDRSxhQUFPekIsZ0JBQWdCLFdBQXZCO0FBTko7QUFRRCxDQVREO0FBV0E7Ozs7Ozs7ZUFLZSxrQ0FBaUIwQixzQkFBakIsQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFRoZW1lciB9IGZyb20gJy4uLy4uLy4uLy4uL3RoZW1lcidcbmltcG9ydCBtZW1vaXplQ2xhc3NOYW1lIGZyb20gJy4uL3V0aWxzL21lbW9pemVDbGFzc05hbWUnXG5pbXBvcnQgc2NhbGVzIGZyb20gJy4uL2ZvdW5kYXRpb25hbC1zdHlsZXMvc2NhbGVzJ1xuaW1wb3J0IHBhbGV0dGUgZnJvbSAnLi4vZm91bmRhdGlvbmFsLXN0eWxlcy9wYWxldHRlJ1xuXG5jb25zdCBJbnB1dEFwcGVhcmFuY2VzID0ge31cblxuSW5wdXRBcHBlYXJhbmNlcy5kZWZhdWx0ID0gVGhlbWVyLmNyZWF0ZUlucHV0QXBwZWFyYW5jZSh7XG4gIGJhc2U6IHtcbiAgICBiYWNrZ3JvdW5kQ29sb3I6ICd3aGl0ZScsXG4gICAgYm94U2hhZG93OiBgaW5zZXQgMCAwIDAgMXB4ICR7c2NhbGVzLm5ldXRyYWwuTjVBfSwgaW5zZXQgMCAxcHggMnB4ICR7XG4gICAgICBzY2FsZXMubmV1dHJhbC5ONEFcbiAgICB9YFxuICB9LFxuICBpbnZhbGlkOiB7XG4gICAgYm94U2hhZG93OiBgaW5zZXQgMCAwIDAgMXB4ICR7cGFsZXR0ZS5yZWQuYmFzZX0sIGluc2V0IDAgMXB4IDJweCAke1xuICAgICAgc2NhbGVzLm5ldXRyYWwuTjRBXG4gICAgfWBcbiAgfSxcbiAgcGxhY2Vob2xkZXI6IHtcbiAgICBjb2xvcjogc2NhbGVzLm5ldXRyYWwuTjZBXG4gIH0sXG4gIGZvY3VzOiB7XG4gICAgb3V0bGluZTogJ25vbmUnLFxuICAgIGJveFNoYWRvdzogYGluc2V0IDAgMCAycHggJHtzY2FsZXMubmV1dHJhbC5ONEF9LCBpbnNldCAwIDAgMCAxcHggJHtcbiAgICAgIHNjYWxlcy5ibHVlLkI3XG4gICAgfSwgMCAwIDAgM3B4ICR7c2NhbGVzLmJsdWUuQjRBfWBcbiAgfSxcbiAgZGlzYWJsZWQ6IHtcbiAgICBib3hTaGFkb3c6IGBpbnNldCAwIDAgMCAxcHggJHtzY2FsZXMubmV1dHJhbC5ONEF9YCxcbiAgICBiYWNrZ3JvdW5kQ29sb3I6IHNjYWxlcy5uZXV0cmFsLk4yXG4gIH1cbn0pXG5cbklucHV0QXBwZWFyYW5jZXMubmV1dHJhbCA9IFRoZW1lci5jcmVhdGVJbnB1dEFwcGVhcmFuY2Uoe1xuICBiYXNlOiB7XG4gICAgYmFja2dyb3VuZENvbG9yOiBzY2FsZXMubmV1dHJhbC5OMkFcbiAgfSxcbiAgaW52YWxpZDoge1xuICAgIGJveFNoYWRvdzogYGluc2V0IDAgMCAwIDFweCAke3BhbGV0dGUucmVkLmJhc2V9YFxuICB9LFxuICBwbGFjZWhvbGRlcjoge1xuICAgIGNvbG9yOiBzY2FsZXMubmV1dHJhbC5ONkFcbiAgfSxcbiAgZm9jdXM6IHtcbiAgICBvdXRsaW5lOiAnbm9uZScsXG4gICAgYmFja2dyb3VuZENvbG9yOiAnd2hpdGUnLFxuICAgIGJveFNoYWRvdzogYDAgMCAwIDJweCAke3NjYWxlcy5ibHVlLkI2QX1gXG4gIH0sXG4gIGRpc2FibGVkOiB7XG4gICAgYm94U2hhZG93OiBgaW5zZXQgMCAwIDAgMXB4ICR7c2NhbGVzLm5ldXRyYWwuTjRBfWAsXG4gICAgYmFja2dyb3VuZENvbG9yOiBzY2FsZXMubmV1dHJhbC5OMlxuICB9XG59KVxuXG5JbnB1dEFwcGVhcmFuY2VzLm5vbmUgPSBUaGVtZXIuY3JlYXRlSW5wdXRBcHBlYXJhbmNlKHtcbiAgYmFzZToge1xuICAgIGJhY2tncm91bmRDb2xvcjogJ3doaXRlJ1xuICB9LFxuICBpbnZhbGlkOiB7fSxcbiAgcGxhY2Vob2xkZXI6IHtcbiAgICBjb2xvcjogc2NhbGVzLm5ldXRyYWwuTjZBXG4gIH0sXG4gIGZvY3VzOiB7XG4gICAgb3V0bGluZTogJ25vbmUnXG4gIH0sXG4gIGRpc2FibGVkOiB7XG4gICAgYmFja2dyb3VuZENvbG9yOiBzY2FsZXMubmV1dHJhbC5OMlxuICB9XG59KVxuXG4vKipcbiAqIEdldCB0aGUgYXBwZWFyYW5jZSBvZiBhIGBUZXh0SW5wdXRgLlxuICogQHBhcmFtIHtzdHJpbmd9IGFwcGVhcmFuY2UgLSB0aGUgYXBwZWFyYW5jZSBuYW1lXG4gKiBAcmV0dXJuIHtPYmplY3R9IHRoZSBhcHBlYXJhbmNlIG9iamVjdC5cbiAqL1xuY29uc3QgZ2V0VGV4dElucHV0QXBwZWFyYW5jZSA9IGFwcGVhcmFuY2UgPT4ge1xuICBzd2l0Y2ggKGFwcGVhcmFuY2UpIHtcbiAgICBjYXNlICduZXV0cmFsJzpcbiAgICAgIHJldHVybiBJbnB1dEFwcGVhcmFuY2VzLm5ldXRyYWxcbiAgICBjYXNlICdub25lJzpcbiAgICAgIHJldHVybiBJbnB1dEFwcGVhcmFuY2VzLm5vbmVcbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIElucHV0QXBwZWFyYW5jZXMuZGVmYXVsdFxuICB9XG59XG5cbi8qKlxuICogR2V0IHRoZSBjbGFzc05hbWUgb2YgYSBgVGV4dElucHV0YC5cbiAqIEBwYXJhbSB7c3RyaW5nfSBhcHBlYXJhbmNlIC0gdGhlIGFwcGVhcmFuY2UgbmFtZVxuICogQHJldHVybiB7c3RyaW5nfSB0aGUgYXBwZWFyYW5jZSBjbGFzcyBuYW1lLlxuICovXG5leHBvcnQgZGVmYXVsdCBtZW1vaXplQ2xhc3NOYW1lKGdldFRleHRJbnB1dEFwcGVhcmFuY2UpXG4iXX0=