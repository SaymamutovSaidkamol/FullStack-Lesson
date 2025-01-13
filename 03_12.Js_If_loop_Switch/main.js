// let lis = prompt("Enter to Listening")
// let wri = prompt("Enter to Writeng")
// let red = prompt("Enter to Reding")
// let spe = prompt("Enter to Speking")

// let result = (Number(lis)+Number(wri)+Number(red)+Number(spe))/4

// if (result <= 5.5 && result <= 9) {
//     if (result >= 8.5) {
//         console.log("Supergrant");
//     }else if (result >= 7.5) {
//         console.log("Grant");
//     }else if (result >= 6.5) {
//         console.log("Kantrakt");
//     }else if (result == 5.5) {
//         console.log("Superkantrakt");
//     }
// }else{
//     console.log("Xato");
// }

// let i = prompt("I")
// let a = prompt("A")


// while (Number(i) <= Number(a)) {
//     if (i % 3 == 0 && i % 5 == 0) {
//         console.log(`FizzBazz -> ${i} `);
//     }
//     else if( i % 3 == 0){
//         console.log(`Fizz -> ${i}`);
//     }
//     else if (i % 5 == 0) {
//         console.log(`Bazz -> ${i}`);
//     }
//     i++
// }


let i = prompt("I")
let a = prompt("A")

while (Number(i) <= Number(a)) {
    let tub = true
    let = count = 2
    while (count <= i) {
        if (count % i == 0) {
            tub = false
            count++
        }
    }
    if (tub){
        console.log(i);
    }
    i++
}