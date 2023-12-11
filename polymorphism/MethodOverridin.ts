
class Parent{

    fun_one():void{

        console.log("child class function");
    }


    
}
class Child extends Parent{

    fun_one():void{

        console.log("subclass function");


    }
}

let obj:Child=new Child();
console.log(obj.fun_one());
