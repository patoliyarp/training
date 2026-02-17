// export class Cart {
//   constructor() {
//     this.items = new Map();
//     this.uniqueItems = new Set();
//     this.load();
//   }

//   add(product) {
//     // const currentQty=this.items.get(product.id) ??
//     this.items.set(product.id, product);
//     this.save();
//     this.load();
//   }
//   save() {
//     localStorage.setItem("cart", JSON.stringify([...this.items]));
//   }
//   load() {
//     const data = JSON.parse(localStorage.getItem("cart")) ?? [];
//     this.items = new Map(data);
//     this.uniqueItems = new Set(data.map(([id]) => id));
//   }
// }

export class Cart {
  constructor(products) {
    this.items = new Map(); // id -> { product, qty }
    this.uniqueItems = new Set();
    this.products = products; // reference to products array
    this.load();
  }

  add(productId) {
    const product = this.products.find((p) => p.id === productId);
    if (!product || product.stock <= 0) return;

    const existing = this.items.get(productId);

    if (existing) {
      existing.qty += 1;
      this.items.set(productId, existing);
    } else {
      this.items.set(productId, { product, qty: 1 });
      this.uniqueItems.add(productId);
    }

    product.stock -= 1;

    this.save();
  }


  remove(productId) {
    const item = this.items.get(productId);
    if (!item) return;

    // restore stock
    item.product.stock += item.qty;

    this.items.delete(productId);
    this.uniqueItems.delete(productId);

    this.save();
  }

  getTotal() {
    let total = 0;
    this.items.forEach(({ product, qty }) => {
      total += product.price * qty;
    });
    return total;
  }

  save() {
    localStorage.setItem("cart", JSON.stringify([...this.items]));
  }

  load() {
    const data = JSON.parse(localStorage.getItem("cart")) ?? [];
    this.items = new Map(data);
    this.uniqueItems = new Set(data.map(([id]) => id));
  }
}
