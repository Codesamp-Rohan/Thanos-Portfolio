function mouseHover() {
  var circle = document.querySelector(".circle");

  window.addEventListener("mousemove", function (e) {
    circle.style.left = e.pageX + "px";
    circle.style.top = e.pageY + "px";
  });
}

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

mouseHover();
revealSpan();

const large = document.querySelector(".GobarDhan");

const ball = document.querySelector(".circle");
large.addEventListener("mousemove", function (e) {
  gsap.to(ball, {
    scale: 4,
  });
});
large.addEventListener("mouseleave", function (e) {
  gsap.to(ball, {
    scale: 1,
  });
});

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
    // markers: true,
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

const tl4 = gsap.timeline({
  scrollTrigger: {
    trigger: ".page3",
    start: "top 30%",
    end: "bottom 160%",
    // markers: true,
    scrub: 1,
  },
});

tl4
  .to("body", {
    backgroundColor: "#000",
  })
  .to(".page3 img", {
    scale: 1,
  });
