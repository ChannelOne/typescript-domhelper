"use strict";
var elem_1 = require("./elem");
exports.elem = elem_1.elem;
exports.element = elem_1.element;
var dom_1 = require("./dom");
exports.Dom = dom_1.Dom;
/**
 * Alias of `document.createTextNode
 */
function text(content) {
    return document.createTextNode(content);
}
exports.text = text;
//# sourceMappingURL=index.js.map