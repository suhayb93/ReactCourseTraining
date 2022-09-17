// var somevar = null;

// function isNull(somevar) {
//     return typeof somevar === 'object' && !somevar;
// }

// if (!isNull(somevar) && typeof somevar === 'string') {
//     somevar.name = 'ahmad';
// }

// //object 
// var obj = {name: {subname: 'ahmad'}}

// // obj.name 
// obj['name']

// var key = 'name'

// // obj[key] = obj['name'];

// console.log(obj.x?.subname);

// obj.x && obj.x.subname

// (obj.x || {}).subname

// // {}.subname  === undefined


// // somevar = 3;

// var x = String('hello').includes('he');

// // 'hello' !== ['h', 'l', 'l' ..]

// // console.log(somevar[1])

// arr = ['h', 'e', 'l']

// arr.map((item) => {

// })


// // String somevar = new String('')


// /// number 

// // var num = 2.45;
// // num = num.toFixed(4)
// // console.log(num);

// // console.log(num)

// console.log(typeof somevar)



//boolean true or false 

var boolvalue = true;


//truthy and falsy vlue

// "", 0, -0, undefined, null, NAN

//544, [], {}, [334,343], -45, "dsdf", 'sdsf'


var num = parseInt('sadsa');

console.log(typeof num);

console.log(NaN === NaN)

function customIsNan(val) {
    return typeof val === 'number' && val !== val
}

//passing ref and value
const NANError = Infinity / Infinity
console.log(NANError)
