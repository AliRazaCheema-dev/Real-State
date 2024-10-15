let counts = setInterval(updated, 1);
let upto = 0;
const target = 10245;
const increment = 80;  // Number of increments per interval
const postfix = "+";  // Postfix to add to the counter

function updated() {
    let count = document.getElementById("counter");
    upto += increment;
    if (upto >= target) {
        upto = target;  // Ensure we don't go beyond the target
        clearInterval(counts);
    }
    count.innerHTML = upto.toLocaleString() +postfix;
}
let counts2 = setInterval(updated2, 1);
let upto2 = 0;
const target2 = 13248;
const increment2 = 100;  // Number of increments per interval for the second counter
const postfix2 = "+";  // Postfix to add to the second counter

function updated2() {
    let count2 = document.getElementById("counter2");
    upto2 += increment2;
    if (upto2 >= target2) {
        upto2 = target2;  // Ensure we don't go beyond the target
        clearInterval(counts2);
    }
    count2.innerHTML = upto2.toLocaleString() + postfix2;
}
let counts1 = setInterval(updated1, 1);
let upto1 = 0;
const target1 = 24654;
const increment1 = 250;  // Number of increments per interval for the first counter
const postfix1 = "+";  // Postfix to add to the first counter

function updated1() {
    let count1 = document.getElementById("counter1");
    upto1 += increment1;
    if (upto1 >= target1) {
        upto1 = target1;  // Ensure we don't go beyond the target
        clearInterval(counts1);
    }
    count1.innerHTML = upto1.toLocaleString() + postfix1;
}
let counts3 = setInterval(updated3, 1);
let upto3 = 0;
const target3 = 90245;
const increment3 = 720;  // Number of increments per interval for the first counter
const postfix3 = "+";  // Postfix to add to the first counter

function updated3() {
    let count3 = document.getElementById("counter3");
    upto3 += increment3;
    if (upto3 >= target3) {
        upto3 = target3;  // Ensure we don't go beyond the target
        clearInterval(counts3);
    }
    count3.innerHTML = upto3.toLocaleString() + postfix3;
}
