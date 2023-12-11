//we can make the properties of the class type and inteface readonly by using the readOnly modifier.
//this modifier needs to be initialized at their declaration time or in the constructor.
//we can also access readonly members from outside the class but it's value cannot be changed.



class Country{

    readonly var_one:string="Harish";
    readonly var_two:string="Nirmal";

    constructor(f_var:string , l_var:string){

        this.var_one=f_var;
        this.var_two=l_var;
    }

    fun_one():string{

        return this.var_one;
    }

    fun_two():string{

        return this.var_two;
    }
}
let obj9:Country=new Country("Shyam","Lokesh");
console.log(obj9.fun_one() , obj9.fun_two());
// comp.name="TCS";//name can be initialized only within constructor.