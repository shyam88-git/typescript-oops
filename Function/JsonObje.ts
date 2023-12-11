let obj:any={

    key1:"",
    key2:function(){

        // let inner=function(){

        //     this.key1="React JS with Typescript"
        //     //note this represent the anonymous function itslef not to the obj it's the overcomemes


        // }

        let inner=()=>{

            this.key1="React JS with Typescript" //now this  keywoard represent the obj not the arrow function itslef.
        }
        inner();
    }
}

obj.key2();
console.log(obj.key1);

//anonymous function breaks the parents scope
//arrow function follows the parent scope