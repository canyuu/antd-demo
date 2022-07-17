Array.prototype.myReduce = function(callback, prev) {
// this = [1,2,3]
  for (let i = 0; i < this.length; i++) {
    if (prev === undefined) {
      // this[i] = this[i+1] = 2
      prev = callback(this[i], this[i + 1], i + 1, this);
      i++;
    } else {
      prev = callback(prev, this[i], i, this);
    }
  }
  return prev;
};
const arr = [1, 2, 3];
const r = arr.myReduce((a, b, index, current) => {
  return a + b;
}, 100);
console.log(r);

