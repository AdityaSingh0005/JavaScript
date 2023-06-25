// Conditional Statements
const prompt = require ("prompt-sync")({sigint: true})
let a = prompt("Hey whats your age? ")
// console.log(typeof a)

// a = Number.parseInt(a) // Converting the string to a number
// console.log(typeof a)

// if(a>0){
//     alert("This is a valid age")
// }

// if(a<0){
//     console.log("This is an invalid age");
// }
// else if(a<9){
//     console.log("You are kid and you cannot even think of driving");
// }
// else if(a<18 && a>=9){
//     console.log("You are a kid and you can think of driving after 18");
// }
// else {
//     console.log("You can now drive as you are above 18");
// }
// console.log("Done")

// Switch Statement
// const fruit = 'Guava';
// switch (fruit) {
//     case 'Apple':
//         console.log('Apples are 150 per kg');
//         break;
//     case 'Mangoes':
//     case 'Guava':
//         console.log('Mangoes and Guava are 70 per kg')
//         break;
//     default:
//         console.log('Sorry we are out of fruit');
// }

// Ternary Operator
console.log("You can", a<18? "not drive" :"drive")