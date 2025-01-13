// console.log("Hello world");

// let user = {
//     ism: "alex",
//     age:34,
//     child:{
//         ism:"karl"
//     },
// };

// let malumot = prompt("Nma kerak")       //Foydalanuvchi kritgan malumot chiqaradi abyektdan

// console.log(user.age);
// console.log(user[malumot]);
// user.language = "uzbek"     //Yug' narsani yozsak qushadi "CREATE"
// user.age = 55;      //Bor narsani yozsag malumotini "UPDATE"
// delete user.child.age   //Malumotni uchiradi "DELETE"

// console.log(user);

// --------------------------------------------------------------------------

// let user = {};      //true
// let fruits = []     //true
// let str = ""        //false

// console.log(Boolean(user));
// console.log(Boolean(fruits));
// console.log(Boolean(str));

// ---------------------------------------------------------------------
// let user = {
//     ism: "alex",
//     age:34,
//     child:{
//         ism:"karl",
//         age: 12,
//     },
//     lacation: "usa",
// };

//Bu uchtasiarray qaytaradi!!!
// console.log(Object.keys(user));
// console.log(Object.values(user));
// console.log(Object.entries(user));

// Object.freeze(user); //freeze dan kegin abyekt o'zgarishi hususiyati yuqaladi yani muzlab qoladi
// user.age = 44;
// user.ism = 'asdbahsdvhsjad'
// delete user.age


// let a = Object.assign({}, user);
// a.ism = "frank"
// console.log(user, "user");
// console.log(a, "a");

// console.log(user);

// -----------------------------------------------------------------

// let ages = {
//     cat: 6,
//     dog: 8,
//     kit: 17,
//     hen: 3,
// }

// Object.freeze(ages);
// function aniqla(animal, oy){
//     console.log(oy / ages[animal]);
    
// }

// aniqla("hen", 30)


// -------------------------------------------------------------------------------------------
// console.log(this);

// const student = {
//     first_name: "Alex",
//     last_name: "Franko",
//     isStudent: true,
//     score: [8,9,5,6,4],
//     greet (){
//         console.log("Hello im", this.first_name);
        
//     },
//     score_calc(){
//         console.log(this.score.reduce((acc, x) => acc + x, 0));
        
//     }
// };

// let student2 = Object.assign({}, student);

// student2.first_name = "Karl";
// student2.score = [5,4,3,2,1]
// student.score_calc();
// student2.score_calc();

// student.greet()

// -------------------------------------------------------------------------------------------

const student = {
    first_name: "Alex",
    last_name: "Frankov",
    isStudent: true,
    score: [5,4,3,2,1],
    greed: ()=>{
        console.log(this);
        console.log("Hello im", this.first_name);
        
    },
    score_calc(){
        console.log(this.score.reduce((acc, x) => acc+x, 0));
        
    },
}


















// let car = {
//     distance:0,
//     dizel:100,
//     go(n){
//         car.distance += n
//         car.dizel = car.dizel - (n*5)
//     },
//     chek(){
//     },
//     fill(m){
//         if(car.dizel <= 100)
//             console.log(100 - car.dizel, "Max shuncha Litr benzil quya olasiz");
//         let benzin = prompt("Necga litr benzin quymoqchisiz")

//         if (benzin <= 100 - car.dizel){
//             car.dizel = 100-(benzin+5)
//             console.log(`Siz ${benzin} Benzin quydingiz`);
            
//         }else{
//             console.log("Buncha benzil quya olmaysz");
            
//         }
//     },
//     full(){},
// };

// let n = prompt("")

// console.log(car.go(n));
// console.log(car.fill(n));
// console.log(`${car.distance} KL yurdi`);
// console.log(`${car.dizel} Benzil qoldi`);

