// masala-1
// class Ret {
//     constructor(nums) {
//         this.nums = nums
//     }

//     last(){
//         if (this.nums.length !== 0) {
//             return this.nums[this.nums.length-1];
//         }else{
//             return -1
//         }
//     }
// }

// let nums = new Ret([1,2,34,7,4,6,'salom'])
// console.log(nums.last());


// masala-2
// let krish = [2,4,4,5,6,9,14]
// let new_array = new Array()

// for (let i = 1; i < krish.length; i++) {
//     let start = krish[i-1]+1;
//     let end  = krish[i]

//     while (start < end) {
//         new_array.push(start)
//         start++
//     }
// }

// console.log(new_array);


// masala-3
// class Car{
//     s;
//     constructor(son, natija = 0){
//         this.s = son
//         this.res = natija || son
//     }

//     qushish(a){
//         this.res = this.res + a
//         return this
//     }
//     ayirish(a){
//         this.res = this.res - a;
//         return this
//     }
//     Kupaytirish(a){
//         this.res = this.res * a
//         return this
//     }

//     Bulish(a){
//         this.res = this.res / a
//         return this
//     }

//     Kv(a){
//         this.res = Math.pow(this.res, a)
//         return this
//     }

//     getResult(){
//         return this.res
//     }
// }

// let javob = new Car(4).Kupaytirish(5).qushish(30)

// console.log("Natija",javob.getResult());