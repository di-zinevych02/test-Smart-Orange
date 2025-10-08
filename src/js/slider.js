document.addEventListener("DOMContentLoaded", () => {
  const sliderWrapper = document.querySelector('.slides-list');
  const slides = document.querySelectorAll(".slide");
  const prevButton = document.getElementById("prev");
  const nextButton = document.getElementById("next");
  let currentIndex = 0;

  function showSlide(index) {
    if (index < 0) {
      currentIndex = slides.length - 1;
    } else if (index >= slides.length) {
      currentIndex = 0;
    } else {
      currentIndex = index;
    }
    const offset = -currentIndex * 100;
    document.querySelector("slides").style.transform = `translateX(${offset}%)`;
  }
  prevButton.addEventListener("click", () => {
    showSlide(currentIndex - 1);
  });
  nextButton.addEventListener("click", () => {
    showSlide(currentIndex + 1);
  })
  });
