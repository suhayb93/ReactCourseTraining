// Javascript Assignment
// an API url provided : https://randomuser.me/api/?results=30, this api will fetch 30 object each object represent one user 
//  1. write a utility function in a separate file named Utils.js that fetch the data from APi and return array of Object 
//  2. use this function in the main js file to get the data
//  3. the return array from API should be an input to other 2 functions 
//      3.1. first function will take the the array from the result of
//          previous requirement and return new array: with format of name 
//          in one string 
//          example: 
//              {"title": "Miss","first": "Begüm","last": "Biçer"} ===> 'Miss. Begum Bicer'
//      3.2.in User Object there is a prop named "dob" contain an object have
//          2 props: age and data.
//          write a function will take the users array that will alter the same array 
//          and the result will convert dob props as ====> "23": "1999-01-09T05:42:58.209Z"
//          please note dob prop will not be exist any more
//          example
//          userBefore = {
//              //prev props
//              dob:{
//                  "date": "1999-01-09T05:42:58.209Z",
//                  "age": 23
//              },
//              //next props
//          }

//          userAfter = {
//              //prev props
//              "23": "1999-01-09T05:42:58.209Z",
//              //next props
//          }


//      3.3. write a function (arrow function) that takes Users array which will return 
//           the sum of all ages for all users


// ---------------------------------------------------------------------------------------

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

