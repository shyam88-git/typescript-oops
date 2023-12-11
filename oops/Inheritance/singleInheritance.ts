class Parent{

    var_one:string="Shyam";

}
class Child extends Parent{

    var_two:string="Harish";


}

let ob1:Parent=new Parent();
console.log(ob1.var_one);

let ob2:Child=new Child();
console.log(ob2.var_one , ob2.var_two);


let ob3:Parent=new Child();
console.log(ob3.var_one);

// console.log(ob3.var_two);//var_two doesnot exist on type parent

// let obj4:Child=new Parent();
//Property 'var_two' is missing in type 'Parent' but required in type 'Child'.ts(2741)


