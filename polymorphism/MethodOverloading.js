var Employees = /** @class */ (function () {
    function Employees() {
    }
    Employees.prototype.find_Five = function (para1, para2, para3) {
        console.log("Parameters: ".concat(para1, ", ").concat(para2, ", ").concat(para3));
    };
    return Employees;
}());
var emp = new Employees();
emp.find_Five("Janjyoti College", "Sumit College", "Bagmati college");
emp.find_Five(10, 20, 30);
