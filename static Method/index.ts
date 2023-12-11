class Emp{

    private static headCount:number=0; 

    constructor( private name:string ,private age:number , private designation:string){
        Emp.headCount++;


    }

    public static getHeadCount(){

        return Emp.headCount;
    }

}
let raghu=new Emp("John",20,"Front End Developer");
let raghav=new Emp("Raghav",23,"Backend Developer");
console.log(Emp.getHeadCount());