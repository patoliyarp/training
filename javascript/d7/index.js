const count = 0;
const quantity = count ?? 42;
console.log(quantity); // 0 (correctly preserves 0 as a valid value)
