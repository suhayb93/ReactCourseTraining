// Prototype -------------------------------------------------
// Objects in JavaScript have an internal property, denoted in the specification
// as [[Prototype]], which is simply a reference to another object.

var anotherObject = {
    a: 2
};
// create an object linked to `anotherObject`
var myObject = Object.create(anotherObject);
myObject.a; // 2


function foo() {

}

var obj = new foo();

foo.prototype = {
    //...utils
    __proto__: Object
}


obj = {
    __proto__: foo.prototype
}

obj.__proto__ = foo.prototype


//prototype and in operator
var anotherObject = {
    a: 2
};
// create an object linked to `anotherObject`
var myObject = Object.create(anotherObject);
console.log(myObject.a) // 2
for (var k in myObject) {
    console.log("found: " + k);
}
// found: a
("a" in myObject);

// for..in loop to iterate over an object, any property that can be reached
//via its chain (and is also enumerable—see Chapter 3) will be enumerated.
//If you use the in operator to test for the existence of a property
//on an object, in will check the entire chain of the object (regardless of
//enumerability):



// But where exactly does the [[Prototype]] chain “end”?
// The top end of every normal [[Prototype]] chain is the built-in
// Object.prototype. This object includes a variety of common utilities
// used all over JS, because all normal (built-in, not host-specific extension)
// objects in JavaScript “descend from” (aka have at the top of their
// [[Prototype]] chain) the Object.prototype object.

//example of Object utilities Tostring, valueOf, hasOwnProperty(..)


//hasOwnProperty Vs in 
// var obj = {
//     a: 1
// }

// var obj2 = Object.create(obj);

// console.log(obj2.hasOwnProperty('a'));
// console.log('a' in obj2);


//in operator check the property through the chain
//hasOwnProperty check the property only in directObject

//------------------------shadowing------------------------
var obj = {
    a: 1
}

// Object.defineProperty(obj, 'a', {
//     writable: false
// })
var obj2 = Object.create(obj);
obj2.a = 4;
console.log(obj2)



// ------------------new binding again -------------------
function Foo(name) {
    this.name = name;
    console.log(this, Foo.prototype);
}

var a = new Foo(1);
console.log(a);