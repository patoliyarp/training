
import { Cart } from "./Cart.js";
import { products } from "./script.js";

const mainSection = document.getElementById("main-section");
const cartItemsContainer = document.getElementById("cartItems");
const cartTotal = document.getElementById("cartTotal");
const cartCount = document.querySelector(".bg-red-500");

let cart;

export function initCart() {
  cart = new Cart(products);
}

export function renderProduct(filteredProducts = products) {
  mainSection.innerHTML = "";

  const container = document.createElement("div");
  container.className =
    "grid gap-4 sm:grid-cols-2 md:mb-8 lg:grid-cols-3 xl:grid-cols-4";

  filteredProducts.forEach((product) => {
    const card = document.createElement("div");
    card.className =
      "rounded-lg border border-gray-200 bg-white p-6 shadow-sm text-black";

    card.innerHTML = `
      <div class="h-56 w-full">
        <img class="mx-auto h-full" src="${product.image}" />
      </div>

      <div class="pt-6">
        <h3 class="text-lg font-semibold h-[56px]">${product.name}</h3>

        <p class="mt-2 font-medium">
          Stock: 
          <span class="${product.stock === 0 ? "text-red-500" : ""}">
            ${product.stock === 0 ? "Out of Stock" : product.stock}
          </span>
        </p>

        <div class="mt-4 flex justify-between items-center">
          <p class="text-xl font-bold">$${product.price}</p>

          <button 
            class="add-btn inline-flex items-center rounded-lg bg-[#1d4ed8] px-5 py-2.5 text-sm font-medium text-white hover:bg-primary-800 focus:outline-none focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 "
            ${product.stock === 0 ? "disabled" : ""}
            data-id="${product.id}"
          >
            <svg
                  class="-ms-2 me-2 h-5 w-5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M4 4h1.5L8 16m0 0h8m-8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm.75-3H7.5M11 7H6.312M17 4v6m-3-3h6"
                  ></path>
                </svg>
            Add to Cart
          </button>
        </div>
      </div>
    `;

    container.appendChild(card);
  });

  mainSection.appendChild(container);

  attachEvents();
}

function attachEvents() {
  document.querySelectorAll(".add-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      const id = Number(btn.dataset.id);
      cart.add(id);
      renderProduct();
      renderCart();
    });
  });
}

export function renderCart() {
  cartItemsContainer.innerHTML = "";

  cart.items.forEach(({ product, qty }) => {
    const item = document.createElement("div");
    item.className = "flex justify-between items-center border p-3 rounded";

    item.innerHTML = `
      <div>
        <h4 class="font-semibold">${product?.name}</h4>
        <p>Qty: ${qty}</p>
        <p>$${product.price * qty}</p>
      </div>
      <button 
        class="remove-btn bg-red-500 text-white px-3 py-1 rounded"
        data-id="${product.id}"
      >
        Remove
      </button>
    `;

    cartItemsContainer.appendChild(item);
  });

  cartTotal.textContent = cart.getTotal();
  cartCount.textContent = cart.uniqueItems.size;

  document.querySelectorAll(".remove-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      const id = Number(btn.dataset.id);
      cart.remove(id);
      renderProduct();
      renderCart();
    });
  });
}

const searchInput = document.getElementById("search");

function Dbn(fn, delay) {
  let time;
  return (...arg) => {
    clearInterval(time);
    time = setTimeout(() => {
      fn(...arg);
    }, delay);
  };
}

function debounce(fn, delay) {
  let timeout;
  return (...args) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => fn(...args), delay);
  };
}

// const handleDbn=Dbn(fn,2000);

const handleSearchP = (e) => {
  const value = e.target.value.toLowerCase();
  const filtered = products.filter((p) => p.name.toLowerCase().includes(value));
  renderProduct(filtered);
};

const handleDbn = Dbn(handleSearchP, 1000);

// const handleSearch = debounce((e) => {
//   const value = e.target.value.toLowerCase();
//   const filtered = products.filter((p) => p.name.toLowerCase().includes(value));
//   renderProduct(filtered);
// }, 500);

searchInput.addEventListener("input", handleDbn);
