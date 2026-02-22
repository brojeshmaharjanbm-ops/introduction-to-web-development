//arrow functions
const greet = (name) => {
    console.log('Hello',name);
};
greet('Brojesh'); // Output: Hello, Brojesh!~

//array methods
const numbers = [10, 20 , 40, 60];  

//push and pop
numbers.push(80); // Adds 80 to the end of the array
numbers.push(100); // Adds 100 to the end of the array

console.log(numbers); // Output: [10, 20, 40, 60, 80, 100]

numbers.pop(80); // Removes the last element (100)
console.log(numbers); // Output: [10, 20, 40, 60, 80]

const numberlist = [10, 20, 30, 40, 50];

const doubledNumbers = numberlist.map((number) =>{
return number * 2;
});
console.log(doubledNumbers); // Output: [20, 40, 60, 80, 100]
 
 const evenNumbers = numberlist.filter((number) => {
    return number % 2 === 0;
 });
 console.log(evenNumbers); // Output: [10, 20, 40]

  const totalsum = numberlist.reduce((accumulator, currentValue) => {
    console.log('Accumulator:', accumulator, 'Current Value:', currentValue);
    return accumulator + currentValue;
 }, 0);
 console.log(totalsum); // Output: 150



 // fruit array
    const fruits = ['apple', 'banana', 'cherry', 'orange', 'mango'];
    const slicedfruits = fruits.slice(1, 3);
    console.log(slicedfruits);
     // Output: ['banana', 'cherry']

 fruits.splice(1, 3); // Removes 'banana' from index 1
 console.log(fruits); // Output: ['apple', 'cherry', 'orange', 'mango']

 //spread operator
 const newnames = ['Alice', 'Bob', 'Charlie'];

 console.log(newnames);

 const user = {
    name: 'brojesh',
    age: 20,
    city: 'khushibu,nepal',
 }; 
    const updatedUser = {
    ...user,
    isStudent: true,
 };
 console.log(updatedUser);
  
 // destructuring
    const [first, second] = newnames;
    console.log(first); // Output: 'Alice'
    console.log(second); // Output: 'Bob'


    const{ name, city } = updatedUser;
    console.log(name,city); // Output: 'brojesh'