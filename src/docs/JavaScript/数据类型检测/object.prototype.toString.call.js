/**
 * Object.prototype.toString
 * 每个对象都有一个 toString() 方法，
 * 当该对象被表示为一个文本值，或者一个对象以预期的字符串方式引用时自动调用。
 * 默认情况下，toString() 方法被每个 Object 对象继承。
 * 如果此方法在自定义对象中未被覆盖，toString() 返回 "[object type]"，其中 type 是对象的类型。
 *
 * 调用Object原型上的toString方法，让方法执行的时候，方法中的this是要检测的数据类型，从而获取到数据类型所属类的详细信息
 *
 * 在所有的数据类型类中,他们的原型上都有toString方法
 * 除Object.prototype.toString不是把数据值转换为字符串，其余的都是转为字符串，
 * 而Object原型上的toString是检测当前实例隶属类的详细信息的（检测数据类型）
 */

/**
 * Object.prototype.toString.call([value])
 *   value
 *     某个要检测的对象
 * 原理：
 * 1.首先基于原型链查找机制，找到 Object.prototype.toString
 * 2.把找到的方法执行，方法中的 this -> obj
 * 3.方法内部把this（obj）的所属类信息输出
 * =>方法执行，方法中的this是谁，就是检测谁的所属类信息
 * 优势：
 * 1.很强大，所有数据类型隶属的类信息检测的一清二楚
 */

// 使用 toString() 检测对象类型
/*
var toString = Object.prototype.toString;

toString.call(new Date); // [object Date]
toString.call(new String); // [object String]
toString.call(Math); // [object Math]

//Since JavaScript 1.8.5
toString.call(undefined); // [object Undefined]
toString.call(null); // [object Null]
*/
