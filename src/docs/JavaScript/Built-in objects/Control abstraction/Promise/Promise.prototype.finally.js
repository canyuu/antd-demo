/**
 * Promise.finally
 *
 * finally() 方法返回一个 Promise。
 * 在 promise 结束时，无论结果是 fulfilled 或者是 rejected，都会执行指定的回调函数。
 * 这为在 Promise 是否成功完成后都需要执行的代码提供了一种方式。
 * 这避免了同样的语句需要在 then() 和 catch() 中各写一次的情况。
 *
 * 参数：
 * onFinally
 * Promise 结束后调用的 Function。
 *
 * 返回值：
 * 返回一个设置了 finally 回调函数的 Promise 对象。
 */

/*
let isLoading = true;

fetch(myRequest).then(function(response) {
  const contentType = response.headers.get('content-type');
  if (contentType && contentType.includes('application/json')) {
    return response.json();
  }
  throw new TypeError('Oops, we haven\'t got JSON!');
})
    .then(function(json))
.catch(function(error) {
    console.log(error);
})
    .finally(function() {
        isLoading = false;
    });

*/
