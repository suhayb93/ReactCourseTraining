// var a = 1.07 * 1000 * 1000 * 1000 * 1000 * 1000 * 1000 * 1000;
// console.log(a.toString());

// var arr = new Array(3);
// console.log(arr)

// var obj = Object.assign({}, { a: 1 })

// var obj = {
//     toString: () => {
//         return 'hello I am object';
//     },
//     a: 'aaa'
// }

// console.log(obj + "");

// var bol = Boolean(0);

// console.log(bol, typeof bol);




// Coercion ---------------------------------------------------
//explicit coercion String <---> Number
// var a = 42;
// var b = (42 + "2")
// var c = "3.14";
// var d = Number(c);
// console.log(c);
// console.log(d);

////// + Operator
// var a = 42;
// // var b = a.toString();
// var c = "3.14" * 1;

// // var d = +c;
// console.log(c);
// var c = "3.14";
// var d = 5 + +c;
// console.log(d);

//Date ---------
// var d = new Date("Mon, 18 Aug 2014 08:53:06 CDT");
// console.log(d);
// console.log(+d); // 1408369986000 // milisecodds since 1 January 1970 00:00:00 UTC)
// var timestamp = new Date("Mon, 18 Aug 2014 08:53:06 CDT").getTime();
// console.log(timestamp);

////
//String + String will concatinate each other
// var a = 'aaa';
// var b = 'bbb';
// console.log(a + b);

//Implicitly: String <--> Numbers
//implicit coerce number to string by adding number to epmpty string
// var num = 3
// console.log(num + "")

// var a = [1];
// var b = [3];
// console.log([3].toString());
// console.log(a + b);


//using "-" operator
//The - operator is defined only for numeric subtraction

var a = "3.14";
var b = a - 0;
console.log(b);

console.log('4' * '5')

// var a = [3]; // [3,1]
// var b = [1]; // [3,4]
// a.valueOf = () => {
//     return '123'
// }
// a.toString = () => {
//     return 'hi'
// }
// console.log(a - b);

//Comparing: anything to boolean
var a = "42";
var b = true; // 1 == "42" 42 == 1 

console.log(a == b);

// 1. If Type(x) is Boolean, return the result of the comparison
// ToNumber(x) == y.
// 2. If Type(y) is Boolean, return the result of the comparison x ==
// ToNumber(y).

//Implicitly: Booleans --> Numbers
// var a = 42;
// var b = null;
// var c = "foo";
// console.log( a && (b || c) );

// var x = null;
// var y = undefined
// console.log(x || y);
// console.log(x ? x : y)
// console.log(x && y);
// console.log(x ? y : x)


// function fn(a) {
//     return a - 1;
// }

// var fn = (a) => {
//     return a-1
// }

// var x;

//  x= 4;

//  x = 3;


// var fn = (a) => a-1
// var fn = a => a-1
// var fn = a => {
//     return a -1
// }
// var fn = a => (a-1)
// var fn = (a) => (a-1)

// console.log(fn(3));

// var x = function y() {
//     console.log('hi')
// }
// x();
// y();

//stric equality === loose equality  ==

// this ------------------------------------------------------
// function identify() {
//     return this.name.toUpperCase();
// }
// function speak() {
//     //this = {name: "Kyle"}
//     var greeting = "Hello, I'm " + identify.call(this);
//     console.log(greeting);
// }
// var me = {
//     name: "Kyle"
// };
// var you = {
//     name: "Reader"
// };

// speak(me);
// speak(you);

// console.log(speak(me), speak(you));

// speak.call(me);
// speak.call(you)
// var bindedSpeak = speak.bind(me)
// bindedSpeak();
// this is not reference of function itself

// var a = 'test'
// function fooo() {
//     this.count++;
//     console.log(this.a)
// }

// function fooo() {
//     fooo.count++;
// }
// fooo.count = 0;

// for (var i = 0; i < 5; i++) {
//     fooo();
//     //call
// }

// console.log(fooo.count);


//this is not a refrence to the scope of the function

// function foo() {
//     var a = 2;
//     this.bar();
// }
// function bar() {
//     console.log(this.a);
// }
// foo();


// this binding has nothing to do with where a function is
// declared, but has instead everything to do with the manner in which
// the function is called.


// call site
// function baz() {
//     // call-stack is: `baz`
//     // so, our call-site is in the global scope
//     console.log("baz");
//     bar(); // <-- call-site for `bar`
// }
// function bar() {

//     // call-stack is: `baz` -> `bar`
//     // so, our call-site is in `baz`
//     console.log("bar");
//     foo(); // <-- call-site for `foo`
// }
// function foo() {
//     // call-stack is: `baz` -> `bar` -> `foo`
//     // so, our call-site is in `bar`
//     console.log("foo");
// }
// baz(); // <-- call-site for `baz`


//default binding
// function foo() {
//     console.log(this.a);
// }
// var a = 2;
// foo(); // call site is global

//implicit binding
// var a = 5;
// function foo() {
//     console.log(this.a);
// }
// var obj = {
//     a: 2,
//     foo: foo
// };
// obj.foo();
//Only the top/last level of an object property
//reference chain matters to the call-site. For instance:
// function foo() {
//     console.log(this.a);
// }
// var obj2 = {
//     a: 42,
//     foo: foo
// };
// var obj1 = {
//     a: 2,
//     obj2: obj2,
//     foo: foo
// };
// obj1.obj2.foo();

//Implicity lost
// function foo() {
//     console.log(this.a);
// }
// var obj = {
//     a: 2,
//     foo: foo
// };
// var bar = obj.foo; // function reference/alias!
// var a = "oops, global"; // `a` also property on global object
// bar(); // "oops, global"

///Explicit binding
// function foo() {
//     console.log(this.a);
// }
// var obj = {
//     a: 2
// };
// var a = 'test';
// foo.call(obj);

// function foo(a) {
//     this.a = a;
//     // return { 7: "test" }
// }
// var bar = new foo(4);
// console.log(bar.a);

//new Binding
// function foo(a) {
//     this.a = a;
// }
// var bar = new foo(2);
// console.log(bar.a);

//Everything in Order
//if there is implicit and explicit binding togather
//which take proceed

// function foo() {
//     console.log(this.a);
// }
// var obj1 = {
//     a: 2,
//     foo: foo
// };
// var obj2 = {
//     a: 3,
//     foo: foo
// };

// obj1.foo(); // 2
// obj2.foo(); // 3
// obj1.foo.call(obj2); // 3
// obj2.foo.call(obj1); // 2

//new binding vs implicit binding
// function foo(something) {
//     this.a = something;
// }
// var obj1 = {
//     foo: foo
// };
// var obj2 = {};
// obj1.foo(2);
// console.log(obj1.a); // 2
// obj1.foo.call(obj2, 3);
// console.log(obj2.a); // 3
// var bar = new obj1.foo(4);
// console.log(obj1.a); // 2
// console.log(bar.a); // 4


//explicit binding vs new binding
// function foo(something) {
//     this.a = something;
// }
// var obj1 = {};
// var bar = foo.bind(obj1);
// bar(2);
// console.log(obj1.a); // 2
// var baz = new bar(3);
// console.log(obj1.a); // 2
// console.log(baz.a); // 3
