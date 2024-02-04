const back = document.querySelector(".back");

back.addEventListener("mouseenter", function() {
  back.src = "/img/backHV.svg"
});

back.addEventListener("mouseleave", function() {
  back.src = "/img/back.svg"
});

function ajustarDesplegables(numero){
  const tit = document.querySelector(`.t${numero}`)
  const con = document.querySelector(`.c${numero}`).style
  con.display = "none"
  tit.addEventListener("click", () => {
    if (con.display == "none") {
      con.display = "block"
    } else {
      con.display = "none"
    }
  })
}

for (let i = 1; i <= 13; i++) {
  ajustarDesplegables(i)
}