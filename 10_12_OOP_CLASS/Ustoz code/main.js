// class User {
//   #users = [];

//   findAll() {
//     return this.#users;
//   }

//   findOne(id) {
//     let findUser = this.#users.find((val) => val.id == id);
//     if (findUser) {
//       return findUser;
//     } else {
//       return "Not found User";
//     }
//   }

//   create(data) {
//     let { name, group, age } = data;
//     if (!(name && age && group)) {
//       return "Hamma ma'lumot kiritilishi shart!";
//     }
//     let user = {
//       id: this.#users.length == 0 ? 1 : this.#users.at(-1).id + 1,
//       name,
//       group,
//       age,
//     };
//     this.#users.push(user);
//     return { msg: "User muofaqiyatli qo'shdi", data: user };
//   }

//   update(id, data) {
//     let findIndex = this.#users.findIndex((val) => val.id == id);
//     if (findIndex == -1) {
//       return "Not found User";
//     }

//     this.#users[findIndex] = {
//       ...this.#users[findIndex],
//       ...data,
//     };

//     return this.#users[findIndex];
//   }

//   delete(id) {
//     let findUser = this.#users.find((val) => val.id == id);
//     if (findUser) {
//       this.#users = this.#users.filter((val) => val.id != id);
//       return this.#users;
//     } else {
//       return "Not found User";
//     }
//   }
// }

// let user = new User();

// user.create({
//   name: "Murod",
//   age: 21,
//   group: "N15 Nodejs + Reactjs Bootcamp",
// });
// user.create({
//   name: "Aziz",
//   age: 22,
//   group: "N15 Nodejs + Reactjs Bootcamp",
// });
// console.log(user.findAll());

// user.update(2, { age: 18 });

// console.log(user.findAll());

// user.delete(1);

// console.log(user.findAll());

// localStorage.setItem("name", "Abdulaziz");
// // localStorage.setItem("ism", "Saidkamol");

// localStorage.setItem(
//   "users",
//   JSON.stringify([
//     {
//       name: "Abdulaziz",
//       age: 17,
//       group: "soskdo",
//     },
//   ])
// );

// console.log(localStorage.getItem("name"));
// console.log(JSON.parse(localStorage.getItem("users")));
// console.log(JSON.parse(localStorage.getItem("users")));


// Ma'lumotni localStorage'ga yozish
// Ma'lumotni localStorage'ga yozish
// localStorage.setItem(
//   "users",
//   JSON.stringify([
//     { name: "Abdulaziz", age: 17, group: "soskdo" },
//     { name: "Saidkamol", age: 20, group: "webdev" },
//     { name: "Ali", age: 25, group: "designer" },
//   ])
// );


// const arr = JSON.parse(localStorage.getItem("users"));

// let Name = prompt("Ism kriting")
//     // Foydalanuvchilar mavjudligini tekshirish
//     if (arr && Array.isArray(arr)) {
//         // Ismi "Saidkamol" bo'lgan foydalanuvchini qidirish
//         const user = arr.find(user => user.name === Name);

//         if (user) {
//             console.log(user); // Saidkamol ismli foydalanuvchi
//         } else {
//             console.log("Saidkamol ismli foydalanuvchi topilmadi!");
//         }
//     } else {
//         console.log("Foydalanuvchilar ro'yxati mavjud emas yoki noto'g'ri formatda!");
//     }

// Saqlangan ma'lumotni olish
// const users = JSON.parse(localStorage.getItem("users"));

// // Saidkamol ismli foydalanuvchini qidirish
// const saidkamolUser = users.find(user => user.name === "Saidkamol");

// if (saidkamolUser) {
//   console.log(saidkamolUser); // Saidkamol foydalanuvchisi haqida ma'lumot
// } else {
//   console.log("Bunday ismli foydalanuvchi topilmadi.");
// }
