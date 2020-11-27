const FEATURED = document.querySelector(".featured-image");
const THEIMAGE = FEATURED.querySelector("img");

var altText = THEIMAGE.getAttribute("alt");

var captionElement = document.createElement("figcaption");
// method for old browser
/*var captionText = document.createTextNode(altText);

captionElement.appendChild(captionText);

//console.log(captionElement);

FEATURED.appendChild(captionElement);*/

// new browser
captionElement.append(altText);
FEATURED.append(captionElement);

THEIMAGE.setAttribute("alt", "")
