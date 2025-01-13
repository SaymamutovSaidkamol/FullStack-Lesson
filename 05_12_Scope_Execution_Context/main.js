
// function fibbonachi(n, a = 0, next = 1, sanoq1 = 0) {
//     if (sanoq1 >= n) return;

//     console.log(a);

//     fibbonachi(n, next, a + next, sanoq1 + 1);
// }

// let son = prompt("son kriting")
// fibbonachi(son);


// let a = 4
// let b = 4
// let result = ''

// for (let i = 0; i <= a; i++) {
//     for (let j = 0; j < b; j++) {
//         // result += '*'.repeat(j)+ '\n'
//         // if (i == a){
//         //     console.log('* ');
//         // }
//         if (j >= b || j <= b) {
//             console.log(j +='*'.repeat(j)+'\n' );
//         }
//     }
//     '\n'
// }



// masala-1
// let count = 10
// let result = ''

// for(let i = 1; i <= count; i++){
//     result += '*'.repeat(i)+ '\n';
// }

// console.log(result);



let n = +prompt("Son kriting")
let k = +prompt("Son kriting")
let start = +prompt("Startga son kriting")
let stop = +prompt("Stopga son kriting")

function karra(n, k, start, stop) {
    for (let i = n; i <= k; i++) {
        for (let j = start; j <= stop; j++) {
            console.log(`${i} * ${j} = ${i*j}`);
        }
        console.log('\n');
    }
}

karra(n, k, start, stop)