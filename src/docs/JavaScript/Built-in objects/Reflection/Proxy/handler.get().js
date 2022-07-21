/**
 * handler.get() 方法用于拦截对象的 读取 属性操作。
 */

/**
 * const p = new Proxy(target, {
 *   get: function(target, property, receiver) {
 *   },
 * });
 *  target
 *     目标对象。
 *   property
 *     被获取的属性名。
 *   receiver
 *     Proxy 或者继承 Proxy 的对象
 *   返回值:
 *     get 方法可以返回任何值。
 */

// 拦截
// 该方法会拦截目标对象的以下操作：
// 访问属性：proxy[foo] 和 proxy.bar
// 访问原型链上的属性：Object.create(proxy)[foo]
// Reflect.get()

// 约束
// 如果违背了以下的约束，proxy 会抛出 TypeError:
// 如果要访问的目标属性是不可写以及不可配置的，则返回的值必须与该目标属性的值相同。
// 如果要访问的目标属性没有配置访问方法，即 get 方法是 undefined 的，则返回值必须为 undefined。

/*
const p = new Proxy({}, {
  get: function(target, prop, receiver) {
    console.log('called: ' + prop);
    return 10;
  },
});

console.log(p.a); // "called: a"
// 10
*/

/*
const handler = {
  get: function(target, key, receiver) {
    if (key === 'phoneNumber') {
      return '经纪人:123';
    } else {
      //  Reflect.get()方法与从 对象 (target[key]) 中读取属性类似，但它是通过一个函数执行来操作的。
      return Reflect.get(target, key, receiver);
      // return target[key];
    }
  },
};

const star = {
  name: 'zjl',
  age: 18,
  phoneNumber: 18888888888,
};

const proxy = new Proxy(star, handler);
console.log(proxy.phoneNumber);
console.log(proxy.name);
*/
