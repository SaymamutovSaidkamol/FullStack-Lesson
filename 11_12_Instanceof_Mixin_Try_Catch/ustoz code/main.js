localStorage.setItem("products", JSON.stringify([]));

class Product {
  #product = [];

  constructor() {
    this.#product = localStorage.getItem("products");
  }

  findAll() {
    return this.#product;
  }

  add(product) {
    this.#product = JSON.parse(localStorage.getItem("products"));

    let data = {
      id: this.#product.length == 0 ? 1 : this.#product.at(-1).id + 1,
      ...product,
    };

    this.#product.push(data);
    localStorage.setItem("products", JSON.stringify(this.#product));
    return "Product saqlandi!";
  }

  delete(id) {
    this.#product = JSON.parse(localStorage.getItem("products"));
    this.#product = this.#product.filter((val) => val.id !== id);
    localStorage.setItem("products", JSON.stringify(this.#product));
    return "Product o'chirildi";
  }

  count(id) {
    this.#product = JSON.parse(localStorage.getItem("products"));
    let findProductIndex = this.#product.findIndex((val) => val.id == id);
    console.log(findProductIndex);

    if (findProductIndex !== -1) {
      let { count } = this.#product[findProductIndex];

      this.#product[findProductIndex] = {
        ...this.#product[findProductIndex],
        count: ++count,
      };

      localStorage.setItem("products", JSON.stringify(this.#product));
    } else {
      return "Product topilmadi";
    }
  }

  discount(id) {
    this.#product = JSON.parse(localStorage.getItem("products"));
    let findProductIndex = this.#product.findIndex((val) => val.id == id);

    if (findProductIndex !== -1) {
      let { count } = this.#product[findProductIndex];
      this.#product[findProductIndex] = {
        ...this.#product[findProductIndex],
        count: --count,
      };
      localStorage.setItem("products", JSON.stringify(this.#product));
    } else {
      return "Product topilmadi";
    }
  }
}

let cart = new Product();

cart.add({ name: "Samsung S24", price: "500$", count: 1 });
cart.add({ name: "Iphone 16", price: "700$", count: 1 });

