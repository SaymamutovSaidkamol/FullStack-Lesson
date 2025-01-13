



// class Car {
//     Go
//     Benzin
//     Km
//     Fill
//     Full
//     chek
//     constructor(Go, Benzin, Km, Fill, Full, chek){
//         this.Go = Go
//         this.Benzin = Benzin
//         this.Fill = Fill
//         this.Full = Full
//         this.chek = chek
//     }
//     getGo(n){
//         if (n){
//             this.Km += n
//             console.log(this.Km, "km yurdingiz");
//         }else{
//             this.Km += 1
//             console.log(this.Km, "km yurdingiz");
//         }
//     }
    
//     getBenzin(){
//         this.Benzin
//         this.Benzin = this.Benzin - (this.Km*5)
//     }

//     GetKm(){
//         console.log("Siz ", this.Km, "yurgansiz");
//     }

//     getFill(){

//         let max_benzin = 100- this.Km
//         console.log("Maximalni -> ",max_benzin, "Benziin Quya olasiz");
//         let Benzin_quyish = +prompt("Necha litr benzin quymoqchisz")
        
//         if (Benzin_quyish < max_benzin) {
//             this.Benzin += Benzin_quyish
//             console.log("Siz", Benzin_quyish, "Quydingiz va hozirda bakingizda ", this.Benzin, "bor");
//         }else{
//             console.log(Benzin_quyish, "Benzinga Joy yetarlik emas");
//         }
//     }

//     GetFull(){
//         this.Benzin = 100
//         console.log("Bakingiz 100% tuldirildi ->", this.Benzin);
//     }

//     getChek(){
//         console.log("Yurgan Kl metringiz ", this.Km);
//         console.log("Bakingizdagi benzin ", this.Benzin);
//     }

// }

// let yur = new Car()

// yur.getGo(10)
// yur.getBenzin()
// yur.GetKm()
// yur.getFill()
// yur.GetFull()
// yur.getChek()

function nums(num) {
    let son1 = 0
    let son2 = 0
    console.log(num.length);
    
    for(let i = 0; num.length > i; i++){
        if(i % 2 == 0){
            son1 = son1 + parseInt(num[i])
            console.log("Juft index",son1);
            
        }else{
            son2 = son2 + parseInt(num[i])
            console.log("Toq index",son2);
            
        }
    }
    console.log(son1);
    console.log(son2);
    
    if(son1 == son2){
        console.log("Rost");
        
    }else{
        console.log("Muvazanatlik emas");
        
    }
};

nums("24123");
