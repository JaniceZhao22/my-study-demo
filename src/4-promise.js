
// 手写实现promise

class promise{
    constructor(executor){
        this.status = 'pending';
        this.value = undefined;
        this.reason = undefined;
        let resolved = (value) =>{
            if (this.status === 'pending'){
                this.value = value;
                this.status = 'resolved';
            }
        }
        let rejected = (reason) =>{
            if (this.status === 'pending'){
                this.reason = reason;
                this.status = 'rejected';
            }
        }
        try {
            executor(resolved, rejected)
        } catch(e){
           rejected(e) 
        }
    }
   
    then(onFulfilled, onRejected){
        if(this.status === 'resolved') {
            onFulfilled(this.value);
        }
        if(this.status === 'rejected') {
           onRejected(this.reason) 
        }
    }
}

// 实现promise.all
Promise.prototype.all = function(promises) {
    let result = [];
    let promiseCount = 0;
    let promiseLength = promises.length;
    return new Promise(function(resolve, reject){
        for(let val of promises) {
            Promise.resolve(val).then((res) => {
              promiseCount ++; 
              result[i] = res;
              if(promiseCount === promiseLength){
                    return resolve(result)
              }
            }, function(err) {
                return reject(err)
            })
        }
    })
}