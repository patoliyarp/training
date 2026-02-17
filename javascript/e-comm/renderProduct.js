import { Cart } from "./Cart.js";
import { products } from "./script.js";
// import { renderProduct } from "./renderProduct.js";
const cart = new Cart();
const mainSection = document.getElementById("main-section");
export function renderProduct() {
  const Container = document.createElement("div");
  Container.className +=
    "mb-4 grid gap-4 sm:grid-cols-2 md:mb-8 lg:grid-cols-3 xl:grid-cols-4";

  for (let i = 0; i < products.length; i++) {
    const cardContainer = document.createElement("div");
    cardContainer.className +=
      "rounded-lg border border-gray-200 bg-white p-6 shadow-sm text-black";
    cardContainer.innerHTML = `
     <!-- img container div -->
          <div class="h-56 w-full">
            <a href="#">
              <img
                class="mx-auto hidden h-full dark:block"
                src="${products[i].image}"
                alt="product img"
              />
            </a>
          </div>

          <!-- title container -->
          <div class="pt-10">
            <a href="#" class="text-lg font-semibold leading-tight"
              >${products[i].name}</a
            >
            <!-- quantity and delivery icon -->
            <ul class="mt-2 flex items-center gap-4">
              <li class="flex items-center gap-2">
                <p class="font-medium text-gray-800">Quantity :</p>
                <p class="font-medium text-gray-800">${products[i].stock}</p>
              </li>
              <!-- fast delivery icon -->
              <li class="flex items-center gap-2">
                <svg
                  class="h-4 w-4 text-gray-500"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M13 7h6l2 4m-8-4v8m0-8V6a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v9h2m8 0H9m4 0h2m4 0h2v-4m0 0h-5m3.5 5.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Zm-10 0a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Z"
                  />
                </svg>
                <p class="text-sm font-medium text-gray-500">Fast Delivery</p>
              </li>
            </ul>

            <div class="mt-4 flex items-center justify-between gap-4" id="btn-add">
              <p class="text-2xl font-extrabold leading-tight text-gray-900">
                $${products[i].price}
              </p>

              <button
                type="button"
                class="inline-flex items-center rounded-lg bg-[#1d4ed8] px-5 py-2.5 text-sm font-medium text-white hover:bg-primary-800 focus:outline-none focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                onclick="${cart.add(products[i])}"
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
                Add to cart
              </button>
            </div>
          </div>
    `;
    // const btn = document.createElement("button");
    // const addbtn = document.querySelector("#btn-add");
    // btn.className =
    //   "inline-flex items-center rounded-lg bg-[#1d4ed8] px-5 py-2.5 text-sm font-medium text-white hover:bg-primary-800 focus:outline-none focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800";
    // btn.innerHTML = ` <svg
    //               class="-ms-2 me-2 h-5 w-5"
    //               aria-hidden="true"
    //               xmlns="http://www.w3.org/2000/svg"
    //               width="24"
    //               height="24"
    //               fill="none"
    //               viewBox="0 0 24 24"
    //             >
    //               <path
    //                 stroke="currentColor"
    //                 stroke-linecap="round"
    //                 stroke-linejoin="round"
    //                 stroke-width="2"
    //                 d="M4 4h1.5L8 16m0 0h8m-8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm.75-3H7.5M11 7H6.312M17 4v6m-3-3h6"
    //               ></path>
    //             </svg>`;
    // btn.textContent = "Add to cart";
    // addbtn.appendChild(btn);
    Container.appendChild(cardContainer);
  }
  mainSection.appendChild(Container);
}
