"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _isDev = _interopRequireDefault(require("./isDev"));

var _hasOwnProperty = _interopRequireDefault(require("./hasOwnProperty"));

function missingStateWarning(_ref) {
  var items = _ref.items,
      props = _ref.props,
      cb = _ref.cb;
  if (!_isDev["default"]) return;
  props.forEach(function (prop) {
    if (!(0, _hasOwnProperty["default"])(items, prop)) {
      cb(prop);
    }
  });
}

var _default = missingStateWarning;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy90aGVtZXIvc3JjL21pc3NpbmdTdGF0ZVdhcm5pbmcuanMiXSwibmFtZXMiOlsibWlzc2luZ1N0YXRlV2FybmluZyIsIml0ZW1zIiwicHJvcHMiLCJjYiIsImlzRGV2IiwiZm9yRWFjaCIsInByb3AiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBOztBQUNBOztBQUVBLFNBQVNBLG1CQUFULE9BQW1EO0FBQUEsTUFBcEJDLEtBQW9CLFFBQXBCQSxLQUFvQjtBQUFBLE1BQWJDLEtBQWEsUUFBYkEsS0FBYTtBQUFBLE1BQU5DLEVBQU0sUUFBTkEsRUFBTTtBQUNqRCxNQUFJLENBQUNDLGlCQUFMLEVBQVk7QUFDWkYsRUFBQUEsS0FBSyxDQUFDRyxPQUFOLENBQWMsVUFBQUMsSUFBSSxFQUFJO0FBQ3BCLFFBQUksQ0FBQyxnQ0FBZUwsS0FBZixFQUFzQkssSUFBdEIsQ0FBTCxFQUFrQztBQUNoQ0gsTUFBQUEsRUFBRSxDQUFDRyxJQUFELENBQUY7QUFDRDtBQUNGLEdBSkQ7QUFLRDs7ZUFFY04sbUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgaXNEZXYgZnJvbSAnLi9pc0RldidcbmltcG9ydCBoYXNPd25Qcm9wZXJ0eSBmcm9tICcuL2hhc093blByb3BlcnR5J1xuXG5mdW5jdGlvbiBtaXNzaW5nU3RhdGVXYXJuaW5nKHsgaXRlbXMsIHByb3BzLCBjYiB9KSB7XG4gIGlmICghaXNEZXYpIHJldHVyblxuICBwcm9wcy5mb3JFYWNoKHByb3AgPT4ge1xuICAgIGlmICghaGFzT3duUHJvcGVydHkoaXRlbXMsIHByb3ApKSB7XG4gICAgICBjYihwcm9wKVxuICAgIH1cbiAgfSlcbn1cblxuZXhwb3J0IGRlZmF1bHQgbWlzc2luZ1N0YXRlV2FybmluZ1xuIl19