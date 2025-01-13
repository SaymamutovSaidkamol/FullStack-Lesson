const fs = require('fs');

// fs.appendFile('food.txt', '\nBu yangi qo‘shilgan satr.', (err) => {
//     if (err) {
//         console.error('Xatolik yuz berdi:', err);
//     } else {
//         console.log('Ma’lumot faylga qo‘shildi.');
//     }
// });

const Eventemitter = require("events");

const emitter = new Eventemitter();
const foods = [
    { id: 1, name: "osh", price: 35000 },
    { id: 2, name: "burger", price: 25000 },
    { id: 3, name: "lavash", price: 30000 },
    { id: 4, name: "mastava", price: 20000 },
    { id: 5, name: "somsa", price: 10000 },
];
const staff = [
    { id: 12, name: "alex", salary: 0 },
    { id: 13, name: "bob", salary: 0 },
    { id: 14, name: "karl", salary: 0 },
    { id: 15, name: "vexana", salary: 0 },
    { id: 16, name: "veyl", salary: 0 },
];
let zakaz = [];
let summa = 0;

// bugalter xisob
emitter.on("zakaz", (stol, ofitsantId, foodId, count) => {

    staff.forEach((ofitsant)=>{
        foods.forEach((food) =>{
            if (ofitsant.id == ofitsantId && food.id == foodId) {
                summa = food.price * count
                fs.appendFile('bugalter.txt', `\nBUXGALTER: ${stol} stolga ga ${ofitsant.name}  ${summa} So'm`, (err) => {
                    if (err) {
                        console.log("Faylga yozishda xotolik bor");
                    }else{
                        console.log("Faylga muvaffaqiyatlik yozildi");
                        
                    }
                });
                // console.log(`BUXGALTER: ${stol} stolga ga ${ofitsant.name}  ${summa} So'm`);
                
            }
        })
    })
    
});

// ofitsant oyligi
emitter.on("zakaz", (stol, ofitsantId, foodId, count) => {
    
    staff.forEach((ofitsant)=>{
        foods.forEach((food) =>{
            if (ofitsant.id == ofitsantId && food.id == foodId) {
                summa = (food.price * count)*0.1
                // console.log(`OFITSIANT: ${ofitsant.name} oyiligi ${summa} So'm`);

                fs.appendFile('ofitsant.txt', `\nOFITSIANT: ${ofitsant.name} oyiligi ${summa} So'm`, (err) => {
                    if (err) {
                        console.log("Faylga yozishda xotolik bor");
                    }else{
                        console.log("Faylga muvaffaqiyatlik yozildi");
                        
                    }
                });
            }
        })
    })
});

//oshpaaga zakazlar
emitter.on("zakaz", (stol, ofitsantId, foodId, count) => {
    staff.forEach((ofitsant)=>{
        foods.forEach((food) =>{
            if (ofitsant.id == ofitsantId && food.id == foodId) {
                zakaz.push(`Count: ${count}, Food: ${food.name}, Stol: ${stol}`)

                fs.appendFile('oshpaz.txt', `\n${zakaz}`, (err) => {
                    if (err) {
                        console.log("Faylga yozishda xotolik bor");
                    }else{
                        console.log("Faylga muvaffaqiyatlik yozildi");
                        
                    }
                });
            }
        })
    })
    // console.log(zakaz);
});

emitter.emit("zakaz",23, 14, 3, 6);
// emitter.emit("zakaz",20, 12, 1, 10);


// // FAYL SUSTEM NODE_JS


