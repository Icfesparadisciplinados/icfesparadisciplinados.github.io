const back = document.querySelector(".back");

back.addEventListener("mouseenter", function() {
  back.src = "/img/backHV.svg"
});

back.addEventListener("mouseleave", function() {
  back.src = "/img/back.svg"
});