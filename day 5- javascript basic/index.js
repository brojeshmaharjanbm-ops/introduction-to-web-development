//java script variables
var fullname = 'Brojesh maharjan';
let address = "'Kathmandu, Nepal";
const bloodgroup = 'B+';

console. log("Fullname:", fullname );
console. log("Address:", address);
console. log("bloodgroup:",bloodgroup);

// data type
let name = 'pratik';
let age = 25;
let isStudent = false;
let hobbies = ['coding','traveling','cooking'];
console. log(hobbies[0]);

//object
let user = {
 name : 'pratik',
age : 25,
isStudent : false,
hobbies : ['coding','traveling','cooking'],
}
function greet(name){
    console.log("hello",name);
}
greet('brojesh');

//dom manipulation
const headingElement = document.getElementById("heading-2");
console.log('heading element by id',headingElement);

const headingElementbyquery = document.querySelector("#heading-2");
console.log('heading element query selector',headingElementbyquery);

headingElementbyquery.textContent = 'get element by query selector';
headingElement.style.color = 'red';

const buttonElement = document.querySelector('.btn');
 
buttonElement.addEventListener('click',function(){
alert("button clicked");
console.log('button clicked')
})