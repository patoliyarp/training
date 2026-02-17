// import { renderProduct } from "./renderProduct.js";
// import { Cart } from "./Cart.js";
// class Product {
//   constructor(id, name, price, stock, image) {
//     this.id = id;
//     this.name = name;
//     this.price = price;
//     this.stock = stock;
//     this.image = image;
//   }
// }
// //
// export let products = [];

// async function fetchProduct() {
//   try {
//     const res = await fetch("https://dummyjson.com/products?limit=10");
//     const data = await res.json();
//     console.log("data ", data.products);
//     return data.products;
//   } catch (error) {
//     console.log("error while fetch product", error);
//   }
// }

// async function createProductObj() {
//   try {
//     const res = await fetch("https://dummyjson.com/products?limit=10");
//     const data = await res.json();
//     const product = data.products;
//     console.log("product", product);
//     product.map((objs) => {
//       products = [
//         ...products,
//         new Product(
//           objs.id,
//           objs.title,
//           objs.price,
//           objs.stock,
//           objs.thumbnail,
//         ),
//       ];
//     });
//     console.log("data", products);
//     renderProduct();
//   } catch (error) {
//     console.log("error while crate obj", error);
//   }
// }
// createProductObj();

import { renderProduct, initCart, renderCart } from "./renderProduct.js";

class Product {
  constructor(id, name, price, stock, image) {
    this.id = id;
    this.name = name;
    this.price = price;
    this.stock = stock;
    this.image = image;
  }
}

export let products = [];

async function createProductObj() {
  const res = await fetch("https://dummyjson.com/products?limit=10");
  const data = await res.json();

  products.length = 0;

  data.products.forEach((p) => {
    products.push(new Product(p.id, p.title, p.price, p.stock, p.thumbnail));
  });

  initCart(); // pass products
  renderProduct(products);
  renderCart();
}

const cartBtn = document.querySelector("#cart-btn");
const closeCart = document.querySelector("#closeCart");

cartBtn.addEventListener("click", (e) => {
  if (
    document.querySelector("#drawer").classList.contains("translate-x-full")
  ) {
    document.querySelector("#drawer").classList.remove("translate-x-full");
    document.querySelector("#drawer").classList.add("translate-x-0");
  }
});

closeCart.addEventListener("click", (e) => {
  if (document.querySelector("#drawer").classList.contains("translate-x-0")) {
    document.querySelector("#drawer").classList.remove("translate-x-0");
    document.querySelector("#drawer").classList.add("translate-x-full");
  }
});
createProductObj();
