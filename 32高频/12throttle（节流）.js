// 高频时间触发,但n秒内只会执行一次,所以节流会稀释函数的执行频率。
var throttle = (fn, time) => {
    let flag = true;
    return function() {
        if (!flag) {
            return false;
        }
        flag = false;
        setTimeout(() => {
            fn.apply(this, arguments);
            flag = true;
        }, time);
    }
}