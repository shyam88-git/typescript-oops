class Parent1{

    public fun_one():string{

        return "Parent Class";
    }


}
class Child1 extends Parent1{

    public fun_two():string{

        return "Child Class";
    }




}
class SubChild extends Child1{

    public fun_three():string{

        return "Subchild";
    }


}

let obj:SubChild=new SubChild();
console.log(obj.fun_one(), obj.fun_two(),obj.fun_three());