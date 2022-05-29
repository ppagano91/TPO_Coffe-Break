// CAROUSEL

let slideIndex;
let initial = true;

// Next/previous controls
function plusSlides(n) {
  showSlides((slideIndex += n));
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides((slideIndex = n));
}

function NoneDisplaySlides() {
  let i;
  let slides = document.getElementsByClassName('mySlides');
  //  Inicializar todos los display en none
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = 'none';
  }
}

slideIndex = 0;
function showSlidesAuto() {
  let i;
  // HTML Collection
  let slides = document.getElementsByClassName('mySlides');

  //   console.log(slides);
  NoneDisplaySlides();

  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  slides[slideIndex - 1].style.display = 'block';

  setTimeout(() => showSlidesAuto(), 5000); // Change image every 2 seconds
}

if (initial) {
  slideIndex = 1;
  initial = false;
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName('mySlides');
  let dots = document.getElementsByClassName('dot');
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }

  NoneDisplaySlides();

  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(' active', '');
  }
  slides[slideIndex - 1].style.display = 'block';
  dots[slideIndex - 1].className += ' active';
}

NoneDisplaySlides();
showSlidesAuto();
// showSlides(slideIndex=slideIndex+1);
