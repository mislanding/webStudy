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

        const resolve = value => {
            if (this.status === 'PENDING') {
                this.status = FULLFILLED
                this.value = value
            }
        }
        const reject = reason => {
                if (this.status === 'PENDING') {
                    this.status = REJECTED
                    this.reason = reason
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
        //then是微任务，用setTimeout模拟
        setTimeout(() => {
            if (this.status === FULLFILLED) {
                onFullfilled(this.value)
            } else if (this.status === REJECTED) {
                onRejected(this.reason)
            }
        })
    }
    catch () {}
    static resolve() {

    }
    static reject() {

    }
    static all() {}
    static race() {}
}

const promise = new Promise((resolve, reject) => {
    Math.random() < 0.5 ? resolve(1) : reject(-1);
}).then(
    res => console.log(res),
    err => console.log(err),
)