class Student{

    public studCode:number;
    protected studName:string;

    constructor(code:number, name:string){

        this.studCode=code;
        this.studName=name;
    }
}

class Person extends Student{

    private department:string;

    constructor(code:number, name:string, department:string){

        super(code,name);
        this.department=department;
    }

    public getDepartment(){

        return this.department;
        
       }

    public getName(){

        return this.studName;
    }
}

let Obj8:Person=new Person(1, "Shyam", "FrontEnd");

console.log(Obj8.getName());

console.log(Obj8.getDepartment());
