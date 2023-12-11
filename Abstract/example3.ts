interface inteface1{

    func_one():string,
}

abstract class Class_One implements inteface1{

    func_one(): string {
        return "React jS"
    }

   abstract  fun_Two():string;
}

class Class_Six extends Class_One{

    fun_Two(): string {
        return "Node JS"
    }
}

let obj8:Class_Six=new Class_Six();
console.log(obj8.func_one() , obj8.fun_Two());


