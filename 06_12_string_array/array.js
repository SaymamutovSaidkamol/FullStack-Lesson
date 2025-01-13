// let arr = [1, 2, 3, 4, 5, 6];

// // Mutating methods
// arr.push(7); // Add 7 to the end
// arr.pop(); // Remove the last element
// arr.shift(); // Remove the first element
// arr.unshift(0); // Add 0 to the beginning
// arr.splice(2, 1, 99); // Replace the 2nd index with 99 (removing 1 element)
// arr.fill(8, 1, 3); // Fill with 8 from index 1 to 2

// // Non-mutating methods
// let sliced = arr.slice(1, 4); // Get a subarray from index 1 to 3
// let mapped = arr.map((x) => x * 2); // Multiply each element by 2
// let filtered = arr.filter((x) => x > 5); // Filter elements greater than 5
// let found = arr.find((x) => x > 3); // Find the first element greater than 3
// let foundIndex = arr.findIndex((x) => x > 3); // Find the index of the first element > 3
// let flatArr = [1, [2, [3, 4]]].flat(2); // Flatten nested arrays up to depth 2
// let flatMapped = arr.flatMap((x) => [x, x * 2]); // Map and flatten
// let reduced = arr.reduce((acc, x) => acc + x, 0); // Sum all elements

// // Checking and searching methods
// let includesFive = arr.includes(5); // Check if 5 exists in the array
// let indexOfEight = arr.indexOf(8); // Find the first index of 8
// let lastIndexOfEight = arr.lastIndexOf(8); // Find the last index of 8
// let everyResult = arr.every((x) => x > 0); // Check if all elements > 0
// let someResult = arr.some((x) => x > 10); // Check if any element > 10

// // Converting methods
// let joined = arr.join("-"); // Join elements into a string separated by "-"
// let fromString = Array.from("12345"); // Create an array from a string
// let ofArray = Array.of(7, 8, 9); // Create an array from arguments

// // Iteration
// arr.forEach((x) => console.log("ForEach:", x)); // Log each element
// for (let key of arr.keys()) console.log("Key:", key); // Log each index
// for (let value of arr.values()) console.log("Value:", value); // Log each value
// for (let [key, value] of arr.entries())
//   console.log(`Key: ${key}, Value: ${value}`);

// // Sorting and reversing
// arr.sort((a, b) => b - a); // Sort in descending order
// arr.reverse(); // Reverse the array















let arr = [1, 2, 3, 4, 5, 6];

// O'zgartiruvchi usullar (Mutating methods)
arr.push(7); // Oxiriga 7 qo'shadi
arr.pop(); // Oxirgi elementni olib tashlaydi
arr.shift(); // Birinchi elementni olib tashlaydi
arr.unshift(0); // Boshiga 0 qo'shadi
arr.splice(2, 1, 99); // 2-indeksdagi elementni olib tashlaydi va 99 ni qo'shadi
arr.fill(8, 1, 3); // 1-indeksdan boshlab 3-indeksgacha bo'lgan elementlarni 8 bilan to'ldiradi

// O'zgarmas usullar (Non-mutating methods)
let sliced = arr.slice(1, 4); // 1-indeksdan 3-indeksgacha bo'lgan elementlarni oladi
let mapped = arr.map((x) => x * 2); // Har bir elementni 2 ga ko'paytiradi
let filtered = arr.filter((x) => x > 5); // 5 dan katta bo'lgan elementlarni filtrlaydi
let found = arr.find((x) => x > 3); // 3 dan katta bo'lgan birinchi elementni topadi
let foundIndex = arr.findIndex((x) => x > 3); // 3 dan katta bo'lgan birinchi elementning indeksini topadi
let flatArr = [1, [2, [3, 4]]].flat(2); // Ichma-ich massivlarni 2-darajagacha tekislash
let flatMapped = arr.flatMap((x) => [x, x * 2]); // Har bir elementni map qilib, tekislaydi
let reduced = arr.reduce((acc, x) => acc + x, 0); // Barcha elementlarni yig'indisini hisoblaydi

// Tekshirish va qidirish usullari
let includesFive = arr.includes(5); // 5 massivda bor-yo'qligini tekshiradi
let indexOfEight = arr.indexOf(8); // 8 ning birinchi indeksini topadi
let lastIndexOfEight = arr.lastIndexOf(8); // 8 ning oxirgi indeksini topadi
let everyResult = arr.every((x) => x > 0); // Barcha elementlar 0 dan katta bo'lganini tekshiradi
let someResult = arr.some((x) => x > 10); // Hech bo'lmaganda bitta element 10 dan katta bo'lganini tekshiradi

// O'zgartirish usullari (Converting methods)
let joined = arr.join("-"); // Massiv elementlarini "-" bilan ajratib stringga aylantiradi
let fromString = Array.from("12345"); // Stringni massivga aylantiradi
let ofArray = Array.of(7, 8, 9); // Berilgan argumentlardan massiv yaratadi

// Takrorlash usullari (Iteration)
arr.forEach((x) => console.log("ForEach:", x)); // Har bir elementni konsolga chiqaradi
for (let key of arr.keys()) console.log("Key:", key); // Har bir indeksni konsolga chiqaradi
for (let value of arr.values()) console.log("Value:", value); // Har bir qiymatni konsolga chiqaradi
for (let [key, value] of arr.entries())
  console.log(`Key: ${key}, Value: ${value}`); // Har bir indeks va qiymatni konsolga chiqaradi

// Saralash va teskari aylantirish (Sorting and reversing)
arr.sort((a, b) => b - a); // Massivni kamayish tartibida saralaydi
arr.reverse(); // Massivni teskari tartibga aylantiradi
