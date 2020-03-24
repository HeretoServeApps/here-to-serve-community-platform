import _classCallCheck from "@babel/runtime/helpers/esm/classCallCheck";
import _createClass from "@babel/runtime/helpers/esm/createClass";
import _possibleConstructorReturn from "@babel/runtime/helpers/esm/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/esm/getPrototypeOf";
import _inherits from "@babel/runtime/helpers/esm/inherits";
import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import React from 'react';
import PropTypes from 'prop-types';
import { Pane } from '../../layers';
import { Heading } from '../../typography';
import { withTheme } from '../../theme';
import MenuOption from './MenuOption';

var MenuOptionsGroup =
/*#__PURE__*/
function (_React$PureComponent) {
  _inherits(MenuOptionsGroup, _React$PureComponent);

  function MenuOptionsGroup() {
    _classCallCheck(this, MenuOptionsGroup);

    return _possibleConstructorReturn(this, _getPrototypeOf(MenuOptionsGroup).apply(this, arguments));
  }

  _createClass(MenuOptionsGroup, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          title = _this$props.title,
          options = _this$props.options,
          selected = _this$props.selected,
          onChange = _this$props.onChange;
      return React.createElement(Pane, {
        paddingY: 8
      }, title && React.createElement(Heading, {
        size: 100,
        marginLeft: 44,
        marginRight: 16,
        marginY: 8
      }, title), React.createElement(Pane, null, options.map(function (option) {
        return React.createElement(MenuOption, {
          key: option.value,
          isSelected: option.value === selected,
          onSelect: function onSelect() {
            return onChange(option.value);
          }
        }, option.label);
      })));
    }
  }]);

  return MenuOptionsGroup;
}(React.PureComponent);

MenuOptionsGroup.displayName = "MenuOptionsGroup";

_defineProperty(MenuOptionsGroup, "propTypes", {
  /**
   * Title of the menu group.
   */
  title: PropTypes.node,

  /**
   * The current value of the option group.
   */
  selected: PropTypes.any,

  /**
   * Function called when selection changes.
   */
  onChange: PropTypes.func,

  /**
   * List of options rendered in the group.
   */
  options: PropTypes.array
});

