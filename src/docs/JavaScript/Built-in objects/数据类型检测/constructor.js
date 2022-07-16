/**
 * constructor 属性返回 Object 的构造函数（用于创建实例对象）。
 * 注意，此属性的值是对函数本身的引用，而不是一个包含函数名称的字符串。
 */

/**
 * object.constructor === Object
 *   object
 *     某个实例对象
 *   Object
 *     对象
 * 局限性：
 * 1.CONSTRUCTOR属性值太容易被修改了
 *    arr.constructor = 111; //=>设置私有属性
 *    console.log(arr.constructor === Array); //=>false
 *    Func.prototype={}; //=>这样原型上没有CONSTRUCTOR属性（重构了）
 * 2.基本类型 CONSTRUCTOR 不会保留这种更改（也不会抛出异常）
 *    const val = 'abc';
 *    val.constructor = Number; // val.constructor === String
 */

// 改变对象的 constructor
// 可以为除了 null 和 undefined（因为这两者没有相应的构造函数）之外的任何类型指定 constructor 属性
// （如 String、Number、Boolean 等），
// 但基本类型不会保留这些更改（也不会抛出异常）。
// 也是同样的原因，基本类型允许设置任何属性（除了 null 和 undefined），而不会产生副作用。
// 就是说，每当把这样的基本类型当成对象使用时，其对应的构造函数的实例就会在语句执行后立即被创建和丢弃。
/*
let val = null;
val.constructor = 1; // TypeError: val is null
val = 'abc';
val.constructor = Number; // val.constructor === String
val.foo = 'bar';
val.foo === undefined; //=>true
*/
// 因此，基本上除了上面的提到的基本类型外，任何对象都可以更改 constructor 属性的值，
// 请注意，改变 constructor 的属性不会影响 instanceof 运算符：
/*
let a = [];
a.constructor = String
a.constructor === String // true
a instanceof String // false
a instanceof Array // true

a = new Foo();
a.constructor = 'bar'
a.constructor === 'bar' // true
*/
// 如果对象被密封或冻结，那么更改 constructor 将不会起作用，也不会抛出异常：
/*
let a = Object.seal({});
a.constructor = Number;
a.constructor === Object; // true
*/

// 改变函数的 constructor
/*
Func.prototype={}; //=>这样原型上没有CONSTRUCTOR属性（重构了）
*/

