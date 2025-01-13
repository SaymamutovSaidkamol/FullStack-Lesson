// console.log("hello 1");
// console.log("hello 2");

// setTimeout(() => {
//   console.log("hello from timeout 2 ");
// }, 1500);
// setTimeout(() => {
//   console.log("hello from timeout 1 ");
// }, 1500);
// setTimeout(() => {
//   console.log("hello from timeout 3 ");
// }, 500);
// console.log("hello 3");
// console.log("hello 4");

// let i = 1;

// setInterval(() => {
//   i++;
//   console.log(i);
// }, 1000);

// let a2 = new Promise((resolve, reject) => {
//   if (4 < 5) {
//     setTimeout(() => {
//       resolve("malumot 2");
//     }, 1000);
//   } else {
//     setTimeout(() => {
//       reject("malumot yo'q");
//     }, 1000);
//   }
// });

// Promise.all([a1, a2]).then(([javob1, javob2]) => {
//   console.log(javob1);
//   console.log(javob2);
// });

// Promise.race([a1, a2]).then((a) => {
//   console.log(a);
// });
// console.log("before");

// let a1 = new Promise((resolve, reject) => {
//   if (4 < 5) {
//     setTimeout(() => {
//       resolve("malumot");
//     }, 1500);
//   } else {
//     setTimeout(() => {
//       reject("malumot yo'q");
//     }, 500);
//   }
// });
// let a = fetch("https://fakestoreapi.com/products");
// console.log(a);
// a.then((res) => res.json()).then((res) => console.log(res));

// console.log("after");

// _-------------------------------------------------------
// SOAT

let i = 1
let j = 1
let soat = 13
setInterval(() => {

    if(i < 10){
        i = '0' + i
    }
    if(i > 0){
        console.log(`${soat}:${j}:${i}`);
    }if(i == 3){
        j += 1
        i = 0
    }
    i++
}, 1000);


// ------------------------------------------------------------


// async function hello(){
//     try{
//         let data = await fetch("https://api.alquran.cloud/v1/quran/en.asad")
//         let formatted = await data.json();

//         let arr = new String(formatted)
//         console.log(arr);
//     }catch(e){
        
//     }
// }

// hello();