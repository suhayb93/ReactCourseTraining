// ES6 ------------------------------------------------------
//babel Transpilation

//block scope
// console.log(typeof s);
// let s = '';

//spread operator (...)
// function foo(x, y, z) {
//     console.log(x, y, z);
// }
// foo(...[1, 2, 3]);

//
// var a = [2, 3, 4];
// var b = [1, ...a, 5];
// console.log(b);

//Default value
// function foo(x = 11, y = 31) {
//     console.log(x + y);
// }
// foo(); // 42
// foo(5, 6); // 11
// foo(0, 42); // 42
// foo(5); // 36
// foo(5, undefined); // 36 <-- `undefined` is missing
// foo(5, null); // 5 <-- null coerces to `0`
// foo(undefined, 6); // 17 <-- `undefined` is missing
// foo(null, 6); // 6 <-- null coerces to `0`

//Destructuring
//before
// function foo() {
//     return [1, 2, 3];
// }
// // var tmp = foo(),
// //     a = tmp[0], b = tmp[1], c = tmp[2];
// // console.log(a, b, c);

// function bar() {
//     return {
//         x: 4,
//         y: 5,
//         z: 6
//     };
// }
// var tmp = bar(),
//     x = tmp.x, y = tmp.y, z = tmp.z;
// console.log(x, y, z);
//===
// var [a, b, c] = foo();
// var { x: x, y: y, z: z } = bar(); // === var {x,y,z} = bar()
// console.log(a, b, c); // 1 2 3
// console.log(x, y, z);

// //it's not only destructing
// var a, b, c, x, y, z;
// [a, b, c] = foo();
// ({ x, y, z } = bar());
// console.log(a, b, c); // 1 2 3
// console.log(x, y, z);

// // pattern wiil show in react
// var [, b] = foo();


// //Concise Properties

// var x = 2, y = 3,
//     o = {
//         x: x,
//         y: y
//     };

// /// ===
// o = {
//     x,
//     y
// }

///
// o = {
//     x: function () {

//     },
//     y: function () {

//     }
// }

// o = {
//     x() {

//     },
//     y() {

//     }
// }

// //Template litrals
// var word = 'World'
// console.log(`hello ${word}`)


// var printWord = () => {
//     return 'World';
// }
// console.log(`hello ${printWord()}`);

// //Arrow function

// var a = 'hi'
// var obj = {
//     fn: () => {
//         console.log(this.a)
//     },
//     a: 'object props'
// }

// obj.fn();