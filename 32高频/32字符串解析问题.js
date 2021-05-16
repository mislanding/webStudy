const fn1 = function(str, obj) {
    let res = '' + str;
    let flag = false;
    let start;
    for (let i = 0; i < str.length; i++) {
        if (str[i] === '{') {
            flag = true;
            start = i + 1;
        }
        if (str[i] === '}' && flag === true) {

            console.log(res);
            console.log(str.slice(start - 1, i + 1));
            res = res.replace(str.slice(start - 1, i + 1), match(str.slice(start, i), obj));
            flag === false;
        }
    }
    return res;
}
const match = function(str, obj) {
    const key = str.split('.')[1];
    console.log(key);
    if (key in obj) {
        console.log(obj[key]);
        return obj[key];
    }
    return '{' + str + '}';
}

// const fn1 = (str, obj) => {
//         let res = '';
//         // 标志位，标志前面是否有{
//         let flag = false;
//         let start;
//         for (let i = 0; i < str.length; i++) {
//             if (str[i] === '{') {
//                 flag = true;
//                 start = i + 1;
//                 continue;
//             }
//             if (!flag) res += str[i];
//             else {
//                 if (str[i] === '}') {
//                     flag = false;
//                     res += match(str.slice(start, i), obj);
//                 }
//             }
//         }
//         return res;
//     }
//     // 对象匹配操作
// const match = (str, obj) => {
//     const keys = str.split('.').slice(1);
//     let index = 0;
//     let o = obj;
//     while (index < keys.length) {
//         const key = keys[index];
//         if (!o[key]) {
//             return `{${str}}`;
//         } else {
//             o = o[key];
//         }
//         index++;
//     }
//     return o;
// }


var a = {
    b: 123,
    c: '456',
    e: '789',
}
var str = `a{a.b}aa{a.c}aa {a.d}aaaa`;

console.log(fn1(str, a));