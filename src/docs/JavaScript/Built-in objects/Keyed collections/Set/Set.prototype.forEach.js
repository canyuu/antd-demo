/**
 * forEach 方法会根据集合中元素的插入顺序，依次执行提供的回调函数。
 * mySet.forEach(callback[, thisArg])
 *   callback 为集合中每个元素执行的回调函数，该函数接收三个参数：
 *     currentValue, currentKey 可选
 *     currentValue 是正在被操作的元素。
 *     并且由于集合(Set)没有索引，所以 currentKey 也表示这个正在被操作的元素。
 *     set可选 调用当前 forEach 方法的集合对象
 *   thisArg 回调函数执行过程中的 this 值。
 */

/*
const set = new Set(['A', 'B', 'C']);
set.forEach((value1, value2, set)=>{
  console.log(value1, 'value1');
  console.log(value2, 'value2');
  console.log(set, 'set');
});
*/
