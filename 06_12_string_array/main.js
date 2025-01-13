// masala-1
let string = "azizaa";

let array = Array.from(string);

array = array.reverse();
console.log(array);


let string1 = array.join("");
let count = 0;

for (let i = 0; i < string.length; i++) {
    if (string[i] == string1[i]) {
        count++;
    }
}

if (count == string.length) {
    console.log(`${string} palindrom suz`);
} else {
    console.log(`${string} palindrom suz emas`);
}


// masala-2
// let gmail = "saidkamol@gmail.com";

// console.log(gmail);

// let array = Array.from(gmail);
// oxirigi_element = ".com"
// bosh_element = "@"

// let result1 = false
// let result2 = false
// let count = 0

// for (let i = 0; i < array.length; i++) {
//     if (array[array.length-i] != oxirigi_element[oxirigi_element.length-i]){
//         result1 = true
//     }
//     if(array[i] == -11 || array[i] == '@'){
//         result2 = true
//     }
//     if(array[i] != '@'){
//         count++
//     }
// }

// count = count-9

// if(result1 == true && result2 == true && count > 8){
//     console.log("Tug'ri");
    
// }else{
//     console.log("Xato");
    
// }


// -------------------------------------------------------
// 1 da 10 gacha random son bilan to'ldirish
// let randomInt = Math.floor(Math.random() * 10) + 1; 
// console.log(randomInt); // Natija: 1 va 10 orasidagi tasodifiy butun son

// --------------------------------------------------------

// for (let i = 97; i <= 122; i++) {
//     console.log(String.fromCharCode(i)); // ASCII kodni harfga aylantiradi
// }
