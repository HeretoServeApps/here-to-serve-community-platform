"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _palette = _interopRequireDefault(require("./palette"));

var _scales = _interopRequireDefault(require("./scales"));

/**
 * This object are functional colors being used the default theme.
 * A required property is required by the default theme NOT by Evergreen itself.
 */
var _default = {
  /**
   * Available on Pane as `<Pane background="tint1" />`
   * @property {string} background.tint1 - Lightest tinted background color. Required property.
   * @property {string} background.tint2 - Slightly darker tinted background color. Required property.
   * @property {string} background.overlay - color used for the overlay
   */
  background: {
    tint1: _scales["default"].neutral.N1,
    tint2: _scales["default"].neutral.N2,
    overlay: _scales["default"].neutral.N7A,
    // Non required.
    yellowTint: _palette["default"].yellow.lightest,
    greenTint: _palette["default"].green.lightest,
    orangeTint: _palette["default"].orange.lightest,
    redTint: _palette["default"].red.lightest,
    blueTint: _palette["default"].blue.lightest,
    purpleTint: _palette["default"].purple.lightest,
    tealTint: _palette["default"].teal.lightest
  },

  /**
   * Available on Pane as `<Pane borderBottom borderRight="muted" />`
   * @property {string} text.default - Required property.
   * @property {string} text.muted - Slightly lighter color than default. Required property.
   */
  border: {
    "default": _scales["default"].neutral.N4,
    // Was BorderColors.muted in v3 and under.
    muted: _scales["default"].neutral.N3 // Was BorderColors.extraMuted in v3 and under

  },

  /**
   * Text colors available on Text as `<Text color="muted" />`.
   * @property {string} text.muted - Required property.
   * @property {string} text.default - Required property. Default for text.
   * @property {string} text.dark - Required property. Default for headings.
   */
  text: {
    muted: _scales["default"].neutral.N8,
    "default": _scales["default"].neutral.N9,
    dark: _scales["default"].neutral.N10,
    selected: _palette["default"].blue.base,
    // Intent.
    success: _palette["default"].green.dark,
    info: _palette["default"].blue.dark,
    danger: _palette["default"].red.dark,
    warning: _palette["default"].orange.dark
  },

  /**
   * Icon colors available on Icon.
   * @property {string} icon.default - Required property.
   * @property {string} icon.muted - Required property.
   * @property {string} icon.selected - Required property.
   */
  icon: {
    "default": _scales["default"].neutral.N8,
    muted: _scales["default"].neutral.N7,
    disabled: _scales["default"].neutral.N5A,
    selected: _palette["default"].blue.base,
    // Intent.
    success: _palette["default"].green.base,
    info: _palette["default"].blue.base,
    danger: _palette["default"].red.base,
    warning: _palette["default"].orange.base
  },

  /**
   * Used for Alerts and other (future) componentes that express intent.
   * @property {string} intent.none - Required property.
   * @property {string} intent.success - Required property.
   * @property {string} intent.danger - Required property.
   * @property {string} intent.warning - Required property.
   */
  intent: {
    none: _palette["default"].blue.base,
    success: _palette["default"].green.base,
    danger: _palette["default"].red.base,
    warning: _palette["default"].orange.base
  }
};
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy90aGVtZS9zcmMvZGVmYXVsdC10aGVtZS9mb3VuZGF0aW9uYWwtc3R5bGVzL2NvbG9ycy5qcyJdLCJuYW1lcyI6WyJiYWNrZ3JvdW5kIiwidGludDEiLCJzY2FsZXMiLCJuZXV0cmFsIiwiTjEiLCJ0aW50MiIsIk4yIiwib3ZlcmxheSIsIk43QSIsInllbGxvd1RpbnQiLCJwYWxldHRlIiwieWVsbG93IiwibGlnaHRlc3QiLCJncmVlblRpbnQiLCJncmVlbiIsIm9yYW5nZVRpbnQiLCJvcmFuZ2UiLCJyZWRUaW50IiwicmVkIiwiYmx1ZVRpbnQiLCJibHVlIiwicHVycGxlVGludCIsInB1cnBsZSIsInRlYWxUaW50IiwidGVhbCIsImJvcmRlciIsIk40IiwibXV0ZWQiLCJOMyIsInRleHQiLCJOOCIsIk45IiwiZGFyayIsIk4xMCIsInNlbGVjdGVkIiwiYmFzZSIsInN1Y2Nlc3MiLCJpbmZvIiwiZGFuZ2VyIiwid2FybmluZyIsImljb24iLCJONyIsImRpc2FibGVkIiwiTjVBIiwiaW50ZW50Iiwibm9uZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7O0FBQ0E7O0FBRUE7Ozs7ZUFJZTtBQUNiOzs7Ozs7QUFNQUEsRUFBQUEsVUFBVSxFQUFFO0FBQ1ZDLElBQUFBLEtBQUssRUFBRUMsbUJBQU9DLE9BQVAsQ0FBZUMsRUFEWjtBQUVWQyxJQUFBQSxLQUFLLEVBQUVILG1CQUFPQyxPQUFQLENBQWVHLEVBRlo7QUFHVkMsSUFBQUEsT0FBTyxFQUFFTCxtQkFBT0MsT0FBUCxDQUFlSyxHQUhkO0FBS1Y7QUFDQUMsSUFBQUEsVUFBVSxFQUFFQyxvQkFBUUMsTUFBUixDQUFlQyxRQU5qQjtBQU9WQyxJQUFBQSxTQUFTLEVBQUVILG9CQUFRSSxLQUFSLENBQWNGLFFBUGY7QUFRVkcsSUFBQUEsVUFBVSxFQUFFTCxvQkFBUU0sTUFBUixDQUFlSixRQVJqQjtBQVNWSyxJQUFBQSxPQUFPLEVBQUVQLG9CQUFRUSxHQUFSLENBQVlOLFFBVFg7QUFVVk8sSUFBQUEsUUFBUSxFQUFFVCxvQkFBUVUsSUFBUixDQUFhUixRQVZiO0FBV1ZTLElBQUFBLFVBQVUsRUFBRVgsb0JBQVFZLE1BQVIsQ0FBZVYsUUFYakI7QUFZVlcsSUFBQUEsUUFBUSxFQUFFYixvQkFBUWMsSUFBUixDQUFhWjtBQVpiLEdBUEM7O0FBc0JiOzs7OztBQUtBYSxFQUFBQSxNQUFNLEVBQUU7QUFDTixlQUFTdkIsbUJBQU9DLE9BQVAsQ0FBZXVCLEVBRGxCO0FBQ3NCO0FBQzVCQyxJQUFBQSxLQUFLLEVBQUV6QixtQkFBT0MsT0FBUCxDQUFleUIsRUFGaEIsQ0FFbUI7O0FBRm5CLEdBM0JLOztBQWdDYjs7Ozs7O0FBTUFDLEVBQUFBLElBQUksRUFBRTtBQUNKRixJQUFBQSxLQUFLLEVBQUV6QixtQkFBT0MsT0FBUCxDQUFlMkIsRUFEbEI7QUFFSixlQUFTNUIsbUJBQU9DLE9BQVAsQ0FBZTRCLEVBRnBCO0FBR0pDLElBQUFBLElBQUksRUFBRTlCLG1CQUFPQyxPQUFQLENBQWU4QixHQUhqQjtBQUlKQyxJQUFBQSxRQUFRLEVBQUV4QixvQkFBUVUsSUFBUixDQUFhZSxJQUpuQjtBQU1KO0FBQ0FDLElBQUFBLE9BQU8sRUFBRTFCLG9CQUFRSSxLQUFSLENBQWNrQixJQVBuQjtBQVFKSyxJQUFBQSxJQUFJLEVBQUUzQixvQkFBUVUsSUFBUixDQUFhWSxJQVJmO0FBU0pNLElBQUFBLE1BQU0sRUFBRTVCLG9CQUFRUSxHQUFSLENBQVljLElBVGhCO0FBVUpPLElBQUFBLE9BQU8sRUFBRTdCLG9CQUFRTSxNQUFSLENBQWVnQjtBQVZwQixHQXRDTzs7QUFtRGI7Ozs7OztBQU1BUSxFQUFBQSxJQUFJLEVBQUU7QUFDSixlQUFTdEMsbUJBQU9DLE9BQVAsQ0FBZTJCLEVBRHBCO0FBRUpILElBQUFBLEtBQUssRUFBRXpCLG1CQUFPQyxPQUFQLENBQWVzQyxFQUZsQjtBQUdKQyxJQUFBQSxRQUFRLEVBQUV4QyxtQkFBT0MsT0FBUCxDQUFld0MsR0FIckI7QUFJSlQsSUFBQUEsUUFBUSxFQUFFeEIsb0JBQVFVLElBQVIsQ0FBYWUsSUFKbkI7QUFNSjtBQUNBQyxJQUFBQSxPQUFPLEVBQUUxQixvQkFBUUksS0FBUixDQUFjcUIsSUFQbkI7QUFRSkUsSUFBQUEsSUFBSSxFQUFFM0Isb0JBQVFVLElBQVIsQ0FBYWUsSUFSZjtBQVNKRyxJQUFBQSxNQUFNLEVBQUU1QixvQkFBUVEsR0FBUixDQUFZaUIsSUFUaEI7QUFVSkksSUFBQUEsT0FBTyxFQUFFN0Isb0JBQVFNLE1BQVIsQ0FBZW1CO0FBVnBCLEdBekRPOztBQXNFYjs7Ozs7OztBQU9BUyxFQUFBQSxNQUFNLEVBQUU7QUFDTkMsSUFBQUEsSUFBSSxFQUFFbkMsb0JBQVFVLElBQVIsQ0FBYWUsSUFEYjtBQUVOQyxJQUFBQSxPQUFPLEVBQUUxQixvQkFBUUksS0FBUixDQUFjcUIsSUFGakI7QUFHTkcsSUFBQUEsTUFBTSxFQUFFNUIsb0JBQVFRLEdBQVIsQ0FBWWlCLElBSGQ7QUFJTkksSUFBQUEsT0FBTyxFQUFFN0Isb0JBQVFNLE1BQVIsQ0FBZW1CO0FBSmxCO0FBN0VLLEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgcGFsZXR0ZSBmcm9tICcuL3BhbGV0dGUnXG5pbXBvcnQgc2NhbGVzIGZyb20gJy4vc2NhbGVzJ1xuXG4vKipcbiAqIFRoaXMgb2JqZWN0IGFyZSBmdW5jdGlvbmFsIGNvbG9ycyBiZWluZyB1c2VkIHRoZSBkZWZhdWx0IHRoZW1lLlxuICogQSByZXF1aXJlZCBwcm9wZXJ0eSBpcyByZXF1aXJlZCBieSB0aGUgZGVmYXVsdCB0aGVtZSBOT1QgYnkgRXZlcmdyZWVuIGl0c2VsZi5cbiAqL1xuZXhwb3J0IGRlZmF1bHQge1xuICAvKipcbiAgICogQXZhaWxhYmxlIG9uIFBhbmUgYXMgYDxQYW5lIGJhY2tncm91bmQ9XCJ0aW50MVwiIC8+YFxuICAgKiBAcHJvcGVydHkge3N0cmluZ30gYmFja2dyb3VuZC50aW50MSAtIExpZ2h0ZXN0IHRpbnRlZCBiYWNrZ3JvdW5kIGNvbG9yLiBSZXF1aXJlZCBwcm9wZXJ0eS5cbiAgICogQHByb3BlcnR5IHtzdHJpbmd9IGJhY2tncm91bmQudGludDIgLSBTbGlnaHRseSBkYXJrZXIgdGludGVkIGJhY2tncm91bmQgY29sb3IuIFJlcXVpcmVkIHByb3BlcnR5LlxuICAgKiBAcHJvcGVydHkge3N0cmluZ30gYmFja2dyb3VuZC5vdmVybGF5IC0gY29sb3IgdXNlZCBmb3IgdGhlIG92ZXJsYXlcbiAgICovXG4gIGJhY2tncm91bmQ6IHtcbiAgICB0aW50MTogc2NhbGVzLm5ldXRyYWwuTjEsXG4gICAgdGludDI6IHNjYWxlcy5uZXV0cmFsLk4yLFxuICAgIG92ZXJsYXk6IHNjYWxlcy5uZXV0cmFsLk43QSxcblxuICAgIC8vIE5vbiByZXF1aXJlZC5cbiAgICB5ZWxsb3dUaW50OiBwYWxldHRlLnllbGxvdy5saWdodGVzdCxcbiAgICBncmVlblRpbnQ6IHBhbGV0dGUuZ3JlZW4ubGlnaHRlc3QsXG4gICAgb3JhbmdlVGludDogcGFsZXR0ZS5vcmFuZ2UubGlnaHRlc3QsXG4gICAgcmVkVGludDogcGFsZXR0ZS5yZWQubGlnaHRlc3QsXG4gICAgYmx1ZVRpbnQ6IHBhbGV0dGUuYmx1ZS5saWdodGVzdCxcbiAgICBwdXJwbGVUaW50OiBwYWxldHRlLnB1cnBsZS5saWdodGVzdCxcbiAgICB0ZWFsVGludDogcGFsZXR0ZS50ZWFsLmxpZ2h0ZXN0XG4gIH0sXG5cbiAgLyoqXG4gICAqIEF2YWlsYWJsZSBvbiBQYW5lIGFzIGA8UGFuZSBib3JkZXJCb3R0b20gYm9yZGVyUmlnaHQ9XCJtdXRlZFwiIC8+YFxuICAgKiBAcHJvcGVydHkge3N0cmluZ30gdGV4dC5kZWZhdWx0IC0gUmVxdWlyZWQgcHJvcGVydHkuXG4gICAqIEBwcm9wZXJ0eSB7c3RyaW5nfSB0ZXh0Lm11dGVkIC0gU2xpZ2h0bHkgbGlnaHRlciBjb2xvciB0aGFuIGRlZmF1bHQuIFJlcXVpcmVkIHByb3BlcnR5LlxuICAgKi9cbiAgYm9yZGVyOiB7XG4gICAgZGVmYXVsdDogc2NhbGVzLm5ldXRyYWwuTjQsIC8vIFdhcyBCb3JkZXJDb2xvcnMubXV0ZWQgaW4gdjMgYW5kIHVuZGVyLlxuICAgIG11dGVkOiBzY2FsZXMubmV1dHJhbC5OMyAvLyBXYXMgQm9yZGVyQ29sb3JzLmV4dHJhTXV0ZWQgaW4gdjMgYW5kIHVuZGVyXG4gIH0sXG5cbiAgLyoqXG4gICAqIFRleHQgY29sb3JzIGF2YWlsYWJsZSBvbiBUZXh0IGFzIGA8VGV4dCBjb2xvcj1cIm11dGVkXCIgLz5gLlxuICAgKiBAcHJvcGVydHkge3N0cmluZ30gdGV4dC5tdXRlZCAtIFJlcXVpcmVkIHByb3BlcnR5LlxuICAgKiBAcHJvcGVydHkge3N0cmluZ30gdGV4dC5kZWZhdWx0IC0gUmVxdWlyZWQgcHJvcGVydHkuIERlZmF1bHQgZm9yIHRleHQuXG4gICAqIEBwcm9wZXJ0eSB7c3RyaW5nfSB0ZXh0LmRhcmsgLSBSZXF1aXJlZCBwcm9wZXJ0eS4gRGVmYXVsdCBmb3IgaGVhZGluZ3MuXG4gICAqL1xuICB0ZXh0OiB7XG4gICAgbXV0ZWQ6IHNjYWxlcy5uZXV0cmFsLk44LFxuICAgIGRlZmF1bHQ6IHNjYWxlcy5uZXV0cmFsLk45LFxuICAgIGRhcms6IHNjYWxlcy5uZXV0cmFsLk4xMCxcbiAgICBzZWxlY3RlZDogcGFsZXR0ZS5ibHVlLmJhc2UsXG5cbiAgICAvLyBJbnRlbnQuXG4gICAgc3VjY2VzczogcGFsZXR0ZS5ncmVlbi5kYXJrLFxuICAgIGluZm86IHBhbGV0dGUuYmx1ZS5kYXJrLFxuICAgIGRhbmdlcjogcGFsZXR0ZS5yZWQuZGFyayxcbiAgICB3YXJuaW5nOiBwYWxldHRlLm9yYW5nZS5kYXJrXG4gIH0sXG5cbiAgLyoqXG4gICAqIEljb24gY29sb3JzIGF2YWlsYWJsZSBvbiBJY29uLlxuICAgKiBAcHJvcGVydHkge3N0cmluZ30gaWNvbi5kZWZhdWx0IC0gUmVxdWlyZWQgcHJvcGVydHkuXG4gICAqIEBwcm9wZXJ0eSB7c3RyaW5nfSBpY29uLm11dGVkIC0gUmVxdWlyZWQgcHJvcGVydHkuXG4gICAqIEBwcm9wZXJ0eSB7c3RyaW5nfSBpY29uLnNlbGVjdGVkIC0gUmVxdWlyZWQgcHJvcGVydHkuXG4gICAqL1xuICBpY29uOiB7XG4gICAgZGVmYXVsdDogc2NhbGVzLm5ldXRyYWwuTjgsXG4gICAgbXV0ZWQ6IHNjYWxlcy5uZXV0cmFsLk43LFxuICAgIGRpc2FibGVkOiBzY2FsZXMubmV1dHJhbC5ONUEsXG4gICAgc2VsZWN0ZWQ6IHBhbGV0dGUuYmx1ZS5iYXNlLFxuXG4gICAgLy8gSW50ZW50LlxuICAgIHN1Y2Nlc3M6IHBhbGV0dGUuZ3JlZW4uYmFzZSxcbiAgICBpbmZvOiBwYWxldHRlLmJsdWUuYmFzZSxcbiAgICBkYW5nZXI6IHBhbGV0dGUucmVkLmJhc2UsXG4gICAgd2FybmluZzogcGFsZXR0ZS5vcmFuZ2UuYmFzZVxuICB9LFxuXG4gIC8qKlxuICAgKiBVc2VkIGZvciBBbGVydHMgYW5kIG90aGVyIChmdXR1cmUpIGNvbXBvbmVudGVzIHRoYXQgZXhwcmVzcyBpbnRlbnQuXG4gICAqIEBwcm9wZXJ0eSB7c3RyaW5nfSBpbnRlbnQubm9uZSAtIFJlcXVpcmVkIHByb3BlcnR5LlxuICAgKiBAcHJvcGVydHkge3N0cmluZ30gaW50ZW50LnN1Y2Nlc3MgLSBSZXF1aXJlZCBwcm9wZXJ0eS5cbiAgICogQHByb3BlcnR5IHtzdHJpbmd9IGludGVudC5kYW5nZXIgLSBSZXF1aXJlZCBwcm9wZXJ0eS5cbiAgICogQHByb3BlcnR5IHtzdHJpbmd9IGludGVudC53YXJuaW5nIC0gUmVxdWlyZWQgcHJvcGVydHkuXG4gICAqL1xuICBpbnRlbnQ6IHtcbiAgICBub25lOiBwYWxldHRlLmJsdWUuYmFzZSxcbiAgICBzdWNjZXNzOiBwYWxldHRlLmdyZWVuLmJhc2UsXG4gICAgZGFuZ2VyOiBwYWxldHRlLnJlZC5iYXNlLFxuICAgIHdhcm5pbmc6IHBhbGV0dGUub3JhbmdlLmJhc2VcbiAgfVxufVxuIl19