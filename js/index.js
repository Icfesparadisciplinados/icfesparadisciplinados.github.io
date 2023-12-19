const background = document.querySelector(".background")

const backgroundTween = gsap.timeline()

backgroundTween.to(background, {
  backgroundSize: "150px",
  duration: 0.5,
  ease: "power2.inOut",
})

backgroundTween.to(background, {
  backgroundSize: "200px",
  duration: 0.5,
  ease: "power2.outIn",
})

backgroundTween.repeat(-1)