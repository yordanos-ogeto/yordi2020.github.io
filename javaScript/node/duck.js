let quacking = false;
let flying = false;
let xPos = 0;
let yPos = 0;

function takeOff() {
  flying = true;
}

function land() {
  flying = false;
}

function startQuacking() {
  quacking = true;
}

function stopQuacking() {
  quacking = false;
}

function moveTo(x, y) {
  xPos = x;
  yPos = y;
  let msg = "Duck is ";
  if (flying) {
    msg += `flying to ${x},${y} `;
  } else {
    msg += `swimming to ${x},${y} `;
  }
  if (quacking) {
    msg += "while quacking";
  }
  console.log(msg);
}
d;

module.exports.takeOff = takeOff;
module.exports.land = land;
module.exports.startQuacking = startQuacking;
module.exports.stopQuacking = stopQuacking;
module.exports.moveTo = moveTo;
