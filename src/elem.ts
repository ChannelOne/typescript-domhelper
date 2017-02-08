
/**
 * Element generator
 * 
 * @param tagName the HTML tag, such as `div`, `p`, etc.
 * @param classStr (Optional)
 * @param properties (Optional)the properties of HTML element.
 * @param children (Optional)a list of HTML Node
 */
export function elem(tagName: string, classStr?: string, properties?: any, children?: Node[]): HTMLElement {
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
        children.forEach((node: Node) => {
            dom.appendChild(node);
        })
    }
    return dom;
}

/**
 * Alias of `elem`
 * 
 * @param tagName the HTML tag, such as `div`, `p`, etc.
 * @param classStr (Optional)
 * @param properties (Optional)the properties of HTML element.
 * @param children (Optional)a list of HTML Node
 */
export const element = elem;
