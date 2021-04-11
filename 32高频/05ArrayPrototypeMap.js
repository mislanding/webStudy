// callback： 
//     生成新数组元素的函数，使用三个参数：
//     currentValue
//         callback数组中正在处理的当前元素
//     index（可选）
//         callback数组中正在处理的当前元素索引
//     array（可选）
//         map方法调用的数组
// thisArg（可选）：
//     执行callback函数时被用作this
// 返回值
// 一个由原数组每个元素执行回调函数结果组成的新数组

Array.prototype.map = function(callback, thisArg) {
    if (this == undefined) {
        throw TypeError("this is null or not undefined");
    }
    if (typeof callback != "function") {
        throw TypeError("callback is not a function");
    }
    const res = [];
    const O = Object(this);
    const len = O.length >>> 0;
    for (let i = 0; i < len; i++) {
        if (i in O) {
            res[i] = callback.call(thisArg, O[i], i, this);
        }
    }
    return res;
}
let arr = [1, 2, 3];
console.log(arr.map(val => {
    return val + 1;
}));