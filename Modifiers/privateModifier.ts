//we cannot create to the object to the private constructor class.
//it is applicable for function , variables and constructor.
//we cannot access the private members with class object.
//private members won't accessble to child classes.

class Class_Private{

    private var_one:string="Hello";

    private fun_one(){

        return this.var_one;
    }
}

let obj4:Class_Private=new Class_Private();
// obj4.var_one;
// Property 'var_one' is px`rivate and only accessible within class 'Class_Private'.ts(2341)

//obj4.fun_one();
//Property 'fun_one' is private and only accessible within class 'Class_Private'.ts(2341)