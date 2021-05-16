//1、promise通过构造函数获取一个exector，exector接受resolve和reject两个函数并
//立即执行，通过resolove/reject改变状态
//2、状态改变后立即触发原型链上then/catch
//3、Promise类拥有静态方法resolve、reject、all、race
//then接收两个函数、分别对应FULLFILLED和REJECTED
const PENDING = 'PENDING'
const FULLFILLED = 'FULLFILLED'
const REJECTED = 'REJECTED'
class Promise {
    constructor(exector) {
        //初始化状态
        this.status = PENDING
            //将成功、失败结果放this上、便于then
        this.value = undefined
        this.reason = undefined
            //成功态回调函数队列
        this.onFullfilledCallbacks = []
            //失败态回调函数队列
        this.onRejectedCallbacks = []

        const resolve = value => {
            if (this.status === 'PENDING') {
                this.status = FULLFILLED
                this.value = value
                    //成功态函数依次执行
                this.onFullfilledCallbacks.forEach(fn => fn(this.value))
            }
        }
        const reject = reason => {
                if (this.status === 'PENDING') {
                    this.status = REJECTED
                    this.reason = reason
                        //失败态函数依次执行
                    this.onRejectedCallbacks.forEach(fn => fn(this.value))
                }
            }
            //立即执行exector
            //把内部的resolve和reject传入exector，用户可调用resolve和reject
        try {
            exector(resolve, reject)
        } catch (e) {
            reject(e)
        }
    }
    then(onFullfilled, onRejected) {
        onFullfilled = typeof onFullfilled === 'function' ? onFullfilled : value => value
        onRejected = typeof onRejected === 'function' ? onRejected : reason => {
                throw new Error(reason instanceof Error ?
                    reason.message : reason
                )
            }
            //保存this
        const self = this

        return new Promise((resolve, reject) => {
            if (self.status === PENDING) {
                if (self.status === PENDING) {
                    self.onFullfilledCallbacks.push(() => {
                        try {
                            setTimeout(() => {
                                const result = onFullfilled(self.value)
                                result instanceof Promise ? result.then(resolve, reject) : resolve(result)
                            })
                        } catch (error) {

                        }
                    })
                    self.onRejectedCallbacks.push(() => {
                        try {
                            setTimeout(() => {
                                const result = onRejected(self.value)
                                result instanceof Promise ? result.then(resolve, reject) : reject(result)
                            })
                        } catch (e) {
                            reject(e)
                        }
                    })
                }
            } else if (self.status === FULLFILLED) {
                setTimeout(() => {
                    try {
                        const result = onFullfilled(self.value)
                        result instanceof Promise ? result.then(resolve, reject) : resolve(result)
                    } catch (error) {
                        reject(error)
                    }
                })
            } else if (self.status === REJECTED) {
                try {
                    setTimeout(() => {
                        const result = onRejected(self.reason)
                        result instanceof Promise ? result.then(resolve, reject) : resolve(result)
                    })
                } catch (e) {
                    reject(e)
                }
            }
        })
    }
    catch (onRejected) {
        return this.then(null, onRejected)
    }
    static resolve(value) {
        if (value instanceof Promise) {
            return value
        } else {
            return new Promise((resolve, reject) => resolve(value))
        }

    }
    static reject(reason) {
        return new Promise((resolve, reject) => {
            reject(reason)
        })
    }

    //返回一个promise对象，只有当所有promise都成功时返回的promise状态才成功，需要注意的点是：
    //所有的promise状态变为FULFILLED，返回的promise状态才变为FULFILLED。
    // 一个promise状态变为REJECTED，返回的promise状态就变为REJECTED。
    // 数组成员不一定都是promise，需要使用Promise.resolve()处理。
    static all(promiseArr) {
        const len = promiseArr.length
        const value = new Array(len)
            //记录已经成功执行的promise任务
        let count = 0;
        return new Promise((resolve, reject) => {
            for (let i = 0; i < len; i++) {
                Promise.resolve(promiseArr[i]).then(
                    val => {
                        value[i] = val
                        count++;
                        if (count === len) resolve(value)
                    },
                    err => reject(err)
                )
            }
        })
    }
    static race(promiseArr) {
        return new Promise((resolve, reject) => {
            promiseArr.forEach(p => {
                Promise.resolve(p).then(
                    val => resolve(val),
                    err => reject(err)
                )
            })
        })
    }
}

let promise = new Promise((resolve, reject) => {
    resolve(1)
}).then(val => {
    console.log(val)
    return val;
}).then(val => {
    console.log(val)
})
let promsie_2 = new Promise((resolve, reject) => {
        resolve(1)
    })
    .then(2)
    .then(3)
    .then((val) => {
        return val + 1;
    })
    .then(value => {
        console.log(value)
    })
    // 1