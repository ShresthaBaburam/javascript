let person={
    name:"baburam",
    age:23,
    address:"kathmandu",
    
};

console.log(person);
document.write(person);

// dot notation
person.name="john";
console.log(person.name);
document.write(person.name);

// bracket notation
person["address"]="pokhara";
console.log(person.address);
document.write(person.address);

let selection = "name";
person[selection]="marry";

// defining the object without any parameter
let car={
    brand:"",
    modelNumber:"",
}
console.log(typeof car);
document.write(typeof car);

car["brand"]="tata";

car["modelNumber"]="M20342";

console.log(car.brand);
console.log(car.modelNumber);

