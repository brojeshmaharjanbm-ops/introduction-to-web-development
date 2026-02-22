//* JavaScript ES6 Exercise

// ============================================
//* EXERCISE 1: Array Methods (push, pop, slice, splice)
// ============================================

// 1.1 Push and Pop
const fruits = ['apple', 'banana'];

// Add 'orange' to the end
fruits.push('orange');

// Remove the last fruit and store it
const removedFruit = fruits.pop();

console.log(fruits);        // ['apple', 'banana']
console.log(removedFruit);  // 'orange'


// 1.2 Slice vs Splice
const numbers = [1, 2, 3, 4, 5];

// Use slice() to get [2, 3, 4]
const slicedNumbers = numbers.slice(1, 4);
console.log(slicedNumbers); // [2, 3, 4]

// Use splice() to remove 2 and 3, and insert 'two' and 'three'
numbers.splice(1, 2, 'two', 'three');
console.log(numbers); // [1, 'two', 'three', 4, 5]


// ============================================
//* EXERCISE 2: Arrow Functions
// ============================================

// 2.1 Arrow function with template literals
const greet = (name) => {
  console.log(`hello ${name}`);
};

greet("Brojesh");

// 2.2 Arrow function with multiple parameters
const add = (a, b) => a + b;

console.log(add(5, 3)); // 8


// ============================================
//* EXERCISE 3: Map
// ============================================

const students = [
  { name: 'Alice', score: 85 },
  { name: 'Bob', score: 92 },
  { name: 'Charlie', score: 78 },
];

// Extract only names
const studentNames = students.map(student => student.name);

console.log(studentNames); // ['Alice', 'Bob', 'Charlie']


// ============================================
//* EXERCISE 4: Filter
// ============================================

const products = [
  { name: 'Laptop', price: 1200 },
  { name: 'Mouse', price: 25 },
  { name: 'Monitor', price: 300 },
  { name: 'Keyboard', price: 80 },
];

// Filter products less than $100
const affordableProducts = products.filter(product => product.price < 100);

console.log(affordableProducts);


// ============================================
//* EXERCISE 5: Reduce
// ============================================

const prices = [10, 20, 30, 40];

// Find largest price
const largestPrice = prices.reduce((max, current) => 
  current > max ? current : max
);

console.log(largestPrice); // 40


// ============================================
//* EXERCISE 6: Array Destructuring
// ============================================

const colors = ['red', 'green', 'blue'];

// Destructure first and second
const [firstColor, secondColor] = colors;

console.log(firstColor);  // red
console.log(secondColor); // green


// ============================================
//* EXERCISE 7: Object Destructuring
// ============================================

const person = {
  firstName: 'John',
  lastName: 'Doe',
  age: 30,
  city: 'New York',
};

// Basic destructuring
const { firstName, age } = person;

// Renaming
const { firstName: first } = person;

// Default values
const { country = 'USA' } = person;

console.log(firstName, age);
console.log(first);
console.log(country);


// ============================================
//* CHALLENGE: Combine Everything
// ============================================

const employees = [
  { id: 1, name: 'Alice', department: 'IT', salary: 75000 },
  { id: 2, name: 'Bob', department: 'HR', salary: 65000 },
  { id: 3, name: 'Charlie', department: 'IT', salary: 80000 },
  { id: 4, name: 'Diana', department: 'Finance', salary: 70000 },
];

// Filter IT employees
const itEmployees = employees.filter(emp => emp.department === 'IT');

// Map to get name and salary
const itNameSalary = itEmployees.map(emp => ({
  name: emp.name,
  salary: emp.salary
}));

// Calculate average IT salary
const avgITSalary = itEmployees.reduce((total, emp) => 
  total + emp.salary, 0
) / itEmployees.length;

// Destructure first IT employee
const [{ name: firstITName, salary: firstITSalary }] = itEmployees;

console.log(itNameSalary);
console.log("Average IT Salary:", avgITSalary);
console.log(firstITName, firstITSalary);