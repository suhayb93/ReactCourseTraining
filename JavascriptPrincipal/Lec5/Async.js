// Async -----------------------------------------------------
// event loop
// []
// setTimeout()
// console.log('before');
setTimeout(() => {
    console.log('inside setTimeout')
}, 0)
console.log('after');

//fetch('www.google.com')
//,,,

//....code 

///

// for (var i = 1; i <= 5; i++) {

//     setTimeout(function timer() {
//         console.log(i);
//     }, 1000);
// }

//Promise
function getAsync() {
    return new Promise((ahmad, reject) => {
        setTimeout(() => {
            var x = true;
            if (x) {
                //fetching data from network 
                ahmad('result done')
            } else {
                reject('Fail Done Succesfully');
            }
        }, 1000)
    })
}

getAsync()
    .then((result) => {
        return result
    })
    .then((result) => {
        console.log(result);
    })
    .catch((result) => {
        console.log(result);
    })


console.log('4')

function getAsync() {
    return new Promise((ahmad, reject) => {
        setTimeout(() => {
            var x = true;
            if (x) {
                //fetching data from network 
                ahmad('result done')
            } else {
                reject('Fail Done Succesfully');
            }
        }, 1000)
    })
}

function app() {
    main()
    console.log(2);
}
(async function main() {

    // getAsync()
    // .then((result)=> {
    //     result.then((result) => {
    //         result.then()
    //     })
    // })

    const result = await getAsync();
    const result2 = await result();
    const result3 = await result2();
    console.log('test')
    console.log(result)
})()
