import _classCallCheck from "@babel/runtime/helpers/esm/classCallCheck";
import _createClass from "@babel/runtime/helpers/esm/createClass";
import _possibleConstructorReturn from "@babel/runtime/helpers/esm/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/esm/getPrototypeOf";
import _assertThisInitialized from "@babel/runtime/helpers/esm/assertThisInitialized";
import _inherits from "@babel/runtime/helpers/esm/inherits";
import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

var ScrollbarSize =
/*#__PURE__*/
function (_PureComponent) {
  _inherits(ScrollbarSize, _PureComponent);

  function ScrollbarSize() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, ScrollbarSize);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(ScrollbarSize)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "state", {
      innerWidth: null,
      outerWidth: null
    });

    _defineProperty(_assertThisInitialized(_this), "handleOuterRef", function (ref) {
      _this.outerRef = ref;
    });

    _defineProperty(_assertThisInitialized(_this), "handleInnerRef", function (ref) {
      _this.innerRef = ref;
    });

    return _this;
  }

  _createClass(ScrollbarSize, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var innerWidth = this.innerRef.getBoundingClientRect().width;
      var outerWidth = this.outerRef.getBoundingClientRect().width;
      this.setState({
        innerWidth: innerWidth,
        outerWidth: outerWidth
      });
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      if (this.state.innerWidth && this.state.outerWidth) {
        this.props.handleScrollbarSize(this.state.outerWidth - this.state.innerWidth);
      }
    }
  }, {
    key: "render",
    value: function render() {
      return React.createElement("div", {
        ref: this.handleOuterRef,
        "aria-hidden": true,
        style: {
          position: 'fixed',
          top: -500,
          left: -500,
          width: 100,
          overflowY: 'scroll'
        }
      }, React.createElement("div", {
        ref: this.handleInnerRef
      }));
    }
  }]);

  return ScrollbarSize;
}(PureComponent);

ScrollbarSize.displayName = "ScrollbarSize";

_defineProperty(ScrollbarSize, "propTypes", {
  /**
   * Returns the size of the scrollbar by creating a hidden fixed div.
   */
  handleScrollbarSize: PropTypes.func
});

_defineProperty(ScrollbarSize, "defaultProps", {
  handleScrollbarSize: function handleScrollbarSize() {}
});

