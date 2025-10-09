document.addEventListener("DOMContentLoaded", () => {
  const sliderWrapper = document.querySelector('.slides-list');
  const slides = document.querySelectorAll(".slide");
  const prevButton = document.getElementById("prev");
  const nextButton = document.getElementById("next");
  let currentSlide = 0;
  const totalSlides = slides.length;
  const updateSliderPosition = () => {
    sliderWrapper.style.transform = `translateX(-${currentSlide * 100}%)`;
  };
  const updateButtons = () => {
    prevButton.disabled = currentSlide === 0;
    nextButton.disabled = currentSlide === totalSlides - 1;
  };
  const goToNextSlide = () => {
    if (currentSlide < totalSlides - 1) {
      currentSlide++;
      updateSliderPosition();
      updateButtons();
    }
  };
  const goToPrevSlide = () => {
    if (currentSlide > 0) {
      currentSlide--;
      updateSliderPosition();
      updateButtons();
    }
  };
  nextButton.addEventListener('click', goToNextSlide);
  prevButton.addEventListener('click', goToPrevSlide);
  updateButtons();
});