//-----------NOTE--------------------------------------
//in order to execute your code please open the file 
// /Assigment/index.html through the browser and
//use browser console
//-----------------------------------------------------


//getUsers is an api that will returns 30 users 
//1. write a function that take Users variable as a parameter 
// this function will return 2 arrays the first contain all 
// Male users and the other is for Female

//2. write a function as (function expression) which takes the Female array from the result of
//   previous requirment and return new array: with format of name 
//   in one string 
//   example: 
//  {"title": "Miss","first": "Begüm","last": "Biçer"} ===> 'Miss Begum Bicer'


//3. in User Object there is a prop named "dob" contain an object have
//   2 props: age and data.
//   write a function will take Male array that will alter the same array 
//   and the result will convert dob props as ====> "23": "1999-01-09T05:42:58.209Z"
//   please note dob prop will not be exist any more
// example
// userbefore = {
//     //prev props
//     dob:{
//         "date": "1999-01-09T05:42:58.209Z",
//         "age": 23
//     },
//     //next props
// }

// userafter = {
//     //prev props
//     "23": "1999-01-09T05:42:58.209Z",
//     //next props
// }


//4. write a function (arrow function) that takes Users array which will return 
//   the sum of all ages for all users
(async function main() {
    var Users = await getUsers();

    console.log(Users);

})();


///////////////////////////////////////////////////////////////////
// This is the array that contains numbers for you to work with
var myArray = [1, 2, 5, 6, 12, 23, 15, 31];
// This array should only contain even numbers
var evenArray = [];

// Don't edit this function!
filterArray(myArray, isEvenCallBack)

function filterArray(myArray, isEvenCallBack) {
    // TODO: use filterArray to determine if a number is even or odd.
    // If the number is even, add it to the array 'evenArray'

    return evenArray;
}


function isEvenCallBack(number) {


}

////////////////////////////////////////////////////
//find the output of the following with mention why 

function bar(a) {
    this.a = a
}

function foo(a) {
    bar(a)
}

var obj = {
    bar: bar,
    foo: foo,
}

obj.foo(5);

console.log(obj.a) // ?? what is the output, if it undefined (why) how can 
// we make it to be 5
///////////////////////////////////////////////////////////////

function foo() {
    function bar(a) {
        this.a = a
    }

    var obj = new bar(2);
    obj.bar = bar;
    var obj2 = obj
    obj2.bar(5);
    console.log(obj2.a) //? what is the result and why 
}

///////////////////////////////////////////////////////////////////

function foo() {
    setTimeout(function () {
        console.log(this.a)// what is the result ? and why 
        //if is undefined how can make sure to print 3
    })
}

var obj = {
    a: 3
}

foo.call(obj);

///////////////////////////////////////////////////////
function asyncCall() {
    var result = null

    setTimeout(() => {
        result = 'data'
    }, 3000)

    return result;
}

(function main() {
    var data = asyncCall()// alter asyncCall function in which the data returned be not null    
})()

var data = asyncCall()