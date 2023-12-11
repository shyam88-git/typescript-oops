interface interface3{

    fun_one():void,
    fun_two():void,
    fun_three():void
}

let obj3:interface3={

    fun_one:()=>{

        console.log("Func one");


    },
    fun_two:()=>{

        console.log("Func two");


    },
    fun_three:()=>{

        console.log("Funct three");


    }
}

obj3.fun_one();
obj3.fun_two();
obj3.fun_three();