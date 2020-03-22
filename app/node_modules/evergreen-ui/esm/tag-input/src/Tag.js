import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
import _classCallCheck from "@babel/runtime/helpers/esm/classCallCheck";
import _createClass from "@babel/runtime/helpers/esm/createClass";
import _possibleConstructorReturn from "@babel/runtime/helpers/esm/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/esm/getPrototypeOf";
import _inherits from "@babel/runtime/helpers/esm/inherits";
import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";

/**
 * @overview TagInput accepts multiple values that can be individually removed
 */
import React from 'react';
import PropTypes from 'prop-types';
import { Badge } from '../../badges';
import { Icon } from '../../icon';
import { minorScale } from '../../scales';

var Tag =
/*#__PURE__*/
function (_React$PureComponent) {
  _inherits(Tag, _React$PureComponent);

  function Tag() {
    _classCallCheck(this, Tag);

    return _possibleConstructorReturn(this, _getPrototypeOf(Tag).apply(this, arguments));
  }

  _createClass(Tag, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          children = _this$props.children,
          onRemove = _this$props.onRemove,
          isRemovable = _this$props.isRemovable,
          props = _objectWithoutProperties(_this$props, ["children", "onRemove", "isRemovable"]);

      var badgeStyles = {
        alignItems: 'center',
        display: 'inline-flex',
        fontWeight: 400,
        textTransform: 'none'
      };

      if (isRemovable) {
        badgeStyles.paddingRight = minorScale(1);
      }

      return React.createElement(Badge, _extends({
        isInteractive: true
      }, badgeStyles, props), children, isRemovable && React.createElement(Icon, {
        icon: "cross",
        marginLeft: minorScale(1),
        onClick: onRemove,
        size: minorScale(3)
      }));
    }
  }]);

  return Tag;
}(React.PureComponent);

Tag.displayName = "Tag";

_defineProperty(Tag, "propTypes", {
  /** The badge content */
  children: PropTypes.node,

  /**
   * Callback invoked when the removal icon is clicked.
   * (event) => void
   */
  onRemove: PropTypes.func,

  /** Whether or not the tag can be removed. */
  isRemovable: PropTypes.bool
});

