/* Quiet particle network behind the hero. Skipped for reduced motion. */
document.addEventListener("DOMContentLoaded", function () {
  if (!window.particlesJS || !document.getElementById("particles-js")) return;
  if (window.matchMedia && matchMedia("(prefers-reduced-motion: reduce)").matches) return;
  particlesJS("particles-js", {
    particles: {
      number: { value: 60, density: { enable: true, value_area: 1000 } },
      color: { value: "#7dc4ff" },
      shape: { type: "circle" },
      opacity: { value: 0.35, random: false },
      size: { value: 1.6, random: true },
      line_linked: { enable: true, distance: 170, color: "#7dc4ff", opacity: 0.16, width: 1 },
      move: { enable: true, speed: 1.2, direction: "none", random: true, straight: false, out_mode: "out", bounce: false }
    },
    interactivity: {
      detect_on: "window",
      events: { onhover: { enable: true, mode: "grab" }, onclick: { enable: false }, resize: true },
      modes: { grab: { distance: 160, line_linked: { opacity: 0.35 } } }
    },
    retina_detect: true
  });
});
