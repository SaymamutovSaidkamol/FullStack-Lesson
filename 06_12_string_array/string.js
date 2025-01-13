// let str = "  Hello, JavaScript World!  ";
// let str2 = "Welcome to the world of JavaScript";

// // Basic string manipulation
// let trimmed = str.trim(); // Remove leading/trailing spaces
// let upperCased = str.toUpperCase(); // Convert to uppercase
// let lowerCased = str.toLowerCase(); // Convert to lowercase
// let replaced = str.replace("World", "Universe"); // Replace "World" with "Universe"
// let split = str.split(" "); // Split by space
// let concatenated = str.concat(" Let's learn!"); // Concatenate strings
// let repeated = str.repeat(2); // Repeat the string twice

// // Searching and checking
// let includesHello = str.includes("Hello"); // Check if "Hello" is in the string
// let startsWithHello = str.startsWith("  Hello"); // Check if it starts with "  Hello"
// let endsWithWorld = str.endsWith("World!  "); // Check if it ends with "World!  "
// let indexOfJavaScript = str.indexOf("JavaScript"); // Get the index of "JavaScript"
// let lastIndexOfWorld = str2.lastIndexOf("world"); // Get the last occurrence of "world"
// let charAt = str.charAt(7); // Get the character at index 7
// let charCode = str.charCodeAt(7); // Get Unicode of character at index 7

// // Substring extraction
// let substring = str.substring(7, 18); // Extract substring from index 7 to 17
// let slice = str.slice(7, -7); // Extract substring from index 7 to -7

// // Advanced methods
// let padStart = "42".padStart(5, "0"); // Add padding at the start ("00042")
// let padEnd = "42".padEnd(5, "0"); // Add padding at the end ("42000")
// let codePointAt = "💻".codePointAt(0); // Get the code point of an emoji
// let fromCodePoint = String.fromCodePoint(128187); // Convert code point to character


// uzbek tili rajimasi

let str = "  Hello, JavaScript World!  ";
let str2 = "Welcome to the world of JavaScript";

// String bilan oddiy amallar
let trimmed = str.trim(); // Boshi va oxiridagi bo‘sh joylarni olib tashlash
let upperCased = str.toUpperCase(); // Barcha harflarni katta harfga aylantirish
let lowerCased = str.toLowerCase(); // Barcha harflarni kichik harfga aylantirish
let replaced = str.replace("World", "Universe"); // "World" ni "Universe" bilan almashtirish
let split = str.split(" "); // Bo‘sh joy bo‘yicha stringni bo‘lib olish
let concatenated = str.concat(" Let's learn!"); // Stringni qo‘shish (birlashtirish)
let repeated = str.repeat(2); // Stringni ikki marta takrorlash

// Qidirish va tekshirish
let includesHello = str.includes("Hello"); // Stringda "Hello" bor-yo‘qligini tekshirish
let startsWithHello = str.startsWith("  Hello"); // String "  Hello" bilan boshlanishini tekshirish
let endsWithWorld = str.endsWith("World!  "); // String "World!  " bilan tugashini tekshirish
let indexOfJavaScript = str.indexOf("JavaScript"); // "JavaScript" stringi qayerdan boshlanishini topish
let lastIndexOfWorld = str2.lastIndexOf("world"); // "world" ning oxirgi joylashuvini topish
let charAt = str.charAt(7); // 7-indeksdagi belgini olish
let charCode = str.charCodeAt(7); // 7-indeksdagi belgining Unicode qiymatini olish

// Substring ajratish
let substring = str.substring(7, 18); // 7-indeksdan 17-gacha substringni ajratish
let slice = str.slice(7, -7); // 7-indeksdan oxiridan 7 indeks oldingacha substring ajratish

// Murakkab usullar
let padStart = "42".padStart(5, "0"); // Boshlanishiga "0" qo‘shib, uzunligini 5 ga yetkazish ("00042")
let padEnd = "42".padEnd(5, "0"); // Oxiriga "0" qo‘shib, uzunligini 5 ga yetkazish ("42000")
let codePointAt = "💻".codePointAt(0); // Emojining Unicode nuqtasini olish
let fromCodePoint = String.fromCodePoint(128187); // Unicode nuqtasidan belgi hosil qilish
