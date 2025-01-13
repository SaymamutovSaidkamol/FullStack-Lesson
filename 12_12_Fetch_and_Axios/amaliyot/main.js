// async function getData() {
//     let res = await fetch("https://api.escuelajs.co/api/v1/products");
//     let data = await res.json();
//     return data;
// }

// let items = await getData();

// items.forEach((val, index) => {
// console.log(`
//         N: ${index + 1}\n
//     Narx: ${val.price} $,
//     Desc: ${val.description},
//     Sarlavha: ${val.title}
//     `);
// });


// class Taymer{
//     start

//     constructor(start){
//         this.start = start
//     }

//     Start(){

//         setInterval(() => {
//             console.log(this.start);

//             this.start--
            
//         },1000 * 50)
//     }
//     Pauza(){}
//     Stop(){}

// }

// let taymer = new Taymer()

// taymer.Start(5)


class Taymer {
    constructor(minut, sekund) {
        this.minut = minut;
        this.sekund = sekund;
        this.interval = null; 
    }

    start() {
        this.interval = setInterval(() => {
            this.updateTimer();
        }, 1000); 
    }

    Stop(n) {
        
        console.log(`${this.minut}:${this.sekund < 10 ? '0' : ''}${this.sekund}`);

        if (this.sekund === 0) {
            if (this.minut === 0) {
                clearInterval(this.interval);
                console.log("Vaqt tugadi!");
            } else {
                this.minut--;
                if (n == this.minut) {
                    clearInterval(this.interval);
                    console.log("Timer to'xtatildi!");
                }
                this.sekund = 59;
            }
        } else {
            this.sekund--;
        }
    }

}

const timer = new Taymer(5, 0);
timer.start();
timer.Stop(4)
