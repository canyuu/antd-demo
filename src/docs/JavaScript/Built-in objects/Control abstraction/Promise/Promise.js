/**
 * Promise 对象用于表示一个异步操作的最终完成（或失败）及其结果值。
 * 回调地狱
 在需要多个操作的时候，会导致多个回调函数嵌套，导致代码不够直观，就是常说的回调地狱
 */

/**
 * new Promise([executor]):第一个执行函数必须传递
 *   [executor 简称 executor ]
 *     1.NEW Promise 的时候就会把 executor 执行，
 *     创建 Promise 的一个实例（ executor 是 Promise 类的一个回调函数， Promise 内部会把它执行）
 *     2.PROMISE不仅把 executor 执行，而且还给 executor 传递两个参数（两个参数也是函数类型）：
 *      resolve函数：它执行代表PROMISE处理的异步事情是成功的，把 Promise 的状态改为fulfilled
 *      reject函数：它执行代表PROMISE处理的异步事情是失败的，把 Promise 的状态改为rejected
 *     3.executor函数中放的就是当前要处理的异步操作事情
 */

// Promise 示例
/*
const promiseExample = new Promise((resolve, reject) => {
  // =>这里一般存放的都是我们即将要处理的异步任务，任务成功我们执行resolve,任务失败我们执行reject（当然写同步的也可以）
  const ran = Math.random();
  setTimeout(() => {
    if (ran < 0.5) {
      reject(ran);
      return;
    }
    resolve(ran);
  }, 1000);
});
promiseExample.then((result) => {
  // =>状态为FULFILLED成功后执行（result：[[PromiseValue]]），
  // =>reject(ran)和resolve(ran)中的ran传递给了result
  console.log('成功: ' + result);
}, (error) => {
  // =>状态为REJECTED失败后执行
  console.log('失败: ' + error);
});
* */

// 简单封装 Promise 进行ajax请求
/*
function ajaxPromise(queryUrl) {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', queryUrl, true);
    xhr.send(null);
    xhr.onreadystatechange = () => {
      if (xhr.readyState === 4) {
        if (xhr.status === 200) {
          resolve(xhr.responseText);
        } else {
          reject(xhr.responseText);
        }
      }
    };
  });
}
ajaxPromise('http://www.baidu.com')
    .then((value) => {
      console.log(value);
    })
    .catch((err) => {
      console.error(err);
    });
* */

/**
 * promise的链式调用
 * 每次调用返回的都是一个新的Promise实例
 * 链式调用的参数通过返回值传递
 * then可以使用链式调用的写法原因在于，每一次执行该方法时总是会返回一个Promise对象
 */

/*
readFile('1.txt')
.then(function (data) {
    console.log(data);
    return data;
})
.then(function (data) {
    console.log(data);
    return readFile(data);
})
.then(function (data) {
    console.log(data);
})
.catch(function(err){
 console.log(err);
});
* */
