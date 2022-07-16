/**
 * Promise.race
 * 参数：
 * 接受一个  Promise 的 iterable 类型 (Array，Map，Set 都属于 ES6 的 iterable 类型)
 *
 * 返回值：
 * 返回一个Promise实例，这个Promise实例的状态转移取决于参数的Promise实例的状态变化。
 * 当参数中任何一个实例处于resolve状态时，返回的Promise实例会变为resolve状态。
 * 如果参数中任意一个实例处于reject状态，返回的Promise实例变为reject状态。
 *
 * 如果传的迭代是空的，则返回的 promise 将永远等待。
 *
 * 如果迭代包含一个或多个非承诺值和/或已解决/拒绝的承诺，则 Promise.race 将解析为迭代中找到的第一个值。
 */

// Promise.race 的异步性
/*
const resolvedPromisesArray = [Promise.resolve(33), Promise.resolve(44)];

const p = Promise.race(resolvedPromisesArray);
// immediately logging the value of p
console.log(p);

// using setTimeout we can execute code after the stack is empty
setTimeout(function() {
  console.log('the stack is now empty');
  console.log(p);
});
*/

// 使用 Promise.race –  setTimeout 的示例
/*
const p1 = new Promise(function(resolve, reject) {
  setTimeout(resolve, 500, 'one');
});
const p2 = new Promise(function(resolve, reject) {
  setTimeout(resolve, 100, 'two');
});

Promise.race([p1, p2]).then(function(value) {
  console.log(value); // "two"
  // 两个都完成，但 p2 更快
});
*/

/*
const p3 = new Promise(function(resolve, reject) {
  setTimeout(resolve, 100, 'three');
});
const p4 = new Promise(function(resolve, reject) {
  setTimeout(reject, 500, 'four');
});

Promise.race([p3, p4]).then(function(value) {
  console.log(value); // "three"
  // p3 更快，所以它完成了
}, function(reason) {
  // 未被调用
});
*/

/*
const p5 = new Promise(function(resolve, reject) {
  setTimeout(resolve, 500, 'five');
});
const p6 = new Promise(function(resolve, reject) {
  setTimeout(reject, 100, 'six');
});

Promise.race([p5, p6]).then(function(value) {
  // 未被调用
}, function(reason) {
  console.log(reason); // "six"
  // p6 更快，所以它失败了
});
*/
