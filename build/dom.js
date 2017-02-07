"use strict";
var elem_1 = require("./elem");
var Dom = (function () {
    function Dom() {
    }
    Dom.Anchor = function (classStr, properties, children) {
        return elem_1.elem("anchor", classStr, properties, children);
    };
    Dom.Applet = function (classStr, properties, children) {
        return elem_1.elem("applet", classStr, properties, children);
    };
    Dom.Area = function (classStr, properties, children) {
        return elem_1.elem("area", classStr, properties, children);
    };
    Dom.Audio = function (classStr, properties, children) {
        return elem_1.elem("audio", classStr, properties, children);
    };
    Dom.BR = function (classStr, properties, children) {
        return elem_1.elem("br", classStr, properties, children);
    };
    Dom.Base = function (classStr, properties, children) {
        return elem_1.elem("base", classStr, properties, children);
    };
    Dom.BaseFont = function (classStr, properties, children) {
        return elem_1.elem("basefont", classStr, properties, children);
    };
    Dom.Body = function (classStr, properties, children) {
        return elem_1.elem("body", classStr, properties, children);
    };
    Dom.Button = function (classStr, properties, children) {
        return elem_1.elem("button", classStr, properties, children);
    };
    Dom.Canvas = function (classStr, properties, children) {
        return elem_1.elem("canvas", classStr, properties, children);
    };
    Dom.DList = function (classStr, properties, children) {
        return elem_1.elem("dlist", classStr, properties, children);
    };
    Dom.DataList = function (classStr, properties, children) {
        return elem_1.elem("datalist", classStr, properties, children);
    };
    Dom.Directory = function (classStr, properties, children) {
        return elem_1.elem("directory", classStr, properties, children);
    };
    Dom.Div = function (classStr, properties, children) {
        return elem_1.elem("div", classStr, properties, children);
    };
    Dom.Embed = function (classStr, properties, children) {
        return elem_1.elem("embed", classStr, properties, children);
    };
    Dom.FieldSet = function (classStr, properties, children) {
        return elem_1.elem("fieldset", classStr, properties, children);
    };
    Dom.Font = function (classStr, properties, children) {
        return elem_1.elem("font", classStr, properties, children);
    };
    Dom.Form = function (classStr, properties, children) {
        return elem_1.elem("form", classStr, properties, children);
    };
    Dom.Frame = function (classStr, properties, children) {
        return elem_1.elem("frame", classStr, properties, children);
    };
    Dom.FrameSet = function (classStr, properties, children) {
        return elem_1.elem("frameset", classStr, properties, children);
    };
    Dom.HR = function (classStr, properties, children) {
        return elem_1.elem("hr", classStr, properties, children);
    };
    Dom.Head = function (classStr, properties, children) {
        return elem_1.elem("head", classStr, properties, children);
    };
    Dom.Heading = function (classStr, properties, children) {
        return elem_1.elem("heading", classStr, properties, children);
    };
    Dom.Html = function (classStr, properties, children) {
        return elem_1.elem("html", classStr, properties, children);
    };
    Dom.IFrame = function (classStr, properties, children) {
        return elem_1.elem("iframe", classStr, properties, children);
    };
    Dom.Image = function (classStr, properties, children) {
        return elem_1.elem("image", classStr, properties, children);
    };
    Dom.Input = function (classStr, properties, children) {
        return elem_1.elem("input", classStr, properties, children);
    };
    Dom.LI = function (classStr, properties, children) {
        return elem_1.elem("li", classStr, properties, children);
    };
    Dom.Label = function (classStr, properties, children) {
        return elem_1.elem("label", classStr, properties, children);
    };
    Dom.Legend = function (classStr, properties, children) {
        return elem_1.elem("legend", classStr, properties, children);
    };
    Dom.Link = function (classStr, properties, children) {
        return elem_1.elem("link", classStr, properties, children);
    };
    Dom.Map = function (classStr, properties, children) {
        return elem_1.elem("map", classStr, properties, children);
    };
    Dom.Marquee = function (classStr, properties, children) {
        return elem_1.elem("marquee", classStr, properties, children);
    };
    Dom.Media = function (classStr, properties, children) {
        return elem_1.elem("media", classStr, properties, children);
    };
    Dom.Menu = function (classStr, properties, children) {
        return elem_1.elem("menu", classStr, properties, children);
    };
    Dom.Meta = function (classStr, properties, children) {
        return elem_1.elem("meta", classStr, properties, children);
    };
    Dom.Meter = function (classStr, properties, children) {
        return elem_1.elem("meter", classStr, properties, children);
    };
    Dom.Mod = function (classStr, properties, children) {
        return elem_1.elem("mod", classStr, properties, children);
    };
    Dom.OList = function (classStr, properties, children) {
        return elem_1.elem("olist", classStr, properties, children);
    };
    Dom.Object = function (classStr, properties, children) {
        return elem_1.elem("object", classStr, properties, children);
    };
    Dom.OptGroup = function (classStr, properties, children) {
        return elem_1.elem("optgroup", classStr, properties, children);
    };
    Dom.Option = function (classStr, properties, children) {
        return elem_1.elem("option", classStr, properties, children);
    };
    Dom.Paragraph = function (classStr, properties, children) {
        return elem_1.elem("paragraph", classStr, properties, children);
    };
    Dom.Param = function (classStr, properties, children) {
        return elem_1.elem("param", classStr, properties, children);
    };
    Dom.Picture = function (classStr, properties, children) {
        return elem_1.elem("picture", classStr, properties, children);
    };
    Dom.Pre = function (classStr, properties, children) {
        return elem_1.elem("pre", classStr, properties, children);
    };
    Dom.Progress = function (classStr, properties, children) {
        return elem_1.elem("progress", classStr, properties, children);
    };
    Dom.Quote = function (classStr, properties, children) {
        return elem_1.elem("quote", classStr, properties, children);
    };
    Dom.Script = function (classStr, properties, children) {
        return elem_1.elem("script", classStr, properties, children);
    };
    Dom.Select = function (classStr, properties, children) {
        return elem_1.elem("select", classStr, properties, children);
    };
    Dom.Source = function (classStr, properties, children) {
        return elem_1.elem("source", classStr, properties, children);
    };
    Dom.Span = function (classStr, properties, children) {
        return elem_1.elem("span", classStr, properties, children);
    };
    Dom.Style = function (classStr, properties, children) {
        return elem_1.elem("style", classStr, properties, children);
    };
    Dom.TableCaption = function (classStr, properties, children) {
        return elem_1.elem("tablecaption", classStr, properties, children);
    };
    Dom.TableCell = function (classStr, properties, children) {
        return elem_1.elem("tablecell", classStr, properties, children);
    };
    Dom.TableCol = function (classStr, properties, children) {
        return elem_1.elem("tablecol", classStr, properties, children);
    };
    Dom.TableDataCell = function (classStr, properties, children) {
        return elem_1.elem("tabledatacell", classStr, properties, children);
    };
    Dom.Table = function (classStr, properties, children) {
        return elem_1.elem("table", classStr, properties, children);
    };
    Dom.TableHeaderCell = function (classStr, properties, children) {
        return elem_1.elem("tableheadercell", classStr, properties, children);
    };
    Dom.TableRow = function (classStr, properties, children) {
        return elem_1.elem("tablerow", classStr, properties, children);
    };
    Dom.TableSection = function (classStr, properties, children) {
        return elem_1.elem("tablesection", classStr, properties, children);
    };
    Dom.Template = function (classStr, properties, children) {
        return elem_1.elem("template", classStr, properties, children);
    };
    Dom.TextArea = function (classStr, properties, children) {
        return elem_1.elem("textarea", classStr, properties, children);
    };
    Dom.Title = function (classStr, properties, children) {
        return elem_1.elem("title", classStr, properties, children);
    };
    Dom.Track = function (classStr, properties, children) {
        return elem_1.elem("track", classStr, properties, children);
    };
    Dom.UList = function (classStr, properties, children) {
        return elem_1.elem("ulist", classStr, properties, children);
    };
    Dom.Unknown = function (classStr, properties, children) {
        return elem_1.elem("unknown", classStr, properties, children);
    };
    Dom.Video = function (classStr, properties, children) {
        return elem_1.elem("video", classStr, properties, children);
    };
    return Dom;
}());
exports.Dom = Dom;
//# sourceMappingURL=dom.js.map