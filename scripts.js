// Carousel for event detail page
let currentSlide = 0;

function moveSlide(direction) {
  const carouselImages = document.querySelectorAll('.carousel-images img');
  const totalSlides = carouselImages.length;

  currentSlide += direction;

  if (currentSlide < 0) {
    currentSlide = totalSlides - 1;
  } else if (currentSlide >= totalSlides) {
    currentSlide = 0;
  }

  carouselImages.forEach((img, index) => {
    img.style.display = index === currentSlide ? 'block' : 'none';
  });
}

// Initialize the carousel
document.querySelectorAll('.carousel-images img')[0].style.display = 'block';

// Scroll through past editions
let editionIndex = 0;

function scrollPastEditions() {
  const editions = document.querySelectorAll('.edition-year');
  editionIndex = (editionIndex + 1) % editions.length;
  editions[editionIndex].scrollIntoView({ behavior: 'smooth', block: 'center' });
}

setInterval(scrollPastEditions, 3000); // Change the time interval as needed
