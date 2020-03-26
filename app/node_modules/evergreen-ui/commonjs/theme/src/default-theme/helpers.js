"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getPrimaryButtonStylesForIntent = exports.getLinearGradientWithStates = exports.getTextColorForIntent = exports.linearGradient = void 0;

var _tinycolor = _interopRequireDefault(require("tinycolor2"));

var _constants = require("../../../constants");

var _colors = _interopRequireDefault(require("./foundational-styles/colors"));

/**
 * @param {String} top - color.
 * @param {String} bottom - color.
 * @return {String} CSS background propery.
 */
var linearGradient = function linearGradient(top, bottom) {
  return "linear-gradient(to bottom, ".concat(top, ", ").concat(bottom, ")");
};
/**
 * @param {Intent} intent
 * @return {String} color
 */


exports.linearGradient = linearGradient;

var getTextColorForIntent = function getTextColorForIntent(intent, defaultColor) {
  switch (intent) {
    case _constants.Intent.SUCCESS:
      return _colors["default"].text.success;

    case _constants.Intent.DANGER:
      return _colors["default"].text.danger;

    case _constants.Intent.WARNING:
      return _colors["default"].text.warning;

    default:
      return defaultColor || _colors["default"].text["default"];
  }
};
/**
 * @param {String} startColor
 * @param {String} endColor
 * @param {Number} intensityMultiplier - Some colors need more darkening.
 */


exports.getTextColorForIntent = getTextColorForIntent;

var getLinearGradientWithStates = function getLinearGradientWithStates(startColor, endColor) {
  var intensityMultiplier = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1;
  return {
    base: linearGradient(startColor, endColor),
    hover: linearGradient((0, _tinycolor["default"])(startColor).darken(5 * intensityMultiplier).toString(), (0, _tinycolor["default"])(endColor).darken(5 * intensityMultiplier).toString()),
    active: linearGradient((0, _tinycolor["default"])(endColor).darken(5 * intensityMultiplier).toString(), (0, _tinycolor["default"])(endColor).darken(5 * intensityMultiplier).toString())
  };
};
/**
 * Gradients in the default theme have a intentional hue shift.
 * @param {Intent} intent - intent of the gradient.
 * @return {Object} { base, hover, active }
 */


exports.getLinearGradientWithStates = getLinearGradientWithStates;

var getPrimaryButtonStylesForIntent = function getPrimaryButtonStylesForIntent(intent) {
  switch (intent) {
    case _constants.Intent.SUCCESS:
      {
        var startColor = '#23C277';
        var endColor = '#399D6C';
        return {
          linearGradient: getLinearGradientWithStates(startColor, endColor),
          focusColor: (0, _tinycolor["default"])(startColor).setAlpha(0.4).toString()
        };
      }

    case _constants.Intent.WARNING:
      {
        var _startColor = '#EE9913';
        var _endColor = '#D9822B';
        return {
          linearGradient: getLinearGradientWithStates(_startColor, _endColor),
          focusColor: (0, _tinycolor["default"])(_startColor).setAlpha(0.4).toString()
        };
      }

    case _constants.Intent.DANGER:
      {
        var _startColor2 = '#EC4C47';
        var _endColor2 = '#D64540';
        return {
          linearGradient: getLinearGradientWithStates(_startColor2, _endColor2),
          focusColor: (0, _tinycolor["default"])(_startColor2).setAlpha(0.4).toString()
        };
      }

    default:
      {
        var _startColor3 = '#0788DE';
        var _endColor3 = '#116AB8';
        return {
          linearGradient: getLinearGradientWithStates(_startColor3, _endColor3),
          focusColor: (0, _tinycolor["default"])(_startColor3).setAlpha(0.4).toString()
        };
      }
  }
};

