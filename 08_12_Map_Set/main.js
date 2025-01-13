let car = {
    distance:0,
    dizel:100,
    go(n){
        if(n*5 < 100){
            car.distance += n
            car.dizel = car.dizel - (n*5)
        }else{
            console.log("Siz buncha Kilometr yura olmaysz Benzin yetmaydi");
            return 0
        }
    },
    chek(n){
        console.log("Yurgan Kilometringiz", n*5);
        console.log("Qolgan benzinningiz",car.dizel);
    },
    fill(m){
        if(car.dizel <= 100)
            console.log(100 - car.dizel, "Max shuncha Litr benzil quya olasiz");
        let benzin = +prompt("Necga litr benzin quymoqchisiz")

        if(benzin < (100 - car.dizel)){
            if (benzin <= 100 - car.dizel){
                car.dizel = (100-(m*5))+benzin
                console.log(`Siz ${benzin} Benzin quydingiz`);
            }else{
                console.log("Buncha benzil quya olmaysz");
            }
        }else{
            console.log("Siz buncha benzin quya olmaysiz");
        }
    },
    full(){
            car.dizel = 100
            console.log(`${car.dizel} Bakingiz Maximalni darajada tuldirildi`);
    }
};

let n = prompt("Necha kl yurmoqchisiz")

car.go(n)
car.chek(n)
car.fill(n)
car.full()

