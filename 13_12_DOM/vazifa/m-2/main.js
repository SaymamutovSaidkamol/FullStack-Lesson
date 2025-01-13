let test = document.querySelector(".box")

function maptoHtml(obj){
    obj.forEach((r) => {
        test.insertAdjacentHTML(
            "beforeend",
            `
            <div class="card">
            <img src="${r?.image}" alt="">
            <h1>${r.name}</h1>
            <p>${r.creationAt}</p>
            <p>${r.updatedAt}</p>
            </div>
            `
        )
    });
}

fetch("https://api.escuelajs.co/api/v1/categories")
.then((res) => res.json())
.then((res) => maptoHtml(res))

let all = document.body

let btn = document.querySelector(".btn")

btn .addEventListener('click', (e) => {
    all.classList.toggle('dark')
})