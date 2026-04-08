# JS-Assignment — Assignment 4

**Student:** Manuj Verma  
**Course:** BTech CSE | Fundamentals of Web Design (CSE 106)

---

## Overview

This repository contains 6 plain JavaScript solutions for Assignment 4. Each solution uses `prompt()` for input and `alert()` for output, with no external libraries.

---

## Problems & Approach

### Q1 — Digit Gatekeeper (`question1.js`)
**Approach:** Iterate through every integer `x` in `[L, R]`. For each `x`, check three conditions: divisibility by `K`, digit-sum is prime (checked via trial division up to √n), and no digit is `0`.  
**Complexity:** O((R−L) × digits × √(digitSum))

---

### Q2 — Roll-Seed Lock (`question2.js`)
**Approach:** Apply the transformation rule exactly 3 times: even → `current/2 + seed`, odd → `current*3 - seed`. After 3 steps, check if the final number is a 3-digit number and its middle digit equals `seed`.  
**Complexity:** O(1)

---

### Q3 — Mirror Corridor (`question3.js`)
**Approach:** For each `X` from `0` to `100000`, compute `N + X`, check if it's a palindrome (by reversing its string representation) and divisible by `K`. Return the first valid `X`, or `-1` if none found.  
**Complexity:** O(100000 × digits)

---

### Q4 — Fare Calculator (`question4.js`)
**Approach:** Follow the fare computation steps in order — base calculation, late fee, distance surcharge (10% of current fare), seed adjustment (subtract if odd, add if even), then round up to the nearest multiple of 5 using modular arithmetic.  
**Complexity:** O(1)

---

### Q5 — Skipping Numbers (`question5.js`)
**Approach:** Increment `m` one at a time, adding `m` to the running sum only if `m` is not divisible by `(seed + 2)`. Stop as soon as the sum reaches at least `N`. Output both `m` and the final sum.  
**Complexity:** O(m) where m is the answer

---

### Q6 — Contest Score Judge (`question6.js`)
**Approach:** Compute `score = 3a + b - 2c`. Clamp to 0 if negative. Subtract 10 if total questions exceed 50. Clamp to 0 again if needed. Determine PASS (≥ 60) or FAIL.  
**Complexity:** O(1)

---

## How to Run

Each `.js` file is intended to run in a browser console or as a `<script>` tag within an HTML file:

```html
<!DOCTYPE html>
<html>
  <body>
    <script src="question1.js"></script>
  </body>
</html>
```

Open the HTML file in a browser — the prompts and alerts will appear automatically.

---

## Sample Test Results

| Q | Input | Expected Output |
|---|-------|-----------------|
| 1 | L=1, R=50, K=4 | 3 | 
| 2 | N=37, seed=4 | YES, 947 | 
| 3 | N=37, K=6 | 29 | 
| 4 | base=50, dist=8, late=20, seed=3 | 125 | 
| 5 | N=100, seed=3 | 15 105 |
| 6 | a=20, b=15, c=4 | 67, PASS |  
