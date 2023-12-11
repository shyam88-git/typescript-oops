var obj = {
    key1: "",
    key2: function () {
        // let inner=function(){
        var _this = this;
        //     this.key1="React JS with Typescript"
        //     //note this represent the anonymous function itslef not to the obj it's the overcomemes
        // }
        var inner = function () {
            _this.key1 = "React JS with Typescript";
        };
        inner();
    }
};
obj.key2();
console.log(obj.key1);
