
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