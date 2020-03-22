"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _isDev = _interopRequireDefault(require("./isDev"));

var whitelist = ['background', 'backgroundColor', 'backgroundImage', 'borderRadius', 'transition', 'boxShadow', 'opacity', 'color', 'textShadow', 'outline', // Not sure if cursor should be configurable
'cursor', // Added to prevent pointer events on disabled tab
'pointerEvents'];
/**
 * @param {object?} obj - input object that will be filtered against the whitelist.
 * @return {object} the result will always be a object
 */

function createAppearance() {
  var obj = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var result = {};
  Object.keys(obj).forEach(function (key) {
    if (whitelist.includes(key)) {
      if (typeof obj[key] === 'string' || typeof obj[key] === 'number') {
        result[key] = obj[key];
      } else if (_isDev["default"]) {
        console.error("createAppearance() only accepts strings as properties, key '".concat(key, "' with value '").concat(obj[key], "' is not a string"));
      }
    } else if (_isDev["default"]) {
      console.error("createAppearance() only accepts whitelisted properties, key '".concat(key, "' is not whitelisted in whitelist:"), whitelist);
    }
  });
  return result;
}

var _default = createAppearance;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy90aGVtZXIvc3JjL2NyZWF0ZUFwcGVhcmFuY2UuanMiXSwibmFtZXMiOlsid2hpdGVsaXN0IiwiY3JlYXRlQXBwZWFyYW5jZSIsIm9iaiIsInJlc3VsdCIsIk9iamVjdCIsImtleXMiLCJmb3JFYWNoIiwia2V5IiwiaW5jbHVkZXMiLCJpc0RldiIsImNvbnNvbGUiLCJlcnJvciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7O0FBRUEsSUFBTUEsU0FBUyxHQUFHLENBQ2hCLFlBRGdCLEVBRWhCLGlCQUZnQixFQUdoQixpQkFIZ0IsRUFLaEIsY0FMZ0IsRUFPaEIsWUFQZ0IsRUFRaEIsV0FSZ0IsRUFTaEIsU0FUZ0IsRUFXaEIsT0FYZ0IsRUFZaEIsWUFaZ0IsRUFjaEIsU0FkZ0IsRUFlaEI7QUFDQSxRQWhCZ0IsRUFrQmhCO0FBQ0EsZUFuQmdCLENBQWxCO0FBc0JBOzs7OztBQUlBLFNBQVNDLGdCQUFULEdBQW9DO0FBQUEsTUFBVkMsR0FBVSx1RUFBSixFQUFJO0FBQ2xDLE1BQU1DLE1BQU0sR0FBRyxFQUFmO0FBRUFDLEVBQUFBLE1BQU0sQ0FBQ0MsSUFBUCxDQUFZSCxHQUFaLEVBQWlCSSxPQUFqQixDQUF5QixVQUFBQyxHQUFHLEVBQUk7QUFDOUIsUUFBSVAsU0FBUyxDQUFDUSxRQUFWLENBQW1CRCxHQUFuQixDQUFKLEVBQTZCO0FBQzNCLFVBQUksT0FBT0wsR0FBRyxDQUFDSyxHQUFELENBQVYsS0FBb0IsUUFBcEIsSUFBZ0MsT0FBT0wsR0FBRyxDQUFDSyxHQUFELENBQVYsS0FBb0IsUUFBeEQsRUFBa0U7QUFDaEVKLFFBQUFBLE1BQU0sQ0FBQ0ksR0FBRCxDQUFOLEdBQWNMLEdBQUcsQ0FBQ0ssR0FBRCxDQUFqQjtBQUNELE9BRkQsTUFFTyxJQUFJRSxpQkFBSixFQUFXO0FBQ2hCQyxRQUFBQSxPQUFPLENBQUNDLEtBQVIsdUVBQ2lFSixHQURqRSwyQkFFSUwsR0FBRyxDQUFDSyxHQUFELENBRlA7QUFLRDtBQUNGLEtBVkQsTUFVTyxJQUFJRSxpQkFBSixFQUFXO0FBQ2hCQyxNQUFBQSxPQUFPLENBQUNDLEtBQVIsd0VBQ2tFSixHQURsRSx5Q0FFRVAsU0FGRjtBQUlEO0FBQ0YsR0FqQkQ7QUFtQkEsU0FBT0csTUFBUDtBQUNEOztlQUVjRixnQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBpc0RldiBmcm9tICcuL2lzRGV2J1xuXG5jb25zdCB3aGl0ZWxpc3QgPSBbXG4gICdiYWNrZ3JvdW5kJyxcbiAgJ2JhY2tncm91bmRDb2xvcicsXG4gICdiYWNrZ3JvdW5kSW1hZ2UnLFxuXG4gICdib3JkZXJSYWRpdXMnLFxuXG4gICd0cmFuc2l0aW9uJyxcbiAgJ2JveFNoYWRvdycsXG4gICdvcGFjaXR5JyxcblxuICAnY29sb3InLFxuICAndGV4dFNoYWRvdycsXG5cbiAgJ291dGxpbmUnLFxuICAvLyBOb3Qgc3VyZSBpZiBjdXJzb3Igc2hvdWxkIGJlIGNvbmZpZ3VyYWJsZVxuICAnY3Vyc29yJyxcblxuICAvLyBBZGRlZCB0byBwcmV2ZW50IHBvaW50ZXIgZXZlbnRzIG9uIGRpc2FibGVkIHRhYlxuICAncG9pbnRlckV2ZW50cydcbl1cblxuLyoqXG4gKiBAcGFyYW0ge29iamVjdD99IG9iaiAtIGlucHV0IG9iamVjdCB0aGF0IHdpbGwgYmUgZmlsdGVyZWQgYWdhaW5zdCB0aGUgd2hpdGVsaXN0LlxuICogQHJldHVybiB7b2JqZWN0fSB0aGUgcmVzdWx0IHdpbGwgYWx3YXlzIGJlIGEgb2JqZWN0XG4gKi9cbmZ1bmN0aW9uIGNyZWF0ZUFwcGVhcmFuY2Uob2JqID0ge30pIHtcbiAgY29uc3QgcmVzdWx0ID0ge31cblxuICBPYmplY3Qua2V5cyhvYmopLmZvckVhY2goa2V5ID0+IHtcbiAgICBpZiAod2hpdGVsaXN0LmluY2x1ZGVzKGtleSkpIHtcbiAgICAgIGlmICh0eXBlb2Ygb2JqW2tleV0gPT09ICdzdHJpbmcnIHx8IHR5cGVvZiBvYmpba2V5XSA9PT0gJ251bWJlcicpIHtcbiAgICAgICAgcmVzdWx0W2tleV0gPSBvYmpba2V5XVxuICAgICAgfSBlbHNlIGlmIChpc0Rldikge1xuICAgICAgICBjb25zb2xlLmVycm9yKFxuICAgICAgICAgIGBjcmVhdGVBcHBlYXJhbmNlKCkgb25seSBhY2NlcHRzIHN0cmluZ3MgYXMgcHJvcGVydGllcywga2V5ICcke2tleX0nIHdpdGggdmFsdWUgJyR7XG4gICAgICAgICAgICBvYmpba2V5XVxuICAgICAgICAgIH0nIGlzIG5vdCBhIHN0cmluZ2BcbiAgICAgICAgKVxuICAgICAgfVxuICAgIH0gZWxzZSBpZiAoaXNEZXYpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoXG4gICAgICAgIGBjcmVhdGVBcHBlYXJhbmNlKCkgb25seSBhY2NlcHRzIHdoaXRlbGlzdGVkIHByb3BlcnRpZXMsIGtleSAnJHtrZXl9JyBpcyBub3Qgd2hpdGVsaXN0ZWQgaW4gd2hpdGVsaXN0OmAsXG4gICAgICAgIHdoaXRlbGlzdFxuICAgICAgKVxuICAgIH1cbiAgfSlcblxuICByZXR1cm4gcmVzdWx0XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZUFwcGVhcmFuY2VcbiJdfQ==