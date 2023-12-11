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
var Employee = /** @class */ (function () {
    function Employee() {
        this.FirstName = "";
        this.LastName = "";
        this.Designation = "";
    }
    Employee.prototype.print = function () {
        document.write("".concat(this.FirstName, " ").concat(this.LastName, " -").concat(this.Designation, " <br>"));
    };
    return Employee;
}());
var Developer = /** @class */ (function (_super) {
    __extends(Developer, _super);
    function Developer() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.FirstName = "Kiran";
        _this.LastName = "Kumar";
        _this.Designation = "Developer";
        _this.DeveloperRole = "Build,Debug,Test";
        return _this;
    }
    Developer.prototype.print = function () {
        _super.prototype.print.call(this);
        document.write(this.DeveloperRole);
    };
    return Developer;
}(Employee));
var Admin = /** @class */ (function (_super) {
    __extends(Admin, _super);
    function Admin() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.FirstName = "Rabindra";
        _this.LastName = "Bohara";
        _this.Designation = "Admin";
        _this.AdminRole = "Authentication/Authorization";
        return _this;
    }
    Admin.prototype.print = function () {
        _super.prototype.print.call(this);
        document.write(this.AdminRole);
    };
    return Admin;
}(Employee));
var Manger = /** @class */ (function (_super) {
    __extends(Manger, _super);
    function Manger() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.FirstName = "Jay";
        _this.LastName = "Khadayat";
        _this.Designation = "Manager";
        _this.ManagerRole = "Approval";
        return _this;
    }
    Manger.prototype.print = function () {
        _super.prototype.print.call(this);
        document.write(this.ManagerRole);
    };
    return Manger;
}(Employee));
var employees = [new Developer(), new Admin(), new Manger()];
