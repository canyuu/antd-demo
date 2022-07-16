function Promise(executor) {
  const self = this;
  self.status = 'pending';
  self.value = undefined;
  self.onResolvedCallbacks = [];
  self.onRejectedCallbacks = [];
  function resolve(value) {
    if (value instanceof Promise) {
      return value.then(resolve, reject);
    }
    setTimeout(function() { // 异步执行所有的回调函数
      if (self.status === 'pending') {
        self.value = value;
        self.status = 'resolved';
        self.onResolvedCallbacks.forEach((item) => item(value));
      }
    });
  }

  function reject(value) {
    setTimeout(function() {
      if (self.status === 'pending') {
        self.value = value;
        self.status = 'rejected';
        self.onRejectedCallbacks.forEach((item) => item(value));
      }
    });
  }

  try {
    executor(resolve, reject);
  } catch (e) {
    reject(e);
  }
}

function resolvePromise(promise2, x, resolve, reject) {
  if (promise2 === x) {
    return reject(new TypeError('循环引用'));
  }
  let then; let called;

  if (x != null && ((typeof x == 'object' || typeof x == 'function'))) {
    try {
      then = x.then;
      if (typeof then == 'function') {
        then.call(x, function(y) {
          if (called) {
            return;
          }
          called = true;
          resolvePromise(promise2, y, resolve, reject);
        }, function(r) {
          if (called) return;
          called = true;
          reject(r);
        });
      } else {
        resolve(x);
      }
    } catch (e) {
      if (called) return;
      called = true;
      reject(e);
    }
  } else {
    resolve(x);
  }
}
Promise.prototype.then = function(onFulfilled, onRejected) {
  const self = this;
  onFulfilled = typeof onFulfilled == 'function' ?
        onFulfilled : function(value) {
          return value;
        };
  onRejected = typeof onRejected == 'function' ?
        onRejected : function(value) {
          throw value;
        };
  let promise2;
  if (self.status === 'resolved') {
    promise2 = new Promise(function(resolve, reject) {
      setTimeout(function() {
        try {
          const x = onFulfilled(self.value);
          resolvePromise(promise2, x, resolve, reject);
        } catch (e) {
          reject(e);
        }
      });
    });
  }
  if (self.status === 'rejected') {
    promise2 = new Promise(function(resolve, reject) {
      setTimeout(function() {
        try {
          const x = onRejected(self.value);
          resolvePromise(promise2, x, resolve, reject);
        } catch (e) {
          reject(e);
        }
      });
    });
  }
  if (self.status === 'pending') {
    promise2 = new Promise(function(resolve, reject) {
      self.onResolvedCallbacks.push(function(value) {
        try {
          const x = onFulfilled(value);
          resolvePromise(promise2, x, resolve, reject);
        } catch (e) {
          reject(e);
        }
      });
      self.onRejectedCallbacks.push(function(value) {
        try {
          const x = onRejected(value);
          resolvePromise(promise2, x, resolve, reject);
        } catch (e) {
          reject(e);
        }
      });
    });
  }
  return promise2;
};
Promise.prototype.catch = function(onRejected) {
  return this.then(null, onRejected);
};
Promise.all = function(promises) {
  return new Promise(function(resolve, reject) {
    const result = [];
    let count = 0;
    for (let i = 0; i < promises.length; i++) {
      promises[i].then(function(data) {
        result[i] = data;
        if (++count === promises.length) {
          resolve(result);
        }
      }, function(err) {
        reject(err);
      });
    }
  });
};

/*
Promise.deferred = Promise.defer = function() {
  const defer = {};
  defer.promise = new Promise(function(resolve, reject) {
    defer.resolve = resolve;
    defer.reject = reject;
  });
  return defer;
};

*/
/**
 * npm i -g promises-aplus-tests
 * promises-aplus-tests Promise.js
 */
/*
try {
  module.exports = Promise;
} catch (e) {
}
*/

/**
 * https://zhuanlan.zhihu.com/p/183801144
 */
