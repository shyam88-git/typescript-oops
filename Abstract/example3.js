var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Class_One = /** @class */ (function () {
    function Class_One() {
    }
    Class_One.prototype.func_one = function () {
        return "React jS";
    };
    return Class_One;
}());
var Class_Six = /** @class */ (function (_super) {
    __extends(Class_Six, _super);
    function Class_Six() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Class_Six.prototype.fun_Two = function () {
        return "Node JS";
    };
    return Class_Six;
}(Class_One));
var obj8 = new Class_Six();
console.log(obj8.func_one(), obj8.fun_Two());
