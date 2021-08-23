/*
 *柯里化 是一种转换，
 * 将 f(a,b,c) 转换为可以被以 f(a)(b)(c) 的形式进行调用。
 * JavaScript 实现通常都保持该函数可以被正常调用，并且如果参数数量不足，则返回偏函数。
 * 柯里化不会调用函数。它只是对函数进行转换
 
*/

 // 测试用例：

function sum(a, b, c) {
    return a + b + c;
}
  
  // 我们需要实现一个方法 myCurry 用来转换 sum 这个方法，形成 curriedSum 
  let curriedSum = myCurry(sum);
  
  // curriedSum 这个方法可以按下面的方式部分调用
  console.log( curriedSum(1, 2, 3) );  // 6，仍然可以被正常调用
  console.log( curriedSum(1)(2, 3) );  // 6，对第一个参数的柯里化
  console.log( curriedSum(1)(2)(3) );  // 6，全柯里化
  console.log( curriedSum(1, 2)(3) );  // 6，部分调用
  
  // 注意 方法的长度是 参数长度(a,b,c 3个参数)
  console.log(sum.length) // 3



  // 实现：
  function myCurry(func) {
    // 我们myCurry调用应该返回一个包装器 curried，令这个函数curry化
    return function curried(...args) {
      // curry 的使用主要看参数数量, func.length 就是原函数func的参数数量
      if (args.length >= func.length) {
        // 如果传入的 args 长度与原始函数所定义的（func.length）相同或者更长，
        // 那么只需要将调用传递给它即可。直接现在就调用，返回函数结果
        return func.call(this, ...args)
      } else {
        // 否则的话，返回另一个包装器方法，递归地调用curried，将之前传入的参数与剩余新的参数拼接后一起传入。
        return function pass(...rest) {
          // 然后，在一个新的调用中，再次，我们将获得一个新的偏函数（如果参数不足的话），或者最终的结果。
          return curried.call(this, ...args, ...rest)
        }
      }
    }
  }

  
  