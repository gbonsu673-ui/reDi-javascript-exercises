// Problem — Products and Categories

// Topics: loops, map, filter, spread, destructuring, objects, arrays, if/else

// You have a list of products:

const products = [
  { name: "Laptop", category: "electronics", price: 900, stock: 5 },
  { name: "Phone", category: "electronics", price: 600, stock: 0 },
  { name: "T-Shirt", category: "clothing", price: 30, stock: 10 },
  { name: "Jeans", category: "clothing", price: 60, stock: 3 },
  { name: "Headphones", category: "electronics", price: 100, stock: 8 },
];
// Tasks
// Use a loop to print each product's name.
// Use if/else to print "In stock" or "Out of stock".
// Use filter() to find all electronics.
// Use filter() to find products costing less than 100.
// Use map() and destructuring to create an array containing only the product names.
// Use map() and spread to create a new array where every product has a discountedPrice property.
// Give every product a 10% discount.
// Your Solution:

// ------------------------------------
// 1 + 2. Loop + if/else
// ------------------------------------
for (product of products) {
  console.log(
    `${product.name} : ${product.stock === 0 ? "Out of stock" : "In stock"}`,
  );
}

// ------------------------------------
// 3. Find electronics
// ------------------------------------
const electronics = products.filter(
  (product) => product.category === "electronics",
);
console.log(electronics);

// ------------------------------------
// 4. Find products cheaper than 100
// ------------------------------------
const cheapProducts = products.filter((product) => product.price < 100);
console.log(cheapProducts);

// ------------------------------------
// 5. Get only product names
// ------------------------------------
const productNames = products.map((product) => {
  const { name } = product;
  return name;
});
console.log(productNames);

// ------------------------------------
// 6 + 7. Add a discounted price
// ------------------------------------
const discountedProducts = products.map((product) => {
  return { ...product, discountedPrice: (1 - 0.1) * product.price };
});
console.log(discountedProducts);
