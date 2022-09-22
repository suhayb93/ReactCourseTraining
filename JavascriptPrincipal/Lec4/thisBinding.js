//There is three rules
//1. Default binding
//2. Implicit binding
//3. Explicit binding
//4. New binding
//////////////////////////////////////////

// Bind vs Call -------------------
function foo() {
    return 'hello'
}
var bar = foo.bind();
console.log(bar);
var bar = foo.call();
console.log(bar);



//Very important rule: this is related to call site of the function
//no to declaration site


//1. Default binding
//In default binding this will be point to globl
//Example 1 -------------------

var a = 4;
function foo() {
    var a = 5;
    console.log(this.foo.a);
}

foo.a = 0;
foo();
//Example 2 -------------------
var a = 'hello I am a'

function bar() {
    var a = 'in bar'
    function baz() {
        var a = 'in baz'
        console.log(this.a)
    }

    baz();

}
bar();

//Example 3 ---------------------
// in this example we try to count the number
// of calling the function
function foo() {
    this.count++// this.count = this.count+1
}

foo.count = 0;

for (let i = 0; i < 5; i++) {
    foo();
}

console.log(count);

///////////////////////////////////////
// 2. Implicit binding
// this rule is when `this` will be implicitly binded
// with an object
//Example 1 ---------------------------
function foo(a) {
    this.a = a; // === obj.a = a
}

var obj = {
    foo: foo,
}

obj.foo(4); // note the call site of the fuction;

console.log(obj)


//Example 2 ---------------------------
function foo() {
    console.log(this.a)
}

var obj2 = {
    foo: foo,
    a: 11
}

var obj1 = {
    obj2: obj2,
    a: 12
}

obj1.obj2.foo();

//this will binded to the closet
//Obj we call the function through it

/////////////////////////////////
//Loosing implict binding
function foo() {
    console.log(this.a)
}

var obj = {
    foo: foo,
    a: 4
}

var bar = obj.foo

bar() // note call site
// this will lose it's binding in implict binding when we
// call the function through a reference over to the global scope


/////////////////////////////////////////
// 3. Explicit binding
//Example -----------------
var a = 'hello';
function foo() {
    console.log(this.a)
}

var obj = {
    a: 5
}
foo.call(obj)

//Example 2 ---------------------
var a = 'hello'
function foo() {
    console.log(this.a)
}

var obj = {
    a: 5
}

var bar = foo.bind(obj)
bar()

///////////////////////////////////////
//4. new Binding (function constucting call)
//if the function does not return any value a new object will be
//returned and will be binded to function which we called it by new

// Example ----------------
function foo() {
    this.a = 4;
}

var bar = new foo();
// == (but not accurate)
// var bar = {};
// foo.bind(bar)
console.log(bar.a);

//////////////////////////////////////////////////
//Everything in Order
//1. if there is implicit and explicit binding togather
//which take proceed

function foo() {
    console.log(this.a);
}
var obj1 = {
    a: 2,
    foo: foo
};
var obj2 = {
    a: 3
};

obj1.foo();
obj1.foo.call(obj2);

//first rule
//explicit take proceed over implicit binding

//////////////////////////////////////////////////////
//new binding vs implicit binding -----------
function foo(something) {
    this.a = something;
}
var obj1 = {
    foo: foo
};
var obj2 = {};

// obj1.foo(2);
// console.log(obj1.a);// 2

// obj1.foo.call(obj2, 3);
// console.log(obj2.a);// 3

var bar = new obj1.foo(4);
console.log(obj1.a);//4 undefined
console.log(bar.a);//4


///////////////////////////////////////////////////
//explicit binding vs new binding
function foo(something) {
    this.a = something;
}
var obj1 = {};
var bar = foo.bind(obj1);
// bar(2);
// console.log(obj1.a);

var baz = new bar(3);
console.log(obj1.a);
console.log(baz.a);

////////////////////////////////////////////////////
//Rules
// 1. Is the function called with new (new binding) ? If so, this is the
//    newly constructed object.
//    var bar = new foo()
// 2. Is the function called with call or apply(explicit binding), even
//    hidden inside a bind hard binding ? If so, this is the explicitly
//    specified object.
//    var bar = foo.call(obj2)
// 3. Is the function called with a context(implicit binding), otherwise
//    known as an owning or containing object ? If so, this is that context
//    object.
//    var bar = obj1.foo()

// 4. Otherwise, default the this (default binding). If in strict mode,
//    pick undefined, otherwise pick the global object.
//    var bar = foo()


/////////////////////////////////////////
//Exceptional case 
function foo() {
    console.log(this.a);
}
var a = 2;
foo.call(null);

//the result is expected is the code will crash, since this
//will be null (this = null)
//but the exception here is when we bind a null this means
//that we make this to point to global scope


//////////////////////////////////////////////////////////////
//Arrow function
// () => {

// }
////
// arrow function, take the value of this from parent scope 

//Exmaple 1 --------------------------
//same as function
var a = 4;
var foo = () => {
    var a = 3;
    console.log(this.a)
}

//Exmaple 2 --------------------------
var a = 'global'
var foo = () => {
    console.log(this.a)
}
function bar() {
    console.log(this.a) //2 
    var baz = () => {
        console.log(this.a) // 2
    }
    baz();
}

var obj = {
    a: 2,
    foo: foo,
    bar: bar
}

// obj.foo();
obj.bar();

bar.call({ a: 5 })

function foo() {
    var a = 5;
}

foo.a = 4

foo.call(foo)

var arrowFn = () => {
    var x = 4;

}
console.log(x)

arrowFn();// bind