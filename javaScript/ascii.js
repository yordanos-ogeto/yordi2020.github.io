var animation = null;
var btnStop;
var btnStart;
var selectFont;
var selectAnimation;
var txtShowAnimation;
var chkSpeed;
var currentAnimationText;

var delay = 250;
var timer = null;
var index = 0;
window.onload = function () {
  txtShowAnimation = document.getElementById("text-area");

  btnStart = document.getElementById("start");
  btnStart.onclick = startAnimation;

  btnStop = document.getElementById("stop");
  btnStop.onclick = stopAnimation;

  selectAnimation = document.getElementById("animation");
  selectAnimation.onchange = changeAnimationText;
  selectAnimation.selectedIndex = 0;

  selectFont = document.getElementById("fontsize");
  selectFont.onchange = changeFontSize;
  selectFont.selectedIndex = 0;

  chkSpeed = document.getElementById("turbo");
  chkSpeed.onchange = changeDelay;
};

function startAnimation() {
  toogleControl("Start");
  if (timer === null) {
    timer = setInterval(changeFrame, delay);
    currentAnimationText = txtShowAnimation.value;
  }
}

function stopAnimation() {
  toogleControl("Stop");

  if (timer !== null) {
    clearInterval(timer);
    timer = null;
  }
  index = 0;
  restoreOrginalText();
}

function changeAnimationText() {
  var selected = selectAnimation.options[selectAnimation.selectedIndex].value;
  animation = ANIMATIONS[selected];

  txtShowAnimation.value = animation;
}

function changeFontSize() {
  txtShowAnimation.style.fontSize = selectFont.value;
}

function changeDelay() {
  if (chkSpeed.checked) {
    clearInterval(timer);
    delay = 50;
    timer = setInterval(changeFrame, delay);
  } else {
    clearInterval(timer);
    delay = 250;

    timer = setInterval(changeFrame, delay);
  }
}

function toogleControl(state) {
  if (state === "Start") {
    btnStart.disabled = true;
    btnStop.disabled = false;
    selectAnimation.disabled = true;
  } else if (state === "Stop") {
    btnStart.disabled = false;
    btnStop.disabled = true;
    selectAnimation.disabled = false;
  }
}

function changeFrame() {
  var frames = ANIMATIONS[selectAnimation.value].split("=====\n");
  txtShowAnimation.value = frames[index];
  index++;

  if (index === frames.length) index = 0;
}

function restoreOrginalText() {
  txtShowAnimation.value = currentAnimationText;
}
