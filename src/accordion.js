var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slides = $(".slides");
  $(slides).css("display", "none");
  

  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
  setTimeout(showSlides, 6000);
}