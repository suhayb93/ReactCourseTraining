// Async -----------------------------------------------------
// eventloop
//setTimeout()
// console.log('before');
// setTimeout(() => {
//     console.log('inside setTimeout')
// }, 0)
// console.log('after');

///

// for (var i = 1; i <= 5; i++) {

//     setTimeout(function timer() {
//         console.log(i);
//     }, 1000);
// }

//Promise
// function getAsync() {
//     return new Promise((reslove, reject) => {
//         setTimeout(() => {
//             var x = false;
//             if (x) {
//                 reslove('result done')
//             } else {
//                 reject('Fail Done Succesfully');
//             }
//         }, 1000)
//     })
// }

// getAsync()
//     .then((result) => {
//         return result
//     })
//     .then((result) => {
//         console.log(result);
//     })
//     .catch((result) => {
//         console.log(result);
//     })
