# Typescript DOM helper
DOM helper for Typescript.

The `elem` method is powerful for dom generation,
it also has alias called `element`.

## Install

```
npm i typescript-domhelper
```

## Powerful element generation

Use Typescript to generate DOM tree.

Usage:

```typescript

import {elem, element, text} from "typescript-domhelper"

let myElement1 = elem("p");

let myElement3 = element("a", "", { // the same as above
    id: "myAnchor"
});

let myElement5: HTMLElement;

let myElement6: HTMLElement;

let myElement4 = elem("div", "container", null, [
    myElement5 = elem("div", "container", null, [
        myElement6 = elem("p", "", null, [
            text("Hello world!")
        ],
        myElement3,
    ]
]);

```

## Powerful typed element generation

Now let's see the real magic, DOM generation with typed.
The `Dom` class api have the same parameters as `elem`,  but it can specific the type of the return value, it contains **all** the elements of HTML.

![dom.gif](https://ooo.0o0.ooo/2017/02/08/589af7568ae5f.gif)

Usage:

```typescript
import {Dom} from "typescript-domhelper"

let myDiv = Dom.Div("container"); // the type of `myDiv` is HTMLDivElement

let myImg: HTMLImageElement = Dom.Img(null, {id: "myImage"}); // HTMLImageElement
```

Relied on the type system of Typescript, you can write code more easily.
