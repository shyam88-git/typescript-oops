var class_two = /** @class */ (function () {
    function class_two() {
        this.var_name = "Good Morning";
    }
    class_two.prototype.fun_one = function () {
        return this.var_name;
    };
    return class_two;
}());
var obj1 = new class_two();
console.log(obj1.fun_one());
