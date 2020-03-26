import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
import _classCallCheck from "@babel/runtime/helpers/esm/classCallCheck";
import _createClass from "@babel/runtime/helpers/esm/createClass";
import _possibleConstructorReturn from "@babel/runtime/helpers/esm/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/esm/getPrototypeOf";
import _inherits from "@babel/runtime/helpers/esm/inherits";
import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Pane } from '../../layers';
import { Icon } from '../../icon';
import { Image } from '../../image';
import { TableRow, TextTableCell } from '../../table';

var Option =
/*#__PURE__*/
function (_PureComponent) {
  _inherits(Option, _PureComponent);

  function Option() {
    _classCallCheck(this, Option);

    return _possibleConstructorReturn(this, _getPrototypeOf(Option).apply(this, arguments));
  }

  _createClass(Option, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          label = _this$props.label,
          onSelect = _this$props.onSelect,
          onDeselect = _this$props.onDeselect,
          isHighlighted = _this$props.isHighlighted,
          isSelected = _this$props.isSelected,
          isSelectable = _this$props.isSelectable,
          disabled = _this$props.disabled,
          style = _this$props.style,
          height = _this$props.height,
          icon = _this$props.icon,
          props = _objectWithoutProperties(_this$props, ["label", "onSelect", "onDeselect", "isHighlighted", "isSelected", "isSelectable", "disabled", "style", "height", "icon"]);

      var textProps = {};

      if (disabled) {
        textProps.color = 'muted';
      }

      if (isSelected) {
        textProps.color = 'selected';
      }

      return React.createElement(TableRow, _extends({
        isSelectable: isSelectable && !disabled,
        isHighlighted: isHighlighted,
        onSelect: onSelect,
        onDeselect: onDeselect,
        isSelected: isSelected,
        style: style,
        display: "flex",
        alignItems: "center",
        borderBottom: false
      }, props), React.createElement(Pane, {
        paddingLeft: 12,
        paddingRight: 8,
        opacity: isSelected ? 1 : 0,
        flexGrow: 0,
        paddingTop: 4
      }, React.createElement(Icon, {
        color: "selected",
        icon: "tick",
        size: 14
      })), React.createElement(TextTableCell, {
        height: height,
        borderBottom: "muted",
        textProps: textProps,
        paddingLeft: 0,
        borderRight: null,
        flex: 1,
        alignSelf: "stretch",
        cursor: disabled ? 'default' : 'pointer'
      }, React.createElement(Pane, {
        alignItems: "center",
        display: "flex"
      }, icon && React.createElement(Image, {
        src: icon,
        width: 24,
        marginRight: 8
      }), label)));
    }
  }]);

  return Option;
}(PureComponent);

Option.displayName = "Option";

_defineProperty(Option, "propTypes", {
  label: PropTypes.string,
  icon: PropTypes.string,
  style: PropTypes.any,
  height: PropTypes.number,
  onSelect: PropTypes.func,
  onDeselect: PropTypes.func,
  isHighlighted: PropTypes.bool,
  isSelected: PropTypes.bool,
  isSelectable: PropTypes.bool,
  disabled: PropTypes.bool
});

