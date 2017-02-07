
import {elem} from "./elem"

export class Dom {

    static Anchor(classStr?: string, properties?: {any: string}, children?: Node[]): HTMLAnchorElement {
        return <HTMLAnchorElement>elem("anchor", classStr, properties, children);
    }

    static Applet(classStr?: string, properties?: {any: string}, children?: Node[]): HTMLAppletElement {
        return <HTMLAppletElement>elem("applet", classStr, properties, children);
    }

    static Area(classStr?: string, properties?: {any: string}, children?: Node[]): HTMLAreaElement {
        return <HTMLAreaElement>elem("area", classStr, properties, children);
    }

    static Audio(classStr?: string, properties?: {any: string}, children?: Node[]): HTMLAudioElement {
        return <HTMLAudioElement>elem("audio", classStr, properties, children);
    }

    static BR(classStr?: string, properties?: {any: string}, children?: Node[]): HTMLBRElement {
        return <HTMLBRElement>elem("br", classStr, properties, children);
    }

    static Base(classStr?: string, properties?: {any: string}, children?: Node[]): HTMLBaseElement {
        return <HTMLBaseElement>elem("base", classStr, properties, children);
    }

    static BaseFont(classStr?: string, properties?: {any: string}, children?: Node[]): HTMLBaseFontElement {
        return <HTMLBaseFontElement>elem("basefont", classStr, properties, children);
    }

    static Body(classStr?: string, properties?: {any: string}, children?: Node[]): HTMLBodyElement {
        return <HTMLBodyElement>elem("body", classStr, properties, children);
    }

    static Button(classStr?: string, properties?: {any: string}, children?: Node[]): HTMLButtonElement {
        return <HTMLButtonElement>elem("button", classStr, properties, children);
    }

    static Canvas(classStr?: string, properties?: {any: string}, children?: Node[]): HTMLCanvasElement {
        return <HTMLCanvasElement>elem("canvas", classStr, properties, children);
    }

    static DList(classStr?: string, properties?: {any: string}, children?: Node[]): HTMLDListElement {
        return <HTMLDListElement>elem("dlist", classStr, properties, children);
    }

    static DataList(classStr?: string, properties?: {any: string}, children?: Node[]): HTMLDataListElement {
        return <HTMLDataListElement>elem("datalist", classStr, properties, children);
    }

    static Directory(classStr?: string, properties?: {any: string}, children?: Node[]): HTMLDirectoryElement {
        return <HTMLDirectoryElement>elem("directory", classStr, properties, children);
    }

    static Div(classStr?: string, properties?: {any: string}, children?: Node[]): HTMLDivElement {
        return <HTMLDivElement>elem("div", classStr, properties, children);
    }

    static Embed(classStr?: string, properties?: {any: string}, children?: Node[]): HTMLEmbedElement {
        return <HTMLEmbedElement>elem("embed", classStr, properties, children);
    }

    static FieldSet(classStr?: string, properties?: {any: string}, children?: Node[]): HTMLFieldSetElement {
        return <HTMLFieldSetElement>elem("fieldset", classStr, properties, children);
    }

    static Font(classStr?: string, properties?: {any: string}, children?: Node[]): HTMLFontElement {
        return <HTMLFontElement>elem("font", classStr, properties, children);
    }

    static Form(classStr?: string, properties?: {any: string}, children?: Node[]): HTMLFormElement {
        return <HTMLFormElement>elem("form", classStr, properties, children);
    }

    static Frame(classStr?: string, properties?: {any: string}, children?: Node[]): HTMLFrameElement {
        return <HTMLFrameElement>elem("frame", classStr, properties, children);
    }

    static FrameSet(classStr?: string, properties?: {any: string}, children?: Node[]): HTMLFrameSetElement {
        return <HTMLFrameSetElement>elem("frameset", classStr, properties, children);
    }

    static HR(classStr?: string, properties?: {any: string}, children?: Node[]): HTMLHRElement {
        return <HTMLHRElement>elem("hr", classStr, properties, children);
    }

    static Head(classStr?: string, properties?: {any: string}, children?: Node[]): HTMLHeadElement {
        return <HTMLHeadElement>elem("head", classStr, properties, children);
    }

    static Heading(classStr?: string, properties?: {any: string}, children?: Node[]): HTMLHeadingElement {
        return <HTMLHeadingElement>elem("heading", classStr, properties, children);
    }

