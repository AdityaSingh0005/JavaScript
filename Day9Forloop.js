// Loops

/*
const prompt = require("prompt-sync")();
let sum = 0
let n = prompt("Enter the number: ")
n = Number.parseInt(n)
for(let i = 0; i<n; i++){
    sum += (i+1)
    console.log((i+1),"+")
}
console.log("Sum of first "  + n +  " natural number is " + sum)
*/

// For in Loop
let obj = {
    aditya : 96,
    arun : 77,
    harry : 51,
    prashant : 74,
    sayan : 85
}

for (let a in obj){
    console.log(" Marks of " + a + " are " + obj[a])
}

// For off loop
for (let b of 'aditya'){
    console.log(b)
}