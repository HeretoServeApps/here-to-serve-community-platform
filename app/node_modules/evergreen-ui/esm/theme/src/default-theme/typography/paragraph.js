import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

import text from './text';
/**
 * Text styles for paragraphs (multi line text).
 * This is used in the Paragraph.
 * @property {Object} text.500 - Required property.
 * @property {Object} text.400 - Required property. Default.
 * @property {Object} text.300 - Required property.
 */

export default {
  '500': _objectSpread({}, text['500'], {
    lineHeight: '24px'
  }),
  '400': _objectSpread({}, text['400'], {
    lineHeight: '21px'
  }),
  '300': _objectSpread({}, text['300'], {
    lineHeight: '18px'
  })
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy90aGVtZS9zcmMvZGVmYXVsdC10aGVtZS90eXBvZ3JhcGh5L3BhcmFncmFwaC5qcyJdLCJuYW1lcyI6WyJ0ZXh0IiwibGluZUhlaWdodCJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEsT0FBT0EsSUFBUCxNQUFpQixRQUFqQjtBQUVBOzs7Ozs7OztBQU9BLGVBQWU7QUFDYiwyQkFDS0EsSUFBSSxDQUFDLEtBQUQsQ0FEVDtBQUVFQyxJQUFBQSxVQUFVLEVBQUU7QUFGZCxJQURhO0FBS2IsMkJBQ0tELElBQUksQ0FBQyxLQUFELENBRFQ7QUFFRUMsSUFBQUEsVUFBVSxFQUFFO0FBRmQsSUFMYTtBQVNiLDJCQUNLRCxJQUFJLENBQUMsS0FBRCxDQURUO0FBRUVDLElBQUFBLFVBQVUsRUFBRTtBQUZkO0FBVGEsQ0FBZiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB0ZXh0IGZyb20gJy4vdGV4dCdcblxuLyoqXG4gKiBUZXh0IHN0eWxlcyBmb3IgcGFyYWdyYXBocyAobXVsdGkgbGluZSB0ZXh0KS5cbiAqIFRoaXMgaXMgdXNlZCBpbiB0aGUgUGFyYWdyYXBoLlxuICogQHByb3BlcnR5IHtPYmplY3R9IHRleHQuNTAwIC0gUmVxdWlyZWQgcHJvcGVydHkuXG4gKiBAcHJvcGVydHkge09iamVjdH0gdGV4dC40MDAgLSBSZXF1aXJlZCBwcm9wZXJ0eS4gRGVmYXVsdC5cbiAqIEBwcm9wZXJ0eSB7T2JqZWN0fSB0ZXh0LjMwMCAtIFJlcXVpcmVkIHByb3BlcnR5LlxuICovXG5leHBvcnQgZGVmYXVsdCB7XG4gICc1MDAnOiB7XG4gICAgLi4udGV4dFsnNTAwJ10sXG4gICAgbGluZUhlaWdodDogJzI0cHgnXG4gIH0sXG4gICc0MDAnOiB7XG4gICAgLi4udGV4dFsnNDAwJ10sXG4gICAgbGluZUhlaWdodDogJzIxcHgnXG4gIH0sXG4gICczMDAnOiB7XG4gICAgLi4udGV4dFsnMzAwJ10sXG4gICAgbGluZUhlaWdodDogJzE4cHgnXG4gIH1cbn1cbiJdfQ==