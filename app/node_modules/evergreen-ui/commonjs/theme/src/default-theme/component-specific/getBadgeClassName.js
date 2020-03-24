"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _themer = require("../../../../themer");

var _memoizeClassName = _interopRequireDefault(require("../utils/memoizeClassName"));

var interactiveAppearance = _themer.Themer.createBadgeAppearance({
  base: {},
  hover: {
    opacity: 0.8
  }
});
/**
 * Get the appearance of an interactive `Badge`.
 * @param {string} appearance - the appearance name
 * @return {string} the appearance object.
 */


var getBadgeAppearance = function getBadgeAppearance(appearance) {
  switch (appearance) {
    case 'interactive':
      return interactiveAppearance;

    default:
      return undefined;
  }
};
/**
 * Get the className of a `Badge`.
 * @param {string} appearance - the appearance name
 * @return {string} the appearance class name.
 */


var _default = (0, _memoizeClassName["default"])(getBadgeAppearance);

exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy90aGVtZS9zcmMvZGVmYXVsdC10aGVtZS9jb21wb25lbnQtc3BlY2lmaWMvZ2V0QmFkZ2VDbGFzc05hbWUuanMiXSwibmFtZXMiOlsiaW50ZXJhY3RpdmVBcHBlYXJhbmNlIiwiVGhlbWVyIiwiY3JlYXRlQmFkZ2VBcHBlYXJhbmNlIiwiYmFzZSIsImhvdmVyIiwib3BhY2l0eSIsImdldEJhZGdlQXBwZWFyYW5jZSIsImFwcGVhcmFuY2UiLCJ1bmRlZmluZWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBOztBQUNBOztBQUVBLElBQU1BLHFCQUFxQixHQUFHQyxlQUFPQyxxQkFBUCxDQUE2QjtBQUN6REMsRUFBQUEsSUFBSSxFQUFFLEVBRG1EO0FBRXpEQyxFQUFBQSxLQUFLLEVBQUU7QUFDTEMsSUFBQUEsT0FBTyxFQUFFO0FBREo7QUFGa0QsQ0FBN0IsQ0FBOUI7QUFPQTs7Ozs7OztBQUtBLElBQU1DLGtCQUFrQixHQUFHLFNBQXJCQSxrQkFBcUIsQ0FBQUMsVUFBVSxFQUFJO0FBQ3ZDLFVBQVFBLFVBQVI7QUFDRSxTQUFLLGFBQUw7QUFDRSxhQUFPUCxxQkFBUDs7QUFDRjtBQUNFLGFBQU9RLFNBQVA7QUFKSjtBQU1ELENBUEQ7QUFTQTs7Ozs7OztlQUtlLGtDQUFpQkYsa0JBQWpCLEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBUaGVtZXIgfSBmcm9tICcuLi8uLi8uLi8uLi90aGVtZXInXG5pbXBvcnQgbWVtb2l6ZUNsYXNzTmFtZSBmcm9tICcuLi91dGlscy9tZW1vaXplQ2xhc3NOYW1lJ1xuXG5jb25zdCBpbnRlcmFjdGl2ZUFwcGVhcmFuY2UgPSBUaGVtZXIuY3JlYXRlQmFkZ2VBcHBlYXJhbmNlKHtcbiAgYmFzZToge30sXG4gIGhvdmVyOiB7XG4gICAgb3BhY2l0eTogMC44XG4gIH1cbn0pXG5cbi8qKlxuICogR2V0IHRoZSBhcHBlYXJhbmNlIG9mIGFuIGludGVyYWN0aXZlIGBCYWRnZWAuXG4gKiBAcGFyYW0ge3N0cmluZ30gYXBwZWFyYW5jZSAtIHRoZSBhcHBlYXJhbmNlIG5hbWVcbiAqIEByZXR1cm4ge3N0cmluZ30gdGhlIGFwcGVhcmFuY2Ugb2JqZWN0LlxuICovXG5jb25zdCBnZXRCYWRnZUFwcGVhcmFuY2UgPSBhcHBlYXJhbmNlID0+IHtcbiAgc3dpdGNoIChhcHBlYXJhbmNlKSB7XG4gICAgY2FzZSAnaW50ZXJhY3RpdmUnOlxuICAgICAgcmV0dXJuIGludGVyYWN0aXZlQXBwZWFyYW5jZVxuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gdW5kZWZpbmVkXG4gIH1cbn1cblxuLyoqXG4gKiBHZXQgdGhlIGNsYXNzTmFtZSBvZiBhIGBCYWRnZWAuXG4gKiBAcGFyYW0ge3N0cmluZ30gYXBwZWFyYW5jZSAtIHRoZSBhcHBlYXJhbmNlIG5hbWVcbiAqIEByZXR1cm4ge3N0cmluZ30gdGhlIGFwcGVhcmFuY2UgY2xhc3MgbmFtZS5cbiAqL1xuZXhwb3J0IGRlZmF1bHQgbWVtb2l6ZUNsYXNzTmFtZShnZXRCYWRnZUFwcGVhcmFuY2UpXG4iXX0=