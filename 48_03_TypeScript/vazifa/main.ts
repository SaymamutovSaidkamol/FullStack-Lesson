// malasa-1
// function misingNumber(nums: number[]): number{
//     let sum: number = nums.length*(nums.length+1)/2;
//     return sum - nums.reduce((element = 0, val) => element+val)
// }

// console.log(misingNumber([2, 4]));

// masala-2

// function fibonacci(n: number) {
//     let sequence: number[] = [0, 1];
//     for (let i = 2; i < n; i++) {
//         sequence.push(sequence[i - 1] + sequence[i - 2]);
//     }
//     return sequence.slice(0, n);
// }

// console.log(fibonacci(9));

// masala-3

function countVowelsAndCharacters(matn: string): any {
    let unliklar = "aeiouAEIOU";
    let raqamlar = "0123456789";

    let text: string = matn.toLowerCase();

    let unlik = text.split("").filter(char => unliklar.includes(char)).length;
    let raqam = text.split("").filter(char => raqamlar.includes(char)).length;
    let bushliq = text.split("").filter(char => char === " ").length;
    let undosh = text.split("").filter(char => char.match(/[a-z]/) && !unliklar.includes(char)).length;

    return {
        vowels: unlik,
        numbers: raqam,
        spaces: bushliq,
        consonants: undosh,
        characters: matn.length
    };
}

console.log(countVowelsAndCharacters("Salom nma GAP"));
// Output: { vowels: 4, numbers: 0, spaces: 2, consonants: 7, characters: 13 }
