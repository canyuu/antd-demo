/**
 * instanceof 运算符用于检测构造函数的 prototype 属性是否出现在某个实例对象的原型链上。
 * 本意是用来检测实例是否隶属于某个类的运算符
 * 基于这样的方式，也可以用来做某些数据类型的检测，例如：数组、正则等
 */

/**
 * object instanceof constructor
 *   object
 *     某个实例对象
 *   constructor
 *     某个构造函数
 * 局限性：
 * 1.不能处理基本数据类型值
 *    'str' instanceof String //=> false
 * 2.只要在当前实例的原型链(__proto__)中出现过的类检测结果都是 true
 * （用户可能会手动修改原型链的指向：xxx.__proto__ 或者 在类的继承中 等情况）
 * 优势：
 * 1.常用于深浅拷贝场景需要检测是否为正则或者日期等
 *
 */

// instanceof 示例
/*
var simpleStr = "This is a simple string";
var myString  = new String();
var newStr    = new String("String created with constructor");
var myDate    = new Date();
var myObj     = {};
var myNonObj  = Object.create(null);

simpleStr instanceof String; // 返回 false，非对象实例，因此返回 false
myString  instanceof String; // 返回 true
newStr    instanceof String; // 返回 true
myString  instanceof Object; // 返回 true

myObj instanceof Object;    // 返回 true，尽管原型没有定义
({})  instanceof Object;    // 返回 true，同上
myNonObj instanceof Object; // 返回 false，一种创建非 Object 实例的对象的方法

myString instanceof Date; //返回 false

myDate instanceof Date;     // 返回 true
myDate instanceof Object;   // 返回 true
myDate instanceof String;   // 返回 false
*/

// myCar 属于 Car 类型的同时又属于 Object 类型
/*
function Car(make, model, year) {
  this.make = make;
  this.model = model;
  this.year = year;
}
var myCar = new Car("Honda", "Accord", 1998);
var a = myCar instanceof Car;    // 返回 true
var b = myCar instanceof Object; // 返回 true
*/

// 检测xxx是f否为yyy的实例
// 要检测对象不是某个构造函数的实例时，你可以这样做
/*
if (!(myCar instanceof Car)) {
    // Do something, like myCar = new Car(myCar)
}
*/


// 手写实现
// 实例.__ptoto__ === 类.prototype
/*
function myInstanceof(leftValue, rightValue) {
  const rightProto = rightValue.prototype; // 取右表达式的 prototype 值
  leftValue = leftValue.__proto__; // 取左表达式的__proto__值
  while (true) {
    if (leftValue === null) {
      return false;
    }
    if (leftValue === rightProto) {
      return true;
    }
    leftValue = leftValue.__proto__;
  }
}
*/

