
/**
 * Element generator
 */
export function elem(tagName: string, classStr?: string, properties?: {any: string}, children?: Node[]): HTMLElement {
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
 * alias of `elem`
 */
export const element = elem;

/**
 * alias of `elem`
 */
export const Elem = elem;
