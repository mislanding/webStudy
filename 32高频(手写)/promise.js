class TinyPromise {
    value = null;
    reason = null;
    status = 'PENDING';
    onFullfilledCallback = [];
    onRejectedCallback = [];
    constructor(fn) {
        const resolve = (value) => {
            if (this.status === 'PENDING') {
                this.status = 'FULLFILLED';
                this.value = value;
            }
        }

        const reject = (reason) => {
            if (this.status === 'PENDING') {
                this.status = 'FULLFILLED';
                this.reason = reason;
            }
        }

        fn(this.resolve.bind(this), this.reject.bind(this));
    }
    static resolve(value) {
        return value instanceof Promise ?
            value : new TinyPromise((resolve, reject) => resolve(value));
    }
    static reject(reason) {
        return new TinyPromise((resolve, reject) => reject(reason));
    }
    then(onFullfilled, onRejected) {
        typeof onFullfilled === 'function' ? onFullfilled : val => val;
        typeof onRejected === 'function' ? onRejected : reason => {
            throw new Error(reason instanceof Error ? reason.message : reason);
        };
        const self = this;
        return new TinyPromise((resolve, reject) => {
            if (self.status === 'PENDING') {
                self.onFullfilledCallback.push(() => {
                    try {
                        setTimeout(() => {
                            const result = onFullfilled(self.value);
                            result instanceof TinyPromise ? result.then(resolve, reject) : resolve(result);
                        })
                    } catch (e) {
                        onRejected(e);
                    }
                })
                self.onRejectedCallback.push(() => {
                    try {
                        setTimeout(() => {
                            const result = onRejected(self.reason);
                            result instanceof TinyPromise ? result.then(resolve, reject) : reject(result);
                        });
                    } catch (e) {
                        onRejected(e);
                    }
                })
            }
        })
    }
}
Promise.resolve(1).then(val => {
    console.log(1);
});
console.log(2);
new TinyPromise(function(resolve, reject) {
    setTimeout(() => {
        resolve(3);
        console.log(4);
    });
}).then(val => {
    console.log(val);
});
//promise.all
TinyPromise.prototype.all = function(promiseArr) {
        return new Promise(function(resolve, reject) {
            let ans = [];
            let count;
            for (let i = 0; i < promiseArr.length; i++) {
                promiseArr[i].then(val => {
                    ans.push(val);
                    count++;
                    if (count === promiseArr.length) resolve(ans);
                }, err => reject(err));
            }
        });
    }
    //promise.race
TinyPromise.prototype.race = function(promiseArr) {
    return new Promise(function(resolve, reject) {
        let ans = [];
        let count;
        for (let i = 0; i < promiseArr.length; i++) {
            promiseArr[i].then(val => resolve(val), err => reject(err));
        }
    })
}