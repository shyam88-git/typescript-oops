var fun_two = function (para1, para2, para3) {
    if (para2 === void 0) { para2 = "Hello"; }
    var para4 = [];
    for (var _i = 3; _i < arguments.length; _i++) {
        para4[_i - 3] = arguments[_i];
    }
    console.log(para1, para2, para3, para4);
};
fun_two("Hello");
