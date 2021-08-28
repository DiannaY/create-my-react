function shallowEqual(obj1, obj2) {
    if(obj1 === obj2) {
        // 原始值类型相等，以及对象是同一个引用时
        return true;
    }

    /**
     * typeof -> number string boolean undefined object
     * 当其中一个参数不是object类型 或者 其中一个参数是null的时候，返回false-》不相等
     */
    if (
        typeof objA !== 'object' ||
        objA === null ||
        typeof objB !== 'object' ||
        objB === null
      ) {
        return false;
    }

    let keys1 = Object.keys(obj1);
    let keys2 = Object.keys(obj2);
    if (keys1.length !== keys2.length) {
        return false;
    }

    for(let key1 in obj1) {
        if (
            !Object.hasOwnProperty.call(obj2, key1) ||
            obj1[key1] !== obj2[key1]
        ) {
            return false;
        }
    }

    return true;

}
export default shallowEqual;