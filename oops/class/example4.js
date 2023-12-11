var Class_Five = /** @class */ (function () {
    function Class_Five(arg1, arg2, arg3) {
        this.sub_one = arg1;
        this.sub_two = arg2;
        this.sub_three = arg3;
    }
    Class_Five.prototype.fun_one = function () {
        return this.sub_one;
    };
    Class_Five.prototype.fun_two = function () {
        return this.sub_two;
    };
    Class_Five.prototype.fun_three = function () {
        return this.sub_three;
    };
    return Class_Five;
}());
var obj6 = new Class_Five("React JS With typescript", "MongoDB with typescript", "Node JS with Typescript");
console.log(obj6.fun_one(), obj6.fun_two(), obj6.fun_three());
