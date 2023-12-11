
//optional parameters
//we will represent optional parameter with "?"
//ES6
function Greeting(para1?:string):void{

    console.log(para1);


}

Greeting();//undefined
Greeting("Hello");//Hello

Greeting(null)//null