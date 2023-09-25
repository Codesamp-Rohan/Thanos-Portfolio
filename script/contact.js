const circle = document.querySelector(".circle");

window.addEventListener("mousemove", function (e) {
  circle.style.left = e.pageX + "px";
  circle.style.top = e.pageY + "px";
});

const heading = document.querySelector(".contact img");

heading.addEventListener("mousemove", function (e) {
  gsap.to(".circle", {
    scale: 18,
  });
  gsap.to(".contact img", {
    filter: "opacity(100%)",
  });
});

heading.addEventListener("mouseleave", function (e) {
  gsap.to(".circle", {
    scale: 1,
  });
  gsap.to(".contact img", {
    filter: "opacity(0%)",
  });
});
