// var and let

var firstName = "Dhandapani";
console.log("firstName = " + firstName);
var firstName = "Dhanes"; // re-declearation is possibile in var
console.log("firstName = " + firstName);

let lastName = "DhandapaniLast";
console.log("lastName =>" + lastName);
//let lastName = "DhanesLast"; // re-declearation is not allowed in let
lastName = "DhanesLast"; // re-assign is possible in let 
console.log("lastName =>" + lastName);

// const 
const surName = "'DhandapaniSur";
console.log("surName =>" + surName);
// surName = "'DhandapaniSurUpdated"; // re-assign is not possible in let
console.log("surName =>" + surName);

/**
 * variable types:
 * 1. Global Level
 * 2. Function level
 * 3. block level
 * 
 */
var browserName = "Chrome"; // Global level

function getChromeBrowserDetails() {
    let versionNm = "100.5";  // method level
    if (browserName.startsWith("Chrome")) {
        var headLess = "Non-Headless"; // block level if ur use var type.. U can able to access outside of block
        console.log("The browser name is " + browserName + " and version is " + versionNm);
        console.log("The browser is running in " + headLess);
    } else {
        console.log("Ur browser name is not chrome");
    }
    console.log("Trying to access version variable var inside of function ==>" + versionNm);
    console.log("Trying to access outside of block ==>" + headLess); // getting exception ==> ReferenceError: headLess is not defined
}
getChromeBrowserDetails();
// console.log("Trying to access version variable var outside of function ==>" + versionNm); // getting excecption => ReferenceError: versionNm is not defined


// hoisting on var,let and const

console.log(testingType);  // hoisting happened -> output here is undefined, not throwing any exception in var, actually it should throw error that logic.. so not recommend to use var
var testingType = "Rregression";

// console.log(testing); // here also hoisting happened -> output is ReferenceError: Cannot access 'testing' before initialization -> proper way of coding logic.. 
// let testing = "regression";

console.log(test); // here also hoisting happened -> output is ReferenceError: Cannot access 'test' before initialization -> proper way of coding logic.. 
const test = "regression"; // so const and let working in similar way, const cannot update values once assigned, let can updated values without re-declear it