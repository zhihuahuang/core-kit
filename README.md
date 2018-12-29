# js-kits

A lightweight modular tool library.

Support for browsers and Node.js

## Type

- `isArray(arr)` : `Boolean`
- `isBoolean(bool)` : `Boolean`
- `isFunction(fn)` : `Boolean`
- `isNull(val)` : `Boolean`
- `isNumber(num)` : `Boolean`
- `isObject(obj)` : `Boolean`
- `isRegExp(reg)` : `Boolean`
- `isString(str)` : `Boolean`
- `type(val)` : `String`

## Number Type

- `isInteger(num)` : `Boolean`
- `isNaN(num)` : `Boolean`
- `isSafeInteger(num)` : `Boolean`

## Number

- `random(min, max, isFloat)` : `Number`
- `covertRadix(num, fromRadix, toRadix)` : `String`

## Array

- `chunk(arr, [values])` : `Array`
- `compact(arr)` : `Array` 
- `difference` :construction:
- `forEach(arr, handler)` : `undefined`
- `map(arr, handler)` : `Array`

## Utils

- `identity` : `*`
- `constant` : `Function`

### identity(value)

```javascript
var object = { 'a': 1 };
 
console.log(identity(object) === object);
// => true
```

### times(n, [iteratee], [context])

Return `Function`

```javascript
times(3, String);
// => ['0', '1', '2']
 
 times(4, _.constant(0));
// => [0, 0, 0, 0]
```



- `times` : ``

## Crypto

- `encodeBase64(str)` : `String`
- `decodeBase64(str)` : `String`
- `md5` : `String`