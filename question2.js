// Question 2: Roll-Seed Lock
// Author: Manuj Verma | BTech CSE | CSE 106

let N = parseInt(prompt("Enter N:"));
let seed = parseInt(prompt("Enter seed:"));

let current = N;

for (let i = 0; i < 3; i++) {
    if (current % 2 === 0) {
        current = current / 2 + seed;
    } else {
        current = current * 3 - seed;
    }
}

let final = current;

if (final >= 100 && final <= 999) {
    let middleDigit = Math.floor(final / 10) % 10;
    if (middleDigit === seed) {
        alert("YES, " + final);
    } else {
        alert("NO, " + final);
    }
} else {
    alert("NO, " + final);
}
