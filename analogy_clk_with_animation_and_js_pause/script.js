const HOURHAND = document.querySelector("#hour");
const MINUTEHAND = document.querySelector("#minute");
const SECONDHAND = document.querySelector("#second");

// get current time
let date = new Date();
let sec = date.getSeconds();
let min = date.getMinutes();
let hr = date.getHours();

// set initial position in degree
// add sec/60 to min and min/60 to hr which makes the arms more precise
let secPos = sec*360/60;
let minPos = (min + sec/60)*360/60;
let hrPos  = (hr + min/60)*360/12;

function runCLK(){

  secPos += 360/60;
  minPos += (360/60)/60;
  hrPos += (360/12)/3600;

  // move the arms to target position
  SECONDHAND.style.transform = "rotate(" + secPos + "deg)";
  MINUTEHAND.style.transform = "rotate(" + minPos + "deg)";
  HOURHAND.style.transform = "rotate(" + hrPos + "deg)";
}

// run the function runCLK every 1000 milliseconds
setInterval(runCLK, 1000);