    static Html(classStr?: string, properties?: {any: string}, children?: Node[]): HTMLHtmlElement {
        return <HTMLHtmlElement>elem("html", classStr, properties, children);
    }

    static IFrame(classStr?: string, properties?: {any: string}, children?: Node[]): HTMLIFrameElement {
        return <HTMLIFrameElement>elem("iframe", classStr, properties, children);
    }

    static Image(classStr?: string, properties?: {any: string}, children?: Node[]): HTMLImageElement {
        return <HTMLImageElement>elem("image", classStr, properties, children);
    }

    static Input(classStr?: string, properties?: {any: string}, children?: Node[]): HTMLInputElement {
        return <HTMLInputElement>elem("input", classStr, properties, children);
    }

    static LI(classStr?: string, properties?: {any: string}, children?: Node[]): HTMLLIElement {
        return <HTMLLIElement>elem("li", classStr, properties, children);
    }

    static Label(classStr?: string, properties?: {any: string}, children?: Node[]): HTMLLabelElement {
        return <HTMLLabelElement>elem("label", classStr, properties, children);
    }

    static Legend(classStr?: string, properties?: {any: string}, children?: Node[]): HTMLLegendElement {
        return <HTMLLegendElement>elem("legend", classStr, properties, children);
    }

    static Link(classStr?: string, properties?: {any: string}, children?: Node[]): HTMLLinkElement {
        return <HTMLLinkElement>elem("link", classStr, properties, children);
    }

    static Map(classStr?: string, properties?: {any: string}, children?: Node[]): HTMLMapElement {
        return <HTMLMapElement>elem("map", classStr, properties, children);
    }

    static Marquee(classStr?: string, properties?: {any: string}, children?: Node[]): HTMLMarqueeElement {
        return <HTMLMarqueeElement>elem("marquee", classStr, properties, children);
    }

    static Media(classStr?: string, properties?: {any: string}, children?: Node[]): HTMLMediaElement {
        return <HTMLMediaElement>elem("media", classStr, properties, children);
    }

    static Menu(classStr?: string, properties?: {any: string}, children?: Node[]): HTMLMenuElement {
        return <HTMLMenuElement>elem("menu", classStr, properties, children);
    }

    static Meta(classStr?: string, properties?: {any: string}, children?: Node[]): HTMLMetaElement {
        return <HTMLMetaElement>elem("meta", classStr, properties, children);
    }

    static Meter(classStr?: string, properties?: {any: string}, children?: Node[]): HTMLMeterElement {
        return <HTMLMeterElement>elem("meter", classStr, properties, children);
    }

    static Mod(classStr?: string, properties?: {any: string}, children?: Node[]): HTMLModElement {
        return <HTMLModElement>elem("mod", classStr, properties, children);
    }

    static OList(classStr?: string, properties?: {any: string}, children?: Node[]): HTMLOListElement {
        return <HTMLOListElement>elem("olist", classStr, properties, children);
    }

    static Object(classStr?: string, properties?: {any: string}, children?: Node[]): HTMLObjectElement {
        return <HTMLObjectElement>elem("object", classStr, properties, children);
    }

    static OptGroup(classStr?: string, properties?: {any: string}, children?: Node[]): HTMLOptGroupElement {
        return <HTMLOptGroupElement>elem("optgroup", classStr, properties, children);
    }

    static Option(classStr?: string, properties?: {any: string}, children?: Node[]): HTMLOptionElement {
        return <HTMLOptionElement>elem("option", classStr, properties, children);
    }

    static Paragraph(classStr?: string, properties?: {any: string}, children?: Node[]): HTMLParagraphElement {
        return <HTMLParagraphElement>elem("paragraph", classStr, properties, children);
    }

    static Param(classStr?: string, properties?: {any: string}, children?: Node[]): HTMLParamElement {
        return <HTMLParamElement>elem("param", classStr, properties, children);
    }

    static Picture(classStr?: string, properties?: {any: string}, children?: Node[]): HTMLPictureElement {
        return <HTMLPictureElement>elem("picture", classStr, properties, children);
    }

    static Pre(classStr?: string, properties?: {any: string}, children?: Node[]): HTMLPreElement {
        return <HTMLPreElement>elem("pre", classStr, properties, children);
    }

