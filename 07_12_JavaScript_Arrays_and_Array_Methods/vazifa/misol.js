// misol-1
// const users = [
//     { name: "Alice", year: 2002 },
//     { name: "Bob", year: 1990 },
//     { name: "Charlie", year: 2008 },
//     { name: "David", year: 2010 },
//     { name: "Saidkamol", year: 2006 },
//     { name: "Dilmurod", year: 1995 },
// ];

// function filterUsersByAge(users) {
//     const UserAge = users
//         .map(user =>{

//             user.year = 2024 - user.year;
//             return user
//         })
//         .filter(user => user.year >= 18 && user.year <= 35) //Fqat bu 18 va 35 oraliqdagilarni tanlab beradi

//     console.log(UserAge);
// }

// filterUsersByAge(users)

// masala-2
// reverseWords("Hello World")

// function reverseWords(sentence) {
//     let str = new String
//     let str1 = new String
//     for (let i = 0; i < sentence.length; i++) {
//         if (sentence[i] != ' ') {
//             str += sentence[i]
//         }else{
//             let array = Array.from(str);
//             array = array.reverse();
//             str = array.join("");
//             str1 += `${str} `
//             str = " "
//         }

//     }
//     if (str) {
//         let array = Array.from(str);
//         array = array.reverse();
//         str = array.join("");
//         str1 += `${str} `
//         str = " "
//     }
//     console.log(str1);
// }

// masala-3
// FUNKISIYASIZ VARIYANT
// let array = [1, 2, 3, 4, 2, 1, 9, 1, 5, 6, 3, 7]
// let tek = []
// for (let i = 0; i < array.length; i++) {
//     let count = 0
//     if (tek.includes(array[i])) {
//         continue
//     }
//     for (let j = 0; j < array.length; j++) {
//         if (array[i] == array[j]) {
//             count++
//         }
//     }
//     if (count == 2) {
//         console.log(array[i]);
//     }
//     tek.push(array[i])
// }

// FUNKISIYALIK VARIYANT
// let array = [1, 2, 3, 4, 2, 1, 9, 1, 5, 6, 3, 7]
// findDuplicates(array)

// function findDuplicates(array){
//     let tek = []
//     for (let i = 0; i < array.length; i++) {
//         let count = 0
//         if (tek.includes(array[i])) {
//             continue
//         }
//         for (let j = 0; j < array.length; j++) {
//             if (array[i] == array[j]) {
//                 count++
//             }
//         }
//         if (count == 2) {
//             console.log(array[i]);
//         }
//         tek.push(array[i])
//     }
// }

// masala-4

// let str = "The quick brown fox jumped over the lazy dog";
// let max = "";
// let suz = "";

// for (let i = 0; i < str.length; i++) {
//     if (str[i] != " ") {
//     suz += str[i];
//     } else {
//     if (suz.length > max.length) {
//         max = suz;
//     }
//     suz = "";
//     }
// }

// if (suz.length > max.length) {
//     max = suz;
// }

// console.log(max);


let str = "The quick brown fox jumped over the lazy dog";
findLongestWord(str)

function findLongestWord(str){
    let max = "";
    let suz = "";
    for (let i = 0; i < str.length; i++) {
        if (str[i] != " ") {
        suz += str[i];
        } else {
        if (suz.length > max.length) {
            max = suz;
        }
        suz = "";
        }
    }
    
    if (suz.length > max.length) {
        max = suz;
    }
    
    console.log(max);
}
