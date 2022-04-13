(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "./hello_word"], factory);
    }
})(function (require, exports) {
    "use strict";
    exports.__esModule = true;
    var hello_word_1 = require("./hello_word.js");
    debugger;
    hello_word_1.Hello_();
});
//# sourceMappingURL=index.js.map