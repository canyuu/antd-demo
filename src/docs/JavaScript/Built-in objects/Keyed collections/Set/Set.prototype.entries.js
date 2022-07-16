/**
 * entries() 方法返回一个新的迭代器对象 ，
 * 这个对象的元素是类似 [value, value] 形式的数组，
 * value 是集合对象中的每个元素，
 * 迭代器对象元素的顺序即集合对象中元素插入的顺序。
 * 由于集合对象不像 Map 对象那样拥有 key，为了与 Map 对象的 API 形式保持一致，
 * 故使得每一个 entry 的 key 和 value 都拥有相同的值，
 * 因而最终返回一个 [value, value] 形式的数组。
 */

/*
const set = new Set(['A', 'B', 'C']);
const newSet = set.entries();
console.log(newSet.next().value); // [ 'A', 'A' ]
console.log(newSet.next().value); // [ 'B', 'B' ]
console.log(newSet.next().value); // [ 'C', 'C' ]
*/
