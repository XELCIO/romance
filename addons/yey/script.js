document.addEventListener("DOMContentLoaded", (event) => {
  VANTA.BIRDS({
    el: "#vanta-bg",
    mouseControls: true,
    touchControls: true,
    minHeight: 200.0,
    minWidth: 200.0,
    scale: 1.0,
    scaleMobile: 1.0,
    backgroundColor: 0x0,
    color1: 0xfffff,
    color2: 0x111111,
    wingSpan: 0.5,
    separation: 10.0,
    alignment: 10.0,
    cohesion: 190.0,
    quantity: 5.0
    // ... other parameters ...
  });
  // Add event listeners for mouseover and mouseout
  document
    .querySelector(".text-overlay")
    .addEventListener("mouseover", function () {
      this.style.color = "#aqua"; // Change to a different color
    });
  document
    .querySelector(".text-overlay")
    .addEventListener("mouseout", function () {
      this.style.color = "#ffffff"; // Change back to the original color
    });
});