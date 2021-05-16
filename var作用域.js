// for (var i = 0; i < 5; i++) {
//     setTimeout(function() {
//         console.log(i) // b
//     }, 1000 * i)
// }
// console.log(i) // a

// var b = 10;
// (function b() {
//     b = 20;
//     console.log(b);
// })();
// for (var i = 0; i < 5; i++) {
//     (function(i) {
//         setTimeout(function() {
//             console.log(i) // b
//         }, 1000 * i)
//     })(i);
// }

// for (let i = 0; i < 5; i++) {
//     (function(i) {
//         setTimeout(function() {
//             console.log(i) // b
//         }, 1000 * i)
//     })(i);
// }

// for (var i = 0; i < 5; i++) {
//     setTimeout(console.log(i), 1000 * 5);
// }
// var b = 10;
// (function b() {            
//     b = 20;
//     console.log(b);
// })();
// var a = 10;
// (function() {
//     console.log(a)
//     a = 5
//     console.log(window.a)
//     var a = 20;
//     console.log(a)
// })()

var arr = [102, 15, 22, 29, 3, 8];
console.log(arr.sort());