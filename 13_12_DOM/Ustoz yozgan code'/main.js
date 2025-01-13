let row = document.getElementById("row");
let search = document.getElementById("filter");
let btn = document.getElementById("btn");
let main = document.getElementById("main");
let nav = document.getElementById("nav");

window.addEventListener("load", () => {
  let toggle = localStorage.getItem("toggle") || "true";

  if (toggle === "true") {
    main.className = "bg-primary-subtle";
    nav.className = "navbar bg-black";
  } else {
    main.className = "";
    nav.className = "navbar bg-body-tertiary";
  }
});

async function getData() {
  try {
    let result = await fetch("https://fakestoreapi.in/api/products");
    let { products } = await result.json();
    return products;
  } catch (error) {
    console.log(error.message);
  }
}

let data = await getData();

function displayData() {
  let content = "";
  console.log(data);

  data.map((val) => {
    content += `
    <div class="col-md-3" style="background:"">
        <div class="card" style="width: 18rem; height: 20rem">
          <img src="${
            val.image
          }" style="width:100%; height:220px" class="card-img-top" alt="..." />
          <div class="card-body">
            <p class="card-text">
              ${val.title.slice(0, 80)}
            </p>
          </div>
        </div>
      </div>`;
  });
  row.innerHTML = content;
}

search.oninput = async (e) => {
  let value = e.target.value;

  if (!value) {
    data = await getData();
    displayData();
    return;
  }

  data = data.filter(
    (val) =>
      val.title.toUpperCase().includes(value.toUpperCase()) ||
      val.id == Number(value)
  );
  displayData();
};

btn.addEventListener("click", () => {
  let toggle = localStorage.getItem("toggle");

  if (toggle == "true") {
    main.className = "";
    nav.className = "navbar bg-body-tertiary";
    localStorage.setItem("toggle", "false");
  } else {
    main.className = "bg-primary-subtle";
    nav.className = "navbar  bg-black";
    localStorage.setItem("toggle", "true");
  }
});

displayData();
