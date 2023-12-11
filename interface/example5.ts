interface inteface4{

    var_one:string;
}
interface inteface5 extends inteface4{

    var_two:string;
}

let obj6:inteface5={

    var_one:"Hello1",
    var_two:"Hello2"




}

console.log(obj6.var_one,obj6.var_two );