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

// Function to update carousel slide
function updateCarousel() {
  carouselInner.style.transform = `translateX(-${currentIndex * 100}%)`;
  updateDots();
}

// Function to update dot active styling
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

// Click event listeners for arrow buttons (PC)
prevBtn.addEventListener("click", () => {
  currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
  updateCarousel();
});

nextBtn.addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % totalSlides;
  updateCarousel();
});

// Click event listeners for dot buttons (Mobile)
dotButtons.forEach((dot) => {
  dot.addEventListener("click", () => {
    currentIndex = parseInt(dot.getAttribute("data-slide"));
    updateCarousel();
  });
});

// Initialize dot styling
updateDots();

// Mobile: Touch/Swipe functionality
let touchStartX = 0;
let touchEndX = 0;
const swipeThreshold = 50; // Minimum swipe distance (in pixels) to trigger slide change

carouselInner.addEventListener("touchstart", (event) => {
  touchStartX = event.touches[0].clientX;
});

carouselInner.addEventListener("touchmove", (event) => {
  touchEndX = event.touches[0].clientX;
});

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

function handleGesture() {
  if (touchEndX < touchStartX - swipeThreshold) {
    // Swipe left -> next slide
    currentIndex = (currentIndex + 1) % totalSlides;
    updateCarousel();
  } else if (touchEndX > touchStartX + swipeThreshold) {
    // Swipe right -> previous slide
    currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
    updateCarousel();
  }
}
