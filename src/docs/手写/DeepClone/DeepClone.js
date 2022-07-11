/*
https://juejin.cn/post/6844903929705136141#heading-6
*/
// 自己实现深拷贝的方法(递归拷贝要一层层的拷贝)
function deepClone(obj, hash = new WeakMap()) {
  // 判断obj是null还是undefined
  if (obj == null) {
    return obj;
  }
  // 不是对象就不用拷贝了
  if (obj instanceof Date) {
    return new Date(obj);
  }
  if (obj instanceof RegExp) {
    return new RegExp(obj);
  }

  if (typeof obj !== 'object' ) {
    return obj;
  }
  if (hash.has(obj)) {
    return hash.get(obj);
  }
  // 要不是数组 要不是对象
  const cloneObj = new obj.constructor;
  // 如果是对象把他放到weakMap中，如果在拷贝这个对象这个对象就存在了直接返回这个对象即可
  hash.set(obj, cloneObj);
  for (const key in obj) {// 实现深拷贝
    if (obj.hasOwnProperty(key)) {
      cloneObj[key] = deepClone(obj[key], hash);
    }
  }
  return cloneObj;
}

const obj = {
  age: 12,
  person: {
    name: '小王九',
    sex: {
      boy: '男',
    },
  },
};
const n = deepClone(obj);
console.log(n);
console.log(obj['person']);
