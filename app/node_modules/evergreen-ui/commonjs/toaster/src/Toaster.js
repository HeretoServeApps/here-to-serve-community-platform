"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _react = _interopRequireDefault(require("react"));

var _reactDom = _interopRequireDefault(require("react-dom"));

var _ToastManager = _interopRequireDefault(require("./ToastManager"));

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var isBrowser = typeof window !== 'undefined' && typeof window.document !== 'undefined';
/**
 * The Toaster manages the interactionsb between
 * the ToasterManger and the toast API.
 */

var Toaster = function Toaster() {
  var _this = this;

  (0, _classCallCheck2["default"])(this, Toaster);
  (0, _defineProperty2["default"])(this, "_bindNotify", function (handler) {
    _this.notifyHandler = handler;
  });
  (0, _defineProperty2["default"])(this, "_bindRemove", function (handler) {
    _this.removeHandler = handler;
  });
  (0, _defineProperty2["default"])(this, "_bindGetToasts", function (handler) {
    _this.getToastsHandler = handler;
  });
  (0, _defineProperty2["default"])(this, "_bindCloseAll", function (handler) {
    _this.closeAllHandler = handler;
  });
  (0, _defineProperty2["default"])(this, "getToasts", function () {
    return _this.getToastsHandler();
  });
  (0, _defineProperty2["default"])(this, "closeAll", function () {
    return _this.closeAllHandler();
  });
  (0, _defineProperty2["default"])(this, "notify", function (title) {
    var settings = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    return _this.notifyHandler(title, _objectSpread({}, settings, {
      intent: 'none'
    }));
  });
  (0, _defineProperty2["default"])(this, "success", function (title) {
    var settings = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    return _this.notifyHandler(title, _objectSpread({}, settings, {
      intent: 'success'
    }));
  });
  (0, _defineProperty2["default"])(this, "warning", function (title) {
    var settings = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    return _this.notifyHandler(title, _objectSpread({}, settings, {
      intent: 'warning'
    }));
  });
  (0, _defineProperty2["default"])(this, "danger", function (title) {
    var settings = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    return _this.notifyHandler(title, _objectSpread({}, settings, {
      intent: 'danger'
    }));
  });
  (0, _defineProperty2["default"])(this, "remove", function (id) {
    return _this.removeHandler(id);
  });
  if (!isBrowser) return;
  var container = document.createElement('div');
  container.setAttribute('data-evergreen-toaster-container', '');
  document.body.appendChild(container);

  _reactDom["default"].render(_react["default"].createElement(_ToastManager["default"], {
    bindNotify: this._bindNotify,
    bindRemove: this._bindRemove,
    bindGetToasts: this._bindGetToasts,
    bindCloseAll: this._bindCloseAll
  }), container);
};

