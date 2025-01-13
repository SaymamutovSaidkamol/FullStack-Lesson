    let main = document.querySelector(".box")
console.log(main);


function prod(produc){
    produc.forEach((e) => {
        main.insertAdjacentHTML(
            "beforeend",
            `
            <div class="card">
                <img src="${e?.image}" alt="">
                <h1>${e.name.slice(1, 10)}</h1>
                <p>${e.creationAt}</p>
                <p>${e.updatedAt}</p>
                <button>buy</button>
            </div>
            `
        )
    });
}

fetch("https://api.escuelajs.co/api/v1/categories")
    .then((res) => res.json())
    .then((res) => prod(res))


main.addEventListener("click", (e) => {
    if (e.target.textContent == "buy") {
    
        const card = e.target.closest(".card");

    
        const h1Element = card.querySelector("h1");

        if (h1Element) {
            console.log("Array saqlandi:", h1Element);
            }
        } else {
            console.log("h1 elementi topilmadi.");
        }

        function saveToLocalStorage(item) {
            let data = JSON.parse(localStorage.getItem('myArray')) || [];
        
            data.push(textContent(item));
        
            localStorage.setItem('myArray', JSON.stringify(data));
        
            console.log("Yangi element qo'shildi:", data);
        }
        saveToLocalStorage(h1Element);
});
