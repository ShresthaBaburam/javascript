var names =" baburam shrestha";
document.write(names);
console.log(names);

// new keyword to define variable is let in js
let ages = 20;
document.write(ages);
console.log("\n"+ages);

/*
cannot be a reserved keyword
should be meaningful
cannot start wioth a number and whitespace
cananot contain  a space and hypen
case sensitive
*/
 

// constants

const interestRate = 15;
let principal = 100;
let time =3;
let interest;
interest= (principal*time*interestRate)/100;
document.write(interest);
console.log("\n"+interest);


/*
data types 
1> primitive/value type(statically typed)
        string
        number
        boolean
        undefined
        null
2> dyanmic type(dymanically typed)
        object
        array
        fucntion

*/

let name = "baburam shrestha"; // string
console.log(typeof name);
document.write(typeof name);

let age =23;  //number
console.log(typeof age);
document.write(typeof age);

let isComplete= false; //boolean
console.log(typeof isComplete);
document.write(typeof isComplete);

let address; //undefined
console.log(typeof address);
document.write(typeof address);

let city =null; //null
console.log(typeof city);
document.write(typeof city);
