/**
 * Element generator
 *
 * @param tagName the HTML tag, such as `div`, `p`, etc.
 * @param classStr (Optional)
 * @param properties (Optional)the properties of HTML element.
 * @param children (Optional)a list of HTML Node
 */
export declare function elem(tagName: string, classStr?: string, properties?: any, children?: Node[]): HTMLElement;
/**
 * Alias of `elem`
 *
 * @param tagName the HTML tag, such as `div`, `p`, etc.
 * @param classStr (Optional)
 * @param properties (Optional)the properties of HTML element.
 * @param children (Optional)a list of HTML Node
 */
export declare const element: typeof elem;
