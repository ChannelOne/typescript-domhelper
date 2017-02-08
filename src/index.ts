export {elem, element} from "./elem"
export {Dom} from "./dom"

/**
 * Alias of `document.createTextNode
 */
export function text(content: string): Text {
    return document.createTextNode(content);
}
