
// 1、手写实现 reduce

Array.prototype.myReduce = function(fn, prev) {
    for(let i = 0; i <this.length; i ++  ) {
        if (typeof prevents === 'undefined'){
            prev = fn(this[i], this[i+1], i + 1, this);
        } else {
            prev = fn(prev, this[i], i,  this)
        }
    }
    return prev;
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
