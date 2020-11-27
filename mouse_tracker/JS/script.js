const CTA = document.querySelector(".cta a");
const ALERT = document.querySelector("#booking-alert");

CTA.classList.remove("hide");
ALERT.classList.add("hide");

function reveal(e) {
    e.preventDefault(); // prevent go back to the top of the page
    CTA.classList.toggle("hide");
    ALERT.classList.toggle("hide");
}

// event handler
//CTA.onclick = reveal;

//event listener
CTA.addEventListener("click", reveal, false);
CTA.addEventListener("mouseenter", function(){console.log("mouseenter");}, false);
