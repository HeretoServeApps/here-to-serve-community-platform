"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _themer = require("../../../../themer");

var _memoizeClassName = _interopRequireDefault(require("../utils/memoizeClassName"));

var _scales = _interopRequireDefault(require("../foundational-styles/scales"));

var _helpers = require("../helpers");

var _shared = require("../shared");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

/**
 * Disabled styles are all the same for all buttons.
 */
var disabled = _shared.defaultControlStyles.disabled;
/**
 * Get button appearance.
 * @param {string} appearance - default, primary, minimal.
 * @param {string} intent - none, success, warning, danger.
 * @return {Object} the appearance of the button.
 */

var getButtonAppearance = function getButtonAppearance(appearance, intent) {
  switch (appearance) {
    case 'primary':
      {
        var _getPrimaryButtonStyl = (0, _helpers.getPrimaryButtonStylesForIntent)(intent),
            linearGradient = _getPrimaryButtonStyl.linearGradient,
            focusColor = _getPrimaryButtonStyl.focusColor;

        return _themer.Themer.createButtonAppearance({
          disabled: disabled,
          base: {
            color: 'white',
            backgroundColor: 'white',
            backgroundImage: linearGradient.base,
            boxShadow: "inset 0 0 0 1px ".concat(_scales["default"].neutral.N5A, ", inset 0 -1px 1px 0 ").concat(_scales["default"].neutral.N2A)
          },
          hover: {
            backgroundImage: linearGradient.hover
          },
          focus: {
            boxShadow: "0 0 0 3px ".concat(focusColor, ", inset 0 0 0 1px ").concat(_scales["default"].neutral.N4A, ", inset 0 -1px 1px 0 ").concat(_scales["default"].neutral.N5A)
          },
          active: {
            backgroundImage: linearGradient.active,
            boxShadow: "inset 0 0 0 1px ".concat(_scales["default"].neutral.N4A, ", inset 0 1px 1px 0 ").concat(_scales["default"].neutral.N2A)
          },
          focusAndActive: {
            boxShadow: "0 0 0 3px ".concat(focusColor, ", inset 0 0 0 1px ").concat(_scales["default"].neutral.N4A, ", inset 0 1px 1px 0 ").concat(_scales["default"].neutral.N2A)
          }
        });
      }

    case 'minimal':
      {
        var intentTextColor = (0, _helpers.getTextColorForIntent)(intent, _scales["default"].blue.B9);
        return _themer.Themer.createButtonAppearance({
          disabled: disabled,
          base: {
            color: intentTextColor,
            backgroundColor: 'transparent'
          },
          hover: {
            backgroundColor: _scales["default"].neutral.N2A
          },
          focus: {
            boxShadow: "0 0 0 3px ".concat(_scales["default"].blue.B5A)
          },
          active: {
            backgroundImage: 'none',
            backgroundColor: _scales["default"].blue.B3A
          },
          focusAndActive: {}
        });
      }

    case 'default':
    default:
      {
        var _intentTextColor = (0, _helpers.getTextColorForIntent)(intent);

        return _themer.Themer.createButtonAppearance({
          disabled: disabled,
          base: _objectSpread({
            color: _intentTextColor
          }, _shared.defaultControlStyles.base),
          hover: _shared.defaultControlStyles.hover,
          focus: _shared.defaultControlStyles.focus,
          active: _shared.defaultControlStyles.active,
          focusAndActive: _shared.defaultControlStyles.focusAndActive
        });
      }
  }
};
/**
 * Get the className of a `Button`|`IconButton`.
 * @param {string} appearance - default, primary, minimal.
 * @param {Intent} intent - none, success, warning, danger.
 * @return {string} the appearance class name.
 */


var _default = (0, _memoizeClassName["default"])(getButtonAppearance);

exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy90aGVtZS9zcmMvZGVmYXVsdC10aGVtZS9jb21wb25lbnQtc3BlY2lmaWMvZ2V0QnV0dG9uQ2xhc3NOYW1lLmpzIl0sIm5hbWVzIjpbImRpc2FibGVkIiwiZGVmYXVsdENvbnRyb2xTdHlsZXMiLCJnZXRCdXR0b25BcHBlYXJhbmNlIiwiYXBwZWFyYW5jZSIsImludGVudCIsImxpbmVhckdyYWRpZW50IiwiZm9jdXNDb2xvciIsIlRoZW1lciIsImNyZWF0ZUJ1dHRvbkFwcGVhcmFuY2UiLCJiYXNlIiwiY29sb3IiLCJiYWNrZ3JvdW5kQ29sb3IiLCJiYWNrZ3JvdW5kSW1hZ2UiLCJib3hTaGFkb3ciLCJzY2FsZXMiLCJuZXV0cmFsIiwiTjVBIiwiTjJBIiwiaG92ZXIiLCJmb2N1cyIsIk40QSIsImFjdGl2ZSIsImZvY3VzQW5kQWN0aXZlIiwiaW50ZW50VGV4dENvbG9yIiwiYmx1ZSIsIkI5IiwiQjVBIiwiQjNBIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBOztBQUNBOztBQUNBOztBQUNBOztBQUlBOzs7Ozs7QUFFQTs7O0lBR1FBLFEsR0FBYUMsNEIsQ0FBYkQsUTtBQUVSOzs7Ozs7O0FBTUEsSUFBTUUsbUJBQW1CLEdBQUcsU0FBdEJBLG1CQUFzQixDQUFDQyxVQUFELEVBQWFDLE1BQWIsRUFBd0I7QUFDbEQsVUFBUUQsVUFBUjtBQUNFLFNBQUssU0FBTDtBQUFnQjtBQUFBLG9DQUN5Qiw4Q0FDckNDLE1BRHFDLENBRHpCO0FBQUEsWUFDTkMsY0FETSx5QkFDTkEsY0FETTtBQUFBLFlBQ1VDLFVBRFYseUJBQ1VBLFVBRFY7O0FBSWQsZUFBT0MsZUFBT0Msc0JBQVAsQ0FBOEI7QUFDbkNSLFVBQUFBLFFBQVEsRUFBUkEsUUFEbUM7QUFFbkNTLFVBQUFBLElBQUksRUFBRTtBQUNKQyxZQUFBQSxLQUFLLEVBQUUsT0FESDtBQUVKQyxZQUFBQSxlQUFlLEVBQUUsT0FGYjtBQUdKQyxZQUFBQSxlQUFlLEVBQUVQLGNBQWMsQ0FBQ0ksSUFINUI7QUFJSkksWUFBQUEsU0FBUyw0QkFDUEMsbUJBQU9DLE9BQVAsQ0FBZUMsR0FEUixrQ0FFZUYsbUJBQU9DLE9BQVAsQ0FBZUUsR0FGOUI7QUFKTCxXQUY2QjtBQVVuQ0MsVUFBQUEsS0FBSyxFQUFFO0FBQ0xOLFlBQUFBLGVBQWUsRUFBRVAsY0FBYyxDQUFDYTtBQUQzQixXQVY0QjtBQWFuQ0MsVUFBQUEsS0FBSyxFQUFFO0FBQ0xOLFlBQUFBLFNBQVMsc0JBQWVQLFVBQWYsK0JBQ1BRLG1CQUFPQyxPQUFQLENBQWVLLEdBRFIsa0NBRWVOLG1CQUFPQyxPQUFQLENBQWVDLEdBRjlCO0FBREosV0FiNEI7QUFrQm5DSyxVQUFBQSxNQUFNLEVBQUU7QUFDTlQsWUFBQUEsZUFBZSxFQUFFUCxjQUFjLENBQUNnQixNQUQxQjtBQUVOUixZQUFBQSxTQUFTLDRCQUNQQyxtQkFBT0MsT0FBUCxDQUFlSyxHQURSLGlDQUVjTixtQkFBT0MsT0FBUCxDQUFlRSxHQUY3QjtBQUZILFdBbEIyQjtBQXdCbkNLLFVBQUFBLGNBQWMsRUFBRTtBQUNkVCxZQUFBQSxTQUFTLHNCQUFlUCxVQUFmLCtCQUNQUSxtQkFBT0MsT0FBUCxDQUFlSyxHQURSLGlDQUVjTixtQkFBT0MsT0FBUCxDQUFlRSxHQUY3QjtBQURLO0FBeEJtQixTQUE5QixDQUFQO0FBOEJEOztBQUVELFNBQUssU0FBTDtBQUFnQjtBQUNkLFlBQU1NLGVBQWUsR0FBRyxvQ0FBc0JuQixNQUF0QixFQUE4QlUsbUJBQU9VLElBQVAsQ0FBWUMsRUFBMUMsQ0FBeEI7QUFDQSxlQUFPbEIsZUFBT0Msc0JBQVAsQ0FBOEI7QUFDbkNSLFVBQUFBLFFBQVEsRUFBUkEsUUFEbUM7QUFFbkNTLFVBQUFBLElBQUksRUFBRTtBQUNKQyxZQUFBQSxLQUFLLEVBQUVhLGVBREg7QUFFSlosWUFBQUEsZUFBZSxFQUFFO0FBRmIsV0FGNkI7QUFNbkNPLFVBQUFBLEtBQUssRUFBRTtBQUNMUCxZQUFBQSxlQUFlLEVBQUVHLG1CQUFPQyxPQUFQLENBQWVFO0FBRDNCLFdBTjRCO0FBU25DRSxVQUFBQSxLQUFLLEVBQUU7QUFDTE4sWUFBQUEsU0FBUyxzQkFBZUMsbUJBQU9VLElBQVAsQ0FBWUUsR0FBM0I7QUFESixXQVQ0QjtBQVluQ0wsVUFBQUEsTUFBTSxFQUFFO0FBQ05ULFlBQUFBLGVBQWUsRUFBRSxNQURYO0FBRU5ELFlBQUFBLGVBQWUsRUFBRUcsbUJBQU9VLElBQVAsQ0FBWUc7QUFGdkIsV0FaMkI7QUFnQm5DTCxVQUFBQSxjQUFjLEVBQUU7QUFoQm1CLFNBQTlCLENBQVA7QUFrQkQ7O0FBRUQsU0FBSyxTQUFMO0FBQ0E7QUFBUztBQUNQLFlBQU1DLGdCQUFlLEdBQUcsb0NBQXNCbkIsTUFBdEIsQ0FBeEI7O0FBQ0EsZUFBT0csZUFBT0Msc0JBQVAsQ0FBOEI7QUFDbkNSLFVBQUFBLFFBQVEsRUFBUkEsUUFEbUM7QUFFbkNTLFVBQUFBLElBQUk7QUFDRkMsWUFBQUEsS0FBSyxFQUFFYTtBQURMLGFBRUN0Qiw2QkFBcUJRLElBRnRCLENBRitCO0FBTW5DUyxVQUFBQSxLQUFLLEVBQUVqQiw2QkFBcUJpQixLQU5PO0FBT25DQyxVQUFBQSxLQUFLLEVBQUVsQiw2QkFBcUJrQixLQVBPO0FBUW5DRSxVQUFBQSxNQUFNLEVBQUVwQiw2QkFBcUJvQixNQVJNO0FBU25DQyxVQUFBQSxjQUFjLEVBQUVyQiw2QkFBcUJxQjtBQVRGLFNBQTlCLENBQVA7QUFXRDtBQXpFSDtBQTJFRCxDQTVFRDtBQThFQTs7Ozs7Ozs7ZUFNZSxrQ0FBaUJwQixtQkFBakIsQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFRoZW1lciB9IGZyb20gJy4uLy4uLy4uLy4uL3RoZW1lcidcbmltcG9ydCBtZW1vaXplQ2xhc3NOYW1lIGZyb20gJy4uL3V0aWxzL21lbW9pemVDbGFzc05hbWUnXG5pbXBvcnQgc2NhbGVzIGZyb20gJy4uL2ZvdW5kYXRpb25hbC1zdHlsZXMvc2NhbGVzJ1xuaW1wb3J0IHtcbiAgZ2V0VGV4dENvbG9yRm9ySW50ZW50LFxuICBnZXRQcmltYXJ5QnV0dG9uU3R5bGVzRm9ySW50ZW50XG59IGZyb20gJy4uL2hlbHBlcnMnXG5pbXBvcnQgeyBkZWZhdWx0Q29udHJvbFN0eWxlcyB9IGZyb20gJy4uL3NoYXJlZCdcblxuLyoqXG4gKiBEaXNhYmxlZCBzdHlsZXMgYXJlIGFsbCB0aGUgc2FtZSBmb3IgYWxsIGJ1dHRvbnMuXG4gKi9cbmNvbnN0IHsgZGlzYWJsZWQgfSA9IGRlZmF1bHRDb250cm9sU3R5bGVzXG5cbi8qKlxuICogR2V0IGJ1dHRvbiBhcHBlYXJhbmNlLlxuICogQHBhcmFtIHtzdHJpbmd9IGFwcGVhcmFuY2UgLSBkZWZhdWx0LCBwcmltYXJ5LCBtaW5pbWFsLlxuICogQHBhcmFtIHtzdHJpbmd9IGludGVudCAtIG5vbmUsIHN1Y2Nlc3MsIHdhcm5pbmcsIGRhbmdlci5cbiAqIEByZXR1cm4ge09iamVjdH0gdGhlIGFwcGVhcmFuY2Ugb2YgdGhlIGJ1dHRvbi5cbiAqL1xuY29uc3QgZ2V0QnV0dG9uQXBwZWFyYW5jZSA9IChhcHBlYXJhbmNlLCBpbnRlbnQpID0+IHtcbiAgc3dpdGNoIChhcHBlYXJhbmNlKSB7XG4gICAgY2FzZSAncHJpbWFyeSc6IHtcbiAgICAgIGNvbnN0IHsgbGluZWFyR3JhZGllbnQsIGZvY3VzQ29sb3IgfSA9IGdldFByaW1hcnlCdXR0b25TdHlsZXNGb3JJbnRlbnQoXG4gICAgICAgIGludGVudFxuICAgICAgKVxuICAgICAgcmV0dXJuIFRoZW1lci5jcmVhdGVCdXR0b25BcHBlYXJhbmNlKHtcbiAgICAgICAgZGlzYWJsZWQsXG4gICAgICAgIGJhc2U6IHtcbiAgICAgICAgICBjb2xvcjogJ3doaXRlJyxcbiAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICd3aGl0ZScsXG4gICAgICAgICAgYmFja2dyb3VuZEltYWdlOiBsaW5lYXJHcmFkaWVudC5iYXNlLFxuICAgICAgICAgIGJveFNoYWRvdzogYGluc2V0IDAgMCAwIDFweCAke1xuICAgICAgICAgICAgc2NhbGVzLm5ldXRyYWwuTjVBXG4gICAgICAgICAgfSwgaW5zZXQgMCAtMXB4IDFweCAwICR7c2NhbGVzLm5ldXRyYWwuTjJBfWBcbiAgICAgICAgfSxcbiAgICAgICAgaG92ZXI6IHtcbiAgICAgICAgICBiYWNrZ3JvdW5kSW1hZ2U6IGxpbmVhckdyYWRpZW50LmhvdmVyXG4gICAgICAgIH0sXG4gICAgICAgIGZvY3VzOiB7XG4gICAgICAgICAgYm94U2hhZG93OiBgMCAwIDAgM3B4ICR7Zm9jdXNDb2xvcn0sIGluc2V0IDAgMCAwIDFweCAke1xuICAgICAgICAgICAgc2NhbGVzLm5ldXRyYWwuTjRBXG4gICAgICAgICAgfSwgaW5zZXQgMCAtMXB4IDFweCAwICR7c2NhbGVzLm5ldXRyYWwuTjVBfWBcbiAgICAgICAgfSxcbiAgICAgICAgYWN0aXZlOiB7XG4gICAgICAgICAgYmFja2dyb3VuZEltYWdlOiBsaW5lYXJHcmFkaWVudC5hY3RpdmUsXG4gICAgICAgICAgYm94U2hhZG93OiBgaW5zZXQgMCAwIDAgMXB4ICR7XG4gICAgICAgICAgICBzY2FsZXMubmV1dHJhbC5ONEFcbiAgICAgICAgICB9LCBpbnNldCAwIDFweCAxcHggMCAke3NjYWxlcy5uZXV0cmFsLk4yQX1gXG4gICAgICAgIH0sXG4gICAgICAgIGZvY3VzQW5kQWN0aXZlOiB7XG4gICAgICAgICAgYm94U2hhZG93OiBgMCAwIDAgM3B4ICR7Zm9jdXNDb2xvcn0sIGluc2V0IDAgMCAwIDFweCAke1xuICAgICAgICAgICAgc2NhbGVzLm5ldXRyYWwuTjRBXG4gICAgICAgICAgfSwgaW5zZXQgMCAxcHggMXB4IDAgJHtzY2FsZXMubmV1dHJhbC5OMkF9YFxuICAgICAgICB9XG4gICAgICB9KVxuICAgIH1cblxuICAgIGNhc2UgJ21pbmltYWwnOiB7XG4gICAgICBjb25zdCBpbnRlbnRUZXh0Q29sb3IgPSBnZXRUZXh0Q29sb3JGb3JJbnRlbnQoaW50ZW50LCBzY2FsZXMuYmx1ZS5COSlcbiAgICAgIHJldHVybiBUaGVtZXIuY3JlYXRlQnV0dG9uQXBwZWFyYW5jZSh7XG4gICAgICAgIGRpc2FibGVkLFxuICAgICAgICBiYXNlOiB7XG4gICAgICAgICAgY29sb3I6IGludGVudFRleHRDb2xvcixcbiAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICd0cmFuc3BhcmVudCdcbiAgICAgICAgfSxcbiAgICAgICAgaG92ZXI6IHtcbiAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IHNjYWxlcy5uZXV0cmFsLk4yQVxuICAgICAgICB9LFxuICAgICAgICBmb2N1czoge1xuICAgICAgICAgIGJveFNoYWRvdzogYDAgMCAwIDNweCAke3NjYWxlcy5ibHVlLkI1QX1gXG4gICAgICAgIH0sXG4gICAgICAgIGFjdGl2ZToge1xuICAgICAgICAgIGJhY2tncm91bmRJbWFnZTogJ25vbmUnLFxuICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogc2NhbGVzLmJsdWUuQjNBXG4gICAgICAgIH0sXG4gICAgICAgIGZvY3VzQW5kQWN0aXZlOiB7fVxuICAgICAgfSlcbiAgICB9XG5cbiAgICBjYXNlICdkZWZhdWx0JzpcbiAgICBkZWZhdWx0OiB7XG4gICAgICBjb25zdCBpbnRlbnRUZXh0Q29sb3IgPSBnZXRUZXh0Q29sb3JGb3JJbnRlbnQoaW50ZW50KVxuICAgICAgcmV0dXJuIFRoZW1lci5jcmVhdGVCdXR0b25BcHBlYXJhbmNlKHtcbiAgICAgICAgZGlzYWJsZWQsXG4gICAgICAgIGJhc2U6IHtcbiAgICAgICAgICBjb2xvcjogaW50ZW50VGV4dENvbG9yLFxuICAgICAgICAgIC4uLmRlZmF1bHRDb250cm9sU3R5bGVzLmJhc2VcbiAgICAgICAgfSxcbiAgICAgICAgaG92ZXI6IGRlZmF1bHRDb250cm9sU3R5bGVzLmhvdmVyLFxuICAgICAgICBmb2N1czogZGVmYXVsdENvbnRyb2xTdHlsZXMuZm9jdXMsXG4gICAgICAgIGFjdGl2ZTogZGVmYXVsdENvbnRyb2xTdHlsZXMuYWN0aXZlLFxuICAgICAgICBmb2N1c0FuZEFjdGl2ZTogZGVmYXVsdENvbnRyb2xTdHlsZXMuZm9jdXNBbmRBY3RpdmVcbiAgICAgIH0pXG4gICAgfVxuICB9XG59XG5cbi8qKlxuICogR2V0IHRoZSBjbGFzc05hbWUgb2YgYSBgQnV0dG9uYHxgSWNvbkJ1dHRvbmAuXG4gKiBAcGFyYW0ge3N0cmluZ30gYXBwZWFyYW5jZSAtIGRlZmF1bHQsIHByaW1hcnksIG1pbmltYWwuXG4gKiBAcGFyYW0ge0ludGVudH0gaW50ZW50IC0gbm9uZSwgc3VjY2Vzcywgd2FybmluZywgZGFuZ2VyLlxuICogQHJldHVybiB7c3RyaW5nfSB0aGUgYXBwZWFyYW5jZSBjbGFzcyBuYW1lLlxuICovXG5leHBvcnQgZGVmYXVsdCBtZW1vaXplQ2xhc3NOYW1lKGdldEJ1dHRvbkFwcGVhcmFuY2UpXG4iXX0=