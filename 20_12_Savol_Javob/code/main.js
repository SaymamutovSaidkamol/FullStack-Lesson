let box = document.querySelector(".box")
let like = document.querySelector(".like")

console.log(box);

function news(obj){
    obj.forEach((val) => {
        box.insertAdjacentHTML(
            "beforeend",`
            <div class="news">
                <h1 class="name">${val.name}</h1>
                <p class="date">${val.date.slice(0, 10)}</p>
                <p class="title">${val.title}</p>
                <p class="desc">${val.desc}</p>
                <p class="local">${val.location}</p>
                <button class="icon" id="icon-btn"><i class="fa-solid fa-heart"></i></button>
            </div>
            `
            )
        });

    }

fetch("https://6764223a52b2a7619f5b899a.mockapi.io/Coutry")
.then((res) => res.json())
.then((res) => news(res))


function func() {
    fetch("https://6764223a52b2a7619f5b899a.mockapi.io/Coutry")
        .then((res) => res.json())
        .then((res) => {
            let filtered = res.filter((val) => val.id == 5); // ID == 5 ni tanlash
            news(filtered); // Faqat filtrlangan ma'lumotlarni ko'rsatish
    });
}

like.addEventListener("click", func);



