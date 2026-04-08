// Question 6: Contest Score Judge
// Author: Manuj Verma | BTech CSE | CSE 106

let a = parseInt(prompt("Enter a (correct answers):"));
let b = parseInt(prompt("Enter b (partially correct answers):"));
let c = parseInt(prompt("Enter c (wrong answers):"));

let score = 3 * a + b - 2 * c;

if (score < 0) {
    score = 0;
}

if (a + b + c > 50) {
    score -= 10;
}


if (score < 0) {
    score = 0;
}

let status = score >= 60 ? "PASS" : "FAIL";

alert(score + ", " + status);
