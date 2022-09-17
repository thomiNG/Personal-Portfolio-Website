let slideIndex = 0;
var slideshowTimeout;
showSlides();

function currentSlide(n) {
  clearTimeout(slideshowTimeout);
  showSlides((slideIndex = n - 1));
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("home-container");
  let dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
  slideshowTimeout = setTimeout(showSlides, 700000); // Change image every 10 seconds
}

var homeSection = document.getElementById("home-section");
var aboutSection = document.getElementById("about-section");
var myElement = document.querySelector(".test-viewport");

// window.onscroll = function () {
//   elementInViewport();
// };

function elementInViewport() {
  var bounding = myElement.getBoundingClientRect();
  var myElementHeight = myElement.offsetHeight;
  var myElementWidth = myElement.offsetWidth;

  if (
    bounding.top >= -myElementHeight &&
    bounding.left >= -myElementWidth &&
    bounding.right <=
      (window.innerWidth || document.documentElement.clientWidth) +
        myElementWidth &&
    bounding.bottom <=
      (window.innerHeight || document.documentElement.clientHeight) +
        myElementHeight
  ) {
    alert("Element is in the viewport!");
  } else {
    alert("Element is NOT in the viewport!");
  }
}
