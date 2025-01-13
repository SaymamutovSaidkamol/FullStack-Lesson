// masala-1
// processNumbers([4, -2, 3, -1, 0, 5]);

// function processNumbers(arr){
//     let arr2 = new Array
//     for (let i = 0; i < arr.length; i++) {
//         if(arr[i] >= 0){
//             arr2 += `${arr[i]**2} `
//         }
        
//     }
//     console.log(arr2);
// }


// masala-2
// console.log(areAnagrams("listen", "silent"));

// function areAnagrams(str1, str2){
//     // Qatorlarni kichik harflarga o‘tkazamiz va harflarni alfavit bo‘yicha tartiblaymiz
//     const Sort = str => str.toLowerCase().split('').sort().join('');
    
//     // Ikkala qatorni Sortlash qilamiz va solishtiramiz
//     return Sort(str1) === Sort(str2);
// }



// masala-3
// function palindorm(n, n1=0) {
//     if (n !== 0) {
//     n1 += n%10
//     n = parseInt(n / 10);
//     return palindorm(n, n1);
//     } else {
//         return n1;
//     }
// }
// let n1 = 0;
// console.log(palindorm(12345, n1));


// masala-4
// arrayIntersection([1, 2, 3, 4], [3, 4, 5, 6]);

// function arrayIntersection(arr1, arr2){
//     let result = []
//     for (let i = 0; i < arr1.length; i++) {
//         for (let j = 0; j < arr2.length; j++) {
//             if (arr1[i] == arr2[j]) {
//                 result += arr1[i]
//             }
//         }
        
//     }
//     console.log(Array.from(result));
    
// }


// masala-5
let n = 8
true_and_false = true
generatePassword(n, true_and_false)

function generatePassword(n, true_and_false){
    if(true_and_false){
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
    }else{
        let randoms = ""
        for (let i = 0; i < n; i++) {
            randoms += `${Math.floor(Math.random() * 9) + 1}` 
        }
        console.log(randoms);
    }
}