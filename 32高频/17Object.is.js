//主要解决+0 === -0 //true
//主要结局 NaN === NaN //false
const is = (x, y) => {
    if (x === y) {
        return x !== 0 || y !== 0 || 1 / x === 1 / y;
    } else {
        return x !== x && y !== y;
    }
}