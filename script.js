function revealSpan() {
  document.querySelectorAll(".loader-heading").forEach(function (e) {
    var spanParent = document.createElement("span");
    var spanChild = document.createElement("span");

    spanParent.classList.add("parent");
    spanChild.classList.add("child");

    spanChild.textContent = e.textContent;
    spanParent.appendChild(spanChild);

    e.innerHTML = "";
    e.appendChild(spanParent);
  });
}

const cursor = document.querySelector(".cursor");
document.querySelectorAll(".page2-design .card").forEach(function (e) {
  e.addEventListener("mousemove", function (dets) {
    setTimeout(() => {
      console.log((cursor.style.left = dets.clientX + "px"));
      console.log((cursor.style.top = dets.clientY + "px"));
      console.log((cursor.style.opacity = "1"));
    }, 100);
  });
  e.addEventListener("mouseleave", function () {
    console.log((cursor.style.opacity = "0"));
  });
});

revealSpan();

// LOADER TIMELINE
const tl = gsap.timeline();

tl.to(".parent .child", {
  transform: "translateX(0px)",
  opacity: "1",
  stagger: 2,
  duration: 1,
})
  .to(".parent .child", {
    transform: "translateY(-100px)",
    duration: 2,
    stagger: 2,
  })
  .to(".loader", {
    height: "0px",
    duration: 2,
    delay: -2,
    stagger: 2,
  })
  .to(
    ".animation-page1",
    {
      width: "100%",
      duration: 2,
      delay: -2,
      stagger: 2,

      ease: Expo.easeInOut,
    },
    "upPage"
  )
  .to(
    ".main",
    {
      height: "100vh",
      duration: 2,
      delay: -1.5,
      stagger: 2,

      ease: Expo.easeInOut,
    },
    "upPage"
  )
  .to(
    ".topArea-image img",
    {
      right: "0px",
      duration: 1,
      delay: -1,
      stagger: 2,
      ease: Expo.easeIn,
    },
    "hero"
  )
  .to(
    ".show",
    {
      transform: "scaleY(1)",
      duration: 1,
      delay: -1,
      stagger: 2,
      ease: Circ.easeInOut,
    },
    "hero"
  );

// Timeline 2
const tl2 = gsap.timeline({
  scrollTrigger: {
    trigger: ".page1",
    start: "top 30%",
    end: "bottom 130%",
    // markers: true,
    scrub: 1,
  },
});

tl2
  .to(
    ".page1 img",
    {
      scale: "1",
      duration: 2,
    },
    "page1"
  )
  .to(
    ".page1-content",
    {
      opacity: "1",
      duration: 2,
    },
    "page1"
  );

const tl3 = gsap.timeline({
  scrollTrigger: {
    trigger: ".page2",
    start: "top 30%",
    end: "bottom 160%",
    markers: true,
    scrub: 1,
  },
});

tl3
  .to("body", {
    backgroundColor: "#ffebdf",
  })
  .to(".page2 h1", {
    color: "#101010",
  });
