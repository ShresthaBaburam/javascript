function greet( names){
    console.log("hello!\n"+ names);
    document.write("hello!"+ names);
}
let name = "baburam shrestha";
greet(name);



function square(number){
    return number*number;
}

let num = 5;
a = square(num);
console.log(a);
document.write(a);

function simpleInterest(p,t,r){
    return (p*t*r)/100;
}

let principal = 1000;
let time = 5;
let interestRate= 15;
let interet=simpleInterest(principal,time,interestRate);
console.log(interet);
document.write(interet);


