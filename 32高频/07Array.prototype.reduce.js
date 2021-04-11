// 参数：
//     callback：
//         执行中每个值的函数，包含四个参数
//         accumulator
//             累计器累计回调的返回值;它是上一次调用回调时返回的累积值，或initiaValue
//         currentValue
//             数组中正在处理的元素
//         index（可选）
//         array（可选）
//     initiaValue（可选）
//         作为第一次调用callback函数时第一个参数的值。如果没有提供初始值，则讲使用数组中第一个元素。再没有初始值的空数
//         组上调用reduce将报错    
Array.prototype.reduce = function(callback, initiaValue) {
    if (this == undefined) {
        throw TypeError('this is null or not defined')
    }
    if (typeof callback !== 'function') {
        throw TypeError(callback + 'is not a function')
    }
    const O = Object(this);
    const len = O.length >>> 0;
    let accumulator = initiaValue;
    let k = 0;
    if (accumulator === undefined) {
        while (k < len && !(k in O)) {
            k++;
        }
        if (k >= len) {
            throw new TypeError('Reduce of empty array with no initial value')
        }
        accumulator = O[k++];
    }
    while (k < len) {
        if (k in O) {
            accumulator = callback.call(undefined, accumulator, O[k], k, O)
        }
        k++;
    }
    return accumulator
}