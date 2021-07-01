
// 1.实现 call apply bind

Function.prototype.myApply = function(context) {
    const context = context || window;
    context.fn = this;
    var res;
    if (arguments[1]) {
        result = context.fn(...arguments);
    } else {
        result = context.fn()
    }
    delete context.fn;
    return res;
}

Function.prototype.myCall = function(context) {
    const context = context || window;
    context.fn = this;
    var args = [...arguments].slice(1);
    var result = context.fn(...args);
    delete context.fn;
    return result; 
}


// 调用方式的区别
func.call(this, arg1, arg2);
func.apply(this, [arg1, arg2])

Function.prototype.myBind = function(context) {
    if (typeof this !== 'function') {
        throw new TypeError('Error');
    }
    var _this = this;
    var argus = [...arguments].slice(1); // 兼容传参数与call 一致
    return function F() {
        if (this instanceof F) {
            return new _this(...argus, ...arguments)
        }
        return _this.apply(context, argus.concat(...arguments));
    }
}