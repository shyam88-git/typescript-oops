class Class_Private2{

    private var_one:string='Hello';

    public var_Two:string=this.var_one;

    private Fun_One():any{

        return "Uptechsys Pvt.Ltd"

        
    }

    public Fun_Two():any{

        return this.Fun_One();
    }



}

let obj7:Class_Private2=new Class_Private2();
console.log(obj7.var_Two , obj7.Fun_Two());