exports.getPrimaryButtonStylesForIntent = getPrimaryButtonStylesForIntent;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy90aGVtZS9zcmMvZGVmYXVsdC10aGVtZS9oZWxwZXJzLmpzIl0sIm5hbWVzIjpbImxpbmVhckdyYWRpZW50IiwidG9wIiwiYm90dG9tIiwiZ2V0VGV4dENvbG9yRm9ySW50ZW50IiwiaW50ZW50IiwiZGVmYXVsdENvbG9yIiwiSW50ZW50IiwiU1VDQ0VTUyIsImNvbG9ycyIsInRleHQiLCJzdWNjZXNzIiwiREFOR0VSIiwiZGFuZ2VyIiwiV0FSTklORyIsIndhcm5pbmciLCJnZXRMaW5lYXJHcmFkaWVudFdpdGhTdGF0ZXMiLCJzdGFydENvbG9yIiwiZW5kQ29sb3IiLCJpbnRlbnNpdHlNdWx0aXBsaWVyIiwiYmFzZSIsImhvdmVyIiwiZGFya2VuIiwidG9TdHJpbmciLCJhY3RpdmUiLCJnZXRQcmltYXJ5QnV0dG9uU3R5bGVzRm9ySW50ZW50IiwiZm9jdXNDb2xvciIsInNldEFscGhhIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTs7QUFDQTs7QUFDQTs7QUFFQTs7Ozs7QUFLQSxJQUFNQSxjQUFjLEdBQUcsU0FBakJBLGNBQWlCLENBQUNDLEdBQUQsRUFBTUMsTUFBTixFQUFpQjtBQUN0Qyw4Q0FBcUNELEdBQXJDLGVBQTZDQyxNQUE3QztBQUNELENBRkQ7QUFJQTs7Ozs7Ozs7QUFJQSxJQUFNQyxxQkFBcUIsR0FBRyxTQUF4QkEscUJBQXdCLENBQUNDLE1BQUQsRUFBU0MsWUFBVCxFQUEwQjtBQUN0RCxVQUFRRCxNQUFSO0FBQ0UsU0FBS0Usa0JBQU9DLE9BQVo7QUFDRSxhQUFPQyxtQkFBT0MsSUFBUCxDQUFZQyxPQUFuQjs7QUFDRixTQUFLSixrQkFBT0ssTUFBWjtBQUNFLGFBQU9ILG1CQUFPQyxJQUFQLENBQVlHLE1BQW5COztBQUNGLFNBQUtOLGtCQUFPTyxPQUFaO0FBQ0UsYUFBT0wsbUJBQU9DLElBQVAsQ0FBWUssT0FBbkI7O0FBQ0Y7QUFDRSxhQUFPVCxZQUFZLElBQUlHLG1CQUFPQyxJQUFQLFdBQXZCO0FBUko7QUFVRCxDQVhEO0FBYUE7Ozs7Ozs7OztBQUtBLElBQU1NLDJCQUEyQixHQUFHLFNBQTlCQSwyQkFBOEIsQ0FDbENDLFVBRGtDLEVBRWxDQyxRQUZrQyxFQUkvQjtBQUFBLE1BREhDLG1CQUNHLHVFQURtQixDQUNuQjtBQUNILFNBQU87QUFDTEMsSUFBQUEsSUFBSSxFQUFFbkIsY0FBYyxDQUFDZ0IsVUFBRCxFQUFhQyxRQUFiLENBRGY7QUFFTEcsSUFBQUEsS0FBSyxFQUFFcEIsY0FBYyxDQUNuQiwyQkFBVWdCLFVBQVYsRUFDR0ssTUFESCxDQUNVLElBQUlILG1CQURkLEVBRUdJLFFBRkgsRUFEbUIsRUFJbkIsMkJBQVVMLFFBQVYsRUFDR0ksTUFESCxDQUNVLElBQUlILG1CQURkLEVBRUdJLFFBRkgsRUFKbUIsQ0FGaEI7QUFVTEMsSUFBQUEsTUFBTSxFQUFFdkIsY0FBYyxDQUNwQiwyQkFBVWlCLFFBQVYsRUFDR0ksTUFESCxDQUNVLElBQUlILG1CQURkLEVBRUdJLFFBRkgsRUFEb0IsRUFJcEIsMkJBQVVMLFFBQVYsRUFDR0ksTUFESCxDQUNVLElBQUlILG1CQURkLEVBRUdJLFFBRkgsRUFKb0I7QUFWakIsR0FBUDtBQW1CRCxDQXhCRDtBQTBCQTs7Ozs7Ozs7O0FBS0EsSUFBTUUsK0JBQStCLEdBQUcsU0FBbENBLCtCQUFrQyxDQUFBcEIsTUFBTSxFQUFJO0FBQ2hELFVBQVFBLE1BQVI7QUFDRSxTQUFLRSxrQkFBT0MsT0FBWjtBQUFxQjtBQUNuQixZQUFNUyxVQUFVLEdBQUcsU0FBbkI7QUFDQSxZQUFNQyxRQUFRLEdBQUcsU0FBakI7QUFDQSxlQUFPO0FBQ0xqQixVQUFBQSxjQUFjLEVBQUVlLDJCQUEyQixDQUFDQyxVQUFELEVBQWFDLFFBQWIsQ0FEdEM7QUFFTFEsVUFBQUEsVUFBVSxFQUFFLDJCQUFVVCxVQUFWLEVBQ1RVLFFBRFMsQ0FDQSxHQURBLEVBRVRKLFFBRlM7QUFGUCxTQUFQO0FBTUQ7O0FBRUQsU0FBS2hCLGtCQUFPTyxPQUFaO0FBQXFCO0FBQ25CLFlBQU1HLFdBQVUsR0FBRyxTQUFuQjtBQUNBLFlBQU1DLFNBQVEsR0FBRyxTQUFqQjtBQUNBLGVBQU87QUFDTGpCLFVBQUFBLGNBQWMsRUFBRWUsMkJBQTJCLENBQUNDLFdBQUQsRUFBYUMsU0FBYixDQUR0QztBQUVMUSxVQUFBQSxVQUFVLEVBQUUsMkJBQVVULFdBQVYsRUFDVFUsUUFEUyxDQUNBLEdBREEsRUFFVEosUUFGUztBQUZQLFNBQVA7QUFNRDs7QUFFRCxTQUFLaEIsa0JBQU9LLE1BQVo7QUFBb0I7QUFDbEIsWUFBTUssWUFBVSxHQUFHLFNBQW5CO0FBQ0EsWUFBTUMsVUFBUSxHQUFHLFNBQWpCO0FBQ0EsZUFBTztBQUNMakIsVUFBQUEsY0FBYyxFQUFFZSwyQkFBMkIsQ0FBQ0MsWUFBRCxFQUFhQyxVQUFiLENBRHRDO0FBRUxRLFVBQUFBLFVBQVUsRUFBRSwyQkFBVVQsWUFBVixFQUNUVSxRQURTLENBQ0EsR0FEQSxFQUVUSixRQUZTO0FBRlAsU0FBUDtBQU1EOztBQUVEO0FBQVM7QUFDUCxZQUFNTixZQUFVLEdBQUcsU0FBbkI7QUFDQSxZQUFNQyxVQUFRLEdBQUcsU0FBakI7QUFDQSxlQUFPO0FBQ0xqQixVQUFBQSxjQUFjLEVBQUVlLDJCQUEyQixDQUFDQyxZQUFELEVBQWFDLFVBQWIsQ0FEdEM7QUFFTFEsVUFBQUEsVUFBVSxFQUFFLDJCQUFVVCxZQUFWLEVBQ1RVLFFBRFMsQ0FDQSxHQURBLEVBRVRKLFFBRlM7QUFGUCxTQUFQO0FBTUQ7QUEzQ0g7QUE2Q0QsQ0E5Q0QiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgdGlueWNvbG9yIGZyb20gJ3Rpbnljb2xvcjInXG5pbXBvcnQgeyBJbnRlbnQgfSBmcm9tICcuLi8uLi8uLi9jb25zdGFudHMnXG5pbXBvcnQgY29sb3JzIGZyb20gJy4vZm91bmRhdGlvbmFsLXN0eWxlcy9jb2xvcnMnXG5cbi8qKlxuICogQHBhcmFtIHtTdHJpbmd9IHRvcCAtIGNvbG9yLlxuICogQHBhcmFtIHtTdHJpbmd9IGJvdHRvbSAtIGNvbG9yLlxuICogQHJldHVybiB7U3RyaW5nfSBDU1MgYmFja2dyb3VuZCBwcm9wZXJ5LlxuICovXG5jb25zdCBsaW5lYXJHcmFkaWVudCA9ICh0b3AsIGJvdHRvbSkgPT4ge1xuICByZXR1cm4gYGxpbmVhci1ncmFkaWVudCh0byBib3R0b20sICR7dG9wfSwgJHtib3R0b219KWBcbn1cblxuLyoqXG4gKiBAcGFyYW0ge0ludGVudH0gaW50ZW50XG4gKiBAcmV0dXJuIHtTdHJpbmd9IGNvbG9yXG4gKi9cbmNvbnN0IGdldFRleHRDb2xvckZvckludGVudCA9IChpbnRlbnQsIGRlZmF1bHRDb2xvcikgPT4ge1xuICBzd2l0Y2ggKGludGVudCkge1xuICAgIGNhc2UgSW50ZW50LlNVQ0NFU1M6XG4gICAgICByZXR1cm4gY29sb3JzLnRleHQuc3VjY2Vzc1xuICAgIGNhc2UgSW50ZW50LkRBTkdFUjpcbiAgICAgIHJldHVybiBjb2xvcnMudGV4dC5kYW5nZXJcbiAgICBjYXNlIEludGVudC5XQVJOSU5HOlxuICAgICAgcmV0dXJuIGNvbG9ycy50ZXh0Lndhcm5pbmdcbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIGRlZmF1bHRDb2xvciB8fCBjb2xvcnMudGV4dC5kZWZhdWx0XG4gIH1cbn1cblxuLyoqXG4gKiBAcGFyYW0ge1N0cmluZ30gc3RhcnRDb2xvclxuICogQHBhcmFtIHtTdHJpbmd9IGVuZENvbG9yXG4gKiBAcGFyYW0ge051bWJlcn0gaW50ZW5zaXR5TXVsdGlwbGllciAtIFNvbWUgY29sb3JzIG5lZWQgbW9yZSBkYXJrZW5pbmcuXG4gKi9cbmNvbnN0IGdldExpbmVhckdyYWRpZW50V2l0aFN0YXRlcyA9IChcbiAgc3RhcnRDb2xvcixcbiAgZW5kQ29sb3IsXG4gIGludGVuc2l0eU11bHRpcGxpZXIgPSAxXG4pID0+IHtcbiAgcmV0dXJuIHtcbiAgICBiYXNlOiBsaW5lYXJHcmFkaWVudChzdGFydENvbG9yLCBlbmRDb2xvciksXG4gICAgaG92ZXI6IGxpbmVhckdyYWRpZW50KFxuICAgICAgdGlueWNvbG9yKHN0YXJ0Q29sb3IpXG4gICAgICAgIC5kYXJrZW4oNSAqIGludGVuc2l0eU11bHRpcGxpZXIpXG4gICAgICAgIC50b1N0cmluZygpLFxuICAgICAgdGlueWNvbG9yKGVuZENvbG9yKVxuICAgICAgICAuZGFya2VuKDUgKiBpbnRlbnNpdHlNdWx0aXBsaWVyKVxuICAgICAgICAudG9TdHJpbmcoKVxuICAgICksXG4gICAgYWN0aXZlOiBsaW5lYXJHcmFkaWVudChcbiAgICAgIHRpbnljb2xvcihlbmRDb2xvcilcbiAgICAgICAgLmRhcmtlbig1ICogaW50ZW5zaXR5TXVsdGlwbGllcilcbiAgICAgICAgLnRvU3RyaW5nKCksXG4gICAgICB0aW55Y29sb3IoZW5kQ29sb3IpXG4gICAgICAgIC5kYXJrZW4oNSAqIGludGVuc2l0eU11bHRpcGxpZXIpXG4gICAgICAgIC50b1N0cmluZygpXG4gICAgKVxuICB9XG59XG5cbi8qKlxuICogR3JhZGllbnRzIGluIHRoZSBkZWZhdWx0IHRoZW1lIGhhdmUgYSBpbnRlbnRpb25hbCBodWUgc2hpZnQuXG4gKiBAcGFyYW0ge0ludGVudH0gaW50ZW50IC0gaW50ZW50IG9mIHRoZSBncmFkaWVudC5cbiAqIEByZXR1cm4ge09iamVjdH0geyBiYXNlLCBob3ZlciwgYWN0aXZlIH1cbiAqL1xuY29uc3QgZ2V0UHJpbWFyeUJ1dHRvblN0eWxlc0ZvckludGVudCA9IGludGVudCA9PiB7XG4gIHN3aXRjaCAoaW50ZW50KSB7XG4gICAgY2FzZSBJbnRlbnQuU1VDQ0VTUzoge1xuICAgICAgY29uc3Qgc3RhcnRDb2xvciA9ICcjMjNDMjc3J1xuICAgICAgY29uc3QgZW5kQ29sb3IgPSAnIzM5OUQ2QydcbiAgICAgIHJldHVybiB7XG4gICAgICAgIGxpbmVhckdyYWRpZW50OiBnZXRMaW5lYXJHcmFkaWVudFdpdGhTdGF0ZXMoc3RhcnRDb2xvciwgZW5kQ29sb3IpLFxuICAgICAgICBmb2N1c0NvbG9yOiB0aW55Y29sb3Ioc3RhcnRDb2xvcilcbiAgICAgICAgICAuc2V0QWxwaGEoMC40KVxuICAgICAgICAgIC50b1N0cmluZygpXG4gICAgICB9XG4gICAgfVxuXG4gICAgY2FzZSBJbnRlbnQuV0FSTklORzoge1xuICAgICAgY29uc3Qgc3RhcnRDb2xvciA9ICcjRUU5OTEzJ1xuICAgICAgY29uc3QgZW5kQ29sb3IgPSAnI0Q5ODIyQidcbiAgICAgIHJldHVybiB7XG4gICAgICAgIGxpbmVhckdyYWRpZW50OiBnZXRMaW5lYXJHcmFkaWVudFdpdGhTdGF0ZXMoc3RhcnRDb2xvciwgZW5kQ29sb3IpLFxuICAgICAgICBmb2N1c0NvbG9yOiB0aW55Y29sb3Ioc3RhcnRDb2xvcilcbiAgICAgICAgICAuc2V0QWxwaGEoMC40KVxuICAgICAgICAgIC50b1N0cmluZygpXG4gICAgICB9XG4gICAgfVxuXG4gICAgY2FzZSBJbnRlbnQuREFOR0VSOiB7XG4gICAgICBjb25zdCBzdGFydENvbG9yID0gJyNFQzRDNDcnXG4gICAgICBjb25zdCBlbmRDb2xvciA9ICcjRDY0NTQwJ1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgbGluZWFyR3JhZGllbnQ6IGdldExpbmVhckdyYWRpZW50V2l0aFN0YXRlcyhzdGFydENvbG9yLCBlbmRDb2xvciksXG4gICAgICAgIGZvY3VzQ29sb3I6IHRpbnljb2xvcihzdGFydENvbG9yKVxuICAgICAgICAgIC5zZXRBbHBoYSgwLjQpXG4gICAgICAgICAgLnRvU3RyaW5nKClcbiAgICAgIH1cbiAgICB9XG5cbiAgICBkZWZhdWx0OiB7XG4gICAgICBjb25zdCBzdGFydENvbG9yID0gJyMwNzg4REUnXG4gICAgICBjb25zdCBlbmRDb2xvciA9ICcjMTE2QUI4J1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgbGluZWFyR3JhZGllbnQ6IGdldExpbmVhckdyYWRpZW50V2l0aFN0YXRlcyhzdGFydENvbG9yLCBlbmRDb2xvciksXG4gICAgICAgIGZvY3VzQ29sb3I6IHRpbnljb2xvcihzdGFydENvbG9yKVxuICAgICAgICAgIC5zZXRBbHBoYSgwLjQpXG4gICAgICAgICAgLnRvU3RyaW5nKClcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IHtcbiAgbGluZWFyR3JhZGllbnQsXG4gIGdldFRleHRDb2xvckZvckludGVudCxcbiAgZ2V0TGluZWFyR3JhZGllbnRXaXRoU3RhdGVzLFxuICBnZXRQcmltYXJ5QnV0dG9uU3R5bGVzRm9ySW50ZW50XG59XG4iXX0=