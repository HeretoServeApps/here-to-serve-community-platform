import _extends from "@babel/runtime/helpers/esm/extends";
import _classCallCheck from "@babel/runtime/helpers/esm/classCallCheck";
import _createClass from "@babel/runtime/helpers/esm/createClass";
import _possibleConstructorReturn from "@babel/runtime/helpers/esm/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/esm/getPrototypeOf";
import _inherits from "@babel/runtime/helpers/esm/inherits";
import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Pane } from '../../layers';
import { Heading } from '../../typography';
import { IconButton } from '../../buttons';
import OptionsList from './OptionsList';
import OptionShapePropType from './OptionShapePropType';

var DefaultTitleView = function DefaultTitleView(_ref) {
  var close = _ref.close,
      title = _ref.title,
      headerHeight = _ref.headerHeight;
  return React.createElement(Pane, {
    display: "flex",
    alignItems: "center",
    borderBottom: "default",
    padding: 8,
    height: headerHeight,
    boxSizing: "border-box"
  }, React.createElement(Pane, {
    flex: "1",
    display: "flex",
    alignItems: "center"
  }, React.createElement(Heading, {
    size: 400
  }, title)), React.createElement(IconButton, {
    icon: "cross",
    appearance: "minimal",
    height: 24,
    onClick: close
  }));
};

DefaultTitleView.displayName = "DefaultTitleView";
DefaultTitleView.propTypes = {
  close: PropTypes.func,
  title: PropTypes.string,
  headerHeight: PropTypes.number
};

var SelectMenuContent =
/*#__PURE__*/
function (_PureComponent) {
  _inherits(SelectMenuContent, _PureComponent);

  function SelectMenuContent() {
    _classCallCheck(this, SelectMenuContent);

    return _possibleConstructorReturn(this, _getPrototypeOf(SelectMenuContent).apply(this, arguments));
  }

  _createClass(SelectMenuContent, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          title = _this$props.title,
          width = _this$props.width,
          height = _this$props.height,
          options = _this$props.options,
          hasTitle = _this$props.hasTitle,
          hasFilter = _this$props.hasFilter,
          filterPlaceholder = _this$props.filterPlaceholder,
          filterIcon = _this$props.filterIcon,
          close = _this$props.close,
          listProps = _this$props.listProps,
          titleView = _this$props.titleView,
          detailView = _this$props.detailView,
          emptyView = _this$props.emptyView,
          isMultiSelect = _this$props.isMultiSelect,
          closeOnSelect = _this$props.closeOnSelect;
      var headerHeight = 40;
      var optionsListHeight = hasTitle ? height - headerHeight : height;
      var hasDetailView = Boolean(detailView);
      var hasEmptyView = Boolean(emptyView);
      return React.createElement(Pane, {
        display: "flex",
        height: height
      }, React.createElement(Pane, {
        width: width,
        height: height,
        display: "flex",
        flexDirection: "column",
        borderRight: hasDetailView ? 'muted' : null
      }, hasTitle && titleView({
        close: close,
        title: title,
        headerHeight: headerHeight
      }), options.length === 0 && hasEmptyView ? React.createElement(Pane, {
        height: optionsListHeight
      }, emptyView) : React.createElement(OptionsList, _extends({
        height: optionsListHeight,
        hasFilter: hasFilter,
        filterPlaceholder: filterPlaceholder,
        filterIcon: filterIcon,
        options: options,
        isMultiSelect: isMultiSelect,
        close: close,
        closeOnSelect: closeOnSelect
      }, listProps))), hasDetailView && detailView);
    }
  }]);

  return SelectMenuContent;
}(PureComponent);

SelectMenuContent.displayName = "SelectMenuContent";

