const cloneDeep1 = (target, hash = new WeakMap()) => {
    //对于传入参数处理
    if (typeof target !== 'object' || target === null) {
        return target;
    }
    //哈希表中存在直接返回
    if (hash.has(target)) return hash.get(target);
    const cloneTarget = Array.isArray(target) ? [] : {}
    hash.set(target, cloneTarget);
    //针对Symbol属性
    const symKeys = Object.getOwnPropertySymbols(target);
    if (symKeys.length) {
        symKeys.forEach(symKeys => {
            if (typeof target[symKeys] === 'object' && target[symKeys] !== null) {
                cloneTarget[symKeys] = cloneDeep1(target[symKeys]);
            } else {
                cloneTarget[symKeys] = target[symKeys];
            }
        })
    }

    for (const i in target) {
        //判断是否为自身类型
        if (Object.prototype.hasOwnProperty.call(target, i)) {
            cloneTarget[i] =
                typeof target[i] === 'object' && target[i] !== null ?
                cloneDeep1(target[i], hash) :
                target[i]
        }
    }
    return cloneTarget
}