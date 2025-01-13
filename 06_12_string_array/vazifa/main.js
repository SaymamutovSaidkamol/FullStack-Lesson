// masala-1
// Massivni oladigan va takroriy elementlarsiz yangi massivni qaytaruvchi removeDuplicates(arr) funksiyasini yozing.
// console.log(removeDuplicates([1, 2, 3, 1, 2, 4])); // Chiqish: [1, 2, 3, 4]

// let array2 = [1, 2, 3, 1, 2, 4];
// let result = [];

// for (let i = 0; i < array2.length; i++) {
//     if (!result.includes(array2[i])) {
//         result.push(array2[i]);
//     }
// }

// console.log(...result);


// masala-2
// Berilgan uzunlikdagi tasodifiy alfanumerik parolni yaratuvchi generatorPassword(length) funksiyasini yozing.
// console.log(generatePassword(8)); // Chiqish: 2w4g23fs

function random_nums_asci(str) {
    let arr = str.split('');
    
    for (let i = arr.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }

    return arr.join('');
}
let randoms = ""


for (let i = 0; i < 4; i++) {
    randoms += `${String.fromCharCode(Math.floor(Math.random() * (122 - 97 + 1)) + 97)}` 
}

for (let i = 0; i < 4; i++) {
    randoms += `${Math.floor(Math.random() * 9) + 1}` 
}

randoms = random_nums_asci(randoms)
console.log(randoms);


// masala-3
// Satrdagi har bir so‘zning birinchi harfini bosh harf bilan yozadigan kapitalizatsiya so‘zlari(str) funksiyasini yozing.

// let word = "assalomu aleykum"
// let result = ""

// for (let i = 0; i < word.length; i++) {
//     if (i === 0 || word[i-1] === ' '){
//         result += word[i].toUpperCase()
//     }
//     else{
//         result += word[i]
//     }
// }
// console.log(result);


