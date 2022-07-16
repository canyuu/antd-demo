/**
 * Promise.then
 *
 * 参数：
 * onFulfilled
 * 当 Promise 变成接受状态（fulfilled）时调用的函数。
 * 该函数有一个参数，即接受的最终结果（the fulfillment  value）。
 * 如果该参数不是函数，则会在内部被替换为 (x) => x，即原样返回 promise 最终结果的函数
 * onRejected
 * 当 Promise 变成拒绝状态（rejected）时调用的函数。
 * 该函数有一个参数，即拒绝的原因（rejection reason）。
 * 如果该参数不是函数，则会在内部被替换为一个 "Thrower" 函数 (throws an error)
 *
 * 返回值：
 * 当一个 Promise 完成（fulfilled）或者失败（rejected）时，返回函数将被异步调用（由当前的线程循环来调度完成）。
 * 具体的返回值依据以下规则返回。
 * 如果 then 中的回调函数：
 * - 返回了一个值，那么 then 返回的 Promise 将会成为接受状态，并且将返回的值作为接受状态的回调函数的参数值。
 * - 没有返回任何值，那么 then 返回的 Promise 将会成为接受状态，并且该接受状态的回调函数的参数值为 undefined。
 * - 抛出一个错误，那么 then 返回的 Promise 将会成为拒绝状态，并且将抛出的错误作为拒绝状态的回调函数的参数值。
 * - 返回一个已经是接受状态的 Promise，那么 then 返回的 Promise 也会成为接受状态，
 * 并且将那个 Promise 的接受状态的回调函数的参数值作为该被返回的 Promise 的接受状态回调函数的参数值。
 * - 返回一个已经是拒绝状态的 Promise，那么 then 返回的 Promise 也会成为拒绝状态，
 * 并且将那个 Promise 的拒绝状态的回调函数的参数值作为该被返回的 Promise 的拒绝状态回调函数的参数值。
 * - 返回一个未定状态（pending）的 Promise，那么 then 返回 Promise 的状态也是未定的，
 * 并且它的终态与那个 Promise 的终态相同；同时，它变为终态时调用的回调函数参数与那个 Promise 变为终态时的回调函数的参数是相同的。
 */

// 演示 then 方法的异步性的例子。
/*
const resolvedProm = Promise.resolve(33);

const thenProm = resolvedProm
    .then((value) => {
      console.log('the value received and returned is: ' + value);
      return value;
    });
console.log(thenProm);

setTimeout(() => {
  console.log(thenProm);
});

*/

// 使用 then 方法
/*
var p1 = new Promise((resolve, reject) => {
  resolve('成功！');
  // or
  // reject(new Error("出错了！"));
});

p1.then(value => {
  console.log(value); // 成功！
}, reason => {
  console.error(reason); // 出错了！
});
*/

// 链式调用
/*
Promise.resolve("foo")
  // 1. 接收 "foo" 并与 "bar" 拼接，并将其结果做为下一个 resolve 返回。
  .then(function(string) {
    return new Promise(function(resolve, reject) {
      setTimeout(function() {
        string += 'bar';
        resolve(string);
      }, 1);
    });
  })
  // 2. 接收 "foobar", 放入一个异步函数中处理该字符串
  // 并将其打印到控制台中，但是不将处理后的字符串返回到下一个。
  .then(function(string) {
    setTimeout(function() {
      string += 'baz';
      console.log(string);
    }, 1)
    return string;
  })
  // 3. 打印本节中代码将如何运行的帮助消息，
  // 字符串实际上是由上一个回调函数之前的那块异步代码处理的。
  .then(function(string) {
    console.log("Last Then:  oops... didn't bother to instantiate and return " +
                "a promise in the prior then so the sequence may be a bit " +
                "surprising");

    // 注意 `string` 这时不会存在 'baz'。
    // 因为这是发生在我们通过 setTimeout 模拟的异步函数中。
    console.log(string);
  });
*/

/*
var p2 = new Promise(function(resolve, reject) {
  resolve(1);
});

p2.then(function(value) {
  console.log(value); // 1
  return value + 1;
}).then(function(value) {
  console.log(value + ' - A synchronous value works');
});

p2.then(function(value) {
  console.log(value); // 1
});
*/

// 如果函数抛出错误或返回一个拒绝的 Promise，则 then 将返回一个拒绝的 Promise。
/*
Promise.resolve()
    .then(() => {
      // 使 .then() 返回一个 rejected promise
      throw new Error('Oh no!');
    })
    .then(() => {
      console.log('Not called.');
    }, (error) => {
      console.error('onRejected function called: ' + error.message);
    });
*/
