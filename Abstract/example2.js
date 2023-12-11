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
var Class_one = /** @class */ (function () {
    function Class_one() {
    }
    Class_one.prototype.fun_One = function () {
        return "Func one";
    };
    return Class_one;
}());
var Class_Two = /** @class */ (function (_super) {
    __extends(Class_Two, _super);
    function Class_Two() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Class_Two.prototype.fun_two = function () {
        return "Function Two";
    };
    return Class_Two;
}(Class_one));
var Class_three = /** @class */ (function (_super) {
    __extends(Class_three, _super);
    function Class_three() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Class_three.prototype.fun_three = function () {
        return "Function Three";
    };
    return Class_three;
}(Class_Two));
var obj = new Class_three();
console.log(obj.fun_One(), obj.fun_two(), obj.fun_three());
