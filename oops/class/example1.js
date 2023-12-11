var Greeting = /** @class */ (function () {
    function Greeting() {
        this.var_one = "Shyam Sharki";
    }
    Greeting.prototype.fun_one = function () {
        return "Welcome to Uptechsys Pvt.Ltd";
    };
    return Greeting;
}());
var obj = new Greeting();
console.log(obj.var_one, obj.fun_one());
