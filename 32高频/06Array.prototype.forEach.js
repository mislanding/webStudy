// 参数：
// callback
//     为数组中每个元素执行的函数，该函数接收一至三个参数：
//     currentValue：
//         数组中当前正在处理的元素
//     index（可选）:
//         数组中正在处理的当前元素的索引。
//     array（可选）：
//         forEach正在操作的数组
// thisArg（可选）
//     当执行回调函数callback时，用作this的值
//返回值：
//     undefined
Array.prototype.forEach = function(callback, thisArg) {
    if (this == undefined) {
        throw TypeError("this is null or not defined")
    }
    if (typeof callback != 'function') {
        throw TypeError("callback is not a function")
    }
    const O = Object(this)
    const len = O.length >>> 0
    for (let i = 0; i < len; i++) {
        if (i in O) {
            O[i] = callback.call(this, O[i], i, O)
            console.log(O[i])
        }
    }
}

let arr = [2, 3, 4];
console.log(arr.forEach(cal => {
    return cal - 1;
}))
console.log(arr);