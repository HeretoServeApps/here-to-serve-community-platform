import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

import { Themer } from '../../../../themer';
import memoizeClassName from '../utils/memoizeClassName';
import scales from '../foundational-styles/scales';
import { getTextColorForIntent, getPrimaryButtonStylesForIntent } from '../helpers';
import { defaultControlStyles } from '../shared';
/**
 * Disabled styles are all the same for all buttons.
 */

var disabled = defaultControlStyles.disabled;
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
        var _getPrimaryButtonStyl = getPrimaryButtonStylesForIntent(intent),
            linearGradient = _getPrimaryButtonStyl.linearGradient,
            focusColor = _getPrimaryButtonStyl.focusColor;

        return Themer.createButtonAppearance({
          disabled: disabled,
          base: {
            color: 'white',
            backgroundColor: 'white',
            backgroundImage: linearGradient.base,
            boxShadow: "inset 0 0 0 1px ".concat(scales.neutral.N5A, ", inset 0 -1px 1px 0 ").concat(scales.neutral.N2A)
          },
          hover: {
            backgroundImage: linearGradient.hover
          },
          focus: {
            boxShadow: "0 0 0 3px ".concat(focusColor, ", inset 0 0 0 1px ").concat(scales.neutral.N4A, ", inset 0 -1px 1px 0 ").concat(scales.neutral.N5A)
          },
          active: {
            backgroundImage: linearGradient.active,
            boxShadow: "inset 0 0 0 1px ".concat(scales.neutral.N4A, ", inset 0 1px 1px 0 ").concat(scales.neutral.N2A)
          },
          focusAndActive: {
            boxShadow: "0 0 0 3px ".concat(focusColor, ", inset 0 0 0 1px ").concat(scales.neutral.N4A, ", inset 0 1px 1px 0 ").concat(scales.neutral.N2A)
          }
        });
      }

    case 'minimal':
      {
        var intentTextColor = getTextColorForIntent(intent, scales.blue.B9);
        return Themer.createButtonAppearance({
          disabled: disabled,
          base: {
            color: intentTextColor,
            backgroundColor: 'transparent'
          },
          hover: {
            backgroundColor: scales.neutral.N2A
          },
          focus: {
            boxShadow: "0 0 0 3px ".concat(scales.blue.B5A)
          },
          active: {
            backgroundImage: 'none',
            backgroundColor: scales.blue.B3A
          },
          focusAndActive: {}
        });
      }

    case 'default':
    default:
      {
        var _intentTextColor = getTextColorForIntent(intent);

        return Themer.createButtonAppearance({
          disabled: disabled,
          base: _objectSpread({
            color: _intentTextColor
          }, defaultControlStyles.base),
          hover: defaultControlStyles.hover,
          focus: defaultControlStyles.focus,
          active: defaultControlStyles.active,
          focusAndActive: defaultControlStyles.focusAndActive
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


export default memoizeClassName(getButtonAppearance);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy90aGVtZS9zcmMvZGVmYXVsdC10aGVtZS9jb21wb25lbnQtc3BlY2lmaWMvZ2V0QnV0dG9uQ2xhc3NOYW1lLmpzIl0sIm5hbWVzIjpbIlRoZW1lciIsIm1lbW9pemVDbGFzc05hbWUiLCJzY2FsZXMiLCJnZXRUZXh0Q29sb3JGb3JJbnRlbnQiLCJnZXRQcmltYXJ5QnV0dG9uU3R5bGVzRm9ySW50ZW50IiwiZGVmYXVsdENvbnRyb2xTdHlsZXMiLCJkaXNhYmxlZCIsImdldEJ1dHRvbkFwcGVhcmFuY2UiLCJhcHBlYXJhbmNlIiwiaW50ZW50IiwibGluZWFyR3JhZGllbnQiLCJmb2N1c0NvbG9yIiwiY3JlYXRlQnV0dG9uQXBwZWFyYW5jZSIsImJhc2UiLCJjb2xvciIsImJhY2tncm91bmRDb2xvciIsImJhY2tncm91bmRJbWFnZSIsImJveFNoYWRvdyIsIm5ldXRyYWwiLCJONUEiLCJOMkEiLCJob3ZlciIsImZvY3VzIiwiTjRBIiwiYWN0aXZlIiwiZm9jdXNBbmRBY3RpdmUiLCJpbnRlbnRUZXh0Q29sb3IiLCJibHVlIiwiQjkiLCJCNUEiLCJCM0EiXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLFNBQVNBLE1BQVQsUUFBdUIsb0JBQXZCO0FBQ0EsT0FBT0MsZ0JBQVAsTUFBNkIsMkJBQTdCO0FBQ0EsT0FBT0MsTUFBUCxNQUFtQiwrQkFBbkI7QUFDQSxTQUNFQyxxQkFERixFQUVFQywrQkFGRixRQUdPLFlBSFA7QUFJQSxTQUFTQyxvQkFBVCxRQUFxQyxXQUFyQztBQUVBOzs7O0lBR1FDLFEsR0FBYUQsb0IsQ0FBYkMsUTtBQUVSOzs7Ozs7O0FBTUEsSUFBTUMsbUJBQW1CLEdBQUcsU0FBdEJBLG1CQUFzQixDQUFDQyxVQUFELEVBQWFDLE1BQWIsRUFBd0I7QUFDbEQsVUFBUUQsVUFBUjtBQUNFLFNBQUssU0FBTDtBQUFnQjtBQUFBLG9DQUN5QkosK0JBQStCLENBQ3BFSyxNQURvRSxDQUR4RDtBQUFBLFlBQ05DLGNBRE0s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b0IsQ0FBQ29CO0FBVEYsU0FBOUIsQ0FBUDtBQVdEO0FBekVIO0FBMkVELENBNUVEO0FBOEVBOzs7Ozs7OztBQU1BLGVBQWV4QixnQkFBZ0IsQ0FBQ00sbUJBQUQsQ0FBL0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBUaGVtZXIgfSBmcm9tICcuLi8uLi8uLi8uLi90aGVtZXInXG5pbXBvcnQgbWVtb2l6ZUNsYXNzTmFtZSBmcm9tICcuLi91dGlscy9tZW1vaXplQ2xhc3NOYW1lJ1xuaW1wb3J0IHNjYWxlcyBmcm9tICcuLi9mb3VuZGF0aW9uYWwtc3R5bGVzL3NjYWxlcydcbmltcG9ydCB7XG4gIGdldFRleHRDb2xvckZvckludGVudCxcbiAgZ2V0UHJpbWFyeUJ1dHRvblN0eWxlc0ZvckludGVudFxufSBmcm9tICcuLi9oZWxwZXJzJ1xuaW1wb3J0IHsgZGVmYXVsdENvbnRyb2xTdHlsZXMgfSBmcm9tICcuLi9zaGFyZWQnXG5cbi8qKlxuICogRGlzYWJsZWQgc3R5bGVzIGFyZSBhbGwgdGhlIHNhbWUgZm9yIGFsbCBidXR0b25zLlxuICovXG5jb25zdCB7IGRpc2FibGVkIH0gPSBkZWZhdWx0Q29udHJvbFN0eWxlc1xuXG4vKipcbiAqIEdldCBidXR0b24gYXBwZWFyYW5jZS5cbiAqIEBwYXJhbSB7c3RyaW5nfSBhcHBlYXJhbmNlIC0gZGVmYXVsdCwgcHJpbWFyeSwgbWluaW1hbC5cbiAqIEBwYXJhbSB7c3RyaW5nfSBpbnRlbnQgLSBub25lLCBzdWNjZXNzLCB3YXJuaW5nLCBkYW5nZXIuXG4gKiBAcmV0dXJuIHtPYmplY3R9IHRoZSBhcHBlYXJhbmNlIG9mIHRoZSBidXR0b24uXG4gKi9cbmNvbnN0IGdldEJ1dHRvbkFwcGVhcmFuY2UgPSAoYXBwZWFyYW5jZSwgaW50ZW50KSA9PiB7XG4gIHN3aXRjaCAoYXBwZWFyYW5jZSkge1xuICAgIGNhc2UgJ3ByaW1hcnknOiB7XG4gICAgICBjb25zdCB7IGxpbmVhckdyYWRpZW50LCBmb2N1c0NvbG9yIH0gPSBnZXRQcmltYXJ5QnV0dG9uU3R5bGVzRm9ySW50ZW50KFxuICAgICAgICBpbnRlbnRcbiAgICAgIClcbiAgICAgIHJldHVybiBUaGVtZXIuY3JlYXRlQnV0dG9uQXBwZWFyYW5jZSh7XG4gICAgICAgIGRpc2FibGVkLFxuICAgICAgICBiYXNlOiB7XG4gICAgICAgICAgY29sb3I6ICd3aGl0ZScsXG4gICAgICAgICAgYmFja2dyb3VuZENvbG9yOiAnd2hpdGUnLFxuICAgICAgICAgIGJhY2tncm91bmRJbWFnZTogbGluZWFyR3JhZGllbnQuYmFzZSxcbiAgICAgICAgICBib3hTaGFkb3c6IGBpbnNldCAwIDAgMCAxcHggJHtcbiAgICAgICAgICAgIHNjYWxlcy5uZXV0cmFsLk41QVxuICAgICAgICAgIH0sIGluc2V0IDAgLTFweCAxcHggMCAke3NjYWxlcy5uZXV0cmFsLk4yQX1gXG4gICAgICAgIH0sXG4gICAgICAgIGhvdmVyOiB7XG4gICAgICAgICAgYmFja2dyb3VuZEltYWdlOiBsaW5lYXJHcmFkaWVudC5ob3ZlclxuICAgICAgICB9LFxuICAgICAgICBmb2N1czoge1xuICAgICAgICAgIGJveFNoYWRvdzogYDAgMCAwIDNweCAke2ZvY3VzQ29sb3J9LCBpbnNldCAwIDAgMCAxcHggJHtcbiAgICAgICAgICAgIHNjYWxlcy5uZXV0cmFsLk40QVxuICAgICAgICAgIH0sIGluc2V0IDAgLTFweCAxcHggMCAke3NjYWxlcy5uZXV0cmFsLk41QX1gXG4gICAgICAgIH0sXG4gICAgICAgIGFjdGl2ZToge1xuICAgICAgICAgIGJhY2tncm91bmRJbWFnZTogbGluZWFyR3JhZGllbnQuYWN0aXZlLFxuICAgICAgICAgIGJveFNoYWRvdzogYGluc2V0IDAgMCAwIDFweCAke1xuICAgICAgICAgICAgc2NhbGVzLm5ldXRyYWwuTjRBXG4gICAgICAgICAgfSwgaW5zZXQgMCAxcHggMXB4IDAgJHtzY2FsZXMubmV1dHJhbC5OMkF9YFxuICAgICAgICB9LFxuICAgICAgICBmb2N1c0FuZEFjdGl2ZToge1xuICAgICAgICAgIGJveFNoYWRvdzogYDAgMCAwIDNweCAke2ZvY3VzQ29sb3J9LCBpbnNldCAwIDAgMCAxcHggJHtcbiAgICAgICAgICAgIHNjYWxlcy5uZXV0cmFsLk40QVxuICAgICAgICAgIH0sIGluc2V0IDAgMXB4IDFweCAwICR7c2NhbGVzLm5ldXRyYWwuTjJBfWBcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9XG5cbiAgICBjYXNlICdtaW5pbWFsJzoge1xuICAgICAgY29uc3QgaW50ZW50VGV4dENvbG9yID0gZ2V0VGV4dENvbG9yRm9ySW50ZW50KGludGVudCwgc2NhbGVzLmJsdWUuQjkpXG4gICAgICByZXR1cm4gVGhlbWVyLmNyZWF0ZUJ1dHRvbkFwcGVhcmFuY2Uoe1xuICAgICAgICBkaXNhYmxlZCxcbiAgICAgICAgYmFzZToge1xuICAgICAgICAgIGNvbG9yOiBpbnRlbnRUZXh0Q29sb3IsXG4gICAgICAgICAgYmFja2dyb3VuZENvbG9yOiAndHJhbnNwYXJlbnQnXG4gICAgICAgIH0sXG4gICAgICAgIGhvdmVyOiB7XG4gICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBzY2FsZXMubmV1dHJhbC5OMkFcbiAgICAgICAgfSxcbiAgICAgICAgZm9jdXM6IHtcbiAgICAgICAgICBib3hTaGFkb3c6IGAwIDAgMCAzcHggJHtzY2FsZXMuYmx1ZS5CNUF9YFxuICAgICAgICB9LFxuICAgICAgICBhY3RpdmU6IHtcbiAgICAgICAgICBiYWNrZ3JvdW5kSW1hZ2U6ICdub25lJyxcbiAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IHNjYWxlcy5ibHVlLkIzQVxuICAgICAgICB9LFxuICAgICAgICBmb2N1c0FuZEFjdGl2ZToge31cbiAgICAgIH0pXG4gICAgfVxuXG4gICAgY2FzZSAnZGVmYXVsdCc6XG4gICAgZGVmYXVsdDoge1xuICAgICAgY29uc3QgaW50ZW50VGV4dENvbG9yID0gZ2V0VGV4dENvbG9yRm9ySW50ZW50KGludGVudClcbiAgICAgIHJldHVybiBUaGVtZXIuY3JlYXRlQnV0dG9uQXBwZWFyYW5jZSh7XG4gICAgICAgIGRpc2FibGVkLFxuICAgICAgICBiYXNlOiB7XG4gICAgICAgICAgY29sb3I6IGludGVudFRleHRDb2xvcixcbiAgICAgICAgICAuLi5kZWZhdWx0Q29udHJvbFN0eWxlcy5iYXNlXG4gICAgICAgIH0sXG4gICAgICAgIGhvdmVyOiBkZWZhdWx0Q29udHJvbFN0eWxlcy5ob3ZlcixcbiAgICAgICAgZm9jdXM6IGRlZmF1bHRDb250cm9sU3R5bGVzLmZvY3VzLFxuICAgICAgICBhY3RpdmU6IGRlZmF1bHRDb250cm9sU3R5bGVzLmFjdGl2ZSxcbiAgICAgICAgZm9jdXNBbmRBY3RpdmU6IGRlZmF1bHRDb250cm9sU3R5bGVzLmZvY3VzQW5kQWN0aXZlXG4gICAgICB9KVxuICAgIH1cbiAgfVxufVxuXG4vKipcbiAqIEdldCB0aGUgY2xhc3NOYW1lIG9mIGEgYEJ1dHRvbmB8YEljb25CdXR0b25gLlxuICogQHBhcmFtIHtzdHJpbmd9IGFwcGVhcmFuY2UgLSBkZWZhdWx0LCBwcmltYXJ5LCBtaW5pbWFsLlxuICogQHBhcmFtIHtJbnRlbnR9IGludGVudCAtIG5vbmUsIHN1Y2Nlc3MsIHdhcm5pbmcsIGRhbmdlci5cbiAqIEByZXR1cm4ge3N0cmluZ30gdGhlIGFwcGVhcmFuY2UgY2xhc3MgbmFtZS5cbiAqL1xuZXhwb3J0IGRlZmF1bHQgbWVtb2l6ZUNsYXNzTmFtZShnZXRCdXR0b25BcHBlYXJhbmNlKVxuIl19