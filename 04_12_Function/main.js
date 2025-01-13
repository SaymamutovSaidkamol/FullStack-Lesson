// function guvohnoma(yosh, name){
//     console.log(`Siz xali voyaga yetmagansiz ${name} yoshingiz ${yosh}`);
    
// }
// function pasposrt(yosh, name){
//     console.log(`Siz voyaga yetgansiz ${name} yoshingiz ${yosh}`);
    
// }

// function xujjat(age, name){
//     if (Number(age) >= 2006) {
//         pasposrt(2024-Number(age), name)
//     }else{
//         guvohnoma(2024-Number(age), name)
//     }
// }

// let ism = prompt("Enter to name")
// let yosh = prompt("Enter to year")
// xujjat(yosh, ism)


// function guvohnoma(yosh){
//     console.log(`Siz xali voyaga yetmagansiz yoshingiz ${yosh}`);
    
// }
// function pasposrt(yosh, name){
//     console.log(`Siz voyaga yetgans yoshingiz ${yosh}`);
    
// }

// function xujjat(age){
//     if (age >= 2006) {
//         pasposrt(age)
//     }else{
//         guvohnoma(age)
//     }
// }

// // let ism = prompt("Enter to name")
// let yosh = prompt("Enter to year")
// xujjat(2024-Number(yosh))


// ----------------------------------------------------------------------------------------------------------

// let year = +prompt("Yilingizni kriting")
// let gender = prompt("Jinsingizni kriting")
// // let maosh = +prompt("Oylik maoshingizni kriting")

// malumot(2024-year, gender)

// function malumot(yil, jins) {
//     if(jins == 'erkak'){
//         if(yil>45){
//             console.log(`Siz ${yil-45} yildan buyon pensiyadasiz`);
//         }else{
//             console.log(`Siz hali pensiya yoshiga tulmagansiz sizning yoshingiz ${yil}`);
//         }
//     }else if(jins == 'ayol'){
//         if(yil>45){
//             console.log(`Siz ${yil-65} yildan buyon pensiyadasiz`);
//         }else{
//             console.log(`Siz hali pensiya yoshiga tulmagansiz sizning yoshingiz ${yil}`);
//         }
//     }
// }





// let year = +prompt("Yilingizni kriting")
// let gender = prompt("Jinsingizni kriting")
// let salary = +prompt("Oylik maoshingizni kriting")

// malumot(2024-year, gender, salary)

// function malumot(yil, jins, maosh) {
//     if(jins == 'erkak'){
//         if(yil>45){
//             let yil2 = yil - 45
//             let maosh2 = yil2 * 12
//             console.log(`Siz ${yil-45} yildan buyon pensiyadasiz`);
//             console.log(`Shu vaqt mobaynigacha ${maosh2*maosh}$ ishlab topgansiz`);
//         }else{
//             console.log(`Siz hali pensiya yoshiga tulmagansiz sizning yoshingiz ${yil}`);
//         }
//     }else if(jins == 'ayol'){
//         if(yil>65){
//             let yil2 = yil - 65
//             let maosh2 = yil2 * 12
//             console.log(`Siz ${yil-65} yildan buyon pensiyadasiz`);
//             console.log(`Shu vaqt mobaynigacha ${maosh2*maosh}$ ishlab topgansiz`);
//         }else{
//             console.log(`Siz hali pensiya yoshiga tulmagansiz sizning yoshingiz ${yil}`);
//         }
//     }
// }

// -----------------------------------------------------------------------------------------------------------




// let year = +prompt("Yilingizni kriting")
// let gender = prompt("Jinsingizni kriting")
// let salary = +prompt("Oylik maoshingizni kriting")

// malumot(2024-year, gender, salary)

// function malumot(yil, jins, maosh) {
//     if(jins == 'erkak'){
//         if(yil>45){
//             let yil2 = yil - 45
//             let maosh2 = yil2 * 12
//             alert(`Siz ${yil-45} yildan buyon pensiyadasiz \nShu vaqt mobaynigacha ${maosh2*maosh}$ ishlab topgansiz`)
//         }else{
//             alert(`Siz hali pensiya yoshiga tulmagansiz sizning yoshingiz ${yil}`)
//         }
//     }else if(jins == 'ayol'){
//         if(yil>65){
//             let yil2 = yil - 65
//             let maosh2 = yil2 * 12
//             alert(`Siz ${yil-65} yildan buyon pensiyadasiz`)
//             alert(`Shu vaqt mobaynigacha ${maosh2*maosh}$ ishlab topgansiz`)
//         }else{
//             alert(`Siz hali pensiya yoshiga tulmagansiz sizning yoshingiz ${yil}`)
//         }
//     }
// }


// ------------------------------------------------------------------------------------------------------------------------------


// let user1 = prompt("tosh, qaychi, qog'oz tanlang")
// let user2 = prompt("tosh, qaychi, qog'oz tanlang")

// total(user1, user2)

// function total(user1, user2){
//     if(user1 == 'tosh' && user2 == "qog'oz" || user2 == "qaychi" && user1 == "qog'oz" || user2 == 'tosh' && user1 == "qaychi"){
//         alert(`Win user2`)
//     }else if (user1 == "qaychi" && user2 == "qog'oz" || user1 == "qog'oz" && user2 == "tosh" ||user1 == 'tosh' && user2 == "qaychi"){
//         alert(`Win user1`)
//     }else{
//         alert(`Durrang`)
//     }
// }


// ---------------------------------------------------------------------------------------------------------------------------------


let user1 = prompt("USER1   tosh, qaychi, qog'oz tanlang")
let user2 = prompt("USER2   tosh, qaychi, qog'oz tanlang")
let user3 = prompt("USER3   tosh, qaychi, qog'oz tanlang")

total(user1, user2, user3)

function total(user1, user2){
    if(user2 == "qog'oz"  && user1 == 'tosh' && user3 == "tosh"|| user2 == "qaychi" && user1 == "qog'oz" && user3 == "qog'oz"|| user2 == 'tosh' && user1 == "qaychi" && user3 == "qaychi"){
        alert(`Win user2`)
    }else if (user1 == "qaychi" && user2 == "qog'oz" && user3 == "qog'oz" || user1 == "qog'oz" && user2 == "tosh"  && user3 == "tosh"||user1 == 'tosh' && user2 == "qaychi", user3 == "qaychi"){
        alert(`Win user1`)
    }else if(user3 == "qaychi" && user1 == "qog'oz" && user2 == "qog'oz" || user3 == "qog'oz" && user1 == "tosh"  && user2 == "tosh"||user3 == 'tosh' && user1 == "qaychi", user2 == "qaychi"){
        alert(`Win User 3`)
    }else if(user3 == "qog'oz" && user1 == "qaychi" && user2 == "qaychi" || user3 == "tosh" && user1 == "qog'oz"  && user2 == "qog'oz"||user3 == 'qaychi' && user1 == "tosh", user2 == "tosh"){
        alert("Win user1 va user2")
    }else if(user3 == "qaychi" && user1 == "qog'oz" && user2 == "qaychi" || user3 == "qog'oz" && user1 == "tosh"  && user2 == "qog'oz"||user3 == 'tosh' && user1 == "qaychi", user2 == "tosh"){
        alert("Win user2 va user3")
    }else if(user3 == "qaychi" && user1 == "qaychi" && user2 == "qaychi" || user3 == "qog'oz" && user1 == "qog'oz"  && user2 == "tosh"||user3 == 'tosh' && user1 == "tosh", user2 == "qaychi"){
        alert("Win user1 va user3")
    }else{
        alert("Kasha")
    }
}