export default withTheme(MenuOptionsGroup);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9tZW51L3NyYy9NZW51T3B0aW9uc0dyb3VwLmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiUHJvcFR5cGVzIiwiUGFuZSIsIkhlYWRpbmciLCJ3aXRoVGhlbWUiLCJNZW51T3B0aW9uIiwiTWVudU9wdGlvbnNHcm91cCIsInByb3BzIiwidGl0bGUiLCJvcHRpb25zIiwic2VsZWN0ZWQiLCJvbkNoYW5nZSIsIm1hcCIsIm9wdGlvbiIsInZhbHVlIiwibGFiZWwiLCJQdXJlQ29tcG9uZW50Iiwibm9kZSIsImFueSIsImZ1bmMiLCJhcnJheSJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEsT0FBT0EsS0FBUCxNQUFrQixPQUFsQjtBQUNBLE9BQU9DLFNBQVAsTUFBc0IsWUFBdEI7QUFDQSxTQUFTQyxJQUFULFFBQXFCLGNBQXJCO0FBQ0EsU0FBU0MsT0FBVCxRQUF3QixrQkFBeEI7QUFDQSxTQUFTQyxTQUFULFFBQTBCLGFBQTFCO0FBQ0EsT0FBT0MsVUFBUCxNQUF1QixjQUF2Qjs7SUFFTUMsZ0I7Ozs7Ozs7Ozs7Ozs7NkJBdUJLO0FBQUEsd0JBQ3dDLEtBQUtDLEtBRDdDO0FBQUEsVUFDQ0MsS0FERCxlQUNDQSxLQUREO0FBQUEsVUFDUUMsT0FEUixlQUNRQSxPQURSO0FBQUEsVUFDaUJDLFFBRGpCLGVBQ2lCQSxRQURqQjtBQUFBLFVBQzJCQyxRQUQzQixlQUMyQkEsUUFEM0I7QUFHUCxhQUNFLG9CQUFDLElBQUQ7QUFBTSxRQUFBLFFBQVEsRUFBRTtBQUFoQixTQUNHSCxLQUFLLElBQ0osb0JBQUMsT0FBRDtBQUFTLFFBQUEsSUFBSSxFQUFFLEdBQWY7QUFBb0IsUUFBQSxVQUFVLEVBQUUsRUFBaEM7QUFBb0MsUUFBQSxXQUFXLEVBQUUsRUFBakQ7QUFBcUQsUUFBQSxPQUFPLEVBQUU7QUFBOUQsU0FDR0EsS0FESCxDQUZKLEVBTUUsb0JBQUMsSUFBRCxRQUNHQyxPQUFPLENBQUNHLEdBQVIsQ0FBWSxVQUFDQyxNQUFELEVBQVk7QUFDdkIsZUFDRSxvQkFBQyxVQUFEO0FBQ0UsVUFBQSxHQUFHLEVBQUVBLE1BQU0sQ0FBQ0MsS0FEZDtBQUVFLFVBQUEsVUFBVSxFQUFFRCxNQUFNLENBQUNDLEtBQVAsS0FBaUJKLFFBRi9CO0FBR0UsVUFBQSxRQUFRLEVBQUU7QUFBQSxtQkFBTUMsUUFBUSxDQUFDRSxNQUFNLENBQUNDLEtBQVIsQ0FBZDtBQUFBO0FBSFosV0FLR0QsTUFBTSxDQUFDRSxLQUxWLENBREY7QUFTRCxPQVZBLENBREgsQ0FORixDQURGO0FBc0JEOzs7O0VBaEQ0QmYsS0FBSyxDQUFDZ0IsYTs7QUFBL0JWLGdCOztnQkFBQUEsZ0IsZUFDZTtBQUNqQjs7O0FBR0FFLEVBQUFBLEtBQUssRUFBRVAsU0FBUyxDQUFDZ0IsSUFKQTs7QUFNakI7OztBQUdBUCxFQUFBQSxRQUFRLEVBQUVULFNBQVMsQ0FBQ2lCLEdBVEg7O0FBV2pCOzs7QUFHQVAsRUFBQUEsUUFBUSxFQUFFVixTQUFTLENBQUNrQixJQWRIOztBQWdCakI7OztBQUdBVixFQUFBQSxPQUFPLEVBQUVSLFNBQVMsQ0FBQ21CO0FBbkJGLEM7O0FBa0RyQixlQUFlaEIsU0FBUyxDQUFDRSxnQkFBRCxDQUF4QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcydcbmltcG9ydCB7IFBhbmUgfSBmcm9tICcuLi8uLi9sYXllcnMnXG5pbXBvcnQgeyBIZWFkaW5nIH0gZnJvbSAnLi4vLi4vdHlwb2dyYXBoeSdcbmltcG9ydCB7IHdpdGhUaGVtZSB9IGZyb20gJy4uLy4uL3RoZW1lJ1xuaW1wb3J0IE1lbnVPcHRpb24gZnJvbSAnLi9NZW51T3B0aW9uJ1xuXG5jbGFzcyBNZW51T3B0aW9uc0dyb3VwIGV4dGVuZHMgUmVhY3QuUHVyZUNvbXBvbmVudCB7XG4gIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgLyoqXG4gICAgICogVGl0bGUgb2YgdGhlIG1lbnUgZ3JvdXAuXG4gICAgICovXG4gICAgdGl0bGU6IFByb3BUeXBlcy5ub2RlLFxuXG4gICAgLyoqXG4gICAgICogVGhlIGN1cnJlbnQgdmFsdWUgb2YgdGhlIG9wdGlvbiBncm91cC5cbiAgICAgKi9cbiAgICBzZWxlY3RlZDogUHJvcFR5cGVzLmFueSxcblxuICAgIC8qKlxuICAgICAqIEZ1bmN0aW9uIGNhbGxlZCB3aGVuIHNlbGVjdGlvbiBjaGFuZ2VzLlxuICAgICAqL1xuICAgIG9uQ2hhbmdlOiBQcm9wVHlwZXMuZnVuYyxcblxuICAgIC8qKlxuICAgICAqIExpc3Qgb2Ygb3B0aW9ucyByZW5kZXJlZCBpbiB0aGUgZ3JvdXAuXG4gICAgICovXG4gICAgb3B0aW9uczogUHJvcFR5cGVzLmFycmF5XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyB0aXRsZSwgb3B0aW9ucywgc2VsZWN0ZWQsIG9uQ2hhbmdlIH0gPSB0aGlzLnByb3BzXG5cbiAgICByZXR1cm4gKFxuICAgICAgPFBhbmUgcGFkZGluZ1k9ezh9PlxuICAgICAgICB7dGl0bGUgJiYgKFxuICAgICAgICAgIDxIZWFkaW5nIHNpemU9ezEwMH0gbWFyZ2luTGVmdD17NDR9IG1hcmdpblJpZ2h0PXsxNn0gbWFyZ2luWT17OH0+XG4gICAgICAgICAgICB7dGl0bGV9XG4gICAgICAgICAgPC9IZWFkaW5nPlxuICAgICAgICApfVxuICAgICAgICA8UGFuZT5cbiAgICAgICAgICB7b3B0aW9ucy5tYXAoKG9wdGlvbikgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgPE1lbnVPcHRpb25cbiAgICAgICAgICAgICAgICBrZXk9e29wdGlvbi52YWx1ZX1cbiAgICAgICAgICAgICAgICBpc1NlbGVjdGVkPXtvcHRpb24udmFsdWUgPT09IHNlbGVjdGVkfVxuICAgICAgICAgICAgICAgIG9uU2VsZWN0PXsoKSA9PiBvbkNoYW5nZShvcHRpb24udmFsdWUpfVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAge29wdGlvbi5sYWJlbH1cbiAgICAgICAgICAgICAgPC9NZW51T3B0aW9uPlxuICAgICAgICAgICAgKVxuICAgICAgICAgIH0pfVxuICAgICAgICA8L1BhbmU+XG4gICAgICA8L1BhbmU+XG4gICAgKVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhUaGVtZShNZW51T3B0aW9uc0dyb3VwKVxuIl19