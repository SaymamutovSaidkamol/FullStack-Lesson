// masala-1
// class Timer {
//     minut;
//     secund = 0;
//     clearInt;

//     constructor(minut) {
//         this.minut = minut;
//     }

//     start() {
//         this.clearInt = setInterval(() => {
//             if (this.secund == 0) {
//                 if (this.minut > 0) {
//                     this.minut--; 
//                     this.secund = 59; 
//                 } else {
//                     console.log("Timer finished!");
//                     this.stop();
//                     return;
//                 }
//             }
//             console.log(`${this.minut < 10 ? '0' : ''}${this.minut}:${this.secund < 10 ? '0' : ''}${this.secund}`);
//             this.secund--; 
//         }, 1000);
//     }

//     stop(minutes = 0) {
//         if (minutes > 0) {
//             setTimeout(() => this.stop(), minutes * 60000);
//         } else {
//             clearInterval(this.clearInt);
//             console.log("Timer stopped.");
//         }
//     }

//     paused(seconds) {
//         if (!this.clearInt) return;
//         clearInterval(this.clearInt);
//         console.log(`Paused ${seconds} seconds.`);
//         setTimeout(() => {
//             this.start();
//         }, seconds * 1000);
//     }
// }

// let start = +prompt("Necha minutlik Taymer kerak")

// let timer = new Timer(start);
// timer.start();



// let paused = +prompt("Necha sekuntdan kegin pauza bulishini hohlayiz")
// setTimeout(() => {
//     timer.paused(5);
// }, 1000*paused);

// let stop = +prompt("Necha sekuntdan kegin tuxtatishni hohlaysiz")
// setTimeout(() => {
//     timer.stop();
// }, 1000*stop);


// masala-2
let S = +prompt("Budilnik soatini kiriting (0-23):");
let M = +prompt("Budilnik minutini kiriting (0-59):");

function startAlarm() {
    const intervalId = setInterval(() => {
        const now = new Date();
        const soat = now.getHours();
        const minut = now.getMinutes();
        const sek = now.getSeconds(); 

        console.log(`${soat}:${minut < 10 ? '0' : ''}${minut}:${sek < 10 ? '0' : ''}${sek}`);

        if (soat === S && minut === M) {
            clearInterval(intervalId); 
            alert(`Turinggggggg soat ${soat}:${minut < 10 ? '0' : ''}${minut} bo'ldi`); // Alertni ko'rsatish
        }
    }, 1000);
}

startAlarm();