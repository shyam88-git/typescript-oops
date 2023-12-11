abstract class Class_One{

    func_one():void{

        console.log("Function one");
    };

    abstract  func_two():void;


}

class Class_Two extends Class_One{

    func_two(): void {

        console.log("Funct two");
        
    }
}

let obj:Class_Two=new Class_Two();
console.log( obj.func_two());