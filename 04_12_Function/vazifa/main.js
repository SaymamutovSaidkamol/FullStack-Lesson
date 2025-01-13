// masala   1
// function fact(n) {
//     if (n === 0 || n === 1) {
//         return 1;
//     }
//     return n * fact(n - 1);
// }

// console.log(fact(170));


// masala  2
let user1 = prompt("User1: tosh, qaychi, qog'oz tanlang")
let user2 = prompt("User2: tosh, qaychi, qog'oz tanlang")
let ballUs1 = 0
let ballUs2 = 0

total(user1, user2)

function total(user1, user2){
    if(user1 == 'tosh' && user2 == "qog'oz" || user2 == "qaychi" && user1 == "qog'oz" || user2 == 'tosh' && user1 == "qaychi"){
        alert(`Win user2`)
        ballUs2 = ballUs2 + 1;
    }else if (user1 == "qaychi" && user2 == "qog'oz" || user1 == "qog'oz" && user2 == "tosh" ||user1 == 'tosh' && user2 == "qaychi"){
        alert(`Win user1`)
        ballUs1 = ballUs1 + 1;
    }else{
        alert(`Durrang`)
    }
    let davom_ettirish = confirm("Davom ettiramizmi");
    if(davom_ettirish){
        user1 = prompt("User1: tosh, qaychi, qog'oz tanlang");
        user2 = prompt("User2: tosh, qaychi, qog'oz tanlang");
        total(user1, user2);
    }else{
        alert(`Sizlarning to'plagan  ballanrizgiz marhamat tanishib chiqing:\nUser1 ${ballUs1} || User2 ${ballUs2}`)
    }
}

// masala  3
// let lis = +prompt("Enter to Listening")
// let wri = +prompt("Enter to Writeng")
// let red = +prompt("Enter to Reding")
// let spe = +prompt("Enter to Speking")

// eilts(lis, wri, red, spe)

// function eilts(lis, wri, red, spe) {
//     let overaly = (lis + wri + red + spe)/4
//     if (overaly<=9 && overaly>=5.5) {
//         if(overaly>=8 && overaly <= 9){
//             alert(`Siz ${overaly} Ball b/n Prizident Grantiga o'qishga kirdingiz`)
//         }else if(overaly >= 7 && overaly < 8){
//             alert(`Siz ${overaly} Ball b/n Grantga o'qishga kirdingiz`)
//         }else if(overaly >= 6 && overaly < 7){
//             alert(`Siz ${overaly} Ball b/n Kantrakt o'qishga kirdingiz`)
//         }else if(overaly == 5.5){
//             alert(`Siz ${overaly} Ball b/n Super Kantraktga uqishga kirdingiz`)
//         }
//     }else{
//         alert(`Siz Xato ball kritdingiz "${overaly}"`)
//     }
// }

// masala  4
// let n = prompt("N soniga qiymat kriting: ")

// bulinuvchilar(n)

// function bulinuvchilar(n) {
//     for (let i = 1; i <= n; i++) {
//         if(n%i==0){
//             console.log(i);
//         }
//     }
// }

// masala  5
// let n = prompt("N soniga qiymat kriting: ")
// tub_Tubemas(n)

// function tub_Tubemas(n){
//     let count = 0
//     let i = 2
//     while (i <= n) {
//         if(n % i == 0){
//             count++
//         }
//         i++
//     }
//     if(count==1){
//         console.log("Tub son");
//     }else{
//         console.log("Tub emas");
//     }
// }