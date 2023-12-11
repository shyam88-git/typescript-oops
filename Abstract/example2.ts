abstract class Class_one {

    fun_One():string{

        return "Func one";
    }

    abstract fun_two():string;




    
}

abstract class Class_Two extends Class_one{

    fun_two(): string {
        return "Function Two"
    }

    abstract fun_three():string
}

class Class_three extends Class_Two {

    fun_three(): string {
        return "Function Three"
    }
}

let obj:Class_three=new Class_three();
console.log(obj.fun_One(), obj.fun_two(), obj.fun_three());