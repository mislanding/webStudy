Function.prototype.bind = function(context, ...args) {
    if (typeof this !== 'function') {
        throw TypeError('TypeError');
    }
    let self = this;
    return function F() {
        if (this instanceof F) {
            return self(...args, ...arguments);
        }
        return self.apply(context, [...args, ...arguments])
    }
}