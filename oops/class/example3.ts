class Class_Three{

    sub_one:string;
    sub_two:string;
    sub_three:string;

    constructor(){

        this.sub_one="React JS with Typescript";
        this.sub_two="Node JS with Typescript";
        this.sub_three="Mongodb with Typescript";


    }
}

let obj3:Class_Three=new Class_Three();
console.log(obj3.sub_one , obj3.sub_two ,obj3.sub_three);