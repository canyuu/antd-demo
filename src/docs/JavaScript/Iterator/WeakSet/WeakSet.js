/**
 * WeakSet 对象允许你将弱保持对象存储在一个集合中。
 * WeakSet 对象是一些对象值的集合，并且其中的每个对象值都只能出现一次。在WeakSet的集合中是唯一的
 * WeakSet 弱引用：集合中对象的引用为弱引用（不用考虑垃圾回收，内存泄漏，常用于性能优化）。
 * 如果没有其他的对WeakSet中对象的引用，那么这些对象会被当成垃圾回收掉。
 * 这也意味着 WeakSet 中没有存储当前对象的列表。 正因为这样，WeakSet 是不可枚举的。
 */


/**
 *  new WeakSet([iterable]);
 *  iterable
 *      如果传入一个可迭代对象作为参数，则该对象的所有迭代值都会被自动添加进生成的 WeakSet 对象中。null 被认为是 undefined。
 */

// 应用场景

// 对传入的 subject 对象 内部存储的所有内容执行回调
// 递归调用自身的函数需要一种通过跟踪哪些对象已被处理，来应对循环数据结构的方法。
// 为此，WeakSet 非常适合处理这种情况：
/*
function execRecursively(fn, subject, _refs = null) {
  if (!_refs) {
    _refs = new WeakSet();
  }

  // 避免无限递归
  if (_refs.has(subject)) {
    return;
  }

  fn(subject);
  if ('object' === typeof subject) {
    _refs.add(subject);
    for (const key in subject) {
      if (subject.hasOwnProperty(key)) {
        execRecursively(fn, subject[key], _refs);
      }
    }
  }
}

const foo = {
  foo: 'Foo',
  bar: {
    bar: 'Bar',
  },
};

foo.bar.baz = foo; // 循环引用！
execRecursively((obj) => console.log(obj), foo);
*/

// 储存 DOM 节点，而不用担心这些节点从文档移除时，会引发内存泄漏。
/*
<div id="wrap">
    <buttton id="btn1">确认1</buttton>
    <buttton id="btn2">确认2</buttton>
    <buttton id="btn">确认</buttton>
</div>
<script>
    let wrap = document.getElementById('wrap');
    let btn1 = document.getElementById('btn1');
    let btn2 = document.getElementById('btn2');
    const ws = new WeakSet();
    ws.add(btn2);
    console.log(ws)
</script>
*/

