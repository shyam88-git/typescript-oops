class Class_One{

    //public only applicable to variables, function and constructor not for class.
    //they are by default accessible to child class.
    public var_one:string;

    public constructor(){

        this.var_one="Hello Uptechsys Pvt.Ld";
    }

    public fun_one(){

        return this.var_one;
    }
}

class Class_Two extends Class_One{};
let obj:Class_Two=new Class_Two();
console.log(obj.var_one);