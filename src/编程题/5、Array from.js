Array.from() //  方法对一个类似数组或可迭代对象创建一个新的，浅拷贝的数组实例。

Array.from('foo');
// [ "f", "o", "o" ]


// Using an arrow function as the map function to
// manipulate the elements
Array.from([1, 2, 3], x => x + x);
// [2, 4, 6]


// Generate a sequence of numbers  生成一个指定长度的数组
// Since the array is initialized with `undefined` on each position,
// the value of `v` below will be `undefined`
Array.from({length: 5}, (v, i) => i);
// [0, 1, 2, 3, 4]