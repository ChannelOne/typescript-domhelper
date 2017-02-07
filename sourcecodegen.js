"use strict";

var fs = require("fs");
var path = require("path");

var regex = /declare var HTML([a-zA-Z]+)Element/g;

var fileBegin = `
import {elem} from "./elem"

export class Dom {
`;

var fileEnd = `
}
`;

function getHTMLType(tagContent) {
    return "HTML" + tagContent + "Element";
}

function genDefinition(tagContent) {
    var t = getHTMLType(tagContent);
    return "\n" +
    "    static " + tagContent + "(classStr?: string, properties?: {any: string}, children?: Node[]): " + t + " {\n" +
    "        return <" + t +">elem(\"" + tagContent.toLowerCase() + "\", classStr, properties, children);\n" +
    "    }\n";
}

var all = fileBegin;

fs.readFile(path.join(__dirname, "resources/htmllib.d.ts"), "utf8", function (err, data) {
    if (err) {
        console.error(err);
        return;
    }

    var execResult = null;
    var tagSet = new Set();

    while ((execResult = regex.exec(data)) !== null) {
        tagSet.add(execResult[1]);
    }

    tagSet.forEach(function (value) {
        all += genDefinition(value);
    });

    all += fileEnd;

    fs.writeFile(path.join(__dirname, "src/dom.ts"), all, function(err) {
        if (err) {
            console.error(err);
        } else {
            console.log("gen success");
        }
    })

});
