/**operators
 * 1. Arithmatic Operators
 *  - Add ,sub,multiply,division, modulous, increment/decrement
 * 2. Assignment Operator
 *  - = is assignment, += (add and assign), -= (sub and assign), *=(mul and assign), /=(div and assign), %=(mod and assign),
 * 3. Comparission Operator
 * - ===, ==, <=, >=, >, < ....
 * 4. Conditional operators
 */

const assert = require("assert");

// increment

let a = 10;
console.log(a++); // output: 10 ,bcz it is printed 1st then increment by 1 after printing console
console.log(a); // output : 11 
console.log(++a); // output; 12 , bcz it is incremented 1st by 1 then it is printed in console..
console.log(a); // output: 12, bcz it is already pre incremented in previous line..
console.log("=========================================");
// decrement  -- works same logic by decrementt by 1
let b = 20;
console.log(b--); // output: 20
console.log(b); // output: 19
console.log(--b); // output: 18
console.log(b); // output: 18

console.log("=========================================");
// difference between strictly equals and equals 

console.log(1 === 1); // true : strictly equals , compare dataTyps and values
console.log(1 === '1'); // false : here values are same but different data types so it is false
console.log(1 == '1'); // true
console.log(1 == 1); // true