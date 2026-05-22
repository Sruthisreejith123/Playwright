"use strict";
function message() {
    console.log("Hello");
}
message();
function nameDetail(username) {
    console.log(username);
}
nameDetail("Sruthi");
function addition(a, b) {
    return (a + b);
}
let result = addition(3, 4);
console.log(result);
function throwError(message) {
    throw new Error(message);
}
throwError("This is an error message");
