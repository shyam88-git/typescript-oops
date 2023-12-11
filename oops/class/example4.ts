class Class_Five{

    private sub_one:string;
    private sub_two:string;
    private sub_three:string;
    
    constructor(arg1:string ,arg2:string ,arg3:string){

        this.sub_one=arg1;
        this.sub_two=arg2;
        this.sub_three=arg3;
    }

    public fun_one():string{

        return this.sub_one;

    }
    public fun_two():string{

        return this.sub_two;
    }

    public fun_three():string{

        return this.sub_three;
    }

}

let obj6:Class_Five=new Class_Five("React JS With typescript","MongoDB with typescript" ,"Node JS with Typescript");
console.log(obj6.fun_one() , obj6.fun_two(), obj6.fun_three());