let slides = document.querySelectorAll('.slide');
let currentSlide = 0;

function showSlide(n) {
  slides[currentSlide].classList.remove('active');
  currentSlide = (n + slides.length) % slides.length;
  slides[currentSlide].classList.add('active');
}

showSlide(0);

document.querySelector('.prev').addEventListener('click', function() {
  showSlide(currentSlide - 1);
});

document.querySelector('.next').addEventListener('click', function() {
  showSlide(currentSlide + 1);
});
