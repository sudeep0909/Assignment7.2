
// Javascript External File

// JavaScript code that prints multiples of 5 up to 50.
// Use for loop for first task
// Use while loop for second task
    
var value = 5, multiples = 1;

console.log("The multiples of 5 up to 50 using FOR Loop:");
for (let i=1 ; i <= 10 ; i++){
    multiples = value * i;
    console.log(multiples);
}
   
console.log("The multiples of 5 up to 50 using WHILE Loop:");
let i=1;
while(i <= 10){
    multiples = value * i;
    console.log(multiples);
    i++;
}
