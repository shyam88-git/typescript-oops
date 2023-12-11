class Emp{

    public empName:string;
    protected empCode:number;

    constructor(name:string ,code:number){

        this.empName=name;
        this.empCode=code;
    }
}

class SalesEmployees extends Emp{

    private department:string;

    constructor(name:string, code:number,department:string){

        super(name,code);
        this.department=department;
    }
}

let emp=new SalesEmployees("John",123,"Sales");
//console.log(emp.empCode);
//Property 'empCode' is protected and only accessible within class 'Emp' and its subclasses.ts(2445)