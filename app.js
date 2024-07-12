const slides = document.querySelectorAll(".slide");

const removeActiveSlide = () => {
    slides.forEach((slide) => {
        slide.classList.remove("active");
    })
}
slides.forEach((slide, index) => {
  slide.addEventListener("click", () => {
    removeActiveSlide();
    slide.classList.add("active");
  });
});
