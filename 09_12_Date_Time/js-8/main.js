// console.log("hello");
// let user = { name: "alex" };
// let r = function () {};
// let a = new Set([34, r, user, 3, 4, user, r]);
// console.log(a);
// a.delete(user);
// console.log(a);
// const date = new Date(2024, 11, 11, 8, 30);
// const keldi = new Date(2024, 11, 11, 9, 10);
// console.log(date.getFullYear()); // 2024
// console.log(date.getMonth()); // 0 (January) - 11 (December)
// console.log(date.getDate()); // Day of the month (1-31)
// console.log(date.getDay()); // Day of the week (0 = Sunday, 6 = Saturday)
// console.log(date.getHours()); // 0-23
// console.log(date.getMinutes()); // 0-59
// console.log(date.getSeconds()); // 0-59
// console.log(date.getMilliseconds()); // 0-999

// const now2 = new Date(2010, 23, 3, 1, 15);
// const now3 = new Date(4788194100000);

// console.log(date);
function getInfo(date) {
  let now = new Date();
  let bday = new Date(date);
  let nowM = now.getTime();
  let bdayM = bday.getTime();
  let mil = nowM - bdayM;

  let kunlar = mil / 1000 / 60 / 60 / 24;

  let yil = Math.floor(kunlar / 365);

  let oy = Math.floor(kunlar / 30.4 - yil * 12);
  let kun = 0;
  if (bday.getDate() > now.getDate()) {
    oy--;
    kun = 30 - bday.getDate() + now.getDate();
  } else {
    kun = now.getDate() - bday.getDate();
  }
  console.log(yil, "yil");
  console.log(oy, "oy");
  console.log(kun, "kun");
}
getInfo("1990-04-05");
