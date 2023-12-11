var Class_Private2 = /** @class */ (function () {
    function Class_Private2() {
        this.var_one = 'Hello';
        this.var_Two = this.var_one;
    }
    Class_Private2.prototype.Fun_One = function () {
        return "Hello Uptechsys Pvt.Ltd";
    };
    Class_Private2.prototype.Fun_Two = function () {
        return this.Fun_One();
    };
    return Class_Private2;
}());
var obj7 = new Class_Private2();
console.log(obj7.var_Two, obj7.Fun_Two());
