// Prototype -------------------------------------------------
// Objects in JavaScript have an internal property, denoted in the specification
// as [[Prototype]], which is simply a reference to another object.
// var anotherObject = {
//     a: 2
// };
// create an object linked to `anotherObject`
// var myObject = Object.create(anotherObject);
// myObject.a; // 2

//prototype and in operator
// var anotherObject = {
//     a: 2
// };
// create an object linked to `anotherObject`
// var myObject = Object.create(anotherObject);
// for (var k in myObject) {
//     console.log("found: " + k);
// }
// // found: a
// ("a" in myObject);

//shadowing

// function Foo(name) {
//     this.name = name;
//     console.log(this, Foo.prototype);
// }

// var a = new Foo(1);
// console.log(a);