"use strict";
$(function () {
  $("#start").click(function () {
    let width = $("#width").val();
    let growAmount = $("#growth").val();
    let growRate = $("#rate").val();
    let numberCircles = $("#circle").val();

    makeCircles(width, parseInt(numberCircles));
    growCircles(parseInt(growAmount), parseInt(growRate));
  });
});

function makeCircles(width, circleCount) {
  let bgColors = [
    "black",
    "blue",
    "red",
    "grey",
    "brown",
    "green",
    "pink",
    "purple",
    "orange",
    "purple",
    "white",
    "darkbrown",
  ];

  let circles = [];
  for (let i = 0; i < circleCount; i++) {
    let position = generateRandomInteger(1, 800);
    let bgColor = bgColors[Math.floor(Math.random() * bgColors.length)];

    let circle = $("<div>", {
      class: "circle",
      css: {
        left: position + "px",
        "background-color": bgColor,
      },
    });
    circles.push(circle);
  }

  $("#circles").append(circles);
}

function generateRandomInteger(min, max) {
  return Math.floor(min + Math.random() * (max + 1 - min));
}

function growCircles(growAmount, growRate) {
  setInterval(function () {
    $(".circle").css({
      width: function (idx, old) {
        return parseInt(old) + growAmount + "px";
      },
      height: function (idx, old) {
        return parseInt(old) + growAmount + "px";
      },
    });
  }, growRate);
}
