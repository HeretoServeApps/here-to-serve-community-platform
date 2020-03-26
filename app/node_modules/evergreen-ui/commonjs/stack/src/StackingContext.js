"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _constants = require("../../constants");

/**
 * Context used to manage the layering of z-indexes of components.
 */
var StackingContext = _react["default"].createContext(_constants.StackingOrder.STACKING_CONTEXT);

var _default = StackingContext;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9zdGFjay9zcmMvU3RhY2tpbmdDb250ZXh0LmpzIl0sIm5hbWVzIjpbIlN0YWNraW5nQ29udGV4dCIsIlJlYWN0IiwiY3JlYXRlQ29udGV4dCIsIlN0YWNraW5nT3JkZXIiLCJTVEFDS0lOR19DT05URVhUIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTs7QUFDQTs7QUFFQTs7O0FBR0EsSUFBTUEsZUFBZSxHQUFHQyxrQkFBTUMsYUFBTixDQUFvQkMseUJBQWNDLGdCQUFsQyxDQUF4Qjs7ZUFDZUosZSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7IFN0YWNraW5nT3JkZXIgfSBmcm9tICcuLi8uLi9jb25zdGFudHMnXG5cbi8qKlxuICogQ29udGV4dCB1c2VkIHRvIG1hbmFnZSB0aGUgbGF5ZXJpbmcgb2Ygei1pbmRleGVzIG9mIGNvbXBvbmVudHMuXG4gKi9cbmNvbnN0IFN0YWNraW5nQ29udGV4dCA9IFJlYWN0LmNyZWF0ZUNvbnRleHQoU3RhY2tpbmdPcmRlci5TVEFDS0lOR19DT05URVhUKVxuZXhwb3J0IGRlZmF1bHQgU3RhY2tpbmdDb250ZXh0XG4iXX0=