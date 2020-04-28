/*Decorator - Uma funcção decorator recebe uma outra função como parâmetro e estende o seu com-
portamento sem modificá-la explicitamente*/ 

let loggedIn = false;

function callIfAuthenticated(fn) {
    return !!loggedIn && fn()
}

function sum (a, b) {
    return a + b;
}

console.log(callIfAuthenticated(() => sum(1, 2)));
loggedIn = true;
console.log(callIfAuthenticated(() => sum(1, 6)));
loggedIn = false;
console.log(callIfAuthenticated(() => sum(3,2)));
