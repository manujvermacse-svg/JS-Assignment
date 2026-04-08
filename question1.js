// Question 1: Digit Gatekeeper
// Author: Manuj Verma | BTech CSE | CSE 106

function isPrime(n) {
    if (n < 2) return false;
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) return false;
    }
    return true;
}

function digitSum(n) {
    let sum = 0;
    while (n > 0) {
        sum += n % 10;
        n = Math.floor(n / 10);
    }
    return sum;
}

function containsZero(n) {
    while (n > 0) {
        if (n % 10 === 0) return true;
        n = Math.floor(n / 10);
    }
    return false;
}

let L = parseInt(prompt("Enter L:"));
let R = parseInt(prompt("Enter R:"));
let K = parseInt(prompt("Enter K:"));

let count = 0;
for (let x = L; x <= R; x++) {
    if (x % K === 0 && isPrime(digitSum(x)) && !containsZero(x)) {
        count++;
    }
}

alert(count);
