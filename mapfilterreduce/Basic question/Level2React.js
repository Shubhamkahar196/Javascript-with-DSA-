// Get list of usernames (very common in React)

// const users = [
//   { id: 1, name: "Amit" },
//   { id: 2, name: "Rahul" },
//   { id: 3, name: "Neha" }
// ];

// const output = users.map((user)=>user.name)
// console.log(output)


// Output: ["Amit", "Rahul", "Neha"]



// Filter active users


// const users = [
//   { name: "A", active: true },
//   { name: "B", active: false },
//   { name: "C", active: true }
// ];

// const output = users.filter((user)=>  user.active);
// console.log(output)

// Output:
// [
//   { name: "A", active: true },
//   { name: "C", active: true }
// ]


// Increase salary by 10% (immutability)
// const employees = [
//   { name: "Ravi", salary: 10000 },
//   { name: "Sita", salary: 20000 }
// ];

// const newArray = employees.map(emp=>({
//     ...emp,
//     salary: emp.salary + emp.salary * 0.1
// }))
// console.log(newArray)