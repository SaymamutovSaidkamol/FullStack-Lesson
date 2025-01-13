// console.log(lyuboy.get("masalan"));
// console.log(lyuboy.size);
// console.log(lyuboy.has("masalan"));
// console.log(lyuboy.delete("masalan2"));
// console.log(lyuboy.clear());
// console.log("hello");
// let a = true;
// console.log(Object.entries(user));

// let user = {
//   name: "alex",
//   age: 55,
//   language: "henglish",
//   location: "usa",
// };

// let lyuboy = new Map([
//   [
//     {
//       name: "alex",
//       age: 55,
//       language: "henglish",
//       location: "usa",
//     },
//     "alex",
//   ],
//   ["age", 44],
// ]);

// console.log(lyuboy.get(user), 1);
// console.log(
//   lyuboy.get({
//     name: "alex",
//     age: 55,
//     language: "henglish",
//     location: "usa",
//   }),
//   2
// );

// console.log(lyuboy);
// console.log(
//   {
//     name: "alex",
//     age: 55,
//     language: "henglish",
//     location: "usa",
//   } ==
//     {
//       name: "alex",
//       age: 55,
//       language: "henglish",
//       location: "usa",
//     }
// );
// let a1 = new WeakMap();
// console.log(a1.);

// let a3 = {
//   hello: "alex",
//   age: 445,
//   language: "uzbek",
//   location: "usa",
// };

// a3 = null;

// console.log(a3);
// let a = new Set([3, 32, 32, 43, true, "hello", 4, 2343, 42, 34, 2, 3, 423]);
// a.add(44444);
// a.delete(42);
// console.log(a.has(4321));
// console.log(a, 1);
// console.log(a.keys(), "kkk");

// console.log(a, 2);
// for (let i of a.keys()) {
//   console.log(i);
// }
// let a = new WeakSet([{}, {}]);

// let car = {
//   bak: 100,
//   kilometr: 0,
//   go() {},
//   check() {},
//   fill() {},
//   full() {},
// };

// car.go();
// car.check();
// car.fill(10);
// car.full();

let car = new Map([
  ["bak", 100],
  ["rasxod", 8],
  ["kilometr", 0],
  [
    "go",
    function (km = 1) {
      let b = car.get("bak");
      let k = car.get("kilometr");
      if (b >= km * 5) {
        car.set("bak", b - km * 5);
        car.set("kilometr", k + km);
      } else {
        console.log("benzn yetarli emas");
      }
    },
  ],
  [
    "check",
    function () {
      console.log(car.get("bak"), "litr benzin");
      console.log(car.get("kilometr"), "km yurgan");
      console.log(car.get("bak") / 5, "km yuradi");
    },
  ],
  [
    "fill",
    function (litr) {
      let b = car.get("bak");
      if (b + litr <= 100) {
        car.set("bak", b + litr);
      } else {
        console.log("yetarliemas", 100 - b, "bor", litr, "ketmaydi");
      }
    },
  ],
  [
    "full",
    function () {
      car.set("bak", 100);
    },
  ],
]);
car.get("go")(5);
car.get("check")();
car.get("fill")(10, 80);
car.get("check")();
