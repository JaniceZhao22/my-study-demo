
// 1 、实现promise.all
function PromiseAll(promises) {
    return new Promise((resolve, reject) => {
        if(!Array.isArray(promises)){
            throw new TypeError('must be array')
        }
        let result = [];
        let count = 0;
        promises.forEach((promise, index) => {
            promise.then((res) => {
                result[index] = res;
                count ++;
                count === promises.length && resolve(result)
            })
        }, (err) => {
            reject(err)
        })
    })
}

// 2 、实现 promise.finally
Promise.prototype.finally = function(cb) {
    return this.then(function(value) {
        return Promise.resolve(cb()).then(function() {
            return value;
        })
    }, function(err) {
        return Promise.resolve(cb()).then(function() {
            throw err
        })
    })
}

// 3、 Promise.allSettled  
// 一句话概括Promise.allSettled和Promise.all的最大不同：Promise.allSettled永远不会被reject。 可以看这个解释 https://segmentfault.com/a/1190000023413699

// 3.1 
function allSettled(promises) {
    if(promises.length === 0) return Promise.resolve([]);
    const _promises = promises.map(item => item instanceof promise ? item : Promise.resolve(item));
    return new Promise((resolve, reject) => {
        const result = [];
        let unSettledPromiseCount = _promises.length;
        _promises.forEach((promise, index) => {
            promise.then((value) => {
                result[index] = {
                    status: 'fulfilled',
                    value,
                }
                unSettledPromiseCount -= 1
                if(unSettledPromiseCount === 0) {
                    resolve(result)
                }
            }, (reason) => {
                result[index] = {
                    status: 'rejected',
                    reason,
                }
                unSettledPromiseCount -= 1
                if(unSettledPromiseCount === 0) {
                    resolve(result)
                }
            })
        })
    })
}

// 4、 Promse.race
// race就是赛跑的意思，意思就是说，Promise.race([p1, p2, p3])里面哪个结果获得的快，就返回那个结果，不管结果本身是成功状态还是失败状态。

Promise.race = function(Arr) {
    return new Promise((resolve, reject) => {
        Arr.forEach(p => {
            Promise.resolve(p).then(val => {
                resolve(value)
            }, err => {
                reject(err)
            })
        })
    })
}

// 如何串行执行多个Promise
Promise.any = function(promises) {
    let index = 0;
    return new Promise((resolve, reject) => {
        if(!promises.length) return;
        promises.forEach((p, i) => {
            Promise.resolve(p).then(val => {
                resolve(val)
            }, err => {
                index ++;
                if(index === promises.length) {
                    reject('All promises were rejected')
                }
            })
        })
    })
}

