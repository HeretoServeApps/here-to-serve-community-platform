"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ignore = exports.defaultControlStyles = void 0;

var _helpers = require("./helpers");

var _scales = _interopRequireDefault(require("./foundational-styles/scales"));

var defaultControlStyles = {
  disabled: {
    opacity: 0.8,
    backgroundImage: 'none',
    backgroundColor: _scales["default"].neutral.N2A,
    boxShadow: 'none',
    color: _scales["default"].neutral.N7A,
    pointerEvents: 'none'
  },
  base: {
    backgroundColor: 'white',
    backgroundImage: (0, _helpers.linearGradient)('#FFFFFF', '#F4F5F7'),
    boxShadow: "inset 0 0 0 1px ".concat(_scales["default"].neutral.N4A, ", inset 0 -1px 1px 0 ").concat(_scales["default"].neutral.N2A)
  },
  hover: {
    backgroundImage: (0, _helpers.linearGradient)('#FAFBFB', '#EAECEE')
  },
  focus: {
    boxShadow: "0 0 0 3px ".concat(_scales["default"].blue.B4A, ", inset 0 0 0 1px ").concat(_scales["default"].neutral.N5A, ", inset 0 -1px 1px 0 ").concat(_scales["default"].neutral.N4A)
  },
  active: {
    backgroundImage: 'none',
    backgroundColor: _scales["default"].blue.B3A,
    boxShadow: "inset 0 0 0 1px ".concat(_scales["default"].neutral.N4A, ", inset 0 1px 1px 0 ").concat(_scales["default"].neutral.N2A)
  },
  focusAndActive: {
    boxShadow: "0 0 0 3px ".concat(_scales["default"].blue.B4A, ", inset 0 0 0 1px ").concat(_scales["default"].neutral.N5A, ", inset 0 1px 1px 0 ").concat(_scales["default"].neutral.N2A)
  }
}; // Can't figure out to disable rule for xo linter.