export default Tag;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy90YWctaW5wdXQvc3JjL1RhZy5qcyJdLCJuYW1lcyI6WyJSZWFjdCIsIlByb3BUeXBlcyIsIkJhZGdlIiwiSWNvbiIsIm1pbm9yU2NhbGUiLCJUYWciLCJwcm9wcyIsImNoaWxkcmVuIiwib25SZW1vdmUiLCJpc1JlbW92YWJsZSIsImJhZGdlU3R5bGVzIiwiYWxpZ25JdGVtcyIsImRpc3BsYXkiLCJmb250V2VpZ2h0IiwidGV4dFRyYW5zZm9ybSIsInBhZGRpbmdSaWdodCIsIlB1cmVDb21wb25lbnQiLCJub2RlIiwiZnVuYyIsImJvb2wiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBOzs7QUFJQSxPQUFPQSxLQUFQLE1BQWtCLE9BQWxCO0FBQ0EsT0FBT0MsU0FBUCxNQUFzQixZQUF0QjtBQUNBLFNBQVNDLEtBQVQsUUFBc0IsY0FBdEI7QUFDQSxTQUFTQyxJQUFULFFBQXFCLFlBQXJCO0FBQ0EsU0FBU0MsVUFBVCxRQUEyQixjQUEzQjs7SUFFTUMsRzs7Ozs7Ozs7Ozs7Ozs2QkFhSztBQUFBLHdCQUMrQyxLQUFLQyxLQURwRDtBQUFBLFVBQ0NDLFFBREQsZUFDQ0EsUUFERDtBQUFBLFVBQ1dDLFFBRFgsZUFDV0EsUUFEWDtBQUFBLFVBQ3FCQyxXQURyQixlQUNxQkEsV0FEckI7QUFBQSxVQUNxQ0gsS0FEckM7O0FBR1AsVUFBTUksV0FBVyxHQUFHO0FBQ2xCQyxRQUFBQSxVQUFVLEVBQUUsUUFETTtBQUVsQkMsUUFBQUEsT0FBTyxFQUFFLGFBRlM7QUFHbEJDLFFBQUFBLFVBQVUsRUFBRSxHQUhNO0FBSWxCQyxRQUFBQSxhQUFhLEVBQUU7QUFKRyxPQUFwQjs7QUFPQSxVQUFJTCxXQUFKLEVBQWlCO0FBQ2ZDLFFBQUFBLFdBQVcsQ0FBQ0ssWUFBWixHQUEyQlgsVUFBVSxDQUFDLENBQUQsQ0FBckM7QUFDRDs7QUFFRCxhQUNFLG9CQUFDLEtBQUQ7QUFBTyxRQUFBLGFBQWE7QUFBcEIsU0FBeUJNLFdBQXpCLEVBQTBDSixLQUExQyxHQUNHQyxRQURILEVBRUdFLFdBQVcsSUFDVixvQkFBQyxJQUFEO0FBQ0UsUUFBQSxJQUFJLEVBQUMsT0FEUDtBQUVFLFFBQUEsVUFBVSxFQUFFTCxVQUFVLENBQUMsQ0FBRCxDQUZ4QjtBQUdFLFFBQUEsT0FBTyxFQUFFSSxRQUhYO0FBSUUsUUFBQSxJQUFJLEVBQUVKLFVBQVUsQ0FBQyxDQUFEO0FBSmxCLFFBSEosQ0FERjtBQWFEOzs7O0VBeENlSixLQUFLLENBQUNnQixhOztBQUFsQlgsRzs7Z0JBQUFBLEcsZUFDZTtBQUNqQjtBQUNBRSxFQUFBQSxRQUFRLEVBQUVOLFNBQVMsQ0FBQ2dCLElBRkg7O0FBR2pCOzs7O0FBSUFULEVBQUFBLFFBQVEsRUFBRVAsU0FBUyxDQUFDaUIsSUFQSDs7QUFRakI7QUFDQVQsRUFBQUEsV0FBVyxFQUFFUixTQUFTLENBQUNrQjtBQVROLEM7O0FBMENyQixlQUFlZCxHQUFmIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAb3ZlcnZpZXcgVGFnSW5wdXQgYWNjZXB0cyBtdWx0aXBsZSB2YWx1ZXMgdGhhdCBjYW4gYmUgaW5kaXZpZHVhbGx5IHJlbW92ZWRcbiAqL1xuXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnXG5pbXBvcnQgeyBCYWRnZSB9IGZyb20gJy4uLy4uL2JhZGdlcydcbmltcG9ydCB7IEljb24gfSBmcm9tICcuLi8uLi9pY29uJ1xuaW1wb3J0IHsgbWlub3JTY2FsZSB9IGZyb20gJy4uLy4uL3NjYWxlcydcblxuY2xhc3MgVGFnIGV4dGVuZHMgUmVhY3QuUHVyZUNvbXBvbmVudCB7XG4gIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgLyoqIFRoZSBiYWRnZSBjb250ZW50ICovXG4gICAgY2hpbGRyZW46IFByb3BUeXBlcy5ub2RlLFxuICAgIC8qKlxuICAgICAqIENhbGxiYWNrIGludm9rZWQgd2hlbiB0aGUgcmVtb3ZhbCBpY29uIGlzIGNsaWNrZWQuXG4gICAgICogKGV2ZW50KSA9PiB2b2lkXG4gICAgICovXG4gICAgb25SZW1vdmU6IFByb3BUeXBlcy5mdW5jLFxuICAgIC8qKiBXaGV0aGVyIG9yIG5vdCB0aGUgdGFnIGNhbiBiZSByZW1vdmVkLiAqL1xuICAgIGlzUmVtb3ZhYmxlOiBQcm9wVHlwZXMuYm9vbFxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgY2hpbGRyZW4sIG9uUmVtb3ZlLCBpc1JlbW92YWJsZSwgLi4ucHJvcHMgfSA9IHRoaXMucHJvcHNcblxuICAgIGNvbnN0IGJhZGdlU3R5bGVzID0ge1xuICAgICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXG4gICAgICBkaXNwbGF5OiAnaW5saW5lLWZsZXgnLFxuICAgICAgZm9udFdlaWdodDogNDAwLFxuICAgICAgdGV4dFRyYW5zZm9ybTogJ25vbmUnXG4gICAgfVxuXG4gICAgaWYgKGlzUmVtb3ZhYmxlKSB7XG4gICAgICBiYWRnZVN0eWxlcy5wYWRkaW5nUmlnaHQgPSBtaW5vclNjYWxlKDEpXG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgIDxCYWRnZSBpc0ludGVyYWN0aXZlIHsuLi5iYWRnZVN0eWxlc30gey4uLnByb3BzfT5cbiAgICAgICAge2NoaWxkcmVufVxuICAgICAgICB7aXNSZW1vdmFibGUgJiYgKFxuICAgICAgICAgIDxJY29uXG4gICAgICAgICAgICBpY29uPVwiY3Jvc3NcIlxuICAgICAgICAgICAgbWFyZ2luTGVmdD17bWlub3JTY2FsZSgxKX1cbiAgICAgICAgICAgIG9uQ2xpY2s9e29uUmVtb3ZlfVxuICAgICAgICAgICAgc2l6ZT17bWlub3JTY2FsZSgzKX1cbiAgICAgICAgICAvPlxuICAgICAgICApfVxuICAgICAgPC9CYWRnZT5cbiAgICApXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgVGFnXG4iXX0=