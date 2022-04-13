(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports"], factory);
    }
})(function (require, exports) {
    "use strict";
    exports.__esModule = true;
    exports.Hello_ = void 0;
    function Hello_() {
        console.log("hello world");
    }
    exports.Hello_ = Hello_;
});
//# sourceMappingURL=hello_word.js.map