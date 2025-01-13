const arr = [3, 32, 324, 43, 2423, 43, 4, 32, 34, 4];
const k = 1;

let topK = Array(k).fill(-Infinity);

for (let num of arr) {
    if (topK.includes(num)) continue;
    
    for (let i = 0; i < k; i++) {
        if (num > topK[i]) {
        topK.splice(i, 0, num);
        topK.pop(); 
        break;
        }
    }
}

const kthLargest = topK[k - 1];
console.log(`Massivdagi ${k}-chi katta son: ${kthLargest}`);
