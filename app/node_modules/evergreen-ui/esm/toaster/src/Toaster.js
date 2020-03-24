import _classCallCheck from "@babel/runtime/helpers/esm/classCallCheck";
import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

import React from 'react';
import ReactDOM from 'react-dom';
import ToastManager from './ToastManager';
var isBrowser = typeof window !== 'undefined' && typeof window.document !== 'undefined';
/**
 * The Toaster manages the interactionsb between
 * the ToasterManger and the toast API.
 */

var Toaster = function Toaster() {
  var _this = this;

  _classCallCheck(this, Toaster);

  _defineProperty(this, "_bindNotify", function (handler) {
    _this.notifyHandler = handler;
  });

  _defineProperty(this, "_bindRemove", function (handler) {
    _this.removeHandler = handler;
  });

  _defineProperty(this, "_bindGetToasts", function (handler) {
    _this.getToastsHandler = handler;
  });

  _defineProperty(this, "_bindCloseAll", function (handler) {
    _this.closeAllHandler = handler;
  });

  _defineProperty(this, "getToasts", function () {
    return _this.getToastsHandler();
  });

  _defineProperty(this, "closeAll", function () {
    return _this.closeAllHandler();
  });

  _defineProperty(this, "notify", function (title) {
    var settings = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    return _this.notifyHandler(title, _objectSpread({}, settings, {
      intent: 'none'
    }));
  });

  _defineProperty(this, "success", function (title) {
    var settings = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    return _this.notifyHandler(title, _objectSpread({}, settings, {
      intent: 'success'
    }));
  });

  _defineProperty(this, "warning", function (title) {
    var settings = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    return _this.notifyHandler(title, _objectSpread({}, settings, {
      intent: 'warning'
    }));
  });

  _defineProperty(this, "danger", function (title) {
    var settings = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    return _this.notifyHandler(title, _objectSpread({}, settings, {
      intent: 'danger'
    }));
  });

  _defineProperty(this, "remove", function (id) {
    return _this.removeHandler(id);
  });

  if (!isBrowser) return;
  var container = document.createElement('div');
  container.setAttribute('data-evergreen-toaster-container', '');
  document.body.appendChild(container);
  ReactDOM.render(React.createElement(ToastManager, {
    bindNotify: this._bindNotify,
    bindRemove: this._bindRemove,
    bindGetToasts: this._bindGetToasts,
    bindCloseAll: this._bindCloseAll
  }), container);
};

