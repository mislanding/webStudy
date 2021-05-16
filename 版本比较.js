function versionCompare(v1, v2) {
    if (v1 && v2) {
        let v1s = v1.split(".");
        let v2s = v2.split(".");
        var minLength = Math.min(v1s.length, v2s.length),
            position = 0,
            diff = 0;
        while (position < minLength && ((diff = parseInt(v1s[position]) - parseInt(v2s[position])) == 0)) {
            position++;
        }
        diff = (diff != 0) ? diff : (v1s.length - v2s.length);
        return diff > 0;
    } else {
        console.log("版本号不能为空");
        return false;
    }
}
console.log(versionCompare("1.19.22", "1.19.21"));

function get(obj1, ...args) {
    // 请补全函数参数和实现逻辑
    let res = [];
    let obj = obj1;
    let params = args;
    for (let i = 0; i < params.length; i++) {
        let keys = params[i].split(".");
        let tmp = obj;
        for (let j = 0; j < keys.length; j++) {
            let index = keys[j].match(/\[[0-9]{1,}\]/);
            if (index !== null) {
                index = index[0].match(/[0-9]{1,}/)[0];
            }
            let key = index !== null ? keys[j].match(/[a-zA-Z]{1,}(?=(\[[0-9]{1,}\]))/)[0] : keys[j];
            tmp = tmp[key];
            if (index !== null) {
                tmp = tmp[index];
            }
        }
        res.push(tmp);
    };
    console.log(res);
}
const obj = {
    selector: {
        to: {
            toutiao: 'FE coder'
        }
    },
    target: [1, 2, { name: 'byted' }]
};
// 运行代码
get(obj, 'selector.to.toutiao', 'target[0]', 'target[2].name')
    // 输出结果：
    // ['FE coder', 1, 'byted']