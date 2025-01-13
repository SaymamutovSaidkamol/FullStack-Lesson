// masala-1.
// let a = 5
// let b = 2

// for (let i = 0; i < a; i++) {
//     a -= b
// }
// console.log(a);

// masala-2.
// let a = 5
// let b = 2

// let count = 0
// while (a>=b) {
//     a -= b
//     count++
// }
// console.log(count)

// masala-3.
// let a = 5
// let b = 2

// let count = 0
// while (a>=b) {
//     a -= b
//     count++
// }
// console.log(count, a)

// masala-4.
// let n = 243; // Berilgan son
// let Natija = true; // Dastlab true deb olamiz

// // n ni 3 ga bo‘lib tekshirish
// while (n > 1) {
//   if (n % 3 !== 0) { // Agar 3 ga qoldiqsiz bo'linmasa
//     Natija = false;
//     break;
// }
//   n = Math.floor(n / 3); // 3 ga bo'lib davom etamiz
// }

// console.log(Natija); // Natija: true



// masala-5.
// let n = 128; 
// let Natija = true;


// while (n > 1) {
//     if (n % 3 !== 0) { 
//     Natija = false;
//     break;
// }
//     n = Math.floor(n / 3);
// }

// // console.log(Natija); // Natija: true



for (let i = 0; i < 10; i++) {
    for(let j = 0;j < i; j++)
        console.log("*\n");
}