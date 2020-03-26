"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _fills = _interopRequireDefault(require("../foundational-styles/fills"));

/**
 * @param {boolean} isSolid
 * @param {string} color — automatic or actual color
 * @param {number} hashValue
 * @return {Object} { color, backgroundColor }
 */
var getAvatarProps = function getAvatarProps(_ref) {
  var isSolid = _ref.isSolid,
      color = _ref.color,
      hashValue = _ref.hashValue;
  var appearances = _fills["default"][isSolid ? 'solid' : 'subtle'];

  if (color === 'automatic') {
    var keys = Object.keys(appearances);
    var key = keys[hashValue % keys.length];
    return appearances[key];
  }

  return appearances[color];
};

var _default = getAvatarProps;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy90aGVtZS9zcmMvZGVmYXVsdC10aGVtZS9jb21wb25lbnQtc3BlY2lmaWMvZ2V0QXZhdGFyUHJvcHMuanMiXSwibmFtZXMiOlsiZ2V0QXZhdGFyUHJvcHMiLCJpc1NvbGlkIiwiY29sb3IiLCJoYXNoVmFsdWUiLCJhcHBlYXJhbmNlcyIsImZpbGxzIiwia2V5cyIsIk9iamVjdCIsImtleSIsImxlbmd0aCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7O0FBRUE7Ozs7OztBQU1BLElBQU1BLGNBQWMsR0FBRyxTQUFqQkEsY0FBaUIsT0FBbUM7QUFBQSxNQUFoQ0MsT0FBZ0MsUUFBaENBLE9BQWdDO0FBQUEsTUFBdkJDLEtBQXVCLFFBQXZCQSxLQUF1QjtBQUFBLE1BQWhCQyxTQUFnQixRQUFoQkEsU0FBZ0I7QUFDeEQsTUFBTUMsV0FBVyxHQUFHQyxrQkFBTUosT0FBTyxHQUFHLE9BQUgsR0FBYSxRQUExQixDQUFwQjs7QUFFQSxNQUFJQyxLQUFLLEtBQUssV0FBZCxFQUEyQjtBQUN6QixRQUFNSSxJQUFJLEdBQUdDLE1BQU0sQ0FBQ0QsSUFBUCxDQUFZRixXQUFaLENBQWI7QUFDQSxRQUFNSSxHQUFHLEdBQUdGLElBQUksQ0FBQ0gsU0FBUyxHQUFHRyxJQUFJLENBQUNHLE1BQWxCLENBQWhCO0FBQ0EsV0FBT0wsV0FBVyxDQUFDSSxHQUFELENBQWxCO0FBQ0Q7O0FBRUQsU0FBT0osV0FBVyxDQUFDRixLQUFELENBQWxCO0FBQ0QsQ0FWRDs7ZUFZZUYsYyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBmaWxscyBmcm9tICcuLi9mb3VuZGF0aW9uYWwtc3R5bGVzL2ZpbGxzJ1xuXG4vKipcbiAqIEBwYXJhbSB7Ym9vbGVhbn0gaXNTb2xpZFxuICogQHBhcmFtIHtzdHJpbmd9IGNvbG9yIOKAlCBhdXRvbWF0aWMgb3IgYWN0dWFsIGNvbG9yXG4gKiBAcGFyYW0ge251bWJlcn0gaGFzaFZhbHVlXG4gKiBAcmV0dXJuIHtPYmplY3R9IHsgY29sb3IsIGJhY2tncm91bmRDb2xvciB9XG4gKi9cbmNvbnN0IGdldEF2YXRhclByb3BzID0gKHsgaXNTb2xpZCwgY29sb3IsIGhhc2hWYWx1ZSB9KSA9PiB7XG4gIGNvbnN0IGFwcGVhcmFuY2VzID0gZmlsbHNbaXNTb2xpZCA/ICdzb2xpZCcgOiAnc3VidGxlJ11cblxuICBpZiAoY29sb3IgPT09ICdhdXRvbWF0aWMnKSB7XG4gICAgY29uc3Qga2V5cyA9IE9iamVjdC5rZXlzKGFwcGVhcmFuY2VzKVxuICAgIGNvbnN0IGtleSA9IGtleXNbaGFzaFZhbHVlICUga2V5cy5sZW5ndGhdXG4gICAgcmV0dXJuIGFwcGVhcmFuY2VzW2tleV1cbiAgfVxuXG4gIHJldHVybiBhcHBlYXJhbmNlc1tjb2xvcl1cbn1cblxuZXhwb3J0IGRlZmF1bHQgZ2V0QXZhdGFyUHJvcHNcbiJdfQ==