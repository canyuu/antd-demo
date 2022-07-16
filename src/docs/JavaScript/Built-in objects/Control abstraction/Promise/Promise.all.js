/**
 * Promise.all
 * 参数：
 * 接受一个  Promise 的 iterable 类型 (Array，Map，Set 都属于 ES6 的 iterable 类型)
 *
 * 返回值：
 * 返回一个 Promise 实例，这个 Promise 实例的状态转移取决于参数的 Promise 实例的状态变化。
 * 当参数中所有的实例都处于 resolve 状态时，返回的 Promise 实例会变为 resolve 状态。
 * 如果参数中任意一个实例处于 reject 状态，返回的 Promise 实例变为 reject 状态。
 *
 * 如果传入的参数是一个空的可迭代对象，则返回一个已完成（already resolved）状态的 Promise。
 * 如果传入的参数不包含任何 promise，则返回一个异步完成（asynchronously resolved） Promise。
 *
 * 不管传递的 Promise 参数谁先完成，Promise.all 方法会按照数组里面的顺序将结果返回
 */

// Promise.all 等待所有都完成（或第一个失败）。
/*
var p1 = Promise.resolve(3);
var p2 = 1337;
var p3 = new Promise((resolve, reject) => {
  setTimeout(resolve, 100, 'foo');
});

Promise.all([p1, p2, p3]).then(values => {
  console.log(values); // [3, 1337, "foo"]
});
* */

// 如果参数中包含非 promise 值，这些值将被忽略，
// 但仍然会被放在返回数组中（如果 promise 完成的话）

/*
var p = Promise.all([1,2,3]);
var p2 = Promise.all([1,2,3, Promise.resolve(444)]);
var p3 = Promise.all([1,2,3, Promise.reject(555)]);
// using setTimeout we can execute code after the stack is empty
setTimeout(function(){
    console.log(p);
    console.log(p2);
    console.log(p3);
});
* */

// Promise.all 的异步和同步
// 如果传入的可迭代对象是空的，就是同步

/*
var resolvedPromisesArray = [Promise.resolve(33), Promise.resolve(44)];

var p = Promise.all(resolvedPromisesArray);

console.log(p);

setTimeout(function(){
    console.log('the stack is now empty');
    console.log(p);
});
* */

/*
var mixedPromisesArray = [Promise.resolve(33), Promise.reject(44)];
var p = Promise.all(mixedPromisesArray);
console.log(p);
setTimeout(function(){
    console.log('the stack is now empty');
    console.log(p);
});
*/

/*
var p = Promise.all([]); // will be immediately resolved
var p2 = Promise.all([1337, "hi"]);
console.log(p);
console.log(p2)
setTimeout(function(){
    console.log('the stack is now empty');
    console.log(p2);
});
*/

// Promise.all 的快速返回失败行为
// Promise.all 在任意一个传入的 promise 失败时返回失败。
// 例如，如果你传入的 promise中，有四个 promise 在一定的时间之后调用成功函数，
// 有一个立即调用失败函数，那么 Promise.all 将立即变为失败。

/*
var p1 = new Promise((resolve, reject) => {
  setTimeout(resolve, 1000, 'one');
});
var p2 = new Promise((resolve, reject) => {
  setTimeout(resolve, 2000, 'two');
});
var p3 = new Promise((resolve, reject) => {
  setTimeout(resolve, 3000, 'three');
});
var p4 = new Promise((resolve, reject) => {
  setTimeout(resolve, 4000, 'four');
});
var p5 = new Promise((resolve, reject) => {
  reject('reject');
});

Promise.all([p1, p2, p3, p4, p5]).then(values => {
  console.log(values);
}, reason => {
  console.log(reason)
});

//From console:
//"reject"

//You can also use .catch
Promise.all([p1, p2, p3, p4, p5]).then(values => {
  console.log(values);
}).catch(reason => {
  console.log(reason)
});

//From console:
//"reject"
 */


