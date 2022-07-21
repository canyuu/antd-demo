/**
 * Object.defineProperty() 方法会直接在一个对象上定义一个新属性
 * 或者修改一个对象的现有属性，并返回此对象。
 */

/**
 * Object.defineProperty(obj, prop, descriptor)
 *   obj
 *     要定义属性的对象
 *   prop
 *     要定义或修改的属性的名称或 Symbol 。
 *   descriptor
 *     要定义或修改的属性描述符。
 *   返回值:
 *     被传递给函数的对象。
 */

/**
 * 与普通操作的区别：
 * 1.该方法允许精确地添加或修改对象的属性
 * 2.普通操作通过赋值操作添加的普通属性是可枚举的，
 * 在枚举对象属性时会被枚举到（for...in 或 Object.keys 方法），可以改变这些属性的值，也可以删除这些属性。
 * 3.这个方法允许修改默认的额外选项（或配置），
 * 默认情况下，使用 Object.defineProperty() 添加的属性值是不可修改（immutable）的。
 */

/**
 * 对象里目前存在的属性描述符有两种主要形式：数据描述符和存取描述符。
 * 数据描述符是一个具有值的属性，该值可以是可写的，也可以是不可写的。
 * 存取描述符是由 getter 函数和 setter 函数所描述的属性。
 * 一个描述符只能是这两者其中之一；不能同时是两者。
 */

// 基础描述符
// configurable
// 当且仅当该属性的 configurable 键值为 true 时，该属性的描述符才能够被改变，同时该属性也能从对应的对象上被删除。
// 默认为 false。
// enumerable
// 当且仅当该属性的 enumerable 键值为 true 时，该属性才会出现在对象的枚举属性中。
// 默认为 false。

// 数据描述符
// value
// 该属性对应的值。可以是任何有效的 JavaScript 值（数值，对象，函数等）。
// 默认为 undefined。
// writable
// 当且仅当该属性的 writable 键值为 true 时，属性的值，也就是上面的 value，才能被赋值运算符 (en-US)改变。
// 默认为 false。

// 存取描述符
// get
// 属性的 getter 函数，如果没有 getter，则为 undefined。
// 当访问该属性时，会调用此函数。
// 执行时不传入任何参数，但是会传入 this 对象（由于继承关系，这里的this并不一定是定义该属性的对象）。
// 该函数的返回值会被用作属性的值。
// 默认为 undefined。
// set
// 属性的 setter 函数，如果没有 setter，则为 undefined。
// 当属性值被修改时，会调用此函数。
// 该方法接受一个参数（也就是被赋予的新值），会传入赋值时的 this 对象。
// 默认为 undefined。
