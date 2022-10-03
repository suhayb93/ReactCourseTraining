// ES6 ------------------------------------------------------
//babel Transpilation

{
    let x
}
console.log(x);

//block scope
// console.log(typeof s);
// let s = '';

//spread operator (...)
function foo(x, y, z) {
    console.log(x, y, z);
}
foo(...[1, 2, 3]);



//
var a = [2, 3, 4];
var b = [1, ...a, 5];
console.log(b);

//
var obj = {
    a: 4,
    c: 5
}

var obj2 = {
    ...obj,
    b: 4,
    a: 5
}

console.log(obj2)


//Default value
function foo(x = 11, y = 31) {
    if (typeof x === 'object') {
        ///
    }
    console.log(x + y);
}
foo(undefined, 3); // 42
foo(5, 6); // 11
foo(0, 42); // 42
// foo(5); // 36
// foo(5, undefined); // 36 <-- `undefined` is missing
// foo(5, null); // 5 <-- null coerces to `0`
foo(undefined, 6); // 17 <-- `undefined` is missing
foo(null, 6); // 6 <-- null coerces to `0`

//Destructuring
//before
function foo() {
    return [1, 2, 3];
}

var x = 5;
if (x === 5) {
    x = 6
} else {
    x = 9
}

x === 5 ? x = 6 : x = 9;

var tmp = foo(),
    a = tmp[0], b = tmp[1], c = tmp[2];
console.log(a, b, c);

function bar() {
    var obj = {
        x: 4,
        y: 5,
        z: 6
    };

    var obj2 = Object.create(obj)

    return obj2;
}
// var tmp = bar(),
//     x = tmp.x, y = tmp.y, z = tmp.z;
// console.log(x, y, z);
//===
// var [a, b, c] = foo();
// var { x: x, y: y, z: z } = bar(); // === 
var { y: myVar, x: myVar2, z: myVar3 } = bar()
// console.log(a, b, c); // 1 2 3
console.log(myVar, myVar2, myVar3);

// //it's not only destructing
var a, b, c, x, y, z;

[a, b, c] = foo();
// ({ x, y, z } = bar());
// console.log(a, b, c); // 1 2 3

// console.log(x, y, z);

// // pattern wiil show in react
var [, c] = foo();


// //Concise Properties

var x = 2, y = 3,
    o = {
        x: x,
        y: y
    };

// /// ===
o = {
    x,
    y
}

///
o = {
    x: function () {

    },
    y: function () {

    }
}

o = {
    x() {

    },
    y() {

    }
}

// //Template litrals
var greeting = 'Hi'
var name = ""

console.log(gteeting)


// var printWord = () => {
//     return 'World';
// }
// console.log(`hello ${printWord()}`);

// //Arrow function

var a = 'hi'
var obj = {
    fn: () => {
        console.log(this.a)
    },
    a: 'object props'
}

// obj.fn();