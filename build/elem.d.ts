/**
 * Element generator
 */
export declare function elem(tagName: string, classStr?: string, properties?: {
    any: string;
}, children?: Node[]): HTMLElement;
/**
 * alias of `elem`
 */
export declare const element: typeof elem;
/**
 * alias of `elem`
 */
export declare const Elem: typeof elem;
