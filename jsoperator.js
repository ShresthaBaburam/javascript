// JavaScript Arithmetic Operators
let a = 5;
let b=9;
//         Operator	    Description
//         +	        Addition
let sum = a+b;
console.log(sum);
//         -	        Subtraction
let diff = a-b;
console.log(diff);
//         *	        Multiplication
let mul = a*b;
console.log(mul);
//         **	        Exponentiation (ES2016)
let exp = a**b;
console.log(exp);
//         /	        Division
let divi = a/b;
console.log(divi);
//         %	        Modulus (Division Remainder)
let modu = a%b;
console.log(modu);
//         ++	        Increment
let incr = a++;
console.log(incr);
//         --	        Decrement
let decr = a--;
console.log(decr);



//     JavaScript Assignment Operators
let c= 15   ;    
console.log(c) ;
//         Operator	    Example	  
//         =	        x = y	
let d = c;
console.log(d);
//         +=      	    x += y	  
d +=2;
console.log(d);
//         -=	        x -= y
d -=5;
console.log(d);	   
//         *=	        x *= y	 
d *=2;
console.log(d);  
//         /=	        x /= y	 
d /=2;
console.log(d);   
//         %=	        x %= y	  
d %=5;
console.log(d);  
//         **=	        x **= y	 
d **=2;
console.log(d);    

//     JavaScript String Operators

//         The + operator can also be used to add (concatenate) strings.
let fname= 'baburam';
let lname = 'shrestha';
let names = fname+ lname;
console.log(names);

let  age = 23;
console.log(names + age)
nameage= names+age;
console.log(nameage)

//     JavaScript Comparison Operators

//         Operator	    Description
let firstNumber = 15;
let secondNumber =16;


//         ==	        equal to
console.log(firstNumber == secondNumber);

//         ===	        equal value and equal type
console.log(firstNumber === secondNumber);
//         !=	        not equal
console.log(firstNumber != secondNumber);
//         !==	        not equal value or not equal type
console.log(firstNumber !== secondNumber);
//         >	        greater than
console.log(firstNumber > secondNumber);
//         <	        less than
console.log(firstNumber < secondNumber);
//         >=	        greater than or equal to
console.log(firstNumber >= secondNumber);
//         <=	        less than or equal to
console.log(firstNumber <= secondNumber);
//         ?	        ternary operator
let num= firstNumber>secondNumber ?firstNumber:secondNumber
console.log(num)

//     JavaScript Logical Operators



//         Operator	    Description
let condition1 = true;
let condition2 = false;

//         &&	        logical and
console.log(condition1 && condition2)
//         ||	        logical or
console.log(condition1 || condition2)
//         !	        logical not
console.log(!condition1 )


//     JavaScript Type Operators
//         Operator	Description


//         typeof	    Returns the type of a variable
let n =4;
console.log(typeof n)
let mM = 'babu';
console.log(typeof mM)
let oo=null;
console.log(typeof oo)
let aA = undefined;
console.log(typeof aA)
//         instanceof	Returns true if an object is an instance of an object type

//     JavaScript Bitwise Operators
//         Bit operators work on 32 bits numbers.
     
//         Any numeric operand in the operation is converted into a 32 bit number. The result is converted back to a JavaScript number.
//         Operator	Description	            Example	        Same as	        Result	Decimal
//         &	        AND	                    5 & 1	    0101 & 0001	    0001	 1
console.log(5 & 1)
//         |	        OR	                    5 | 1	    0101 | 0001	    0101	 5
console.log(5 | 1)
//         ~	        NOT	                    ~ 5	        ~0101	        1010	 10
console.log(~ 5)
//         ^	        XOR	                    5 ^ 1	    0101 ^ 0001	    0100	 4
console.log(5 ^ 1)
//         <<	        Zero fill left shift	5 << 1	    0101 << 1	    1010	 10
console.log(5 << 1)
//         >>	        Signed right shift	    5 >> 1	    0101 >> 1	    0010	 2
console.log(5 >> 1)
//         >>>	        Zero fill right shift	5 >>> 1	    0101 >>> 1	    0010	 2
console.log(5 >>> 1)