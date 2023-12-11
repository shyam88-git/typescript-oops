
interface inteface1{

    var_one:string;


}
interface inteface2 extends inteface1{

    var_two:string;


}

interface inteface3 extends inteface2{

    var_three:string
}


let obj6:inteface3={

    var_one:"Hello1",
    var_two:"Hello2",
    var_three:"Hello3"
}

console.log(obj6.var_one,obj6.var_two,obj6.var_three);