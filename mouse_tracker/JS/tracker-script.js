const AREA = document.body;
const CIRCLE = document.querySelector('.circle');
const blueCir = document.querySelector("#secondCircle");

var windowWidth = window.innerWidth;
var windowHeight = window.innerHeight;

function mouseCoordinates(e) {
    // Capture the event object (mouse movement).
    // Get X coordinate (distance from left viewport edge) via clientX property.
    // Take total window width, subtract current coordinate and width of circle.
    // Do the same for Y coordinate (distance from top viewport edge).
    var horizontalPosition = windowWidth - e.clientX - 26;
    var verticalPosition= windowHeight - e.clientY - 26;

    // Set horizontal and vertical position.
    CIRCLE.style.left = horizontalPosition + 'px';
    CIRCLE.style.top = verticalPosition + 'px';

    var blueCirX = horizontalPosition;
    var blueCirY = e.clientY - 26;

    blueCir.style.left = blueCirX +"px";
    blueCir.style.top = blueCirY + "px";

    //differen of x and y coordinate
    // xDiff = Math.abs(blueCirX - horizontalPosition); always 0
    yDiff = Math.abs(blueCirY - verticalPosition);
    if(yDiff <= 50){
      blueCir.style.backgroundColor = "cyan";
      blueCir.style.borderColor = "green";
    }
    else {
      blueCir.style.backgroundColor = "transparent";
      blueCir.style.borderColor = "blue";
    }
}

function changeColorOnTouch() {
    CIRCLE.style.backgroundColor = "green";
    CIRCLE.style.borderColor = "green";
}

// When the mouse moves, run the mouseCoordinates function.
AREA.addEventListener('mousemove', mouseCoordinates, false);

// When the mouse touches the circle, run the changeColorOnTouch function.
CIRCLE.addEventListener('mouseenter', changeColorOnTouch, false);

// When the mouse leaves the circle, remove inline styles with an anonymous function.
CIRCLE.addEventListener('mouseleave', function(){CIRCLE.removeAttribute("style");}, false);

function changeBlueCirColor(){
  blueCir.style.backgroundColor = "cyan";
  blueCir.style.borderColor = "green";
}

// following code is for secondCircle
//blueCir.addEventListener('mouseenter', changeBlueCirColor, false);
//blueCir.addEventListener('mouseleave', function(){blueCir.removeAttribute("style");}, false);
