// //Number.NaN
// console.log(Number.isNaN('hello'))
// console.log(isNaN('hello'));
// console.log(Number.isNa(NaN));
// var num = Number(23)

// undeclared 
// var x = 'hi Iam Happy'
// console.log(x)
// var x = true;
// if (typeof x) { // if x is declared enter the condition

//     x = 'dfdsf'
//     console.log('If condintion is true');
// }
// console.log(x);
// console.log(typeof x);

//objects --------------------------------------------
obj = {
    key: 'value'
}
// we can create object by different methods
// 1. by using litral form, {} and assigne it to variable
// example 
var obj = { key: 'value' };
// 2. by useing Object construnctor
var obj2 = new Object();
console.log(obj2.key);
obj2.key = 'value';
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
// console.log(typeof num, num);
//Object wrapper 

// var num = "string";
// var num = new String(num);
// console.log(num.charAt(4))

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

// for(let key in obj) {
//     var newObj = obj[key];
// }

// var person = {
//     name: 'Ahmad',
//     age: 22,
//     address: {
//        buildingNo: '123',
//        isRenting: true
//     }
//  }

// console.log(Object.getOwnPropertyDescriptor(person, 'name')); 

// var myObj = {a: '1'}
// Object.defineProperty(myObj, 'a', {
//     // value: '2',
//     writable: true,
//     configurable: true,
//     enumerable: false,
// })

// const obj = {a: '1'};
// obj.a = '2';

// Object.defineProperty(obj, 'a', {
//     writable: false
// })
// obj = {b: '2'}// not ture 

// myObj.a = '4';
// console.log(myObj);

// console.log('myObj', myObj);
// console.log('myObj', myObj.a);
// for(let key in myObj) {
//     console.log(key);
// }



//Arrays ----------------------------------------------------------
// console.log(typeof []);

// obj = { a: 2 }

// var arr = [];
// arr[0] = 1;
// arr['key'] = 2;
// console.log(arr);

//Array is a sub object that indexed numarically 
// creating object
// var arr = new Array('1', '2');
// var arr2 = [1, 'aa', { a: 2 }];
// console.log(arr);
// console.log(typeof arr);

//--------------
// most usefull array properity 
// length 
// var arr = [1, 's', 3, 'hello']
// console.log(arr.lenght);
// arr.length = 0
// console.log(arr)

// arr.map
var arr = [1, 2, 3, 4, 5]
var mappedArr = arr.map(function (item, idx) {
    return {
        key: item
    }
})
console.log(mappedArr);

// question Task
// let we have 2 arrays the first one is for grades and the second one for students name
// if you know that these 2 arrays sorted in order as each element of student array have the grade 
// in grade array 
// var students = ['ahmad', 'khaleel', 'samar', 'duha', 'yasmeen']
// var grades = [90, 89, 45, 85, 99];
// function gradeNameMapping(grades, students) {
//     // your code here 
//     var studentsGrade = students.map(function maping(item, idx) {
//         // console.log(item, idx);
//         return {
//             name: item,
//             grade: grades[idx]
//         }
//     })

//     return studentsGrade;
// }

// var studentGrade = gradeNameMapping(grades, students);
// console.log(studentGrade)

// obj = [{ name: 'ahmad', grade: 90 }, { name: 'khaled', grade: 89 }]
// Array.filter
// var arr = [{hoppy: 'swimming'}, {hoppy: 'football'}, {hoppy: 'Tennis'}, {hoppy: 'chess'}]
// var filteredArray = arr.filter(function(item, index) {
//     return item.hoppy === 'football'
// })

// console.log(filteredArray)

var hoppies = [{ hoppy: 'swimming' }, { hoppy: 'basketball' }, { hoppy: 'teniss' }]
// Array.forEach
// hoppies.forEach(function (item, index) {
//     if (item.hoppy === 'swimming') {
//         item.hoppy = 'basketball'
//     }
//     // return item
// })
// console.log(hoppies);

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


// //Function ---------------------------------------------------------

// // function myfn(par) {
// //     par.a
// // }

// // myfn({ a: 'a', b: 'b' })
// // console.log(typeof myfn);

// // myfn.key = 'test';

// // console.log(myfn);

// // //how can declare a function
// // //normal function
// // function fn() {
// //     //you code
// // }
// // //function expression
// // var fn = function myfn() {

// // }
// // fn(); // myfn();

// //function expression with anyanomous fuction
// // var fn = function () {

// // }

// //IIFE (Imidiate Invoke function expression)
// (function () {
//     //your code here
//     console.log('IIFE will be invoked immediatly');
// })()

// //arrow function expression
// var fn = parm => parm < 4
// arr.every((parm) => parm < 5)

// // var myname = 'Ahmad'
// // var fn = () => (myname)
// // var fn = () => myname
// // var fn = param => param === 'something'





// //Scope ------------------------------------------------------------
// //what is scope
// //collects and maintains a look-up list of all the
// //declared identifiers (variables),
// //and enforces a strict set of rules as to how these are
// //accessible to currently executing code.

// //how can we declare variable
// var x = 'var'
// // let x1 = 'var1'
// // const x2 = 'var2'
// x3 = 'var3' // very bad practice

// // //javascript is a functional scope
// function foo() {
//     var myVar = 'hello';
//     // console.log(myVar2);
//     function bar() {
//         var myVar2 = 'world';
//         console.log(myVar2, myVar); // hello will be printed

//         function zoo() {
//             var myVar3 = 'Hi';
//             console.log(myVar3, myVar2, myVar);
//             x3 = 'parmeter';
//         }
//         zoo();

//     }
//     bar();
// }

// foo();
// console.log(x3);

// console.log(myVar);

//Scope Shadowing -------
// function foo(a) {
//     var x = 4;
//     function bar(b) {
//         var y = 1;
//         var x = 2;

//         console.log(x, y)

//         function fn() {
//             var z = 3;
//             var y = 6;
//             console.log(x, y, z);
//         }

//         fn();
//     }

//     bar(3);
// }

// foo(1);

// {

// }

// if () {

// }

// for() {

// }


//Block Scope let, const, it's the best parctic to use let and const
// function fn() {
//     let x = '12';
//     if (x) {
//         let y = 'hello world'
//         console.log(x);
//         if () {
//             ///
//         }
//     }

//     console.log(y);
// }
// fn();

// const x = { key: 3 };
// x.key = 5; //

// block every bracket like {} is a block if, for, try catch, fn


// //Hoisting -----------------------------------------------
// console.log(x);

// let x = 4;


// // var x;

// // console.log(x);

// // x = 4;


// foo();
// function foo() {
//     console.log('Iam a function');
// }

// var fn;
// console.log(fn());

// var fn = function () {
//     console.log('I am a function expression');
// }

// console.log(blockVar);

// let blockVar = 'I am block var';





