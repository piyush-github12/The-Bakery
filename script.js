gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true,
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy("#main", {
  scrollTop(value) {
    return arguments.length
      ? locoScroll.scrollTo(value, 0, 0)
      : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {
      top: 0,
      left: 0,
      width: window.innerWidth,
      height: window.innerHeight,
    };
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector("#main").style.transform
    ? "transform"
    : "fixed",
});


// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll.
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();






gsap.from("#parah1", {
  x: 200,
  duration: 1,
  delay:2,
  opacity:0
});

gsap.from("#parah12", {
  x: -300,
  duration: 1,
  delay: 2,
  opacity: 0,
});

gsap.from("#page1 #nav h3", {
  y: -40,
  duration: 1,
  delay: 1,
  stagger: 0.1,
  opacity: 0,
});



gsap.from("#cust #custh1first",{
  x:-200,
  opacity:0,
  scrollTrigger:{
    scroller:"#main",
    trigger:"#cust",
    // markers:true,
    start:"top 80%",
    end:"top 30%",
    scrub:true

  }
})


gsap.from("#cust #custh1second", {
  x: 200,
  opacity: 0,

  scrollTrigger: {
    scroller: "#main",
    trigger: "#cust",
    // markers: true,
    start: "top 80%",
    end: "top 30%",
    scrub: true,
  },
});

var cross = document.querySelector("#rightbag #cross");
var baske = document.querySelector("#baske");

baske.addEventListener("click", function () {
  gsap.to("#rightbag", {
    right: 0,
  });
});

cross.addEventListener("click", function () {
  gsap.to("#rightbag", {
    right: "-31vw",
  });
});

var information = document.querySelectorAll(".information");

// information.addEventListener("click",function(){
//   console.log("boss")
// })

information.forEach(function (e) {
  var informationbox = e.querySelector(".informationbox");

  e.addEventListener("mouseenter", function (dets) {
    informationbox.style.display = "block";
  });

  e.addEventListener("mouseleave", function (dets) {
    informationbox.style.display = "none";
  });
});
