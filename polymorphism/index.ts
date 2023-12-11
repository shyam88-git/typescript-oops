class Employee{

    public FirstName:string="";
    public LastName:string="";
    public Designation:string="";
    public print():void{

        document.write(`${this.FirstName} ${this.LastName} -${this.Designation} <br>`);
    }
}

class Developer extends Employee{

    FirstName="Kiran";
    LastName="Kumar";
    Designation="Developer";
    DeveloperRole="Build,Debug,Test";
    print(){

        super.print();
        document.write( this.DeveloperRole);
    }
}

class Admin extends Employee{

    FirstName="Rabindra";
    LastName="Bohara";
    Designation="Admin";
    AdminRole="Authentication/Authorization";
    print(){

        super.print();
        document.write(this.AdminRole);
    }
}

class Manger extends Employee{
    FirstName="Jay";
    LastName="Khadayat";
    Designation="Manager";
    ManagerRole="Approval";
    print(){

        super.print();
        document.write(this.ManagerRole);
    }


}

let employees=[new Developer() , new Admin() , new Manger()];