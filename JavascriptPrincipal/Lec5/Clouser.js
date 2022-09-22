/*
What is Clouser 
A closure is the combination of a function bundled
together (enclosed) with references to its surrounding
state (the lexical environment). In other words, a closure
gives you access to an outer function's scope from an inner 
function. In JavaScript, closures are created every time a 
function is created, at function creation time.
*/

//---------------Example 1 -----------------------
function foo() {
    var a = 2;
    function bar() {
        console.log(a);
    }
    return bar;
}
var baz = foo();
baz(); //


function foo() {
    var a = 4;
}

foo();

console.log(3);


//------------------ Example 2 -----------------
var fn;
function foo() {
    var a = 2;
    function baz() {
        console.log(a);
    }
    fn = baz; // assign baz to global variable
}
function bar() {
    fn(); // look ma, I saw closure!
}
foo();
bar();

