const slider = document.querySelector('.slider');
const slides = document.querySelectorAll('.slide');

let currentSlide = 0;

function nextSlide() {
  slides[currentSlide].classList.remove('active');
  currentSlide = (currentSlide + 1) % slides.length;
  slides[currentSlide].classList.add('active');
}

function prevSlide() {
  slides[currentSlide].classList.remove('active');
  currentSlide = (currentSlide - 1 + slides.length) % slides.length;
  slides[currentSlide].classList.add('active');
}

slider.addEventListener('swipeleft', nextSlide);
slider.addEventListener('swiperight', prevSlide);

// Opcional: navegação com setas (crie elementos HTML para as setas)
const nextBtn = document.querySelector('.slider-nav .next');
const prevBtn = document.querySelector('.slider-nav .prev');

nextBtn.addEventListener('click', nextSlide);
prevBtn.addEventListener('click', prevSlide);
