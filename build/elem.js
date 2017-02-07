"use strict";
/**
 * Element generator
 *
 * @param tagName the HTML tag, such as `div`, `p`, etc.
 * @param classStr (Optional)
 * @param properties (Optional)the properties of HTML element.
 * @param children (Optional)a list of HTML Node
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
 * Alias of `elem`
 *
 * @param tagName the HTML tag, such as `div`, `p`, etc.
 * @param classStr (Optional)
 * @param properties (Optional)the properties of HTML element.
 * @param children (Optional)a list of HTML Node
 */
exports.element = elem;
/**
 * Alias of `elem`
 *
 * @param tagName the HTML tag, such as `div`, `p`, etc.
 * @param classStr (Optional)
 * @param properties (Optional)the properties of HTML element.
 * @param children (Optional)a list of HTML Node
 */
exports.Elem = elem;
//# sourceMappingURL=elem.js.map