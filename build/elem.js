"use strict";
/**
 * Element generator
 */
function elem(tagName, classStr, properties, children) {
    var dom = document.createElement(tagName);
    if (classStr) {
        dom.setAttribute("class", classStr);
    }
    if (properties) {
        for (var propName in properties) {
            dom.setAttribute(propName, properties[propName]);
        }
    }
    if (children) {
        children.forEach(function (node) {
            dom.appendChild(node);
        });
    }
    return dom;
}
exports.elem = elem;
/**
 * alias of `elem`
 */
exports.element = elem;
/**
 * alias of `elem`
 */
exports.Elem = elem;
//# sourceMappingURL=elem.js.map