export { Toaster as default };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy90b2FzdGVyL3NyYy9Ub2FzdGVyLmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiUmVhY3RET00iLCJUb2FzdE1hbmFnZXIiLCJpc0Jyb3dzZXIiLCJ3aW5kb3ciLCJkb2N1bWVudCIsIlRvYXN0ZXIiLCJoYW5kbGVyIiwibm90aWZ5SGFuZGxlciIsInJlbW92ZUhhbmRsZXIiLCJnZXRUb2FzdHNIYW5kbGVyIiwiY2xvc2VBbGxIYW5kbGVyIiwidGl0bGUiLCJzZXR0aW5ncyIsImludGVudCIsImlkIiwiY29udGFpbmVyIiwiY3JlYXRlRWxlbWVudCIsInNldEF0dHJpYnV0ZSIsImJvZHkiLCJhcHBlbmRDaGlsZCIsInJlbmRlciIsIl9iaW5kTm90aWZ5IiwiX2JpbmRSZW1vdmUiLCJfYmluZEdldFRvYXN0cyIsIl9iaW5kQ2xvc2VBbGwiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQSxPQUFPQSxLQUFQLE1BQWtCLE9BQWxCO0FBQ0EsT0FBT0MsUUFBUCxNQUFxQixXQUFyQjtBQUNBLE9BQU9DLFlBQVAsTUFBeUIsZ0JBQXpCO0FBRUEsSUFBTUMsU0FBUyxHQUNiLE9BQU9DLE1BQVAsS0FBa0IsV0FBbEIsSUFBaUMsT0FBT0EsTUFBTSxDQUFDQyxRQUFkLEtBQTJCLFdBRDlEO0FBR0E7Ozs7O0lBSXFCQyxPLEdBQ25CLG1CQUFjO0FBQUE7O0FBQUE7O0FBQUEsdUNBa0JBLFVBQUFDLE9BQU8sRUFBSTtBQUN2QixJQUFBLEtBQUksQ0FBQ0MsYUFBTCxHQUFxQkQsT0FBckI7QUFDRCxHQXBCYTs7QUFBQSx1Q0FzQkEsVUFBQUEsT0FBTyxFQUFJO0FBQ3ZCLElBQUEsS0FBSSxDQUFDRSxhQUFMLEdBQXFCRixPQUFyQjtBQUNELEdBeEJhOztBQUFBLDBDQTBCRyxVQUFBQSxPQUFPLEVBQUk7QUFDMUIsSUFBQSxLQUFJLENBQUNHLGdCQUFMLEdBQXdCSCxPQUF4QjtBQUNELEdBNUJhOztBQUFBLHlDQThCRSxVQUFBQSxPQUFPLEVBQUk7QUFDekIsSUFBQSxLQUFJLENBQUNJLGVBQUwsR0FBdUJKLE9BQXZCO0FBQ0QsR0FoQ2E7O0FBQUEscUNBa0NGLFlBQU07QUFDaEIsV0FBTyxLQUFJLENBQUNHLGdCQUFMLEVBQVA7QUFDRCxHQXBDYTs7QUFBQSxvQ0FzQ0gsWUFBTTtBQUNmLFdBQU8sS0FBSSxDQUFDQyxlQUFMLEVBQVA7QUFDRCxHQXhDYTs7QUFBQSxrQ0EwQ0wsVUFBQ0MsS0FBRCxFQUEwQjtBQUFBLFFBQWxCQyxRQUFrQix1RUFBUCxFQUFPO0FBQ2pDLFdBQU8sS0FBSSxDQUFDTCxhQUFMLENBQW1CSSxLQUFuQixvQkFBK0JDLFFBQS9CO0FBQXlDQyxNQUFBQSxNQUFNLEVBQUU7QUFBakQsT0FBUDtBQUNELEdBNUNhOztBQUFBLG1DQThDSixVQUFDRixLQUFELEVBQTBCO0FBQUEsUUFBbEJDLFFBQWtCLHVFQUFQLEVBQU87QUFDbEMsV0FBTyxLQUFJLENBQUNMLGFBQUwsQ0FBbUJJLEtBQW5CLG9CQUErQkMsUUFBL0I7QUFBeUNDLE1BQUFBLE1BQU0sRUFBRTtBQUFqRCxPQUFQO0FBQ0QsR0FoRGE7O0FBQUEsbUNBa0RKLFVBQUNGLEtBQUQsRUFBMEI7QUFBQSxRQUFsQkMsUUFBa0IsdUVBQVAsRUFBTztBQUNsQyxXQUFPLEtBQUksQ0FBQ0wsYUFBTCxDQUFtQkksS0FBbkIsb0JBQStCQyxRQUEvQjtBQUF5Q0MsTUFBQUEsTUFBTSxFQUFFO0FBQWpELE9BQVA7QUFDRCxHQXBEYTs7QUFBQSxrQ0FzREwsVUFBQ0YsS0FBRCxFQUEwQjtBQUFBLFFBQWxCQyxRQUFrQix1RUFBUCxFQUFPO0FBQ2pDLFdBQU8sS0FBSSxDQUFDTCxhQUFMLENBQW1CSSxLQUFuQixvQkFBK0JDLFFBQS9CO0FBQXlDQyxNQUFBQSxNQUFNLEVBQUU7QUFBakQsT0FBUDtBQUNELEdBeERhOztBQUFBLGtDQTBETCxVQUFBQyxFQUFFLEVBQUk7QUFDYixXQUFPLEtBQUksQ0FBQ04sYUFBTCxDQUFtQk0sRUFBbkIsQ0FBUDtBQUNELEdBNURhOztBQUNaLE1BQUksQ0FBQ1osU0FBTCxFQUFnQjtBQUVoQixNQUFNYSxTQUFTLEdBQUdYLFFBQVEsQ0FBQ1ksYUFBVCxDQUF1QixLQUF2QixDQUFsQjtBQUNBRCxFQUFBQSxTQUFTLENBQUNFLFlBQVYsQ0FBdUIsa0NBQXZCLEVBQTJELEVBQTNEO0FBQ0FiLEVBQUFBLFFBQVEsQ0FBQ2MsSUFBVCxDQUFjQyxXQUFkLENBQTBCSixTQUExQjtBQUVBZixFQUFBQSxRQUFRLENBQUNvQixNQUFULENBQ0Usb0JBQUMsWUFBRDtBQUNFLElBQUEsVUFBVSxFQUFFLEtBQUtDLFdBRG5CO0FBRUUsSUFBQSxVQUFVLEVBQUUsS0FBS0MsV0FGbkI7QUFHRSxJQUFBLGFBQWEsRUFBRSxLQUFLQyxjQUh0QjtBQUlFLElBQUEsWUFBWSxFQUFFLEtBQUtDO0FBSnJCLElBREYsRUFPRVQsU0FQRjtBQVNELEM7O1NBakJrQlYsTyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBSZWFjdERPTSBmcm9tICdyZWFjdC1kb20nXG5pbXBvcnQgVG9hc3RNYW5hZ2VyIGZyb20gJy4vVG9hc3RNYW5hZ2VyJ1xuXG5jb25zdCBpc0Jyb3dzZXIgPVxuICB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJiB0eXBlb2Ygd2luZG93LmRvY3VtZW50ICE9PSAndW5kZWZpbmVkJ1xuXG4vKipcbiAqIFRoZSBUb2FzdGVyIG1hbmFnZXMgdGhlIGludGVyYWN0aW9uc2IgYmV0d2VlblxuICogdGhlIFRvYXN0ZXJNYW5nZXIgYW5kIHRoZSB0b2FzdCBBUEkuXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRvYXN0ZXIge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBpZiAoIWlzQnJvd3NlcikgcmV0dXJuXG5cbiAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIGNvbnRhaW5lci5zZXRBdHRyaWJ1dGUoJ2RhdGEtZXZlcmdyZWVuLXRvYXN0ZXItY29udGFpbmVyJywgJycpXG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChjb250YWluZXIpXG5cbiAgICBSZWFjdERPTS5yZW5kZXIoXG4gICAgICA8VG9hc3RNYW5hZ2VyXG4gICAgICAgIGJpbmROb3RpZnk9e3RoaXMuX2JpbmROb3RpZnl9XG4gICAgICAgIGJpbmRSZW1vdmU9e3RoaXMuX2JpbmRSZW1vdmV9XG4gICAgICAgIGJpbmRHZXRUb2FzdHM9e3RoaXMuX2JpbmRHZXRUb2FzdHN9XG4gICAgICAgIGJpbmRDbG9zZUFsbD17dGhpcy5fYmluZENsb3NlQWxsfVxuICAgICAgLz4sXG4gICAgICBjb250YWluZXJcbiAgICApXG4gIH1cblxuICBfYmluZE5vdGlmeSA9IGhhbmRsZXIgPT4ge1xuICAgIHRoaXMubm90aWZ5SGFuZGxlciA9IGhhbmRsZXJcbiAgfVxuXG4gIF9iaW5kUmVtb3ZlID0gaGFuZGxlciA9PiB7XG4gICAgdGhpcy5yZW1vdmVIYW5kbGVyID0gaGFuZGxlclxuICB9XG5cbiAgX2JpbmRHZXRUb2FzdHMgPSBoYW5kbGVyID0+IHtcbiAgICB0aGlzLmdldFRvYXN0c0hhbmRsZXIgPSBoYW5kbGVyXG4gIH1cblxuICBfYmluZENsb3NlQWxsID0gaGFuZGxlciA9PiB7XG4gICAgdGhpcy5jbG9zZUFsbEhhbmRsZXIgPSBoYW5kbGVyXG4gIH1cblxuICBnZXRUb2FzdHMgPSAoKSA9PiB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0VG9hc3RzSGFuZGxlcigpXG4gIH1cblxuICBjbG9zZUFsbCA9ICgpID0+IHtcbiAgICByZXR1cm4gdGhpcy5jbG9zZUFsbEhhbmRsZXIoKVxuICB9XG5cbiAgbm90aWZ5ID0gKHRpdGxlLCBzZXR0aW5ncyA9IHt9KSA9PiB7XG4gICAgcmV0dXJuIHRoaXMubm90aWZ5SGFuZGxlcih0aXRsZSwgeyAuLi5zZXR0aW5ncywgaW50ZW50OiAnbm9uZScgfSlcbiAgfVxuXG4gIHN1Y2Nlc3MgPSAodGl0bGUsIHNldHRpbmdzID0ge30pID0+IHtcbiAgICByZXR1cm4gdGhpcy5ub3RpZnlIYW5kbGVyKHRpdGxlLCB7IC4uLnNldHRpbmdzLCBpbnRlbnQ6ICdzdWNjZXNzJyB9KVxuICB9XG5cbiAgd2FybmluZyA9ICh0aXRsZSwgc2V0dGluZ3MgPSB7fSkgPT4ge1xuICAgIHJldHVybiB0aGlzLm5vdGlmeUhhbmRsZXIodGl0bGUsIHsgLi4uc2V0dGluZ3MsIGludGVudDogJ3dhcm5pbmcnIH0pXG4gIH1cblxuICBkYW5nZXIgPSAodGl0bGUsIHNldHRpbmdzID0ge30pID0+IHtcbiAgICByZXR1cm4gdGhpcy5ub3RpZnlIYW5kbGVyKHRpdGxlLCB7IC4uLnNldHRpbmdzLCBpbnRlbnQ6ICdkYW5nZXInIH0pXG4gIH1cblxuICByZW1vdmUgPSBpZCA9PiB7XG4gICAgcmV0dXJuIHRoaXMucmVtb3ZlSGFuZGxlcihpZClcbiAgfVxufVxuIl19