Promise.myRace = function(promiseArr) {
    return new Promise((resolve, reject) => {
        for (let i = 0; i < promiseArr.length; i++) {
            Promise.resolve(promiseArr[i]).then(val => resolve(val), err => reject(err))
        }
    })
}