exports.defaultControlStyles = defaultControlStyles;
var ignore = null;
exports.ignore = ignore;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy90aGVtZS9zcmMvZGVmYXVsdC10aGVtZS9zaGFyZWQuanMiXSwibmFtZXMiOlsiZGVmYXVsdENvbnRyb2xTdHlsZXMiLCJkaXNhYmxlZCIsIm9wYWNpdHkiLCJiYWNrZ3JvdW5kSW1hZ2UiLCJiYWNrZ3JvdW5kQ29sb3IiLCJzY2FsZXMiLCJuZXV0cmFsIiwiTjJBIiwiYm94U2hhZG93IiwiY29sb3IiLCJON0EiLCJwb2ludGVyRXZlbnRzIiwiYmFzZSIsIk40QSIsImhvdmVyIiwiZm9jdXMiLCJibHVlIiwiQjRBIiwiTjVBIiwiYWN0aXZlIiwiQjNBIiwiZm9jdXNBbmRBY3RpdmUiLCJpZ25vcmUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBOztBQUNBOztBQUVBLElBQU1BLG9CQUFvQixHQUFHO0FBQzNCQyxFQUFBQSxRQUFRLEVBQUU7QUFDUkMsSUFBQUEsT0FBTyxFQUFFLEdBREQ7QUFFUkMsSUFBQUEsZUFBZSxFQUFFLE1BRlQ7QUFHUkMsSUFBQUEsZUFBZSxFQUFFQyxtQkFBT0MsT0FBUCxDQUFlQyxHQUh4QjtBQUlSQyxJQUFBQSxTQUFTLEVBQUUsTUFKSDtBQUtSQyxJQUFBQSxLQUFLLEVBQUVKLG1CQUFPQyxPQUFQLENBQWVJLEdBTGQ7QUFNUkMsSUFBQUEsYUFBYSxFQUFFO0FBTlAsR0FEaUI7QUFTM0JDLEVBQUFBLElBQUksRUFBRTtBQUNKUixJQUFBQSxlQUFlLEVBQUUsT0FEYjtBQUVKRCxJQUFBQSxlQUFlLEVBQUUsNkJBQWUsU0FBZixFQUEwQixTQUExQixDQUZiO0FBR0pLLElBQUFBLFNBQVMsNEJBQXFCSCxtQkFBT0MsT0FBUCxDQUFlTyxHQUFwQyxrQ0FDUFIsbUJBQU9DLE9BQVAsQ0FBZUMsR0FEUjtBQUhMLEdBVHFCO0FBZ0IzQk8sRUFBQUEsS0FBSyxFQUFFO0FBQ0xYLElBQUFBLGVBQWUsRUFBRSw2QkFBZSxTQUFmLEVBQTBCLFNBQTFCO0FBRFosR0FoQm9CO0FBbUIzQlksRUFBQUEsS0FBSyxFQUFFO0FBQ0xQLElBQUFBLFNBQVMsc0JBQWVILG1CQUFPVyxJQUFQLENBQVlDLEdBQTNCLCtCQUNQWixtQkFBT0MsT0FBUCxDQUFlWSxHQURSLGtDQUVlYixtQkFBT0MsT0FBUCxDQUFlTyxHQUY5QjtBQURKLEdBbkJvQjtBQXdCM0JNLEVBQUFBLE1BQU0sRUFBRTtBQUNOaEIsSUFBQUEsZUFBZSxFQUFFLE1BRFg7QUFFTkMsSUFBQUEsZUFBZSxFQUFFQyxtQkFBT1csSUFBUCxDQUFZSSxHQUZ2QjtBQUdOWixJQUFBQSxTQUFTLDRCQUFxQkgsbUJBQU9DLE9BQVAsQ0FBZU8sR0FBcEMsaUNBQ1BSLG1CQUFPQyxPQUFQLENBQWVDLEdBRFI7QUFISCxHQXhCbUI7QUErQjNCYyxFQUFBQSxjQUFjLEVBQUU7QUFDZGIsSUFBQUEsU0FBUyxzQkFBZUgsbUJBQU9XLElBQVAsQ0FBWUMsR0FBM0IsK0JBQ1BaLG1CQUFPQyxPQUFQLENBQWVZLEdBRFIsaUNBRWNiLG1CQUFPQyxPQUFQLENBQWVDLEdBRjdCO0FBREs7QUEvQlcsQ0FBN0IsQyxDQXNDQTs7O0FBQ0EsSUFBTWUsTUFBTSxHQUFHLElBQWYiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBsaW5lYXJHcmFkaWVudCB9IGZyb20gJy4vaGVscGVycydcbmltcG9ydCBzY2FsZXMgZnJvbSAnLi9mb3VuZGF0aW9uYWwtc3R5bGVzL3NjYWxlcydcblxuY29uc3QgZGVmYXVsdENvbnRyb2xTdHlsZXMgPSB7XG4gIGRpc2FibGVkOiB7XG4gICAgb3BhY2l0eTogMC44LFxuICAgIGJhY2tncm91bmRJbWFnZTogJ25vbmUnLFxuICAgIGJhY2tncm91bmRDb2xvcjogc2NhbGVzLm5ldXRyYWwuTjJBLFxuICAgIGJveFNoYWRvdzogJ25vbmUnLFxuICAgIGNvbG9yOiBzY2FsZXMubmV1dHJhbC5ON0EsXG4gICAgcG9pbnRlckV2ZW50czogJ25vbmUnXG4gIH0sXG4gIGJhc2U6IHtcbiAgICBiYWNrZ3JvdW5kQ29sb3I6ICd3aGl0ZScsXG4gICAgYmFja2dyb3VuZEltYWdlOiBsaW5lYXJHcmFkaWVudCgnI0ZGRkZGRicsICcjRjRGNUY3JyksXG4gICAgYm94U2hhZG93OiBgaW5zZXQgMCAwIDAgMXB4ICR7c2NhbGVzLm5ldXRyYWwuTjRBfSwgaW5zZXQgMCAtMXB4IDFweCAwICR7XG4gICAgICBzY2FsZXMubmV1dHJhbC5OMkFcbiAgICB9YFxuICB9LFxuICBob3Zlcjoge1xuICAgIGJhY2tncm91bmRJbWFnZTogbGluZWFyR3JhZGllbnQoJyNGQUZCRkInLCAnI0VBRUNFRScpXG4gIH0sXG4gIGZvY3VzOiB7XG4gICAgYm94U2hhZG93OiBgMCAwIDAgM3B4ICR7c2NhbGVzLmJsdWUuQjRBfSwgaW5zZXQgMCAwIDAgMXB4ICR7XG4gICAgICBzY2FsZXMubmV1dHJhbC5ONUFcbiAgICB9LCBpbnNldCAwIC0xcHggMXB4IDAgJHtzY2FsZXMubmV1dHJhbC5ONEF9YFxuICB9LFxuICBhY3RpdmU6IHtcbiAgICBiYWNrZ3JvdW5kSW1hZ2U6ICdub25lJyxcbiAgICBiYWNrZ3JvdW5kQ29sb3I6IHNjYWxlcy5ibHVlLkIzQSxcbiAgICBib3hTaGFkb3c6IGBpbnNldCAwIDAgMCAxcHggJHtzY2FsZXMubmV1dHJhbC5ONEF9LCBpbnNldCAwIDFweCAxcHggMCAke1xuICAgICAgc2NhbGVzLm5ldXRyYWwuTjJBXG4gICAgfWBcbiAgfSxcbiAgZm9jdXNBbmRBY3RpdmU6IHtcbiAgICBib3hTaGFkb3c6IGAwIDAgMCAzcHggJHtzY2FsZXMuYmx1ZS5CNEF9LCBpbnNldCAwIDAgMCAxcHggJHtcbiAgICAgIHNjYWxlcy5uZXV0cmFsLk41QVxuICAgIH0sIGluc2V0IDAgMXB4IDFweCAwICR7c2NhbGVzLm5ldXRyYWwuTjJBfWBcbiAgfVxufVxuXG4vLyBDYW4ndCBmaWd1cmUgb3V0IHRvIGRpc2FibGUgcnVsZSBmb3IgeG8gbGludGVyLlxuY29uc3QgaWdub3JlID0gbnVsbFxuXG5leHBvcnQgeyBkZWZhdWx0Q29udHJvbFN0eWxlcywgaWdub3JlIH1cbiJdfQ==