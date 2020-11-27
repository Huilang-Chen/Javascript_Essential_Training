// access elements
console.log(document.querySelector(".masthead"));
console.log(document.querySelectorAll("a"));
console.log(document.querySelector("#showcase"));


// use attributes methods
const CTAELEMENT = document.querySelector(".cta a");

if(CTAELEMENT.hasAttribute("target")){
  console.log(CTAELEMENT.getAttribute("target"));
}
else {
  CTAELEMENT.setAttribute("target", "_blank");
}

console.log(CTAELEMENT.attributes);
