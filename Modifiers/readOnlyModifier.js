//we can make the properties of the class type and inteface readonly by using the readOnly modifier.
//this modifier needs to be initialized at their declaration time or in the constructor.
//we can also access readonly members from outside the class but it's value cannot be changed.
var Country = /** @class */ (function () {
    function Country(f_var, l_var) {
        this.var_one = "Harish";
        this.var_two = "Nirmal";
        this.var_one = f_var;
        this.var_two = l_var;
    }
    Country.prototype.fun_one = function () {
        return this.var_one;
    };
    Country.prototype.fun_two = function () {
        return this.var_two;
    };
    return Country;
}());
var obj9 = new Country("Shyam", "Lokesh");
console.log(obj9.fun_one(), obj9.fun_two());
// comp.name="TCS";//name can be initialized only within constructor.
