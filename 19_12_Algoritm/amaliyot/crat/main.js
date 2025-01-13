
let wrapper = document.querySelector(".cards");

console.log(wrapper);


async function getData() {
    
    let { data } = await axios.get(
    "https://6764223a52b2a7619f5b899a.mockapi.io/Coutry"
    );
    
    return data;
}

console.log(getData());


async function writeHtml() {
    let users = await getData();
    let items = "";
    users.forEach((val) => {
        items += 
        `
        <div class="card">
            <div class="avatar">
                <img src="https://wac-cdn.atlassian.com/dam/jcr:ba03a215-2f45-40f5-8540-b2015223c918/Max-R_Headshot%20(1).jpg?cdnVersion=2470" alt="">
            </div>
            <div class="edit-icon">
                <i class="fa-regular fa-pen-to-squ  are"></i>
            </div>
            <div class="name">
                <h1>${val.name.slice(0, 11)}</h1>
                <p class="adress"><i class="fa-solid fa-location-dot"></i>${val.adress}</p>
            </div>
            <div class="desc">
                <p>${val.description}</p>
            </div>
            <div class="footer">
                <div class="txt">
                    <p>Member Ship</p>
                    <p><i class="fa-solid fa-star"></i>Gold Member</p>
                </div>
                <div class="btn">
                    <button onclick="removeUser(${val.id})">Delete</button>
                </div>
            </div>

        </div>
        `
    });
    wrapper.innerHTML = items;
}
writeHtml();

async function removeUser(id) {
    try {
        await axios.delete(
        `https://6764223a52b2a7619f5b899a.mockapi.io/Coutry/${id}`
        );
        writeHtml();
    } catch (error) {
        console.log(error);
    }
}


// Modal




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


let inputName = document.querySelector(".name")

// -------------------------------------------------------
async function addUser(){
    let id = localStorage.getItem("id")
    let data = {
        getName: getName.value,
        getAdress: getAdress.value,
        getDesc: get.value
    }
    
}