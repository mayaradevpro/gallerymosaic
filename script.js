document.addEventListener("DOMContentLoaded", function () {
  const buttons = document.querySelectorAll(".filter-btn");
  const images = document.querySelectorAll(".gallery .image");

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      const category = button.getAttribute("data-category");

      images.forEach((image) => {
        if (category === "all" || image.getAttribute("data-category") === category) {
          image.style.display = "block";
        } else {
          image.style.display = "none";
        }
      });
    });
  });
});
