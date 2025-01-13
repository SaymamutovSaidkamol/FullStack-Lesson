console.log(document.body);
let test = document.querySelector(".box");

function maptoHtml(arr) {
    arr.forEach((r) => {
        test.insertAdjacentHTML(
        "beforeend",
        ` <div class="card">
            <img src='${r?.images}' />
                <h1>${r.title}</h1>
                <b>${r.price}</b>
                <p>${r.description}</p>
                <button>buy</button>
                </div>`
        );
    });
}
fetch("https://api.escuelajs.co/api/v1/products")
    .then((res) => res.json())
    .then((res) => maptoHtml(res));


