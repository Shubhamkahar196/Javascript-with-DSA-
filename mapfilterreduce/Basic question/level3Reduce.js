// const cart = [
//   { price: 100, qty: 2 },
//   { price: 50, qty: 1 }
// ];

// const output = cart.reduce((acc,curr)=> acc+curr)
// console.log(output)

// Output: 250


// Q9️⃣ Count frequency (common in dashboards)
const arr=["apple", "banana", "apple", "orange", "banana", "apple"]

const output1 = Array.reduce((acc,curr)=>{
    acc[curr] = (acc[curr]|| 0) +1;
    return acc;
})
// Output:
// {
//   apple: 3,
//   banana: 2,
//   orange: 1
// }



// 🔵 LEVEL 4: Spread Operator (React State Updates)
// Q1️⃣1️⃣ Add new item to array (React setState style)
const items = ["a", "b", "c"];
const newItem = "d";
const out = [...items,newItem]


// 👉 Output: ["a", "b", "c", "d"]

// Q1️⃣2️⃣ Update object property immutably
const user = { name: "Amit", age: 20 };
const updatedUser= {
    ...user,
    age: 21
}

// Update age to 21

// Q1️⃣3️⃣ Remove item from array (by id)
const users1 = [
  { id: 1, name: "A" },
  { id: 2, name: "B" }
];
const remove = users1.filter(user => user.id !== 1)


// Remove user with id = 1


// 👉 filter + spread thinking

// 🔴 LEVEL 5: Real React Interview Questions 🔥
// Q1️⃣4️⃣ Render list in React (conceptual)
const products = [
  { id: 1, name: "Mobile" },
  { id: 2, name: "Laptop" }
];

{products.map(product=>(
    <li key={product.id}>{product.name}</li>
))}


// 👉 How would you render this using map() in JSX?

// Q1️⃣5️⃣ Combine filter + map
const products1 = [
  { name: "Phone", inStock: true },
  { name: "TV", inStock: false },
  { name: "Laptop", inStock: true }
];

const output = products1
.filter(products => products.inStock)
.map(product=> product.name)

// Output: ["Phone", "Laptop"]


