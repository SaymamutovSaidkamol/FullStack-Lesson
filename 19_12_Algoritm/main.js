// function func(n){
//     let count = 0
//     n =n / 2
//     n = parseInt(n)
//     for (let i = 2; i <= n; i++) {
//         console.log(i);
//         if (n % i == 0) {
//             console.log(i);
            
//             count ++
//         }
//     }
//     console.log("count",count);
    

//     if (count == 1) {
//         console.log("Tub son");
        
//     }else{
//         console.log("Tub Emas");
        
//     }
// }

// func(7)



function func(n){

    let arr = [9,3,4,7,8,1,9,6,5,3]

    let obj = { soni: "", index: ""
    }

    let name = 0
    let index = 1
    
    for (let i = 0; i <arr.length;i++) {
        console.log(arr[i]);
        
        name = arr[i] + arr[index]
        if (name != obj.soni){
            obj.soni[arr[i]] = index[i]
        }
    }
    console.log(obj);
    index++
}


func()


// let odamlar = {}; // Bo'sh obyekt
// let malumotlar = [
//     { ism: "Sherzod", yosh: 25 },
//     { ism: "Saidkamol", yosh: 18 }
// ];

// // For sikli orqali obyektga qo'shamiz
// for (let kishi of malumotlar) {
//   odamlar[kishi.ism] = kishi.yosh; // Kishi ismini kalit sifatida qo'shish
// }

// console.log(odamlar); // { Sherzod: 25, Saidkamol: 18 }