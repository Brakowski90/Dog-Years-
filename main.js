// Variable Const will not change therefore I chose Const 
const myAge = 33;
//  the value saved to this variable will change. I choose var instead of let or const bc of this. 
var earlyYears = 2;
// Or earlyYears = earlyYears * 10.5; Also earlyYears has already been declaired so you no need to set this to a variable again
earlyYears *= 10.5; 
// Subtracting myAge by two and setting it to varibale laterYears
var laterYears = myAge - 2;
//Or laterYears = laterYears * 4; 
 laterYears *= 4;
//Adding early years and later years and setting it to vriable myAgeInDogYears;
 myAgeInDogYears = earlyYears + laterYears;
// consologe.(name.toLowerCase); could have used this instead of:
 var myName = ('Brandon'.toLowerCase());
// My name is NAME. I am HUMAN AGE years old in human years which is DOG AGE years old in dog years.
// I used the backticks and the string interpo;ation method. Note this is only able to complete this with backticks` "quotes" will not work 
console.log(`My name is ${myName}. I am ${myAge} years old in human years which is ${myAgeInDogYears} years old in dog years.`)
