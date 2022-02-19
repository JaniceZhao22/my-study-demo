/**
 * 使用Promise实现：限制异步操作的并发个数，并尽可能快的完成全部
 * 
 * 
 * 
 * 
*/

class Limitpromise {
	constructor(max) {
		this._max = max; // 异步任务“并发”上限
		this._count = 0; // 当前正在执行的任务数量
		this._taskQueue = []; // 等待执行的任务队列
	},
	/**
   * 调用器，将异步任务函数和它的参数传入
   * @param caller 异步任务函数，它必须是async函数或者返回Promise的函数
   * @param args 异步任务函数的参数列表
   * @returns {Promise<unknown>} 返回一个新的Promise
   */
	call(caller, ...args) {
		return new Promise((resolve, reject) => {
            const task = this._creatTask(caller, args, resolve, reject);
            if(this._count >= this._max) {
                    this._taskQueue.push(task)
            } else {
                task()
            }
		})
	},
    _creatTask (caller, args, resolve, reject) {
        return () => {
        // 实际上是在这里调用了异步任务，并将异步任务的返回（resolve和reject）抛给了上层
        caller(...args)
            .then(resolve)
            .catch(reject)
            .finally(() => {
                // 任务队列的消费区，利用Promise的finally方法，在异步任务结束后，取出下一个任务执行
                this._count--
                if (this._taskQueue.length) {
                    let task = this._taskQueue.shift()
                    task()
                }
            })
            this._count++
        }
    }
}
  