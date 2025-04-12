document.addEventListener("DOMContentLoaded", function () {
  let currentIndex = 0;
  const carouselInner = document.getElementById("carousel-inner");
  const slides = carouselInner.children;

  function updateCarousel() {
    const width = slides[0].clientWidth;
    carouselInner.style.transform = `translateX(-${currentIndex * width}px)`;
  }

  function prevSlide() {
    currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    updateCarousel();
  }

  function nextSlide() {
    currentIndex = (currentIndex + 1) % slides.length;
    updateCarousel();
  }

  // 綁定按鈕事件
  document.getElementById("prevBtn").addEventListener("click", prevSlide);
  document.getElementById("nextBtn").addEventListener("click", nextSlide);

  // 觸控事件
  let startX = 0;
  let isSwiping = false;
  const carousel = document.getElementById("carousel");

  carousel.addEventListener("touchstart", (e) => {
    startX = e.touches[0].clientX;
    isSwiping = true;
  });

  carousel.addEventListener("touchmove", (e) => {
    // 如有需要，可加入 e.preventDefault(); 以防止預設行為
  });

  carousel.addEventListener("touchend", (e) => {
    if (!isSwiping) return;
    const endX = e.changedTouches[0].clientX;
    const diffX = endX - startX;
    if (diffX > 50) {
      prevSlide();
    } else if (diffX < -50) {
      nextSlide();
    }
    isSwiping = false;
  });

  // 自動輪播（每5秒切換下一張）
  setInterval(nextSlide, 5000);
  window.addEventListener("resize", updateCarousel);

  // 初始更新輪播位置
  updateCarousel();
});
