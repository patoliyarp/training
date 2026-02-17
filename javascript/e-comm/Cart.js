export class Cart {
  constructor() {
    this.items = new Map();
    this.uniqueItems = new Set();
    this.load();
  }

  add(product) {
    // const currentQty=this.items.get(product.id) ??
    this.items.set(product.id, product);
    if (this.items.has(product.id)) {
      this.items.get(product.id).quantity += 1;
    } else {
      this.items.set(product.id, product);
    }
    this.save();
    this.load();
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
