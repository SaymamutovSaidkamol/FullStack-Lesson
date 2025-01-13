// let arr = [1, 2, 3, [4, 5, [6, true, [8, [9], "salom"]]]];
// let res = [];

// function func(arr) {
//     for (let val of arr) {
//     if (Array.isArray(val)) {
//         func(val);
//     } else {
//         res.push(val);
//     }
//     }
//     return res;
// }

// console.log(func(arr));



// let arr = [1, 2, 3, [4, 5, [6, true, [8, [9, "sdoskdo"]]]]];
// // console.log(arr.length);

// // console.log(arr[5]);

// let res = [];


// for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
//     if(Array.isArray){
        
        
//     }
// }



















let arr = [1, 2, 3, [4, 5, [6, true, [8, [9], "salom"]]]];
let res = [];
let count = 4

function func(arr, count) {
    for (let val of arr) {
    if (Array.isArray(val) && count == 0) {
        count--
        func(val);
    } else {
        res.push(val, count);
    }
    }
    return res;
}

console.log(func(arr));
