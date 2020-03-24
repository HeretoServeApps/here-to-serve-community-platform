"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.hydrate = hydrate;
exports["default"] = autoHydrate;

var _uiBox = require("ui-box");

var _glamor = require("glamor");

/**
 * You shouldn't have to manually run this.
 * This is mainly an export for testing purposes.
 */
function hydrate(hydration) {
  if (hydration.uiBoxCache) {
    (0, _uiBox.hydrate)(hydration.uiBoxCache);
  }

  if (hydration.glamorIds) {
    (0, _glamor.rehydrate)(hydration.glamorIds);
  }
}

function autoHydrate() {
  if (typeof window !== 'undefined' && typeof document !== 'undefined') {
    var hydration = document.querySelector('#evergreen-hydrate');

    if (hydration) {
      try {
        var hydrationObject = JSON.parse(hydration.innerHTML);
        hydrate(hydrationObject);
      } catch (error) {
        console.error('Evergreen automatic hydration object is invalid JSON', error);
      }
    }
  }
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9zc3Ivc3JjL2F1dG9IeWRyYXRlLmpzIl0sIm5hbWVzIjpbImh5ZHJhdGUiLCJoeWRyYXRpb24iLCJ1aUJveENhY2hlIiwiZ2xhbW9ySWRzIiwiYXV0b0h5ZHJhdGUiLCJ3aW5kb3ciLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJoeWRyYXRpb25PYmplY3QiLCJKU09OIiwicGFyc2UiLCJpbm5lckhUTUwiLCJlcnJvciIsImNvbnNvbGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7O0FBQ0E7O0FBRUE7Ozs7QUFJTyxTQUFTQSxPQUFULENBQWlCQyxTQUFqQixFQUE0QjtBQUNqQyxNQUFJQSxTQUFTLENBQUNDLFVBQWQsRUFBMEI7QUFDeEIsd0JBQVdELFNBQVMsQ0FBQ0MsVUFBckI7QUFDRDs7QUFFRCxNQUFJRCxTQUFTLENBQUNFLFNBQWQsRUFBeUI7QUFDdkIsMkJBQVVGLFNBQVMsQ0FBQ0UsU0FBcEI7QUFDRDtBQUNGOztBQUVjLFNBQVNDLFdBQVQsR0FBdUI7QUFDcEMsTUFBSSxPQUFPQyxNQUFQLEtBQWtCLFdBQWxCLElBQWlDLE9BQU9DLFFBQVAsS0FBb0IsV0FBekQsRUFBc0U7QUFDcEUsUUFBTUwsU0FBUyxHQUFHSyxRQUFRLENBQUNDLGFBQVQsQ0FBdUIsb0JBQXZCLENBQWxCOztBQUVBLFFBQUlOLFNBQUosRUFBZTtBQUNiLFVBQUk7QUFDRixZQUFNTyxlQUFlLEdBQUdDLElBQUksQ0FBQ0MsS0FBTCxDQUFXVCxTQUFTLENBQUNVLFNBQXJCLENBQXhCO0FBQ0FYLFFBQUFBLE9BQU8sQ0FBQ1EsZUFBRCxDQUFQO0FBQ0QsT0FIRCxDQUdFLE9BQU9JLEtBQVAsRUFBYztBQUNkQyxRQUFBQSxPQUFPLENBQUNELEtBQVIsQ0FDRSxzREFERixFQUVFQSxLQUZGO0FBSUQ7QUFDRjtBQUNGO0FBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBoeWRyYXRlIGFzIGJveEh5ZHJhdGUgfSBmcm9tICd1aS1ib3gnXG5pbXBvcnQgeyByZWh5ZHJhdGUgfSBmcm9tICdnbGFtb3InXG5cbi8qKlxuICogWW91IHNob3VsZG4ndCBoYXZlIHRvIG1hbnVhbGx5IHJ1biB0aGlzLlxuICogVGhpcyBpcyBtYWlubHkgYW4gZXhwb3J0IGZvciB0ZXN0aW5nIHB1cnBvc2VzLlxuICovXG5leHBvcnQgZnVuY3Rpb24gaHlkcmF0ZShoeWRyYXRpb24pIHtcbiAgaWYgKGh5ZHJhdGlvbi51aUJveENhY2hlKSB7XG4gICAgYm94SHlkcmF0ZShoeWRyYXRpb24udWlCb3hDYWNoZSlcbiAgfVxuXG4gIGlmIChoeWRyYXRpb24uZ2xhbW9ySWRzKSB7XG4gICAgcmVoeWRyYXRlKGh5ZHJhdGlvbi5nbGFtb3JJZHMpXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gYXV0b0h5ZHJhdGUoKSB7XG4gIGlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJiB0eXBlb2YgZG9jdW1lbnQgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgY29uc3QgaHlkcmF0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2V2ZXJncmVlbi1oeWRyYXRlJylcblxuICAgIGlmIChoeWRyYXRpb24pIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IGh5ZHJhdGlvbk9iamVjdCA9IEpTT04ucGFyc2UoaHlkcmF0aW9uLmlubmVySFRNTClcbiAgICAgICAgaHlkcmF0ZShoeWRyYXRpb25PYmplY3QpXG4gICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICBjb25zb2xlLmVycm9yKFxuICAgICAgICAgICdFdmVyZ3JlZW4gYXV0b21hdGljIGh5ZHJhdGlvbiBvYmplY3QgaXMgaW52YWxpZCBKU09OJyxcbiAgICAgICAgICBlcnJvclxuICAgICAgICApXG4gICAgICB9XG4gICAgfVxuICB9XG59XG4iXX0=