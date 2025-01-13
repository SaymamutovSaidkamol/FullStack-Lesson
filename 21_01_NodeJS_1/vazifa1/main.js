// masala-1
// function removeDuplicates(a, id) {
//     let natija = new Map();
    
//     a.forEach(e => {
//         if (!natija.has(e[id])) {
//             natija.set(e[id], e);
//         }
//     });

//     return Array.from(natija.values());
//     }

// const data = [
//     { id: 1, name: "Alice" },
//     { id: 2, name: "Bob" },
//     { id: 2, name: "Bob" },
//     { id: 3, name: "Alex" },
//     { id: 1, name: "Alice" },
//     { id: 1, name: "Alice" },
// ];

// console.log(removeDuplicates(data, "id"));


// masala-2
// function missingNumber(nums) {
//     let n = nums.length; 
//     let yigindi1 = (n * (n + 1)) / 2; 
//     let yigindi2 = nums.reduce((sum, num) => sum + num, 0); 
//     return yigindi1 - yigindi2;
// }
// console.log(missingNumber([3, 0, 1]));


// masala-3
function groupByKey(a, id) {
    return a.reduce((result, e) => {
    const qiymat = e[id];
    if (!result[qiymat]) {
        result[qiymat] = []; 
    }
    result[qiymat].push(e); 
    return result;
    }, {});
}

const data = [
    { id: 1, name: "Alice" },
    { id: 2, name: "Bob" },
    { id: 1, name: "Alice" },
];

console.log(groupByKey(data, "id"));
