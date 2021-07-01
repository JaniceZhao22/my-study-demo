
/**
 * new 关键字会进行如下的操作：

创建一个空的简单JavaScript对象（即{}）；
链接该对象（设置该对象的constructor）到另一个对象 ；
将步骤1新创建的对象作为this的上下文 ；
如果该函数没有返回对象，则返回this。
 */

function myNew() {
    let obj = {};

    // Constructor 为传入的第一个对象，arguments上没有第一个参数了， shift掉了
    let Constructor = [].shift.call(arguments); 

    // // 3. 将 obj 的[[Prototype]]指向构造函数的 prototype，这样 obj 就可以访问到构造函数原型中的属性
    Object.setPrototypeOf(obj, Constructor.prototype);

      // 4. 使用 apply，改变构造函数 this 的指向到新建的对象，符合 new 关键字的this规则
     let res = Constructor.apply(obj, arguments)

     return typeof res === "object" ? res : obj;
};


// 二、实现 Object.create()

function myCreate() {
    
}