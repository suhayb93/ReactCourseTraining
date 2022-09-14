//Number.NaN

// console.log(Number.isNaN('hello'))
// console.log(isNan('hello'));
// console.log(Number.isNan(NaN));


//undeclared 
// var x = true;
// if (x) {
//     console.log('If condintion is true');
// }
// console.log(x);
// console.log(typeof x);

//objects --------------------------------------------

// we can create object by different methods
// 1. by using litral form, {} and assigne it to variable
// example 
// var obj = {key: 'value'};
// 2. by useing Object construnctor
// var obj2 = new Object();
// obj2.key = 'value';
//these 2 method result exactly the same method, using constructing form is uncomon 

//-----------------------------------
// var obj = {
//     key1: 'some value',
//     key2: 'some value 2'
// }

// obj.key3 = 'some value 3';

// console.log(obj);

//---------------------------------
//Creating an object with key as variable (dynamic key)
// var key = 'daynamicKey'

// var obj = {
//     [key]: 'value'
// }
// console.log(obj);

//-----------

//Built in Object
//• String 
//• Number 
//• Boolean 
//• Object 
//• Function 
//• Array
//• Date
//• RegExp 
//• Error

//Object warpper 
// const num = new Number(3);
// console.log(typeof num);
//Object wrapper 

// var num = 4;
// var num = new Number(4);
// console.log(num.toFixed(4))

//---------------
//Copying Object
// var obj1 = {name: 'a', age: '3'}
// var CoppiedObj = obj1; // ???
// console.log(obj1 === CoppiedObj);


// use destructing operator (...)
//what is (...)
// var obj1 = {name: 'a', age: '3'}
// var obj2 = {hoppy: 'ball', ...obj1}
// console.log(obj2);

// var CoppiedObj = {...obj1};
// console.log(obj1 === CoppiedObj);

//but it have a problem (shallow copy)
// example
// var obj1 = {key: 'hi', key2: {subKey: 'test'}}
// var coppiedObj = {...obj1};
// console.log(coppiedObj.key2 === obj1.key2);

// var coppiedObj = Object.assign({}, obj1);
// console.log(coppiedObj.key2 === obj1.key2);



// var coppiedObj = JSON.parse(JSON.stringify(obj1));
// console.log(coppiedObj.key2 === obj1.key2);

// console.log(Object.getOwnPropertyDescriptor(coppiedObj, 'name')); 

// var myObj = {a: '1'}
// Object.defineProperty(myObj, 'b', {
//     value: '2',
//     writable: true,
//     configurable: true,
//     enumerable: false,
// })

// console.log('myObj', myObj);
// console.log('myObj', myObj.b);



//Arrays ----------------------------------------------------------

//Array is a sub object that indexed numarically 
// creating object
// var arr = new Array('1', '2');
// var arr2 = [];
// console.log(arr);
// console.log(typeof arr);

//--------------
// most usefull array properity 
// length 
// var arr = [1,'s',3, 'hello']
// console.log(arr.lenght);
// arr.lenght = 0
// console.log(arr)

// arr.map
// var arr = [1,2,3,4,5]
// var mappedArr = arr.map(function(item, idx) {
//     return {
//         key: item
//     }
// })
// console.log(mappedArr);

// question Task
// let we have 2 arrays the first one is for grades and the second one for students name
// if you know that these 2 arrays sorted in order as each element of student array have the grade 
// in grade array 
// var students = ['ahmad', 'khaleel', 'samar', 'duha', 'yasmeen']
// var grades = [90, 89, 45, 85, 99];
// function gradeNameMapping(grades, students) {
    //your code here 
// }

// Array.filter
// var arr = [{hoppy: 'swimming'}, {hoppy: 'football'}, {hoppy: 'Tennis'}, {hoppy: 'chess'}]
// var filteredArray = arr.filter(function(item, index) {
//     return item.hoppy === 'football'
// })

// console.log(filteredArray)

//Array.forEach
// arr.forEach(function(item, index) {
//     if (item.hoppy === 'swimming') {
//         item.hoppy = 'basketball'
//     }
//     return item
// })

// console.log(arr);

// numArr = [1,2,3,4,5];
// numArr.forEach(item => {
//     if (item === 3) {
//         item = 'Ahmad'
//     }
// });
// console.log(numArr)


// for(var item of arr) {
//     if (item.hoppy === 'football') {
//         break;
//     }
//     console.log(item);

// }

//Array.push, Array.pop, Array.shift, Array.unshif, Array.some, Array.every
//Array Docs
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/every


//Function ---------------------------------------------------------

// function myfn() {

// }
// console.log(typeof myfn);

//how can declare a function 
//normal function 
// function fn() {
//     //you code
// }
//function expression 
// var fn = function myfn() {

// }

//function expression with anyanomous fuction
// var fn = function() {

// }

//IIFE (Imidiate Invoke function expression)
// (function() {
//   //your code here
//   console.log('IIFE will be invoked immediatly');
// })()

//arrow function expression
// var fn = () => { 
//     // your code
// }

// var myname = 'Ahmad'
// var fn = () => (myname)
// var fn = () => myname
// var fn = param => param === 'something'





//Scope ------------------------------------------------------------
//what is scope 
//collects and maintains a look-up list of all the
// declared identifiers (variables),
// and enforces a strict set of rules as to how these are
// accessible to currently executing code.

//how can we declare variable 
// var x = 'var'
// let x1 = 'var1'
// const x2 = 'var2'
// x3 = 'var3' // very bad practice 

// //javascript is a functional scope
// function foo() {
//     var myVar = 'hello';
//     function bar() {
//         var myVar2 = 'world';
//         console.log(myVar2, myVar);

//         function zoo() {
//             var myVar3 = 'Hi';
//             console.log(myVar3, myVar2, myVar);
//         }
//     }
// }
// foo();
// console.log(myVar);

//Block Scope let, const, it's the best parctic to use let and const
// function fn() {
//     let x = '12';
//     if (x) {
//         let y = 'hello world'
//         console.log(x);
//     }

//     console.log(y);
// }
// fn();

// block every bracket like {} is a block if, for, try catch, fn


//Hoisting -----------------------------------------------
// console.log(x);

// var x = 4;


// foo();
// function foo() {
//     console.log('Iam a function');
// }


// console.log(fn());

// var fn = function() {
//     console.log('I am a function expression');
// }

console.log(blockVar);

let blockVar = 'I am blocl var';



