//we cannot create to the object to the private constructor class.
//it is applicable for function , variables and constructor.
//we cannot access the private members with class object.
//private members won't accessble to child classes.
var Class_Private = /** @class */ (function () {
    function Class_Private() {
        this.var_one = "Hello";
    }
    Class_Private.prototype.fun_one = function () {
        return this.var_one;
    };
    return Class_Private;
}());
var obj4 = new Class_Private();
// obj4.var_one;
// Property 'var_one' is px`rivate and only accessible within class 'Class_Private'.ts(2341)
//obj4.fun_one();
//Property 'fun_one' is private and only accessible within class 'Class_Private'.ts(2341)
