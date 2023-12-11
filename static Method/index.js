var Emp = /** @class */ (function () {
    function Emp(name, age, designation) {
        this.name = name;
        this.age = age;
        this.designation = designation;
        Emp.headCount++;
    }
    Emp.getHeadCount = function () {
        return Emp.headCount;
    };
    Emp.headCount = 0;
    return Emp;
}());
var raghu = new Emp("John", 20, "Front End Developer");
var raghav = new Emp("Raghav", 23, "Backend Developer");
console.log(Emp.getHeadCount());
