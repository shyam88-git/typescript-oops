function Greeting() {
    var para1 = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        para1[_i] = arguments[_i];
    }
    console.log(para1);
}
Greeting(); //if we not pass anything then it gives the empty array.
Greeting(100);
Greeting(undefined, undefined);
