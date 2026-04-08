// Question 4: Fare Calculator
// Author: Manuj Verma | BTech CSE | CSE 106

let base = parseInt(prompt("Enter base:"));
let distance = parseInt(prompt("Enter distance:"));
let minutesLate = parseInt(prompt("Enter minutesLate:"));
let seed = parseInt(prompt("Enter seed:"));

let fare = base + 7 * distance;

if (minutesLate > 15) {
    fare += 20;
}

if (distance > 10) {
    fare += Math.floor(0.10 * fare);
}

if (seed % 2 !== 0) {
    fare -= seed;
} else {
    fare += seed;
}

// Round up to nearest multiple of 5
if (fare % 5 !== 0) {
    fare = fare + (5 - (fare % 5));
}

alert(fare);
