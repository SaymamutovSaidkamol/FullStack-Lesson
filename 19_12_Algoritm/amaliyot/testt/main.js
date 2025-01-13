


let modal = document.getElementById("modal");
let openModalBtn = document.getElementById("openModalBtn");
let closeModalBtn = document.getElementById("closeModalBtn");
let fileInput = document.querySelector("#fileInput");
let Img = document.querySelector("#img");
let getName = document.querySelector("#name");
let getAdress = document.querySelector("#adress");
let getDesc = document.querySelector("#desc");
let SaveBtn = document.querySelector("#save");

openModalBtn.addEventListener("click", () => {
    modal.style.display = "block";
});

closeModalBtn.addEventListener("click", () => {
    modal.style.display = "none";
});

fileInput.addEventListener("change", function(event) {
    const file = event.target.files[0];
    if (file && file.type.startsWith("image")) {
        const reader = new FileReader();
        reader.onload = function(e) {
            Img.src = e.target.result; 
            Img.style.display = "block";
        };
        reader.readAsDataURL(file);
    } else {
        alert("Iltimos, faqat rasm fayllarini tanlang!");
        Img.style.display = "none"; 
    }
});

SaveBtn.addEventListener("click", () => {
    console.log("Ism:", getName.value);
    console.log("Manzil:", getAdress.value);
    console.log("Tavsif:", getDesc.value);
});
