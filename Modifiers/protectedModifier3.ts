class Class_One{

    protected var_one:string="Hello";


}
class Class_Two extends Class_One{

    public var_two:string=this.var_one;
}

let obj10:Class_Two=new Class_Two();
console.log(obj10.var_two);
