/**
 * Promise.resolve()
 * Promise.resolve(value) 方法返回一个以给定值解析后的 Promise 对象
 * 如果这个 value 是一个 promise ，那么将返回这个 promise ；
 * 如果这个 value 是对象、数组、字符串等 ：作为 resolve 传递出去的值
 *
 * 如果这个 value 是 thenable（thenable：任何含有then()方法的对象或函数。），
 * 返回的 promise 会“跟随”这个 thenable 的对象，采用它的最终状态
 * 否则返回的 promise 将以此值完成。此函数将类 promise 对象的多层嵌套展平。
 */

/*
const original = {then: Promise.resolve(33)};
const cast = Promise.resolve(original);
cast.then(function(value) {
  console.log('value: ' + value);
});
console.log('original === cast ? ' + (original === cast));
* */

// resolve thenable 并抛出错误
// Resolve 一个 thenable 对象

/*
const p1 = Promise.resolve({
  then: function(onFulfill, onReject) {
    onFulfill('fulfilled!');
  },
});
console.log(p1 instanceof Promise); // true，这是一个 Promise 对象

p1.then(function(v) {
  console.log(v); // 输出"fulfilled!"
}, function(e) {
  // 不会被调用
});
* */

// Thenable 在 callback 之前抛出异常
// Promise rejects

/*
var thenable = {then: function(resolve) {
  throw new TypeError('Throwing');
  resolve('Resolving');
}};

const p2 = Promise.resolve(thenable);
p2.then(function(v) {
  // 不会被调用
}, function(e) {
  console.log(e); // TypeError: Throwing
});
* */

// Thenable 在 callback 之后抛出异常
// Promise resolves

/*
const thenable = {then: function(resolve) {
  resolve('Resolving');
  throw new TypeError('Throwing');
}};

const p3 = Promise.resolve(thenable);
p3.then(function(v) {
  console.log(v); // 输出"Resolving"
}, function(e) {
  // 不会被调用
});
*/
