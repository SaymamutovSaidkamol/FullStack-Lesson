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
function countVowelsAndCharacters(matn) {
    var unliklar = "aeiouAEIOU";
    var raqamlar = "0123456789";
    var text = matn.toLowerCase();
    var unlik = text.split("").filter(function (char) { return unliklar.includes(char); }).length;
    var raqam = text.split("").filter(function (char) { return raqamlar.includes(char); }).length;
    var bushliq = text.split("").filter(function (char) { return char === " "; }).length;
    var undosh = text.split("").filter(function (char) { return char.match(/[a-z]/) && !unliklar.includes(char); }).length;
    return {
        vowels: unlik,
        numbers: raqam,
        spaces: bushliq,
        consonants: undosh,
        characters: matn.length
    };
}
console.log(countVowelsAndCharacters("Salom nma GAP"));
