
// 1、手写实现 reduce

Array.prototype.myReduce = function(fn, initValue) {
    // 判断调用对象是否为数组
    if (this === null) {
        throw new TypeError(
          "Array.prototype.reduce " + "called on null or undefined"
        );
    }
    // 判断调用数组是否为空数组
    if (this.length === 0) {
        throw new TypeError('empty array')
    }
    // 判断传入的第一个参数是否为函数
    if (typeof fn !== 'function') {
        throw new TypeError(`${fn} is not a function`)
    }
    const length = this.length;
    let acc = typeof initValue === "undefined" ? this[0] : initValue;
    let i = typeof initValue === "undefined" ? 1 : 0;

    while (i < length) {
        acc = fn(acc, this[i], i, this);
        i++;
    }
    return acc;
}


// 2、用reduce 实现map
Array.prototype.maMap = function(fn){
    const arr = Array.prototyppe.slice.call(this);
    return arr.reduce((pre, cur, index) => {
        return [...pre, fn.call(this, cur, index, this)];
    }, [ ])
}

// 用reduce 实现 Array.flat
function myFlat(arr, deep = 1) {
    if(deep > 0) {
        return arr.reduce((acc, cur) => {
            if(Array.isArray(cur)){
                acc = acc.concat(myFlat(cur, deep -1))
            } else {
                acc = acc.concat(cur)
            }
        }, [])
    } else {
        return arr.slice()
    }
}

// 用reduce找出数组最大值
const  arr = [1, 2, 3, 4, 5, 6, 7];
const max = arr.myReduce((a, cur) => {
    return Math.max(a, cur);
})
console.log(max);

// 用reduce 反转字符串
const str = 'hello world';
[...str].reduce((prev, cur) => cur+prev);
// 或者
[..."hello world"].reverse().join('')

// 实现Array.of
let myArrayOf = function() {
    return Array.prototype.slice.call(arguments);
    // 或者 [].slice.call(arguments);
};

// 3、实现去重
function arrayUnique (arr) {
    return Array.from(new Set(arr))
}

// 或者
function arrayUnique (arr) {
    return [...new Set(arr)]
}

// 练习 map 对象 has 与 set
function arrayUnique(arr) {
    const map = new Map();
    const array = [];
    for (let i = 0; i < arr.length; i++) {
        if (!map.has(arr[i])) {
            array.push(arr[i]);
            map.set(arr[i], true);
        }
    }
    return array;
}
