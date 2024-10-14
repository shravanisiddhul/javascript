// let score = 33;
// change the value int0 string 

let score = "33";   // o/p - 33 
// let score = "33abds";  // o/p - NaN
// let score = null;   // o/p - 0
// let score = undefined;  //o/p - NaN
// let score = true;  // o/p - 1

// if we take string "33abds" then again it shows number as its type, for that first have to check the real value of valueInNumber 

console.log(typeof score);

console.log(typeof (score));


let valueInNumber = Number(score);
console.log(typeof valueInNumber);
console.log(valueInNumber);   //it shows NaN which means not a number only if we take any string value to number


// 33 => 33
// "33avs" => NaN
// "true" => 1; false => 0

// let isLoggedIn = 1;  // true
// let isLoggedIn = "";  // false
let isLoggedIn = "shravani";  // true

let booleanIsLoggedIn = Boolean(isLoggedIn);
console.log(booleanIsLoggedIn);


// 1 => true and 0 => false
// ""  => false
// "shravani"  => true;

let someNumber = 33;

let stringNumber = String(someNumber);
console.log(stringNumber);
console.log(typeof stringNumber);