/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  let carta = ["A", 2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K"];
  let palos = ["♦", "♥", "♠", "♣"];

  function numeroAleatorio(arr) {
    const aletoria = Math.floor(Math.random() * arr.length);
    return aletoria;
  }

  let cartaRandom = carta[numeroAleatorio(carta)];
  let paloRandom = palos[numeroAleatorio(palos)];
  let classes = document.getElementsByClassName("suits");

  for (let i = 0; i < classes.length; i++) {
    classes[i].innerHTML = paloRandom;
    if (paloRandom === "♦" || paloRandom === "♥") {
      classes[i].classList.add("text-danger");
    }
  }

  console.log(cartaRandom);
  document.getElementById("cards").innerHTML = cartaRandom;
};
