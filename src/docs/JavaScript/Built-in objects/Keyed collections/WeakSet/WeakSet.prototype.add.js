/**
 * WeakSet.prototype.add(value)
 * 在WeakSet对象尾部添加一个元素。
 * 返回该 WeakSet 对象。
 */

/*
const ws = new WeakSet();
ws.add(window); // 添加 window 对象进 WeakSet 中
ws.has(window); // true
// weakSet 仅取得对象作为参数
ws.add(1);
// 结果为 "TypeError: Invalid value used in weak set" 在 Chrome 浏览器中
// 并且 "TypeError: 1 is not a non-null object" 在 Firefox 浏览器中
*/
