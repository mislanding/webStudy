// 触发高频时间后n秒内函数只会执行一次,如果n秒内高频时间再次触发,则重新计算时间。
//触发时函数不立即执行，若后续n秒内未触发则执行，若触发则重新计算
let debounce = (fn, time) => {
    let timeout = null;
    return function() {
        clearTimeout(timeout)
        timeout = setTimeout(() => {
            fn.apply(this, arguments);
        }, time)
    }
}