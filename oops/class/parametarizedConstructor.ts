class Class_Four{

    sub_one:string;
    sub_two:string;
    sub_three:string;

    constructor(arg1:string, arg2:string , arg3:string){

        this.sub_one=arg1;
        this.sub_two=arg2;
        this.sub_three=arg3;
    }
}

let obj4:Class_Four=new Class_Four("React JS with Typescript" ,"React JS with Node JS" ,"React JS with Mongodb");
console.log(obj4.sub_one , obj4.sub_two ,obj4.sub_three);


let obj5:Class_Four=new Class_Four("Typescript with react js","Typescript with node js","Typescript with Mongodb");