    static Progress(classStr?: string, properties?: {any: string}, children?: Node[]): HTMLProgressElement {
        return <HTMLProgressElement>elem("progress", classStr, properties, children);
    }

    static Quote(classStr?: string, properties?: {any: string}, children?: Node[]): HTMLQuoteElement {
        return <HTMLQuoteElement>elem("quote", classStr, properties, children);
    }

    static Script(classStr?: string, properties?: {any: string}, children?: Node[]): HTMLScriptElement {
        return <HTMLScriptElement>elem("script", classStr, properties, children);
    }

    static Select(classStr?: string, properties?: {any: string}, children?: Node[]): HTMLSelectElement {
        return <HTMLSelectElement>elem("select", classStr, properties, children);
    }

    static Source(classStr?: string, properties?: {any: string}, children?: Node[]): HTMLSourceElement {
        return <HTMLSourceElement>elem("source", classStr, properties, children);
    }

    static Span(classStr?: string, properties?: {any: string}, children?: Node[]): HTMLSpanElement {
        return <HTMLSpanElement>elem("span", classStr, properties, children);
    }

    static Style(classStr?: string, properties?: {any: string}, children?: Node[]): HTMLStyleElement {
        return <HTMLStyleElement>elem("style", classStr, properties, children);
    }

    static TableCaption(classStr?: string, properties?: {any: string}, children?: Node[]): HTMLTableCaptionElement {
        return <HTMLTableCaptionElement>elem("tablecaption", classStr, properties, children);
    }

    static TableCell(classStr?: string, properties?: {any: string}, children?: Node[]): HTMLTableCellElement {
        return <HTMLTableCellElement>elem("tablecell", classStr, properties, children);
    }

    static TableCol(classStr?: string, properties?: {any: string}, children?: Node[]): HTMLTableColElement {
        return <HTMLTableColElement>elem("tablecol", classStr, properties, children);
    }

    static TableDataCell(classStr?: string, properties?: {any: string}, children?: Node[]): HTMLTableDataCellElement {
        return <HTMLTableDataCellElement>elem("tabledatacell", classStr, properties, children);
    }

    static Table(classStr?: string, properties?: {any: string}, children?: Node[]): HTMLTableElement {
        return <HTMLTableElement>elem("table", classStr, properties, children);
    }

    static TableHeaderCell(classStr?: string, properties?: {any: string}, children?: Node[]): HTMLTableHeaderCellElement {
        return <HTMLTableHeaderCellElement>elem("tableheadercell", classStr, properties, children);
    }

    static TableRow(classStr?: string, properties?: {any: string}, children?: Node[]): HTMLTableRowElement {
        return <HTMLTableRowElement>elem("tablerow", classStr, properties, children);
    }

    static TableSection(classStr?: string, properties?: {any: string}, children?: Node[]): HTMLTableSectionElement {
        return <HTMLTableSectionElement>elem("tablesection", classStr, properties, children);
    }

    static Template(classStr?: string, properties?: {any: string}, children?: Node[]): HTMLTemplateElement {
        return <HTMLTemplateElement>elem("template", classStr, properties, children);
    }

    static TextArea(classStr?: string, properties?: {any: string}, children?: Node[]): HTMLTextAreaElement {
        return <HTMLTextAreaElement>elem("textarea", classStr, properties, children);
    }

    static Title(classStr?: string, properties?: {any: string}, children?: Node[]): HTMLTitleElement {
        return <HTMLTitleElement>elem("title", classStr, properties, children);
    }

    static Track(classStr?: string, properties?: {any: string}, children?: Node[]): HTMLTrackElement {
        return <HTMLTrackElement>elem("track", classStr, properties, children);
    }

    static UList(classStr?: string, properties?: {any: string}, children?: Node[]): HTMLUListElement {
        return <HTMLUListElement>elem("ulist", classStr, properties, children);
    }

    static Unknown(classStr?: string, properties?: {any: string}, children?: Node[]): HTMLUnknownElement {
        return <HTMLUnknownElement>elem("unknown", classStr, properties, children);
    }

    static Video(classStr?: string, properties?: {any: string}, children?: Node[]): HTMLVideoElement {
        return <HTMLVideoElement>elem("video", classStr, properties, children);
    }

}
