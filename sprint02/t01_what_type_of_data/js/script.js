let n = 123;
let bigInt = 1234567890123456789012345678901234567890n;
let str = "Hello";
let isbool = true;
let pointer = null;
let ua;
let obj = {};
let a = Symbol('id');
let f = alert;

alert(`Number is ${typeof n}
BigInt is ${typeof bigint}
String is ${typeof str}
Boolean is ${typeof isbool}
Null is null
Undefined is ${typeof ua}
Object is ${typeof obj}
Symbol is ${typeof a}
Function is ${typeof f}`);