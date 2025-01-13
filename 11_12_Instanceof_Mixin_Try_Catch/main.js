
// masala1
// arr = ["call","call","call","call","call"]

// n = 10

// func(arr,n)

// function func(arr, n) {
//     let arr2 = new Array()
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] === "call") {
//             arr2.push(n)
//             n++
//         }
//     }
//     console.log(arr2);
// }


// masala-2
// let calls = ["increment","reset","decrement"]
// let init = 5

// func(init, calls)

// function func(init, calls){
//     let arr = new Array()
//     let count
//     for (let i = 0; i < calls.length; i++) {
//         if (calls[i] === "increment") {
//             count = init+1
//             arr.push(count)
//         }else if(calls[i] === "reset"){
//             count = init
//             arr.push(count)
//         }else if(calls[i] === "decrement"){
//             count = init - 1
//             arr.push(count)
//         }
//     }
//     console.log(arr);
    
// }


// masala-3
// let b = 10

// func(a,b)

// function func(a, b){
//     for (a; a < b; a++) {
//         let count = 0
//         for (let j = 0; j < a; j++) {
//             if (a % j == 0) {
//                 count++
//             }
//         }
//         if (count == 1) {
//             console.log(a);
//         }
//     }
// }

// masala-4

let arrr = ['1', '2', '3', '4', '5', '8'];
let size = 2;

func(arrr, size);

function func(arrr, size) {
    let arr1 = []; 
    for (let i = 0; i < arrr.length; i += size) { 

        let arr2 = func2(i, i + size)
        // let arr2 = arrr.slice(i, i + size); 
        arr1.push(arr2);
    }

    function func2(a, b){
        for (a; a < b; a++) {
            return a, a + 1
        }                                                                      
    }
    console.log(arr1);
}









// function func(arrr, size) {
//     let arr1 = []; 
//     for (let i = 0; i < arrr.length; i += size) { 
//         let arr2 = arrr.slice(i, i + size); 
//         arr1.push(arr2);
//     }
//     console.log(arr1);
// }

