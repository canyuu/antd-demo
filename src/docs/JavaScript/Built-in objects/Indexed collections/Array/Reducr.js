/**
 * reduce() 方法对数组中的每个元素按序执行一个由您提供的 reducer 函数
 * 每一次运行 reducer 会将先前元素的计算结果作为参数传入
 * 最后将其结果汇总为单个返回值
 */

/**
 * previousValue：上一次调用 callbackFn 时的返回值。
 * 在第一次调用时，若指定了初始值 initialValue，其值则为 initialValue，否则为数组索引为 0 的元素 array[0]。
 * currentValue：数组中正在处理的元素。
 * 在第一次调用时，若指定了初始值 initialValue，其值则为数组索引为 0 的元素 array[0]，否则为 array[1]。
 * currentIndex：数组中正在处理的元素的索引。若指定了初始值 initialValue，则起始索引号为 0，否则从索引 1 起始。
 * array：用于遍历的数组。
 *
 * initialValue 作为第一次调用 callback 函数时参数 previousValue 的值。
 * 若指定了初始值 initialValue，则 currentValue 则将使用数组第一个元素
 * 否则 previousValue 将使用数组第一个元素，而 currentValue 将使用数组第二个元素。
 */


// 数组求和
/*
const array1 = [1, 2, 3, 4];
const initialValue = 0;
const sumWithInitial = array1.reduce(
    (previousValue, currentValue) => previousValue + currentValue,
    initialValue,
);
console.log(sumWithInitial);
*/

// 累加对象数组里的值
/*
const initialValue = 0;
const sum = [{x: 1}, {x: 2}, {x: 3}].reduce(
    (previousValue, currentValue) => previousValue + currentValue.x
    , initialValue,
);
console.log(sum); // logs 6
*  */

// 将二维数组转化为一维
/*
let flattened = [[0, 1], [2, 3], [4, 5]].reduce(
  ( previousValue, currentValue ) => previousValue.concat(currentValue),
  []
)
* */

// 计算数组中每个元素出现的次数
/*
let names = ['Alice', 'Bob', 'Tiff', 'Bruce', 'Alice']

let countedNames = names.reduce(function (allNames, name) {
  if (name in allNames) {
    allNames[name]++
  }
  else {
    allNames[name] = 1
  }
  return allNames
}, {})
// countedNames is:
// { 'Alice': 2, 'Bob': 1, 'Tiff': 1, 'Bruce': 1 }
* */

// 按属性对 object 分类
/*
let people = [
  { name: 'Alice', age: 21 },
  { name: 'Max', age: 20 },
  { name: 'Jane', age: 20 }
];

function groupBy(objectArray, property) {
  return objectArray.reduce(function (acc, obj) {
    let key = obj[property]
    if (!acc[key]) {
      acc[key] = []
    }
    acc[key].push(obj)
    return acc
  }, {})
}

let groupedPeople = groupBy(people, 'age')
// groupedPeople is:
// {
//   20: [
//     { name: 'Max', age: 20 },
//     { name: 'Jane', age: 20 }
//   ],
//   21: [{ name: 'Alice', age: 21 }]
// }
* */

// 使用扩展运算符和 initialValue 绑定包含在对象数组中的数组
/*
// friends - an array of objects
// where object field "books" is a list of favorite books
let friends = [{
  name: 'Anna',
  books: ['Bible', 'Harry Potter'],
  age: 21
}, {
  name: 'Bob',
  books: ['War and peace', 'Romeo and Juliet'],
  age: 26
}, {
  name: 'Alice',
  books: ['The Lord of the Rings', 'The Shining'],
  age: 18
}]

// allBooks - list which will contain all friends' books +
// additional list contained in initialValue
let allBooks = friends.reduce(function(previousValue, currentValue) {
  return [...previousValue, ...currentValue.books]
}, ['Alphabet'])

// allBooks = [
//   'Alphabet', 'Bible', 'Harry Potter', 'War and peace',
//   'Romeo and Juliet', 'The Lord of the Rings',
//   'The Shining'
// ]
*/

// 数组去重

/*
如果正在使用一个可以兼容Set 和 Array.from() 的环境，可以使用
let arrayWithNoDuplicates = Array.from(new Set(myArray))
来获得一个相同元素被移除的数组。
*/

/*
let myArray = ['a', 'b', 'a', 'b', 'c', 'e', 'e', 'c', 'd', 'd', 'd', 'd']
let myArrayWithNoDuplicates = myArray.reduce(
function (previousValue, currentValue) {
  if (previousValue.indexOf(currentValue) === -1) {
    previousValue.push(currentValue)
  }
  return previousValue
}, [])
console.log(myArrayWithNoDuplicates)
*/

// 使用 .reduce() 替换 .filter().map()

/*
const numbers = [-5, 6, 2, 0];
const doubledPositiveNumbers = numbers.reduce((previousValue, currentValue) => {
  if (currentValue > 0) {
    const doubled = currentValue * 2;
    previousValue.push(doubled);
  }
  return previousValue;
}, []);
console.log(doubledPositiveNumbers); // [12, 4]
*/

// 按顺序运行 Promise

/*
function runPromiseInSequence(arr, input) {
  return arr.reduce(
    (promiseChain, currentFunction) => promiseChain.then(currentFunction),
    Promise.resolve(input)
  )
}

// promise function 1
function p1(a) {
  return new Promise((resolve, reject) => {
    resolve(a * 5)
  })
}

// promise function 2
function p2(a) {
  return new Promise((resolve, reject) => {
    resolve(a * 2)
  })
}

// function 3  - will be wrapped in a resolved promise by .then()
function f3(a) {
 return a * 3
}

// promise function 4
function p4(a) {
  return new Promise((resolve, reject) => {
    resolve(a * 4)
  })
}

const promiseArr = [p1, p2, f3, p4]
runPromiseInSequence(promiseArr, 10)
  .then(console.log)   // 1200
*/

// 使用函数组合实现管道

/*
// Building-blocks to use for composition
const double = x => x + x
const triple = x => 3 * x
const quadruple = x => 4 * x

// Function composition enabling pipe functionality
const pipe = (...functions) => initialValue => functions.reduce(
    (acc, fn) => fn(acc),
    initialValue
)

// Composed functions for multiplication of specific values
const multiply6 = pipe(double, triple)
const multiply9 = pipe(triple, triple)
const multiply16 = pipe(quadruple, quadruple)
const multiply24 = pipe(double, triple, quadruple)

// Usage
multiply6(6)   // 36
multiply9(9)   // 81
multiply16(16) // 256
multiply24(10) // 240
* */

// 使用 reduce 实现 map
/*
if (!Array.prototype.mapUsingReduce) {
  Array.prototype.mapUsingReduce = function(callback, initialValue) {
    return this.reduce(
    function(mappedArray, currentValue, currentIndex, array) {
      mappedArray[currentIndex] =
      callback.call(initialValue, currentValue, currentIndex, array)
      return mappedArray
    }, [])
  }
}
[1, 2, , 3].mapUsingReduce(
  (currentValue, currentIndex, array) =>
  currentValue + currentIndex + array.length
) // [5, 7, , 10]
* */
