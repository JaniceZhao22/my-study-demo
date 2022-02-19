// 知识点：
/*
    1、正常用 typeof 检测 null 返回是object。
    2、bject.prototype.toString 的返回值
*/

var toString = Object.prototype.toString;
toString.call(new Date); // [object Date]
toString.call(new String); // [object String]
toString.call(Math); // [object Math]
//Since JavaScript 1.8.5
toString.call(undefined); // [object Undefined]
toString.call(null); // [object Null]






function getType(value) {
    if  (value === null) {
        return  value + ''
    }
    // 判断数据是引用类型的情况
    if (typeof value === 'object') {
        let valueClass = Object.prototype.toString.call(value),
            type = valueClass.split("")[1].split('');
        type.pop();
        return type.join('').toLowerCase();
    }

    return typeof value;
}