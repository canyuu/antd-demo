/**
 * Set 对象允许你存储任何类型的唯一值，无论是原始值或者是对象引用。
 * Set 对象是值的集合，你可以按照插入的顺序迭代它的元素。
 * Set 中的元素只会出现一次，即 Set 中的元素是唯一的。
 */

/**
 * 因为 Set 中的值总是唯一的，不重复的，所以需要判断两个值是否相等。
 * +0 和 -0在Set中是相同的
 * 但是在ES6之前是不同的值
 * 通过全等符号 +0 !== -0
 *
 * NaN 也是被认为是相同的
 * 但是通过全等符号 NaN !== NaN
 * Object.is(NaN, NaN)结果为True
 */

// 实例方法

// 使用 Array.from 转换 Set 为 Array
/*
const set = new Set(['A', 'B', 'C']);
const myArr = Array.from(set); //
console.log(myArr);
*/

// Set 和 Array 相互转换
/*
let myArray = ["value1", "value2", "value3"];
// 用 Set 构造器将 Array 转换为 Set
let mySet = new Set(myArray);
mySet.has("value1"); // returns true
// 用...(展开操作符) 操作符将 Set 转换为 Array
console.log([...mySet]); // 与 myArray 完全一致
*/

// 实现基本集合操作
/*
// 是否包含每一项
function isSuperset(set, subset) {
  for (const elem of subset) {
    if (!set.has(elem)) {
      return false;
    }
  }
  return true;
}
// 合并两个Set对象内的内容
function union(setA, setB) {
  const _union = new Set(setA);
  for (const elem of setB) {
    _union.add(elem);
  }
  return _union;
}
// 找出两个Set对象内相同的值
function intersection(setA, setB) {
  const _intersection = new Set();
  for (const elem of setB) {
    if (setA.has(elem)) {
      _intersection.add(elem);
    }
  }
  return _intersection;
}
// 去除相同的值
function symmetricDifference(setA, setB) {
  const _difference = new Set(setA);
  for (const elem of setB) {
    if (_difference.has(elem)) {
      _difference.delete(elem);
    } else {
      _difference.add(elem);
    }
  }
  return _difference;
}
// 去除 SetB 里面 和SetA 重复的值
function difference(setA, setB) {
  const _difference = new Set(setA);
  for (const elem of setB) {
    _difference.delete(elem);
  }
  return _difference;
}

// Examples
const setA = new Set([1, 2, 3, 4]);
const setB = new Set([2, 3]);
const setC = new Set([3, 4, 5, 6]);

isSuperset(setA, setB); // => true
union(setA, setC); // => Set [1, 2, 3, 4, 5, 6]
intersection(setA, setC); // => Set [3, 4]
symmetricDifference(setA, setC); // => Set [1, 2, 5, 6]
difference(setA, setC); // => Set [1, 2]
*/

// 数组去重
/*
// Use to remove duplicate elements from the array
const numbers = [2,3,4,4,2,3,3,4,4,5,5,6,6,7,5,32,3,4,5]
console.log([...new Set(numbers)])
// [2, 3, 4, 5, 6, 7, 32]
*/

// String 相关
/*
let text = 'India';

let mySet = new Set(text);  // Set {'I', 'n', 'd', 'i', 'a'}
mySet.size;  // 5

// 大小写敏感 & duplicate ommision
new Set("Firefox")  // Set(7) [ "F", "i", "r", "e", "f", "o", "x" ]
new Set("firefox")  // Set(6) [ "f", "i", "r", "e", "o", "x" ]
*/