export { Option as default };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9zZWxlY3QtbWVudS9zcmMvT3B0aW9uLmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiUHVyZUNvbXBvbmVudCIsIlByb3BUeXBlcyIsIlBhbmUiLCJJY29uIiwiSW1hZ2UiLCJUYWJsZVJvdyIsIlRleHRUYWJsZUNlbGwiLCJPcHRpb24iLCJwcm9wcyIsImxhYmVsIiwib25TZWxlY3QiLCJvbkRlc2VsZWN0IiwiaXNIaWdobGlnaHRlZCIsImlzU2VsZWN0ZWQiLCJpc1NlbGVjdGFibGUiLCJkaXNhYmxlZCIsInN0eWxlIiwiaGVpZ2h0IiwiaWNvbiIsInRleHRQcm9wcyIsImNvbG9yIiwic3RyaW5nIiwiYW55IiwibnVtYmVyIiwiZnVuYyIsImJvb2wiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUEsT0FBT0EsS0FBUCxJQUFnQkMsYUFBaEIsUUFBcUMsT0FBckM7QUFDQSxPQUFPQyxTQUFQLE1BQXNCLFlBQXRCO0FBQ0EsU0FBU0MsSUFBVCxRQUFxQixjQUFyQjtBQUNBLFNBQVNDLElBQVQsUUFBcUIsWUFBckI7QUFDQSxTQUFTQyxLQUFULFFBQXNCLGFBQXRCO0FBQ0EsU0FBU0MsUUFBVCxFQUFtQkMsYUFBbkIsUUFBd0MsYUFBeEM7O0lBRXFCQyxNOzs7Ozs7Ozs7Ozs7OzZCQWNWO0FBQUEsd0JBYUgsS0FBS0MsS0FiRjtBQUFBLFVBRUxDLEtBRkssZUFFTEEsS0FGSztBQUFBLFVBR0xDLFFBSEssZUFHTEEsUUFISztBQUFBLFVBSUxDLFVBSkssZUFJTEEsVUFKSztBQUFBLFVBS0xDLGFBTEssZUFLTEEsYUFMSztBQUFBLFVBTUxDLFVBTkssZUFNTEEsVUFOSztBQUFBLFVBT0xDLFlBUEssZUFPTEEsWUFQSztBQUFBLFVBUUxDLFFBUkssZUFRTEEsUUFSSztBQUFBLFVBU0xDLEtBVEssZUFTTEEsS0FUSztBQUFBLFVBVUxDLE1BVkssZUFVTEEsTUFWSztBQUFBLFVBV0xDLElBWEssZUFXTEEsSUFYSztBQUFBLFVBWUZWLEtBWkU7O0FBZVAsVUFBTVcsU0FBUyxHQUFHLEVBQWxCOztBQUNBLFVBQUlKLFFBQUosRUFBYztBQUNaSSxRQUFBQSxTQUFTLENBQUNDLEtBQVYsR0FBa0IsT0FBbEI7QUFDRDs7QUFFRCxVQUFJUCxVQUFKLEVBQWdCO0FBQ2RNLFFBQUFBLFNBQVMsQ0FBQ0MsS0FBVixHQUFrQixVQUFsQjtBQUNEOztBQUVELGFBQ0Usb0JBQUMsUUFBRDtBQUNFLFFBQUEsWUFBWSxFQUFFTixZQUFZLElBQUksQ0FBQ0MsUUFEakM7QUFFRSxRQUFBLGFBQWEsRUFBRUgsYUFGakI7QUFHRSxRQUFBLFFBQVEsRUFBRUYsUUFIWjtBQUlFLFFBQUEsVUFBVSxFQUFFQyxVQUpkO0FBS0UsUUFBQSxVQUFVLEVBQUVFLFVBTGQ7QUFNRSxRQUFBLEtBQUssRUFBRUcsS0FOVDtBQU9FLFFBQUEsT0FBTyxFQUFDLE1BUFY7QUFRRSxRQUFBLFVBQVUsRUFBQyxRQVJiO0FBU0UsUUFBQSxZQUFZLEVBQUU7QUFUaEIsU0FVTVIsS0FWTixHQVlFLG9CQUFDLElBQUQ7QUFDRSxRQUFBLFdBQVcsRUFBRSxFQURmO0FBRUUsUUFBQSxZQUFZLEVBQUUsQ0FGaEI7QUFHRSxRQUFBLE9BQU8sRUFBRUssVUFBVSxHQUFHLENBQUgsR0FBTyxDQUg1QjtBQUlFLFFBQUEsUUFBUSxFQUFFLENBSlo7QUFLRSxRQUFBLFVBQVUsRUFBRTtBQUxkLFNBT0Usb0JBQUMsSUFBRDtBQUFNLFFBQUEsS0FBSyxFQUFDLFVBQVo7QUFBdUIsUUFBQSxJQUFJLEVBQUMsTUFBNUI7QUFBbUMsUUFBQSxJQUFJLEVBQUU7QUFBekMsUUFQRixDQVpGLEVBcUJFLG9CQUFDLGFBQUQ7QUFDRSxRQUFBLE1BQU0sRUFBRUksTUFEVjtBQUVFLFFBQUEsWUFBWSxFQUFDLE9BRmY7QUFHRSxRQUFBLFNBQVMsRUFBRUUsU0FIYjtBQUlFLFFBQUEsV0FBVyxFQUFFLENBSmY7QUFLRSxRQUFBLFdBQVcsRUFBRSxJQUxmO0FBTUUsUUFBQSxJQUFJLEVBQUUsQ0FOUjtBQU9FLFFBQUEsU0FBUyxFQUFDLFNBUFo7QUFRRSxRQUFBLE1BQU0sRUFBRUosUUFBUSxHQUFHLFNBQUgsR0FBZTtBQVJqQyxTQVVFLG9CQUFDLElBQUQ7QUFBTSxRQUFBLFVBQVUsRUFBQyxRQUFqQjtBQUEwQixRQUFBLE9BQU8sRUFBQztBQUFsQyxTQUNHRyxJQUFJLElBQUksb0JBQUMsS0FBRDtBQUFPLFFBQUEsR0FBRyxFQUFFQSxJQUFaO0FBQWtCLFFBQUEsS0FBSyxFQUFFLEVBQXpCO0FBQTZCLFFBQUEsV0FBVyxFQUFFO0FBQTFDLFFBRFgsRUFFR1QsS0FGSCxDQVZGLENBckJGLENBREY7QUF1Q0Q7Ozs7RUE3RWlDVCxhOztBQUFmTyxNOztnQkFBQUEsTSxlQUNBO0FBQ2pCRSxFQUFBQSxLQUFLLEVBQUVSLFNBQVMsQ0FBQ29CLE1BREE7QUFFakJILEVBQUFBLElBQUksRUFBRWpCLFNBQVMsQ0FBQ29CLE1BRkM7QUFHakJMLEVBQUFBLEtBQUssRUFBRWYsU0FBUyxDQUFDcUIsR0FIQTtBQUlqQkwsRUFBQUEsTUFBTSxFQUFFaEIsU0FBUyxDQUFDc0IsTUFKRDtBQUtqQmIsRUFBQUEsUUFBUSxFQUFFVCxTQUFTLENBQUN1QixJQUxIO0FBTWpCYixFQUFBQSxVQUFVLEVBQUVWLFNBQVMsQ0FBQ3VCLElBTkw7QUFPakJaLEVBQUFBLGFBQWEsRUFBRVgsU0FBUyxDQUFDd0IsSUFQUjtBQVFqQlosRUFBQUEsVUFBVSxFQUFFWixTQUFTLENBQUN3QixJQVJMO0FBU2pCWCxFQUFBQSxZQUFZLEVBQUViLFNBQVMsQ0FBQ3dCLElBVFA7QUFVakJWLEVBQUFBLFFBQVEsRUFBRWQsU0FBUyxDQUFDd0I7QUFWSCxDOztTQURBbEIsTSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBQdXJlQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnXG5pbXBvcnQgeyBQYW5lIH0gZnJvbSAnLi4vLi4vbGF5ZXJzJ1xuaW1wb3J0IHsgSWNvbiB9IGZyb20gJy4uLy4uL2ljb24nXG5pbXBvcnQgeyBJbWFnZSB9IGZyb20gJy4uLy4uL2ltYWdlJ1xuaW1wb3J0IHsgVGFibGVSb3csIFRleHRUYWJsZUNlbGwgfSBmcm9tICcuLi8uLi90YWJsZSdcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgT3B0aW9uIGV4dGVuZHMgUHVyZUNvbXBvbmVudCB7XG4gIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgbGFiZWw6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgaWNvbjogUHJvcFR5cGVzLnN0cmluZyxcbiAgICBzdHlsZTogUHJvcFR5cGVzLmFueSxcbiAgICBoZWlnaHQ6IFByb3BUeXBlcy5udW1iZXIsXG4gICAgb25TZWxlY3Q6IFByb3BUeXBlcy5mdW5jLFxuICAgIG9uRGVzZWxlY3Q6IFByb3BUeXBlcy5mdW5jLFxuICAgIGlzSGlnaGxpZ2h0ZWQ6IFByb3BUeXBlcy5ib29sLFxuICAgIGlzU2VsZWN0ZWQ6IFByb3BUeXBlcy5ib29sLFxuICAgIGlzU2VsZWN0YWJsZTogUHJvcFR5cGVzLmJvb2wsXG4gICAgZGlzYWJsZWQ6IFByb3BUeXBlcy5ib29sXG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3Qge1xuICAgICAgbGFiZWwsXG4gICAgICBvblNlbGVjdCxcbiAgICAgIG9uRGVzZWxlY3QsXG4gICAgICBpc0hpZ2hsaWdodGVkLFxuICAgICAgaXNTZWxlY3RlZCxcbiAgICAgIGlzU2VsZWN0YWJsZSxcbiAgICAgIGRpc2FibGVkLFxuICAgICAgc3R5bGUsXG4gICAgICBoZWlnaHQsXG4gICAgICBpY29uLFxuICAgICAgLi4ucHJvcHNcbiAgICB9ID0gdGhpcy5wcm9wc1xuXG4gICAgY29uc3QgdGV4dFByb3BzID0ge31cbiAgICBpZiAoZGlzYWJsZWQpIHtcbiAgICAgIHRleHRQcm9wcy5jb2xvciA9ICdtdXRlZCdcbiAgICB9XG5cbiAgICBpZiAoaXNTZWxlY3RlZCkge1xuICAgICAgdGV4dFByb3BzLmNvbG9yID0gJ3NlbGVjdGVkJ1xuICAgIH1cblxuICAgIHJldHVybiAoXG4gICAgICA8VGFibGVSb3dcbiAgICAgICAgaXNTZWxlY3RhYmxlPXtpc1NlbGVjdGFibGUgJiYgIWRpc2FibGVkfVxuICAgICAgICBpc0hpZ2hsaWdodGVkPXtpc0hpZ2hsaWdodGVkfVxuICAgICAgICBvblNlbGVjdD17b25TZWxlY3R9XG4gICAgICAgIG9uRGVzZWxlY3Q9e29uRGVzZWxlY3R9XG4gICAgICAgIGlzU2VsZWN0ZWQ9e2lzU2VsZWN0ZWR9XG4gICAgICAgIHN0eWxlPXtzdHlsZX1cbiAgICAgICAgZGlzcGxheT1cImZsZXhcIlxuICAgICAgICBhbGlnbkl0ZW1zPVwiY2VudGVyXCJcbiAgICAgICAgYm9yZGVyQm90dG9tPXtmYWxzZX1cbiAgICAgICAgey4uLnByb3BzfVxuICAgICAgPlxuICAgICAgICA8UGFuZVxuICAgICAgICAgIHBhZGRpbmdMZWZ0PXsxMn1cbiAgICAgICAgICBwYWRkaW5nUmlnaHQ9ezh9XG4gICAgICAgICAgb3BhY2l0eT17aXNTZWxlY3RlZCA/IDEgOiAwfVxuICAgICAgICAgIGZsZXhHcm93PXswfVxuICAgICAgICAgIHBhZGRpbmdUb3A9ezR9XG4gICAgICAgID5cbiAgICAgICAgICA8SWNvbiBjb2xvcj1cInNlbGVjdGVkXCIgaWNvbj1cInRpY2tcIiBzaXplPXsxNH0gLz5cbiAgICAgICAgPC9QYW5lPlxuICAgICAgICA8VGV4dFRhYmxlQ2VsbFxuICAgICAgICAgIGhlaWdodD17aGVpZ2h0fVxuICAgICAgICAgIGJvcmRlckJvdHRvbT1cIm11dGVkXCJcbiAgICAgICAgICB0ZXh0UHJvcHM9e3RleHRQcm9wc31cbiAgICAgICAgICBwYWRkaW5nTGVmdD17MH1cbiAgICAgICAgICBib3JkZXJSaWdodD17bnVsbH1cbiAgICAgICAgICBmbGV4PXsxfVxuICAgICAgICAgIGFsaWduU2VsZj1cInN0cmV0Y2hcIlxuICAgICAgICAgIGN1cnNvcj17ZGlzYWJsZWQgPyAnZGVmYXVsdCcgOiAncG9pbnRlcid9XG4gICAgICAgID5cbiAgICAgICAgICA8UGFuZSBhbGlnbkl0ZW1zPVwiY2VudGVyXCIgZGlzcGxheT1cImZsZXhcIj5cbiAgICAgICAgICAgIHtpY29uICYmIDxJbWFnZSBzcmM9e2ljb259IHdpZHRoPXsyNH0gbWFyZ2luUmlnaHQ9ezh9IC8+fVxuICAgICAgICAgICAge2xhYmVsfVxuICAgICAgICAgIDwvUGFuZT5cbiAgICAgICAgPC9UZXh0VGFibGVDZWxsPlxuICAgICAgPC9UYWJsZVJvdz5cbiAgICApXG4gIH1cbn1cbiJdfQ==