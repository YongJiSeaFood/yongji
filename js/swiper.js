// Get carousel elements
const carouselInner = document.getElementById("carousel-inner");
const slides = carouselInner.children;
const totalSlides = slides.length;
let currentIndex = 0;

// PC arrow buttons
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");

// Mobile dot indicators
const dotButtons = document.querySelectorAll("[data-slide]");

// Update the carousel by calculating the offset based on the first slide's width
function updateCarousel() {
  const slideWidth = slides[0].clientWidth;
  carouselInner.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
  updateDots();
}

// Update dot active styling based on the current slide index
function updateDots() {
  dotButtons.forEach((dot, index) => {
    if (index === currentIndex) {
      dot.classList.remove("inactive-dot");
      dot.classList.add("active-dot");
    } else {
      dot.classList.remove("active-dot");
      dot.classList.add("inactive-dot");
    }
  });
}

// PC: Click event listener for the previous arrow button
prevBtn.addEventListener("click", () => {
  currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
  updateCarousel();
});

// PC: Click event listener for the next arrow button
nextBtn.addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % totalSlides;
  updateCarousel();
});

// Mobile: Click event listener for dot indicators
dotButtons.forEach((dot) => {
  dot.addEventListener("click", () => {
    currentIndex = parseInt(dot.getAttribute("data-slide"));
    updateCarousel();
  });
});

// Initialize dot styling on load
updateDots();

// Mobile: Touch/Swipe functionality
let touchStartX = 0;
let touchEndX = 0;
const swipeThreshold = 50; // Minimum swipe distance (in pixels) to trigger a slide change

// Listen for touchstart event to capture the initial touch position
carouselInner.addEventListener("touchstart", (event) => {
  touchStartX = event.touches[0].clientX;
});

// Listen for touchmove event to update the current touch position
carouselInner.addEventListener("touchmove", (event) => {
  touchEndX = event.touches[0].clientX;
});

// Listen for touchend event to determine if a swipe occurred
carouselInner.addEventListener("touchend", () => {
  handleGesture();
  // Reset touch variables after handling the gesture
  touchStartX = 0;
  touchEndX = 0;
});

// Also listen for touchcancel in case the touch sequence is interrupted
carouselInner.addEventListener("touchcancel", () => {
  touchStartX = 0;
  touchEndX = 0;
});

// Determine swipe gesture direction and update the carousel accordingly
function handleGesture() {
  if (touchEndX < touchStartX - swipeThreshold) {
    // Swipe left: move to the next slide
    currentIndex = (currentIndex + 1) % totalSlides;
    updateCarousel();
  } else if (touchEndX > touchStartX + swipeThreshold) {
    // Swipe right: move to the previous slide
    currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
    updateCarousel();
  }
}

// Update carousel on window resize to adjust for new slide width
window.addEventListener("resize", updateCarousel);
