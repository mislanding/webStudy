var a = 1234;

function reverse(a) {
    if (a === 0) return '';
    let str = a % 10 + '';
    return str + reverse(Math.floor(a / 10));
}
console.log("'" + reverse(a) + "'");