// // masala-1
// function countVowels(str){
//     let result = new Array();
//     const unlik_harflar = ['a', 'o', 'e', 'i', 'y', 'u', 'A', 'O', 'E', 'I', 'Y', 'U']
//     let count = 0
//     for (let i = 0; i < str.length; i++) {

//         if (unlik_harflar.includes(str[i])) {
//             result += `${str[i]},`
//             count++
//         }
//     }
//     console.log(result);
//     console.log("Unlik harflar soni ", count);
// }

// countVowels("Saidkamol");


// // masala-2
console.log(isValidParentheses("()"));
// true
console.log(isValidParentheses("()[]{}"));
// true
console.log(isValidParentheses("(]") );
// false
console.log(isValidParentheses("([)]"));
// false
console.log(isValidParentheses("{[]}"));
// true

function isValidParentheses(s){
    const stack = [];
    const map = {
        ')':'(',
        '}':'{',
        ']':'[',
    }

for(let char of s){
    if (char == '(' || char == '[' || char == '{') {
        stack.push(char)
    }else if(char == ')' || char == ']' || char == '}'){
        if (stack.pop() != map[char]) {
            return false
        }
    }
}
return stack.length == 0
}