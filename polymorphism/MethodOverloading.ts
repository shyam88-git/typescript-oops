class Employees{

    find_Five(para1:string , para2:string, para3:string):void;
    find_Five(para1:number, para2:number ,para3:number):void;

    find_Five(para1:any , para2:any, para3:any):void{

        console.log(`Parameters: ${para1}, ${para2}, ${para3}`);
  }
    }


let emp:Employees=new Employees();
emp.find_Five("Janjyoti College","Sumit College","Bagmati college");
emp.find_Five(10,20,30);
