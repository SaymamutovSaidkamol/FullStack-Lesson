// let test2 = document.querySelectorAll() // Barchasini olsa buladi
// let test1 = document.querySelector(".box") // universal selector Birinchi uchragan Div ni oladi
// test1.style.backgroundColor = "red" // .box classlik divni backgroundColorini qizil qildi

// test1.classList.add("Lorem") // test1 clasiga Lorem qushib qoladi Natija: box Lorem
// test1.className = "Lorem" // test1 clasini nomin Loremga o'zgartirib quyadi Natija: box Lorem
// test1.classList.remove("box") // test1 clasini o'chirib tashlaydi Natijada hech nma chiqmaydi


// VERSION-1
// let newH1 = document.createElement("h1") // Yangi Div yaratib beradi
// newH1.textContent = "salom from js"  //h1 elementiga matn qushish uchun ishlatilinadi
// newH1.className = "abc" //h1 ni classini elon qilish uchun ishlatilinadi
// test1.append(newH1) //Oxiriga yani tagiga qushib chiqaradi
// test1.prepend(newH1) // Tepaga qushib chiqaradi
// test1.before(newH1) // Divdan tepasiga qushib chiqarib beradi
// test1.after(newH1) // Divdan pastiga qushib chiqarib beradi

// VERSION-2 Osson yul b/n
// test1.insertAdjacentHTML("afterend", "<h1 class='abc'> hello im js</h1>")

let test = document.querySelector(".box");

// Mahalliy massiv
//Malumotlarni chaqirib ishlatishimiz uchun abyect
// let products = [
//     {   img: "https://images.uzum.uz/cp9lecscrcfud1qnj0cg/original.jpg", // Rasmni URL manzili
//         name: "apple 13 promax", //Mahsulot nomi
//         price: 242, // Mahsulot narxi
//         color: "gold", //Mahsulot rangi
//         description: "Yangi iPhone 14 oltin rangda", //Maxsulot Tafsifi
//     }, 
//     {
//         img: "https://cdn.dxomark.com/wp-content/uploads/medias/post-125428/Apple-iPhone-14-Pro-Max_FINAL_featured-image-packshot-review-1-1024x691.jpg",// Rasmni URL 
//         name: "apple 14 promax",//Mahsulot nomi
//         price: 242,// Mahsulot narxi
//         color: "gold",//Mahsulot rangi
//         description: "Yangi iPhone 14 oltin rangda", //Maxsulot Tafsifi
//     },
//     {
//         img: "https://minapi.beemarket.uz/prod-media/productImages/1718103801t6ZQkZnGlQem.webp", // Rasmni URL 
//         name: "apple 15 pro max", //Mahsulot nomi
//         price: 242,// Mahsulot narxi
//         color: "gold",//Mahsulot rangi
//         description: "Yangi iPhone 14 oltin rangda",//Maxsulot Tafsifi
//     },
//     {
//         img: "https://cdn.mediapark.uz/imgs/08ef2981-5d3c-42ef-96c0-f4bde7e74ec4_Artboard-1.webp",// Rasmni URL 
//         name: "apple 16 pro max",//Mahsulot nomi
//         price: 242,// Mahsulot narxi
//         color: "gold",//Mahsulot rangi
//         description: "Yangi iPhone 14 oltin rangda", //Maxsulot Tafsifi
//     },
// ];

// Funksiya: HTML ni yaratadi
function maptoHtml(arr) {
    arr.forEach((r) => { //Abyekt ichidagi har bir elementni aylanib chiqish uchun
        test.insertAdjacentHTML( //Test elementiga yaxshi html qushamiz
            "beforeend", // HTML qayerga qushilishini belgilaydi oxirida
            `<div class="card"> <!-- Card nomli Divga qushamiz -->
                <h1>${r.madel}</h1> <!-- Mahsulot nomi chiqariladi -->
                <h2>${r.price}</h2> <!-- Mahsulot nomi chiqariladi -->
                <p>${r.prabeg}</p><!-- Mahsulot nomi chiqariladi -->
            </div>`
        );
    });
}

// Fetch orqali malumot olish
fetch("https://6764223a52b2a7619f5b899a.mockapi.io/test") // Yuqorida yaratdan object manzilimiz
    .then((res) => res.json()) //Abyect dagi malumotlarimizni JSON farmatiga o'zgartirib olamiz
    .then((res) => maptoHtml(res)) // Va kegin kelgan malumotni HTML ga aylantirib olamiz
    .catch((err) => {  
        console.error("Xatolik:", err); // Xato yuzaga kelsa Consolga chiqadigan Matn
        maptoHtml(products); // Fetch ishlamasa, mahalliy massivdan foydalanamiz
    });


