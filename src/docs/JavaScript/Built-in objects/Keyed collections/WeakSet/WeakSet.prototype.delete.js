/**
 * WeakSet.prototype.delete(value)
 * 从 WeakSet 对象中移除的对象。
 * 如果在 WeakSet 对象中成功移除元素则返回 true。
 * 如果 key 没有在 WeakSet 中找到或者 key 不是一个对象，则返回 false。
 */

/*
var ws = new WeakSet();
var obj = {};
ws.add(window);
ws.delete(obj);    // 返回 false。因为找不到要删除的 obj
ws.delete(window); // 返回 true。成功地移除了元素
ws.has(window);    // 返回 false。因为 WeakSet 中已经不存在 window 对象
*/
