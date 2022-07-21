/**
 * typeof 操作符返回一个字符串，表示对应参数的数据类型。
 *
 */

/**
 * typeof operand 或 typeof (operand)
 *   [operand]
 *     一个表示对象或原始值的表达式，其类型将被返回。
 * 局限性：
 * 1.不能检测出null
 *    typeof null  =>"object"
 * 2.不能具体区分对象数据类型的值（无法检测是正则还是数组等）
 *    typeof []    =>"object"
 *    typeof {}    =>"object"
 *    typeof /^$/  =>"object"
 * 3.不能具体区分出除 new Function 外的构造函数的类型
 *    var str = new String('String');
 *    typeof str; // 返回 'object'
 *
 *    var func = new Function();
 *    typeof func; // 返回 'function'
 *
 * 优势：
 * 使用方便，所以在真实项目中，我们也会大量应用它来检测
 * 尤其是在检测基本类型值(除null之外)和函数类型值的时候
 */
// typeof 示例
/*
// 数字
typeof 37 === 'number';
typeof 3.14 === 'number';
typeof(42) === 'number';
typeof Math.LN2 === 'number';
typeof Infinity === 'number';
typeof NaN === 'number'; // 尽管它是 "Not-A-Number" (非数值) 的缩写
typeof Number(1) === 'number'; // Number 会尝试把参数解析成数值

typeof 42n === 'bigint';


// 字符串
typeof '' === 'string';
typeof 'bla' === 'string';
typeof `template literal` === 'string';
typeof '1' === 'string'; // 注意内容为数字的字符串仍是字符串
typeof (typeof 1) === 'string'; // typeof 总是返回一个字符串
typeof String(1) === 'string'; // String 将任意值转换为字符串，比 toString 更安全


// 布尔值
typeof true === 'boolean';
typeof false === 'boolean';
typeof Boolean(1) === 'boolean'; // Boolean() 会基于参数是真值还是虚值进行转换
typeof !!(1) === 'boolean'; // 两次调用 ! (逻辑非) 操作符相当于 Boolean()


// Symbols
typeof Symbol() === 'symbol';
typeof Symbol('foo') === 'symbol';
typeof Symbol.iterator === 'symbol';


// Undefined
typeof undefined === 'undefined';
typeof declaredButUndefinedVariable === 'undefined';
typeof undeclaredVariable === 'undefined';


// 对象
typeof {a: 1} === 'object';

// 使用 Array.isArray 或者 Object.prototype.toString.call
// 区分数组和普通对象
typeof [1, 2, 4] === 'object';

typeof new Date() === 'object';
typeof /regex/ === 'object'; // 历史结果请参阅正则表达式部分


// 下面的例子令人迷惑，非常危险，没有用处。避免使用它们。
typeof new Boolean(true) === 'object';
typeof new Number(1) === 'object';
typeof new String('abc') === 'object';

// 函数
typeof function() {} === 'function';
typeof class C {} === 'function';
typeof Math.sin === 'function';

*/

// typeof null
/*
// JavaScript 诞生以来便如此
typeof null === 'object';
*/

// 使用 new 操作符
/*
除 Function 外的所有构造函数的类型都是 'object'
var str = new String('String');
var num = new Number(100);

typeof str; // 返回 'object'
typeof num; // 返回 'object'

var func = new Function();

typeof func; // 返回 'function'
*/

// 语法中的括号
/*
// 括号有无将决定表达式的类型。
var iData = 99;

typeof iData + ' Wisen'; // 'number Wisen'
typeof (iData + ' Wisen'); // 'string'
*/

/**
 * 暂时性死区
 * 在变量申明前进行 typeof 数据检测 会提示: ReferenceError错误
 */

/*
console.log(typeof i);
let i = 10;
// Uncaught ReferenceError: i is not defined
 at <anonymous>:1:9

console.log(typeof x);
var x = 10;
//'undefined'
*/
