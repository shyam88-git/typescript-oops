let fun_two=function(para1:string, para2:string="Hello" ,para3?:string,...para4:any):void{

    console.log(para1,para2,para3,para4);

}

//fun_two();//expected at least one argument but got 0;
fun_two("Hello");