// let speed = document.getElementById("speed");

// let speedVal = speed.value;

// console.log(speedVal);

// speed.addEventListener("input", calcSpeedVal);

// let num = 0;

// // function calcSpeedVal() {
// //   speedVal = speed.value;
// //   console.log(speedVal);
// //   num = 1;
// //   console.log(num);
// // }

// GSAP

gsap.to(".content", {
  duration: 7,
  rotate: -360,
  repeat: -1,
  ease: "none",
});

gsap.to(".item ", {
  duration: 2,
  rotate: 360,
  repeat: -1,
  ease: "none",
});
