const _obj = {
  isNumeric: 'Number',
  isBoolean: 'Boolean',
  isString: 'String',
  isNull: 'Null',
  isUndefined: 'Undefined',
  isSymbol: 'Symbol',
  isPlainObject: 'Object',
  isArray: 'Array',
  isRegExp: 'RegExp',
  isDate: 'Date',
  isFunction: 'Function',
  isWindow: 'Window',
};
const _toString = _obj.toString;
const _type = {};
for (const key in _obj) {
  if (_obj.hasOwnProperty(key)) {
    _type[key] = (function() {
      const reg = new RegExp('^\\[object ' + _obj[key] + '\\]$');
      return function anonymous(val) {
        return reg.test(_toString.call(val));
      };
    })();
  }
}
console.log(_type.isPlainObject('w'));
