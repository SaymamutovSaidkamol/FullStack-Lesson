// function fact(n) {
//     if (n === 0 || n === 1) {
//         return 1;
//     }
//     return n * fact(n - 1);
// }

// console.log(fact(174));

// let user1 = prompt("User1: tosh, qaychi, qog'oz tanlang")
// let user2 = prompt("User2: tosh, qaychi, qog'oz tanlang")
// let ballUs1 = 0
// let ballUs2 = 0

// total(user1, user2)

// function total(user1, user2){
//     if(user1 == 'tosh' && user2 == "qog'oz" || user2 == "qaychi" && user1 == "qog'oz" || user2 == 'tosh' && user1 == "qaychi"){
//         alert(`Win user2`)
//         ballUs2 = ballUs2 + 1;
//     }else if (user1 == "qaychi" && user2 == "qog'oz" || user1 == "qog'oz" && user2 == "tosh" ||user1 == 'tosh' && user2 == "qaychi"){
//         alert(`Win user1`)
//         ballUs1 = ballUs1 + 1;
//     }else{
//         alert(`Durrang`)
//     }
//     let davom_ettirish = confirm("Davom ettiramizmi");
//     if(davom_ettirish){
//         user1 = prompt("User1: tosh, qaychi, qog'oz tanlang");
//         user2 = prompt("User2: tosh, qaychi, qog'oz tanlang");
//         total(user1, user2);
//     }else{
//         alert(`Sizlarning to'plagan  ballanrizgiz marhamat tanishib chiqing:\nUser1 ${ballUs1} || User2 ${ballUs2}`)
//     }
// }

function palindorm(n, n1) {
    if (n !== 0) {
    n1 = n1 * 10 + (n % 10);
    n = parseInt(n / 10);
    return palindorm(n, n1);
    } else {
        return n1;
    }
}
let n1 = 0;
console.log(palindorm(-121, n1));


