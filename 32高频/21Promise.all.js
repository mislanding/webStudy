Promise.myAll = function(promiseArr) {
    return new Promise((resolve, reject) => {
        const ans = []
        let count = 0
        for (let i = 0; i < promiseArr.length; i++) {
            Promise.resolve(promiseArr[i]).then(val => {
                ans.push(val)
                count++
                if (coutn === promiseArr.length) resolve(ans)

            }, err => reject(err))
        }
    })
}