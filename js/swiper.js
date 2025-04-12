document.addEventListener("DOMContentLoaded", function () {
  // Get carousel elements
  let currentIndex = 0;
  const carouselInner = document.getElementById("carousel-inner");
  const slides = carouselInner.children;
  const totalSlides = slides.length;

  // Get PC arrow buttons
  const prevBtn = document.getElementById("prevBtn");
  const nextBtn = document.getElementById("nextBtn");

  // Get Mobile dot indicators
  const dotButtons = document.querySelectorAll("[data-slide]");

  // Update the carousel by calculating the offset based on the width of the first slide
  function updateCarousel() {
    const slideWidth = slides[0].clientWidth;
    carouselInner.style.transform = `translateX(-${
      currentIndex * slideWidth
    }px)`;
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

  // PC: Click event listener for previous arrow button
  prevBtn.addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
    updateCarousel();
    resetAutoPlay();
  });

  // PC: Click event listener for next arrow button
  nextBtn.addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % totalSlides;
    updateCarousel();
    resetAutoPlay();
  });

  // Mobile: Click event listener for dot indicators
  dotButtons.forEach((dot) => {
    dot.addEventListener("click", () => {
      currentIndex = parseInt(dot.getAttribute("data-slide"));
      updateCarousel();
      resetAutoPlay();
    });
  });

  // Mobile: Touch/Swipe functionality
  let touchStartX = 0;
  let touchEndX = 0;
  const swipeThreshold = 50; // Minimum swipe distance (in pixels) to trigger a slide change

  // Bind touch events to the carousel container (ensure this element covers the expected swipe area)
  const carousel = document.getElementById("carousel");

  carousel.addEventListener("touchstart", (event) => {
    touchStartX = event.touches[0].clientX;
  });

  carousel.addEventListener("touchmove", (event) => {
    touchEndX = event.touches[0].clientX;
  });

  carousel.addEventListener("touchend", () => {
    if (touchEndX < touchStartX - swipeThreshold) {
      // Swipe left: move to next slide
      currentIndex = (currentIndex + 1) % totalSlides;
      updateCarousel();
      resetAutoPlay();
    } else if (touchEndX > touchStartX + swipeThreshold) {
      // Swipe right: move to previous slide
      currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
      updateCarousel();
      resetAutoPlay();
    }
    // Reset touch variables
    touchStartX = 0;
    touchEndX = 0;
  });

  carousel.addEventListener("touchcancel", () => {
    touchStartX = 0;
    touchEndX = 0;
  });

  // Auto-play functionality: Automatically change to next slide every 5 seconds
  let autoPlayInterval = setInterval(() => {
    currentIndex = (currentIndex + 1) % totalSlides;
    updateCarousel();
  }, 5000);

  // Reset auto-play timer after user interaction
  function resetAutoPlay() {
    clearInterval(autoPlayInterval);
    autoPlayInterval = setInterval(() => {
      currentIndex = (currentIndex + 1) % totalSlides;
      updateCarousel();
    }, 5000);
  }

  // Update carousel on window resize to adjust for new slide width
  window.addEventListener("resize", updateCarousel);

  // Initial update of carousel position and dot styling
  updateCarousel();
});
