// hamburger menu
let navBar = document.querySelector(".list-nav-bar");
// CURRENT WORKAROUND!
//  -> without flag condition,
//  menu "button" must be double clicked in order to open menu list when site is loaded first time,
//  because navBar.style.maxHeight is init not 0px even though it is set to 0px in CSS
let toggleMenuInitFlag = false;

// setting maxHeight before function call will cause position errors for desktop size
// navBar.style.maxHeight = "0px";
function toggleMenu() {
  if (toggleMenuInitFlag == false) {
    toggleMenuInitFlag = true;
    navBar.style.maxHeight = "0px";
  }
  console.log(navBar.style.maxHeight + " + triggered");
  if (navBar.style.maxHeight == "0px") {
    navBar.style.maxHeight = "230px";
  } else {
    navBar.style.maxHeight = "0px";
  }
}

// slideshow animation
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
    dots[i].className = dots[i].className.replace(" active-dot", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active-dot";
  slideshowTimeout = setTimeout(showSlides, 7000); // Change image every 10 seconds
}

// animation for navigation bar (which section is active), when scrolling (section depended)
let section = document.querySelectorAll("section");
let menu = document.querySelectorAll("nav ul li a");
window.onscroll = () => {
  console.log("scrolling function works");
  scrollFunction();
  section.forEach((i) => {
    let top = window.scrollY;
    let offset = i.offsetTop - 300;
    let height = i.offsetHeight;
    let id = i.getAttribute("id");

    if (top >= offset && top < offset + height) {
      menu.forEach((link) => {
        link.classList.remove("active-navigation");
        document
          //   .querySelector('header nav a[href="#' + id + '"]')
          .querySelector("." + id)
          .classList.add("active-navigation");
      });
    }
  });
};

// scrolling animation
function reveal() {
  var reveals = document.querySelectorAll(".reveal");

  for (let i = 0; i < reveals.length; i++) {
    //window viewport height
    var windowHeight = window.innerHeight;
    //elements distance to top of viewport
    var elementTop = reveals[i].getBoundingClientRect().top;
    var elementVisible = 150;

    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active-scroll");
    } else {
      reveals[i].classList.remove("active-scroll");
    }
  }
}

reveal();
window.addEventListener("scroll", reveal);

// Scroll to top functioality
// Get the button
let btnScrollTop = document.getElementById("btn-scroll-top");

// When the user scrolls down 20px from the top of the document, show the button
// window.onscroll = function () {
//   scrollFunction();
//   // console.log("scrolling function works");
// };

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    btnScrollTop.style.display = "block";
  } else {
    btnScrollTop.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function scrollTop() {
  console.log("button working");
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

btnScrollTop.addEventListener("click", scrollTop);

// change color of arrow icon when hovering over button
let arrowIcon = document.querySelector(".fa-arrow-up");

// change color to white when hovering over button
btnScrollTop.addEventListener(
  "mouseover",
  () => (arrowIcon.style.color = "white")
);

// change color back to black when removing the mouse out of button
btnScrollTop.addEventListener("mouseout", () => {
  arrowIcon.style.color = "black";
});
