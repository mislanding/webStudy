// // setTimeout(function() {
// //     console.log(1)
// // }, 0)
// // new Promise(function(resolve, reject) {
// //     console.log(2)
// //     for (let i = 0; i < 10000; i++) {
// //         if (i === 9999) resolve(3);
// //     }
// //     console.log(3)
// // }).then(function(val) {
// //     console.log(4)
// // })
// // console.log(5)

// async function async1() {
//     console.log('async1 start') //2
//     await async2()
//     console.log('async1 end') //6
// }

// async function async2() {
//     console.log('async2') //3
// }

// console.log('script start') //1

// setTimeout(() => {
//         console.log('setTimeout')
//     }, 0) //8

// async1()

// new Promise((resolve) => {
//     console.log('promise 1') //4
//     resolve(1)
// }).then(() => {
//     console.log('promise 2') //7
// })

// console.log('script end') //5

async function async1() {
    console.log('async1 start');
    await async2();
    console.log('async1 end');
}
async function async2() {
    console.log('async2');
}
console.log('script start');
setTimeout(function() {
    console.log('setTimeout');
}, 0)
async1();
new Promise(function(resolve) {
    console.log('promise1');
    resolve();
}).then(function() {
    console.log('promise2');
});
console.log('script end');