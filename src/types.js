/**
 * Common types
 */

is.register("string", function(thing) {
    return typeof thing === "string";
});

is.register("number", function(thing) {
    return typeof thing === "number";
});

is.register("function", function(thing) {
    return typeof thing  === "function";
});

is.register("object", function(thing) {
    return typeof thing === "object" && !(thing instanceof Array);
});

is.register("bool", function(thing) {
    typeof thing === "boolean";
});

is.register("regexp", function(thing) {
    return thing instanceof RegExp;
});

is.register("date", function(thing) {
    return thing instanceof Date;
});

is.register("undefined", function(thing) {
    return thing === undefined;
});

is.register("null", function(thing) {
    return thing === null;
});

is.register("NaN", function(thing) {
    return isNaN(thing);
});

is.register("finite", function(thing) {
    return isFinite(thing);
});

is.register("infinity", function(thing) {
    return thing === Infinity || thing === -Infinity;
});

is.register("falsy", function(thing) {
    return !thing;
});

is.register("truthy", function(thing) {
    return !!thing;
});


/**
 * DOM
 */

is.register("node", function(thing) {
    return thing instanceof Node;
});

is.register("element", function(thing) {
    return thing instanceof Element;
});

is.register("document", function(thing) {
    return thing instanceof Document;
});

is.register("documentFragment", function(thing) {
    return thing instanceof DocumentFragment;
});

is.register("doctype", function(thing) {
    return thing instanceof DocumentType;
});

is.register("textNode", function(thing) {
    return is(thing, "node") && thing.nodeType && thing.nodeType === Node.TEXT_NODE;
});

is.register("comment", function(thing) {
    return is(thing, "node") && thing.nodeType && thing.nodeType === Node.COMMENT_NODE;
});


/**
 * HTML5
 */

is.register("arrayBuffer", function(thing) {
    return ArrayBuffer && thing instanceof ArrayBuffer;
});

is.register("dataView", function(thing) {
    return DataView && thing instanceof DataView;
});

is.register("weakMap", function(thing) {
    return WeakMap && thing instanceof WeakMap;
});

is.register("weakSet", function(thing) {
    return WeakSet && thing instanceof WeakSet;
});

is.register("symbol", function(thing) {
    return Symbol && thing instanceof Symbol;
});