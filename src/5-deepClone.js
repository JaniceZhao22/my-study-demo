
// 深拷贝简单来说就是 浅拷贝 + 递归


// 一、简单实现
function deepClone(source) {
    function isObject(o) {
        return (typeof o === 'object' || typeof o === 'function') && o !== null
    }
    if (!isObject(obj)) {
        throw new Error('非对象');
    }
    let isArray = Array.isArray(source)
    let target = isArray ? [...obj] : { ...obj }
    Reflect.ownKeys(newObj).forEach(key => {
        target[key] = isObject(source[key]) ? deepClone(source[key]) : source[key]
    })
    return target;
}


// 热知识：

// for...in循环出的是key，for...of循环出的是value
// 推荐在循环对象属性的时候，使用for...in,在遍历数组的时候的时候使用for...of

// Object.keys能返回方法属性，只不过Object.keys返回的是可枚举属性，当设置对象的enumerable设置为false， 那就无法遍历。
// Reflect.ownKeys 返回所有的自己属性，不管可枚举还是不可枚举，所以可以遍历出方法属性。