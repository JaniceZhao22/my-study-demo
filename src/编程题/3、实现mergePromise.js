/* 
 * 实现mergePromise函数，把传进去的数组按顺序先后执行，并且把返回的数据先后放到数组data中。

*/

const time = (timer) => {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve()
      }, timer)
    })
  }
  const ajax1 = () => time(2000).then(() => {
    console.log(1);
    return 1
  })
  const ajax2 = () => time(1000).then(() => {
    console.log(2);
    return 2
  })
  const ajax3 = () => time(1000).then(() => {
    console.log(3);
    return 3
  })
  
  function mergePromise () {
    // 在这里写代码
  }
  
  mergePromise([ajax1, ajax2, ajax3]).then(data => {
    console.log("done");
    console.log(data); // data 为 [1, 2, 3]
  });
  
  // 要求分别输出
  // 1
  // 2
  // 3
  // done
  // [1, 2, 3]
  



  /// 实现
  // 这道题有点类似于Promise.all()，不过.all()不需要管执行顺序，只需要并发执行就行了。但是这里需要等上一个执行完毕之后才能执行下一个。

  /**
   * 解题思路：
        1、定义一个数组data用于保存所有异步操作的结果
        2、初始化一个const promise = Promise.resolve()，然后循环遍历数组，在promise后面添加执行ajax任务，同时要将添加的结果重新赋值到promise上。
   * 
  */
 function mergePromise(ajaxArr) {
     const resData = [];
     let promise = new Promise.resolve();
     ajaxArr.forEach(ajax => {
         // 第一次的then为了用来调用ajax
  	    // 第二次的then是为了获取ajax的结果
         promise = promise.then(ajax).then(res => {
            resData.push(res);
            return resData;
         })
     })
     return promise;
 }