exports["default"] = Toaster;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy90b2FzdGVyL3NyYy9Ub2FzdGVyLmpzIl0sIm5hbWVzIjpbImlzQnJvd3NlciIsIndpbmRvdyIsImRvY3VtZW50IiwiVG9hc3RlciIsImhhbmRsZXIiLCJub3RpZnlIYW5kbGVyIiwicmVtb3ZlSGFuZGxlciIsImdldFRvYXN0c0hhbmRsZXIiLCJjbG9zZUFsbEhhbmRsZXIiLCJ0aXRsZSIsInNldHRpbmdzIiwiaW50ZW50IiwiaWQiLCJjb250YWluZXIiLCJjcmVhdGVFbGVtZW50Iiwic2V0QXR0cmlidXRlIiwiYm9keSIsImFwcGVuZENoaWxkIiwiUmVhY3RET00iLCJyZW5kZXIiLCJfYmluZE5vdGlmeSIsIl9iaW5kUmVtb3ZlIiwiX2JpbmRHZXRUb2FzdHMiLCJfYmluZENsb3NlQWxsIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQUE7O0FBQ0E7O0FBQ0E7Ozs7OztBQUVBLElBQU1BLFNBQVMsR0FDYixPQUFPQyxNQUFQLEtBQWtCLFdBQWxCLElBQWlDLE9BQU9BLE1BQU0sQ0FBQ0MsUUFBZCxLQUEyQixXQUQ5RDtBQUdBOzs7OztJQUlxQkMsTyxHQUNuQixtQkFBYztBQUFBOztBQUFBO0FBQUEsd0RBa0JBLFVBQUFDLE9BQU8sRUFBSTtBQUN2QixJQUFBLEtBQUksQ0FBQ0MsYUFBTCxHQUFxQkQsT0FBckI7QUFDRCxHQXBCYTtBQUFBLHdEQXNCQSxVQUFBQSxPQUFPLEVBQUk7QUFDdkIsSUFBQSxLQUFJLENBQUNFLGFBQUwsR0FBcUJGLE9BQXJCO0FBQ0QsR0F4QmE7QUFBQSwyREEwQkcsVUFBQUEsT0FBTyxFQUFJO0FBQzFCLElBQUEsS0FBSSxDQUFDRyxnQkFBTCxHQUF3QkgsT0FBeEI7QUFDRCxHQTVCYTtBQUFBLDBEQThCRSxVQUFBQSxPQUFPLEVBQUk7QUFDekIsSUFBQSxLQUFJLENBQUNJLGVBQUwsR0FBdUJKLE9BQXZCO0FBQ0QsR0FoQ2E7QUFBQSxzREFrQ0YsWUFBTTtBQUNoQixXQUFPLEtBQUksQ0FBQ0csZ0JBQUwsRUFBUDtBQUNELEdBcENhO0FBQUEscURBc0NILFlBQU07QUFDZixXQUFPLEtBQUksQ0FBQ0MsZUFBTCxFQUFQO0FBQ0QsR0F4Q2E7QUFBQSxtREEwQ0wsVUFBQ0MsS0FBRCxFQUEwQjtBQUFBLFFBQWxCQyxRQUFrQix1RUFBUCxFQUFPO0FBQ2pDLFdBQU8sS0FBSSxDQUFDTCxhQUFMLENBQW1CSSxLQUFuQixvQkFBK0JDLFFBQS9CO0FBQXlDQyxNQUFBQSxNQUFNLEVBQUU7QUFBakQsT0FBUDtBQUNELEdBNUNhO0FBQUEsb0RBOENKLFVBQUNGLEtBQUQsRUFBMEI7QUFBQSxRQUFsQkMsUUFBa0IsdUVBQVAsRUFBTztBQUNsQyxXQUFPLEtBQUksQ0FBQ0wsYUFBTCxDQUFtQkksS0FBbkIsb0JBQStCQyxRQUEvQjtBQUF5Q0MsTUFBQUEsTUFBTSxFQUFFO0FBQWpELE9BQVA7QUFDRCxHQWhEYTtBQUFBLG9EQWtESixVQUFDRixLQUFELEVBQTBCO0FBQUEsUUFBbEJDLFFBQWtCLHVFQUFQLEVBQU87QUFDbEMsV0FBTyxLQUFJLENBQUNMLGFBQUwsQ0FBbUJJLEtBQW5CLG9CQUErQkMsUUFBL0I7QUFBeUNDLE1BQUFBLE1BQU0sRUFBRTtBQUFqRCxPQUFQO0FBQ0QsR0FwRGE7QUFBQSxtREFzREwsVUFBQ0YsS0FBRCxFQUEwQjtBQUFBLFFBQWxCQyxRQUFrQix1RUFBUCxFQUFPO0FBQ2pDLFdBQU8sS0FBSSxDQUFDTCxhQUFMLENBQW1CSSxLQUFuQixvQkFBK0JDLFFBQS9CO0FBQXlDQyxNQUFBQSxNQUFNLEVBQUU7QUFBakQsT0FBUDtBQUNELEdBeERhO0FBQUEsbURBMERMLFVBQUFDLEVBQUUsRUFBSTtBQUNiLFdBQU8sS0FBSSxDQUFDTixhQUFMLENBQW1CTSxFQUFuQixDQUFQO0FBQ0QsR0E1RGE7QUFDWixNQUFJLENBQUNaLFNBQUwsRUFBZ0I7QUFFaEIsTUFBTWEsU0FBUyxHQUFHWCxRQUFRLENBQUNZLGFBQVQsQ0FBdUIsS0FBdkIsQ0FBbEI7QUFDQUQsRUFBQUEsU0FBUyxDQUFDRSxZQUFWLENBQXVCLGtDQUF2QixFQUEyRCxFQUEzRDtBQUNBYixFQUFBQSxRQUFRLENBQUNjLElBQVQsQ0FBY0MsV0FBZCxDQUEwQkosU0FBMUI7O0FBRUFLLHVCQUFTQyxNQUFULENBQ0UsZ0NBQUMsd0JBQUQ7QUFDRSxJQUFBLFVBQVUsRUFBRSxLQUFLQyxXQURuQjtBQUVFLElBQUEsVUFBVSxFQUFFLEtBQUtDLFdBRm5CO0FBR0UsSUFBQSxhQUFhLEVBQUUsS0FBS0MsY0FIdEI7QUFJRSxJQUFBLFlBQVksRUFBRSxLQUFLQztBQUpyQixJQURGLEVBT0VWLFNBUEY7QUFTRCxDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFJlYWN0RE9NIGZyb20gJ3JlYWN0LWRvbSdcbmltcG9ydCBUb2FzdE1hbmFnZXIgZnJvbSAnLi9Ub2FzdE1hbmFnZXInXG5cbmNvbnN0IGlzQnJvd3NlciA9XG4gIHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmIHR5cGVvZiB3aW5kb3cuZG9jdW1lbnQgIT09ICd1bmRlZmluZWQnXG5cbi8qKlxuICogVGhlIFRvYXN0ZXIgbWFuYWdlcyB0aGUgaW50ZXJhY3Rpb25zYiBiZXR3ZWVuXG4gKiB0aGUgVG9hc3Rlck1hbmdlciBhbmQgdGhlIHRvYXN0IEFQSS5cbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVG9hc3RlciB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIGlmICghaXNCcm93c2VyKSByZXR1cm5cblxuICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgY29udGFpbmVyLnNldEF0dHJpYnV0ZSgnZGF0YS1ldmVyZ3JlZW4tdG9hc3Rlci1jb250YWluZXInLCAnJylcbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGNvbnRhaW5lcilcblxuICAgIFJlYWN0RE9NLnJlbmRlcihcbiAgICAgIDxUb2FzdE1hbmFnZXJcbiAgICAgICAgYmluZE5vdGlmeT17dGhpcy5fYmluZE5vdGlmeX1cbiAgICAgICAgYmluZFJlbW92ZT17dGhpcy5fYmluZFJlbW92ZX1cbiAgICAgICAgYmluZEdldFRvYXN0cz17dGhpcy5fYmluZEdldFRvYXN0c31cbiAgICAgICAgYmluZENsb3NlQWxsPXt0aGlzLl9iaW5kQ2xvc2VBbGx9XG4gICAgICAvPixcbiAgICAgIGNvbnRhaW5lclxuICAgIClcbiAgfVxuXG4gIF9iaW5kTm90aWZ5ID0gaGFuZGxlciA9PiB7XG4gICAgdGhpcy5ub3RpZnlIYW5kbGVyID0gaGFuZGxlclxuICB9XG5cbiAgX2JpbmRSZW1vdmUgPSBoYW5kbGVyID0+IHtcbiAgICB0aGlzLnJlbW92ZUhhbmRsZXIgPSBoYW5kbGVyXG4gIH1cblxuICBfYmluZEdldFRvYXN0cyA9IGhhbmRsZXIgPT4ge1xuICAgIHRoaXMuZ2V0VG9hc3RzSGFuZGxlciA9IGhhbmRsZXJcbiAgfVxuXG4gIF9iaW5kQ2xvc2VBbGwgPSBoYW5kbGVyID0+IHtcbiAgICB0aGlzLmNsb3NlQWxsSGFuZGxlciA9IGhhbmRsZXJcbiAgfVxuXG4gIGdldFRvYXN0cyA9ICgpID0+IHtcbiAgICByZXR1cm4gdGhpcy5nZXRUb2FzdHNIYW5kbGVyKClcbiAgfVxuXG4gIGNsb3NlQWxsID0gKCkgPT4ge1xuICAgIHJldHVybiB0aGlzLmNsb3NlQWxsSGFuZGxlcigpXG4gIH1cblxuICBub3RpZnkgPSAodGl0bGUsIHNldHRpbmdzID0ge30pID0+IHtcbiAgICByZXR1cm4gdGhpcy5ub3RpZnlIYW5kbGVyKHRpdGxlLCB7IC4uLnNldHRpbmdzLCBpbnRlbnQ6ICdub25lJyB9KVxuICB9XG5cbiAgc3VjY2VzcyA9ICh0aXRsZSwgc2V0dGluZ3MgPSB7fSkgPT4ge1xuICAgIHJldHVybiB0aGlzLm5vdGlmeUhhbmRsZXIodGl0bGUsIHsgLi4uc2V0dGluZ3MsIGludGVudDogJ3N1Y2Nlc3MnIH0pXG4gIH1cblxuICB3YXJuaW5nID0gKHRpdGxlLCBzZXR0aW5ncyA9IHt9KSA9PiB7XG4gICAgcmV0dXJuIHRoaXMubm90aWZ5SGFuZGxlcih0aXRsZSwgeyAuLi5zZXR0aW5ncywgaW50ZW50OiAnd2FybmluZycgfSlcbiAgfVxuXG4gIGRhbmdlciA9ICh0aXRsZSwgc2V0dGluZ3MgPSB7fSkgPT4ge1xuICAgIHJldHVybiB0aGlzLm5vdGlmeUhhbmRsZXIodGl0bGUsIHsgLi4uc2V0dGluZ3MsIGludGVudDogJ2RhbmdlcicgfSlcbiAgfVxuXG4gIHJlbW92ZSA9IGlkID0+IHtcbiAgICByZXR1cm4gdGhpcy5yZW1vdmVIYW5kbGVyKGlkKVxuICB9XG59XG4iXX0=