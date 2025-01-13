// console.log(isValidParentheses("()"));
// // true
// console.log(isValidParentheses("()[]{}"));
// // true
// console.log(isValidParentheses("(]") );
// // false
// console.log(isValidParentheses("([)]"));
// // false
// console.log(isValidParentheses("{[]}"));
// // true

// function isValidParentheses(s){
//     const stack = [];
//     const map = {
//         ')':'(',
//         '}':'{',
//         ']':'[',
//     }

// for(let char of s){
//     if (char == '(' || char == '[' || char == '{') {
//         stack.push(char)
//     }else if(char == ')' || char == ']' || char == '}'){
//         if (stack.pop() != map[char]) {
//             return false
//         }
//     }
// }
// return stack.length == 0
// }