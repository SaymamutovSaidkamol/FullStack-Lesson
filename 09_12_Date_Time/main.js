// const date = new Date();
// const year = date.getFullYear();
// const month = date.getMonth();
// const day = date.getDate();
// const hour = date.getHours();
// const minut = date.getMinutes();
// const sekunt = date.getSeconds();
// const dayOfWeek = date.getDay();

// console.log(date);
// console.log(year);
// console.log(month);
// console.log(day);
// console.log(hour);
// console.log(minut);
// console.log(sekunt);

const now = new Date();
const Kun = now.getDate() < 10 ? '0'+ now.getDate():now.getDate();
const Oy = now.getMonth();

const months = [
    "Yanvar",
    "Fevral",
    "Mart",
    "Aprel",
    "May",
    "Iyun",
    "Iyul",
    "Avgust",
    "Sentyabr",
    "Oktyabr",
    "Noyabr",
    "Dekabr",
]

const Yil = now.getFullYear();
const Soat = now.getHours();
const minut = now.getMinutes()< 10 ? '0'+ now.getMinutes():now.getMinutes();
const sekunt = now.getSeconds()< 10 ? '0'+ now.getSeconds():now.getSeconds();

console.log(`Kun: ${Kun}`);
console.log(`Oy: ${months[Oy]}`);
console.log(`Yil: ${Yil}`);
console.log(`${Soat}:${minut}:${sekunt}`);

// console.log(now);




// inheretenc voris olish
// abstarct => 