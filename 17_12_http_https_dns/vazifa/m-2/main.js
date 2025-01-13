

let arr = [[7,10], [2, 4]]
console.log(func(arr));

function func(arr){
    for (let i = 1; i < arr.length; i++) {
        if (arr[i][0] < arr[i-1][i]) {
            return false
        }
    }
    return true
}











































// // console.log(arr[0].length);
// let j = 1
// let res = 0
// for (let i = 0; i < arr.length; i++) {
//     // console.log(arr[i][j]);
//     res += arr[i][j]
// }

// if (res <= 24) {
//     console.log(true);
// }else{
//     console.log(false);
    
// }
