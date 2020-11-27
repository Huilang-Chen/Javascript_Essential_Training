const testWrapper = document.querySelector(".test-wrapper");
const testArea = document.querySelector("#test-area");
const originText = document.querySelector("#origin-text p").innerHTML;
const resetButton = document.querySelector("#reset");
const theTimer = document.querySelector(".timer");

// timer = [minute, second, hundredths of second, thousandths of second]
timer = [0,0,0];
var timerRunning = false;
var interval;

// Add leading zero to numbers 9 or below (purely for aesthetics):
function leadingZero(x){
  if (x<10) {
    x = "0"+ x;
  }
  return x;
}

// Run a standard minute/second/hundredths timer:
function runTimer(){
  timer[2]++;
  let timeString = leadingZero(timer[0])+":"+leadingZero(timer[1])+":"+leadingZero(timer[2]);
  theTimer.innerHTML = timeString;

  if (timer[2] == 100) {
    timer[1]++;
    timer[2] = 0;
  }
  if (timer[1] == 60) {
    timer[0]++;
    timer[1] = 0;
  }
}

// Match the text entered with the provided text on the page:
function inputCheck(){
  let inputText = testArea.value;
  //console.log(inputText);
  let testStr = originText.substring(0, inputText.length);

  if (inputText == originText) {
    // stop timerRunning
    clearInterval(interval);
    testWrapper.style.borderColor= "#7FFFD4";
  }
  else if (inputText == testStr) {
    testWrapper.style.borderColor = "LightSkyBlue";
  }
  else {
    testWrapper.style.borderColor = "OrangeRed";
  }
}

// Start the timer:
function startTimer(){
  console.log("timer starts");
  let textEnterdLength = testArea.value.length;
  if(!timerRunning && textEnterdLength === 0){
    timerRunning = true;
    interval = setInterval(runTimer, 10);
  }
}

// Reset everything:
function reset(){
  console.log("reset everything");
  clearInterval(interval);
  timer = [0,0,0];
  interval = null;
  timerRunning = false;

  testArea.value = "";
  theTimer.innerHTML = "00:00:00";
  testWrapper.style.borderColor = "grey";
}

// Event listeners for keyboard input and the reset button:
resetButton.addEventListener("click", reset, false);
testArea.addEventListener("keypress", startTimer, false);
testArea.addEventListener("keyup", inputCheck, false);