_defineProperty(SelectMenuContent, "propTypes", {
  close: PropTypes.func,
  title: PropTypes.string,
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  headerHeight: PropTypes.number,
  options: PropTypes.arrayOf(OptionShapePropType),
  hasTitle: PropTypes.bool,
  hasFilter: PropTypes.bool,
  filterPlaceholder: PropTypes.string,
  filterIcon: PropTypes.string,
  listProps: PropTypes.shape(OptionsList.propTypes),

  /**
   * When true, multi select is accounted for.
   */
  isMultiSelect: PropTypes.bool,

  /*
   * When true, menu closes on option selection.
   */
  closeOnSelect: PropTypes.bool,

  /**
   * Node that is placed in the header section, above the options.
   */
  titleView: PropTypes.oneOfType([PropTypes.func, PropTypes.node]),

  /**
   * Node that is placed right next to the options.
   */
  detailView: PropTypes.node,

  /**
   * Node that is displayed instead of options list when there are no options.
   */
  emptyView: PropTypes.node
});

_defineProperty(SelectMenuContent, "defaultProps", {
  options: [],
  hasTitle: true,
  hasFilter: true,
  titleView: DefaultTitleView
});

export { SelectMenuContent as default };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9zZWxlY3QtbWVudS9zcmMvU2VsZWN0TWVudUNvbnRlbnQuanMiXSwibmFtZXMiOlsiUmVhY3QiLCJQdXJlQ29tcG9uZW50IiwiUHJvcFR5cGVzIiwiUGFuZSIsIkhlYWRpbmciLCJJY29uQnV0dG9uIiwiT3B0aW9uc0xpc3QiLCJPcHRpb25TaGFwZVByb3BUeXBlIiwiRGVmYXVsdFRpdGxlVmlldyIsImNsb3NlIiwidGl0bGUiLCJoZWFkZXJIZWlnaHQiLCJwcm9wVHlwZXMiLCJmdW5jIiwic3RyaW5nIiwibnVtYmVyIiwiU2VsZWN0TWVudUNvbnRlbnQiLCJwcm9wcyIsIndpZHRoIiwiaGVpZ2h0Iiwib3B0aW9ucyIsImhhc1RpdGxlIiwiaGFzRmlsdGVyIiwiZmlsdGVyUGxhY2Vob2xkZXIiLCJmaWx0ZXJJY29uIiwibGlzdFByb3BzIiwidGl0bGVWaWV3IiwiZGV0YWlsVmlldyIsImVtcHR5VmlldyIsImlzTXVsdGlTZWxlY3QiLCJjbG9zZU9uU2VsZWN0Iiwib3B0aW9uc0xpc3RIZWlnaHQiLCJoYXNEZXRhaWxWaWV3IiwiQm9vbGVhbiIsImhhc0VtcHR5VmlldyIsImxlbmd0aCIsIm9uZU9mVHlwZSIsImFycmF5T2YiLCJib29sIiwic2hhcGUiLCJub2RlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUEsT0FBT0EsS0FBUCxJQUFnQkMsYUFBaEIsUUFBcUMsT0FBckM7QUFDQSxPQUFPQyxTQUFQLE1BQXNCLFlBQXRCO0FBQ0EsU0FBU0MsSUFBVCxRQUFxQixjQUFyQjtBQUNBLFNBQVNDLE9BQVQsUUFBd0Isa0JBQXhCO0FBQ0EsU0FBU0MsVUFBVCxRQUEyQixlQUEzQjtBQUNBLE9BQU9DLFdBQVAsTUFBd0IsZUFBeEI7QUFDQSxPQUFPQyxtQkFBUCxNQUFnQyx1QkFBaEM7O0FBRUEsSUFBTUMsZ0JBQWdCLEdBQUcsU0FBbkJBLGdCQUFtQjtBQUFBLE1BQUdDLEtBQUgsUUFBR0EsS0FBSDtBQUFBLE1BQVVDLEtBQVYsUUFBVUEs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VyxFQUFBQSxTQUFTLEVBQUV2QixTQUFTLENBQUNxQyxLQUFWLENBQWdCakMsV0FBVyxDQUFDTSxTQUE1QixDQVhNOztBQWFqQjs7O0FBR0FpQixFQUFBQSxhQUFhLEVBQUUzQixTQUFTLENBQUNvQyxJQWhCUjs7QUFrQmpCOzs7QUFHQVIsRUFBQUEsYUFBYSxFQUFFNUIsU0FBUyxDQUFDb0MsSUFyQlI7O0FBdUJqQjs7O0FBR0FaLEVBQUFBLFNBQVMsRUFBRXhCLFNBQVMsQ0FBQ2tDLFNBQVYsQ0FBb0IsQ0FBQ2xDLFNBQVMsQ0FBQ1csSUFBWCxFQUFpQlgsU0FBUyxDQUFDc0MsSUFBM0IsQ0FBcEIsQ0ExQk07O0FBNEJqQjs7O0FBR0FiLEVBQUFBLFVBQVUsRUFBRXpCLFNBQVMsQ0FBQ3NDLElBL0JMOztBQWlDakI7OztBQUdBWixFQUFBQSxTQUFTLEVBQUUxQixTQUFTLENBQUNzQztBQXBDSixDOztnQkFEQXhCLGlCLGtCQXdDRztBQUNwQkksRUFBQUEsT0FBTyxFQUFFLEVBRFc7QUFFcEJDLEVBQUFBLFFBQVEsRUFBRSxJQUZVO0FBR3BCQyxFQUFBQSxTQUFTLEVBQUUsSUFIUztBQUlwQkksRUFBQUEsU0FBUyxFQUFFbEI7QUFKUyxDOztTQXhDSFEsaUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgUHVyZUNvbXBvbmVudCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJ1xuaW1wb3J0IHsgUGFuZSB9IGZyb20gJy4uLy4uL2xheWVycydcbmltcG9ydCB7IEhlYWRpbmcgfSBmcm9tICcuLi8uLi90eXBvZ3JhcGh5J1xuaW1wb3J0IHsgSWNvbkJ1dHRvbiB9IGZyb20gJy4uLy4uL2J1dHRvbnMnXG5pbXBvcnQgT3B0aW9uc0xpc3QgZnJvbSAnLi9PcHRpb25zTGlzdCdcbmltcG9ydCBPcHRpb25TaGFwZVByb3BUeXBlIGZyb20gJy4vT3B0aW9uU2hhcGVQcm9wVHlwZSdcblxuY29uc3QgRGVmYXVsdFRpdGxlVmlldyA9ICh7IGNsb3NlLCB0aXRsZSwgaGVhZGVySGVpZ2h0IH0pID0+IChcbiAgPFBhbmVcbiAgICBkaXNwbGF5PVwiZmxleFwiXG4gICAgYWxpZ25JdGVtcz1cImNlbnRlclwiXG4gICAgYm9yZGVyQm90dG9tPVwiZGVmYXVsdFwiXG4gICAgcGFkZGluZz17OH1cbiAgICBoZWlnaHQ9e2hlYWRlckhlaWdodH1cbiAgICBib3hTaXppbmc9XCJib3JkZXItYm94XCJcbiAgPlxuICAgIDxQYW5lIGZsZXg9XCIxXCIgZGlzcGxheT1cImZsZXhcIiBhbGlnbkl0ZW1zPVwiY2VudGVyXCI+XG4gICAgICA8SGVhZGluZyBzaXplPXs0MDB9Pnt0aXRsZX08L0hlYWRpbmc+XG4gICAgPC9QYW5lPlxuICAgIDxJY29uQnV0dG9uIGljb249XCJjcm9zc1wiIGFwcGVhcmFuY2U9XCJtaW5pbWFsXCIgaGVpZ2h0PXsyNH0gb25DbGljaz17Y2xvc2V9IC8+XG4gIDwvUGFuZT5cbilcblxuRGVmYXVsdFRpdGxlVmlldy5wcm9wVHlwZXMgPSB7XG4gIGNsb3NlOiBQcm9wVHlwZXMuZnVuYyxcbiAgdGl0bGU6IFByb3BUeXBlcy5zdHJpbmcsXG4gIGhlYWRlckhlaWdodDogUHJvcFR5cGVzLm51bWJlclxufVxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2VsZWN0TWVudUNvbnRlbnQgZXh0ZW5kcyBQdXJlQ29tcG9uZW50IHtcbiAgc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgICBjbG9zZTogUHJvcFR5cGVzLmZ1bmMsXG4gICAgdGl0bGU6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgd2lkdGg6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5zdHJpbmcsIFByb3BUeXBlcy5udW1iZXJdKSxcbiAgICBoZWlnaHQ6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5zdHJpbmcsIFByb3BUeXBlcy5udW1iZXJdKSxcbiAgICBoZWFkZXJIZWlnaHQ6IFByb3BUeXBlcy5udW1iZXIsXG4gICAgb3B0aW9uczogUHJvcFR5cGVzLmFycmF5T2YoT3B0aW9uU2hhcGVQcm9wVHlwZSksXG4gICAgaGFzVGl0bGU6IFByb3BUeXBlcy5ib29sLFxuICAgIGhhc0ZpbHRlcjogUHJvcFR5cGVzLmJvb2wsXG4gICAgZmlsdGVyUGxhY2Vob2xkZXI6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgZmlsdGVySWNvbjogUHJvcFR5cGVzLnN0cmluZyxcbiAgICBsaXN0UHJvcHM6IFByb3BUeXBlcy5zaGFwZShPcHRpb25zTGlzdC5wcm9wVHlwZXMpLFxuXG4gICAgLyoqXG4gICAgICogV2hlbiB0cnVlLCBtdWx0aSBzZWxlY3QgaXMgYWNjb3VudGVkIGZvci5cbiAgICAgKi9cbiAgICBpc011bHRpU2VsZWN0OiBQcm9wVHlwZXMuYm9vbCxcblxuICAgIC8qXG4gICAgICogV2hlbiB0cnVlLCBtZW51IGNsb3NlcyBvbiBvcHRpb24gc2VsZWN0aW9uLlxuICAgICAqL1xuICAgIGNsb3NlT25TZWxlY3Q6IFByb3BUeXBlcy5ib29sLFxuXG4gICAgLyoqXG4gICAgICogTm9kZSB0aGF0IGlzIHBsYWNlZCBpbiB0aGUgaGVhZGVyIHNlY3Rpb24sIGFib3ZlIHRoZSBvcHRpb25zLlxuICAgICAqL1xuICAgIHRpdGxlVmlldzogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLmZ1bmMsIFByb3BUeXBlcy5ub2RlXSksXG5cbiAgICAvKipcbiAgICAgKiBOb2RlIHRoYXQgaXMgcGxhY2VkIHJpZ2h0IG5leHQgdG8gdGhlIG9wdGlvbnMuXG4gICAgICovXG4gICAgZGV0YWlsVmlldzogUHJvcFR5cGVzLm5vZGUsXG5cbiAgICAvKipcbiAgICAgKiBOb2RlIHRoYXQgaXMgZGlzcGxheWVkIGluc3RlYWQgb2Ygb3B0aW9ucyBsaXN0IHdoZW4gdGhlcmUgYXJlIG5vIG9wdGlvbnMuXG4gICAgICovXG4gICAgZW1wdHlWaWV3OiBQcm9wVHlwZXMubm9kZVxuICB9XG5cbiAgc3RhdGljIGRlZmF1bHRQcm9wcyA9IHtcbiAgICBvcHRpb25zOiBbXSxcbiAgICBoYXNUaXRsZTogdHJ1ZSxcbiAgICBoYXNGaWx0ZXI6IHRydWUsXG4gICAgdGl0bGVWaWV3OiBEZWZhdWx0VGl0bGVWaWV3XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3Qge1xuICAgICAgdGl0bGUsXG4gICAgICB3aWR0aCxcbiAgICAgIGhlaWdodCxcbiAgICAgIG9wdGlvbnMsXG4gICAgICBoYXNUaXRsZSxcbiAgICAgIGhhc0ZpbHRlcixcbiAgICAgIGZpbHRlclBsYWNlaG9sZGVyLFxuICAgICAgZmlsdGVySWNvbixcbiAgICAgIGNsb3NlLFxuICAgICAgbGlzdFByb3BzLFxuICAgICAgdGl0bGVWaWV3LFxuICAgICAgZGV0YWlsVmlldyxcbiAgICAgIGVtcHR5VmlldyxcbiAgICAgIGlzTXVsdGlTZWxlY3QsXG4gICAgICBjbG9zZU9uU2VsZWN0XG4gICAgfSA9IHRoaXMucHJvcHNcblxuICAgIGNvbnN0IGhlYWRlckhlaWdodCA9IDQwXG4gICAgY29uc3Qgb3B0aW9uc0xpc3RIZWlnaHQgPSBoYXNUaXRsZSA/IGhlaWdodCAtIGhlYWRlckhlaWdodCA6IGhlaWdodFxuXG4gICAgY29uc3QgaGFzRGV0YWlsVmlldyA9IEJvb2xlYW4oZGV0YWlsVmlldylcbiAgICBjb25zdCBoYXNFbXB0eVZpZXcgPSBCb29sZWFuKGVtcHR5VmlldylcblxuICAgIHJldHVybiAoXG4gICAgICA8UGFuZSBkaXNwbGF5PVwiZmxleFwiIGhlaWdodD17aGVpZ2h0fT5cbiAgICAgICAgPFBhbmVcbiAgICAgICAgICB3aWR0aD17d2lkdGh9XG4gICAgICAgICAgaGVpZ2h0PXtoZWlnaHR9XG4gICAgICAgICAgZGlzcGxheT1cImZsZXhcIlxuICAgICAgICAgIGZsZXhEaXJlY3Rpb249XCJjb2x1bW5cIlxuICAgICAgICAgIGJvcmRlclJpZ2h0PXtoYXNEZXRhaWxWaWV3ID8gJ211dGVkJyA6IG51bGx9XG4gICAgICAgID5cbiAgICAgICAgICB7aGFzVGl0bGUgJiYgdGl0bGVWaWV3KHsgY2xvc2UsIHRpdGxlLCBoZWFkZXJIZWlnaHQgfSl9XG4gICAgICAgICAge29wdGlvbnMubGVuZ3RoID09PSAwICYmIGhhc0VtcHR5VmlldyA/IChcbiAgICAgICAgICAgIDxQYW5lIGhlaWdodD17b3B0aW9uc0xpc3RIZWlnaHR9PntlbXB0eVZpZXd9PC9QYW5lPlxuICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICA8T3B0aW9uc0xpc3RcbiAgICAgICAgICAgICAgaGVpZ2h0PXtvcHRpb25zTGlzdEhlaWdodH1cbiAgICAgICAgICAgICAgaGFzRmlsdGVyPXtoYXNGaWx0ZXJ9XG4gICAgICAgICAgICAgIGZpbHRlclBsYWNlaG9sZGVyPXtmaWx0ZXJQbGFjZWhvbGRlcn1cbiAgICAgICAgICAgICAgZmlsdGVySWNvbj17ZmlsdGVySWNvbn1cbiAgICAgICAgICAgICAgb3B0aW9ucz17b3B0aW9uc31cbiAgICAgICAgICAgICAgaXNNdWx0aVNlbGVjdD17aXNNdWx0aVNlbGVjdH1cbiAgICAgICAgICAgICAgY2xvc2U9e2Nsb3NlfVxuICAgICAgICAgICAgICBjbG9zZU9uU2VsZWN0PXtjbG9zZU9uU2VsZWN0fVxuICAgICAgICAgICAgICB7Li4ubGlzdFByb3BzfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICApfVxuICAgICAgICA8L1BhbmU+XG4gICAgICAgIHtoYXNEZXRhaWxWaWV3ICYmIGRldGFpbFZpZXd9XG4gICAgICA8L1BhbmU+XG4gICAgKVxuICB9XG59XG4iXX0=