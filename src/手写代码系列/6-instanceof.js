
// 重点是用 Object.getPrototypeOf()
// Object.getPrototypeOf() 方法返回指定对象的原型（内部[[Prototype]]属性的值）。

function myInstanceof(left, right) {
    if(typeof left !== 'object' || left === null) {
        return false
    }
    let proto = Object.getPrototypeOf(left);
    while(ture) {
        if(proto === null) {
            return false
        }
        if (proto === right.prototype) {
            return true
        }
        proto = Object.getPrototypeOf(proto)
    }
}
 