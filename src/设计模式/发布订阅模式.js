
// 现在看看如何一步步实现发布—订阅模式。
//  首先要指定好谁充当发布者(比如售楼处);
//  然后给发布者添加一个缓存列表，用于存放回调函数以便通知订阅者(售楼处的花名册);  最后发布消息的时候，发布者会遍历这个缓存列表，依次触发里面存放的订阅者回调函
// 数(遍历花名册，挨个发短信)。


// 一、初级版本
var  salesOffices = {}; // 售楼处

salesOffices.clients = {}; // 缓存列表，存放订阅者的回调函数

salesOffices.listen = function (fn) { // 增加订阅者
    if ( !this.clientList[ key ] ){ 
        this.clientList[ key ] = []; // 如果还没有订阅过此类消息，给该类消息创建一个缓存列表 // 订阅的消息添加进消息缓存列表
    }
    this.clientList[ key ].push( fn );
    
}
salesOffices.trigger = function(){ // 发布消息 
    for( var i = 0, fn; fn = this.clientList[ i++];){
        fn.apply( this, arguments ); // (2) //
    } 
};

// 用一个全局的 Event 对象来实现，订阅者不需要了解消 息来自哪个发布者，发布者也不知道消息会推送给哪些订阅者，Event 作为一个类似“中介者” 的角色，把订阅者和发布者联系起来。见如下代码:

var Event  = (function() {
    var clientList = {},
        listen,
        trigger,
        remove;
    
        listen  = function (key, fn) {
            if(!clientList[key]) {
                clientList[key] = []
            }
            clientList[ key ].push( fn );
        }
        trigger = function() {
            var kry = Array.prototype.shift.call(arguments),
               fns = clientList[key];
            if (!fns || fns.length === 0) {
                return false
            }
            for(var i = 0, fn; fn = fns[i++];){
                fn.apply(this, arguments);
            }
        }
        remove = function(key,fn) {
            var fns = clientList[key];
            if (!fns) {
                return false;
            }
            if (!fn) {
                fns && (fns.length =0);
            } else {
                for(var l = fns.length -1; l> 0; l--) {
                    var _fn = fns[l];
                    if (_fn === fn) {
                        fns.splice(l, 1)
                    }
                }
            }
        }
        return {
            listen: listen,
            trigger: trigger,
            remove: remove 
        } 
})()
Event.listen( 'squareMeter88', function( price ){    // 小红订阅消息 // 输出:'价格=2000000'
         console.log( '价格= ' + price ); 
})
Event.trigger( 'squareMeter88', 2000000 ); // 售楼处发布消息
  

    