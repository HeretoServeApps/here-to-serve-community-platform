"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TableRowConsumer = exports.TableRowProvider = void 0;

var _react = _interopRequireDefault(require("react"));

/**
 * Use React 16.3+ createContext API.
 */
var _React$createContext = _react["default"].createContext(),
    TableRowProvider = _React$createContext.Provider,
    TableRowConsumer = _React$createContext.Consumer;

exports.TableRowConsumer = TableRowConsumer;
exports.TableRowProvider = TableRowProvider;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy90YWJsZS9zcmMvVGFibGVSb3dDb250ZXh0LmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiY3JlYXRlQ29udGV4dCIsIlRhYmxlUm93UHJvdmlkZXIiLCJQcm92aWRlciIsIlRhYmxlUm93Q29uc3VtZXIiLCJDb25zdW1lciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7O0FBRUE7OzsyQkFNSUEsa0JBQU1DLGFBQU4sRTtJQUZRQyxnQix3QkFBVkMsUTtJQUNVQyxnQix3QkFBVkMsUSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcblxuLyoqXG4gKiBVc2UgUmVhY3QgMTYuMysgY3JlYXRlQ29udGV4dCBBUEkuXG4gKi9cbmNvbnN0IHtcbiAgUHJvdmlkZXI6IFRhYmxlUm93UHJvdmlkZXIsXG4gIENvbnN1bWVyOiBUYWJsZVJvd0NvbnN1bWVyXG59ID0gUmVhY3QuY3JlYXRlQ29udGV4dCgpXG5cbmV4cG9ydCB7IFRhYmxlUm93UHJvdmlkZXIsIFRhYmxlUm93Q29uc3VtZXIgfVxuIl19