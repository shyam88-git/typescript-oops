interface interface8{

    fun_one():number;
    


}

interface inteface9{

    fun_two():number;
}

interface inteface10 extends interface8, inteface9{

    fun_three():number
}

let obj7:inteface10={

    fun_one:():number=>{

        return 100;
    },

    fun_two:():number=>{

        return 200;
    },

    fun_three:():number=>{

        return 300;
    }
}

console.log(obj7.fun_one(), obj7.fun_two(),obj7.fun_three());