export { ScrollbarSize as default };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy90YWJsZS9zcmMvU2Nyb2xsYmFyU2l6ZS5qcyJdLCJuYW1lcyI6WyJSZWFjdCIsIlB1cmVDb21wb25lbnQiLCJQcm9wVHlwZXMiLCJTY3JvbGxiYXJTaXplIiwiaW5uZXJXaWR0aCIsIm91dGVyV2lkdGgiLCJyZWYiLCJvdXRlclJlZiIsImlubmVyUmVmIiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0Iiwid2lkdGgiLCJzZXRTdGF0ZSIsInN0YXRlIiwicHJvcHMiLCJoYW5kbGVTY3JvbGxiYXJTaXplIiwiaGFuZGxlT3V0ZXJSZWYiLCJwb3NpdGlvbiIsInRvcCIsImxlZnQiLCJvdmVyZmxvd1kiLCJoYW5kbGVJbm5lclJlZiIsImZ1bmMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQSxPQUFPQSxLQUFQLElBQWdCQyxhQUFoQixRQUFxQyxPQUFyQztBQUNBLE9BQU9DLFNBQVAsTUFBc0IsWUFBdEI7O0lBRXFCQyxhOzs7Ozs7Ozs7Ozs7Ozs7Ozs7NERBWVg7QUFDTkMsTUFBQUEsVUFBVSxFQUFFLElBRE47QUFFTkMsTUFBQUEsVUFBVSxFQUFFO0FBRk4sSzs7cUVBc0JTLFVBQUFDLEdBQUcsRUFBSTtBQUN0QixZQUFLQyxRQUFMLEdBQWdCRCxHQUFoQjtBQUNELEs7O3FFQUVnQixVQUFBQSxHQUFHLEVBQUk7QUFDdEIsWUFBS0UsUUFBTCxHQUFnQkYsR0FBaEI7QUFDRCxLOzs7Ozs7O3dDQXZCbUI7QUFDbEIsVUFBTUYsVUFBVSxHQUFHLEtBQUtJLFFBQUwsQ0FBY0MscUJBQWQsR0FBc0NDLEtBQXpEO0FBQ0EsVUFBTUwsVUFBVSxHQUFHLEtBQUtFLFFBQUwsQ0FBY0UscUJBQWQsR0FBc0NDLEtBQXpEO0FBQ0EsV0FBS0MsUUFBTCxDQUFjO0FBQ1pQLFFBQUFBLFVBQVUsRUFBVkEsVUFEWTtBQUVaQyxRQUFBQSxVQUFVLEVBQVZBO0FBRlksT0FBZDtBQUlEOzs7eUNBRW9CO0FBQ25CLFVBQUksS0FBS08sS0FBTCxDQUFXUixVQUFYLElBQXlCLEtBQUtRLEtBQUwsQ0FBV1AsVUFBeEMsRUFBb0Q7QUFDbEQsYUFBS1EsS0FBTCxDQUFXQyxtQkFBWCxDQUNFLEtBQUtGLEtBQUwsQ0FBV1AsVUFBWCxHQUF3QixLQUFLTyxLQUFMLENBQVdSLFVBRHJDO0FBR0Q7QUFDRjs7OzZCQVVRO0FBQ1AsYUFDRTtBQUNFLFFBQUEsR0FBRyxFQUFFLEtBQUtXLGNBRFo7QUFFRSwyQkFGRjtBQUdFLFFBQUEsS0FBSyxFQUFFO0FBQ0xDLFVBQUFBLFFBQVEsRUFBRSxPQURMO0FBRUxDLFVBQUFBLEdBQUcsRUFBRSxDQUFDLEdBRkQ7QUFHTEMsVUFBQUEsSUFBSSxFQUFFLENBQUMsR0FIRjtBQUlMUixVQUFBQSxLQUFLLEVBQUUsR0FKRjtBQUtMUyxVQUFBQSxTQUFTLEVBQUU7QUFMTjtBQUhULFNBV0U7QUFBSyxRQUFBLEdBQUcsRUFBRSxLQUFLQztBQUFmLFFBWEYsQ0FERjtBQWVEOzs7O0VBMUR3Q25CLGE7O0FBQXRCRSxhOztnQkFBQUEsYSxlQUNBO0FBQ2pCOzs7QUFHQVcsRUFBQUEsbUJBQW1CLEVBQUVaLFNBQVMsQ0FBQ21CO0FBSmQsQzs7Z0JBREFsQixhLGtCQVFHO0FBQ3BCVyxFQUFBQSxtQkFBbUIsRUFBRSwrQkFBTSxDQUFFO0FBRFQsQzs7U0FSSFgsYSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBQdXJlQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNjcm9sbGJhclNpemUgZXh0ZW5kcyBQdXJlQ29tcG9uZW50IHtcbiAgc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIHRoZSBzaXplIG9mIHRoZSBzY3JvbGxiYXIgYnkgY3JlYXRpbmcgYSBoaWRkZW4gZml4ZWQgZGl2LlxuICAgICAqL1xuICAgIGhhbmRsZVNjcm9sbGJhclNpemU6IFByb3BUeXBlcy5mdW5jXG4gIH1cblxuICBzdGF0aWMgZGVmYXVsdFByb3BzID0ge1xuICAgIGhhbmRsZVNjcm9sbGJhclNpemU6ICgpID0+IHt9XG4gIH1cblxuICBzdGF0ZSA9IHtcbiAgICBpbm5lcldpZHRoOiBudWxsLFxuICAgIG91dGVyV2lkdGg6IG51bGxcbiAgfVxuXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIGNvbnN0IGlubmVyV2lkdGggPSB0aGlzLmlubmVyUmVmLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLndpZHRoXG4gICAgY29uc3Qgb3V0ZXJXaWR0aCA9IHRoaXMub3V0ZXJSZWYuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkud2lkdGhcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIGlubmVyV2lkdGgsXG4gICAgICBvdXRlcldpZHRoXG4gICAgfSlcbiAgfVxuXG4gIGNvbXBvbmVudERpZFVwZGF0ZSgpIHtcbiAgICBpZiAodGhpcy5zdGF0ZS5pbm5lcldpZHRoICYmIHRoaXMuc3RhdGUub3V0ZXJXaWR0aCkge1xuICAgICAgdGhpcy5wcm9wcy5oYW5kbGVTY3JvbGxiYXJTaXplKFxuICAgICAgICB0aGlzLnN0YXRlLm91dGVyV2lkdGggLSB0aGlzLnN0YXRlLmlubmVyV2lkdGhcbiAgICAgIClcbiAgICB9XG4gIH1cblxuICBoYW5kbGVPdXRlclJlZiA9IHJlZiA9PiB7XG4gICAgdGhpcy5vdXRlclJlZiA9IHJlZlxuICB9XG5cbiAgaGFuZGxlSW5uZXJSZWYgPSByZWYgPT4ge1xuICAgIHRoaXMuaW5uZXJSZWYgPSByZWZcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdlxuICAgICAgICByZWY9e3RoaXMuaGFuZGxlT3V0ZXJSZWZ9XG4gICAgICAgIGFyaWEtaGlkZGVuXG4gICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgcG9zaXRpb246ICdmaXhlZCcsXG4gICAgICAgICAgdG9wOiAtNTAwLFxuICAgICAgICAgIGxlZnQ6IC01MDAsXG4gICAgICAgICAgd2lkdGg6IDEwMCxcbiAgICAgICAgICBvdmVyZmxvd1k6ICdzY3JvbGwnXG4gICAgICAgIH19XG4gICAgICA+XG4gICAgICAgIDxkaXYgcmVmPXt0aGlzLmhhbmRsZUlubmVyUmVmfSAvPlxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG59XG4iXX0=