// function func1() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve("1 funksiya");
//     }, 1000);
//   });
// }
// function func2() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       reject("xatolik 2 funksiyada");
//     }, 500);
//   });
// }
// function func3() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve("3 funksiya");
//     }, 3000);
//   });
// }

// // Promise.all([func1(), func2(), func3()]).then((data) => {
// //   console.log(data);
// // });
// // Promise.allSettled([func1(), func2(), func3()]).then((data) => {
// //   console.log(data);
// // });
// // Promise.race([func1(), func2(), func3()]).then((data) => {
// //   console.log(data);
// // });




class Timer {
  minut;
  secund = 0;
  constructor(minut) {
    this.minut = minut;
  }
  start() {
    this.clearInt = setInterval(() => {
      if (this.secund == 0) {
        this.minut -= 1;
        this.secund = 59;
      }
      console.log(`${this.minut} m : ${this.secund} s`);
      this.secund -= 1;
    }, 1000);
  }

  stop() {
    clearInterval(this.clearInt);
  }
}

let timer = new Timer(2);

timer.start();

setTimeout(() => {
  timer.stop();
}, 6000);

setTimeout(() => {
  timer.start();
}, 10000);