// 第一个参数为绑定的this，默认为window，第二个参数是参数列表
Function.prototype.apply = function(context = window, args) {
    if (typeof this !== 'function') {
        throw new TypeError('Type error')
    }
    const fn = Symbol('fn')
    context[fn] = this;
    const res = context[fn](...args);
    delete context[fn]
    return res
}