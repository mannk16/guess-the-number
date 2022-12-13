"use strict";

let num = Math.trunc(Math.random() * 20) + 1;

let score = 20; //state variable as this variable is a part of application state.
//We want this data to be available all the time

let high_score = 0;

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".number1").value);

  if (!guess) {
    document.querySelector(".display").textContent = "No number";
  } else if (guess != num) {
    if (score > 1) {
      guess > num
        ? (document.querySelector(".display").textContent = "Too high")
        : (document.querySelector(".display").textContent = "Too low");
      score--;
      document.querySelector(".actual-score").textContent = score;
    } else {
      document.querySelector(".display").textContent =
        "Unfortunately you lostt!!";
    }
  } else {
    document.querySelector(".number").textContent = num;
    document.querySelector(".display").textContent = "Yeah, matched";
    document.querySelector("body").style.backgroundColor = "#60b347";
    if (high_score < score) {
      high_score = score;
      document.querySelector(".actual-high-score").textContent = high_score;
    }
  }
});

document.querySelector(".again").addEventListener("click", function () {
  num = Math.trunc(Math.random() * 20) + 1;
  score = 20;
  document.querySelector("body").style.backgroundColor = "#000000";
  document.querySelector(".actual-score").textContent = 20;
  document.querySelector(".display").textContent = "Start Guessing.....";
  document.querySelector(".number").textContent = "?";
  document.querySelector(".number1").value = NaN;
});

//Getting rid of duplicate code is known as refactoring
